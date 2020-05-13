import { ControllerContext } from './controller'

const _plugins: Plugin[] = []

export interface Plugin {
  beforeControllerInit(controllerContext: ControllerContext): Promise<ControllerContext>;
}

export function installPlugin(plugin: Plugin) {
  _plugins.push(plugin)
}

export function getPlugins() {
  return _plugins
}

export default {
  getPlugins,
  installPlugin
}
