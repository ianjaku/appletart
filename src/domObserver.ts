
type onElementRemoved = (el: HTMLElement) => any;
type onElementAdded = (el: HTMLElement) => any; 

function createDOMObserver({elementAdded, elementRemoved}: {elementAdded: onElementAdded, elementRemoved: onElementRemoved}) {
  const mutationObserver = new MutationObserver((mutations) => {
    mutations.forEach(mutation => {
      if (mutation.addedNodes != null) {
        mutation.addedNodes.forEach(addedNode => {
          if (addedNode.nodeType !== 1) return
          // @ts-ignore
          elementAdded(addedNode)
        })
      }

      if (mutation.removedNodes != null) {
        mutation.removedNodes.forEach(removedNode => {
          if (removedNode.nodeType !== 1) return
          // @ts-ignore
          elementRemoved(removedNode)
        })
      }
    })
  })

  function observe(el: HTMLElement) {
    mutationObserver.observe(el, { childList: true, subtree: true })
  }

  return { observe }
}

export default {
  createDOMObserver
}
