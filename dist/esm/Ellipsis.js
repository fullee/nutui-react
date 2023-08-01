import _slicedToArray from "@babel/runtime/helpers/slicedToArray";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
var _excluded = ["children", "content", "className", "direction", "rows", "expandText", "collapseText", "symbol", "lineHeight", "onClick", "onChange"];
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
import React__default, { useState, useRef, useLayoutEffect } from "react";
import classNames from "classnames";
import { C as ComponentDefaults } from "./typings.js";
var defaultProps = _objectSpread(_objectSpread({}, ComponentDefaults), {}, {
  content: "",
  direction: "end",
  rows: 1,
  expandText: "",
  collapseText: "",
  symbol: "...",
  lineHeight: "20"
});
var classPrefix = "nut-ellipsis";
var Ellipsis = function Ellipsis2(props) {
  var _ellipsis$current, _ellipsis$current2;
  var _defaultProps$props = _objectSpread(_objectSpread({}, defaultProps), props), children = _defaultProps$props.children, content = _defaultProps$props.content, className = _defaultProps$props.className, direction = _defaultProps$props.direction, rows = _defaultProps$props.rows, expandText = _defaultProps$props.expandText, collapseText = _defaultProps$props.collapseText, symbol = _defaultProps$props.symbol, lineHeight = _defaultProps$props.lineHeight, onClick = _defaultProps$props.onClick, onChange = _defaultProps$props.onChange, rest = _objectWithoutProperties(_defaultProps$props, _excluded);
  var container = null;
  var maxHeight = 0;
  var _useState = useState(false), _useState2 = _slicedToArray(_useState, 2), exceeded = _useState2[0], setExceeded = _useState2[1];
  var _useState3 = useState(false), _useState4 = _slicedToArray(_useState3, 2), expanded = _useState4[0], setExpanded = _useState4[1];
  var ellipsis = useRef();
  var root = useRef(null);
  var classes = classNames(classPrefix, className);
  useLayoutEffect(function() {
    if (content) {
      createContainer();
    }
  }, [content]);
  var createContainer = function createContainer2() {
    if (!root.current)
      return;
    var originStyle = window.getComputedStyle(root.current);
    container = document.createElement("div");
    var styleNames = Array.prototype.slice.apply(originStyle);
    styleNames.forEach(function(name) {
      container.style.setProperty(name, originStyle.getPropertyValue(name));
    });
    container.style.position = "fixed";
    container.style.left = "999999px";
    container.style.top = "999999px";
    container.style.zIndex = "-1000";
    container.style.height = "auto";
    container.style.minHeight = "auto";
    container.style.maxHeight = "auto";
    container.style.textOverflow = "clip";
    container.style.whiteSpace = "normal";
    container.style.webkitLineClamp = "unset";
    container.style.display = "block";
    var lineH = pxToNumber(originStyle.lineHeight === "normal" ? lineHeight : originStyle.lineHeight);
    maxHeight = Math.floor(lineH * (Number(rows) + 0.5) + pxToNumber(originStyle.paddingTop) + pxToNumber(originStyle.paddingBottom));
    container.innerText = content;
    document.body.appendChild(container);
    calcEllipse();
    document.body.removeChild(container);
  };
  var calcEllipse = function calcEllipse2() {
    if (container.offsetHeight <= maxHeight) {
      setExceeded(false);
    } else {
      setExceeded(true);
      var end = content.length;
      var middle = Math.floor((0 + end) / 2);
      var ellipsised = direction === "middle" ? tailorMiddle([0, middle], [middle, end]) : tailor(0, end);
      ellipsis.current = ellipsised;
    }
  };
  var tailor = function tailor2(left, right) {
    var actionText = expanded ? collapseText : expandText;
    var end = content.length;
    if (right - left <= 1) {
      if (direction === "end") {
        return {
          leading: content.slice(0, left) + symbol
        };
      }
      return {
        tailing: symbol + content.slice(right, end)
      };
    }
    var middle = Math.round((left + right) / 2);
    if (direction === "end") {
      container.innerText = content.slice(0, middle) + symbol + actionText;
    } else {
      container.innerText = actionText + symbol + content.slice(middle, end);
    }
    if (container.offsetHeight <= maxHeight) {
      if (direction === "end") {
        return tailor2(middle, right);
      }
      return tailor2(left, middle);
    }
    if (direction === "end") {
      return tailor2(left, middle);
    }
    return tailor2(middle, right);
  };
  var tailorMiddle = function tailorMiddle2(leftPart, rightPart) {
    var actionText = expanded ? collapseText : expandText;
    var end = content.length;
    if (leftPart[1] - leftPart[0] <= 1 && rightPart[1] - rightPart[0] <= 1) {
      return {
        leading: content.slice(0, leftPart[0]) + symbol,
        tailing: symbol + content.slice(rightPart[1], end)
      };
    }
    var leftPartMiddle = Math.floor((leftPart[0] + leftPart[1]) / 2);
    var rightPartMiddle = Math.ceil((rightPart[0] + rightPart[1]) / 2);
    container.innerText = content.slice(0, leftPartMiddle) + symbol + actionText + symbol + content.slice(rightPartMiddle, end);
    if (container.offsetHeight <= maxHeight) {
      return tailorMiddle2([leftPartMiddle, leftPart[1]], [rightPart[0], rightPartMiddle]);
    }
    return tailorMiddle2([leftPart[0], leftPartMiddle], [rightPartMiddle, rightPart[1]]);
  };
  var pxToNumber = function pxToNumber2(value) {
    if (!value)
      return 0;
    var match = value.match(/^\d*(\.\d*)?/);
    return match ? Number(match[0]) : 0;
  };
  var clickHandle = function clickHandle2(type) {
    if (type === 1) {
      setExpanded(true);
      onChange && onChange("expand");
    } else {
      setExpanded(false);
      onChange && onChange("collapse");
    }
  };
  var handleClick = function handleClick2() {
    onClick && onClick();
  };
  return React__default.createElement("div", _objectSpread({
    className: classes,
    onClick: handleClick,
    ref: root
  }, rest), React__default.createElement("div", null, !exceeded ? content : null, exceeded && !expanded ? React__default.createElement(React__default.Fragment, null, (_ellipsis$current = ellipsis.current) === null || _ellipsis$current === void 0 ? void 0 : _ellipsis$current.leading, expandText ? React__default.createElement("span", {
    className: "nut-ellipsis-text",
    onClick: function onClick2(e) {
      e.stopPropagation();
      clickHandle(1);
    }
  }, expandText) : null, (_ellipsis$current2 = ellipsis.current) === null || _ellipsis$current2 === void 0 ? void 0 : _ellipsis$current2.tailing) : null, exceeded && expanded ? React__default.createElement(React__default.Fragment, null, content, expandText ? React__default.createElement("span", {
    className: "nut-ellipsis-text",
    onClick: function onClick2(e) {
      e.stopPropagation();
      clickHandle(2);
    }
  }, collapseText) : null) : null));
};
Ellipsis.defaultProps = defaultProps;
Ellipsis.displayName = "NutEllipsis";
export {
  Ellipsis as default
};
