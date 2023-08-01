import _toConsumableArray from "@babel/runtime/helpers/toConsumableArray";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _slicedToArray from "@babel/runtime/helpers/slicedToArray";
var _excluded = ["children", "visible", "title", "options", "defaultValue", "className", "style", "threeDimensional", "duration", "onConfirm", "onClose", "afterClose", "onChange"];
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
import React__default, { useState, useRef, useEffect, useImperativeHandle } from "react";
import classNames from "classnames";
import Popup from "./Popup.js";
import { u as useTouch } from "./use-touch.js";
import { useConfig } from "./ConfigProvider.js";
import { u as usePropsValue } from "./use-props-value.js";
import { C as ComponentDefaults } from "./typings.js";
var InternalPickerPanel = function InternalPickerPanel2(props, ref) {
  var _props$keyIndex = props.keyIndex, keyIndex = _props$keyIndex === void 0 ? 0 : _props$keyIndex, defaultValue = props.defaultValue, _props$options = props.options, options = _props$options === void 0 ? [] : _props$options, _props$threeDimension = props.threeDimensional, threeDimensional = _props$threeDimension === void 0 ? true : _props$threeDimension, _props$duration = props.duration, duration = _props$duration === void 0 ? 1e3 : _props$duration, chooseItem = props.chooseItem;
  var touch = useTouch();
  var DEFAULT_DURATION = 200;
  var INERTIA_TIME = 300;
  var INERTIA_DISTANCE = 15;
  var _useState = useState(1), _useState2 = _slicedToArray(_useState, 2), currIndex = _useState2[0], setCurrIndex = _useState2[1];
  var lineSpacing = 36;
  var _useState3 = useState(0), _useState4 = _slicedToArray(_useState3, 2), touchTime = _useState4[0], setTouchTime = _useState4[1];
  var _useState5 = useState("0deg"), _useState6 = _slicedToArray(_useState5, 2), touchDeg = _useState6[0], setTouchDeg = _useState6[1];
  var rotation = 20;
  var moving = useRef(false);
  var timer;
  var rollerRef = useRef(null);
  var PickerPanelRef = useRef(null);
  var _useState7 = useState(0), _useState8 = _slicedToArray(_useState7, 2), startTime = _useState8[0], setStartTime = _useState8[1];
  var _useState9 = useState(0), _useState10 = _slicedToArray(_useState9, 2), startY = _useState10[0], setStartY = _useState10[1];
  var transformY = useRef(0);
  var _useState11 = useState(0), _useState12 = _slicedToArray(_useState11, 2), scrollDistance = _useState12[0], setScrollDistance = _useState12[1];
  var isHidden = function isHidden2(index) {
    if (index >= currIndex + 8 || index <= currIndex - 8) {
      return true;
    }
    return false;
  };
  var setTransform = function setTransform2() {
    var translateY = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0;
    var type = arguments.length > 1 ? arguments[1] : void 0;
    var time = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : DEFAULT_DURATION;
    var deg = arguments.length > 3 ? arguments[3] : void 0;
    var nTime = time;
    if (type !== "end") {
      nTime = 0;
    }
    setTouchTime(nTime);
    setTouchDeg(deg);
    setScrollDistance(translateY);
  };
  var setMove = function setMove2(move, type, time) {
    var updateMove = move + transformY.current;
    if (type === "end") {
      if (updateMove > 0) {
        updateMove = 0;
      }
      if (updateMove < -(options.length - 1) * lineSpacing) {
        updateMove = -(options.length - 1) * lineSpacing;
      }
      var endMove = Math.round(updateMove / lineSpacing) * lineSpacing;
      var deg = "".concat((Math.abs(Math.round(endMove / lineSpacing)) + 1) * rotation, "deg");
      setTransform(endMove, type, time, deg);
      setCurrIndex(Math.abs(Math.round(endMove / lineSpacing)) + 1);
    } else {
      var _deg = 0;
      var currentDeg = (-updateMove / lineSpacing + 1) * rotation;
      var maxDeg = (options.length + 1) * rotation;
      var minDeg = 0;
      _deg = Math.min(Math.max(currentDeg, minDeg), maxDeg);
      if (minDeg < _deg && _deg < maxDeg) {
        setTransform(updateMove, "", void 0, "".concat(_deg, "deg"));
        setCurrIndex(Math.abs(Math.round(updateMove / lineSpacing)) + 1);
      }
    }
  };
  var setChooseValue = function setChooseValue2(move) {
    chooseItem && chooseItem(options === null || options === void 0 ? void 0 : options[Math.round(-move / lineSpacing)], keyIndex);
  };
  var touchStart = function touchStart2(event) {
    touch.start(event);
    setStartY(touch.deltaY);
    setStartTime(Date.now());
    transformY.current = scrollDistance;
  };
  var touchMove = function touchMove2(event) {
    touch.move(event);
    if (touch.isVertical) {
      moving.current = true;
      preventDefault(event, true);
    }
    var move = touch.deltaY - startY;
    setMove(move);
  };
  var touchEnd = function touchEnd2(event) {
    if (!moving.current)
      return;
    var move = touch.deltaY - startY;
    var moveTime = Date.now() - startTime;
    if (moveTime <= INERTIA_TIME && Math.abs(move) > INERTIA_DISTANCE) {
      var distance = momentum(move, moveTime);
      setMove(distance, "end", +duration);
    } else {
      setMove(move, "end");
    }
    setTimeout(function() {
      touch.reset();
    }, 0);
  };
  var momentum = function momentum2(distance, duration2) {
    var nDistance = distance;
    var speed = Math.abs(nDistance / duration2);
    nDistance = speed / 3e-3 * (nDistance < 0 ? -1 : 1);
    return nDistance;
  };
  var modifyStatus = function modifyStatus2(type, val) {
    var value = val || defaultValue;
    var index = -1;
    if (value) {
      options.some(function(item, idx) {
        if (item.value === value) {
          index = idx;
          return true;
        }
        return false;
      });
    } else {
      options.forEach(function(item, i) {
        if (item.value === defaultValue) {
          index = i;
        }
      });
    }
    setCurrIndex(index === -1 ? 1 : index + 1);
    var move = index === -1 ? 0 : index * lineSpacing;
    type && setChooseValue(-move);
    setMove(-move);
  };
  var stopMomentum = function stopMomentum2() {
    moving.current = false;
    setTouchTime(0);
    setChooseValue(scrollDistance);
  };
  var preventDefault = function preventDefault2(event, isStopPropagation) {
    if (typeof event.cancelable !== "boolean" || event.cancelable) {
      event.preventDefault();
    }
    if (isStopPropagation) {
      event.stopPropagation();
    }
  };
  var touchRollerStyle = function touchRollerStyle2() {
    return {
      transition: "transform ".concat(touchTime, "ms cubic-bezier(0.17, 0.89, 0.45, 1)"),
      transform: "rotate3d(1, 0, 0, ".concat(touchDeg, ")")
    };
  };
  var touchTileStyle = function touchTileStyle2() {
    return {
      transition: "transform ".concat(touchTime, "ms cubic-bezier(0.17, 0.89, 0.45, 1)"),
      transform: "translate3d(0, ".concat(scrollDistance, "px, 0)")
    };
  };
  useEffect(function() {
    setScrollDistance(0);
    transformY.current = 0;
    modifyStatus(false);
    return function() {
      clearTimeout(timer);
    };
  }, [options]);
  useImperativeHandle(ref, function() {
    return {
      stopMomentum,
      moving: moving.current
    };
  });
  return React__default.createElement("div", {
    className: "nut-picker-list",
    ref: PickerPanelRef,
    onTouchStart: touchStart,
    onTouchMove: touchMove,
    onTouchEnd: touchEnd
  }, React__default.createElement("div", {
    className: "nut-picker-roller",
    ref: rollerRef,
    style: threeDimensional ? touchRollerStyle() : touchTileStyle(),
    onTransitionEnd: stopMomentum
  }, threeDimensional && options.map(function(item, index) {
    return React__default.createElement("div", {
      className: "nut-picker-roller-item ".concat(isHidden(index + 1) && "nut-picker-roller-item-hidden"),
      style: {
        transform: "rotate3d(1, 0, 0, ".concat(-rotation * (index + 1), "deg) translate3d(0px, 0px, 104px)")
      },
      key: item.value ? item.value : index
    }, React__default.createElement(React__default.Fragment, null, item.text ? item.text : item));
  }), !threeDimensional && options.map(function(item, index) {
    return React__default.createElement("div", {
      className: "nut-picker-roller-item-title",
      key: item.value ? item.value : index
    }, React__default.createElement(React__default.Fragment, null, item.text ? item.text : item));
  })), React__default.createElement("div", {
    className: "nut-picker-mask"
  }), React__default.createElement("div", {
    className: "nut-picker-indicator"
  }));
};
var PickerPanel = React__default.forwardRef(InternalPickerPanel);
function useRefs() {
  var refs = React__default.useRef([]);
  var setRefs = React__default.useCallback(function(index) {
    return function(el) {
      if (el)
        refs.current[index] = el;
    };
  }, []);
  var reset = React__default.useCallback(function() {
    refs.current = [];
  }, []);
  return [refs.current, setRefs, reset];
}
var defaultProps = _objectSpread(_objectSpread({}, ComponentDefaults), {}, {
  title: "",
  options: [],
  value: [],
  defaultValue: [],
  threeDimensional: true,
  duration: 1e3
});
var InternalPicker = function InternalPicker2(props, ref) {
  var _useConfig = useConfig(), locale = _useConfig.locale;
  var _defaultProps$props = _objectSpread(_objectSpread({}, defaultProps), props), children = _defaultProps$props.children, visible = _defaultProps$props.visible, title = _defaultProps$props.title, _defaultProps$props$o = _defaultProps$props.options, options = _defaultProps$props$o === void 0 ? [] : _defaultProps$props$o, _defaultProps$props$d = _defaultProps$props.defaultValue, defaultValue = _defaultProps$props$d === void 0 ? [] : _defaultProps$props$d, className = _defaultProps$props.className, style = _defaultProps$props.style, threeDimensional = _defaultProps$props.threeDimensional, duration = _defaultProps$props.duration, onConfirm = _defaultProps$props.onConfirm, onClose = _defaultProps$props.onClose, afterClose = _defaultProps$props.afterClose, onChange = _defaultProps$props.onChange, rest = _objectWithoutProperties(_defaultProps$props, _excluded);
  var classPrefix = "nut-picker";
  var classes = classNames(classPrefix, className);
  var _usePropsValue = usePropsValue({
    value: props.value,
    defaultValue: _toConsumableArray(defaultValue),
    finalValue: _toConsumableArray(defaultValue),
    onChange: function onChange2(val) {
      var _props$onConfirm;
      (_props$onConfirm = props.onConfirm) === null || _props$onConfirm === void 0 ? void 0 : _props$onConfirm.call(props, setSelectedOptions(), val);
    }
  }), _usePropsValue2 = _slicedToArray(_usePropsValue, 2), selectedValue = _usePropsValue2[0], setSelectedValue = _usePropsValue2[1];
  var _usePropsValue3 = usePropsValue({
    value: props.visible,
    defaultValue: false,
    finalValue: false
  }), _usePropsValue4 = _slicedToArray(_usePropsValue3, 2), innerVisible = _usePropsValue4[0], setInnerVisible = _usePropsValue4[1];
  var _useState13 = useState(selectedValue), _useState14 = _slicedToArray(_useState13, 2), innerValue = _useState14[0], setInnerValue = _useState14[1];
  var _useState15 = useState(0), _useState16 = _slicedToArray(_useState15, 2), columnIndex = _useState16[0], setColumnIndex = _useState16[1];
  var pickerRef = useRef(null);
  var _useRefs = useRefs(), _useRefs2 = _slicedToArray(_useRefs, 2), refs = _useRefs2[0], setRefs = _useRefs2[1];
  var _useState17 = useState([]), _useState18 = _slicedToArray(_useState17, 2), columnsList = _useState18[0], setColumnsList = _useState18[1];
  var isConfirmEvent = useRef(false);
  var actions = {
    open: function open() {
      setInnerVisible(true);
    },
    close: function close() {
      setInnerVisible(false);
    }
  };
  useImperativeHandle(ref, function() {
    return actions;
  });
  var formatCascade = function formatCascade2(columns, values) {
    var formatted = [];
    var columnOptions = {
      text: "",
      value: "",
      children: columns
    };
    var columnIndex2 = 0;
    var _loop = function _loop2() {
      var options2 = columnOptions.children;
      var value = values[columnIndex2];
      var index = options2.findIndex(function(columnItem) {
        return columnItem.value === value;
      });
      if (index === -1)
        index = 0;
      columnOptions = columnOptions.children[index];
      columnIndex2++;
      formatted.push(options2);
    };
    while (columnOptions && columnOptions.children) {
      _loop();
    }
    return formatted;
  };
  var columnsType = function columnsType2() {
    var firstColumn = options[0];
    if (firstColumn) {
      if (Array.isArray(firstColumn)) {
        return "multiple";
      }
      if ("children" in firstColumn) {
        return "cascade";
      }
    }
    return "single";
  };
  var normalListData = function normalListData2(innerValue2) {
    var type = columnsType();
    switch (type) {
      case "multiple":
        return options;
      case "cascade":
        return formatCascade(options, innerValue2);
      default:
        return [options];
    }
  };
  var init = function init2() {
    var normalData = normalListData(innerValue);
    setColumnsList(normalData);
    var data = [];
    normalData.length > 0 && normalData.map(function(item) {
      item[0] && data.push(item[0].value);
      return item;
    });
    if (!innerValue.length && innerValue.length === 0) {
      setInnerValue([].concat(data));
    }
  };
  useEffect(function() {
    setInnerValue(innerValue !== selectedValue ? selectedValue : innerValue);
  }, [innerVisible]);
  useEffect(function() {
    if (innerVisible) {
      init();
    }
  }, [options, innerVisible]);
  useEffect(function() {
    onChange && onChange(setSelectedOptions(), innerValue, columnIndex);
  }, [innerValue, columnsList]);
  var setSelectedOptions = function setSelectedOptions2() {
    var options2 = [];
    var currOptions = [];
    columnsList.forEach(function(columnOptions, index) {
      currOptions = columnOptions.filter(function(item) {
        return item.value === innerValue[index];
      });
      if (currOptions[0]) {
        options2.push(currOptions[0]);
      } else {
        columnOptions[0] && options2.push(columnOptions[0]);
      }
    });
    return options2;
  };
  var _chooseItem = function chooseItem(columnOptions, columnIndex2) {
    var values = [];
    var start = columnIndex2;
    if (columnOptions && Object.keys(columnOptions).length) {
      if (values[columnIndex2] !== columnOptions.value) {
        if (columnsType() === "cascade") {
          var _columnOptions2, _columnOptions2$child;
          values[columnIndex2] = columnOptions.value || "";
          while ((_columnOptions = columnOptions) !== null && _columnOptions !== void 0 && (_columnOptions$childr = _columnOptions.children) !== null && _columnOptions$childr !== void 0 && _columnOptions$childr[0]) {
            var _columnOptions, _columnOptions$childr;
            values[columnIndex2 + 1] = columnOptions.children[0].value;
            columnIndex2++;
            columnOptions = columnOptions.children[0];
          }
          if ((_columnOptions2 = columnOptions) !== null && _columnOptions2 !== void 0 && (_columnOptions2$child = _columnOptions2.children) !== null && _columnOptions2$child !== void 0 && _columnOptions2$child.length) {
            values[columnIndex2 + 1] = "";
          }
          var combineResult = [].concat(_toConsumableArray(innerValue.slice(0, start)), _toConsumableArray(values.splice(start)));
          setInnerValue(combineResult);
          setColumnsList(normalListData(combineResult));
        } else {
          setInnerValue(function(data) {
            var cdata = _toConsumableArray(data);
            cdata[columnIndex2] = Object.prototype.hasOwnProperty.call(columnOptions, "value") ? columnOptions.value : "";
            return cdata;
          });
        }
        setColumnIndex(columnIndex2);
      }
    }
  };
  var confirm = function confirm2() {
    var moving = false;
    refs.forEach(function(ref2) {
      if (ref2.moving)
        moving = true;
      ref2.stopMomentum();
    });
    if (moving) {
      isConfirmEvent.current = true;
    } else {
      setSelectedValue(innerValue);
      closePicker();
    }
    setTimeout(function() {
      isConfirmEvent.current = false;
    }, 0);
  };
  var closePicker = function closePicker2() {
    setInnerVisible(false);
    onClose && onClose(setSelectedOptions(), innerValue);
    afterClose && afterClose(setSelectedOptions(), innerValue, pickerRef);
  };
  var renderTitleBar = function renderTitleBar2() {
    return React__default.createElement("div", {
      className: "".concat(classPrefix, "__control")
    }, React__default.createElement("span", {
      className: "".concat(classPrefix, "__cancel-btn"),
      onClick: function onClick(e) {
        e.stopPropagation();
        closePicker();
      }
    }, locale.cancel), React__default.createElement("div", {
      className: "".concat(classPrefix, "__title")
    }, title || ""), React__default.createElement("span", {
      className: "".concat(classPrefix, "__confirm-btn"),
      onClick: function onClick(e) {
        e.stopPropagation();
        confirm();
      }
    }, locale.confirm));
  };
  return React__default.createElement(React__default.Fragment, null, typeof children === "function" && children(selectedValue), React__default.createElement(Popup, {
    visible: innerVisible,
    position: "bottom",
    afterClose: function afterClose2() {
      closePicker();
    }
  }, React__default.createElement("div", _objectSpread({
    className: classes,
    style
  }, rest), renderTitleBar(), typeof children !== "function" && children, React__default.createElement("div", {
    className: "".concat(classPrefix, "__panel"),
    ref: pickerRef
  }, columnsList === null || columnsList === void 0 ? void 0 : columnsList.map(function(item, index) {
    return React__default.createElement(PickerPanel, {
      ref: setRefs(index),
      defaultValue: innerValue === null || innerValue === void 0 ? void 0 : innerValue[index],
      options: item,
      threeDimensional,
      chooseItem: function chooseItem(value, index2) {
        return _chooseItem(value, index2);
      },
      duration,
      key: index,
      keyIndex: index
    });
  })))));
};
var Picker = React__default.forwardRef(InternalPicker);
export {
  Picker as default
};
