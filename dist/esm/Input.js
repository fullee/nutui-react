import _slicedToArray from "@babel/runtime/helpers/slicedToArray";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
var _excluded = ["type", "name", "placeholder", "align", "disabled", "readOnly", "maxLength", "clearable", "clearIcon", "formatTrigger", "autoFocus", "style", "className", "onChange", "onFocus", "onClear", "formatter", "onClick", "confirmType", "defaultValue", "value"];
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
import React__default, { forwardRef, useRef, useState, useImperativeHandle, useCallback } from "react";
import { MaskClose } from "@nutui/icons-react";
import { useConfig } from "./ConfigProvider.js";
import { C as ComponentDefaults } from "./typings.js";
import { u as usePropsValue } from "./use-props-value.js";
function trimExtraChar(value, _char, regExp) {
  var index = value.indexOf(_char);
  if (index === -1) {
    return value;
  }
  if (_char === "-" && index !== 0) {
    return value.slice(0, index);
  }
  return value.slice(0, index + 1) + value.slice(index).replace(regExp, "");
}
function formatNumber(value) {
  var allowDot = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : true;
  var allowMinus = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : true;
  if (allowDot) {
    value = trimExtraChar(value, ".", /\./g);
  } else {
    value = value.split(".")[0];
  }
  if (allowMinus) {
    value = trimExtraChar(value, "-", /-/g);
  } else {
    value = value.replace(/-/, "");
  }
  var regExp = allowDot ? /[^-0-9.]/g : /[^-0-9]/g;
  return value.replace(regExp, "");
}
var defaultProps = _objectSpread(_objectSpread({}, ComponentDefaults), {}, {
  type: "text",
  name: "",
  placeholder: "",
  confirmType: "done",
  align: "left",
  required: false,
  disabled: false,
  readOnly: false,
  maxLength: 9999,
  clearable: false,
  clearIcon: null,
  formatTrigger: "onChange",
  autoFocus: false
});
var Input = forwardRef(function(props, ref) {
  var _useConfig = useConfig(), locale = _useConfig.locale;
  var _defaultProps$props = _objectSpread(_objectSpread({}, defaultProps), props), type = _defaultProps$props.type, name = _defaultProps$props.name, placeholder = _defaultProps$props.placeholder, align = _defaultProps$props.align, disabled = _defaultProps$props.disabled, readOnly = _defaultProps$props.readOnly, maxLength = _defaultProps$props.maxLength, clearable = _defaultProps$props.clearable, clearIcon = _defaultProps$props.clearIcon, formatTrigger = _defaultProps$props.formatTrigger, autoFocus = _defaultProps$props.autoFocus, style = _defaultProps$props.style, className = _defaultProps$props.className, onChange = _defaultProps$props.onChange, onFocus = _defaultProps$props.onFocus, onClear = _defaultProps$props.onClear, formatter = _defaultProps$props.formatter, _onClick = _defaultProps$props.onClick, confirmType = _defaultProps$props.confirmType, defaultValue = _defaultProps$props.defaultValue, _value = _defaultProps$props.value, rest = _objectWithoutProperties(_defaultProps$props, _excluded);
  var _usePropsValue = usePropsValue({
    value: props.value,
    defaultValue: props.defaultValue,
    finalValue: "",
    onChange
  }), _usePropsValue2 = _slicedToArray(_usePropsValue, 2), value = _usePropsValue2[0], setValue = _usePropsValue2[1];
  var inputRef = useRef(null);
  var composingRef = useRef(false);
  var _useState = useState(false), _useState2 = _slicedToArray(_useState, 2), active = _useState2[0], setActive = _useState2[1];
  useImperativeHandle(ref, function() {
    return {
      clear: function clear() {
        setValue("");
      },
      focus: function focus() {
        var _inputRef$current;
        (_inputRef$current = inputRef.current) === null || _inputRef$current === void 0 ? void 0 : _inputRef$current.focus();
      },
      blur: function blur() {
        var _inputRef$current2;
        (_inputRef$current2 = inputRef.current) === null || _inputRef$current2 === void 0 ? void 0 : _inputRef$current2.blur();
      },
      get nativeElement() {
        return inputRef.current;
      }
    };
  });
  var inputClass = useCallback(function() {
    var classPrefix = "nut-input";
    return [classPrefix, "".concat(disabled ? "".concat(classPrefix, "-disabled") : "")].filter(Boolean).join(" ");
  }, [disabled]);
  var updateValue = function updateValue2(value2) {
    var trigger = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "onChange";
    var val = value2;
    if (type === "number") {
      val = formatNumber(val, false, true);
    }
    if (type === "digit") {
      val = formatNumber(val, true, true);
    }
    if (formatter && trigger === formatTrigger) {
      val = formatter(val);
    }
    setValue(val);
    var eventHandler = props[trigger];
    if (eventHandler && typeof eventHandler === "function") {
      eventHandler(val);
    }
  };
  var handleFocus = function handleFocus2(event) {
    var val = event.target.value;
    onFocus && onFocus(val);
    setActive(true);
  };
  var handleInput = function handleInput2(value2) {
    updateValue(value2, "onChange");
  };
  var handleBlur = function handleBlur2(event) {
    var val = event.target.value;
    updateValue(val, "onBlur");
    setActive(false);
  };
  var inputType = function inputType2(type2) {
    if (type2 === "digit") {
      return "text";
    }
    if (type2 === "number") {
      return "tel";
    }
    return type2;
  };
  return React__default.createElement("div", {
    className: "".concat(inputClass(), "  ").concat(className || ""),
    style,
    onClick: function onClick(e) {
      _onClick && _onClick(e);
    }
  }, React__default.createElement("input", _objectSpread(_objectSpread({}, rest), {}, {
    name,
    className: "nut-input-native",
    ref: inputRef,
    style: {
      textAlign: align
    },
    type: inputType(type),
    maxLength,
    placeholder: placeholder || locale.placeholder,
    disabled,
    readOnly,
    value,
    autoFocus,
    enterKeyHint: confirmType,
    onBlur: function onBlur(e) {
      handleBlur(e);
    },
    onFocus: function onFocus2(e) {
      handleFocus(e);
    },
    onChange: function onChange2(e) {
      handleInput(e.currentTarget.value);
    },
    onCompositionStart: function onCompositionStart(e) {
      var _props$onCompositionS;
      composingRef.current = true;
      (_props$onCompositionS = props.onCompositionStart) === null || _props$onCompositionS === void 0 ? void 0 : _props$onCompositionS.call(props, e);
    },
    onCompositionEnd: function onCompositionEnd(e) {
      var _props$onCompositionE;
      composingRef.current = false;
      (_props$onCompositionE = props.onCompositionEnd) === null || _props$onCompositionE === void 0 ? void 0 : _props$onCompositionE.call(props, e);
    }
  })), clearable && !readOnly && active && value.length > 0 ? React__default.createElement("span", {
    style: {
      display: "flex",
      alignItems: "center"
    },
    onClick: function onClick() {
      if (!disabled) {
        setValue("");
        onClear && onClear("");
      }
    }
  }, clearIcon || React__default.createElement(MaskClose, {
    className: "nut-input-clear"
  })) : null);
});
Input.defaultProps = defaultProps;
Input.displayName = "NutInput";
export {
  Input as default
};
