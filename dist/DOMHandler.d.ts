import ChangeHandler from "./ChangeHandler";
declare function registerElements<State>(els: HTMLElement[], changeHandler: ChangeHandler<State>): void;
declare function registerElement<State>(el: HTMLElement, changeHandler: ChangeHandler<State>): void;
declare function resolveElementsOrString(val: null | string | HTMLElement | NodeListOf<HTMLElement>): HTMLElement[];
declare const _default: {
    registerElements: typeof registerElements;
    registerElement: typeof registerElement;
    resolveElementsOrString: typeof resolveElementsOrString;
};
export default _default;
