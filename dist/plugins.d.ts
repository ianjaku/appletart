import { context } from './controller';
export declare type plugin<State> = (controllerContext: context<State>, params: any) => any;
declare function createPlugin<State>(pluginCallback: plugin<State>): plugin<State>;
declare const _default: {
    createPlugin: typeof createPlugin;
};
export default _default;
