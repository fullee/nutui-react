import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
var _excluded = ["children", "cancelText", "optionKey", "title", "description", "options", "onCancel", "onSelect", "visible", "className", "style"];
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
import { P as Popup } from "./popup2.js";
import { C as ComponentDefaults } from "./typings.js";
import "react-dom";
import "react-transition-group";
import "classnames";
import "@nutui/icons-react";
import "./overlay2.js";
import "./Overlay.js";
var defaultProps = _objectSpread(_objectSpread({}, ComponentDefaults), {}, {
  visible: false,
  description: "",
  options: [],
  optionKey: {
    name: "name",
    description: "description"
  },
  cancelText: "",
  onCancel: function onCancel() {
  },
  onSelect: function onSelect() {
  }
});
var ActionSheet = function ActionSheet2(props) {
  var _defaultProps$props = _objectSpread(_objectSpread({}, defaultProps), props), children = _defaultProps$props.children, cancelText = _defaultProps$props.cancelText, optionKey = _defaultProps$props.optionKey, title = _defaultProps$props.title, description = _defaultProps$props.description, options = _defaultProps$props.options, onCancel2 = _defaultProps$props.onCancel, onSelect2 = _defaultProps$props.onSelect, visible = _defaultProps$props.visible, className = _defaultProps$props.className, style = _defaultProps$props.style, rest = _objectWithoutProperties(_defaultProps$props, _excluded);
  var classPrefix = "nut-actionsheet";
  var cancelActionSheet = function cancelActionSheet2() {
    onCancel2 && onCancel2();
  };
  var chooseItem = function chooseItem2(item, index) {
    if (!item.disabled) {
      onSelect2 && onSelect2(item, index);
    }
  };
  return React__default.createElement(Popup, {
    round: true,
    visible,
    position: "bottom",
    title,
    className: classPrefix,
    onClose: function onClose() {
      onCancel2 && onCancel2();
    }
  }, React__default.createElement("div", _objectSpread({
    className: "".concat(className),
    style
  }, rest), description && React__default.createElement("div", {
    className: "".concat(classPrefix, "__description")
  }, description), options.length ? React__default.createElement("div", {
    className: "".concat(classPrefix, "__list")
  }, options.map(function(item, index) {
    return React__default.createElement("div", {
      className: "".concat(classPrefix, "__item ").concat(item.disabled ? "disabled" : "", " ").concat(item.danger ? "danger" : ""),
      key: index,
      onClick: function onClick() {
        return chooseItem(item, index);
      }
    }, item[optionKey.name], React__default.createElement("div", {
      className: "".concat(classPrefix, "__item-description")
    }, item[optionKey.description]));
  })) : children, cancelText && React__default.createElement("div", {
    className: "".concat(classPrefix, "__cancel"),
    onClick: function onClick() {
      return cancelActionSheet();
    }
  }, cancelText)));
};
ActionSheet.defaultProps = defaultProps;
ActionSheet.displayName = "NutActionSheet";
export {
  ActionSheet as default
};
