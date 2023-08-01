import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
var _excluded = ["children", "title", "description", "value", "icon", "className"];
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
import { D as DataContext } from "./context3.js";
import { C as ComponentDefaults } from "./typings.js";
var defaultProps = _objectSpread(_objectSpread({}, ComponentDefaults), {}, {
  title: "",
  description: "",
  value: 0,
  icon: null
});
var Step = function Step2(props) {
  var _defaultProps$props = _objectSpread(_objectSpread({}, defaultProps), props), children = _defaultProps$props.children, title = _defaultProps$props.title, description = _defaultProps$props.description, value = _defaultProps$props.value, icon = _defaultProps$props.icon, className = _defaultProps$props.className, restProps = _objectWithoutProperties(_defaultProps$props, _excluded);
  var parent = useContext(DataContext);
  var dot = parent.propSteps.dot;
  var getCurrentStatus = function getCurrentStatus2() {
    var index = value;
    if (index < +parent.propSteps.value)
      return "finish";
    return index === +parent.propSteps.value ? "process" : "wait";
  };
  var handleClickStep = function handleClickStep2() {
    var _parent$propSteps, _parent$propSteps2;
    ((_parent$propSteps = parent.propSteps) === null || _parent$propSteps === void 0 ? void 0 : _parent$propSteps.onStepClick) && ((_parent$propSteps2 = parent.propSteps) === null || _parent$propSteps2 === void 0 ? void 0 : _parent$propSteps2.onStepClick(value));
  };
  var classPrefix = "nut-step";
  var classes = classNames(_defineProperty({}, "".concat(classPrefix, "-").concat(getCurrentStatus()), true), className, classPrefix);
  var renderIconClass = function renderIconClass2() {
    if (icon) {
      return "".concat(classPrefix, "-icon is-icon");
    }
    if (!dot && !icon) {
      return "".concat(classPrefix, "-icon is-text");
    }
    return "".concat(classPrefix, "-icon");
  };
  return React__default.createElement("div", _objectSpread(_objectSpread({
    className: classes
  }, restProps), {}, {
    onClick: handleClickStep
  }), React__default.createElement("div", {
    className: "nut-step-head"
  }, React__default.createElement("div", {
    className: "nut-step-line"
  }), React__default.createElement("div", {
    className: renderIconClass()
  }, icon || !dot && React__default.createElement("span", {
    className: "nut-step-inner"
  }, value))), React__default.createElement("div", {
    className: "nut-step-main"
  }, React__default.createElement("span", {
    className: "nut-step-title"
  }, title), description && React__default.createElement("span", {
    className: "nut-step-description"
  }, description)));
};
Step.defaultProps = defaultProps;
Step.displayName = "NutStep";
export {
  Step as default
};
