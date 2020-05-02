declare function runAfterDOMLoaded(callback: () => any): void;
declare function findControllers(scope?: HTMLElement | Document): HTMLElement[];
declare function findItems(scope?: HTMLElement | Document): HTMLElement[];
declare const _default: {
    runAfterDOMLoaded: typeof runAfterDOMLoaded;
    findControllers: typeof findControllers;
    findItems: typeof findItems;
};
export default _default;
