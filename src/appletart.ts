import store from './store'
import controller from './controller'

export const createStore = store.createStore
export const listen = store.addListener
export const createController = controller.createController
export default {
  createStore: store.createStore,
  listen: store.addListener,
  createController: controller.createController
}

