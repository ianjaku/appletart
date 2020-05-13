import { createEventHandlersFunction } from './events';
import { extension } from './extensions';
declare type controller<ControllerState, GlobalState> = (state: context<ControllerState, GlobalState>) => any;
declare type itemsMap = {
    [item: string]: HTMLElement;
};
export declare type context<ControllerState, GlobalState> = {
    items: itemsMap;
    on: createEventHandlersFunction;
    controllerEl: HTMLElement;
    extend: (extension: extension<ControllerState, GlobalState>, data: any) => any;
};
export declare function createController<ControllerState, GlobalState>(name: string, controller: controller<ControllerState, GlobalState>): void;
declare const _default: {
    createController: typeof createController;
};
export default _default;
