declare type listenerCallback = (oldValue: any, newValue: any) => any;
export declare function createStore<State>(state: State): {
    state: State;
    listen: typeof addListener;
};
export declare function addListener(path: string, callback: listenerCallback): void;
declare const _default: {
    createStore: typeof createStore;
    addListener: typeof addListener;
};
export default _default;
