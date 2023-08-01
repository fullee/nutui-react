import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
var _excluded = ["children", "className", "style", "title", "description", "divider"];
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
  title: "",
  description: "",
  divider: true
});
var classPrefix = "nut-cell-group";
var CellGroup = function CellGroup2(props) {
  var _defaultProps$props = _objectSpread(_objectSpread({}, defaultProps), props), children = _defaultProps$props.children, className = _defaultProps$props.className, style = _defaultProps$props.style, title = _defaultProps$props.title, description = _defaultProps$props.description, divider = _defaultProps$props.divider, rest = _objectWithoutProperties(_defaultProps$props, _excluded);
  return React__default.createElement("div", _objectSpread({
    className: classNames(classPrefix, className)
  }, rest), title ? React__default.createElement("div", {
    className: "".concat(classPrefix, "__title")
  }, title) : null, description ? React__default.createElement("div", {
    className: "".concat(classPrefix, "__description")
  }, description) : null, React__default.createElement("div", {
    className: "".concat(classPrefix, "__wrap ").concat(divider ? "".concat(classPrefix, "__wrap--divider") : "")
  }, children));
};
CellGroup.defaultProps = defaultProps;
CellGroup.displayName = "NutCellGroup";
export {
  CellGroup as default
};
