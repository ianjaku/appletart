import { context } from './controller';
export declare type extension<ControllerState, GlobalState> = (controllerContext: context<ControllerState, GlobalState>, params: any) => any;
declare function createExtension<ControllerState, GlobalState>(extensionCallback: extension<ControllerState, GlobalState>): extension<ControllerState, GlobalState>;
declare const _default: {
    createExtension: typeof createExtension;
};
export default _default;
