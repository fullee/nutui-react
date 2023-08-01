import _slicedToArray from "@babel/runtime/helpers/slicedToArray";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
var _excluded = ["children", "list", "location", "visible", "offset", "targetId", "overlay", "closeOnOutsideClick", "closeOnActionClick", "className", "showArrow", "style", "onClick", "onOpen", "onClose", "onSelect"];
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
import classNames from "classnames";
import Popup from "./Popup.js";
import { g as getRect } from "./use-client-rect.js";
import { C as ComponentDefaults } from "./typings.js";
import { u as useClickAway } from "./use-click-away.js";
import "./index.js";
var defaultProps = _objectSpread(_objectSpread({}, ComponentDefaults), {}, {
  list: [],
  location: "bottom",
  visible: false,
  offset: [0, 12],
  targetId: "",
  showArrow: true,
  closeOnOutsideClick: true,
  closeOnActionClick: true,
  overlay: false,
  onClick: function onClick() {
  },
  onOpen: function onOpen() {
  },
  onClose: function onClose() {
  }
});
var classPrefix = "nut-popover";
var Popover = function Popover2(props) {
  var _defaultProps$props = _objectSpread(_objectSpread({}, defaultProps), props), children = _defaultProps$props.children, list = _defaultProps$props.list, location = _defaultProps$props.location, visible = _defaultProps$props.visible, offset = _defaultProps$props.offset, targetId = _defaultProps$props.targetId, overlay = _defaultProps$props.overlay, closeOnOutsideClick = _defaultProps$props.closeOnOutsideClick, closeOnActionClick = _defaultProps$props.closeOnActionClick, className = _defaultProps$props.className, showArrow = _defaultProps$props.showArrow, style = _defaultProps$props.style, onClick2 = _defaultProps$props.onClick, onOpen2 = _defaultProps$props.onOpen, onClose2 = _defaultProps$props.onClose, onSelect = _defaultProps$props.onSelect, rest = _objectWithoutProperties(_defaultProps$props, _excluded);
  var popoverRef = useRef(null);
  var popoverContentRef = useRef(null);
  var _useState = useState(false), _useState2 = _slicedToArray(_useState, 2), showPopup = _useState2[0], setShowPopup = _useState2[1];
  var _useState3 = useState(0), _useState4 = _slicedToArray(_useState3, 2), elWidth = _useState4[0], setElWidth = _useState4[1];
  var _useState5 = useState(0), _useState6 = _slicedToArray(_useState5, 2), elHeight = _useState6[0], setElHeight = _useState6[1];
  var _useState7 = useState(), _useState8 = _slicedToArray(_useState7, 2), rootPosition = _useState8[0], setRootPosition = _useState8[1];
  useEffect(function() {
    setShowPopup(visible);
    if (visible) {
      setTimeout(function() {
        getContentWidth();
      }, 0);
    }
  }, [visible]);
  var targetSet = [targetId ? document.querySelector("#".concat(targetId)) : popoverRef.current, popoverContentRef.current];
  useClickAway(function() {
    props.onClick && props.onClick();
    onClose2 && onClose2();
  }, targetSet, "touchstart", true, visible, closeOnOutsideClick);
  var getContentWidth = function getContentWidth2() {
    var rect = getRect(popoverRef.current);
    var scrollDis = document.documentElement.scrollTop || window.scrollY;
    if (targetId) {
      setTimeout(function() {
        rect = getRect(document.querySelector("#".concat(targetId)));
        setRootPosition({
          width: rect.width,
          height: rect.height,
          left: rect.left,
          top: rect.top + scrollDis,
          right: rect.right
        });
        if (popoverContentRef.current) {
          setElWidth(popoverContentRef.current.clientWidth);
          setElHeight(popoverContentRef.current.clientHeight);
        }
      }, 0);
    } else {
      setRootPosition({
        width: rect.width,
        height: rect.height,
        left: rect.left,
        top: rect.top + scrollDis,
        right: rect.right
      });
      if (popoverContentRef.current) {
        setElWidth(popoverContentRef.current.clientWidth);
        setElHeight(popoverContentRef.current.clientHeight);
      }
    }
  };
  var classes = classNames(_defineProperty({}, "".concat(classPrefix), true), className);
  var popoverArrow = function popoverArrow2() {
    var prefixCls = "nut-popover-arrow";
    var loca = location;
    var direction = loca.split("-")[0];
    return "".concat(prefixCls, " ").concat(prefixCls, "-").concat(direction, " ").concat(prefixCls, "--").concat(loca);
  };
  var getRootPosition = function getRootPosition2() {
    var styles = {};
    if (!rootPosition)
      return {};
    var contentWidth = elWidth;
    var contentHeight = elHeight;
    var width = rootPosition.width, height = rootPosition.height, left = rootPosition.left, top = rootPosition.top, right = rootPosition.right;
    var direction = location.split("-")[0];
    var skew = location.split("-")[1];
    var cross = 0;
    var parallel = 0;
    if (Array.isArray(offset) && offset.length === 2) {
      cross += +offset[1];
      parallel += +offset[0];
    }
    if (width) {
      if (["bottom", "top"].includes(direction)) {
        var h = direction === "bottom" ? height + cross : -(contentHeight + cross);
        styles.top = "".concat(top + h, "px");
        if (!skew) {
          styles.left = "".concat(-(contentWidth - width) / 2 + left + parallel, "px");
        }
        if (skew === "start") {
          styles.left = "".concat(left + parallel, "px");
        }
        if (skew === "end") {
          styles.left = "".concat(right + parallel, "px");
        }
      }
      if (["left", "right"].includes(direction)) {
        var contentW = direction === "left" ? -(contentWidth + cross) : width + cross;
        styles.left = "".concat(left + contentW, "px");
        if (!skew) {
          styles.top = "".concat(top - contentHeight / 2 + height / 2 - 4 + parallel, "px");
        }
        if (skew === "start") {
          styles.top = "".concat(top + parallel, "px");
        }
        if (skew === "end") {
          styles.top = "".concat(top + height + parallel, "px");
        }
      }
    }
    return styles;
  };
  var handleSelect = function handleSelect2(item, index) {
    if (!item.disabled) {
      onSelect && onSelect(item, index);
    }
    if (closeOnActionClick) {
      props.onClick && props.onClick();
      onClose2 && onClose2();
    }
  };
  return React__default.createElement(React__default.Fragment, null, !targetId && React__default.createElement("div", {
    className: "nut-popover-wrapper",
    ref: popoverRef,
    onClick: function onClick3() {
      props.onClick && props.onClick();
      if (!visible) {
        onOpen2 && onOpen2();
      } else {
        onClose2 && onClose2();
      }
    },
    style
  }, Array.isArray(children) ? children[0] : children), React__default.createElement("div", {
    className: classes,
    style: getRootPosition()
  }, React__default.createElement(Popup, _objectSpread({
    className: "nut-popover-content nut-popover-content--".concat(location),
    visible: showPopup,
    overlay,
    position: "default"
  }, rest), React__default.createElement("div", {
    className: "nut-popover-content-group",
    ref: popoverContentRef
  }, showArrow && React__default.createElement("div", {
    className: popoverArrow()
  }), Array.isArray(children) ? children[1] : "", list.map(function(item, index) {
    return React__default.createElement("div", {
      className: classNames({
        "nut-popover-menu-item": true,
        "nut-popover-menu-disabled": item.disabled
      }, item.className),
      key: item.key || index,
      onClick: function onClick3() {
        return handleSelect(item, index);
      }
    }, item.icon ? item.icon : null, React__default.createElement("div", {
      className: "nut-popover-menu-item-name"
    }, item.name));
  })))));
};
Popover.defaultProps = defaultProps;
Popover.displayName = "NutPopover";
export {
  Popover as default
};
