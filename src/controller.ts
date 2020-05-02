import store, { listenerCallback } from './store'
import dom from './dom'
import events, { createEventHandlersFunction } from './events'
import domObserver from './domObserver'

type controller<State> = (state: context<State>) => any;
type itemsMap = {[item: string]: HTMLElement}
type context<State> = {
  state: State;
  items: itemsMap;
  on: createEventHandlersFunction;
  listen: (path: string, callback: listenerCallback) => any;
};

const _controllers: {[name: string]: controller<any>} = {}

export function createController<State>(name: string, controller: controller<State>) {
  if (_controllers[name] != null) {
    throw Error(`Controller with name ${name} was defined twice.`);
  }
  _controllers[name] = controller
}

function init() {
  const controllerElements = dom.findControllers()

  controllerElements.forEach(controllerEl => {
    const controllerName = controllerEl.dataset.controller
    if (controllerName == null) return

    const controller = _controllers[controllerName]
    if (controller == null) return

    const eventHandler = events.createEventHandler()
    const itemsList = dom.findItems(controllerEl)
    const itemsMap = itemsList.reduce<itemsMap>((acc: itemsMap, itemEl: HTMLElement) => {
      const name = itemEl.dataset.item
      if (name == null || name === "") return acc
      acc[name] = itemEl
      return acc
    }, {})

    eventHandler.registerElement(controllerEl)

    const observer = domObserver.createDOMObserver({
      elementAdded(el: HTMLElement) {
        eventHandler.registerElement(el)
        const item = el.dataset?.item
        if (item == null) return
        itemsMap[item] = el
      },
      elementRemoved(el: HTMLElement) {
        const item = el.dataset?.item
        if (item == null) return
        if (itemsMap[item] == el) {
          delete itemsMap[item]
        }
      }
    })
    observer.observe(controllerEl)

    controller({
      state: store.getState(),
      items: itemsMap,
      on: eventHandler.createEventListeners,
      listen: store.addListener
    })

    for (const itemEl of itemsList) {
      eventHandler.registerElement(itemEl)
    }
  })
  
}

dom.runAfterDOMLoaded(init)

export default {
  createController
}
