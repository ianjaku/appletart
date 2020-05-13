import { ControllerContext } from './controller';
export interface Plugin {
    beforeControllerInit(controllerContext: ControllerContext): Promise<ControllerContext>;
}
export declare function installPlugin(plugin: Plugin): void;
export declare function getPlugins(): Plugin[];
declare const _default: {
    getPlugins: typeof getPlugins;
    installPlugin: typeof installPlugin;
};
export default _default;
