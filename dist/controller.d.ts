import { listenerCallback } from './store';
import { createEventHandlersFunction } from './events';
import { plugin } from './plugins';
declare type controller<State> = (state: context<State>) => any;
declare type itemsMap = {
    [item: string]: HTMLElement;
};
export declare type context<State> = {
    state: State;
    items: itemsMap;
    on: createEventHandlersFunction;
    listen: (path: string, callback: listenerCallback) => any;
    controllerEl: HTMLElement;
    plugin: (plugin: plugin<State>, data: any) => any;
};
export declare function createController<State>(name: string, controller: controller<State>): void;
declare const _default: {
    createController: typeof createController;
};
export default _default;
