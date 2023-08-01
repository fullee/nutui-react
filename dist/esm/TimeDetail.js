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
import React__default, { useMemo, useCallback } from "react";
import classNames from "classnames";
import { C as ComponentDefaults } from "./typings.js";
var defaultProps = _objectSpread(_objectSpread({}, ComponentDefaults), {}, {
  activeDate: "",
  activeTime: [],
  options: [],
  optionKey: {
    valueKey: "value",
    textKey: "text",
    childrenKey: "children"
  },
  onSelect: function onSelect() {
  }
});
var TimeDetail = function TimeDetail2(props) {
  var _defaultProps$props = _objectSpread(_objectSpread({}, defaultProps), props), options = _defaultProps$props.options, optionKey = _defaultProps$props.optionKey, className = _defaultProps$props.className, activeDate = _defaultProps$props.activeDate, activeTime = _defaultProps$props.activeTime, onSelect2 = _defaultProps$props.onSelect;
  var classPrefix = "nut-timedetail";
  var timeList = useMemo(function() {
    return (options === null || options === void 0 ? void 0 : options.find(function(item) {
      return item[optionKey.valueKey] === activeDate;
    })) || _defineProperty({}, optionKey.childrenKey, []);
  }, [options, optionKey, activeDate]);
  var isActive = useCallback(function(timeKey) {
    var date = activeTime.find(function(item) {
      return item[optionKey.valueKey] === activeDate;
    });
    if (date !== null && date !== void 0 && date[optionKey.childrenKey]) {
      var time = date === null || date === void 0 ? void 0 : date[optionKey.childrenKey].find(function(time2) {
        return time2[optionKey.valueKey] === timeKey;
      });
      return time;
    }
    return false;
  }, [activeTime, optionKey, activeDate]);
  return React__default.createElement("div", {
    className: classNames(classPrefix, className)
  }, timeList[optionKey.childrenKey].map(function(item) {
    return React__default.createElement("span", {
      className: classNames("".concat(classPrefix, "__item"), {
        active: isActive(item[optionKey.valueKey])
      }),
      key: item[optionKey.valueKey],
      onClick: function onClick() {
        return onSelect2(item);
      }
    }, item[optionKey.textKey]);
  }));
};
TimeDetail.defaultProps = defaultProps;
TimeDetail.displayName = "NutTimeDetail";
export {
  TimeDetail as default
};
