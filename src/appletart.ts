import controller from './controller'
import plugins from './plugins'

export const createController = controller.createController
export const installPlugin = plugins.installPlugin

export default {
  createController: controller.createController,
  installPlugin: plugins.installPlugin
}
