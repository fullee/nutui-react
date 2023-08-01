import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
var _excluded = ["children", "style", "columns", "index", "gap", "square", "text", "center", "reverse", "direction", "className", "onClick"];
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
import React__default, { useContext } from "react";
import classNames from "classnames";
import { useConfig } from "./ConfigProvider.js";
import { p as pxCheck } from "./px-check.js";
var gridContext = {
  onClick: function onClick(item, index) {
  }
};
var GridContext = React__default.createContext(gridContext);
var defaultProps = {
  text: "",
  columns: 4,
  gap: 0,
  center: true,
  square: false,
  reverse: false,
  direction: "vertical"
};
var GridItem = function GridItem2(props) {
  useConfig();
  var _defaultProps$props = _objectSpread(_objectSpread({}, defaultProps), props), children = _defaultProps$props.children, style = _defaultProps$props.style, columns = _defaultProps$props.columns, index = _defaultProps$props.index, gap = _defaultProps$props.gap, square = _defaultProps$props.square, text = _defaultProps$props.text, center = _defaultProps$props.center, reverse = _defaultProps$props.reverse, direction = _defaultProps$props.direction, className = _defaultProps$props.className, onClick2 = _defaultProps$props.onClick, rest = _objectWithoutProperties(_defaultProps$props, _excluded);
  var classPrefix = "nut-grid-item";
  var classes = classNames(classPrefix, className);
  var context = useContext(GridContext);
  var rootStyle = function rootStyle2() {
    var styles = _objectSpread({
      flexBasis: "".concat(100 / +columns, "%")
    }, style);
    if (square) {
      styles.paddingTop = "".concat(100 / +columns, "%");
    } else if (gap) {
      styles.paddingRight = pxCheck(gap);
      if (index >= Number(columns)) {
        styles.marginTop = pxCheck(gap);
      }
    }
    return styles;
  };
  var contentClass = function contentClass2() {
    var _classNames;
    return classNames("".concat(classPrefix, "__content"), (_classNames = {}, _defineProperty(_classNames, "".concat(classPrefix, "__content--border"), true), _defineProperty(_classNames, "".concat(classPrefix, "__content--surround"), gap), _defineProperty(_classNames, "".concat(classPrefix, "__content--center"), center), _defineProperty(_classNames, "".concat(classPrefix, "__content--square"), square), _defineProperty(_classNames, "".concat(classPrefix, "__content--reverse"), reverse), _defineProperty(_classNames, "".concat(classPrefix, "__content--").concat(direction), !!direction), _classNames));
  };
  var handleClick = function handleClick2(e) {
    onClick2 && onClick2(e);
    context.onClick && context.onClick({
      text,
      index,
      columns,
      gap,
      center,
      square,
      reverse,
      direction
    }, index);
  };
  return React__default.createElement("div", _objectSpread(_objectSpread({
    className: classes,
    style: rootStyle()
  }, rest), {}, {
    onClick: handleClick
  }), React__default.createElement("div", {
    className: contentClass()
  }, children && React__default.createElement(React__default.Fragment, null, children), text && React__default.createElement("div", {
    className: "".concat(classPrefix, "__text")
  }, text)));
};
GridItem.defaultProps = defaultProps;
GridItem.displayName = "NutGridItem";
export {
  GridContext as G,
  GridItem as a
};
