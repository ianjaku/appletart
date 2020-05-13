export declare type ListenerCallback = (newValue: any, oldvalue: any) => any;
export interface ChangeHandler {
    dataChanged: (path: string, newValue: any, oldValue: any) => any;
    listen: (path: string, callback: ListenerCallback) => any;
}
export declare function createChangeHandler(): ChangeHandler;
export declare function listen(data: any, callback: ListenerCallback): void;
declare const _default: {
    create: typeof createChangeHandler;
    listen: typeof listen;
};
export default _default;
