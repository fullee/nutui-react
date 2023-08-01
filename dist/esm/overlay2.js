import _slicedToArray from "@babel/runtime/helpers/slicedToArray";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
var _excluded = ["children", "zIndex", "duration", "className", "closeOnOverlayClick", "visible", "lockScroll", "style", "afterShow", "afterClose", "onClick"];
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
import React__default, { useState, useEffect } from "react";
import { CSSTransition } from "react-transition-group";
import classNames from "classnames";
import { C as ComponentDefaults } from "./typings.js";
var defaultOverlayProps = _objectSpread(_objectSpread({}, ComponentDefaults), {}, {
  zIndex: 1e3,
  duration: 300,
  closeOnOverlayClick: true,
  visible: false,
  lockScroll: true,
  onClick: function onClick(event) {
  }
});
var Overlay = function Overlay2(props) {
  var _defaultOverlayProps$ = _objectSpread(_objectSpread({}, defaultOverlayProps), props), children = _defaultOverlayProps$.children, zIndex = _defaultOverlayProps$.zIndex, duration = _defaultOverlayProps$.duration, className = _defaultOverlayProps$.className, closeOnOverlayClick = _defaultOverlayProps$.closeOnOverlayClick, visible = _defaultOverlayProps$.visible, lockScroll = _defaultOverlayProps$.lockScroll, style = _defaultOverlayProps$.style, afterShow = _defaultOverlayProps$.afterShow, afterClose = _defaultOverlayProps$.afterClose, onClick2 = _defaultOverlayProps$.onClick, rest = _objectWithoutProperties(_defaultOverlayProps$, _excluded);
  var _useState = useState(visible), _useState2 = _slicedToArray(_useState, 2), innerVisible = _useState2[0], setInnerVisible = _useState2[1];
  var classPrefix = "nut-overlay";
  useEffect(function() {
    if (visible) {
      setInnerVisible(true);
    } else {
      setInnerVisible(false);
    }
    lock();
  }, [visible]);
  useEffect(function() {
    return function() {
      document.body.classList.remove("nut-overflow-hidden");
    };
  }, []);
  var classes = classNames(className, classPrefix);
  var styles = _objectSpread({
    zIndex
  }, style);
  var lock = function lock2() {
    if (lockScroll && visible) {
      document.body.classList.add("nut-overflow-hidden");
    } else {
      document.body.classList.remove("nut-overflow-hidden");
    }
  };
  var handleClick = function handleClick2(e) {
    if (closeOnOverlayClick) {
      onClick2 && onClick2(e);
    }
  };
  var onHandleOpened = function onHandleOpened2(e) {
    afterShow && afterShow();
  };
  var onHandleClosed = function onHandleClosed2(e) {
    afterClose && afterClose();
  };
  return React__default.createElement(React__default.Fragment, null, React__default.createElement(CSSTransition, {
    classNames: "".concat(classPrefix, "-slide"),
    unmountOnExit: true,
    timeout: duration,
    "in": innerVisible,
    onEntered: onHandleOpened,
    onExited: onHandleClosed
  }, React__default.createElement("div", _objectSpread(_objectSpread({
    className: classes,
    style: styles
  }, rest), {}, {
    onClick: handleClick
  }), children)));
};
Overlay.defaultProps = defaultOverlayProps;
Overlay.displayName = "NutOverlay";
export {
  Overlay as O,
  defaultOverlayProps as d
};
