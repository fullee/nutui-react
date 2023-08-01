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
import React__default, { forwardRef, useState, useEffect, useImperativeHandle, useRef } from "react";
import classNames from "classnames";
import { CSSTransition } from "react-transition-group";
import { Check } from "@nutui/icons-react";
import { O as Overlay } from "./overlay2.js";
import { u as useClickAway } from "./use-click-away.js";
import { C as ComponentDefaults } from "./typings.js";
var defaultProps = _objectSpread(_objectSpread({}, ComponentDefaults), {}, {
  columns: 1,
  direction: "down",
  icon: null,
  activeTitleClass: "",
  inactiveTitleClass: "",
  onChange: function onChange(value) {
    return void 0;
  }
});
var MenuItem = forwardRef(function(props, ref) {
  var _defaultProps$props = _objectSpread(_objectSpread({}, defaultProps), props), className = _defaultProps$props.className, style = _defaultProps$props.style, options = _defaultProps$props.options, value = _defaultProps$props.value, columns = _defaultProps$props.columns, title = _defaultProps$props.title, icon = _defaultProps$props.icon, direction = _defaultProps$props.direction, onChange2 = _defaultProps$props.onChange, activeTitleClass = _defaultProps$props.activeTitleClass, inactiveTitleClass = _defaultProps$props.inactiveTitleClass, closeOnClickAway = _defaultProps$props.closeOnClickAway, children = _defaultProps$props.children, activeColor = _defaultProps$props.activeColor, show = _defaultProps$props.show, parent = _defaultProps$props.parent, index = _defaultProps$props.index;
  var _useState = useState(show), _useState2 = _slicedToArray(_useState, 2), showPopup = _useState2[0], setShowPopup = _useState2[1];
  var _useState3 = useState(value), _useState4 = _slicedToArray(_useState3, 2), innerValue = _useState4[0], setValue = _useState4[1];
  useEffect(function() {
    setShowPopup(show);
  }, [show]);
  useEffect(function() {
    getParentOffset();
  }, [showPopup]);
  useImperativeHandle(ref, function() {
    return {
      toggle: parent.toggleMenuItem
    };
  });
  var getIconCName = function getIconCName2(optionVal, value2) {
    var _classNames;
    return classNames((_classNames = {}, _defineProperty(_classNames, activeTitleClass, optionVal === value2), _defineProperty(_classNames, inactiveTitleClass, optionVal !== value2), _classNames));
  };
  var setTitle = function setTitle2(text) {
    if (!title) {
      parent.updateTitle(text, index);
    }
  };
  var handleClick = function handleClick2(item) {
    parent.toggleMenuItem(index);
    setTitle(item.text);
    setValue(item.value);
    onChange2 && onChange2(item);
  };
  var isShow = function isShow2() {
    if (showPopup)
      return {};
    return {
      display: "none"
    };
  };
  var _useState5 = useState({
    top: 0,
    height: 0
  }), _useState6 = _slicedToArray(_useState5, 2), position = _useState6[0], setPosition = _useState6[1];
  var getParentOffset = function getParentOffset2() {
    setTimeout(function() {
      var p = parent.menuRef.current;
      var rect = p.getBoundingClientRect();
      setPosition({
        height: rect.height,
        top: rect.top
      });
    });
  };
  var getPosition = function getPosition2() {
    return direction === "down" ? {
      top: "".concat(position.top + position.height, "px"),
      bottom: "0",
      height: "initial"
    } : {
      bottom: "".concat(window.innerHeight - position.top, "px"),
      top: "auto",
      height: "initial"
    };
  };
  var micRef = useRef(null);
  var targetSet = [micRef.current];
  useClickAway(
    function() {
      parent.hideMenuItem(index);
    },
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    targetSet,
    "click",
    false,
    showPopup,
    closeOnClickAway
  );
  return React__default.createElement("div", {
    className: "nut-menu-item-container",
    ref: micRef
  }, React__default.createElement(Overlay, {
    className: "nut-menu__overlay",
    style: getPosition(),
    lockScroll: parent.lockScroll,
    visible: showPopup,
    closeOnOverlayClick: parent.closeOnOverlayClick,
    onClick: function onClick() {
      parent.closeOnOverlayClick && parent.toggleMenuItem(index);
    }
  }), React__default.createElement("div", {
    className: classNames(className, {
      "nut-menu-item__wrap": direction === "down",
      "nut-menu-item__wrap-up": direction !== "down"
    }),
    style: _objectSpread(_objectSpread({}, style), isShow())
  }, React__default.createElement(CSSTransition, {
    "in": showPopup,
    timeout: 100,
    classNames: direction === "down" ? "menu-item" : "menu-item-up"
  }, React__default.createElement("div", {
    className: "nut-menu-item__content"
  }, options === null || options === void 0 ? void 0 : options.map(function(item) {
    return React__default.createElement("div", {
      className: "nut-menu-item__option ".concat(classNames({
        active: item.value === innerValue
      })),
      key: item.text,
      style: {
        flexBasis: "".concat(100 / columns, "%")
      },
      onClick: function onClick() {
        handleClick(item);
      }
    }, item.value === innerValue ? React__default.createElement("i", null, icon || React__default.createElement(Check, {
      color: activeColor,
      className: getIconCName(item.value, value)
    })) : null, React__default.createElement("div", {
      className: getIconCName(item.value, value),
      style: {
        color: "".concat(item.value === innerValue ? activeColor : "")
      }
    }, item.text));
  }), children))));
});
MenuItem.defaultProps = defaultProps;
MenuItem.displayName = "NutMenuItem";
export {
  MenuItem as M
};
