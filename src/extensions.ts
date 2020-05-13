import { context } from './controller';

export type extension<ControllerState, GlobalState> = (controllerContext: context<ControllerState, GlobalState>, params: any) => any;

function createExtension<ControllerState, GlobalState>(extensionCallback: extension<ControllerState, GlobalState>) {
  return extensionCallback
}

export default {
  createExtension
}
