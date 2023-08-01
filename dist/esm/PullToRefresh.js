import _asyncToGenerator from "@babel/runtime/helpers/asyncToGenerator";
import _slicedToArray from "@babel/runtime/helpers/slicedToArray";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _regeneratorRuntime from "@babel/runtime/regenerator";
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
import { useDrag } from "@use-gesture/react";
import { useSpring, animated } from "@react-spring/web";
import { useConfig } from "./ConfigProvider.js";
import { c as canUseDom, g as getScrollParent } from "./get-scroll-parent.js";
import { C as ComponentDefaults } from "./typings.js";
function bound(position, min, max) {
  var ret = position;
  if (min !== void 0) {
    ret = Math.max(position, min);
  }
  if (max !== void 0) {
    ret = Math.min(ret, max);
  }
  return ret;
}
function rubberband(distance, dimension, constant) {
  return distance * dimension * constant / (dimension + constant * distance);
}
function rubberbandIfOutOfBounds(position, min, max, dimension) {
  var constant = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : 0.15;
  if (constant === 0)
    return bound(position, min, max);
  if (position < min)
    return -rubberband(min - position, dimension, constant) + min;
  if (position > max)
    return +rubberband(position - max, dimension, constant) + max;
  return position;
}
var sleep = function sleep2(time) {
  return new Promise(function(resolve) {
    return setTimeout(resolve, time);
  });
};
var passiveSupported = false;
if (canUseDom) {
  try {
    var opts = Object.defineProperty({}, "passive", {
      get: function get() {
        passiveSupported = true;
      }
    });
    window.addEventListener("test-passive-supported", null, opts);
  } catch (e) {
    console.log(e);
  }
}
var defaultProps = _objectSpread(_objectSpread({}, ComponentDefaults), {}, {
  pullingText: "",
  canReleaseText: "",
  refreshingText: "",
  completeText: "",
  completeDelay: 500,
  disabled: false,
  headHeight: 40,
  threshold: 60,
  onRefresh: function onRefresh() {
  }
});
var PullToRefresh = function PullToRefresh2(p) {
  var classPrefix = "nut-pulltorefresh";
  var _useConfig = useConfig(), locale = _useConfig.locale;
  var props = _objectSpread(_objectSpread(_objectSpread({}, defaultProps), p), {
    pullingText: p.pullingText || locale.pullToRefresh.pullingText,
    canReleaseText: p.canReleaseText || locale.pullToRefresh.canReleaseText,
    refreshingText: p.refreshingText || locale.pullToRefresh.refreshingText,
    completeText: p.completeText || locale.pullToRefresh.completeText
  });
  var headHeight = props.headHeight;
  var threshold = props.threshold;
  var _useState = useState("pulling"), _useState2 = _slicedToArray(_useState, 2), status = _useState2[0], setStatus = _useState2[1];
  var _useSpring = useSpring(function() {
    return {
      from: {
        height: 0
      },
      config: {
        tension: 300,
        friction: 30,
        clamp: true
      }
    };
  }), _useSpring2 = _slicedToArray(_useSpring, 2), springStyles = _useSpring2[0], api = _useSpring2[1];
  var elementRef = useRef(null);
  var pullingRef = useRef(false);
  useEffect(function() {
    var _elementRef$current;
    (_elementRef$current = elementRef.current) === null || _elementRef$current === void 0 ? void 0 : _elementRef$current.addEventListener("touchmove", function() {
    });
  }, []);
  function doRefresh() {
    return _doRefresh.apply(this, arguments);
  }
  function _doRefresh() {
    _doRefresh = _asyncToGenerator(/* @__PURE__ */ _regeneratorRuntime.mark(function _callee3() {
      return _regeneratorRuntime.wrap(function _callee3$(_context3) {
        while (1)
          switch (_context3.prev = _context3.next) {
            case 0:
              api.start({
                height: headHeight
              });
              setStatus("refreshing");
              _context3.prev = 2;
              _context3.next = 5;
              return props.onRefresh();
            case 5:
              setStatus("complete");
              _context3.next = 12;
              break;
            case 8:
              _context3.prev = 8;
              _context3.t0 = _context3["catch"](2);
              api.start({
                to: function() {
                  var _to = _asyncToGenerator(/* @__PURE__ */ _regeneratorRuntime.mark(function _callee(next) {
                    return _regeneratorRuntime.wrap(function _callee$(_context) {
                      while (1)
                        switch (_context.prev = _context.next) {
                          case 0:
                            _context.next = 2;
                            return next({
                              height: 0
                            });
                          case 2:
                            setStatus("pulling");
                          case 3:
                          case "end":
                            return _context.stop();
                        }
                    }, _callee);
                  }));
                  function to(_x) {
                    return _to.apply(this, arguments);
                  }
                  return to;
                }()
              });
              throw _context3.t0;
            case 12:
              if (!(props.completeDelay > 0)) {
                _context3.next = 15;
                break;
              }
              _context3.next = 15;
              return sleep(props.completeDelay);
            case 15:
              api.start({
                to: function() {
                  var _to2 = _asyncToGenerator(/* @__PURE__ */ _regeneratorRuntime.mark(function _callee2(next) {
                    return _regeneratorRuntime.wrap(function _callee2$(_context2) {
                      while (1)
                        switch (_context2.prev = _context2.next) {
                          case 0:
                            _context2.next = 2;
                            return next({
                              height: 0
                            });
                          case 2:
                            setStatus("pulling");
                          case 3:
                          case "end":
                            return _context2.stop();
                        }
                    }, _callee2);
                  }));
                  function to(_x2) {
                    return _to2.apply(this, arguments);
                  }
                  return to;
                }()
              });
            case 16:
            case "end":
              return _context3.stop();
          }
      }, _callee3, null, [[2, 8]]);
    }));
    return _doRefresh.apply(this, arguments);
  }
  useDrag(function(state) {
    if (status === "refreshing" || status === "complete")
      return;
    var event = state.event;
    if (state.last) {
      pullingRef.current = false;
      if (status === "canRelease") {
        doRefresh();
      } else {
        api.start({
          height: 0
        });
      }
      return;
    }
    function getScrollTop(element) {
      return "scrollTop" in element ? element.scrollTop : element.scrollY;
    }
    var _state$movement = _slicedToArray(state.movement, 2), y = _state$movement[1];
    if (state.first && y > 0) {
      var target = state.event.target;
      if (!target || !(target instanceof Element))
        return;
      var scrollParent = getScrollParent(target);
      while (true) {
        if (!scrollParent)
          return;
        var scrollTop = getScrollTop(scrollParent);
        if (scrollTop > 0) {
          return;
        }
        if (scrollParent instanceof Window) {
          break;
        }
        scrollParent = getScrollParent(scrollParent.parentNode);
      }
      pullingRef.current = true;
    }
    if (!pullingRef.current)
      return;
    if (event.cancelable) {
      event.preventDefault();
    }
    event.stopPropagation();
    var height = Math.max(rubberbandIfOutOfBounds(y, 0, 0, headHeight * 5, 0.5), 0);
    api.start({
      height
    });
    setStatus(height > threshold ? "canRelease" : "pulling");
  }, {
    pointer: {
      touch: true
    },
    axis: "y",
    target: elementRef,
    enabled: !props.disabled,
    eventOptions: passiveSupported ? {
      passive: false
    } : false
  });
  var renderStatusText = function renderStatusText2() {
    if (props.renderText) {
      var _props$renderText;
      return (_props$renderText = props.renderText) === null || _props$renderText === void 0 ? void 0 : _props$renderText.call(props, status);
    }
    if (status === "pulling")
      return props.pullingText;
    if (status === "canRelease")
      return props.canReleaseText;
    if (status === "refreshing")
      return props.refreshingText;
    if (status === "complete")
      return props.completeText;
    return "";
  };
  return React__default.createElement(animated.div, {
    ref: elementRef,
    className: "".concat(classPrefix, " ").concat(props.className),
    style: props.style
  }, React__default.createElement(animated.div, {
    style: springStyles,
    className: "".concat(classPrefix, "-head")
  }, React__default.createElement("div", {
    className: "".concat(classPrefix, "-head-content"),
    style: {
      height: headHeight
    }
  }, renderStatusText())), React__default.createElement("div", {
    className: "".concat(classPrefix, "-content")
  }, props.children));
};
PullToRefresh.defaultProps = defaultProps;
PullToRefresh.displayName = "NutPullToRefresh";
export {
  PullToRefresh as default
};
