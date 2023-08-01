import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
var _excluded = ["total", "current", "children", "className", "direction"];
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
var defaultProps = {
  total: 3,
  current: 0,
  direction: "horizontal"
};
var classPrefix = "nut-indicator";
var Indicator = function Indicator2(props) {
  var _defaultProps$props = _objectSpread(_objectSpread({}, defaultProps), props), total = _defaultProps$props.total, current = _defaultProps$props.current, children = _defaultProps$props.children, className = _defaultProps$props.className, direction = _defaultProps$props.direction, rest = _objectWithoutProperties(_defaultProps$props, _excluded);
  var classes = classNames(_defineProperty({}, "".concat(classPrefix, "__vertical"), direction === "vertical"));
  var renderElement = function renderElement2() {
    var childs = [];
    for (var item = 0; item < total; item++) {
      childs.push(item === current ? children || React__default.createElement("div", {
        key: item,
        className: "".concat(classPrefix, "__dot ").concat(classPrefix, "__active")
      }) : React__default.createElement("div", {
        key: item,
        className: "".concat(classPrefix, "__dot")
      }));
    }
    return childs;
  };
  return React__default.createElement("div", _objectSpread({
    className: classNames(classes, className)
  }, rest), renderElement());
};
Indicator.defaultProps = defaultProps;
Indicator.displayName = "NutIndicator";
export {
  Indicator as default
};
