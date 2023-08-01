import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _inherits from "@babel/runtime/helpers/inherits";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
var _excluded = ["length", "value", "delay", "duration", "className", "thousands", "style"];
function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();
  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived), result;
    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }
    return _possibleConstructorReturn(this, result);
  };
}
function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct)
    return false;
  if (Reflect.construct.sham)
    return false;
  if (typeof Proxy === "function")
    return true;
  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
    return true;
  } catch (e) {
    return false;
  }
}
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
import React__default, { useRef, useMemo, useEffect, Component } from "react";
import { C as ComponentDefaults } from "./typings.js";
var defaultProps$1 = _objectSpread(_objectSpread({}, ComponentDefaults), {}, {
  length: 0,
  value: "",
  delay: 300,
  duration: 1,
  thousands: false
});
var CountUp = function CountUp2(props) {
  var _defaultProps$1$props = _objectSpread(_objectSpread({}, defaultProps$1), props), length = _defaultProps$1$props.length, value = _defaultProps$1$props.value, delay = _defaultProps$1$props.delay, duration = _defaultProps$1$props.duration, className = _defaultProps$1$props.className, thousands = _defaultProps$1$props.thousands, style = _defaultProps$1$props.style, reset = _objectWithoutProperties(_defaultProps$1$props, _excluded);
  var classPrefix = "nut-countup";
  var countupRef = useRef(null);
  var timerRef = useRef(0);
  var numbers = Array.from({
    length: 10
  }, function(v, i) {
    return i;
  });
  var getShowNumber = function getShowNumber2() {
    var splitArr = value.split(".");
    var intNumber = length && splitArr[0].length < length ? (Array(length).join("0") + splitArr[0]).slice(-length) : splitArr[0];
    var currNumber = "".concat(thousands ? intNumber.replace(/(\d)(?=(?:\d{3})+$)/g, "$1,") : intNumber).concat(splitArr[1] ? "." : "").concat(splitArr[1] || "");
    return currNumber.split("");
  };
  var numerArr = useMemo(getShowNumber, [value, length, thousands]);
  var setNumberTransform = function setNumberTransform2() {
    if (countupRef.current) {
      var numberItems = countupRef.current.querySelectorAll(".nut-countup__number");
      var numberFilterArr = numerArr.filter(function(item) {
        return !Number.isNaN(Number(item));
      });
      Object.keys(numberItems).forEach(function(key) {
        var elem = numberItems[Number(key)];
        var idx = Number(numberFilterArr[Number(key)]);
        if ((idx || idx === 0) && elem) {
          var transform = "translate(0, -".concat((idx === 0 ? 10 : idx) * 5, "%)");
          elem.style.transform = transform;
          elem.style.webkitTransform = transform;
        }
      });
    }
  };
  var numberEaseStyle = {
    transition: "transform ".concat(duration, "s ease-in-out")
  };
  useEffect(function() {
    timerRef.current = window.setTimeout(function() {
      setNumberTransform();
    }, delay);
    return function() {
      window.clearTimeout(timerRef.current);
    };
  }, [numerArr]);
  return React__default.createElement("div", {
    className: "".concat(classPrefix, " ").concat(className),
    ref: countupRef
  }, React__default.createElement("ul", {
    className: "".concat(classPrefix, "__list")
  }, numerArr.map(function(item, idx) {
    return React__default.createElement("li", {
      className: "".concat(classPrefix, "__listitem ").concat(!Number.isNaN(Number(item)) ? "".concat(classPrefix, "__listitem--number") : ""),
      key: idx
    }, !Number.isNaN(Number(item)) ? React__default.createElement("span", {
      className: "".concat(classPrefix, "__number"),
      style: numberEaseStyle
    }, [].concat(numbers, numbers).map(function(number, subidx) {
      return React__default.createElement("span", {
        key: subidx
      }, number);
    })) : React__default.createElement("span", {
      className: "".concat(classPrefix, "__separator")
    }, item));
  })));
};
CountUp.defaultProps = defaultProps$1;
CountUp.displayName = "NutCountUp";
var defaultProps = {};
var AnimatingNumbers = /* @__PURE__ */ function(_Component) {
  _inherits(AnimatingNumbers2, _Component);
  var _super = _createSuper(AnimatingNumbers2);
  function AnimatingNumbers2(props) {
    var _this;
    _classCallCheck(this, AnimatingNumbers2);
    _this = _super.call(this, props);
    _this.state = {};
    return _this;
  }
  _createClass(AnimatingNumbers2, [{
    key: "render",
    value: function render() {
      return React__default.createElement("div", {
        className: "nut-animatingnumbers"
      });
    }
  }]);
  return AnimatingNumbers2;
}(Component);
_defineProperty(AnimatingNumbers, "defaultProps", defaultProps);
_defineProperty(AnimatingNumbers, "displayName", "NutAnimatingNumbers");
_defineProperty(AnimatingNumbers, "CountUp", CountUp);
AnimatingNumbers.CountUp = CountUp;
export {
  AnimatingNumbers as default
};
