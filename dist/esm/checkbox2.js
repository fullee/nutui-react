import _slicedToArray from "@babel/runtime/helpers/slicedToArray";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
var _excluded = ["icon", "label", "className", "activeIcon", "checked", "value", "defaultChecked", "disabled", "onChange", "indeterminate", "indeterminateIcon"], _excluded2 = ["labelPosition"];
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
import React__default, { createContext, useContext, useState, useEffect } from "react";
import { CheckNormal, CheckDisabled, Checked } from "@nutui/icons-react";
import classNames from "classnames";
import CheckboxGroup from "./CheckboxGroup.js";
import { C as ComponentDefaults } from "./typings.js";
import { u as usePropsValue } from "./use-props-value.js";
var CheckboxGroupContext = createContext(null);
var defaultProps = _objectSpread(_objectSpread({}, ComponentDefaults), {}, {
  disabled: false,
  labelPosition: "right",
  icon: null,
  activeIcon: null,
  indeterminateIcon: null,
  onChange: function onChange(value) {
  }
});
var classPrefix = "nut-checkbox";
var Checkbox = function Checkbox2(props) {
  var _defaultProps$props = _objectSpread(_objectSpread({}, defaultProps), props), children = _defaultProps$props.children;
  var icon = props.icon, label = props.label, className = props.className, activeIcon = props.activeIcon, checked = props.checked, value = props.value, defaultChecked = props.defaultChecked, disabled = props.disabled, onChange2 = props.onChange, indeterminate = props.indeterminate, indeterminateIcon = props.indeterminateIcon, others = _objectWithoutProperties(props, _excluded);
  var labelPosition = others.labelPosition, rest = _objectWithoutProperties(others, _excluded2);
  var ctx = useContext(CheckboxGroupContext);
  var _usePropsValue = usePropsValue({
    value: props.checked,
    defaultValue: props.defaultChecked,
    finalValue: defaultChecked,
    onChange: onChange2
  }), _usePropsValue2 = _slicedToArray(_usePropsValue, 2), innerChecked = _usePropsValue2[0], setChecked = _usePropsValue2[1];
  var _useState = useState(disabled), _useState2 = _slicedToArray(_useState, 2), innerDisabled = _useState2[0], setDisabled = _useState2[1];
  var _useState3 = useState(indeterminate), _useState4 = _slicedToArray(_useState3, 2), innerIndeterminate = _useState4[0], setIndeterminate = _useState4[1];
  useEffect(function() {
    setDisabled(disabled);
  }, [disabled]);
  useEffect(function() {
    setIndeterminate(indeterminate);
  }, [indeterminate]);
  if (ctx) {
    if (ctx.labelPosition !== void 0) {
      labelPosition = ctx.labelPosition;
    }
    innerDisabled = ctx.disabled !== void 0 ? ctx.disabled : innerDisabled;
    innerChecked = ctx.value.includes(value);
    setChecked = function setChecked2(checked2) {
      if (ctx.disabled)
        return;
      if (checked2)
        ctx.check(value);
      if (!checked2)
        ctx.uncheck(value);
    };
  }
  var renderIcon = function renderIcon2() {
    if (!innerChecked) {
      return React__default.isValidElement(icon) ? icon : React__default.createElement(CheckNormal, {
        className: color()
      });
    }
    if (innerIndeterminate) {
      return React__default.isValidElement(indeterminateIcon) ? indeterminateIcon : React__default.createElement(CheckDisabled, {
        className: color()
      });
    }
    return React__default.isValidElement(activeIcon) ? activeIcon : React__default.createElement(Checked, {
      className: color()
    });
  };
  var color = function color2() {
    if (innerDisabled) {
      return "".concat(classPrefix, "__icon--disable");
    }
    if (innerChecked) {
      if (innerIndeterminate) {
        return "".concat(classPrefix, "__icon--indeterminate");
      }
      return "".concat(classPrefix, "__icon");
    }
    return "".concat(classPrefix, "__icon--unchecked");
  };
  var renderLabel = function renderLabel2() {
    return React__default.createElement("span", {
      className: classNames("".concat(classPrefix, "__label "), _defineProperty({}, "".concat(classPrefix, "__label--disabled"), innerDisabled))
    }, children || label);
  };
  var handleClick = function handleClick2() {
    if (disabled)
      return;
    var latestChecked = !innerChecked;
    if (ctx && ctx.max !== void 0) {
      if (latestChecked && ctx.value.length >= ctx.max)
        return;
    }
    setChecked(latestChecked);
  };
  return React__default.createElement("div", _objectSpread(_objectSpread({
    className: classNames(classPrefix, className, _defineProperty({}, "".concat(classPrefix, "--reverse"), labelPosition === "left"))
  }, rest), {}, {
    onClick: handleClick
  }), renderIcon(), renderLabel());
};
Checkbox.defaultProps = defaultProps;
Checkbox.displayName = "NutCheckBox";
Checkbox.Group = CheckboxGroup;
export {
  Checkbox as C,
  CheckboxGroupContext as a
};
