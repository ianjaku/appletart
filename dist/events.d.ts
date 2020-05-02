export declare type createEventHandlersFunction = (listeners: {
    [key: string]: eventListener;
}) => any;
export declare type eventListener = (event: Event, element: HTMLElement) => void;
declare function createEventHandler(): {
    createEventListeners: (listeners: {
        [key: string]: eventListener;
    }) => void;
    registerElement: (el: HTMLElement) => void;
};
declare const _default: {
    createEventHandler: typeof createEventHandler;
};
export default _default;
