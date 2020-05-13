import { context } from './controller';
export declare type plugin<ControllerState, GlobalState> = (controllerContext: context<ControllerState, GlobalState>, params: any) => any;
declare function createPlugin<ControllerState, GlobalState>(pluginCallback: plugin<ControllerState, GlobalState>): plugin<ControllerState, GlobalState>;
declare const _default: {
    createPlugin: typeof createPlugin;
};
export default _default;
