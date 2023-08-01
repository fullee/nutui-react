import _slicedToArray from "@babel/runtime/helpers/slicedToArray";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
var _excluded = ["className", "type", "action", "loop", "onClick", "children"];
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
import React__default, { useState } from "react";
import classNames from "classnames";
import { C as ComponentDefaults } from "./typings.js";
var defaultProps = _objectSpread(_objectSpread({}, ComponentDefaults), {}, {
  type: "shake",
  action: "initial",
  loop: false,
  onClick: function onClick(event) {
  }
});
var classPrefix = "nut-animate";
var Animate = function Animate2(props) {
  var _classNames;
  var _defaultProps$props = _objectSpread(_objectSpread({}, defaultProps), props), className = _defaultProps$props.className, type = _defaultProps$props.type, action = _defaultProps$props.action, loop = _defaultProps$props.loop, onClick2 = _defaultProps$props.onClick, children = _defaultProps$props.children, rest = _objectWithoutProperties(_defaultProps$props, _excluded);
  var _useState = useState(false), _useState2 = _slicedToArray(_useState, 2), clicked = _useState2[0], setClicked = _useState2[1];
  var classes = classNames((_classNames = {
    "nut-ani-container": true
  }, _defineProperty(_classNames, "".concat(classPrefix, "-").concat(type), action === "initial" || clicked ? type : false), _defineProperty(_classNames, "loop", loop), _classNames));
  var cls = classNames(classes, className);
  var handleClick = function handleClick2(event) {
    setClicked(true);
    if (!loop) {
      setTimeout(function() {
        setClicked(false);
      }, 1e3);
    }
    onClick2 && onClick2(event);
  };
  return React__default.createElement("div", {
    className: "nut-animate"
  }, React__default.createElement("div", _objectSpread({
    className: cls,
    onClick: handleClick
  }, rest), children));
};
Animate.defaultProps = defaultProps;
Animate.displayName = "NutAnimate";
export {
  Animate as default
};
