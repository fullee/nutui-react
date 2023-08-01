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
import { B as Badge } from "./badge2.js";
var defaultProps = _objectSpread(_objectSpread({}, ComponentDefaults), {}, {
  title: "",
  icon: null,
  active: false,
  index: 0,
  value: "",
  dot: false,
  max: 99,
  top: "0",
  right: "5"
});
var TabbarItem = function TabbarItem2(props) {
  var _defaultProps$props = _objectSpread(_objectSpread({}, defaultProps), props), className = _defaultProps$props.className, style = _defaultProps$props.style, title = _defaultProps$props.title, icon = _defaultProps$props.icon, active = _defaultProps$props.active, activeColor = _defaultProps$props.activeColor, inactiveColor = _defaultProps$props.inactiveColor, index = _defaultProps$props.index, value = _defaultProps$props.value, dot = _defaultProps$props.dot, max = _defaultProps$props.max, top = _defaultProps$props.top, right = _defaultProps$props.right, handleClick = _defaultProps$props.handleClick;
  var classPrefix = "nut-tabbar-item";
  var tabbarItemClass = classNames(className, classPrefix, _defineProperty({}, "".concat(classPrefix, "-active"), active));
  var boxPrefix = "".concat(classPrefix, "__icon-box");
  var titleClass = classNames(boxPrefix, "".concat(boxPrefix, "-nav"), _defineProperty({}, "".concat(boxPrefix, "-large"), !icon));
  var badgeProps = {
    value,
    dot,
    max,
    top,
    right,
    color: activeColor
  };
  return React__default.createElement("div", {
    className: tabbarItemClass,
    style: _objectSpread({
      color: active ? activeColor : inactiveColor
    }, style),
    onClick: function onClick() {
      return handleClick(index);
    }
  }, icon ? React__default.createElement(React__default.Fragment, null, React__default.createElement(Badge, _objectSpread({}, badgeProps), React__default.createElement("div", {
    className: boxPrefix
  }, icon)), React__default.createElement("div", {
    className: titleClass
  }, title)) : React__default.createElement(Badge, _objectSpread({}, badgeProps), React__default.createElement("div", {
    className: titleClass
  }, title)));
};
export {
  TabbarItem as T
};
