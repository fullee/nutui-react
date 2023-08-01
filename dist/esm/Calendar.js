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
import React__default, { useRef } from "react";
import Popup from "./Popup.js";
import CalendarItem from "./CalendarItem.js";
import { U as Utils } from "./date.js";
import { useConfig } from "./ConfigProvider.js";
import { C as ComponentDefaults } from "./typings.js";
var defaultProps = _objectSpread(_objectSpread({}, ComponentDefaults), {}, {
  type: "single",
  autoBackfill: false,
  popup: true,
  visible: false,
  title: "",
  defaultValue: "",
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
  onClose: function onClose() {
  },
  onConfirm: function onConfirm(param) {
  },
  onDayClick: function onDayClick(data) {
  },
  onPageChange: function onPageChange(param) {
  }
});
var Calendar = React__default.forwardRef(function(props, ref) {
  var _useConfig = useConfig(), locale = _useConfig.locale;
  var _defaultProps$props = _objectSpread(_objectSpread({}, defaultProps), props), style = _defaultProps$props.style, className = _defaultProps$props.className, popup = _defaultProps$props.popup, visible = _defaultProps$props.visible, type = _defaultProps$props.type, autoBackfill = _defaultProps$props.autoBackfill, title = _defaultProps$props.title, defaultValue = _defaultProps$props.defaultValue, startDate = _defaultProps$props.startDate, endDate = _defaultProps$props.endDate, showToday = _defaultProps$props.showToday, startText = _defaultProps$props.startText, endText = _defaultProps$props.endText, confirmText = _defaultProps$props.confirmText, showTitle = _defaultProps$props.showTitle, showSubTitle = _defaultProps$props.showSubTitle, scrollAnimation = _defaultProps$props.scrollAnimation, firstDayOfWeek = _defaultProps$props.firstDayOfWeek, disableDate2 = _defaultProps$props.disableDate, renderHeaderButtons = _defaultProps$props.renderHeaderButtons, renderDay = _defaultProps$props.renderDay, renderDayTop = _defaultProps$props.renderDayTop, renderDayBottom = _defaultProps$props.renderDayBottom, onClose2 = _defaultProps$props.onClose, onConfirm2 = _defaultProps$props.onConfirm, onDayClick2 = _defaultProps$props.onDayClick, onPageChange2 = _defaultProps$props.onPageChange;
  var calendarRef = useRef(null);
  var close = function close2() {
    onClose2 && onClose2();
  };
  var choose = function choose2(param) {
    close();
    onConfirm2 && onConfirm2(param);
  };
  var closePopup = function closePopup2() {
    close();
  };
  var select = function select2(param) {
    onDayClick2 && onDayClick2(param);
  };
  var scrollToDate = function scrollToDate2(date) {
    var _calendarRef$current;
    (_calendarRef$current = calendarRef.current) === null || _calendarRef$current === void 0 ? void 0 : _calendarRef$current.scrollToDate(date);
  };
  var yearMonthChange = function yearMonthChange2(param) {
    onPageChange2 && onPageChange2(param);
  };
  React__default.useImperativeHandle(ref, function() {
    return {
      scrollToDate
    };
  });
  var renderItem = function renderItem2() {
    return React__default.createElement(CalendarItem, {
      ref: calendarRef,
      style,
      className,
      type,
      autoBackfill,
      popup,
      title: title || locale.calendaritem.title,
      defaultValue,
      startDate,
      endDate,
      showToday,
      startText: startText || locale.calendaritem.start,
      endText: endText || locale.calendaritem.end,
      confirmText: confirmText || locale.calendaritem.confirm,
      showTitle,
      showSubTitle,
      scrollAnimation,
      firstDayOfWeek,
      disableDate: disableDate2,
      renderHeaderButtons,
      renderDay,
      renderDayTop,
      renderDayBottom,
      onConfirm: choose,
      onDayClick: select,
      onPageChange: yearMonthChange
    });
  };
  return React__default.createElement(React__default.Fragment, null, popup ? React__default.createElement(Popup, {
    visible,
    position: "bottom",
    round: true,
    closeable: true,
    destroyOnClose: true,
    onOverlayClick: closePopup,
    onCloseIconClick: closePopup,
    style: {
      height: "85vh"
    }
  }, renderItem()) : renderItem());
});
Calendar.defaultProps = defaultProps;
Calendar.displayName = "NutCalendar";
export {
  Calendar as default
};
