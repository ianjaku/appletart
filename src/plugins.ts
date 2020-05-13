import { ControllerContext } from './controller'

const _plugins: Plugin[] = []

export interface Plugin {
  onControllerInit(controllerContext: ControllerContext): Promise<ControllerContext>;
}

export function installPlugin(plugin: Plugin) {
  _plugins.push(plugin)
}

export default {
  getPlugin() {
    return _plugins;
  },
  installPlugin
}
