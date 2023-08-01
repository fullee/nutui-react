import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
var _excluded = ["value", "digits", "symbol", "zero", "left", "sync", "color", "riseColor", "dropColor", "riseIcon", "dropIcon", "className", "style", "children"];
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
import { TriangleUp, TriangleDown } from "@nutui/icons-react";
import { C as ComponentDefaults } from "./typings.js";
var defaultProps = _objectSpread(_objectSpread({}, ComponentDefaults), {}, {
  value: 0,
  digits: 2,
  symbol: false,
  zero: false,
  left: false,
  sync: true,
  color: "#333",
  riseColor: "#fa2c19",
  dropColor: "#64b578",
  riseIcon: null,
  dropIcon: null
});
var TrendArrow = function TrendArrow2(props) {
  var _defaultProps$props = _objectSpread(_objectSpread({}, defaultProps), props), value = _defaultProps$props.value, digits = _defaultProps$props.digits, symbol = _defaultProps$props.symbol, zero = _defaultProps$props.zero, left = _defaultProps$props.left, sync = _defaultProps$props.sync, color = _defaultProps$props.color, riseColor = _defaultProps$props.riseColor, dropColor = _defaultProps$props.dropColor, riseIcon = _defaultProps$props.riseIcon, dropIcon = _defaultProps$props.dropIcon, className = _defaultProps$props.className, style = _defaultProps$props.style, children = _defaultProps$props.children, rest = _objectWithoutProperties(_defaultProps$props, _excluded);
  var classPrefix = "nut-trendarrow";
  var rateTrend = useRef(value > 0);
  var myFixed = function myFixed2(num) {
    var digit = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 2;
    if (Object.is(parseFloat(num), NaN)) {
      return console.warn("传入的值：".concat(num, "不是一个数字"));
    }
    num = parseFloat(num);
    var numPow = Math.pow(10, digit);
    return (Math.round((num + Number.EPSILON) * numPow) / numPow).toFixed(digit);
  };
  var calcStyle = function() {
    var arrowColor = rateTrend.current ? riseColor : dropColor;
    var textEquArrowColor = sync ? arrowColor : color;
    var style2 = {
      color: value === 0 ? color : textEquArrowColor
    };
    return style2;
  }();
  var calcRate = function() {
    rateTrend.current = value > 0;
    var absRate = Math.abs(value);
    if (!zero && value === 0) {
      return "--";
    }
    var resultRate = "".concat(
      // eslint-disable-next-line no-nested-ternary
      symbol && value !== 0 ? rateTrend.current ? "+" : "-" : ""
    ).concat(myFixed(Number(absRate), digits), "%");
    return resultRate;
  }();
  var calcIconProps = function() {
    var iconProps = {
      color: rateTrend.current ? riseColor : dropColor
    };
    return iconProps;
  }();
  var renderContent = function renderContent2(left2) {
    var classNameSuffix = !left2 ? "icon-after" : "icon-before";
    return React__default.createElement("span", {
      className: "".concat(classPrefix, "__").concat(classNameSuffix, " ").concat(classPrefix, "__value"),
      style: calcStyle
    }, calcRate);
  };
  return React__default.createElement("div", _objectSpread({
    className: "".concat(classPrefix, " ").concat(className),
    style
  }, rest), !left && renderContent(!left), Number(value) !== 0 && React__default.createElement(React__default.Fragment, null, rateTrend.current ? React__default.createElement(React__default.Fragment, null, riseIcon || React__default.createElement(TriangleUp, {
    color: calcIconProps.color
  })) : React__default.createElement(React__default.Fragment, null, dropIcon || React__default.createElement(TriangleDown, {
    color: calcIconProps.color
  }))), left && renderContent(!left));
};
TrendArrow.defaultProps = defaultProps;
TrendArrow.displayName = "NutTrendArrow";
export {
  TrendArrow as default
};
