import _defineProperty from "@babel/runtime/helpers/defineProperty";
function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function(sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys(Object(source), true).forEach(function(key) {
      _defineProperty(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function(key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }
  return target;
}
import React__default from "react";
import classNames from "classnames";
var defaultProps = {
  title: "",
  value: "",
  disabled: false
};
var TabPane = function TabPane2(props) {
  var _defaultProps$props = _objectSpread(_objectSpread({}, defaultProps), props), children = _defaultProps$props.children, autoHeightClassName = _defaultProps$props.autoHeightClassName, className = _defaultProps$props.className, disabled = _defaultProps$props.disabled;
  var classPrefix = "nut-tabpane";
  var classes = classNames({
    active: !disabled && props.active
  }, classPrefix, autoHeightClassName, className);
  return children ? React__default.createElement("div", {
    className: classes
  }, !disabled && children) : null;
};
export {
  TabPane as default
};
