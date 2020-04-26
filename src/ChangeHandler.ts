import Store, { StoreParams, actions, builders } from "./Store";
import reactivityHandler from "./reactivityHandler";
import DOMHandler from "./DOMHandler";
import GarbageCollector from "./GarbageCollector";

type binds = {[bind: string]: HTMLElement[]}

class ChangeHandler<State> {

  private state: State
  private binds: binds = {}

  private actions: actions<State>
  private builders: builders<State>

  private garbageCollector: GarbageCollector<State>
  
  constructor(
    storeParams: StoreParams<State>,
    targetElements: HTMLElement[]
  ) {
    this.builders = storeParams.builders
    this.actions = storeParams.actions
    this.state = reactivityHandler.makeReactive<State>(
      storeParams.state,
      this,
      ""
    )
    DOMHandler.registerElements(targetElements, this) 
    this.garbageCollector = new GarbageCollector((removedEl) => {
      const bind = removedEl.dataset.bind
      if (bind == null || this.binds[bind] == null) return
      this.binds[bind] = this.binds[bind].filter(boundEl => boundEl !== removedEl)
    })
    this.garbageCollector.registerElements(targetElements)
  }

  public setState(state: State) {
    this.state = state
  }

  public registerChange(bind: string, newValue: string) {
    const els = this.binds[bind]
    if (els == null) return
    const values = Object.values(els)
    values.forEach((el: HTMLElement) => {
      if (el == null) return
      const builderName = el.dataset.builder
      let newElValue = newValue
      if (builderName != null) {
        const builder = this.builders[builderName]
        if (builder != null) {
          builder(this.state, el)
          return
          // newElValue = builder(this.state)
        }
      }
      // if (el.tagName.toUpperCase() === 'INPUT') {
      if ("value" in el) {
        // @ts-ignore
        el.value = newElValue
      } else {
        el.innerHTML = newElValue
      }
    })
    DOMHandler.registerElements(values, this);
  }

  public registerBind(bind: string, el: HTMLElement) {
    if (this.binds[bind] == null) {
      this.binds[bind] = [el]
    } else {
      this.binds[bind].push(el)
    }
  }

  public callAction(action: string, event: Event) {
    if (this.actions[action] == null) return
    this.actions[action](this.state, event)
  }

  public getState() {
    return this.state
  }
}

export default ChangeHandler
