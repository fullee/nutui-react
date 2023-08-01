import _toConsumableArray from "@babel/runtime/helpers/toConsumableArray";
import _slicedToArray from "@babel/runtime/helpers/slicedToArray";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
var _excluded = ["startDate", "endDate", "type", "showChinese", "minuteStep", "visible", "title", "defaultValue", "formatter", "onClose", "onConfirm", "filter", "onChange", "threeDimensional", "className", "style"];
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
import Picker from "./Picker.js";
import { useConfig } from "./ConfigProvider.js";
import { u as usePropsValue } from "./use-props-value.js";
import { C as ComponentDefaults } from "./typings.js";
var currentYear = /* @__PURE__ */ (/* @__PURE__ */ new Date()).getFullYear();
var defaultProps = _objectSpread(_objectSpread({}, ComponentDefaults), {}, {
  visible: false,
  title: "",
  type: "date",
  showChinese: false,
  threeDimensional: true,
  minuteStep: 1,
  startDate: new Date(currentYear - 10, 0, 1),
  endDate: new Date(currentYear + 10, 11, 31)
});
var DatePicker = function DatePicker2(props) {
  var _defaultProps$props = _objectSpread(_objectSpread({}, defaultProps), props), startDate = _defaultProps$props.startDate, endDate = _defaultProps$props.endDate, type = _defaultProps$props.type, showChinese = _defaultProps$props.showChinese, minuteStep = _defaultProps$props.minuteStep, visible = _defaultProps$props.visible, title = _defaultProps$props.title, defaultValue = _defaultProps$props.defaultValue, formatter = _defaultProps$props.formatter, onClose = _defaultProps$props.onClose, _onConfirm = _defaultProps$props.onConfirm, filter = _defaultProps$props.filter, onChange = _defaultProps$props.onChange, threeDimensional = _defaultProps$props.threeDimensional, className = _defaultProps$props.className, style = _defaultProps$props.style, rest = _objectWithoutProperties(_defaultProps$props, _excluded);
  var _useConfig = useConfig(), locale = _useConfig.locale;
  var datepickerLang = locale.datepicker;
  var zhCNType = {
    day: datepickerLang.day,
    year: datepickerLang.year,
    month: datepickerLang.month,
    hour: datepickerLang.hour,
    minute: datepickerLang.min,
    seconds: datepickerLang.seconds
  };
  var _useState = useState([]), _useState2 = _slicedToArray(_useState, 2), defaultValueOfPicker = _useState2[0], setDefaultValueOfPicker = _useState2[1];
  var _useState3 = useState([]), _useState4 = _slicedToArray(_useState3, 2), options = _useState4[0], setOptions = _useState4[1];
  var isDate = function isDate2(val) {
    return Object.prototype.toString.call(val) === "[object Date]" && !Number.isNaN(val.getTime());
  };
  var formatValue = function formatValue2(value) {
    var cvalue = value;
    if (!cvalue || cvalue && !isDate(cvalue)) {
      cvalue = startDate;
    }
    var timestmp = Math.max(cvalue.getTime(), startDate.getTime());
    timestmp = Math.min(timestmp, endDate.getTime());
    return timestmp;
  };
  var _usePropsValue = usePropsValue({
    value: props.value && formatValue(props.value),
    defaultValue: formatValue(props.defaultValue || null),
    finalValue: 0,
    onChange: function onChange2(val) {
    }
  }), _usePropsValue2 = _slicedToArray(_usePropsValue, 2), currentDate = _usePropsValue2[0], setCurrentDate = _usePropsValue2[1];
  function getMonthEndDay(year, month) {
    return new Date(year, month, 0).getDate();
  }
  var getBoundary = function getBoundary2(type2, value) {
    var _ref;
    var boundary = type2 === "min" ? startDate : endDate;
    var year = boundary.getFullYear();
    var month = 1;
    var date = 1;
    var hour = 0;
    var minute = 0;
    if (type2 === "max") {
      month = 12;
      date = getMonthEndDay(value.getFullYear(), value.getMonth() + 1);
      hour = 23;
      minute = 59;
    }
    var seconds = minute;
    if (value.getFullYear() === year) {
      month = boundary.getMonth() + 1;
      if (value.getMonth() + 1 === month) {
        date = boundary.getDate();
        if (value.getDate() === date) {
          hour = boundary.getHours();
          if (value.getHours() === hour) {
            minute = boundary.getMinutes();
          }
        }
      }
    }
    return _ref = {}, _defineProperty(_ref, "".concat(type2, "Year"), year), _defineProperty(_ref, "".concat(type2, "Month"), month), _defineProperty(_ref, "".concat(type2, "Date"), date), _defineProperty(_ref, "".concat(type2, "Hour"), hour), _defineProperty(_ref, "".concat(type2, "Minute"), minute), _defineProperty(_ref, "".concat(type2, "Seconds"), seconds), _ref;
  };
  var ranges = function ranges2() {
    var curDate = new Date(currentDate);
    if (!curDate)
      return [];
    var _getBoundary = getBoundary("max", curDate), maxYear = _getBoundary.maxYear, maxDate = _getBoundary.maxDate, maxMonth = _getBoundary.maxMonth, maxHour = _getBoundary.maxHour, maxMinute = _getBoundary.maxMinute, maxSeconds = _getBoundary.maxSeconds;
    var _getBoundary2 = getBoundary("min", curDate), minYear = _getBoundary2.minYear, minDate = _getBoundary2.minDate, minMonth = _getBoundary2.minMonth, minHour = _getBoundary2.minHour, minMinute = _getBoundary2.minMinute, minSeconds = _getBoundary2.minSeconds;
    var result = [{
      type: "year",
      range: [minYear, maxYear]
    }, {
      type: "month",
      range: [minMonth, maxMonth]
    }, {
      type: "day",
      range: [minDate, maxDate]
    }, {
      type: "hour",
      range: [minHour, maxHour]
    }, {
      type: "minute",
      range: [minMinute, maxMinute]
    }, {
      type: "seconds",
      range: [minSeconds, maxSeconds]
    }];
    switch (type.toLocaleLowerCase()) {
      case "date":
        result = result.slice(0, 3);
        break;
      case "datetime":
        result = result.slice(0, 5);
        break;
      case "time":
        result = result.slice(3, 6);
        break;
      case "year-month":
        result = result.slice(0, 2);
        break;
      case "hour-minutes":
        result = result.slice(3, 5);
        break;
      case "month-day":
        result = result.slice(1, 3);
        break;
      case "datehour":
        result = result.slice(0, 4);
        break;
    }
    return result;
  };
  var updateChooseValueCustmer = function updateChooseValueCustmer2(selectedOptions, selectedValue, index) {
    var rangeType = type.toLocaleLowerCase();
    if (["date", "datetime", "datehour", "month-day", "year-month"].includes(rangeType)) {
      var _Date, _date;
      var formatDate = [];
      selectedValue.forEach(function(item) {
        formatDate.push(item);
      });
      if (rangeType === "month-day" && formatDate.length < 3) {
        formatDate.unshift(new Date(defaultValue || startDate || endDate).getFullYear());
      }
      if (rangeType === "year-month" && formatDate.length < 3) {
        formatDate.push(new Date(defaultValue || startDate || endDate).getDate());
      }
      var year = Number(formatDate[0]);
      var month = Number(formatDate[1]) - 1;
      var day = Math.min(Number(formatDate[2]), getMonthEndDay(Number(formatDate[0]), Number(formatDate[1])));
      var date = null;
      if (rangeType === "date" || rangeType === "month-day" || rangeType === "year-month") {
        date = new Date(year, month, day);
      } else if (rangeType === "datetime") {
        date = new Date(year, month, day, Number(formatDate[3]), Number(formatDate[4]));
      } else if (rangeType === "datehour") {
        date = new Date(year, month, day, Number(formatDate[3]));
      }
      var isEqual = ((_Date = new Date(currentDate)) === null || _Date === void 0 ? void 0 : _Date.getTime()) === ((_date = date) === null || _date === void 0 ? void 0 : _date.getTime());
      date && isDate(date) && !isEqual && setCurrentDate(formatValue(date));
    }
    props.onChange && props.onChange(selectedOptions, selectedValue, index);
  };
  var padZero = function padZero2(num) {
    var targetLength = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 2;
    var str = "".concat(num);
    while (str.length < targetLength) {
      str = "0".concat(str);
    }
    return str;
  };
  var formatterOption = function formatterOption2(type2, value) {
    var fOption = null;
    if (formatter) {
      fOption = formatter(type2, {
        text: padZero(value, 2),
        value: padZero(value, 2)
      });
    } else {
      var padMin = padZero(value, 2);
      var fatter = showChinese ? zhCNType[type2] : "";
      fOption = {
        text: padMin + fatter,
        value: padMin
      };
    }
    return fOption;
  };
  var generateValue = function generateValue2(min, max, val, type2, columnIndex) {
    var _arr$index;
    var cmin = min;
    var arr = [];
    var index = 0;
    while (cmin <= max) {
      arr.push(formatterOption(type2, cmin));
      if (type2 === "minute") {
        cmin += minuteStep;
      } else {
        cmin++;
      }
      if (cmin <= val) {
        index++;
      }
    }
    defaultValueOfPicker[columnIndex] = (_arr$index = arr[index]) === null || _arr$index === void 0 ? void 0 : _arr$index.value;
    setDefaultValueOfPicker(_toConsumableArray(defaultValueOfPicker));
    if (props.filter && props.filter(type2, arr)) {
      return props.filter(type2, arr);
    }
    return arr;
  };
  var getDateIndex = function getDateIndex2(type2) {
    var date = new Date(currentDate);
    if (!currentDate)
      return 0;
    if (type2 === "year") {
      return date.getFullYear();
    }
    if (type2 === "month") {
      return date.getMonth() + 1;
    }
    if (type2 === "day") {
      return date.getDate();
    }
    if (type2 === "hour") {
      return date.getHours();
    }
    if (type2 === "minute") {
      return date.getMinutes();
    }
    if (type2 === "seconds") {
      return date.getSeconds();
    }
    return 0;
  };
  var columns = function columns2() {
    var val = ranges().map(function(res, columnIndex) {
      return generateValue(res.range[0], res.range[1], getDateIndex(res.type), res.type, columnIndex);
    });
    return val || [];
  };
  useEffect(function() {
    if (currentDate) {
      setOptions(columns());
    }
  }, [currentDate]);
  return React__default.createElement("div", _objectSpread({
    className: "nut-datepicker ".concat(className),
    style
  }, rest), options.length && React__default.createElement(Picker, {
    title,
    visible,
    options,
    onClose,
    defaultValue: defaultValueOfPicker,
    onConfirm: function onConfirm(options2, value) {
      return _onConfirm && _onConfirm(options2, value);
    },
    onChange: function onChange2(options2, value, index) {
      return updateChooseValueCustmer(options2, value, index);
    },
    threeDimensional
  }));
};
DatePicker.defaultProps = defaultProps;
DatePicker.displayName = "NutDatePicker";
export {
  DatePicker as default
};
