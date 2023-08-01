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
import { D as DataContext } from "./UserContext.js";
import { C as ComponentDefaults } from "./typings.js";
var classPrefix = "nut-row";
var defaultProps = _objectSpread(_objectSpread({}, ComponentDefaults), {}, {
  type: "",
  justify: "start",
  align: "flex-start",
  wrap: "nowrap",
  gutter: "0"
});
var Row = function Row2(props) {
  var _defaultProps$props = _objectSpread(_objectSpread({}, defaultProps), props), className = _defaultProps$props.className, style = _defaultProps$props.style, children = _defaultProps$props.children, type = _defaultProps$props.type, justify = _defaultProps$props.justify, align = _defaultProps$props.align, wrap = _defaultProps$props.wrap, gutter = _defaultProps$props.gutter, _onClick = _defaultProps$props.onClick;
  var getClass = function getClass2(prefix, type2) {
    var classType = type2 ? "nut-row-".concat(prefix, "-").concat(type2) : "";
    var className2 = prefix ? classType : "nut-row-".concat(type2);
    return className2;
  };
  var getClasses = function getClasses2() {
    return "\n    ".concat(getClass("", type), "\n    ").concat(getClass("justify", justify), "\n    ").concat(getClass("align", align), "\n    ").concat(getClass("flex", wrap), "\n    ").concat(classPrefix, "\n   ");
  };
  var parentRow = {
    gutter
  };
  return React__default.createElement(DataContext.Provider, {
    value: parentRow
  }, React__default.createElement("div", {
    className: classNames(getClasses(), className),
    style,
    onClick: function onClick(e) {
      _onClick && _onClick(e, "row");
    }
  }, children));
};
Row.defaultProps = defaultProps;
Row.displayName = "NutRow";
export {
  Row as default
};
