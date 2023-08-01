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
import React__default, { useState, useRef, useEffect, useCallback } from "react";
import classNames from "classnames";
import { u as useTouch } from "./use-touch.js";
import { g as getRect } from "./use-client-rect.js";
import { C as ComponentDefaults } from "./typings.js";
import { u as usePropsValue } from "./use-props-value.js";
var defaultProps = _objectSpread(_objectSpread({}, ComponentDefaults), {}, {
  range: false,
  min: 0,
  max: 100,
  step: 1,
  vertical: false,
  marks: {}
});
var Range = function Range2(props) {
  var _classNames;
  var _defaultProps$props = _objectSpread(_objectSpread({}, defaultProps), props), className = _defaultProps$props.className, range = _defaultProps$props.range, disabled = _defaultProps$props.disabled, button = _defaultProps$props.button, vertical = _defaultProps$props.vertical, marks = _defaultProps$props.marks, onChange = _defaultProps$props.onChange, onStart = _defaultProps$props.onStart, onEnd = _defaultProps$props.onEnd, minDescription = _defaultProps$props.minDescription, maxDescription = _defaultProps$props.maxDescription, currentDescription = _defaultProps$props.currentDescription, min = _defaultProps$props.min, max = _defaultProps$props.max, step = _defaultProps$props.step, value = _defaultProps$props.value, defaultValue = _defaultProps$props.defaultValue;
  var classPrefix = "nut-range";
  var _useState = useState(0), _useState2 = _slicedToArray(_useState, 2), buttonIndex = _useState2[0], setButtonIndex = _useState2[1];
  var _useState3 = useState("start"), _useState4 = _slicedToArray(_useState3, 2), dragStatus = _useState4[0], setDragStatus = _useState4[1];
  var touch = useTouch();
  var root = useRef(null);
  var _useState5 = useState([]), _useState6 = _slicedToArray(_useState5, 2), marksList = _useState6[0], setMarksList = _useState6[1];
  var _useState7 = useState(0), _useState8 = _slicedToArray(_useState7, 2), startValue = _useState8[0], setStartValue = _useState8[1];
  var handleChange = function handleChange2(value2) {
    onChange && onChange(value2);
  };
  var _usePropsValue = usePropsValue({
    value,
    defaultValue,
    finalValue: 0,
    onChange: handleChange
  }), _usePropsValue2 = _slicedToArray(_usePropsValue, 2), current = _usePropsValue2[0], setCurrent = _usePropsValue2[1];
  var _useState9 = useState(function() {
    return value || defaultValue || 0;
  }), _useState10 = _slicedToArray(_useState9, 2), exactValue = _useState10[0], setEaxctValue = _useState10[1];
  useEffect(function() {
    if (marks) {
      var marksKeys = Object.keys(marks);
      var list = marksKeys.map(parseFloat).sort(function(a, b) {
        return a - b;
      }).filter(function(point) {
        return point >= min && point <= max;
      });
      setMarksList(list);
    }
  }, [marks]);
  var scope = function scope2() {
    return max - min;
  };
  var classes = classNames(classPrefix, (_classNames = {}, _defineProperty(_classNames, "".concat(classPrefix, "-disabled"), disabled), _defineProperty(_classNames, "".concat(classPrefix, "-vertical"), vertical), _classNames));
  var containerClasses = classNames("".concat(classPrefix, "-container"), className, _defineProperty({}, "".concat(classPrefix, "-container-vertical"), vertical));
  var markClassName = useCallback(function(mark) {
    var classPrefix2 = "nut-range-mark";
    var lowerBound = min;
    var upperBound = max;
    if (range && Array.isArray(current)) {
      lowerBound = current[0];
      upperBound = current[1];
    } else {
      upperBound = current;
    }
    var isActive = mark <= upperBound && mark >= lowerBound;
    return ["".concat(classPrefix2, "-text"), "".concat(isActive ? "".concat(classPrefix2, "-text-active") : "")].join(" ");
  }, [range, current, min, max]);
  var isRange = function isRange2(val) {
    return !!range && Array.isArray(val);
  };
  var calcMainAxis = function calcMainAxis2() {
    var modelVal = current;
    if (isRange(modelVal)) {
      return "".concat((modelVal[1] - modelVal[0]) * 100 / scope(), "%");
    }
    return "".concat((modelVal - min) * 100 / scope(), "%");
  };
  var calcOffset = function calcOffset2() {
    var modelVal = current;
    if (isRange(modelVal)) {
      return "".concat((modelVal[0] - min) * 100 / scope(), "%");
    }
    return "0%";
  };
  var barStyle = function barStyle2() {
    if (vertical) {
      return {
        height: calcMainAxis(),
        top: calcOffset(),
        transition: dragStatus ? "none" : void 0
      };
    }
    return {
      width: calcMainAxis(),
      left: calcOffset(),
      transition: dragStatus ? "none" : void 0
    };
  };
  var marksStyle = function marksStyle2(mark) {
    var style = {
      left: "".concat((mark - min) / scope() * 100, "%")
    };
    if (vertical) {
      style = {
        top: "".concat((mark - min) / scope() * 100, "%")
      };
    }
    return style;
  };
  var tickClass = function tickClass2(mark) {
    if (range && Array.isArray(current)) {
      return mark <= current[1] && mark >= current[0];
    }
    return mark <= current;
  };
  var format = function format2(value2) {
    value2 = Math.max(+min, Math.min(value2, +max));
    return Math.round(value2 / +step) * +step;
  };
  var isSameValue = function isSameValue2(newValue, oldValue) {
    return JSON.stringify(newValue) === JSON.stringify(oldValue);
  };
  var handleOverlap = function handleOverlap2(value2) {
    if (value2[0] > value2[1]) {
      return value2.slice(0).reverse();
    }
    return value2;
  };
  var updateValue = function updateValue2(value2, end) {
    if (isRange(value2)) {
      value2 = handleOverlap(value2).map(format);
    } else {
      value2 = format(value2);
    }
    if (!isSameValue(value2, current)) {
      setCurrent(value2);
    }
    end && onEnd && onEnd(value2);
  };
  var click = function click2(event) {
    if (disabled || !root.current) {
      return;
    }
    setDragStatus("");
    var rect = getRect(root.current);
    var delta = event.clientX - rect.left;
    var total = rect.width;
    if (vertical) {
      delta = event.clientY - rect.top;
      total = rect.height;
    }
    var value2 = min + delta / total * scope();
    setEaxctValue(current);
    if (isRange(current)) {
      var _current = _slicedToArray(current, 2), left = _current[0], right = _current[1];
      var middle = (left + right) / 2;
      if (value2 <= middle) {
        updateValue([value2, right], true);
      } else {
        updateValue([left, value2], true);
      }
    } else {
      updateValue(value2, true);
    }
  };
  var _onTouchStart = function onTouchStart(event) {
    if (disabled) {
      return;
    }
    touch.start(event);
    setEaxctValue(current);
    if (isRange(current)) {
      setStartValue(current.map(format));
    } else {
      setStartValue(format(current));
    }
    setDragStatus("start");
  };
  var _onTouchMove = function onTouchMove(event) {
    event.stopPropagation();
    if (disabled || !root.current) {
      return;
    }
    if (dragStatus === "start") {
      onStart && onStart();
    }
    touch.move(event);
    setDragStatus("draging");
    var rect = getRect(root.current);
    var delta = touch.deltaX;
    var total = rect.width;
    var diff = delta / total * scope();
    if (vertical) {
      delta = touch.deltaY;
      total = rect.height;
      diff = delta / total * scope();
    }
    var newValue;
    if (isRange(startValue)) {
      newValue = exactValue.slice();
      newValue[buttonIndex] = startValue[buttonIndex] + diff;
    } else {
      newValue = startValue + diff;
    }
    setEaxctValue(newValue);
    updateValue(newValue);
  };
  var onTouchEnd = function onTouchEnd2() {
    if (disabled) {
      return;
    }
    if (dragStatus === "draging") {
      updateValue(current, true);
    }
    setDragStatus("");
  };
  var curValue = function curValue2(idx) {
    var modelVal = current;
    var value2 = typeof idx === "number" ? modelVal[idx] : modelVal;
    return value2;
  };
  var renderButton = function renderButton2(index) {
    return React__default.createElement(React__default.Fragment, null, button || React__default.createElement("div", {
      className: "nut-range-button"
    }, currentDescription !== null && React__default.createElement("div", {
      className: "number"
    }, currentDescription ? currentDescription(curValue(index)) : curValue(index))));
  };
  return React__default.createElement("div", {
    className: containerClasses
  }, minDescription !== null && React__default.createElement("div", {
    className: "min"
  }, minDescription || min), React__default.createElement("div", {
    ref: root,
    className: classes,
    onClick: function onClick(e) {
      return click(e);
    }
  }, marksList.length > 0 && React__default.createElement("div", {
    className: "nut-range-mark"
  }, marksList.map(function(marks2) {
    return React__default.createElement("span", {
      key: marks2,
      className: markClassName(marks2),
      style: marksStyle(marks2)
    }, marks2, React__default.createElement("span", {
      className: classNames("nut-range-tick", {
        active: tickClass(marks2)
      })
    }));
  })), React__default.createElement("div", {
    className: "nut-range-bar",
    style: barStyle()
  }, range ? [0, 1].map(function(item, index) {
    return React__default.createElement("div", {
      key: index,
      className: "".concat(index === 0 ? "nut-range-button-wrapper-left" : "", "\n                  ").concat(index === 1 ? "nut-range-button-wrapper-right" : ""),
      onTouchStart: function onTouchStart(e) {
        if (typeof index === "number") {
          setButtonIndex(index);
        }
        _onTouchStart(e);
      },
      onTouchMove: function onTouchMove(e) {
        return _onTouchMove(e);
      },
      onTouchEnd,
      onTouchCancel: onTouchEnd,
      onClick: function onClick(e) {
        return e.stopPropagation();
      }
    }, renderButton(index));
  }) : React__default.createElement("div", {
    className: "nut-range-button-wrapper",
    onTouchStart: function onTouchStart(e) {
      return _onTouchStart(e);
    },
    onTouchMove: function onTouchMove(e) {
      return _onTouchMove(e);
    },
    onTouchEnd,
    onTouchCancel: onTouchEnd,
    onClick: function onClick(e) {
      return e.stopPropagation();
    }
  }, renderButton()))), maxDescription !== null && React__default.createElement("div", {
    className: "max"
  }, maxDescription || max));
};
Range.defaultProps = defaultProps;
Range.displayName = "NutRange";
export {
  Range as default
};
