declare class GarbageCollector<State> {
    private mutationObserver;
    constructor(callback: (el: HTMLElement) => any);
    registerElements(els: HTMLElement[]): void;
    registerElement(el: HTMLElement): void;
}
export default GarbageCollector;
