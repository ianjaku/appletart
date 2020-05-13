import makeReactive from "./makeReactive";

export type listenerCallback = (newValue: any, oldValue: any) => any;

const _listeners: {[path: string]: listenerCallback[]} = {}

let _globalState: any = null;

export function createGlobalStore<State>(state: State) {
  _globalState = makeReactive(state)
  return _globalState
}

export function createStore<State>(state: State) {
  return makeReactive(state)
}

export function getGlobalState() {
  return _globalState;
}

export function addListener(path: string, callback: listenerCallback) {
  if (_listeners[path] == null) {
    _listeners[path] = [callback]
  } else {
    _listeners[path].push(callback)
  }
}

export default {
  createStore,
  addListener,
  getGlobalState
}
