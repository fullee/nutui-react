import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
var _excluded = ["children", "columns", "gap", "center", "square", "reverse", "direction", "style", "className", "onClick"];
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
import { G as GridContext, a as GridItem } from "./griditem2.js";
import { p as pxCheck } from "./px-check.js";
import "./ConfigProvider.js";
var defaultProps = {
  columns: 4,
  gap: 0,
  center: true,
  square: false,
  reverse: false,
  direction: "vertical"
};
var Grid = function Grid2(props) {
  var _defaultProps$props = _objectSpread(_objectSpread({}, defaultProps), props), children = _defaultProps$props.children, columns = _defaultProps$props.columns, gap = _defaultProps$props.gap, center = _defaultProps$props.center, square = _defaultProps$props.square, reverse = _defaultProps$props.reverse, direction = _defaultProps$props.direction, style = _defaultProps$props.style, className = _defaultProps$props.className, onClick = _defaultProps$props.onClick, rest = _objectWithoutProperties(_defaultProps$props, _excluded);
  var childrenDom = React__default.Children.toArray(children);
  var classPrefix = "nut-grid";
  var rootClass = function rootClass2() {
    return classNames(className, classPrefix, _defineProperty({}, "".concat(classPrefix, "__border"), !gap));
  };
  var rootStyle = function rootStyle2() {
    var styleSelf = {};
    if (style) {
      styleSelf = style;
    }
    if (gap) {
      styleSelf.paddingLeft = pxCheck(gap);
    }
    return styleSelf;
  };
  return React__default.createElement("div", _objectSpread({
    className: rootClass(),
    style: rootStyle()
  }, rest), React__default.createElement(GridContext.Provider, {
    value: {
      onClick
    }
  }, childrenDom.map(function(item, idex) {
    return React__default.cloneElement(item, {
      index: idex,
      columns,
      center,
      gap,
      square,
      reverse,
      direction
    });
  })));
};
Grid.defaultProps = defaultProps;
Grid.displayName = "NutGrid";
Grid.Item = GridItem;
export {
  Grid as default
};
