import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
var _excluded = ["title", "value", "children", "onClick"];
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
var SideNavBarItem = function SideNavBarItem2(props) {
  var classPrefix = "nut-subsidenavbar";
  var title = props.title, value = props.value, children = props.children, onClick = props.onClick, rest = _objectWithoutProperties(props, _excluded);
  var clickFn = function clickFn2(e) {
    e.stopPropagation();
    onClick && onClick({
      title,
      value
    });
  };
  return React__default.createElement("div", _objectSpread({
    className: "".concat(classPrefix, "__item ").concat(classPrefix, "-border-bt"),
    onClick: clickFn
  }, rest), title);
};
export {
  SideNavBarItem as default
};
