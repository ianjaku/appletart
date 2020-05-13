import dom from './dom'
import events, { createEventHandlersFunction } from './events'
import domObserver from './domObserver'
import { extension } from './extensions'
import { getPlugins } from './plugins';

type controller = (context: ControllerContext) => any;
type itemsMap = {[item: string]: HTMLElement}

export interface ControllerContext {
  items: itemsMap;
  on: createEventHandlersFunction;
  controllerEl: HTMLElement;
  extend: (extension: extension, data: any) => Promise<any>;
};

const _controllers: {[name: string]: controller} = {}

export function createController(name: string, controller: controller) {
  if (_controllers[name] != null) {
    throw Error(`Controller with name ${name} was defined twice.`);
  }
  _controllers[name] = controller
}

function init() {
  const controllerElements = dom.findControllers()

  controllerElements.forEach(async controllerEl => {
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

    let context = {
      items: itemsMap,
      on: eventHandler.createEventListeners,
      controllerEl,
      extend: initExtension
    }

    for (const plugin of getPlugins()) {
      context = await plugin.beforeControllerInit(context)
    }

    controller(context)

    for (const itemEl of itemsList) {
      eventHandler.registerElement(itemEl)
    }

    function initExtension(extension: extension, params: any) {
      return extension(context, params)
    }
  })
  
}

dom.runAfterDOMLoaded(init)

export default {
  createController
}
