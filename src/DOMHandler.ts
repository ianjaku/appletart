import ChangeHandler from "./ChangeHandler";

function registerElements<State>(els: HTMLElement[], changeHandler: ChangeHandler<State>) {
  els.forEach(el => registerElement<State>(el, changeHandler))
}

function registerElement<State>(el: HTMLElement, changeHandler: ChangeHandler<State>) {
  registerBinds(el, changeHandler)
  registerActions(el, changeHandler)
}

function registerBinds<State>(el: HTMLElement, changeHandler: ChangeHandler<State>) {
  const elsWithBind = el.querySelectorAll<HTMLElement>("[data-bind]")

  elsWithBind.forEach((elWithBind: HTMLElement) => {
    if (!elWithBind.dataset.bind) return // To make typescript happy, we already know it has data-bind
    const bind = elWithBind.dataset.bind
    changeHandler.registerBind(bind, elWithBind)
  })
}

function registerActions<State>(el: HTMLElement, changeHandler: ChangeHandler<State>) {
  const elswithAction = el.querySelectorAll<HTMLElement>("[data-action]")

  elswithAction.forEach((elWithAction: HTMLElement) => {
    for (const dataKey in elWithAction.dataset) {
      if (dataKey.startsWith("on")) {
        const eventTypeName = dataKey.slice(2).toLowerCase()
        elWithAction.addEventListener(eventTypeName, (event: Event) => {
          const action = elWithAction.dataset[dataKey]
          if (action == null) return
          changeHandler.callAction(action, event)
        })
      }
    }
  })
}

function resolveElementsOrString(
  val: null | string | HTMLElement | NodeListOf<HTMLElement>
): HTMLElement[] {
  if (val == null) {
    const body = document.querySelector("body")
    if (body == null) {
      throw Error("Couldn't define a scope, no scope given and body not found.")
    }
    return [body]
  }
  if (typeof val === "string") {
    const els = document.querySelectorAll<HTMLElement>(val)
    return Array.from(els)
  }
  if ("forEach" in val) {
    return Array.from(val)
  }
  return [val]
}

export default {
  registerElements,
  registerElement,
  resolveElementsOrString
}
