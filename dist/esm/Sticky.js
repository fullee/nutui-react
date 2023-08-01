import _slicedToArray from "@babel/runtime/helpers/slicedToArray";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
var _excluded = ["position", "zIndex", "children", "container", "style", "className", "threshold", "onChange"];
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
import React__default, { useRef, useEffect, useState, useCallback } from "react";
import classNames from "classnames";
import { g as getScrollParent } from "./get-scroll-parent.js";
import { g as getRect } from "./use-client-rect.js";
import { C as ComponentDefaults } from "./typings.js";
function useWatch(dep, callback) {
  var config = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {
    immediate: false
  };
  var immediate = config.immediate;
  var prev = useRef();
  var inited = useRef(false);
  var stop = useRef(false);
  useEffect(function() {
    var execute = function execute2() {
      return callback(prev.current);
    };
    if (!stop.current) {
      if (!inited.current) {
        inited.current = true;
        if (immediate) {
          execute();
        }
      } else {
        execute();
      }
      prev.current = dep;
    }
  }, [dep]);
  return function() {
    stop.current = true;
  };
}
var defaultProps = _objectSpread(_objectSpread({}, ComponentDefaults), {}, {
  position: "top",
  threshold: 0,
  zIndex: 2e3
});
var classPrefix = "nut-sticky";
var Sticky = function Sticky2(props) {
  var _useState5;
  var _defaultProps$props = _objectSpread(_objectSpread({}, defaultProps), props), position = _defaultProps$props.position, zIndex = _defaultProps$props.zIndex, children = _defaultProps$props.children, container = _defaultProps$props.container, style = _defaultProps$props.style, className = _defaultProps$props.className, threshold = _defaultProps$props.threshold, onChange = _defaultProps$props.onChange, rest = _objectWithoutProperties(_defaultProps$props, _excluded);
  var stickyRef = useRef(null);
  var rootRef = useRef(null);
  var _useState = useState(false), _useState2 = _slicedToArray(_useState, 2), isFixed = _useState2[0], setIsFixed = _useState2[1];
  var _useState3 = useState((_useState5 = {}, _defineProperty(_useState5, position, "".concat(threshold, "px")), _defineProperty(_useState5, "zIndex", zIndex), _useState5)), _useState4 = _slicedToArray(_useState3, 2), stickyStyle = _useState4[0], setStickyStyle = _useState4[1];
  var _useState6 = useState({}), _useState7 = _slicedToArray(_useState6, 2), rootStyle = _useState7[0], setRootStyle = _useState7[1];
  var getElement = useCallback(function() {
    return getScrollParent(rootRef.current);
  }, []);
  useEffect(function() {
    if (position === "top")
      return;
    var containerEle = container === null || container === void 0 ? void 0 : container.current;
    if (!rootRef.current && !containerEle)
      return;
    var rootRect = getRect(rootRef.current);
    var containerRect = getRect(containerEle);
    var clientHeight = document.documentElement.clientHeight;
    var stCurrent = stickyRef.current;
    var stickyRect = getRect(stCurrent);
    var fixed = clientHeight - threshold < rootRect.bottom;
    if (containerEle) {
      fixed = containerRect.bottom > clientHeight - threshold - stickyRect.height && clientHeight - threshold - stickyRect.height > containerRect.top;
    }
    var defaultPostVal = fixed ? "fixed" : "inherit";
    setStickyStyle(function(prev) {
      return _objectSpread(_objectSpread({}, prev), {}, {
        position: defaultPostVal
      });
    });
    setIsFixed(fixed);
  }, [position, container, threshold]);
  var handleScroll = useCallback(function() {
    var containerEle = container === null || container === void 0 ? void 0 : container.current;
    if (!rootRef.current && !containerEle)
      return;
    var rootRect = getRect(rootRef.current);
    var stCurrent = stickyRef.current;
    var stickyRect = getRect(stCurrent);
    var containerRect = getRect(containerEle);
    if (rootRect.height) {
      setRootStyle(function(prev) {
        return _objectSpread(_objectSpread({}, prev), {}, {
          height: rootRect.height
        });
      });
    }
    var getFixed = function getFixed2() {
      var fixed2 = false;
      if (position === "top") {
        fixed2 = containerEle ? threshold > rootRect.top && containerRect.bottom > 0 : threshold > rootRect.top;
      } else {
        var clientHeight = document.documentElement.clientHeight;
        fixed2 = containerEle ? containerRect.bottom > 0 && clientHeight - threshold - stickyRect.height > containerRect.top : clientHeight - threshold < rootRect.bottom;
      }
      return {
        position: fixed2 ? "fixed" : "inherit",
        fixed: fixed2
      };
    };
    var getTransform = function getTransform2() {
      if (position === "top") {
        if (containerEle) {
          var diff = containerRect.bottom - threshold - stickyRect.height;
          var transform = diff < 0 ? diff : 0;
          return {
            transform: "translate3d(0, ".concat(transform, "px, 0)")
          };
        }
        return {};
      }
      if (position === "bottom") {
        if (containerEle) {
          var clientHeight = document.documentElement.clientHeight;
          var _diff = containerRect.bottom - (clientHeight - threshold);
          var _transform = _diff < 0 ? _diff : 0;
          return {
            transform: "translate3d(0, ".concat(_transform, "px, 0)")
          };
        }
        return {};
      }
      return {};
    };
    var fixed = getFixed();
    setStickyStyle(function(prev) {
      return _objectSpread(_objectSpread(_objectSpread({}, prev), getTransform()), {}, {
        position: fixed.position
      });
    });
    setIsFixed(fixed.fixed);
  }, [position, threshold, container]);
  useWatch(isFixed, function() {
    onChange && onChange(isFixed);
  });
  useEffect(function() {
    var el = getElement();
    el.addEventListener("scroll", handleScroll, false);
    return function() {
      el.removeEventListener("scroll", handleScroll);
    };
  }, [getElement, handleScroll]);
  return React__default.createElement("div", _objectSpread({
    ref: rootRef,
    style: _objectSpread(_objectSpread({}, style), rootStyle),
    className: classNames(classPrefix, className)
  }, rest), React__default.createElement("div", {
    className: "nut-sticky--box",
    ref: stickyRef,
    style: stickyStyle
  }, children));
};
Sticky.defaultProps = defaultProps;
Sticky.displayName = "NutSticky";
export {
  Sticky as default
};
