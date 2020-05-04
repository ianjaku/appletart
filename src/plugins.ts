import { context } from './controller';

export type plugin<State> = (controllerContext: context<State>, params: any) => any;

function createPlugin<State>(pluginCallback: plugin<State>) {
  return pluginCallback
}

export default {
  createPlugin
}
