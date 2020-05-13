import _debounce from './debounce';
import _makeReactive from './makeReactive';
export declare const createStore: typeof import("./store").createStore;
export declare const listen: typeof import("./changeHandler").listen;
export declare const createController: typeof import("./controller").createController;
export declare const debounce: typeof _debounce;
export declare const makeReactive: typeof _makeReactive;
declare const _default: {
    createStore: typeof import("./store").createStore;
    listen: typeof import("./changeHandler").listen;
    createController: typeof import("./controller").createController;
    debounce: typeof _debounce;
    makeReactive: typeof _makeReactive;
};
export default _default;
