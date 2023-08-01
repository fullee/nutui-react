import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
var _excluded = ["className", "interval", "loop", "list", "duration", "rows", "gapY"];
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
import React__default, { useRef, useImperativeHandle, useEffect } from "react";
import classNames from "classnames";
import { C as ComponentDefaults } from "./typings.js";
var defaultProps = _objectSpread(_objectSpread({}, ComponentDefaults), {}, {
  list: [],
  interval: 500,
  loop: true,
  duration: 3e3,
  rows: 3,
  gapY: 10
});
var classPrefix = "nut-barrage";
var InternalBarrage = function InternalBarrage2(props, ref) {
  var _defaultProps$props = _objectSpread(_objectSpread({}, defaultProps), props), className = _defaultProps$props.className, interval = _defaultProps$props.interval, loop = _defaultProps$props.loop, list = _defaultProps$props.list, duration = _defaultProps$props.duration, rows = _defaultProps$props.rows, gapY = _defaultProps$props.gapY, restProps = _objectWithoutProperties(_defaultProps$props, _excluded);
  var barrageBody = useRef(null);
  var barrageContainer = useRef(null);
  var barrageCWidth = useRef(0);
  var timer = useRef(0);
  var index = useRef(0);
  var classes = classNames(classPrefix, className);
  useImperativeHandle(ref, function() {
    return {
      add: function add(word) {
        var _index = index.current % list.length;
        if (!loop && index.current === list.length) {
          list.splice(list.length, 0, word);
        } else {
          list.splice(_index, 0, word);
        }
      }
    };
  });
  useEffect(function() {
    if (barrageBody.current) {
      barrageCWidth.current = barrageBody.current.offsetWidth;
    }
    setTimeout(function() {
      var _barrageBody$current;
      (_barrageBody$current = barrageBody.current) === null || _barrageBody$current === void 0 ? void 0 : _barrageBody$current.style.setProperty("--move-distance", "-".concat(barrageCWidth.current, "px"));
      index.current = 0;
      run();
    }, 300);
    return function() {
      clearInterval(timer.current);
    };
  }, [list]);
  var run = function run2() {
    clearInterval(timer.current);
    timer.current = window.setTimeout(function() {
      play();
    }, interval);
  };
  var play = function play2() {
    if (!loop && index.current >= list.length) {
      return;
    }
    var _index = loop ? index.current % list.length : index.current;
    var el = document.createElement("div");
    el.innerHTML = list[_index];
    el.classList.add("barrage-item");
    barrageContainer.current.appendChild(el);
    var width = el.offsetWidth;
    var height = el.offsetHeight;
    el.classList.add("move");
    el.style.animationDuration = "".concat(duration, "ms");
    el.style.top = "".concat(_index % rows * (height + gapY) + 20, "px");
    el.style.width = "".concat(width, "px");
    el.addEventListener("animationend", function() {
      barrageContainer.current.removeChild(el);
    });
    index.current++;
    run();
  };
  return React__default.createElement("div", _objectSpread({
    className: classes,
    ref: barrageBody
  }, restProps), React__default.createElement("div", {
    ref: barrageContainer,
    className: "bContainer"
  }));
};
var Barrage = React__default.forwardRef(InternalBarrage);
Barrage.defaultProps = defaultProps;
Barrage.displayName = "NutBarrage";
export {
  Barrage as default
};
