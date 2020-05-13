import { ControllerContext } from './controller';
export interface Plugin {
    onControllerInit(controllerContext: ControllerContext): Promise<ControllerContext>;
}
export declare function installPlugin(): void;
declare const _default: {};
export default _default;
