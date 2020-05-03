import store from './store'
import controller from './controller'
import _debounce from './debounce'

export const createStore = store.createStore
export const listen = store.addListener
export const createController = controller.createController
export const debounce = _debounce

export default {
  createStore: store.createStore,
  listen: store.addListener,
  createController: controller.createController,
  debounce: _debounce
}

