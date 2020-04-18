type actions<State> = {[actionName: string]: (state: State, event: any) => void | Promise<void>}
type builders<State> = {[builderName: string]: (state: State) => string | Promise<string>}

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

  const bindMap: BindMap = findElementsWithDataBind(scopeEls)
  
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
        let elNewValue = value
        const builder = el.dataset.builder
        if (builder != null && builder in builders) {
          // TODO: cache builders
          elNewValue = builders[builder](state)
        }
        setValueOfHTMLElement(el, elNewValue)
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
    const els = el.querySelectorAll<HTMLElement>("[data-call]")
    els.forEach((callEl: HTMLElement) => {
      const data = callEl.dataset.call
      if (data == null) return
      const tokens: string[] = data.split(".")
      if (tokens.length != 2) {
        console.error(`data-call should always have 2 parameters separated by a "." example: data-call="input.someAction"`)
        return
      }
      const eventName = tokens[0]
      const actionName = tokens[1]
      if (!(actionName in actions)) return
      callEl.addEventListener(eventName, (event: Event) => {
        actions[actionName](reactiveState, event)
      })
    })
  })
}

function findElementsWithDataBind(scopeEls: NodeListOf<HTMLElement>) {
  let bindMap: BindMap = {}
  scopeEls.forEach((el: HTMLElement) => {
    bindMap = findElementsWithDataBindInScopeEl(el, bindMap)
  })
  return bindMap
}

function findElementsWithDataBindInScopeEl(scopeEl: HTMLElement, bindMap: BindMap) {
  const els = scopeEl.querySelectorAll<HTMLElement>("[data-bind]")
  els.forEach((boundEl: HTMLElement) => {
    const bindProp = boundEl.dataset.bind
    if (bindProp != null) {
      if (bindMap[bindProp] == null) {
        bindMap[bindProp] = [boundEl]
      } else {
        bindMap[bindProp].push(boundEl)
      }
    }
  })
  return bindMap
}

function setValueOfHTMLElement(el: HTMLElement, value: string) {
  // TODO: use value or appendChild depending on the type of el & value. 
  // value can also be a node or nodelist
  el.innerHTML = value
}

export default { store }