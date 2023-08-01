import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
var _excluded = ["children", "onClick", "title", "description", "extra", "radius", "align", "className", "style"];
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
import CellGroup from "./CellGroup.js";
var defaultProps = _objectSpread(_objectSpread({}, ComponentDefaults), {}, {
  title: null,
  description: null,
  extra: null,
  radius: "6px",
  align: "flex-start",
  onClick: function onClick(event) {
  }
});
var classPrefix = "nut-cell";
var Cell = function Cell2(props) {
  var _defaultProps$props = _objectSpread(_objectSpread({}, defaultProps), props), children = _defaultProps$props.children, onClick2 = _defaultProps$props.onClick, title = _defaultProps$props.title, description = _defaultProps$props.description, extra = _defaultProps$props.extra, radius = _defaultProps$props.radius, align = _defaultProps$props.align, className = _defaultProps$props.className, style = _defaultProps$props.style, rest = _objectWithoutProperties(_defaultProps$props, _excluded);
  var handleClick = function handleClick2(event) {
    onClick2(event);
  };
  var baseStyle = _objectSpread(_objectSpread({}, style), {}, {
    borderRadius: Number.isNaN(Number(radius)) ? String(radius) : "".concat(radius, "px"),
    alignItems: align
  });
  var styles = title || description ? {} : {
    flex: 1
  };
  return React__default.createElement("div", _objectSpread({
    className: classNames(classPrefix, className),
    onClick: function onClick3(event) {
      return handleClick(event);
    },
    style: baseStyle
  }, rest), children || React__default.createElement(React__default.Fragment, null, title || description ? React__default.createElement("div", {
    className: "".concat(classPrefix, "__left")
  }, title ? React__default.createElement("div", {
    className: "".concat(classPrefix, "__title")
  }, title) : null, description ? React__default.createElement("div", {
    className: "".concat(classPrefix, "__description")
  }, description) : null) : null, extra ? React__default.createElement("div", {
    className: "".concat(classPrefix, "__extra"),
    style: styles
  }, extra) : null, React__default.createElement("div", {
    className: "".concat(classPrefix, "__divider")
  })));
};
Cell.defaultProps = defaultProps;
Cell.displayName = "NutCell";
Cell.Group = CellGroup;
export {
  Cell as default
};
