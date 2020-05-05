import store, { listenerCallback } from './store'
import dom from './dom'
import events, { createEventHandlersFunction } from './events'
import domObserver from './domObserver'
import { plugin } from './plugins'
import makeReactive from './makeReactive'

type controller<State> = (state: context<State>) => any;
type itemsMap = {[item: string]: HTMLElement}
export type context<State> = {
  state: State;
  items: itemsMap;
  on: createEventHandlersFunction;
  listen: (path: string, callback: listenerCallback) => any;
  controllerEl: HTMLElement;
  plugin: (plugin: plugin<State>, data: any) => any;
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

    const context = {
      state: store.getState(),
      items: itemsMap,
      on: eventHandler.createEventListeners,
      listen: store.addListener,
      controllerEl,
      plugin: initPlugin
    }

    controller(context)

    for (const itemEl of itemsList) {
      eventHandler.registerElement(itemEl)
    }

    function initPlugin(plugin: plugin<any>, params: any) {
      plugin(context, params)
    }
  })
  
}

dom.runAfterDOMLoaded(init)

export default {
  createController
}
