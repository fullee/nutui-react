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
var prefixCls = "nut-space";
var defaultProps = {
  direction: "horizontal"
};
var Space = function Space2(props) {
  var _defaultProps$props = _objectSpread(_objectSpread({}, defaultProps), props), className = _defaultProps$props.className, style = _defaultProps$props.style, children = _defaultProps$props.children, wrap = _defaultProps$props.wrap, align = _defaultProps$props.align, direction = _defaultProps$props.direction, justify = _defaultProps$props.justify;
  var cls = classNames(className, prefixCls, wrap && "".concat(prefixCls, "-wrap"), direction && "".concat(prefixCls, "-").concat(direction), align && "".concat(prefixCls, "-align-").concat(align), justify && "".concat(prefixCls, "-justify-").concat(justify));
  return React__default.createElement("div", {
    className: cls,
    style
  }, React__default.Children.map(children, function(child) {
    return child !== null && child !== void 0 && React__default.createElement("div", {
      className: "".concat(prefixCls, "-item")
    }, child);
  }));
};
Space.defaultProps = defaultProps;
Space.displayName = "NutSpace";
export {
  Space as default
};
