declare type onChangeCallback = (path: string, oldValue: any, newValue: any) => any;
declare const _default: <Data extends Object>(data: Data, onChangeCallback: onChangeCallback) => Data;
export default _default;
