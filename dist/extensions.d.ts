import { ControllerContext } from './controller';
export declare type extension = (controllerContext: ControllerContext, params: any) => any;
declare function createExtension(extensionCallback: extension): extension;
declare const _default: {
    createExtension: typeof createExtension;
};
export default _default;
