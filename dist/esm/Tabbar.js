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
import React__default from "react";
import classNames from "classnames";
import { C as ComponentDefaults } from "./typings.js";
import { u as usePropsValue } from "./use-props-value.js";
import { T as TabbarItem } from "./tabbaritem2.js";
import "./badge2.js";
var defaultProps = _objectSpread(_objectSpread({}, ComponentDefaults), {}, {
  defaultValue: 0,
  fixed: false,
  inactiveColor: "",
  activeColor: "",
  safeArea: false,
  onSwitch: function onSwitch(value) {
  }
});
var Tabbar = function Tabbar2(props) {
  var _defaultProps$props = _objectSpread(_objectSpread({}, defaultProps), props), children = _defaultProps$props.children, defaultValue = _defaultProps$props.defaultValue, value = _defaultProps$props.value, fixed = _defaultProps$props.fixed, activeColor = _defaultProps$props.activeColor, inactiveColor = _defaultProps$props.inactiveColor, safeArea = _defaultProps$props.safeArea, className = _defaultProps$props.className, style = _defaultProps$props.style, onSwitch2 = _defaultProps$props.onSwitch;
  var classPrefix = "nut-tabbar";
  var _usePropsValue = usePropsValue({
    value,
    defaultValue,
    finalValue: 0,
    onChange: onSwitch2
  }), _usePropsValue2 = _slicedToArray(_usePropsValue, 2), selectIndex = _usePropsValue2[0], setSelectIndex = _usePropsValue2[1];
  return React__default.createElement("div", {
    className: classNames(classPrefix, className, _defineProperty({}, "".concat(classPrefix, "__fixed"), fixed)),
    style
  }, React__default.createElement("div", {
    className: "".concat(classPrefix, "__wrap")
  }, React__default.Children.map(children, function(child, idx) {
    if (!React__default.isValidElement(child)) {
      return null;
    }
    var childProps = _objectSpread(_objectSpread({}, child.props), {}, {
      active: idx === selectIndex,
      index: idx,
      inactiveColor,
      activeColor,
      handleClick: setSelectIndex
    });
    return React__default.cloneElement(child, childProps);
  })), (fixed || safeArea) && React__default.createElement("div", {
    className: "".concat(classPrefix, "__safe-area")
  }));
};
Tabbar.defaultProps = defaultProps;
Tabbar.displayName = "NutTabbar";
Tabbar.Item = TabbarItem;
export {
  Tabbar as default
};
