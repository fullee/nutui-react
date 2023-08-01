import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
var _excluded = ["children", "value", "direction", "className", "dot", "onStepClick"];
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
import { D as DataContext } from "./context3.js";
import { C as ComponentDefaults } from "./typings.js";
var defaultProps = _objectSpread(_objectSpread({}, ComponentDefaults), {}, {
  value: 0,
  direction: "horizontal",
  dot: false
});
var Steps = function Steps2(props) {
  var _classNames;
  var propSteps = _objectSpread(_objectSpread({}, defaultProps), props);
  var children = propSteps.children, value = propSteps.value, direction = propSteps.direction, className = propSteps.className, dot = propSteps.dot, onStepClick = propSteps.onStepClick, restProps = _objectWithoutProperties(propSteps, _excluded);
  var parentSteps = {
    propSteps
  };
  var classPrefix = "nut-steps";
  var classes = classNames((_classNames = {}, _defineProperty(_classNames, "".concat(classPrefix, "-").concat(direction), true), _defineProperty(_classNames, "".concat(classPrefix, "-dot"), !!props.dot), _classNames), className, classPrefix);
  return React__default.createElement(DataContext.Provider, {
    value: parentSteps
  }, React__default.createElement("div", _objectSpread({
    className: classes
  }, restProps), children));
};
Steps.defaultProps = defaultProps;
Steps.displayName = "NutSteps";
export {
  Steps as default
};
