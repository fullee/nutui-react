import _typeof from "@babel/runtime/helpers/typeof";
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
import { C as ComponentDefaults } from "./typings.js";
var defaultProps = _objectSpread(_objectSpread({}, ComponentDefaults), {}, {
  value: "",
  dot: false,
  max: 99,
  top: "0",
  right: "5",
  color: ""
});
var Badge = function Badge2(props) {
  var _defaultProps$props = _objectSpread(_objectSpread({}, defaultProps), props), className = _defaultProps$props.className, style = _defaultProps$props.style, value = _defaultProps$props.value, max = _defaultProps$props.max, children = _defaultProps$props.children, dot = _defaultProps$props.dot, top = _defaultProps$props.top, right = _defaultProps$props.right, color = _defaultProps$props.color;
  var classPrefix = "nut-badge";
  var classes = classNames(classPrefix, className);
  var contentClasses = classNames(_defineProperty({}, "".concat(classPrefix, "__dot"), dot), "".concat(classPrefix, "__content"), "".concat(classPrefix, "__sup"));
  function content() {
    if (dot || _typeof(value) === "object")
      return null;
    if (typeof value === "number" && typeof max === "number") {
      return max < value ? "".concat(max, "+") : value;
    }
    return value;
  }
  var getStyle = function getStyle2() {
    var style2 = {};
    style2.top = "".concat(Number(top) || parseFloat(top) || 0, "px");
    style2.right = "".concat(Number(right) || parseFloat(right) || 0, "px");
    style2.background = color;
    return style2;
  };
  return React__default.createElement("div", {
    className: classes,
    style
  }, _typeof(value) === "object" && value && React__default.createElement("div", {
    className: "".concat(classPrefix, "__icon")
  }, value), React__default.createElement("div", null, children), React__default.createElement("div", {
    className: contentClasses,
    style: getStyle()
  }, content()));
};
Badge.defaultProps = defaultProps;
Badge.displayName = "NutBadge";
export {
  Badge as B
};
