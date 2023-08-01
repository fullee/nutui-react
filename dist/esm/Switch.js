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
import { C as ComponentDefaults } from "./typings.js";
import { u as usePropsValue } from "./use-props-value.js";
var defaultProps = _objectSpread(_objectSpread({}, ComponentDefaults), {}, {
  disabled: false,
  activeText: "",
  inactiveText: ""
});
var Switch = function Switch2(props) {
  var _defaultProps$props = _objectSpread(_objectSpread({}, defaultProps), props), checked = _defaultProps$props.checked, defaultChecked = _defaultProps$props.defaultChecked, disabled = _defaultProps$props.disabled, activeText = _defaultProps$props.activeText, inactiveText = _defaultProps$props.inactiveText, className = _defaultProps$props.className, style = _defaultProps$props.style, onChange = _defaultProps$props.onChange;
  var classPrefix = "nut-switch";
  var _usePropsValue = usePropsValue({
    value: checked,
    defaultValue: defaultChecked
  }), _usePropsValue2 = _slicedToArray(_usePropsValue, 2), value = _usePropsValue2[0], setValue = _usePropsValue2[1];
  var classes = function classes2() {
    return "".concat(classPrefix, " ").concat(value ? "switch-open" : "switch-close", " ").concat(disabled ? "".concat(classPrefix, "-disabled") : "", " ", "".concat(classPrefix, "-base"), " ").concat(className);
  };
  var _onClick = function onClick(event) {
    if (disabled)
      return;
    onChange && onChange(!value, event);
    setValue(!value);
  };
  return React__default.createElement("div", {
    className: classes(),
    onClick: function onClick(e) {
      return _onClick(e);
    },
    style
  }, React__default.createElement("div", {
    className: "switch-button"
  }, !value && React__default.createElement("div", {
    className: "close-line"
  }), activeText && React__default.createElement(React__default.Fragment, null, value ? React__default.createElement("div", {
    className: "".concat(classPrefix, "__label open")
  }, activeText) : React__default.createElement("div", {
    className: "".concat(classPrefix, "__label close")
  }, inactiveText))));
};
Switch.defaultProps = defaultProps;
Switch.displayName = "NutSwitch";
export {
  Switch as default
};
