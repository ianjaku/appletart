import ChangeHandler from "./ChangeHandler";
declare function makeReactive<State>(value: any, changeHandler: ChangeHandler<State>, prefix: string): any;
declare const _default: {
    makeReactive: typeof makeReactive;
};
export default _default;
