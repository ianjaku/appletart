import ChangeHandler from "./ChangeHandler"

class GarbageCollector<State> {

  private mutationObserver: MutationObserver

  constructor(callback: (el: HTMLElement) => any) {
    this.mutationObserver = new MutationObserver((mutations) => {
      mutations.forEach(mutation => {
        mutation.removedNodes.forEach(removedNode => {
          if (!("dataset" in removedNode)) return
          const node: any = removedNode
          const dataset = node.dataset
          if (dataset.bind == null) return
          callback(removedNode)
        });
      })
    })
  }

  public registerElements(els: HTMLElement[]) {
    els.forEach(el => this.registerElement(el))
  }

  public registerElement(el: HTMLElement) {
    this.mutationObserver.observe(el, { childList: true, subtree: true })
  }
  
}

export default GarbageCollector
