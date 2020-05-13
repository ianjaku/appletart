export type ListenerCallback = (newValue: any, oldvalue: any) => any;

export interface ChangeHandler {
  dataChanged: (path: string, newValue: any, oldValue: any) => any; 
  listen: (path: string, callback: ListenerCallback) => any;
}

export function createChangeHandler(): ChangeHandler {
  const _listeners: {[path: string]: ListenerCallback[]} = {}
  
  return {
    dataChanged(path: string, newValue: any, oldValue: any) {
      if (_listeners[path] == null) return
      _listeners[path].forEach(callback => callback(newValue, oldValue))
    },
    listen(data: any, callback: ListenerCallback) {
      if (!('_reactive' in data)) {
        console.error("Can't listen to non reactive data. Can only listen to data coming from the store")
        return
      }
      const path = data._reactive.path
      if (_listeners[path] == null) {
        _listeners[path] = [callback]
      } else {
        _listeners[path].push(callback)
      }
    }
  }
}

export function listen(data: any, callback: ListenerCallback) {
  if (!('_reactive' in data)) {
    console.error("Can't listen to non reactive data. Can only listen to data coming from the store")
    return
  }
  const changeHandler = data._reactive.changeHandler
  changeHandler.listen(data, callback)
}

export default {
  create: createChangeHandler,
  listen
}