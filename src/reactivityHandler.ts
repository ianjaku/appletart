import ChangeHandler from "./ChangeHandler"

function makeReactive<State>(value: any, changeHandler: ChangeHandler<State>, prefix: string) {
  const handler = {
    set: makeSetHandler(changeHandler, prefix),
    get: makeGetHandler(changeHandler, prefix),
    deleteProperty: makeDeleteHandler(changeHandler, prefix)
  }
  Object.defineProperty(value, "_reactive", {value: true, enumerable: false, writable: true})
  return new Proxy(value, handler)
}

function makeSetHandler<State>(changeHandler: ChangeHandler<State>, prefix: string) {
  return (target: any, prop: string, newValue: any) => {
    const result = Reflect.set(target, prop, newValue)
    if (prop === 'length' && typeof newValue === 'number') {
      changeHandler.registerChange(prefix, target)
    }
    if (Array.isArray(target[prop])) {
      const arr = appendPrefix(prefix, prop)
      const lengthOfArray = appendPrefix(arr, "length")
      changeHandler.registerChange(lengthOfArray, target[prop].length)
    }
    changeHandler.registerChange(appendPrefix(prefix, prop), newValue)
    return result
  }
}

function makeDeleteHandler<State>(changeHandler: ChangeHandler<State>, prefix: string) {
  return (target: any, prop: string) => {
    const result = Reflect.deleteProperty(target, prop)

    if ("length" in target) {
      changeHandler.registerChange(appendPrefix(prefix, "length"), target.length);
    }
    
    changeHandler.registerChange(prefix, target)
    return result
  }
}

function makeGetHandler<State>(changeHandler: ChangeHandler<State>, prefix: string) {
  return (target: any, prop: string, receiver: any) => {
    let val = Reflect.get(target, prop)

    if (typeof val === "object") {
      if (val._reactive !== true) {
        val = makeReactive(val, changeHandler, appendPrefix(prefix, prop))
        Reflect.set(target, prop, val)
      }
    }
    return val
  }
}

function appendPrefix(prefix: string, prop: string) {
  if (prefix === "") {
    return prop
  }
  return prefix + "." + prop
}

export default {
  makeReactive
}
