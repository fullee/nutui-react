import _slicedToArray from "@babel/runtime/helpers/slicedToArray";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
var _excluded = ["className", "value", "defaultValue", "showCount", "maxLength", "rows", "placeholder", "readOnly", "disabled", "autoSize", "style", "onChange", "onBlur", "onFocus"];
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
import classNames from "classnames";
import { useConfig } from "./ConfigProvider.js";
import { C as ComponentDefaults } from "./typings.js";
import { u as usePropsValue } from "./use-props-value.js";
var defaultProps = _objectSpread(_objectSpread({}, ComponentDefaults), {}, {
  defaultValue: "",
  showCount: false,
  rows: 2,
  maxLength: 140,
  placeholder: "",
  readOnly: false,
  disabled: false,
  autoSize: false
});
var TextArea = function TextArea2(props) {
  var _useConfig = useConfig(), locale = _useConfig.locale;
  var _defaultProps$props = _objectSpread(_objectSpread({}, defaultProps), props), className = _defaultProps$props.className, value = _defaultProps$props.value, defaultValue = _defaultProps$props.defaultValue, showCount = _defaultProps$props.showCount, maxLength = _defaultProps$props.maxLength, rows = _defaultProps$props.rows, placeholder = _defaultProps$props.placeholder, readOnly = _defaultProps$props.readOnly, disabled = _defaultProps$props.disabled, autoSize = _defaultProps$props.autoSize, style = _defaultProps$props.style, onChange = _defaultProps$props.onChange, onBlur = _defaultProps$props.onBlur, onFocus = _defaultProps$props.onFocus, rest = _objectWithoutProperties(_defaultProps$props, _excluded);
  var classPrefix = "nut-textarea";
  var textareaRef = useRef(null);
  var compositionRef = useRef(false);
  var format = function format2(value2) {
    if (maxLength !== void 0 && value2.length > maxLength) {
      return value2.substring(0, maxLength);
    }
    return value2;
  };
  var _usePropsValue = usePropsValue({
    value,
    defaultValue,
    finalValue: format(defaultValue),
    onChange
  }), _usePropsValue2 = _slicedToArray(_usePropsValue, 2), inputValue = _usePropsValue2[0], setInputValue = _usePropsValue2[1];
  useEffect(function() {
    if (autoSize) {
      setContentHeight();
    }
  }, [autoSize, defaultValue, inputValue]);
  var setContentHeight = function setContentHeight2() {
    var textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = "auto";
      var height = textarea === null || textarea === void 0 ? void 0 : textarea.scrollHeight;
      if (height) {
        textarea.style.height = "".concat(height, "px");
      }
    }
  };
  var handleChange = function handleChange2(event) {
    var text = event.target;
    var value2 = compositionRef.current ? text.value : format(text.value);
    setInputValue(value2);
  };
  var handleFocus = function handleFocus2(event) {
    if (disabled)
      return;
    if (readOnly)
      return;
    onFocus && onFocus(event);
  };
  var handleBlur = function handleBlur2(event) {
    if (disabled)
      return;
    if (readOnly)
      return;
    onBlur && onBlur(event);
  };
  return React__default.createElement("div", {
    className: classNames(classPrefix, className, _defineProperty({}, "".concat(classPrefix, "__disabled"), disabled))
  }, React__default.createElement("textarea", _objectSpread({
    ref: textareaRef,
    className: "".concat(classPrefix, "__textarea"),
    style,
    disabled,
    readOnly,
    value: inputValue,
    onChange: function onChange2(e) {
      return handleChange(e);
    },
    onBlur: function onBlur2(e) {
      return handleBlur(e);
    },
    onFocus: function onFocus2(e) {
      return handleFocus(e);
    },
    onCompositionEnd: function onCompositionEnd() {
      compositionRef.current = false;
    },
    onCompositionStart: function onCompositionStart() {
      compositionRef.current = true;
    },
    rows,
    maxLength: maxLength === -1 ? void 0 : maxLength,
    placeholder: placeholder || locale.placeholder
  }, rest)), showCount && React__default.createElement("div", {
    className: "".concat(classPrefix, "__limit")
  }, inputValue.length, "/", maxLength < 0 ? 0 : maxLength));
};
TextArea.defaultProps = defaultProps;
TextArea.displayName = "NutTextArea";
export {
  TextArea as default
};
