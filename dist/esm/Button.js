import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
var _excluded = ["color", "shape", "fill", "loading", "disabled", "type", "size", "block", "icon", "children", "onClick", "className", "style", "nativeType"];
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
import React__default, { useCallback } from "react";
import classNames from "classnames";
import { Loading } from "@nutui/icons-react";
import { C as ComponentDefaults } from "./typings.js";
var prefixCls = "nut-button";
var defaultProps = _objectSpread(_objectSpread({}, ComponentDefaults), {}, {
  color: "",
  type: "default",
  size: "normal",
  shape: "round",
  fill: "solid",
  loading: false,
  disabled: false,
  block: false,
  icon: null,
  nativeType: "button",
  onClick: function onClick(e) {
  }
});
var Button = React__default.forwardRef(function(props, ref) {
  var _classNames;
  var _defaultProps$props = _objectSpread(_objectSpread({}, defaultProps), props), color = _defaultProps$props.color, shape = _defaultProps$props.shape, fill = _defaultProps$props.fill, loading = _defaultProps$props.loading, disabled = _defaultProps$props.disabled, type = _defaultProps$props.type, size = _defaultProps$props.size, block = _defaultProps$props.block, icon = _defaultProps$props.icon, children = _defaultProps$props.children, onClick2 = _defaultProps$props.onClick, className = _defaultProps$props.className, style = _defaultProps$props.style, nativeType = _defaultProps$props.nativeType, rest = _objectWithoutProperties(_defaultProps$props, _excluded);
  var getStyle = useCallback(function() {
    var style2 = {};
    if (props.color) {
      if (fill && fill === "outline") {
        style2.color = color;
        style2.background = "#fff";
        if (!(color !== null && color !== void 0 && color.includes("gradient"))) {
          style2.borderColor = color;
        }
      } else {
        style2.color = "#fff";
        style2.background = color;
      }
    }
    return style2;
  }, [color]);
  var handleClick = function handleClick2(e) {
    if (!loading && !disabled && onClick2) {
      onClick2(e);
    }
  };
  return React__default.createElement("button", _objectSpread(_objectSpread({}, rest), {}, {
    ref,
    type: nativeType,
    className: classNames(prefixCls, className, props.type ? "".concat(prefixCls, "--").concat(type) : null, props.fill ? "".concat(prefixCls, "--").concat(fill) : null, (_classNames = {}, _defineProperty(_classNames, "".concat(prefixCls, "--").concat(size), size), _defineProperty(_classNames, "".concat(prefixCls, "--").concat(shape), shape), _defineProperty(_classNames, "".concat(prefixCls, "--block"), block), _defineProperty(_classNames, "".concat(prefixCls, "--disabled"), disabled), _defineProperty(_classNames, "".concat(prefixCls, "--loading"), loading), _classNames)),
    style: _objectSpread(_objectSpread({}, getStyle()), style),
    onClick: function onClick3(e) {
      return handleClick(e);
    }
  }), React__default.createElement("div", {
    className: "nut-button__warp"
  }, loading ? React__default.createElement(Loading, {
    className: "nut-icon-loading"
  }) : null, !loading && icon ? icon : null, children && React__default.createElement("div", {
    className: icon || loading ? "nut-button-text" : ""
  }, children)));
});
Button.displayName = "NutButton";
export {
  Button as default
};
