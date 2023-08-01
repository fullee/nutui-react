import _typeof from "@babel/runtime/helpers/typeof";
var isObject = function isObject2(val) {
  return val !== null && _typeof(val) === "object";
};
var isFunction = function isFunction2(val) {
  return typeof val === "function";
};
var isPromise = function isPromise2(val) {
  return isObject(val) && isFunction(val.then) && isFunction(val["catch"]);
};
export {
  isPromise as a,
  isObject as b,
  isFunction as i
};
