
type onChangeCallback = (path: string, oldValue: any, newValue: any) => any;

export default <Data extends Object>(data: Data, onChangeCallback: onChangeCallback): Data => makeReactive(data, onChangeCallback)

function makeReactive<Data extends Object>(data: Data, onChangeCallback: onChangeCallback, prefix: string = ""): Data {
  Object.defineProperty(data, "_reactive", {value: true, enumerable: false, writable: true})
  return new Proxy(data, {
    set: createSetHandler(onChangeCallback, prefix),
    get: createGetHandler(onChangeCallback, prefix),
    deleteProperty: createDeleteHandler(onChangeCallback, prefix)
  })
}

function createSetHandler(onChangeCallback: onChangeCallback, prefix: string) {
  return (target: any, prop: string, newValue: any) => {
    const path = appendPrefix(prefix, prop)
    const oldValue = target[prop]
    let reactiveNewValue = ensureReactive(newValue, onChangeCallback, path)
    const result = Reflect.set(target, prop, reactiveNewValue)
    onChangeCallback(path, oldValue, reactiveNewValue)
    return result;
  };
}

function createGetHandler(onChangeCallback: onChangeCallback, prefix: string) {
  return (target: any, prop: string, receiver: any) => {
    let result = Reflect.get(target, prop)
    return ensureReactive(result, onChangeCallback, appendPrefix(prefix, prop));
  }
}

function ensureReactive(data: any, onChangeCallback: onChangeCallback, path: string) {
  if (typeof data === 'object' && data._reactive !== true) {
    return makeReactive(data, onChangeCallback, path)
  }
  return data 
}

function createDeleteHandler(onChangeCallback: onChangeCallback, prefix: string) {
  return (target: any, prop: string) => {
    const result = Reflect.deleteProperty(target, prop)
    return result;
  }
}

function appendPrefix(prefix: string, addition: string) {
  if (prefix === "") return addition
  return `${prefix}.${addition}`
}
