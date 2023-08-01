import _slicedToArray from "@babel/runtime/helpers/slicedToArray";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
var _excluded = ["paused", "startTime", "endTime", "remainingTime", "millisecond", "format", "autoStart", "time", "destroy", "className", "style", "onEnd", "onPaused", "onRestart", "onUpdate", "children"];
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
import React__default, { useState, useRef, useImperativeHandle, useEffect } from "react";
import { useConfig } from "./ConfigProvider.js";
import { C as ComponentDefaults } from "./typings.js";
var defaultProps = _objectSpread(_objectSpread({}, ComponentDefaults), {}, {
  paused: false,
  startTime: Date.now(),
  endTime: Date.now(),
  remainingTime: 0,
  millisecond: false,
  format: "HH:mm:ss",
  autoStart: true,
  time: 0,
  destroy: false
});
var InternalCountDown = function InternalCountDown2(props, ref) {
  useConfig();
  var _defaultProps$props = _objectSpread(_objectSpread({}, defaultProps), props), paused = _defaultProps$props.paused, startTime = _defaultProps$props.startTime, endTime = _defaultProps$props.endTime, remainingTime = _defaultProps$props.remainingTime, millisecond = _defaultProps$props.millisecond, format = _defaultProps$props.format, autoStart = _defaultProps$props.autoStart, time = _defaultProps$props.time, destroy = _defaultProps$props.destroy, className = _defaultProps$props.className, style = _defaultProps$props.style, onEnd = _defaultProps$props.onEnd, onPaused = _defaultProps$props.onPaused, onRestart = _defaultProps$props.onRestart, onUpdate = _defaultProps$props.onUpdate, children = _defaultProps$props.children, rest = _objectWithoutProperties(_defaultProps$props, _excluded);
  var classPrefix = "nut-countdown";
  var _useState = useState(0), _useState2 = _slicedToArray(_useState, 2), restTimeStamp = _useState2[0], setRestTime = _useState2[1];
  var stateRef = useRef({
    pauseTime: 0,
    curr: 0,
    isPaused: paused,
    isIninted: false,
    timer: 0,
    restTime: 0,
    counting: !paused && autoStart,
    handleEndTime: Date.now(),
    diffTime: 0
    // 设置了 startTime 时，与 date.now() 的差异
  });
  var getTimeStamp = function getTimeStamp2(timeStr) {
    if (!timeStr)
      return Date.now();
    var t = timeStr;
    t = t > 0 ? +t : t.toString().replace(/-/g, "/");
    return new Date(t).getTime();
  };
  var initTime = function initTime2() {
    if (remainingTime) {
      stateRef.current.handleEndTime = Date.now() + Number(remainingTime);
    } else {
      stateRef.current.handleEndTime = endTime;
      stateRef.current.diffTime = Date.now() - getTimeStamp(startTime);
    }
    if (!stateRef.current.counting)
      stateRef.current.counting = true;
    tick();
  };
  var tick = function tick2() {
    stateRef.current.timer = requestAnimationFrame(function() {
      if (stateRef.current.counting) {
        var currentTime = Date.now() - stateRef.current.diffTime;
        var remainTime = Math.max(stateRef.current.handleEndTime - currentTime, 0);
        stateRef.current.restTime = remainTime;
        setRestTime(remainTime);
        if (!remainTime) {
          stateRef.current.counting = false;
          pause();
          onEnd && onEnd();
        }
        if (remainTime > 0) {
          tick2();
        }
      }
    });
  };
  var formatRemainTime = function formatRemainTime2(t, type) {
    var ts = t;
    var rest2 = {
      d: 0,
      h: 0,
      m: 0,
      s: 0,
      ms: 0
    };
    var SECOND = 1e3;
    var MINUTE = 60 * SECOND;
    var HOUR = 60 * MINUTE;
    var DAY = 24 * HOUR;
    if (ts > 0) {
      rest2.d = ts >= SECOND ? Math.floor(ts / DAY) : 0;
      rest2.h = Math.floor(ts % DAY / HOUR);
      rest2.m = Math.floor(ts % HOUR / MINUTE);
      rest2.s = Math.floor(ts % MINUTE / SECOND);
      rest2.ms = Math.floor(ts % SECOND);
    }
    return type === "custom" ? rest2 : parseFormat(_objectSpread({}, rest2));
  };
  var parseFormat = function parseFormat2(time2) {
    var d = time2.d;
    var h = time2.h, m = time2.m, s = time2.s, ms = time2.ms;
    var formatCache = format;
    if (formatCache.includes("DD")) {
      formatCache = formatCache.replace("DD", padZero(d));
    } else {
      h += Number(d) * 24;
    }
    if (formatCache.includes("HH")) {
      formatCache = formatCache.replace("HH", padZero(h));
    } else {
      m += Number(h) * 60;
    }
    if (formatCache.includes("mm")) {
      formatCache = formatCache.replace("mm", padZero(m));
    } else {
      s += Number(m) * 60;
    }
    if (formatCache.includes("ss")) {
      formatCache = formatCache.replace("ss", padZero(s));
    } else {
      ms += Number(s) * 1e3;
    }
    if (formatCache.includes("S")) {
      var msC = padZero(ms, 3).toString();
      if (formatCache.includes("SSS")) {
        formatCache = formatCache.replace("SSS", msC);
      } else if (formatCache.includes("SS")) {
        formatCache = formatCache.replace("SS", msC.slice(0, 2));
      } else if (formatCache.includes("S")) {
        formatCache = formatCache.replace("SS", msC.slice(0, 1));
      }
    }
    return formatCache;
  };
  var padZero = function padZero2(num) {
    var length = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 2;
    num += "";
    while (num.length < length) {
      num = "0".concat(num);
    }
    return num.toString();
  };
  var pause = function pause2() {
    cancelAnimationFrame(stateRef.current.timer);
    stateRef.current.counting = false;
    onPaused && onPaused(stateRef.current.restTime);
  };
  useImperativeHandle(ref, function() {
    return {
      start: function start() {
        if (!stateRef.current.counting && !autoStart) {
          stateRef.current.counting = true;
          stateRef.current.handleEndTime = Date.now() + Number(stateRef.current.restTime);
          tick();
          onRestart && onRestart(stateRef.current.restTime);
        }
      },
      pause: function pause2() {
        cancelAnimationFrame(stateRef.current.timer);
        stateRef.current.counting = false;
        onPaused && onPaused(stateRef.current.restTime);
      },
      reset: function reset() {
        if (!autoStart) {
          pause();
          stateRef.current.restTime = time;
          setRestTime(time);
        }
      }
    };
  });
  useEffect(function() {
    var tranTime = formatRemainTime(stateRef.current.restTime, "custom");
    onUpdate && onUpdate(tranTime);
  }, [restTimeStamp]);
  useEffect(function() {
    if (stateRef.current.isIninted) {
      if (paused) {
        if (stateRef.current.counting) {
          pause();
        }
      } else {
        if (!stateRef.current.counting) {
          stateRef.current.counting = true;
          stateRef.current.handleEndTime = Date.now() + Number(stateRef.current.restTime);
          tick();
        }
        onRestart && onRestart(stateRef.current.restTime);
      }
    }
  }, [paused]);
  useEffect(function() {
    if (stateRef.current.isIninted) {
      initTime();
    }
  }, [endTime, startTime, remainingTime]);
  useEffect(function() {
    if (autoStart) {
      initTime();
    } else {
      stateRef.current.restTime = time;
      setRestTime(time);
    }
    if (!stateRef.current.isIninted) {
      stateRef.current.isIninted = true;
    }
    return componentWillUnmount;
  }, []);
  var componentWillUnmount = function componentWillUnmount2() {
    destroy && cancelAnimationFrame(stateRef.current.timer);
  };
  var renderTime = function() {
    return formatRemainTime(stateRef.current.restTime);
  }();
  return React__default.createElement("div", _objectSpread({
    className: "".concat(classPrefix, " ").concat(className),
    style: _objectSpread({}, style)
  }, rest), children || React__default.createElement("div", {
    className: "".concat(classPrefix, "__block"),
    // eslint-disable-next-line react/no-danger
    dangerouslySetInnerHTML: {
      __html: "".concat(renderTime)
    }
  }));
};
var CountDown = React__default.forwardRef(InternalCountDown);
CountDown.defaultProps = defaultProps;
CountDown.displayName = "NutCountDown";
export {
  CountDown as default
};
