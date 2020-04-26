import { StoreParams } from "./Store";
declare class ChangeHandler<State> {
    private state;
    private binds;
    private actions;
    private builders;
    private garbageCollector;
    constructor(storeParams: StoreParams<State>, targetElements: HTMLElement[]);
    setState(state: State): void;
    registerChange(bind: string, newValue: string): void;
    registerBind(bind: string, el: HTMLElement): void;
    callAction(action: string, event: Event): void;
    getState(): State;
}
export default ChangeHandler;
