import { createEventHandlersFunction } from './events';
import { extension } from './extensions';
declare type controller<ControllerState, GlobalState> = (state: ControllerContext) => any;
declare type itemsMap = {
    [item: string]: HTMLElement;
};
export interface ControllerContext {
    items: itemsMap;
    on: createEventHandlersFunction;
    controllerEl: HTMLElement;
    extend: (extension: extension, data: any) => Promise<any>;
}
export declare function createController<ControllerState, GlobalState>(name: string, controller: controller<ControllerState, GlobalState>): void;
declare const _default: {
    createController: typeof createController;
};
export default _default;
