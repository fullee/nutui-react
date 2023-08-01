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
import React__default, { useRef, useState, useEffect } from "react";
import { Search, CircleClose } from "@nutui/icons-react";
import { useConfig } from "./ConfigProvider.js";
import { C as ComponentDefaults } from "./typings.js";
var defaultProps = _objectSpread(_objectSpread({}, ComponentDefaults), {}, {
  placeholder: "",
  shape: "square",
  disabled: false,
  maxLength: 9999,
  clearable: true,
  readOnly: false,
  autoFocus: false,
  left: "",
  right: "",
  rightIn: "",
  leftIn: React__default.createElement(Search, {
    width: "12",
    height: "12"
  })
});
var SearchBar = function SearchBar2(props) {
  var classPrefix = "nut-searchbar";
  var _useConfig = useConfig(), locale = _useConfig.locale;
  var searchRef = useRef(null);
  var _useState = useState(function() {
    return props.value;
  }), _useState2 = _slicedToArray(_useState, 2), value = _useState2[0], setValue = _useState2[1];
  var _defaultProps$props = _objectSpread(_objectSpread({}, defaultProps), props), placeholder = _defaultProps$props.placeholder, shape = _defaultProps$props.shape, className = _defaultProps$props.className, disabled = _defaultProps$props.disabled, maxLength = _defaultProps$props.maxLength, clearable = _defaultProps$props.clearable, readOnly = _defaultProps$props.readOnly, autoFocus = _defaultProps$props.autoFocus, right = _defaultProps$props.right, left = _defaultProps$props.left, leftIn = _defaultProps$props.leftIn, rightIn = _defaultProps$props.rightIn, onChange = _defaultProps$props.onChange, onFocus = _defaultProps$props.onFocus, onBlur = _defaultProps$props.onBlur, onClear = _defaultProps$props.onClear, onSearch = _defaultProps$props.onSearch, onInputClick = _defaultProps$props.onInputClick;
  var forceFocus = function forceFocus2() {
    var searchSelf = searchRef.current;
    searchSelf && searchSelf.focus();
  };
  var change = function change2(event) {
    var value2 = event.target.value;
    onChange && (onChange === null || onChange === void 0 ? void 0 : onChange(value2, event));
    setValue(value2);
  };
  var focus = function focus2(event) {
    var value2 = event.target.value;
    onFocus && (onFocus === null || onFocus === void 0 ? void 0 : onFocus(value2, event));
  };
  var blur = function blur2(event) {
    var searchSelf = searchRef.current;
    searchSelf && searchSelf.blur();
    var value2 = event.target.value;
    onBlur && (onBlur === null || onBlur === void 0 ? void 0 : onBlur(value2, event));
  };
  useEffect(function() {
    setValue(props.value);
  }, [props.value]);
  useEffect(function() {
    autoFocus && forceFocus();
  }, [autoFocus]);
  var renderField = function renderField2() {
    return React__default.createElement("input", {
      className: "".concat(classPrefix, "__input ").concat(clearable ? "".concat(classPrefix, "__input-clear") : ""),
      ref: searchRef,
      style: _objectSpread({}, props.style),
      value: value || "",
      placeholder: placeholder || locale.placeholder,
      disabled,
      readOnly,
      maxLength,
      onKeyDown: onKeydown,
      onChange: function onChange2(e) {
        return change(e);
      },
      onFocus: function onFocus2(e) {
        return focus(e);
      },
      onBlur: function onBlur2(e) {
        return blur(e);
      },
      onClick: function onClick(e) {
        return clickInput(e);
      }
    });
  };
  var clickInput = function clickInput2(e) {
    onInputClick && onInputClick(e);
  };
  var renderLeftIn = function renderLeftIn2() {
    if (!leftIn)
      return null;
    return React__default.createElement("div", {
      className: "".concat(classPrefix, "__leftin ").concat(classPrefix, "__icon")
    }, leftIn);
  };
  var renderLeft = function renderLeft2() {
    if (!left)
      return null;
    return React__default.createElement("div", {
      className: "".concat(classPrefix, "__left")
    }, left);
  };
  var renderRightIn = function renderRightIn2() {
    if (!rightIn)
      return null;
    return React__default.createElement("div", {
      className: "".concat(classPrefix, "__rightin ").concat(classPrefix, "__icon")
    }, rightIn);
  };
  var renderRight = function renderRight2() {
    if (!right)
      return null;
    return React__default.createElement("div", {
      className: "".concat(classPrefix, "__right")
    }, right);
  };
  var handleClear = function handleClear2() {
    return React__default.createElement("div", {
      className: "".concat(classPrefix, "__clear ").concat(rightIn ? "pos-right" : ""),
      onClick: function onClick(e) {
        return clearaVal(e);
      }
    }, React__default.createElement(CircleClose, {
      color: "#555",
      width: 12,
      height: 12
    }));
  };
  var clearaVal = function clearaVal2(event) {
    if (disabled || readOnly) {
      return;
    }
    setValue("");
    onClear && onClear(event);
    forceFocus();
  };
  var onKeydown = function onKeydown2(e) {
    if (e.key === "Enter") {
      var event = e.nativeEvent;
      if (typeof event.cancelable !== "boolean" || event.cancelable) {
        event.preventDefault();
      }
      onSearch && onSearch(value);
    }
  };
  return React__default.createElement("div", {
    className: "".concat(classPrefix, " ").concat(disabled ? "".concat(classPrefix, "__disabled") : "", "  ").concat(className || ""),
    style: _objectSpread({}, props.style)
  }, renderLeft(), React__default.createElement("div", {
    className: "".concat(classPrefix, "__content ").concat(shape === "round" ? "".concat(classPrefix, "__round") : "")
  }, renderLeftIn(), renderField(), renderRightIn(), clearable && value && handleClear()), renderRight());
};
SearchBar.defaultProps = defaultProps;
SearchBar.displayName = "NutSearchBar";
export {
  SearchBar as default
};
