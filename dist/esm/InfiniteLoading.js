import _slicedToArray from "@babel/runtime/helpers/slicedToArray";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
var _excluded = ["children", "hasMore", "threshold", "target", "capture", "pullRefresh", "pullingText", "loadingText", "loadMoreText", "className", "onRefresh", "onLoadMore", "onScroll"];
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
import classNames from "classnames";
import { useConfig } from "./ConfigProvider.js";
import { C as ComponentDefaults } from "./typings.js";
var defaultProps = _objectSpread(_objectSpread({}, ComponentDefaults), {}, {
  hasMore: true,
  threshold: 200,
  target: "",
  capture: false,
  pullRefresh: false
});
var classPrefix = "nut-infiniteloading";
var InfiniteLoading = function InfiniteLoading2(props) {
  var _useConfig = useConfig(), locale = _useConfig.locale;
  var _defaultProps$props = _objectSpread(_objectSpread({}, defaultProps), props), children = _defaultProps$props.children, hasMore = _defaultProps$props.hasMore, threshold = _defaultProps$props.threshold, target = _defaultProps$props.target, capture = _defaultProps$props.capture, pullRefresh = _defaultProps$props.pullRefresh, pullingText = _defaultProps$props.pullingText, loadingText = _defaultProps$props.loadingText, loadMoreText = _defaultProps$props.loadMoreText, className = _defaultProps$props.className, onRefresh = _defaultProps$props.onRefresh, onLoadMore = _defaultProps$props.onLoadMore, onScroll = _defaultProps$props.onScroll, restProps = _objectWithoutProperties(_defaultProps$props, _excluded);
  var _useState = useState(false), _useState2 = _slicedToArray(_useState, 2), isInfiniting = _useState2[0], setIsInfiniting = _useState2[1];
  var scroller = useRef(null);
  var refreshTop = useRef(null);
  var scrollEl = useRef(window);
  var isTouching = useRef(false);
  var beforeScrollTop = useRef(0);
  var refreshMaxH = useRef(0);
  var y = useRef(0);
  var distance = useRef(0);
  var classes = classNames(className, classPrefix);
  useEffect(function() {
    if (target && document.getElementById(target)) {
      scrollEl.current = document.getElementById(target);
    } else {
      scrollEl.current = window;
    }
    scrollEl.current.addEventListener("scroll", handleScroll, capture);
    return function() {
      scrollEl.current.removeEventListener("scroll", handleScroll, capture);
    };
  }, [hasMore, isInfiniting]);
  useEffect(function() {
    var element = scroller.current;
    element.addEventListener("touchmove", touchMove, {
      passive: false
    });
    return function() {
      element.removeEventListener("touchmove", touchMove, {
        passive: false
      });
    };
  }, []);
  var getStyle = function getStyle2() {
    return {
      height: distance.current < 0 ? "0px" : "".concat(distance.current, "px"),
      transition: isTouching.current ? "height 0s cubic-bezier(0.25,0.1,0.25,1)" : "height 0.2s cubic-bezier(0.25,0.1,0.25,1)"
    };
  };
  var handleScroll = function handleScroll2() {
    requestAniFrame()(function() {
      if (!isScrollAtBottom() || !hasMore || isInfiniting) {
        return false;
      }
      setIsInfiniting(true);
      onLoadMore && onLoadMore(infiniteDone);
      return true;
    });
  };
  var infiniteDone = function infiniteDone2() {
    setIsInfiniting(false);
  };
  var refreshDone = function refreshDone2() {
    distance.current = 0;
    refreshTop.current.style.height = "".concat(distance.current, "px");
    isTouching.current = false;
  };
  var touchStart = function touchStart2(event) {
    if (beforeScrollTop.current === 0 && !isTouching.current && pullRefresh) {
      y.current = event.touches[0].pageY;
      isTouching.current = true;
      var childHeight = refreshTop.current.firstElementChild.offsetHeight;
      refreshMaxH.current = Math.floor(childHeight * 1 + 10);
    }
  };
  var touchMove = function touchMove2(event) {
    distance.current = event.touches[0].pageY - y.current;
    if (distance.current > 0 && isTouching.current) {
      event.preventDefault();
      if (distance.current >= refreshMaxH.current) {
        distance.current = refreshMaxH.current;
        refreshTop.current.style.height = "".concat(distance.current, "px");
      } else {
        refreshTop.current.style.height = "".concat(distance.current, "px");
      }
    } else {
      distance.current = 0;
      refreshTop.current.style.height = "".concat(distance.current, "px");
      isTouching.current = false;
    }
  };
  var touchEnd = function touchEnd2() {
    if (distance.current < refreshMaxH.current) {
      distance.current = 0;
      refreshTop.current.style.height = "".concat(distance.current, "px");
    } else {
      onRefresh && onRefresh(refreshDone);
    }
  };
  var requestAniFrame = function requestAniFrame2() {
    return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function fn(callback) {
      window.setTimeout(callback, 1e3 / 60);
    };
  };
  var getWindowScrollTop = function getWindowScrollTop2() {
    return window.scrollY !== void 0 ? window.scrollY : (document.documentElement || document.body.parentNode || document.body).scrollTop;
  };
  var calculateTopPosition = function calculateTopPosition2(el) {
    return !el ? 0 : el.offsetTop + calculateTopPosition2(el.offsetParent);
  };
  var isScrollAtBottom = function isScrollAtBottom2() {
    var offsetDistance = 0;
    var resScrollTop = 0;
    var direction = "down";
    var windowScrollTop = getWindowScrollTop();
    if (!target || !document.getElementById(target)) {
      if (scroller.current) {
        offsetDistance = calculateTopPosition(scroller.current) + scroller.current.offsetHeight - windowScrollTop - window.innerHeight;
      }
      resScrollTop = windowScrollTop;
    } else {
      var _scrollEl$current = scrollEl.current, scrollHeight = _scrollEl$current.scrollHeight, clientHeight = _scrollEl$current.clientHeight, scrollTop = _scrollEl$current.scrollTop;
      offsetDistance = scrollHeight - clientHeight - scrollTop;
      resScrollTop = scrollTop;
    }
    if (beforeScrollTop.current > resScrollTop) {
      direction = "up";
    } else {
      direction = "down";
    }
    beforeScrollTop.current = resScrollTop;
    onScroll && onScroll(resScrollTop);
    return offsetDistance <= threshold && direction === "down";
  };
  return React__default.createElement("div", _objectSpread({
    className: classes,
    ref: scroller,
    onTouchStart: touchStart,
    onTouchEnd: touchEnd
  }, restProps), React__default.createElement("div", {
    className: "nut-infinite-top",
    ref: refreshTop,
    style: getStyle()
  }, React__default.createElement("div", {
    className: "top-box"
  }, pullingText || locale.infiniteloading.pullRefreshText)), React__default.createElement("div", {
    className: "nut-infinite-container"
  }, children), React__default.createElement("div", {
    className: "nut-infinite-bottom"
  }, isInfiniting ? React__default.createElement("div", {
    className: "bottom-box"
  }, loadingText || locale.infiniteloading.loadText) : !hasMore && React__default.createElement("div", {
    className: "tips"
  }, loadMoreText || locale.infiniteloading.loadMoreText)));
};
InfiniteLoading.defaultProps = defaultProps;
InfiniteLoading.displayName = "NutInfiniteLoading";
export {
  InfiniteLoading as default
};
