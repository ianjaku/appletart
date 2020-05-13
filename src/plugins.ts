import { context } from './controller';

export type plugin<ControllerState, GlobalState> = (controllerContext: context<ControllerState, GlobalState>, params: any) => any;

function createPlugin<ControllerState, GlobalState>(pluginCallback: plugin<ControllerState, GlobalState>) {
  return pluginCallback
}

export default {
  createPlugin
}
