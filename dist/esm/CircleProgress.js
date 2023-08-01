import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
var _excluded = ["children", "percent", "className", "radius", "clockwise", "strokeWidth", "color", "background", "style", "strokeLinecap"];
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
import { b as isObject } from "./index.js";
import { C as ComponentDefaults } from "./typings.js";
var defaultProps = _objectSpread(_objectSpread({}, ComponentDefaults), {}, {
  strokeWidth: 5,
  radius: 50,
  strokeLinecap: "round",
  color: "#fa2c19",
  background: "#e5e9f2",
  clockwise: true
});
var classPrefix = "nut-circleprogress";
var CircleProgress = function CircleProgress2(props) {
  var _stop;
  var _defaultProps$props = _objectSpread(_objectSpread({}, defaultProps), props), children = _defaultProps$props.children, percent = _defaultProps$props.percent, className = _defaultProps$props.className, radius = _defaultProps$props.radius, clockwise = _defaultProps$props.clockwise, strokeWidth = _defaultProps$props.strokeWidth, color = _defaultProps$props.color, background = _defaultProps$props.background, style = _defaultProps$props.style, strokeLinecap = _defaultProps$props.strokeLinecap, restProps = _objectWithoutProperties(_defaultProps$props, _excluded);
  var classes = classNames(className, classPrefix);
  var refRandomId = Math.random().toString(36).slice(-8);
  var styles = _objectSpread({
    height: "".concat(Number(radius) * 2, "px"),
    width: "".concat(Number(radius) * 2, "px")
  }, style);
  var pathStyle = {
    stroke: background
  };
  var hoverStyle = function hoverStyle2() {
    var perimeter = 283;
    var offset = perimeter * Number(percent) / 100;
    return {
      stroke: isObject(color) ? "url(#".concat(refRandomId, ")") : color,
      strokeDasharray: "".concat(offset, "px ").concat(perimeter, "px")
    };
  };
  var path = function path2() {
    var isWise = clockwise ? 1 : 0;
    return "M 50 50 m -45 0 a 45 45 0 1 ".concat(isWise, " 90 0  a 45 45 0 1 ").concat(isWise, " -90 0");
  };
  var stop = function stop2() {
    if (!isObject(props.color)) {
      return;
    }
    var color2 = props.color;
    var colorArr = Object.keys(color2).sort(function(a, b) {
      return parseFloat(a) - parseFloat(b);
    });
    var stopArr = [];
    colorArr.forEach(function(item) {
      var obj = {
        key: "",
        value: ""
      };
      obj.key = item;
      obj.value = color2[item];
      stopArr.push(obj);
    });
    return stopArr;
  };
  return React__default.createElement("div", _objectSpread({
    className: classes,
    style: styles
  }, restProps), React__default.createElement("svg", {
    viewBox: "0 0 100 100"
  }, React__default.createElement("defs", null, React__default.createElement("linearGradient", {
    id: refRandomId,
    x1: "100%",
    y1: "0%",
    x2: "0%",
    y2: "0%"
  }, (_stop = stop()) === null || _stop === void 0 ? void 0 : _stop.map(function(item, index) {
    return React__default.createElement("stop", {
      key: index,
      offset: item.key,
      stopColor: item.value
    });
  }))), React__default.createElement("path", {
    className: "nut-circleprogress-path",
    d: path(),
    style: pathStyle,
    fill: "none",
    strokeWidth
  }), React__default.createElement("path", {
    className: "nut-circleprogress-hover",
    style: hoverStyle(),
    d: path(),
    fill: "none",
    strokeLinecap,
    transform: "rotate(90,50,50)",
    strokeWidth
  })), React__default.createElement("div", {
    className: "nut-circleprogress-text"
  }, children));
};
CircleProgress.defaultProps = defaultProps;
CircleProgress.displayName = "NutCircleProgress";
export {
  CircleProgress as default
};
