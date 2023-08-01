import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
var _excluded = ["className", "overlay", "visible", "list", "activeText", "inactiveText", "position", "onChange", "onSelect", "type", "children", "style", "content"];
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
import { Left } from "@nutui/icons-react";
import Overlay from "./Overlay.js";
import { useConfig } from "./ConfigProvider.js";
import { C as ComponentDefaults } from "./typings.js";
var defaultProps = _objectSpread(_objectSpread({}, ComponentDefaults), {}, {
  activeText: "",
  inactiveText: "",
  type: "right",
  position: {
    top: "auto",
    bottom: "auto"
  }
});
var FixedNav = function FixedNav2(props) {
  var _useConfig = useConfig(), locale = _useConfig.locale;
  var _defaultProps$props = _objectSpread(_objectSpread({}, defaultProps), props), className = _defaultProps$props.className, overlay = _defaultProps$props.overlay, visible = _defaultProps$props.visible, list = _defaultProps$props.list, activeText = _defaultProps$props.activeText, inactiveText = _defaultProps$props.inactiveText, position = _defaultProps$props.position, onChange = _defaultProps$props.onChange, onSelect = _defaultProps$props.onSelect, type = _defaultProps$props.type, children = _defaultProps$props.children, style = _defaultProps$props.style, content = _defaultProps$props.content, rest = _objectWithoutProperties(_defaultProps$props, _excluded);
  var classPrefix = "nut-fixednav";
  var classes = classNames({
    active: visible
  }, type, className, classPrefix);
  var handleClick = function handleClick2(item, event) {
    onSelect(item, event);
  };
  var onUpdateValue = function onUpdateValue2() {
    var value = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !visible;
    onChange(value);
  };
  return React__default.createElement("div", _objectSpread({
    className: classes,
    style: _objectSpread(_objectSpread({}, position), style)
  }, rest), overlay && React__default.createElement(Overlay, {
    visible,
    zIndex: 200,
    onClick: function onClick() {
      return onUpdateValue(false);
    }
  }), React__default.createElement("div", {
    className: "list"
  }, children || React__default.createElement("div", {
    className: "".concat(classPrefix, "__list")
  }, list.map(function(item, index) {
    return React__default.createElement("div", {
      className: "".concat(classPrefix, "__list-item"),
      onClick: function onClick(event) {
        return handleClick(item, event);
      },
      key: item.id || index
    }, React__default.createElement("img", {
      src: item.icon,
      alt: ""
    }), React__default.createElement("div", {
      className: "".concat(classPrefix, "__list-text")
    }, item.text), item.num && React__default.createElement("div", {
      className: "b"
    }, item.num));
  }))), React__default.createElement("div", {
    className: "".concat(classPrefix, "__btn"),
    onClick: function onClick() {
      return onUpdateValue();
    }
  }, content || React__default.createElement(React__default.Fragment, null, React__default.createElement(Left, {
    color: "#fff"
  }), React__default.createElement("div", {
    className: "text"
  }, visible ? activeText || locale.fixednav.activeText : inactiveText || locale.fixednav.inactiveText))));
};
FixedNav.defaultProps = defaultProps;
FixedNav.displayName = "NutFixedNav";
export {
  FixedNav as default
};
