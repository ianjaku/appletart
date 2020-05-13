import { ControllerContext } from './controller';

export type extension = (controllerContext: ControllerContext, params: any) => any;

function createExtension(extensionCallback: extension) {
  return extensionCallback
}

export default {
  createExtension
}
