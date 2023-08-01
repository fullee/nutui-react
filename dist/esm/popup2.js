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
import React__default, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { CSSTransition } from "react-transition-group";
import classNames from "classnames";
import { Close } from "@nutui/icons-react";
import { d as defaultOverlayProps } from "./overlay2.js";
import Overlay from "./Overlay.js";
import { C as ComponentDefaults } from "./typings.js";
var defaultProps = _objectSpread(_objectSpread({}, ComponentDefaults), {}, {
  position: "center",
  transition: "",
  overlayStyle: {},
  overlayClassName: "",
  closeable: false,
  closeIconPosition: "top-right",
  closeIcon: "close",
  destroyOnClose: false,
  portal: null,
  overlay: true,
  round: false,
  onOpen: function onOpen() {
  },
  onClose: function onClose() {
  },
  onOverlayClick: function onOverlayClick(e) {
    return true;
  },
  onCloseIconClick: function onCloseIconClick(e) {
    return true;
  }
}, defaultOverlayProps);
var _zIndex = 1e3;
var Popup = function Popup2(props) {
  var _classNames, _classNames2;
  var _defaultProps$props = _objectSpread(_objectSpread({}, defaultProps), props), children = _defaultProps$props.children, visible = _defaultProps$props.visible, overlay = _defaultProps$props.overlay, closeOnOverlayClick = _defaultProps$props.closeOnOverlayClick, overlayStyle = _defaultProps$props.overlayStyle, overlayClassName = _defaultProps$props.overlayClassName, zIndex = _defaultProps$props.zIndex, lockScroll = _defaultProps$props.lockScroll, duration = _defaultProps$props.duration, closeable = _defaultProps$props.closeable, closeIconPosition = _defaultProps$props.closeIconPosition, closeIcon = _defaultProps$props.closeIcon, left = _defaultProps$props.left, title = _defaultProps$props.title, style = _defaultProps$props.style, transition = _defaultProps$props.transition, round = _defaultProps$props.round, position = _defaultProps$props.position, className = _defaultProps$props.className, destroyOnClose = _defaultProps$props.destroyOnClose, portal = _defaultProps$props.portal, onOpen2 = _defaultProps$props.onOpen, onClose2 = _defaultProps$props.onClose, onOverlayClick2 = _defaultProps$props.onOverlayClick, onCloseIconClick2 = _defaultProps$props.onCloseIconClick, afterShow = _defaultProps$props.afterShow, afterClose = _defaultProps$props.afterClose, onClick = _defaultProps$props.onClick;
  var _useState = useState(zIndex || _zIndex), _useState2 = _slicedToArray(_useState, 2), index = _useState2[0], setIndex = _useState2[1];
  var _useState3 = useState(visible), _useState4 = _slicedToArray(_useState3, 2), innerVisible = _useState4[0], setInnerVisible = _useState4[1];
  var _useState5 = useState(true), _useState6 = _slicedToArray(_useState5, 2), showChildren = _useState6[0], setShowChildren = _useState6[1];
  var _useState7 = useState(""), _useState8 = _slicedToArray(_useState7, 2), transitionName = _useState8[0], setTransitionName = _useState8[1];
  var classPrefix = "nut-popup";
  var baseStyle = {
    zIndex: index
  };
  var overlayStyles = _objectSpread(_objectSpread({}, overlayStyle), baseStyle);
  var popStyles = _objectSpread(_objectSpread({}, style), baseStyle);
  var popClassName = classNames((_classNames = {
    round
  }, _defineProperty(_classNames, "".concat(classPrefix), true), _defineProperty(_classNames, "".concat(classPrefix, "-").concat(position), true), _defineProperty(_classNames, "".concat(className || ""), true), _classNames));
  var closeClasses = classNames((_classNames2 = {}, _defineProperty(_classNames2, "".concat(classPrefix, "__close-icon"), true), _defineProperty(_classNames2, "".concat(classPrefix, "__close-icon--").concat(closeIconPosition), true), _classNames2));
  var open = function open2() {
    if (!innerVisible) {
      setInnerVisible(true);
      setIndex(++_zIndex);
    }
    if (destroyOnClose) {
      setShowChildren(true);
    }
    onOpen2 && onOpen2();
  };
  var close = function close2() {
    if (innerVisible) {
      setInnerVisible(false);
      if (destroyOnClose) {
        setTimeout(function() {
          setShowChildren(false);
        }, Number(duration));
      }
      onClose2 && onClose2();
    }
  };
  var onHandleClickOverlay = function onHandleClickOverlay2(e) {
    e.stopPropagation();
    if (closeOnOverlayClick) {
      var closed = onOverlayClick2 && onOverlayClick2(e);
      closed && close();
    }
  };
  var onHandleClick = function onHandleClick2(e) {
    onClick && onClick(e);
  };
  var onHandleClickCloseIcon = function onHandleClickCloseIcon2(e) {
    var closed = onCloseIconClick2 && onCloseIconClick2(e);
    closed && close();
  };
  var onHandleOpened = function onHandleOpened2(e) {
    afterShow && afterShow();
  };
  var onHandleClosed = function onHandleClosed2(e) {
    afterClose && afterClose();
  };
  var resolveContainer = function resolveContainer2(getContainer) {
    var container = typeof getContainer === "function" ? getContainer() : getContainer;
    return container || document.body;
  };
  var renderToContainer = function renderToContainer2(getContainer, node) {
    if (getContainer) {
      var container = resolveContainer(getContainer);
      return createPortal(node, container);
    }
    return node;
  };
  var renderIcon = function renderIcon2() {
    if (closeable) {
      return React__default.createElement("div", {
        className: closeClasses,
        onClick: onHandleClickCloseIcon
      }, React__default.isValidElement(closeIcon) ? closeIcon : React__default.createElement(Close, {
        width: 12,
        height: 12
      }));
    }
    return null;
  };
  var renderTitle = function renderTitle2() {
    return React__default.createElement(React__default.Fragment, null, position === "bottom" && React__default.createElement(React__default.Fragment, null, left && React__default.createElement("div", {
      className: "".concat(classPrefix, "-left-icon")
    }, left), title && React__default.createElement("div", {
      className: "".concat(classPrefix, "-title")
    }, title)));
  };
  var renderPop = function renderPop2() {
    return React__default.createElement(CSSTransition, {
      classNames: transitionName,
      unmountOnExit: true,
      timeout: duration,
      "in": innerVisible,
      onEntered: onHandleOpened,
      onExited: onHandleClosed
    }, React__default.createElement("div", {
      style: popStyles,
      className: popClassName,
      onClick: onHandleClick
    }, renderTitle(), renderIcon(), showChildren ? children : ""));
  };
  var renderNode = function renderNode2() {
    return React__default.createElement(React__default.Fragment, null, overlay ? React__default.createElement(React__default.Fragment, null, React__default.createElement(Overlay, {
      style: overlayStyles,
      className: overlayClassName,
      visible: innerVisible,
      closeOnOverlayClick,
      zIndex,
      lockScroll,
      duration,
      onClick: onHandleClickOverlay
    }), renderPop()) : React__default.createElement(React__default.Fragment, null, renderPop()));
  };
  useEffect(function() {
    visible && open();
    !visible && close();
  }, [visible]);
  useEffect(function() {
    setTransitionName(transition || "".concat(classPrefix, "-slide-").concat(position));
  }, [position, transition]);
  return React__default.createElement(React__default.Fragment, null, renderToContainer(portal, renderNode()));
};
Popup.defaultProps = defaultProps;
Popup.displayName = "NutPopup";
export {
  Popup as P
};
