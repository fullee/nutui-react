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
import React__default, { useState, useEffect } from "react";
import classNames from "classnames";
import { StarFillN } from "@nutui/icons-react";
import { C as ComponentDefaults } from "./typings.js";
import { u as usePropsValue } from "./use-props-value.js";
var defaultProps = _objectSpread(_objectSpread({}, ComponentDefaults), {}, {
  count: 5,
  min: 0,
  checkedIcon: null,
  uncheckedIcon: null,
  disabled: false,
  readOnly: false,
  allowHalf: false
});
var Rate = function Rate2(props) {
  var _defaultProps$props = _objectSpread(_objectSpread({}, defaultProps), props), className = _defaultProps$props.className, style = _defaultProps$props.style, count = _defaultProps$props.count, value = _defaultProps$props.value, defaultValue = _defaultProps$props.defaultValue, min = _defaultProps$props.min, checkedIcon = _defaultProps$props.checkedIcon, uncheckedIcon = _defaultProps$props.uncheckedIcon, disabled = _defaultProps$props.disabled, readOnly = _defaultProps$props.readOnly, allowHalf = _defaultProps$props.allowHalf, onChange = _defaultProps$props.onChange;
  var classPrefix = "nut-rate";
  var _useState = useState([1, 2, 3, 4, 5]), _useState2 = _slicedToArray(_useState, 2), countArray = _useState2[0], setCountArray = _useState2[1];
  var _usePropsValue = usePropsValue({
    value,
    defaultValue: Math.max(defaultValue || 0, min),
    finalValue: 0,
    onChange
  }), _usePropsValue2 = _slicedToArray(_usePropsValue, 2), score = _usePropsValue2[0], setScore = _usePropsValue2[1];
  useEffect(function() {
    var tmp = [];
    for (var i = 1; i <= Number(count); i++) {
      tmp.push(i);
    }
    setCountArray(tmp);
  }, [count]);
  var renderIcon = function renderIcon2(n) {
    return n <= score ? checkedIcon || React__default.createElement(StarFillN, null) : uncheckedIcon || (checkedIcon ? React__default.cloneElement(checkedIcon, {
      color: void 0
    }) : React__default.createElement(StarFillN, null));
  };
  var _onClick = function onClick(e, index) {
    e.preventDefault();
    e.stopPropagation();
    if (disabled || readOnly)
      return;
    var value2 = 0;
    if (!(index === 1 && score === index)) {
      value2 = index;
    }
    value2 = Math.max(value2, min);
    setScore(value2);
  };
  var onHalfClick = function onHalfClick2(event, n) {
    event.preventDefault();
    event.stopPropagation();
    var value2 = Math.max(min, n - 0.5);
    setScore(value2);
  };
  return React__default.createElement("div", {
    className: classNames(classPrefix, className, {
      disabled,
      readonly: readOnly
    }),
    style
  }, countArray.map(function(n) {
    return React__default.createElement("div", {
      className: "".concat(classPrefix, "-item"),
      key: n,
      onClick: function onClick(event) {
        return _onClick(event, n);
      }
    }, React__default.createElement("div", {
      className: classNames("".concat(classPrefix, "-item__icon"), _defineProperty({}, "".concat(classPrefix, "-item__icon--disabled"), disabled || n > score))
    }, renderIcon(n)), allowHalf && score > n - 1 && React__default.createElement("div", {
      className: classNames("".concat(classPrefix, "-item__half"), "".concat(classPrefix, "-item__icon"), "".concat(classPrefix, "-item__icon--half")),
      onClick: function onClick(event) {
        return onHalfClick(event, n);
      }
    }, renderIcon(n)));
  }));
};
Rate.defaultProps = defaultProps;
Rate.displayName = "NutRate";
export {
  Rate as default
};
