import _toConsumableArray from "@babel/runtime/helpers/toConsumableArray";
import _slicedToArray from "@babel/runtime/helpers/slicedToArray";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
var _excluded = ["title", "description", "tips", "visible", "value", "error", "hideFooter", "length", "plain", "style", "className", "closeable", "autoFocus", "onFocus", "onChange", "onConfirm", "onTips", "onCancel", "onClose", "onComplete", "onOverlayClick", "onCloseIconClick"];
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
import React__default, { useMemo, useEffect } from "react";
import { Tips } from "@nutui/icons-react";
import classNames from "classnames";
import Popup from "./Popup.js";
import { useConfig } from "./ConfigProvider.js";
import { C as ComponentDefaults } from "./typings.js";
import { u as usePropsValue } from "./use-props-value.js";
var defaultProps = _objectSpread(_objectSpread({}, ComponentDefaults), {}, {
  value: "",
  visible: false,
  plain: false,
  hideFooter: true,
  length: 6,
  autoFocus: false
});
var ShortPassword = function ShortPassword2(props) {
  var _useConfig = useConfig(), locale = _useConfig.locale;
  var _defaultProps$props = _objectSpread(_objectSpread({}, defaultProps), props), title = _defaultProps$props.title, description = _defaultProps$props.description, tips = _defaultProps$props.tips, visible = _defaultProps$props.visible, value = _defaultProps$props.value, error = _defaultProps$props.error, hideFooter = _defaultProps$props.hideFooter, length = _defaultProps$props.length, plain = _defaultProps$props.plain, style = _defaultProps$props.style, className = _defaultProps$props.className, closeable = _defaultProps$props.closeable, autoFocus = _defaultProps$props.autoFocus, onFocus = _defaultProps$props.onFocus, onChange = _defaultProps$props.onChange, onConfirm = _defaultProps$props.onConfirm, onTips = _defaultProps$props.onTips, onCancel = _defaultProps$props.onCancel, onClose = _defaultProps$props.onClose, onComplete = _defaultProps$props.onComplete, onOverlayClick = _defaultProps$props.onOverlayClick, onCloseIconClick = _defaultProps$props.onCloseIconClick, rest = _objectWithoutProperties(_defaultProps$props, _excluded);
  var classPrefix = "nut-shortpassword";
  var comLen = useMemo(function() {
    return Math.min(Math.max(4, length || 4), 6);
  }, [length]);
  var format = function format2(val) {
    return val.slice(0, comLen);
  };
  var _usePropsValue = usePropsValue({
    value,
    onChange
  }), _usePropsValue2 = _slicedToArray(_usePropsValue, 2), inputValue = _usePropsValue2[0], setInputValue = _usePropsValue2[1];
  useEffect(function() {
    if (visible && autoFocus) {
      onFocus && onFocus();
    }
  }, [visible]);
  useEffect(function() {
    var val = format(value);
    if (val.length >= comLen) {
      onComplete && onComplete(val);
    }
    setInputValue(format(value));
  }, [value]);
  var sure = function sure2() {
    onConfirm && onConfirm(inputValue);
  };
  return React__default.createElement(Popup, _objectSpread({
    style: {
      padding: "32px 24px 28px 24px",
      borderRadius: "12px",
      textAlign: "center"
    },
    visible,
    closeable: true,
    onOverlayClick: onClose,
    onCloseIconClick: onClose
  }, rest), React__default.createElement("div", {
    className: classNames(className, classPrefix),
    style
  }, React__default.createElement("div", {
    className: "".concat(classPrefix, "__title")
  }, title || locale.shortpassword.title), React__default.createElement("div", {
    className: "".concat(classPrefix, "__description")
  }, description || locale.shortpassword.description), React__default.createElement("div", {
    className: "".concat(classPrefix, "__input"),
    onClick: onFocus
  }, React__default.createElement("div", {
    className: "".concat(classPrefix, "__input-site")
  }), React__default.createElement("div", {
    className: "".concat(classPrefix, "__input-fake")
  }, _toConsumableArray(new Array(comLen).keys()).map(function(item, index) {
    return React__default.createElement("div", {
      className: "".concat(classPrefix, "__input-fake__li"),
      key: index
    }, inputValue.length > index && React__default.createElement(React__default.Fragment, null, plain ? inputValue[index] : React__default.createElement("div", {
      className: "".concat(classPrefix, "__input-fake__li__icon")
    })));
  }))), React__default.createElement("div", {
    className: "".concat(classPrefix, "__message")
  }, React__default.createElement("div", {
    className: "".concat(classPrefix, "__message__error")
  }, error), React__default.createElement("div", {
    className: "".concat(classPrefix, "__message__forget"),
    onClick: onTips
  }, tips || React__default.createElement(React__default.Fragment, null, React__default.createElement(Tips, {
    width: 11,
    height: 11,
    style: {
      marginRight: "3px"
    }
  }), locale.shortpassword.tips))), !hideFooter && React__default.createElement("div", {
    className: "".concat(classPrefix, "__footer")
  }, React__default.createElement("div", {
    className: "".concat(classPrefix, "__footer__cancel"),
    onClick: onCancel
  }, locale.cancel), React__default.createElement("div", {
    className: "".concat(classPrefix, "__footer__sure"),
    onClick: sure
  }, locale.confirm))));
};
ShortPassword.defaultProps = defaultProps;
ShortPassword.displayName = "NutShortPassword";
export {
  ShortPassword as default
};
