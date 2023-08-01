import _slicedToArray from "@babel/runtime/helpers/slicedToArray";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
var _excluded = ["children", "size", "shape", "background", "color", "src", "alt", "icon", "fit", "className", "style", "onClick", "onError"];
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
import React__default, { useState, useRef, useContext, useEffect } from "react";
import classNames from "classnames";
import { My } from "@nutui/icons-react";
import { A as AvatarContext } from "./context2.js";
import Image from "./Image.js";
import { C as ComponentDefaults } from "./typings.js";
import AvatarGroup from "./AvatarGroup.js";
var defaultProps = _objectSpread(_objectSpread({}, ComponentDefaults), {}, {
  size: "",
  shape: "round",
  icon: "",
  background: "#eee",
  color: "#666",
  fit: "cover",
  src: "",
  alt: ""
});
var classPrefix = "nut-avatar";
var Avatar = function Avatar2(props) {
  var _parent$propAvatarGro, _parent$propAvatarGro2, _classNames, _parent$propAvatarGro3, _parent$propAvatarGro4, _parent$propAvatarGro5, _parent$propAvatarGro6, _parent$propAvatarGro7, _parent$propAvatarGro9, _parent$propAvatarGro10, _parent$propAvatarGro11, _parent$propAvatarGro12, _parent$propAvatarGro13, _parent$propAvatarGro14, _parent$propAvatarGro15;
  var _defaultProps$props = _objectSpread(_objectSpread({}, defaultProps), props), children = _defaultProps$props.children, size = _defaultProps$props.size, shape = _defaultProps$props.shape, background = _defaultProps$props.background, color = _defaultProps$props.color, src = _defaultProps$props.src, alt = _defaultProps$props.alt, icon = _defaultProps$props.icon, fit = _defaultProps$props.fit, className = _defaultProps$props.className, style = _defaultProps$props.style, onClick = _defaultProps$props.onClick, onError = _defaultProps$props.onError, rest = _objectWithoutProperties(_defaultProps$props, _excluded);
  var _useState = useState(0), _useState2 = _slicedToArray(_useState, 2), maxSum = _useState2[0], setMaxSum = _useState2[1];
  var _useState3 = useState(false), _useState4 = _slicedToArray(_useState3, 2), showMax = _useState4[0], setShowMax = _useState4[1];
  var _useState5 = useState(1), _useState6 = _slicedToArray(_useState5, 2), avatarIndex = _useState6[0], setAvatarIndex = _useState6[1];
  var avatarRef = useRef(null);
  var parent = useContext(AvatarContext);
  var sizeValue = ["large", "normal", "small"];
  var classes = classNames((_classNames = {}, _defineProperty(_classNames, "nut-avatar-".concat((parent === null || parent === void 0 ? void 0 : (_parent$propAvatarGro = parent.propAvatarGroup) === null || _parent$propAvatarGro === void 0 ? void 0 : _parent$propAvatarGro.size) || size || "normal"), true), _defineProperty(_classNames, "nut-avatar-".concat((parent === null || parent === void 0 ? void 0 : (_parent$propAvatarGro2 = parent.propAvatarGroup) === null || _parent$propAvatarGro2 === void 0 ? void 0 : _parent$propAvatarGro2.shape) || shape), true), _classNames));
  var cls = classNames(classPrefix, classes, className);
  var styles = _objectSpread({
    width: sizeValue.indexOf(size) > -1 ? "" : "".concat(size, "px"),
    height: sizeValue.indexOf(size) > -1 ? "" : "".concat(size, "px"),
    backgroundColor: "".concat(background),
    color: "".concat(color),
    marginLeft: avatarIndex !== 1 && parent !== null && parent !== void 0 && (_parent$propAvatarGro3 = parent.propAvatarGroup) !== null && _parent$propAvatarGro3 !== void 0 && _parent$propAvatarGro3.gap ? "".concat(parent === null || parent === void 0 ? void 0 : (_parent$propAvatarGro4 = parent.propAvatarGroup) === null || _parent$propAvatarGro4 === void 0 ? void 0 : _parent$propAvatarGro4.gap, "px") : "",
    zIndex: (parent === null || parent === void 0 ? void 0 : (_parent$propAvatarGro5 = parent.propAvatarGroup) === null || _parent$propAvatarGro5 === void 0 ? void 0 : _parent$propAvatarGro5.level) === "right" ? "".concat(Math.abs(maxSum - avatarIndex)) : ""
  }, style);
  var maxStyles = {
    backgroundColor: "".concat(parent === null || parent === void 0 ? void 0 : (_parent$propAvatarGro6 = parent.propAvatarGroup) === null || _parent$propAvatarGro6 === void 0 ? void 0 : _parent$propAvatarGro6.maxBackground),
    color: "".concat(parent === null || parent === void 0 ? void 0 : (_parent$propAvatarGro7 = parent.propAvatarGroup) === null || _parent$propAvatarGro7 === void 0 ? void 0 : _parent$propAvatarGro7.maxColor)
  };
  useEffect(function() {
    var _parent$avatarGroupRe;
    var avatarChildren = parent === null || parent === void 0 ? void 0 : (_parent$avatarGroupRe = parent.avatarGroupRef) === null || _parent$avatarGroupRe === void 0 ? void 0 : _parent$avatarGroupRe.current.children;
    if (avatarChildren) {
      avatarLength(avatarChildren);
    }
  }, []);
  var avatarLength = function avatarLength2(children2) {
    var _avatarRef$current, _avatarRef$current$da, _parent$propAvatarGro8;
    for (var i = 0; i < children2.length; i++) {
      if (children2[i] && children2[i].classList && children2[i].classList[0] === "nut-avatar") {
        children2[i].setAttribute("data-index", i + 1);
      }
    }
    var index = Number(avatarRef === null || avatarRef === void 0 ? void 0 : (_avatarRef$current = avatarRef.current) === null || _avatarRef$current === void 0 ? void 0 : (_avatarRef$current$da = _avatarRef$current.dataset) === null || _avatarRef$current$da === void 0 ? void 0 : _avatarRef$current$da.index);
    var maxCount = parent === null || parent === void 0 ? void 0 : (_parent$propAvatarGro8 = parent.propAvatarGroup) === null || _parent$propAvatarGro8 === void 0 ? void 0 : _parent$propAvatarGro8.max;
    setMaxSum(children2.length);
    setAvatarIndex(index);
    if (index === children2.length && index !== maxCount && children2.length > maxCount) {
      setShowMax(true);
    }
  };
  var errorEvent = function errorEvent2() {
    if (props.onError) {
      props.onError();
    }
  };
  var clickAvatar = function clickAvatar2(e) {
    onClick && onClick(e);
  };
  return React__default.createElement(React__default.Fragment, null, (showMax || !(parent !== null && parent !== void 0 && (_parent$propAvatarGro9 = parent.propAvatarGroup) !== null && _parent$propAvatarGro9 !== void 0 && _parent$propAvatarGro9.max) || avatarIndex <= (parent === null || parent === void 0 ? void 0 : (_parent$propAvatarGro10 = parent.propAvatarGroup) === null || _parent$propAvatarGro10 === void 0 ? void 0 : _parent$propAvatarGro10.max)) && React__default.createElement("div", _objectSpread(_objectSpread({
    className: cls
  }, rest), {}, {
    style: !showMax ? styles : maxStyles,
    onClick: clickAvatar,
    ref: avatarRef
  }), (!(parent !== null && parent !== void 0 && (_parent$propAvatarGro11 = parent.propAvatarGroup) !== null && _parent$propAvatarGro11 !== void 0 && _parent$propAvatarGro11.max) || avatarIndex <= (parent === null || parent === void 0 ? void 0 : (_parent$propAvatarGro12 = parent.propAvatarGroup) === null || _parent$propAvatarGro12 === void 0 ? void 0 : _parent$propAvatarGro12.max)) && React__default.createElement(React__default.Fragment, null, src && React__default.createElement(Image, {
    className: "avatar-img",
    src,
    alt,
    style: {
      objectFit: fit
    },
    onError: errorEvent
  }), React__default.isValidElement(icon) ? React__default.cloneElement(icon, _objectSpread(_objectSpread({}, icon.props), {}, {
    className: "".concat(icon.props.className || "", " icon")
  })) : null, children && React__default.createElement("span", {
    className: "text"
  }, children), !src && !icon && !children && React__default.createElement(My, {
    className: "icon"
  })), showMax && React__default.createElement("div", {
    className: "text"
  }, parent !== null && parent !== void 0 && (_parent$propAvatarGro13 = parent.propAvatarGroup) !== null && _parent$propAvatarGro13 !== void 0 && _parent$propAvatarGro13.maxContent ? parent === null || parent === void 0 ? void 0 : (_parent$propAvatarGro14 = parent.propAvatarGroup) === null || _parent$propAvatarGro14 === void 0 ? void 0 : _parent$propAvatarGro14.maxContent : "+ ".concat(avatarIndex - (parent === null || parent === void 0 ? void 0 : (_parent$propAvatarGro15 = parent.propAvatarGroup) === null || _parent$propAvatarGro15 === void 0 ? void 0 : _parent$propAvatarGro15.max)))));
};
Avatar.defaultProps = defaultProps;
Avatar.displayName = "NutAvatar";
Avatar.Group = AvatarGroup;
export {
  Avatar as default
};
