import makeReactive from "./makeReactive";

export type listenerCallback = (newValue: any, oldValue: any) => any;

const _listeners: {[path: string]: listenerCallback[]} = {}

let _state = makeReactive({}, onChangeHandler);

export function createStore<State>(state: State) {
  _state = makeReactive(state, onChangeHandler)

  return {
    state: _state,
    listen: addListener
  }
}

export function getState() {
  return _state;
}

export function addListener(path: string, callback: listenerCallback) {
  if (_listeners[path] == null) {
    _listeners[path] = [callback]
  } else {
    _listeners[path].push(callback)
  }
}

function onChangeHandler(path: string, oldValue: string, newValue: string) {
  const listeners = _listeners[path]
  if (listeners == null || listeners.length === 0) return

  for (let listener of listeners) {
    listener(newValue, oldValue)
  }
}

export default {
  createStore,
  addListener,
  getState
}
