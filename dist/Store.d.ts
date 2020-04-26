export declare type actions<State> = {
    [actionName: string]: (state: State, event: Event) => void | Promise<void>;
};
export declare type builders<State> = {
    [builderName: string]: (state: State, element: HTMLElement) => any;
};
export interface StoreParams<State> {
    state: State;
    actions: actions<State>;
    builders: builders<State>;
}
declare class Store<State> {
    private changeHandler;
    constructor(storeParams: StoreParams<State>, scope?: null | string | HTMLElement | NodeListOf<HTMLElement>);
    get state(): State;
}
export default Store;
