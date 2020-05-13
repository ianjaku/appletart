import { context } from './controller';

export type extension = (controllerContext: context, params: any) => any;

function createExtension(extensionCallback: extension) {
  return extensionCallback
}

export default {
  createExtension
}
