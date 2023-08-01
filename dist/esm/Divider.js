import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
var _excluded = ["children", "contentPosition", "style", "className", "direction"];
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
import { C as ComponentDefaults } from "./typings.js";
var defaultProps = _objectSpread(_objectSpread({}, ComponentDefaults), {}, {
  contentPosition: "center",
  direction: "horizontal"
});
var classPrefix = "nut-divider";
var Divider = function Divider2(props) {
  var _classNames, _classNames2;
  var _defaultProps$props = _objectSpread(_objectSpread({}, defaultProps), props), children = _defaultProps$props.children, contentPosition = _defaultProps$props.contentPosition, style = _defaultProps$props.style, className = _defaultProps$props.className, direction = _defaultProps$props.direction, rest = _objectWithoutProperties(_defaultProps$props, _excluded);
  var classes = direction === "horizontal" ? classNames((_classNames = {}, _defineProperty(_classNames, "".concat(classPrefix), true), _defineProperty(_classNames, "".concat(classPrefix, "__center"), children), _defineProperty(_classNames, "".concat(classPrefix, "__left"), contentPosition === "left"), _defineProperty(_classNames, "".concat(classPrefix, "__right"), contentPosition === "right"), _defineProperty(_classNames, "".concat(classPrefix, "__hairline"), true), _classNames)) : classNames((_classNames2 = {}, _defineProperty(_classNames2, "".concat(classPrefix), true), _defineProperty(_classNames2, "".concat(classPrefix, "__vertical"), direction === "vertical"), _classNames2));
  return React__default.createElement("div", _objectSpread({
    className: "".concat(classes, " ").concat(className || ""),
    style
  }, rest), children);
};
Divider.defaultProps = defaultProps;
Divider.displayName = "NutDivider";
export {
  Divider as default
};
