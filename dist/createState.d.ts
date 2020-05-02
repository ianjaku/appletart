declare type listenerCallback = (oldValue: any, newValue: any) => any;
export default function createState<State>(state: State): {
    state: State;
    listen: typeof addListener;
};
export declare function addListener(path: string, callback: listenerCallback): void;
export {};
