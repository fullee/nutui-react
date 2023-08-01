import _slicedToArray from "@babel/runtime/helpers/slicedToArray";
import _toConsumableArray from "@babel/runtime/helpers/toConsumableArray";
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
import classNames from "classnames";
import { C as ComponentDefaults } from "./typings.js";
import { U as Utils, g as getPreMonthDates, a as getDaysStatus, b as getCurrMonthData } from "./date.js";
import { r as requestAniFrame } from "./raf.js";
import { u as useConfig } from "./configprovider2.js";
import { u as usePropsValue } from "./use-props-value.js";
var splitDate = function splitDate2(date) {
  var split = date.indexOf("-") !== -1 ? "-" : "/";
  return date.split(split);
};
var isMultiple = function isMultiple2(day, days) {
  if (days.length > 0) {
    return days.some(function(item) {
      return Utils.isEqual(item, day);
    });
  }
  return false;
};
var isCurrDay = function isCurrDay2(month, day) {
  var date = "".concat(month.curData[0], "/").concat(month.curData[1], "/").concat(day);
  return Utils.isEqual(date, Utils.date2Str(/* @__PURE__ */ new Date(), "/"));
};
var getCurrDate = function getCurrDate2(day, month) {
  return "".concat(month.curData[0], "/").concat(month.curData[1], "/").concat(Utils.getNumTwoBit(+day.day));
};
var isStart = function isStart2(day, days) {
  return Utils.isEqual(days[0], day);
};
var isEnd = function isEnd2(day, days) {
  return Utils.isEqual(days[1], day);
};
var isStartAndEnd = function isStartAndEnd2(days) {
  return days.length >= 2 && Utils.isEqual(days[0], days[1]);
};
var defaultProps = _objectSpread(_objectSpread({}, ComponentDefaults), {}, {
  type: "single",
  autoBackfill: false,
  popup: true,
  title: "",
  startDate: Utils.getDay(0),
  endDate: Utils.getDay(365),
  showToday: true,
  startText: "",
  endText: "",
  confirmText: "",
  showTitle: true,
  showSubTitle: true,
  scrollAnimation: true,
  firstDayOfWeek: 0,
  disableDate: function disableDate(date) {
    return false;
  },
  renderHeaderButtons: void 0,
  renderDay: void 0,
  renderDayTop: void 0,
  renderDayBottom: void 0,
  onConfirm: function onConfirm(data) {
  },
  onUpdate: function onUpdate() {
  },
  onDayClick: function onDayClick(data) {
  },
  onPageChange: function onPageChange(data) {
  }
});
var CalendarItem = React__default.forwardRef(function(props, ref) {
  var _classNames, _classNames2;
  var _useConfig = useConfig(), locale = _useConfig.locale;
  var _defaultProps$props = _objectSpread(_objectSpread({}, defaultProps), props), style = _defaultProps$props.style, className = _defaultProps$props.className, popup = _defaultProps$props.popup, type = _defaultProps$props.type, autoBackfill = _defaultProps$props.autoBackfill, title = _defaultProps$props.title, defaultValue = _defaultProps$props.defaultValue, startDate = _defaultProps$props.startDate, endDate = _defaultProps$props.endDate, showToday = _defaultProps$props.showToday, startText = _defaultProps$props.startText, endText = _defaultProps$props.endText, confirmText = _defaultProps$props.confirmText, showTitle = _defaultProps$props.showTitle, showSubTitle = _defaultProps$props.showSubTitle, scrollAnimation = _defaultProps$props.scrollAnimation, firstDayOfWeek = _defaultProps$props.firstDayOfWeek, disableDate2 = _defaultProps$props.disableDate, renderHeaderButtons = _defaultProps$props.renderHeaderButtons, renderDay = _defaultProps$props.renderDay, renderDayTop = _defaultProps$props.renderDayTop, renderDayBottom = _defaultProps$props.renderDayBottom, onConfirm2 = _defaultProps$props.onConfirm, onUpdate2 = _defaultProps$props.onUpdate, onDayClick2 = _defaultProps$props.onDayClick, onPageChange2 = _defaultProps$props.onPageChange;
  var weekdays = locale.calendaritem.weekdays;
  var weeks = [].concat(_toConsumableArray(weekdays.slice(firstDayOfWeek, 7)), _toConsumableArray(weekdays.slice(0, firstDayOfWeek)));
  var monthTitle = locale.calendaritem.monthTitle;
  var _useState = useState(""), _useState2 = _slicedToArray(_useState, 2), yearMonthTitle = _useState2[0], setYearMonthTitle = _useState2[1];
  var _useState3 = useState([]), _useState4 = _slicedToArray(_useState3, 2), monthsData = _useState4[0], setMonthsData = _useState4[1];
  var _useState5 = useState(0), _useState6 = _slicedToArray(_useState5, 2), monthsNum = _useState6[0], setMonthsNum = _useState6[1];
  var _useState7 = useState(0), _useState8 = _slicedToArray(_useState7, 2), translateY = _useState8[0], setTranslateY = _useState8[1];
  var _useState9 = useState([]), _useState10 = _slicedToArray(_useState9, 2), monthDefaultRange = _useState10[0], setMonthDefaultRange = _useState10[1];
  var propStartDate = startDate || Utils.getDay(0);
  var propEndDate = endDate || Utils.getDay(365);
  var startDates = splitDate(propStartDate);
  var endDates = splitDate(propEndDate);
  var _useState11 = useState({
    currDateArray: []
  }), _useState12 = _slicedToArray(_useState11, 1), state = _useState12[0];
  var resetDefaultValue = function resetDefaultValue2() {
    if (defaultValue || Array.isArray(defaultValue) && defaultValue.length > 0) {
      return type !== "single" ? _toConsumableArray(defaultValue) : defaultValue;
    }
    return void 0;
  };
  var _usePropsValue = usePropsValue({
    value: props.value,
    defaultValue: resetDefaultValue(),
    finalValue: [],
    onChange: function onChange(val) {
    }
  }), _usePropsValue2 = _slicedToArray(_usePropsValue, 2), currentDate = _usePropsValue2[0], setCurrentDate = _usePropsValue2[1];
  var weeksPanel = useRef(null);
  var monthsRef = useRef(null);
  var monthsPanel = useRef(null);
  var viewAreaRef = useRef(null);
  var _useState13 = useState(0), _useState14 = _slicedToArray(_useState13, 2), avgHeight = _useState14[0], setAvgHeight = _useState14[1];
  var viewHeight = 0;
  var classPrefix = "nut-calendar";
  var dayPrefix = "nut-calendar-day";
  var getMonthData = function getMonthData2(curData, monthNum, type2) {
    var i = 0;
    var date = curData;
    var monthData = monthsData;
    do {
      var y = parseInt(date[0], 10);
      var m = parseInt(date[1], 10);
      var days = [].concat(_toConsumableArray(getPreMonthDates("prev", y, m, firstDayOfWeek)), _toConsumableArray(getDaysStatus("active", y, m)));
      var cssHeight = 39 + (days.length > 35 ? 384 : 320);
      var scrollTop = 0;
      if (monthData.length > 0) {
        var monthEle = monthData[monthData.length - 1];
        scrollTop = monthEle.scrollTop + monthEle.cssHeight;
      }
      var monthInfo = {
        curData: date,
        title: monthTitle(y, m),
        monthData: days,
        cssHeight,
        scrollTop
      };
      if (type2 === "next") {
        if (!endDates || !Utils.compareDate("".concat(endDates[0], "/").concat(endDates[1], "/").concat(Utils.getMonthDays(endDates[0], endDates[1])), "".concat(curData[0], "/").concat(curData[1], "/").concat(curData[2]))) {
          monthData.push(monthInfo);
        }
      } else if (!startDates || !Utils.compareDate("".concat(curData[0], "/").concat(curData[1], "/").concat(curData[2]), "".concat(startDates[0], "/").concat(startDates[1], "/01"))) {
        monthData.unshift(monthInfo);
      }
      date = getCurrMonthData("next", y, m);
    } while (i++ < monthNum);
    setMonthsData(monthData);
  };
  var setReachedYearMonthInfo = function setReachedYearMonthInfo2(current) {
    var currentMonthsData = monthsData[current];
    var _currentMonthsData$cu = _slicedToArray(currentMonthsData.curData, 2), year = _currentMonthsData$cu[0], month = _currentMonthsData$cu[1];
    if (currentMonthsData.title === yearMonthTitle)
      return;
    onPageChange2 && onPageChange2([year, month, "".concat(year, "-").concat(month)]);
    setYearMonthTitle(currentMonthsData.title);
  };
  var setDefaultRange = function setDefaultRange2(monthNum, current) {
    var start = 0;
    var end = 0;
    if (monthNum >= 3) {
      if (current > 0 && current < monthNum) {
        start = current - 1;
        end = current + 3;
      } else if (current === 0) {
        start = current;
        end = current + 4;
      } else if (current === monthNum) {
        start = current - 2;
        end = current + 2;
      }
    } else {
      start = 0;
      end = monthNum + 2;
    }
    setMonthDefaultRange([start, end]);
    setTranslateY(monthsData[start].scrollTop);
    setReachedYearMonthInfo(current);
  };
  var getMonthNum = function getMonthNum2() {
    var monthNum = Number(endDates[1]) - Number(startDates[1]);
    var yearNum = Number(endDates[0]) - Number(startDates[0]);
    if (yearNum > 0) {
      monthNum += 12 * yearNum;
    }
    if (monthNum <= 0) {
      monthNum = 1;
    }
    setMonthsNum(monthNum);
    return monthNum;
  };
  var setDefaultDate = function setDefaultDate2() {
    var defaultData = [];
    if (type === "range" && Array.isArray(currentDate)) {
      if (currentDate.length > 0) {
        if (propStartDate && Utils.compareDate(currentDate[0], propStartDate)) {
          currentDate.splice(0, 1, propStartDate);
        }
        if (propEndDate && Utils.compareDate(propEndDate, currentDate[1])) {
          currentDate.splice(1, 1, propEndDate);
        }
        defaultData = [].concat(_toConsumableArray(splitDate(currentDate[0])), _toConsumableArray(splitDate(currentDate[1])));
      }
    } else if (type === "multiple" && Array.isArray(currentDate)) {
      if (currentDate.length > 0) {
        var defaultArr = [];
        var obj = {};
        currentDate.forEach(function(item) {
          if (propStartDate && !Utils.compareDate(item, propStartDate) && propEndDate && !Utils.compareDate(propEndDate, item)) {
            if (!Object.hasOwnProperty.call(obj, item)) {
              defaultArr.push(item);
              obj[item] = item;
            }
          }
        });
        currentDate.splice(0) && currentDate.push.apply(currentDate, defaultArr);
        defaultData = _toConsumableArray(splitDate(defaultArr[0]));
      }
    } else if (type === "week" && Array.isArray(currentDate)) {
      if (currentDate.length > 0) {
        var _splitDate = splitDate(currentDate[0]), _splitDate2 = _slicedToArray(_splitDate, 3), y = _splitDate2[0], m = _splitDate2[1], d = _splitDate2[2];
        var weekArr = Utils.getWeekDate(y, m, d, firstDayOfWeek);
        currentDate.splice(0) && currentDate.push.apply(currentDate, _toConsumableArray(weekArr));
        if (propStartDate && Utils.compareDate(currentDate[0], propStartDate)) {
          currentDate.splice(0, 1, propStartDate);
        }
        if (propEndDate && Utils.compareDate(propEndDate, currentDate[1])) {
          currentDate.splice(1, 1, propEndDate);
        }
        defaultData = [].concat(_toConsumableArray(splitDate(currentDate[0])), _toConsumableArray(splitDate(currentDate[1])));
      }
    } else if (currentDate) {
      if (currentDate.length > 0) {
        if (propStartDate && Utils.compareDate(currentDate, propStartDate)) {
          defaultData = _toConsumableArray(splitDate(propStartDate));
        } else if (propEndDate && !Utils.compareDate(currentDate, propEndDate)) {
          defaultData = _toConsumableArray(splitDate(propEndDate));
        } else {
          defaultData = _toConsumableArray(splitDate(currentDate));
        }
      } else {
        defaultData = [];
      }
    }
    return defaultData;
  };
  var getCurrentIndex = function getCurrentIndex2(defaultData) {
    var current = 0;
    var lastCurrent = 0;
    if (defaultData.length > 0) {
      monthsData.forEach(function(item, index2) {
        if (item.title === monthTitle(defaultData[0], defaultData[1])) {
          current = index2;
        }
        if (type === "range" || type === "week") {
          if (item.title === monthTitle(defaultData[3], defaultData[4])) {
            lastCurrent = index2;
          }
        }
      });
    } else {
      var date = /* @__PURE__ */ new Date();
      var year = date.getFullYear();
      var month = date.getMonth() + 1;
      var index = monthsData.findIndex(function(item) {
        return +item.curData[0] === year && +item.curData[1] === month;
      });
      if (index > -1) {
        current = index;
      }
    }
    return {
      current,
      lastCurrent
    };
  };
  var renderCurrentDate = function renderCurrentDate2() {
    var defaultData = setDefaultDate();
    var current = getCurrentIndex(defaultData);
    if (defaultData.length > 0) {
      if (type === "range") {
        chooseDay({
          day: defaultData[2],
          type: "active"
        }, monthsData[current.current], true);
        chooseDay({
          day: defaultData[5],
          type: "active"
        }, monthsData[current.lastCurrent], true);
      } else if (props.type === "week") {
        chooseDay({
          day: defaultData[2],
          type: "curr"
        }, monthsData[current.current], true);
      } else if (type === "multiple") {
        _toConsumableArray(currentDate).forEach(function(item) {
          var dateArr = splitDate(item);
          var currentIndex = current.current;
          monthsData.forEach(function(item2, index) {
            if (item2.title === monthTitle(dateArr[0], dateArr[1])) {
              currentIndex = index;
            }
          });
          chooseDay({
            day: dateArr[2],
            type: "active"
          }, monthsData[currentIndex], true);
        });
      } else {
        chooseDay({
          day: defaultData[2],
          type: "active"
        }, monthsData[current.current], true);
      }
    }
    return current.current;
  };
  var requestAniFrameFunc = function requestAniFrameFunc2(current, monthNum) {
    var lastItem = monthsData[monthsData.length - 1];
    var containerHeight = lastItem.cssHeight + lastItem.scrollTop;
    requestAniFrame(function() {
      if (monthsRef && monthsPanel && viewAreaRef) {
        viewHeight = monthsRef.current.clientHeight;
        monthsPanel.current.style.height = "".concat(containerHeight, "px");
        monthsRef.current.scrollTop = monthsData[current].scrollTop;
      }
    });
    setAvgHeight(Math.floor(containerHeight / (monthNum + 1)));
  };
  var initData = function initData2() {
    var monthNum = getMonthNum();
    getMonthData(startDates, monthNum, "next");
    var current = renderCurrentDate();
    setDefaultRange(monthNum, current);
    requestAniFrameFunc(current, monthNum);
  };
  useEffect(function() {
    initData();
  }, []);
  var resetRender = function resetRender2() {
    state.currDateArray.splice(0);
    monthsData.splice(0);
    initData();
  };
  useEffect(function() {
    setCurrentDate(resetDefaultValue() || []);
    popup && resetRender();
  }, [defaultValue]);
  var scrollToDate = function scrollToDate2(date) {
    if (Utils.compareDate(date, propStartDate)) {
      date = propStartDate;
    } else if (!Utils.compareDate(date, propEndDate)) {
      date = propEndDate;
    }
    var dateArr = splitDate(date);
    monthsData.forEach(function(item, index) {
      if (item.title === monthTitle(dateArr[0], dateArr[1])) {
        var currTop = monthsData[index].scrollTop;
        if (monthsRef.current) {
          var distance = currTop - monthsRef.current.scrollTop;
          if (scrollAnimation) {
            var flag = 0;
            var interval = setInterval(function() {
              flag++;
              if (monthsRef.current) {
                var offset = distance / 10;
                monthsRef.current.scrollTop += offset;
              }
              if (flag >= 10) {
                clearInterval(interval);
                if (monthsRef.current) {
                  monthsRef.current.scrollTop = currTop;
                }
              }
            }, 40);
          } else {
            monthsRef.current.scrollTop = currTop;
          }
        }
      }
    });
  };
  var monthsViewScroll = function monthsViewScroll2(e) {
    if (monthsData.length <= 1) {
      return;
    }
    var scrollTop = e.target.scrollTop;
    var current = Math.floor(scrollTop / avgHeight);
    var nextTop = monthsData[current + 1].scrollTop;
    var nextHeight = monthsData[current + 1].cssHeight;
    if (current === 0) {
      if (scrollTop >= nextTop) {
        current += 1;
      }
    } else if (current > 0 && current < monthsNum - 1) {
      if (scrollTop >= nextTop) {
        current += 1;
      }
      if (scrollTop < monthsData[current].scrollTop) {
        current -= 1;
      }
    } else {
      var viewPosition = Math.round(scrollTop + viewHeight);
      if (current + 1 <= monthsNum && viewPosition >= nextTop + nextHeight) {
        current += 1;
      }
      if (current >= 1 && scrollTop < monthsData[current - 1].scrollTop) {
        current -= 1;
      }
    }
    setDefaultRange(monthsNum, current);
  };
  React__default.useImperativeHandle(ref, function() {
    return {
      scrollToDate
    };
  });
  var getClasses = function getClasses2(day, month) {
    var dateStr = getCurrDate(day, month);
    if (day.type === "active") {
      if (propStartDate && Utils.compareDate(dateStr, propStartDate) || propEndDate && Utils.compareDate(propEndDate, dateStr)) {
        return "".concat(dayPrefix, "-disabled");
      }
      if (type === "range" || type === "week") {
        if (isStart(dateStr, currentDate) || isEnd(dateStr, currentDate)) {
          return "".concat(dayPrefix, "-active ").concat(isStart(dateStr, currentDate) ? "active-start" : "", " ").concat(isEnd(dateStr, currentDate) ? "active-end" : "");
        }
        if (Array.isArray(currentDate) && Object.values(currentDate).length === 2 && Utils.compareDate(currentDate[0], dateStr) && Utils.compareDate(dateStr, currentDate[1])) {
          if (disableDate2(day)) {
            return "".concat(dayPrefix, "-choose-disabled");
          }
          return "".concat(dayPrefix, "-choose");
        }
      } else if (type === "multiple" && isMultiple(dateStr, currentDate) || !Array.isArray(currentDate) && Utils.isEqual(currentDate, dateStr)) {
        return "".concat(dayPrefix, "-active");
      }
      if (disableDate2(day)) {
        return "".concat(dayPrefix, "-disabled");
      }
      return null;
    }
    return "".concat(dayPrefix, "-disabled");
  };
  var chooseDay = function chooseDay2(day, month, isFirst) {
    if (getClasses(day, month) === "".concat(dayPrefix, "-disabled")) {
      return;
    }
    var days = _toConsumableArray(month.curData);
    var _month$curData = _slicedToArray(month.curData, 2), y = _month$curData[0], m = _month$curData[1];
    days[2] = typeof day.day === "number" ? Utils.getNumTwoBit(day.day) : day.day;
    days[3] = "".concat(days[0], "/").concat(days[1], "/").concat(days[2]);
    days[4] = Utils.getWhatDay(+days[0], +days[1], +days[2]);
    if (type === "multiple") {
      if (currentDate.length > 0) {
        var hasIndex = "";
        currentDate.forEach(function(item, index) {
          if (item === days[3]) {
            hasIndex = index;
          }
        });
        if (isFirst) {
          state.currDateArray.push(_toConsumableArray(days));
        } else if (hasIndex !== "") {
          currentDate.splice(hasIndex, 1);
          state.currDateArray.splice(hasIndex, 1);
        } else {
          currentDate.push(days[3]);
          state.currDateArray.push(_toConsumableArray(days));
        }
      } else {
        currentDate.push(days[3]);
        state.currDateArray = [_toConsumableArray(days)];
      }
    } else if (type === "range") {
      var curDataLength = Object.values(currentDate).length;
      if (curDataLength === 2 || curDataLength === 0) {
        Array.isArray(currentDate) && currentDate.splice(0) && currentDate.push(days[3]);
        state.currDateArray = [_toConsumableArray(days)];
      } else if (Utils.compareDate(currentDate[0], days[3])) {
        Array.isArray(currentDate) && currentDate.push(days[3]);
        state.currDateArray = [].concat(_toConsumableArray(state.currDateArray), [_toConsumableArray(days)]);
      } else {
        Array.isArray(currentDate) && currentDate.unshift(days[3]);
        state.currDateArray = [_toConsumableArray(days)].concat(_toConsumableArray(state.currDateArray));
      }
    } else if (type === "week") {
      var weekArr = Utils.getWeekDate(y, m, "".concat(day.day), firstDayOfWeek);
      if (propStartDate && Utils.compareDate(weekArr[0], propStartDate)) {
        weekArr.splice(0, 1, propStartDate);
      }
      if (propEndDate && Utils.compareDate(propEndDate, weekArr[1])) {
        weekArr.splice(1, 1, propEndDate);
      }
      Array.isArray(currentDate) && currentDate.splice(0) && currentDate.push.apply(currentDate, _toConsumableArray(weekArr));
      state.currDateArray = [Utils.formatResultDate(weekArr[0]), Utils.formatResultDate(weekArr[1])];
    } else {
      setCurrentDate(days[3]);
      state.currDateArray = _toConsumableArray(days);
    }
    if (!isFirst) {
      onDayClick2 && onDayClick2(state.currDateArray);
      if (autoBackfill || !popup) {
        confirm();
      }
    }
    setMonthsData(monthsData.slice());
  };
  var confirm = function confirm2() {
    if (type === "range" && state.currDateArray.length === 2 || type !== "range") {
      var chooseData = state.currDateArray.slice(0);
      onConfirm2 && onConfirm2(chooseData);
      if (popup) {
        onUpdate2 && onUpdate2();
      }
    }
  };
  var classes = classNames((_classNames = {}, _defineProperty(_classNames, "".concat(classPrefix, "-title"), !popup), _defineProperty(_classNames, "".concat(classPrefix, "-nofooter"), !!autoBackfill), _classNames), className, classPrefix);
  var headerClasses = classNames((_classNames2 = {}, _defineProperty(_classNames2, "".concat(classPrefix, "-header"), true), _defineProperty(_classNames2, "".concat(classPrefix, "-header-title"), !popup), _classNames2));
  var isStartTip = function isStartTip2(day, month) {
    return (type === "range" || type === "week") && day.type === "active" && isStart(getCurrDate(day, month), currentDate);
  };
  var isEndTip = function isEndTip2(day, month) {
    return currentDate.length >= 2 && (type === "range" || type === "week") && day.type === "active" && isEnd(getCurrDate(day, month), currentDate);
  };
  var renderHeader = function renderHeader2() {
    return React__default.createElement("div", {
      className: headerClasses
    }, showTitle && React__default.createElement("div", {
      className: "".concat(classPrefix, "-title")
    }, title || locale.calendaritem.title), renderHeaderButtons && React__default.createElement("div", {
      className: "".concat(classPrefix, "-header-buttons")
    }, renderHeaderButtons()), showSubTitle && React__default.createElement("div", {
      className: "".concat(classPrefix, "-sub-title")
    }, yearMonthTitle), React__default.createElement("div", {
      className: "".concat(classPrefix, "-weeks"),
      ref: weeksPanel
    }, weeks.map(function(item) {
      return React__default.createElement("div", {
        className: "".concat(classPrefix, "-week-item"),
        key: item
      }, item);
    })));
  };
  var renderContent = function renderContent2() {
    return React__default.createElement("div", {
      className: "".concat(classPrefix, "-content"),
      onScroll: monthsViewScroll,
      ref: monthsRef
    }, React__default.createElement("div", {
      className: "".concat(classPrefix, "-pannel"),
      ref: monthsPanel
    }, React__default.createElement("div", {
      className: "viewArea",
      ref: viewAreaRef,
      style: {
        transform: "translateY(".concat(translateY, "px)")
      }
    }, monthsData.slice(monthDefaultRange[0], monthDefaultRange[1]).map(function(month, key) {
      return React__default.createElement("div", {
        className: "".concat(classPrefix, "-month"),
        key
      }, React__default.createElement("div", {
        className: "".concat(classPrefix, "-month-title")
      }, month.title), React__default.createElement("div", {
        className: "".concat(classPrefix, "-days")
      }, month.monthData.map(function(day, i) {
        return React__default.createElement("div", {
          className: ["".concat(classPrefix, "-day"), getClasses(day, month)].join(" "),
          onClick: function onClick() {
            chooseDay(day, month);
          },
          key: i
        }, React__default.createElement("div", {
          className: "".concat(classPrefix, "-day-day")
        }, renderDay ? renderDay(day) : day.day), !isStartTip(day, month) && renderDayTop && React__default.createElement("div", {
          className: "".concat(classPrefix, "-day-info-top")
        }, renderDayTop(day)), !isStartTip(day, month) && !isEndTip(day, month) && renderDayBottom && React__default.createElement("div", {
          className: "".concat(classPrefix, "-day-info-bottom")
        }, renderDayBottom(day)), !isStartTip(day, month) && !isEndTip(day, month) && !renderDayBottom && showToday && isCurrDay(month, day.day) && React__default.createElement("div", {
          className: "".concat(classPrefix, "-day-info-curr")
        }, locale.calendaritem.today), isStartTip(day, month) && React__default.createElement("div", {
          className: "".concat(classPrefix, "-day-info ").concat(isStartAndEnd(currentDate) ? "".concat(classPrefix, "-day-info-top") : "")
        }, startText || locale.calendaritem.start), isEndTip(day, month) && React__default.createElement("div", {
          className: "".concat(classPrefix, "-day-info")
        }, endText || locale.calendaritem.end));
      })));
    }))));
  };
  var renderFooter = function renderFooter2() {
    return React__default.createElement("div", {
      className: "nut-calendar-footer"
    }, React__default.createElement("div", {
      className: "calendar-confirm-btn",
      onClick: confirm
    }, confirmText || locale.confirm));
  };
  return React__default.createElement(React__default.Fragment, null, React__default.createElement("div", {
    className: classes,
    style
  }, renderHeader(), renderContent(), popup && !autoBackfill ? renderFooter() : ""));
});
CalendarItem.defaultProps = defaultProps;
CalendarItem.displayName = "NutCalendarItem";
export {
  CalendarItem as default
};
