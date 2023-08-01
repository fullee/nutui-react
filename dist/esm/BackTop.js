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
import React__default, { useState, useRef, useEffect } from "react";
import { Top } from "@nutui/icons-react";
import classNames from "classnames";
import { C as ComponentDefaults } from "./typings.js";
var defaultProps = _objectSpread(_objectSpread({}, ComponentDefaults), {}, {
  target: "",
  threshold: 200,
  zIndex: 10,
  duration: 1e3
});
var BackTop = function BackTop2(props) {
  var _defaultProps$props = _objectSpread(_objectSpread({}, defaultProps), props), children = _defaultProps$props.children, target = _defaultProps$props.target, threshold = _defaultProps$props.threshold, zIndex = _defaultProps$props.zIndex, className = _defaultProps$props.className, duration = _defaultProps$props.duration, style = _defaultProps$props.style, onClick = _defaultProps$props.onClick;
  var classPrefix = "nut-backtop";
  var _useState = useState(false), _useState2 = _slicedToArray(_useState, 2), backTop = _useState2[0], SetBackTop = _useState2[1];
  var _useState3 = useState(0), _useState4 = _slicedToArray(_useState3, 2), scrollTop = _useState4[0], SetScrollTop = _useState4[1];
  var startTime = 0;
  var scrollEl = useRef(null);
  useEffect(function() {
    init();
    return function() {
      return removeEventListener();
    };
  }, []);
  var init = function init2() {
    if (target && document.getElementById(target)) {
      scrollEl.current = document.getElementById(target);
    } else {
      scrollEl.current = window;
    }
    addEventListener();
    initCancelAniFrame();
  };
  var scrollListener = function scrollListener2() {
    var top = null;
    if (scrollEl.current instanceof Window) {
      top = scrollEl.current.pageYOffset;
      SetScrollTop(top);
    } else {
      top = scrollEl.current.scrollTop;
      SetScrollTop(top);
    }
    var showBtn = top >= threshold;
    SetBackTop(showBtn);
  };
  var scroll = function scroll2() {
    var y = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0;
    if (scrollEl.current instanceof Window) {
      window.scrollTo(0, y);
    } else {
      scrollEl.current.scrollTop = y;
      window.scrollTo(0, y);
    }
  };
  var scrollAnimation = function scrollAnimation2() {
    var cid = requestAniFrame()(function fn() {
      var t = duration - Math.max(0, startTime - +/* @__PURE__ */ new Date() + duration / 2);
      var y = t * -scrollTop / duration + scrollTop;
      scroll(y);
      cid = requestAniFrame()(fn);
      if (t === duration || y === 0) {
        window.cancelAnimationFrame(cid);
      }
    });
  };
  var initCancelAniFrame = function initCancelAniFrame2() {
    window.cancelAnimationFrame = window.webkitCancelAnimationFrame;
  };
  var requestAniFrame = function requestAniFrame2() {
    return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function(callback) {
      window.setTimeout(callback, 1e3 / 60);
    };
  };
  function addEventListener() {
    var _scrollEl$current, _scrollEl$current2;
    (_scrollEl$current = scrollEl.current) === null || _scrollEl$current === void 0 ? void 0 : _scrollEl$current.addEventListener("scroll", scrollListener, false);
    (_scrollEl$current2 = scrollEl.current) === null || _scrollEl$current2 === void 0 ? void 0 : _scrollEl$current2.addEventListener("resize", scrollListener, false);
  }
  function removeEventListener() {
    var _scrollEl$current3, _scrollEl$current4;
    (_scrollEl$current3 = scrollEl.current) === null || _scrollEl$current3 === void 0 ? void 0 : _scrollEl$current3.removeEventListener("scroll", scrollListener, false);
    (_scrollEl$current4 = scrollEl.current) === null || _scrollEl$current4 === void 0 ? void 0 : _scrollEl$current4.removeEventListener("resize", scrollListener, false);
  }
  var goTop = function goTop2(e) {
    onClick && onClick(e);
    var otime = +/* @__PURE__ */ new Date();
    startTime = otime;
    duration > 0 ? scrollAnimation() : scroll();
  };
  var styles = style ? _objectSpread({
    zIndex
  }, style) : {
    right: "10px",
    bottom: "20px",
    zIndex
  };
  return React__default.createElement("div", {
    className: classNames(classPrefix, className, {
      show: backTop
    }),
    style: styles,
    onClick: function onClick2(e) {
      goTop(e);
    }
  }, children || React__default.createElement(Top, {
    width: 19,
    height: 19,
    className: "nut-backtop-main"
  }));
};
BackTop.defaultProps = defaultProps;
BackTop.displayName = "NutBackTop";
export {
  BackTop as default
};
