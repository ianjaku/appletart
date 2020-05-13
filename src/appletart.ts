import controller from './controller'
import _debounce from './debounce'

export const createController = controller.createController
export const debounce = _debounce

export default {
  createController: controller.createController,
  debounce: _debounce,
}
