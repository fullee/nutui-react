import _slicedToArray from "@babel/runtime/helpers/slicedToArray";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
var _excluded = ["children", "className", "value", "defaultValue", "onChange", "labelPosition", "direction", "options", "disabled"], _excluded2 = ["label", "value", "disabled", "onChange"];
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
import { R as Radio, a as RadioContext } from "./radio2.js";
import { u as usePropsValue } from "./use-props-value.js";
import "@nutui/icons-react";
import "./RadioGroup.js";
import "./typings.js";
var defaultProps = {
  labelPosition: "right",
  onChange: function onChange(value) {
  },
  direction: "vertical",
  options: []
};
var classPrefix = "nut-radiogroup";
var RadioGroup = React__default.forwardRef(function(props, ref) {
  var _defaultProps$props = _objectSpread(_objectSpread({}, defaultProps), props), children = _defaultProps$props.children, className = _defaultProps$props.className, value = _defaultProps$props.value, defaultValue = _defaultProps$props.defaultValue, onChange2 = _defaultProps$props.onChange, labelPosition = _defaultProps$props.labelPosition, direction = _defaultProps$props.direction, options = _defaultProps$props.options, disabled = _defaultProps$props.disabled, rest = _objectWithoutProperties(_defaultProps$props, _excluded);
  var _usePropsValue = usePropsValue({
    defaultValue: props.defaultValue,
    value: props.value,
    finalValue: "",
    onChange: onChange2
  }), _usePropsValue2 = _slicedToArray(_usePropsValue, 2), val2State = _usePropsValue2[0], setVal2State = _usePropsValue2[1];
  var renderOptionsChildren = useCallback(function() {
    return options === null || options === void 0 ? void 0 : options.map(function(_ref) {
      var label = _ref.label, value2 = _ref.value, disabled2 = _ref.disabled, onChange22 = _ref.onChange, rest2 = _objectWithoutProperties(_ref, _excluded2);
      return React__default.createElement(Radio, _objectSpread(_objectSpread({}, rest2), {}, {
        key: value2 === null || value2 === void 0 ? void 0 : value2.toString(),
        children: label,
        value: value2,
        disabled: disabled2,
        onChange: onChange22,
        labelPosition,
        checked: value2 === val2State
      }));
    });
  }, [options]);
  return React__default.createElement(RadioContext.Provider, {
    value: {
      labelPosition: labelPosition || "right",
      disabled,
      value: val2State,
      check: function check(value2) {
        setVal2State(value2);
      },
      uncheck: function uncheck() {
        setVal2State("");
      }
    }
  }, React__default.createElement("div", _objectSpread({
    className: classNames(classPrefix, className, _defineProperty({}, "".concat(classPrefix, "--").concat(props.direction), props.direction))
  }, rest), options !== null && options !== void 0 && options.length ? renderOptionsChildren() : children));
});
RadioGroup.defaultProps = defaultProps;
RadioGroup.displayName = "NutRadioGroup";
export {
  RadioGroup as default
};
