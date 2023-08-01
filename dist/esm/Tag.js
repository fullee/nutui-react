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
import { Close } from "@nutui/icons-react";
import classNames from "classnames";
import { C as ComponentDefaults } from "./typings.js";
var defaultProps = _objectSpread(_objectSpread({}, ComponentDefaults), {}, {
  type: "default",
  background: "",
  color: "",
  plain: false,
  round: false,
  mark: false,
  closeable: false,
  closeIcon: null,
  onClose: function onClose(e) {
  },
  onClick: function onClick(e) {
  }
});
var Tag = function Tag2(props) {
  var _defaultProps$props = _objectSpread(_objectSpread({}, defaultProps), props), className = _defaultProps$props.className, style = _defaultProps$props.style, background = _defaultProps$props.background, plain = _defaultProps$props.plain, type = _defaultProps$props.type, round = _defaultProps$props.round, children = _defaultProps$props.children, mark = _defaultProps$props.mark, closeable = _defaultProps$props.closeable, closeIcon = _defaultProps$props.closeIcon, color = _defaultProps$props.color, onClick2 = _defaultProps$props.onClick, onClose2 = _defaultProps$props.onClose;
  var _useState = useState(""), _useState2 = _slicedToArray(_useState, 2), tagClass = _useState2[0], setTagClass = _useState2[1];
  var _useState3 = useState(true), _useState4 = _slicedToArray(_useState3, 2), visible = _useState4[0], setVisible = _useState4[1];
  var classPrefix = "nut-tag";
  var classes = function classes2() {
    var _classNames;
    return classNames((_classNames = {}, _defineProperty(_classNames, classPrefix, true), _defineProperty(_classNames, "".concat(classPrefix, "--").concat(type), type), _defineProperty(_classNames, "".concat(classPrefix, "--plain"), plain), _defineProperty(_classNames, "".concat(classPrefix, "--round"), round), _defineProperty(_classNames, "".concat(classPrefix, "--mark"), mark), _defineProperty(_classNames, "".concat(classPrefix, "--close"), closeable), _defineProperty(_classNames, "".concat(className), className), _classNames));
  };
  useEffect(function() {
    setTagClass(classes());
  }, [type, background, color, plain, round, mark, closeable, className]);
  var handleClick = function handleClick2(e) {
    onClick2 && onClick2(e);
  };
  var getStyle = function getStyle2() {
    var style2 = {};
    if (color) {
      style2.color = color;
    } else if (background && plain) {
      style2.color = background;
    }
    if (plain) {
      style2.borderColor = background;
    } else if (background) {
      style2.background = background;
    }
    return style2;
  };
  return React__default.createElement(React__default.Fragment, null, closeable ? visible && React__default.createElement("div", {
    className: tagClass,
    style: _objectSpread(_objectSpread({}, style), getStyle()),
    onClick: function onClick3(e) {
      return handleClick(e);
    }
  }, children && React__default.createElement("span", {
    className: "".concat(classPrefix, "-text")
  }, children), React__default.isValidElement(closeIcon) ? React__default.createElement("i", {
    className: "".concat(classPrefix, "-custom-icon"),
    onClick: function onClick3(e) {
      setVisible(false);
      onClose2 && onClose2(e);
    }
  }, closeIcon) : React__default.createElement(Close, {
    width: 12,
    height: 12,
    onClick: function onClick3(e) {
      setVisible(false);
      onClose2 && onClose2(e);
    }
  })) : React__default.createElement("div", {
    className: tagClass,
    style: _objectSpread(_objectSpread({}, style), getStyle()),
    onClick: function onClick3(e) {
      return handleClick(e);
    }
  }, children && React__default.createElement("span", {
    className: "".concat(classPrefix, "-text")
  }, children)));
};
Tag.defaultProps = defaultProps;
Tag.displayName = "NutTag";
export {
  Tag as default
};
