export declare type listenerCallback = (newValue: any, oldValue: any) => any;
export declare function createGlobalStore<State>(state: State): any;
export declare function createStore<State>(state: State): State;
export declare function getGlobalState(): any;
export declare function addListener(path: string, callback: listenerCallback): void;
declare const _default: {
    createStore: typeof createStore;
    addListener: typeof addListener;
    getGlobalState: typeof getGlobalState;
};
export default _default;
