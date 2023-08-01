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
import React__default, { useRef } from "react";
import classNames from "classnames";
import { A as AvatarContext } from "./context2.js";
import { C as ComponentDefaults } from "./typings.js";
var defaultProps = _objectSpread(_objectSpread({}, ComponentDefaults), {}, {
  maxContent: "",
  max: "",
  maxBackground: "#eee",
  maxColor: "#666",
  gap: "-8",
  level: "left"
});
var classPrefix = "nut-avatar-group";
var AvatarGroup = function AvatarGroup2(props) {
  var propAvatarGroup = _objectSpread(_objectSpread({}, defaultProps), props);
  var className = propAvatarGroup.className, style = propAvatarGroup.style, children = propAvatarGroup.children;
  var avatarGroupRef = useRef(null);
  var cls = classNames(classPrefix, className);
  var parentAvatar = {
    propAvatarGroup,
    avatarGroupRef
  };
  return React__default.createElement(AvatarContext.Provider, {
    value: parentAvatar
  }, React__default.createElement("div", {
    className: cls,
    style,
    ref: avatarGroupRef
  }, children));
};
AvatarGroup.defaultProps = defaultProps;
AvatarGroup.displayName = "NutAvatarGroup";
export {
  AvatarGroup as default
};
