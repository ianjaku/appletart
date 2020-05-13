type onActionCallback = (eventType: string, event: Event) => any;

function runAfterDOMLoaded(callback: () => any) {
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", () => {
      callback()
    })
  } else {
    callback()
  }
}

function findControllers(scope: HTMLElement | Document = document): HTMLElement[] {
  return Array.from(scope.querySelectorAll("[data-controller]"))
}

function findItems(scope: HTMLElement | Document = document): HTMLElement[] {
  return Array.from(scope.querySelectorAll("[data-item]"))
}

export default {
  runAfterDOMLoaded,
  findControllers,
  findItems
}
