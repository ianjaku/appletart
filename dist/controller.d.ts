import { listenerCallback } from './store';
import { createEventHandlersFunction } from './events';
import { plugin } from './plugins';
declare type controller<ControllerState, GlobalState> = (state: context<ControllerState, GlobalState>) => any;
declare type itemsMap = {
    [item: string]: HTMLElement;
};
export declare type context<ControllerState, GlobalState> = {
    controllerState: ControllerState;
    globalState: GlobalState;
    items: itemsMap;
    on: createEventHandlersFunction;
    listen: (path: string, callback: listenerCallback) => any;
    controllerEl: HTMLElement;
    plugin: (plugin: plugin<ControllerState, GlobalState>, data: any) => any;
};
export declare function createController<ControllerState, GlobalState>(name: string, controller: controller<ControllerState, GlobalState>): void;
declare const _default: {
    createController: typeof createController;
};
export default _default;
