import _toConsumableArray from "@babel/runtime/helpers/toConsumableArray";
import _slicedToArray from "@babel/runtime/helpers/slicedToArray";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
var _excluded = ["visible", "className", "style", "title", "defaultValue", "options", "optionKey", "multiple", "onSelect", "onDateChange", "onTimeChange"];
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
import React__default, { useState } from "react";
import classNames from "classnames";
import Popup from "./Popup.js";
import TimeDetail from "./TimeDetail.js";
import { C as ComponentDefaults } from "./typings.js";
import { useConfig } from "./ConfigProvider.js";
var defaultProps = _objectSpread(_objectSpread({}, ComponentDefaults), {}, {
  visible: false,
  multiple: false,
  defaultValue: [],
  options: [],
  optionKey: {
    valueKey: "value",
    textKey: "text",
    childrenKey: "children"
  }
});
var TimeSelect = function TimeSelect2(props) {
  var _useConfig = useConfig(), locale = _useConfig.locale;
  var _defaultProps$props = _objectSpread(_objectSpread({}, defaultProps), props), visible = _defaultProps$props.visible, className = _defaultProps$props.className, style = _defaultProps$props.style, title = _defaultProps$props.title, defaultValue = _defaultProps$props.defaultValue, options = _defaultProps$props.options, optionKey = _defaultProps$props.optionKey, multiple = _defaultProps$props.multiple, onSelect = _defaultProps$props.onSelect, onDateChange = _defaultProps$props.onDateChange, onTimeChange = _defaultProps$props.onTimeChange, rest = _objectWithoutProperties(_defaultProps$props, _excluded);
  var _useState = useState(function() {
    if (defaultValue !== null && defaultValue !== void 0 && defaultValue.length) {
      return defaultValue[0][optionKey.valueKey];
    }
    if (options !== null && options !== void 0 && options.length) {
      return options[0][optionKey.valueKey];
    }
    return "";
  }), _useState2 = _slicedToArray(_useState, 2), activeDate = _useState2[0], setActiveDate = _useState2[1];
  var _useState3 = useState(function() {
    return defaultValue || [];
  }), _useState4 = _slicedToArray(_useState3, 2), activeTime = _useState4[0], setActiveTime = _useState4[1];
  var classPrefix = "nut-timeselect";
  var closeFun = function closeFun2() {
    onSelect && onSelect(activeTime);
  };
  var handleSelectTime = function handleSelectTime2(selectTime) {
    var newActiveTime = _toConsumableArray(activeTime);
    var date = newActiveTime.find(function(item) {
      return item[optionKey.valueKey] === activeDate;
    });
    if (date) {
      var timeIndex = date[optionKey.childrenKey].findIndex(function(time) {
        return time[optionKey.valueKey] === selectTime[optionKey.valueKey];
      });
      if (timeIndex > -1) {
        if (multiple) {
          date[optionKey.childrenKey].splice(timeIndex, 1);
        } else {
          newActiveTime = [];
        }
      } else if (multiple) {
        date[optionKey.childrenKey].push(_objectSpread({}, selectTime));
      } else {
        var _ref;
        newActiveTime = [(_ref = {}, _defineProperty(_ref, optionKey.valueKey, activeDate), _defineProperty(_ref, optionKey.childrenKey, [_objectSpread({}, selectTime)]), _ref)];
      }
    } else if (multiple) {
      var _newActiveTime$push;
      newActiveTime.push((_newActiveTime$push = {}, _defineProperty(_newActiveTime$push, optionKey.valueKey, activeDate), _defineProperty(_newActiveTime$push, optionKey.childrenKey, [_objectSpread({}, selectTime)]), _newActiveTime$push));
    } else {
      var _ref2;
      newActiveTime = [(_ref2 = {}, _defineProperty(_ref2, optionKey.valueKey, activeDate), _defineProperty(_ref2, optionKey.childrenKey, [_objectSpread({}, selectTime)]), _ref2)];
    }
    newActiveTime = newActiveTime.filter(function(item) {
      var _item$optionKey$child;
      return ((_item$optionKey$child = item[optionKey.childrenKey]) === null || _item$optionKey$child === void 0 ? void 0 : _item$optionKey$child.length) > 0;
    });
    setActiveTime(newActiveTime);
    onTimeChange && onTimeChange(selectTime, newActiveTime);
  };
  var handleChange = function handleChange2(date) {
    setActiveDate(date[optionKey.valueKey]);
    onDateChange && onDateChange(date, activeTime);
  };
  return React__default.createElement(Popup, _objectSpread({
    closeable: true,
    round: true,
    visible,
    position: "bottom",
    style: _objectSpread({
      width: "100%",
      height: "20%"
    }, style),
    onClose: closeFun
  }, rest), React__default.createElement("div", {
    className: classNames(classPrefix, className)
  }, React__default.createElement("div", {
    className: "".concat(classPrefix, "__title")
  }, title || locale.timeselect.pickupTime), React__default.createElement("div", {
    className: "".concat(classPrefix, "__content")
  }, React__default.createElement("div", {
    className: "".concat(classPrefix, "__content-left")
  }, options.map(function(item) {
    return React__default.createElement("div", {
      key: item[optionKey.valueKey],
      className: classNames("nut-timepannel", {
        active: item[optionKey.valueKey] === activeDate
      }),
      onClick: function onClick() {
        return handleChange(item);
      }
    }, item[optionKey.textKey]);
  })), React__default.createElement(TimeDetail, {
    options,
    optionKey,
    activeDate,
    activeTime,
    onSelect: handleSelectTime
  }))));
};
TimeSelect.defaultProps = defaultProps;
TimeSelect.displayName = "NutTimeSelect";
export {
  TimeSelect as default
};
