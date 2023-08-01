import _slicedToArray from "@babel/runtime/helpers/slicedToArray";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
var _excluded = ["className", "style", "percent", "background", "color", "strokeWidth", "showText", "animated", "children", "lazy", "delay"];
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
import React__default, { useState, useEffect, useRef } from "react";
import classNames from "classnames";
import { C as ComponentDefaults } from "./typings.js";
var defaultProps = _objectSpread(_objectSpread({}, ComponentDefaults), {}, {
  percent: 0,
  showText: false,
  animated: false,
  lazy: false,
  delay: 0
});
var Progress = function Progress2(props) {
  var _classNames;
  var _defaultProps$props = _objectSpread(_objectSpread({}, defaultProps), props), className = _defaultProps$props.className, style = _defaultProps$props.style, percent = _defaultProps$props.percent, background = _defaultProps$props.background, color = _defaultProps$props.color, strokeWidth = _defaultProps$props.strokeWidth, showText = _defaultProps$props.showText, animated = _defaultProps$props.animated, children = _defaultProps$props.children, lazy = _defaultProps$props.lazy, delay = _defaultProps$props.delay, rest = _objectWithoutProperties(_defaultProps$props, _excluded);
  var classPrefix = "nut-progress";
  var classesInner = classNames((_classNames = {}, _defineProperty(_classNames, "".concat(classPrefix, "-inner"), true), _defineProperty(_classNames, "".concat(classPrefix, "-active"), animated), _classNames));
  var stylesOuter = {
    height: "".concat(strokeWidth, "px"),
    background
  };
  var _useState = useState(0), _useState2 = _slicedToArray(_useState, 2), displayPercent = _useState2[0], setDispalyPercent = _useState2[1];
  var stylesInner = {
    width: "".concat(displayPercent, "%"),
    background: color
  };
  useEffect(function() {
    setDispalyPercent(percent);
  }, [percent]);
  var _useState3 = useState(false), _useState4 = _slicedToArray(_useState3, 2), intersecting = _useState4[0], setIntersecting = _useState4[1];
  var progressRef = useRef(null);
  var observer = useRef(null);
  var initObserver = function initObserver2() {
    var options = {
      threshold: [0],
      rootMargin: "0px"
    };
    observer.current = new IntersectionObserver(function(entires, self) {
      entires.forEach(function(item) {
        if (item.isIntersecting) {
          setIntersecting(true);
        } else {
          setIntersecting(false);
        }
      });
    }, options);
    observer.current.observe(progressRef.current);
  };
  var resetObserver = function resetObserver2() {
    observer.current.disconnect && observer.current.disconnect();
  };
  useEffect(function() {
    if (lazy) {
      setTimeout(function() {
        if (intersecting) {
          setDispalyPercent(percent);
        } else {
          setDispalyPercent(0);
        }
      }, delay);
    }
  }, [intersecting]);
  useEffect(function() {
    lazy && initObserver();
    var timer = null;
    if (delay) {
      setDispalyPercent(0);
      timer = setTimeout(function() {
        setDispalyPercent(percent);
      }, delay);
    }
    return function() {
      lazy && resetObserver();
      timer && clearTimeout(timer);
    };
  }, []);
  return React__default.createElement("div", _objectSpread({
    ref: progressRef,
    className: classNames(classPrefix, className),
    style
  }, rest), React__default.createElement("div", {
    className: "".concat(classPrefix, "-outer"),
    style: stylesOuter
  }, React__default.createElement("div", {
    className: classesInner,
    style: stylesInner
  }, showText && React__default.createElement("div", {
    className: "".concat(classPrefix, "-text"),
    style: {
      left: "".concat(displayPercent, "%")
    }
  }, children || React__default.createElement("div", {
    className: "".concat(classPrefix, "-text__inner"),
    style: {
      background: color
    }
  }, percent, "%")))));
};
Progress.defaultProps = defaultProps;
Progress.displayName = "NutProgress";
export {
  Progress as default
};
