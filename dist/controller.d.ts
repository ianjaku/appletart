import { listenerCallback } from './store';
import { createEventHandlersFunction } from './events';
declare type controller<State> = (state: context<State>) => any;
declare type itemsMap = {
    [item: string]: HTMLElement;
};
declare type context<State> = {
    state: State;
    items: itemsMap;
    on: createEventHandlersFunction;
    listen: (path: string, callback: listenerCallback) => any;
};
export declare function createController<State>(name: string, controller: controller<State>): void;
declare const _default: {
    createController: typeof createController;
};
export default _default;
