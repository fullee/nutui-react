import _slicedToArray from "@babel/runtime/helpers/slicedToArray";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
var _excluded = ["children", "disabled", "min", "max", "readOnly", "value", "defaultValue", "allowEmpty", "digits", "step", "async", "className", "style", "formatter", "onPlus", "onMinus", "onOverlimit", "onBlur", "onFocus", "onChange"];
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
import React__default, { useRef, useEffect } from "react";
import { Minus, Plus } from "@nutui/icons-react";
import classNames from "classnames";
import { u as usePropsValue } from "./use-props-value.js";
import { C as ComponentDefaults } from "./typings.js";
var defaultProps = _objectSpread(_objectSpread({}, ComponentDefaults), {}, {
  disabled: false,
  min: 1,
  max: 9999,
  readOnly: false,
  allowEmpty: false,
  defaultValue: 0,
  step: 1,
  digits: 0,
  async: false
});
var classPrefix = "nut-inputnumber";
var InputNumber = function InputNumber2(props) {
  var _classNames;
  var _defaultProps$props = _objectSpread(_objectSpread({}, defaultProps), props), children = _defaultProps$props.children, disabled = _defaultProps$props.disabled, min = _defaultProps$props.min, max = _defaultProps$props.max, readOnly = _defaultProps$props.readOnly, value = _defaultProps$props.value, defaultValue = _defaultProps$props.defaultValue, allowEmpty = _defaultProps$props.allowEmpty, digits = _defaultProps$props.digits, step = _defaultProps$props.step, async = _defaultProps$props.async, className = _defaultProps$props.className, style = _defaultProps$props.style, formatter = _defaultProps$props.formatter, onPlus = _defaultProps$props.onPlus, onMinus = _defaultProps$props.onMinus, onOverlimit = _defaultProps$props.onOverlimit, onBlur = _defaultProps$props.onBlur, onFocus = _defaultProps$props.onFocus, onChange = _defaultProps$props.onChange, restProps = _objectWithoutProperties(_defaultProps$props, _excluded);
  var inputRef = useRef("");
  var _usePropsValue = usePropsValue({
    value,
    defaultValue
  }), _usePropsValue2 = _slicedToArray(_usePropsValue, 2), _checked = _usePropsValue2[0], setChecked = _usePropsValue2[1];
  useEffect(function() {
    if (formatter) {
      if (_checked || _checked === 0) {
        inputRef.current = formatter(_checked);
        setChecked(formatter(_checked));
      }
    }
  }, []);
  var classes = classNames((_classNames = {}, _defineProperty(_classNames, "".concat(classPrefix), true), _defineProperty(_classNames, "".concat(classPrefix, "--disabled"), disabled), _classNames), className);
  var styles = _objectSpread({}, style);
  var addAllow = function addAllow2() {
    var value2 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : _checked;
    if (formatter) {
      var numValue = String(value2).replace(/[^0-9|.]/gi, "");
      return Number(numValue) < Number(max) && !disabled;
    }
    return Number(value2) < Number(max) && !disabled;
  };
  var reduceAllow = function reduceAllow2() {
    var value2 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : _checked;
    if (formatter) {
      var numValue = String(value2).replace(/[^0-9|.]/gi, "");
      return Number(numValue) > Number(min) && !disabled;
    }
    return Number(value2) > Number(min) && !disabled;
  };
  var iconMinusClasses = classNames("nut-inputnumber__icon icon-minus", {
    "nut-inputnumber__icon--disabled": !reduceAllow()
  });
  var iconAddClasses = classNames("nut-inputnumber__icon icon-plus", {
    "nut-inputnumber__icon--disabled": !addAllow()
  });
  var fixedDecimalPlaces = function fixedDecimalPlaces2(v) {
    return Number(v).toFixed(Number(digits));
  };
  var emitChange = function emitChange2(value2, e) {
    var outputValue = fixedDecimalPlaces(value2);
    onChange && onChange(outputValue, e);
    if (!async) {
      if (Number(outputValue) < Number(min)) {
        formatter ? setChecked(formatter(Number(min))) : setChecked(Number(min));
      } else if (Number(outputValue) > Number(max)) {
        formatter ? setChecked(formatter(Number(max))) : setChecked(Number(max));
      } else {
        formatter ? setChecked(formatter(outputValue)) : setChecked(outputValue);
      }
    }
  };
  var reduceNumber = function reduceNumber2(e) {
    onMinus && onMinus(e);
    if (reduceAllow()) {
      if (formatter) {
        var numValue = String(_checked).replace(/[^0-9|.]/gi, "");
        var outputValue = Number(numValue) - Number(step);
        inputRef.current = formatter(outputValue);
        emitChange(outputValue, e);
      } else {
        var _outputValue = Number(_checked) - Number(step);
        emitChange(_outputValue, e);
      }
    } else {
      onOverlimit && onOverlimit(e);
    }
  };
  var addNumber = function addNumber2(e) {
    onPlus && onPlus(e);
    if (addAllow()) {
      if (formatter) {
        var numValue = String(_checked).replace(/[^0-9|.]/gi, "");
        var outputValue = Number(numValue) + Number(step);
        inputRef.current = formatter(outputValue);
        emitChange(outputValue, e);
      } else {
        var _outputValue2 = Number(_checked) + Number(step);
        emitChange(_outputValue2, e);
      }
    } else {
      onOverlimit && onOverlimit(e);
    }
  };
  var changeValue = function changeValue2(e) {
    var input = e.target;
    onChange && onChange(input.valueAsNumber, e);
    if (!async) {
      if (Number.isNaN(input.valueAsNumber)) {
        setChecked("");
      } else {
        setChecked(input.valueAsNumber);
      }
    }
  };
  var changeFormatValue = function changeFormatValue2(e) {
    var input = e.target.value;
    var numReg = new RegExp("^[0-9]*$");
    var numValue = input.replace(/[^0-9|.]/gi, "");
    if (formatter) {
      if (!numReg.test(input[0]) && numValue) {
        setChecked(formatter(numValue));
      } else if (!numReg.test(input[0]) && !numValue) {
        setChecked(input);
      } else if (numReg.test(input[0])) {
        if (formatter(numValue) === inputRef.current) {
          setChecked(numValue);
        } else {
          setChecked(formatter(numValue));
          inputRef.current = formatter(numValue);
        }
      }
    }
  };
  var burFormatValue = function burFormatValue2(e) {
    var input = e.target.value;
    var numReg = new RegExp("^[0-9]*$");
    var numValue = input.replace(/[^0-9|.]/gi, "");
    if (formatter) {
      if (formatter(numValue) === input) {
        emitChange(numValue, e);
        return;
      }
      if (!numReg.test(input) || !input) {
        setChecked(formatter(""));
      }
    }
  };
  var focusValue = function focusValue2(e) {
    if (disabled)
      return;
    if (readOnly)
      return;
    onFocus && onFocus(e);
  };
  var burValue = function burValue2(e) {
    if (disabled)
      return;
    if (readOnly)
      return;
    var input = e.target;
    var value2 = input.valueAsNumber;
    if (Number.isNaN(value2) && !allowEmpty) {
      value2 = Number(defaultValue);
    }
    if (value2 < Number(min)) {
      value2 = Number(min);
    } else if (value2 > Number(max)) {
      value2 = Number(max);
    }
    emitChange(value2, e);
    onBlur && onBlur(e);
  };
  return React__default.createElement("div", _objectSpread({
    className: classes,
    style: styles
  }, restProps), React__default.createElement("div", {
    className: "nut-input-minus"
  }, React__default.createElement(Minus, {
    className: iconMinusClasses,
    onClick: function onClick(e) {
      return reduceNumber(e);
    }
  })), React__default.createElement(React__default.Fragment, null, formatter ? React__default.createElement("input", {
    type: "text",
    min,
    max,
    disabled,
    readOnly,
    value: _checked,
    onInput: changeFormatValue,
    onBlur: burFormatValue,
    onFocus: focusValue
  }) : React__default.createElement("input", {
    type: "number",
    min,
    max,
    disabled,
    readOnly,
    value: _checked,
    onInput: changeValue,
    onBlur: burValue,
    onFocus: focusValue
  })), React__default.createElement("div", {
    className: "nut-input-add"
  }, React__default.createElement(Plus, {
    className: iconAddClasses,
    onClick: function onClick(e) {
      return addNumber(e);
    }
  })));
};
InputNumber.defaultProps = defaultProps;
InputNumber.displayName = "NutInputNumber";
export {
  InputNumber as default
};
