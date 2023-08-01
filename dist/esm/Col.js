import _slicedToArray from "@babel/runtime/helpers/slicedToArray";
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
import React__default, { useState, useContext, useEffect } from "react";
import classNames from "classnames";
import { D as DataContext } from "./UserContext.js";
import { C as ComponentDefaults } from "./typings.js";
var defaultProps = _objectSpread(_objectSpread({}, ComponentDefaults), {}, {
  span: "24",
  offset: "0",
  gutter: "0"
});
var Col = function Col2(props) {
  var _defaultProps$props = _objectSpread(_objectSpread({}, defaultProps), props), className = _defaultProps$props.className, style = _defaultProps$props.style, span = _defaultProps$props.span, offset = _defaultProps$props.offset, children = _defaultProps$props.children, _onClick = _defaultProps$props.onClick;
  var _useState = useState(""), _useState2 = _slicedToArray(_useState, 2), colName = _useState2[0], setColName = _useState2[1];
  var _useState3 = useState({}), _useState4 = _slicedToArray(_useState3, 2), colStyle = _useState4[0], setColStyle = _useState4[1];
  var _useContext = useContext(DataContext), gutter = _useContext.gutter;
  var classs = function classs2() {
    var prefixCls = "nut-col";
    return "".concat(prefixCls, " ").concat(prefixCls, "-").concat(span, " ").concat(gutter ? "".concat(prefixCls, "-gutter") : "", " ").concat(prefixCls, "-offset-").concat(offset);
  };
  var getStyle = function getStyle2() {
    var style2 = {};
    style2.paddingLeft = "".concat(gutter / 2, "px");
    style2.paddingRight = "".concat(gutter / 2, "px");
    return style2;
  };
  useEffect(function() {
    setColName(classs);
    setColStyle(getStyle);
  }, [span, offset, gutter]);
  return React__default.createElement("div", {
    className: classNames(colName, className),
    style: _objectSpread(_objectSpread({}, style), colStyle),
    onClick: function onClick(e) {
      _onClick && _onClick(e, "col");
    }
  }, children);
};
Col.defaultProps = defaultProps;
Col.displayName = "NutCol";
export {
  Col as default
};
