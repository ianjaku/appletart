import store from './store'
import controller from './controller'
import _debounce from './debounce'
import _makeReactive from './makeReactive'
import changeHandler from './changeHandler'

export const createStore = store.createStore
export const listen = changeHandler.listen
export const createController = controller.createController
export const debounce = _debounce
export const makeReactive = _makeReactive

export default {
  createStore: store.createStore,
  listen: changeHandler.listen,
  createController: controller.createController,
  debounce: _debounce,
  makeReactive: _makeReactive
}

