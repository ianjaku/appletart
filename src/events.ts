
export type createEventHandlersFunction = (listeners: {[key: string]: eventListener}) => any;
export type eventListener = (event: Event, element: HTMLElement) => void;


function createEventHandler() {
  const _eventListeners: {[key: string]: eventListener} = {}

  function createEventListeners(listeners: {[key: string]: eventListener}) {
    for (let key of Object.keys(listeners)) {
      _eventListeners[key] = listeners[key]
    }
  }

  function registerElement(el: HTMLElement) {
    if (el.dataset == null) return
    for (const datasetKey of Object.keys(el.dataset)) {
      if (!datasetKey.startsWith("on:")) continue
      const listenerName = el.dataset[datasetKey]
      if (listenerName == null) continue

      const eventType = datasetKey.split(":")[1].toLowerCase()
      registerActionListener(eventType, el, listenerName)
    }
  }

  function registerActionListener(eventType: string, el: HTMLElement, listenerName: string) {
    el.addEventListener(eventType, (event) => {
      const eventListener = _eventListeners[listenerName]
      if (eventListener == null) return

      eventListener(event, el)
    })
  }

  return {
    createEventListeners,
    registerElement
  }
  
}


export default {
  createEventHandler
}