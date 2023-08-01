import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
var _excluded = ["className", "animated", "rows", "title", "avatar", "avatarSize", "visible", "children", "avatarShape"];
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
import Avatar from "./Avatar.js";
import { C as ComponentDefaults } from "./typings.js";
var defaultProps = _objectSpread(_objectSpread({}, ComponentDefaults), {}, {
  rows: 1,
  animated: false,
  title: false,
  avatar: false,
  avatarSize: "50px",
  visible: false,
  avatarShape: "round"
});
var Skeleton = function Skeleton2(props) {
  var _defaultProps$props = _objectSpread(_objectSpread({}, defaultProps), props), className = _defaultProps$props.className, animated = _defaultProps$props.animated, rows = _defaultProps$props.rows, title = _defaultProps$props.title, avatar = _defaultProps$props.avatar, avatarSize = _defaultProps$props.avatarSize, visible = _defaultProps$props.visible, children = _defaultProps$props.children, avatarShape = _defaultProps$props.avatarShape, rest = _objectWithoutProperties(_defaultProps$props, _excluded);
  var classPrefix = "nut-skeleton";
  var classes = classNames(className, classPrefix);
  var avatarClass = classNames(_defineProperty({
    avatar: true
  }, "avatar--".concat(avatarShape), avatarShape));
  var repeatLines = function repeatLines2(num) {
    return Array.from({
      length: num
    }, function(v, i) {
      return i;
    });
  };
  var getStyle = function getStyle2() {
    if (avatarSize) {
      return {
        width: avatarSize,
        height: avatarSize
      };
    }
    return {
      width: "50px",
      height: "50px"
    };
  };
  return React__default.createElement(React__default.Fragment, null, visible ? React__default.createElement("div", null, children) : React__default.createElement("div", _objectSpread({
    className: classes
  }, rest), animated && React__default.createElement("div", {
    className: "".concat(classPrefix, "__animation")
  }), React__default.createElement("div", {
    className: "".concat(classPrefix, "__content")
  }, avatar && React__default.createElement(Avatar, {
    className: avatarClass,
    shape: avatarShape,
    style: getStyle(),
    icon: "null"
  }), rows === 1 ? React__default.createElement("div", {
    className: "".concat(classPrefix, "__block")
  }) : React__default.createElement("div", {
    className: "".concat(classPrefix, "__content-line")
  }, title && React__default.createElement("div", {
    className: "".concat(classPrefix, "__title")
  }), repeatLines(rows).map(function(item, index) {
    return React__default.createElement("div", {
      className: "".concat(classPrefix, "__block"),
      key: index
    });
  })))));
};
Skeleton.defaultProps = defaultProps;
Skeleton.displayName = "NutSkeleton";
export {
  Skeleton as default
};
