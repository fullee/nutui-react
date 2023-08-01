import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
var _excluded = ["title", "visible", "width", "position", "children", "className", "onClose"];
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
import Popup from "./Popup.js";
import { h as handleClick, O as OffsetContext } from "./context.js";
import { C as ComponentDefaults } from "./typings.js";
var defaultProps = _objectSpread(_objectSpread({}, ComponentDefaults), {}, {
  position: "left",
  width: "80%"
});
var SideNavBar = function SideNavBar2(props) {
  var classPrefix = "nut-sidenavbar";
  var _defaultProps$props = _objectSpread(_objectSpread({}, defaultProps), props), title = _defaultProps$props.title, visible = _defaultProps$props.visible, width = _defaultProps$props.width, position = _defaultProps$props.position, children = _defaultProps$props.children, className = _defaultProps$props.className, onClose = _defaultProps$props.onClose, rest = _objectWithoutProperties(_defaultProps$props, _excluded);
  var indent = props.indent ? Number(props.indent) : 20;
  return React__default.createElement(Popup, {
    visible,
    style: {
      width,
      height: "100%"
    },
    position,
    onClose
  }, React__default.createElement("div", _objectSpread({
    className: classNames(className, classPrefix)
  }, rest), React__default.createElement("div", {
    className: "".concat(classPrefix, "__content")
  }, React__default.createElement("div", {
    className: "".concat(classPrefix, "__list sidenavbar-show"),
    onClick: handleClick
  }, React__default.createElement("div", {
    className: "".concat(classPrefix, "__title ").concat(classPrefix, "-border-bt"),
    style: {
      paddingLeft: "".concat(indent, "px")
    }
  }, title, " ", React__default.createElement("i", {
    className: "arrow-icon arrow-down"
  })), React__default.createElement(OffsetContext.Provider, {
    value: indent
  }, React__default.createElement("div", {
    className: "".concat(classPrefix, "__content")
  }, children))))));
};
SideNavBar.defaultProps = defaultProps;
SideNavBar.displayName = "NutSideNavBar";
export {
  SideNavBar as default
};
