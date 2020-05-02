declare type onElementRemoved = (el: HTMLElement) => any;
declare type onElementAdded = (el: HTMLElement) => any;
declare function createDOMObserver({ elementAdded, elementRemoved }: {
    elementAdded: onElementAdded;
    elementRemoved: onElementRemoved;
}): {
    observe: (el: HTMLElement) => void;
};
declare const _default: {
    createDOMObserver: typeof createDOMObserver;
};
export default _default;
