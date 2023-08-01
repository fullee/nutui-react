import _toConsumableArray from "@babel/runtime/helpers/toConsumableArray";
import _slicedToArray from "@babel/runtime/helpers/slicedToArray";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
var _excluded = ["className", "disabled", "onChange", "value", "defaultValue", "max", "labelPosition", "direction", "options"], _excluded2 = ["label", "value", "disabled", "onChange"];
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
import React__default, { useImperativeHandle, useCallback } from "react";
import classNames from "classnames";
import { C as Checkbox, a as CheckboxGroupContext } from "./checkbox2.js";
import { u as usePropsValue } from "./use-props-value.js";
import "@nutui/icons-react";
import "./CheckboxGroup.js";
import "./typings.js";
var defaultProps = {
  max: void 0,
  labelPosition: "right",
  direction: "vertical",
  onChange: function onChange(value) {
  },
  options: []
};
var classPrefix = "nut-checkboxgroup";
var CheckboxGroup = React__default.forwardRef(function(props, ref) {
  var _defaultProps$props = _objectSpread(_objectSpread({}, defaultProps), props), children = _defaultProps$props.children;
  var className = props.className, disabled = props.disabled, onChange2 = props.onChange, value = props.value, defaultValue = props.defaultValue, max = props.max, labelPosition = props.labelPosition, direction = props.direction, options = props.options, rest = _objectWithoutProperties(props, _excluded);
  useImperativeHandle(ref, function() {
    return {
      toggle: function toggle(state) {
        if (state === false) {
          setValue([]);
        } else {
          var childrenLabel = [];
          React__default.Children.map(children, function(child) {
            var childProps = child.props;
            childrenLabel.push(childProps.value);
          });
          setValue(childrenLabel);
        }
      },
      reverse: function reverse() {
        var childrenLabel = [];
        React__default.Children.map(children, function(child) {
          var childProps = child.props;
          childrenLabel.push(childProps.value);
        });
        var reverse2 = childrenLabel.filter(function(c) {
          return (_value === null || _value === void 0 ? void 0 : _value.findIndex(function(v) {
            return v === c;
          })) === -1;
        });
        setValue(reverse2);
      }
    };
  });
  var _usePropsValue = usePropsValue({
    value: props.value,
    defaultValue: props.defaultValue,
    finalValue: [],
    onChange: onChange2
  }), _usePropsValue2 = _slicedToArray(_usePropsValue, 2), _value = _usePropsValue2[0], setValue = _usePropsValue2[1];
  var renderOptions = useCallback(function() {
    return options === null || options === void 0 ? void 0 : options.map(function(_ref) {
      var label = _ref.label, value2 = _ref.value, disabled2 = _ref.disabled, onChange22 = _ref.onChange, rest2 = _objectWithoutProperties(_ref, _excluded2);
      return React__default.createElement(Checkbox, _objectSpread({
        key: value2 === null || value2 === void 0 ? void 0 : value2.toString(),
        label,
        disabled: disabled2,
        value: value2
      }, rest2));
    });
  }, [options, max]);
  return React__default.createElement(CheckboxGroupContext.Provider, {
    value: {
      labelPosition: labelPosition || "right",
      disabled,
      max,
      value: _value,
      check: function check(value2) {
        var combined = [].concat(_toConsumableArray(_value), [value2]);
        setValue(combined);
      },
      uncheck: function uncheck(value2) {
        var reduced = _value.filter(function(item) {
          return item !== value2;
        });
        setValue(reduced);
      }
    }
  }, React__default.createElement("div", _objectSpread({
    className: classNames(classPrefix, className, _defineProperty({}, "nut-checkboxgroup--".concat(props.direction), props.direction))
  }, rest), options !== null && options !== void 0 && options.length ? renderOptions() : children));
});
CheckboxGroup.defaultProps = defaultProps;
CheckboxGroup.displayName = "NutCheckboxGroup";
export {
  CheckboxGroup as default
};
