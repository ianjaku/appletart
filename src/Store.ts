import ChangeHandler from "./ChangeHandler"
import reactivityHandler from "./reactivityHandler"
import DOMHandler from "./DOMHandler"

export type actions<State> = {[actionName: string]: (state: State, event: Event) => void | Promise<void>}
export type builders<State> = {[builderName: string]: (state: State, element: HTMLElement) => any}

export interface StoreParams<State> {
  state: State,
  actions: actions<State>,
  builders: builders<State>
}

class Store<State> {

  private changeHandler: ChangeHandler<State>
  
  constructor(
    storeParams: StoreParams<State>,
    scope: null | string | HTMLElement | NodeListOf<HTMLElement> = null
  ) {
    const targetElements = DOMHandler.resolveElementsOrString(scope)
    this.changeHandler = new ChangeHandler(storeParams, targetElements)
  }

  public get state() {
    return this.changeHandler.getState()
  }
}

export default Store