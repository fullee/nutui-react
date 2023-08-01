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
import classNames from "classnames";
import { C as ComponentDefaults } from "./typings.js";
var defaultProps = _objectSpread(_objectSpread({}, ComponentDefaults), {}, {
  left: "",
  right: "",
  back: "",
  fixed: false,
  safeAreaInsetTop: false,
  placeholder: false,
  zIndex: 10
});
var NavBar = function NavBar2(props) {
  var _classNames;
  var _defaultProps$props = _objectSpread(_objectSpread({}, defaultProps), props), right = _defaultProps$props.right, left = _defaultProps$props.left, className = _defaultProps$props.className, style = _defaultProps$props.style, back = _defaultProps$props.back, fixed = _defaultProps$props.fixed, safeAreaInsetTop = _defaultProps$props.safeAreaInsetTop, placeholder = _defaultProps$props.placeholder, zIndex = _defaultProps$props.zIndex, onBackClick = _defaultProps$props.onBackClick;
  var classPrefix = "nut-navbar";
  var children = Array.isArray(props.children) ? props.children : [props.children];
  var styles = function styles2() {
    return _objectSpread(_objectSpread({}, style), {}, {
      zIndex
    });
  };
  var renderLeft = function renderLeft2() {
    return React__default.createElement("div", {
      className: "".concat(classPrefix, "__left")
    }, back && React__default.createElement("div", {
      className: "".concat(classPrefix, "__left__back"),
      onClick: function onClick(e) {
        return onBackClick(e);
      }
    }, back), left);
  };
  var renderContent = function renderContent2() {
    return React__default.createElement("div", {
      className: "".concat(classPrefix, "__title")
    }, children);
  };
  var renderRight = function renderRight2() {
    return React__default.createElement("div", {
      className: "".concat(classPrefix, "__right")
    }, right);
  };
  var renderWrapper = function renderWrapper2() {
    return React__default.createElement("div", {
      className: cls,
      style: styles()
    }, renderLeft(), renderContent(), renderRight());
  };
  var classes = classNames((_classNames = {}, _defineProperty(_classNames, "".concat(classPrefix, "--fixed"), fixed), _defineProperty(_classNames, "".concat(classPrefix, "--safe-area-inset-top"), safeAreaInsetTop), _classNames));
  var cls = classNames(classPrefix, classes, className);
  return React__default.createElement(React__default.Fragment, null, fixed && placeholder ? React__default.createElement("div", {
    className: "".concat(classPrefix, "--placeholder")
  }, renderWrapper()) : renderWrapper());
};
NavBar.defaultProps = defaultProps;
NavBar.displayName = "NutNavBar";
export {
  NavBar as default
};
