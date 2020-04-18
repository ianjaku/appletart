type actions<State> = {[actionName: string]: (state: State, el: HTMLElement, meta: {isInit: boolean}) => void | Promise<void>}
type builders<State> = {[builderName: string]: (state: State) => string}

export interface Server<State> {
  state: State,
  actions: actions<State>,
  builders: builders<State>
}

export interface BindMap {
  [prop: string]: HTMLElement[]
}

export function store<State>(server: Server<State>, scope: string | null = null) {
  let scopeEls: any
  if (scope == null) {
    document.querySelectorAll
    scopeEls = [document]
  } else {
    scopeEls = document.querySelectorAll<HTMLElement>(scope)
  }

  const bindMap: BindMap = findElementsWithDataBind<State>(scopeEls, server.state, server.builders)
  
  const reactiveState = makeReactive(server.state, server.builders, bindMap)
  makeCallListeners(reactiveState, server.actions, scopeEls)
  return reactiveState
}

function makeReactive<State>(state: State, builders: builders<State>, bindMap: BindMap) {
  const handlers = { set: createSetHandler<State>(state, builders, bindMap) }
  return new Proxy(state, handlers)
}

function createSetHandler<State>(state: State, builders: builders<State>, bindMap: BindMap) {
  return (obj: any, prop: string, value: any): boolean => {
    obj[prop] = value

    if (prop in bindMap) {
      const boundEls = bindMap[prop]
      boundEls.forEach((el: HTMLElement) => {
        setValueOfHTMLElement(el, value, builders, el.dataset.builder, state)
      })
    }

    return true
  }
}

function makeCallListeners<State>(
  reactiveState: State, 
  actions: actions<State>,
  scopedEls: NodeListOf<HTMLElement>
) {
  scopedEls.forEach((el: HTMLElement) => {
    const els = el.querySelectorAll<HTMLElement>("[data-action]")
    els.forEach((callEl: HTMLElement) => {
      const data = callEl.dataset.action
      if (data == null) return
      const tokens: string[] = data.split(".")
      if (tokens.length != 2) {
        console.error(`data-action should always have 2 parameters separated by a "." example: data-action="input.someAction"`)
        return
      }
      const eventName = tokens[0]
      const actionName = tokens[1]
      if (!(actionName in actions)) return
      callEl.addEventListener(eventName, (event: Event) => {
        actions[actionName](reactiveState, callEl, {isInit: false})
      })
      if (callEl.dataset.init != null) {
        actions[actionName](reactiveState, callEl, {isInit: true})
      }
    })
  })
}

function findElementsWithDataBind<State>(scopeEls: NodeListOf<HTMLElement>, initialState: State, builders: builders<State>) {
  let bindMap: BindMap = {}
  scopeEls.forEach((el: HTMLElement) => {
    bindMap = findElementsWithDataBindInScopeEl<State>(el, bindMap, initialState, builders)
  })
  return bindMap
}

function findElementsWithDataBindInScopeEl<State>(
  scopeEl: HTMLElement,
  bindMap: BindMap,
  initialState: State,
  builders: builders<State>
) {
  const els = scopeEl.querySelectorAll<HTMLElement>("[data-bind]")
  els.forEach((boundEl: HTMLElement) => {
    const bindProp = boundEl.dataset.bind
    if (bindProp != null) {
      if (bindMap[bindProp] == null) {
        bindMap[bindProp] = [boundEl]
      } else {
        bindMap[bindProp].push(boundEl)
      }
      // Set initial state
      if (
        typeof bindProp === "string" &&
        typeof initialState === "object"
      ) {
        const s: any = initialState
        const val = s[bindProp]
        if (val != null) {
          setValueOfHTMLElement(boundEl, val, builders, boundEl.dataset.builder, initialState)
        }
      }
    }
  })
  return bindMap
}

function setValueOfHTMLElement<State>(
  el: HTMLElement,
  value: string,
  builders?: builders<State>,
  builder?: string,
  state?: State
) {
  if (builder != null && builders != null && state != null && builder in builders) {
    // TODO: cache builders
    value = builders[builder](state)
  }
  // TODO: use value or appendChild depending on the type of el & value. 
  // value can also be a node or nodelist
  el.innerHTML = value
}

export default { store }