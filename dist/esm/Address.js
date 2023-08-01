import _slicedToArray from "@babel/runtime/helpers/slicedToArray";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
var _excluded = ["children", "visible", "type", "height", "options", "title", "left", "value", "defaultValue", "optionKey", "format", "onClose", "onChange", "onPathChange"], _excluded2 = ["children", "type", "existList", "selectIcon", "defaultIcon", "custom", "onSelect", "onSwitch"], _excluded3 = ["visible", "defaultVisible", "defaultValue", "children", "type", "options", "optionKey", "format", "height", "title", "existList", "custom", "selectIcon", "defaultIcon", "closeIcon", "backIcon", "onChange", "onExistSelect", "onClose", "onSwitch", "style", "className"];
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
import React__default, { forwardRef, useState, useImperativeHandle } from "react";
import { Check, Location2, Left } from "@nutui/icons-react";
import Popup from "./Popup.js";
import { C as Cascader } from "./cascader2.js";
import { C as ComponentDefaults } from "./typings.js";
import { useConfig } from "./ConfigProvider.js";
import { u as usePropsValue } from "./use-props-value.js";
import "classnames";
import "./popup2.js";
import "react-dom";
import "react-transition-group";
import "./overlay2.js";
import "./Overlay.js";
import "./tabs2.js";
import "./TabPane.js";
import "./raf.js";
var defaultProps$2 = _objectSpread(_objectSpread({}, ComponentDefaults), {}, {
  visible: false,
  type: "custom",
  options: [],
  optionKey: {
    textKey: "text",
    valueKey: "value",
    childrenKey: "children"
  },
  format: {},
  height: "200px"
});
var CustomRender = function CustomRender2(props) {
  var _defaultProps$2$props = _objectSpread(_objectSpread({}, defaultProps$2), props), children = _defaultProps$2$props.children, visible = _defaultProps$2$props.visible, type = _defaultProps$2$props.type, height = _defaultProps$2$props.height, options = _defaultProps$2$props.options, title = _defaultProps$2$props.title, left = _defaultProps$2$props.left, value = _defaultProps$2$props.value, defaultValue = _defaultProps$2$props.defaultValue, optionKey = _defaultProps$2$props.optionKey, format = _defaultProps$2$props.format, _onClose = _defaultProps$2$props.onClose, _onChange = _defaultProps$2$props.onChange, onPathChange = _defaultProps$2$props.onPathChange, rest = _objectWithoutProperties(_defaultProps$2$props, _excluded);
  return React__default.createElement(React__default.Fragment, null, type === "custom" && React__default.createElement(Cascader, _objectSpread({
    visible,
    value,
    defaultValue,
    title,
    left,
    options,
    format,
    optionKey,
    onClose: function onClose() {
      _onClose === null || _onClose === void 0 ? void 0 : _onClose();
    },
    onChange: function onChange(val) {
      _onChange === null || _onChange === void 0 ? void 0 : _onChange(val);
    },
    onPathChange
  }, rest)));
};
var defaultProps$1 = {
  type: "custom",
  existList: [],
  defaultIcon: null,
  selectIcon: null,
  custom: false
};
var ExistRender = function ExistRender2(props) {
  var _useConfig = useConfig(), locale = _useConfig.locale;
  var _defaultProps$1$props = _objectSpread(_objectSpread({}, defaultProps$1), props), children = _defaultProps$1$props.children, type = _defaultProps$1$props.type, existList = _defaultProps$1$props.existList, selectIcon = _defaultProps$1$props.selectIcon, defaultIcon = _defaultProps$1$props.defaultIcon, custom = _defaultProps$1$props.custom, onSelect = _defaultProps$1$props.onSelect, onSwitch = _defaultProps$1$props.onSwitch, rest = _objectWithoutProperties(_defaultProps$1$props, _excluded2);
  var classPrefix = "nut-address";
  var selectedExist = function selectedExist2(item) {
    existList.forEach(function(list, index) {
      list.selectedAddress = false;
    });
    item.selectedAddress = true;
    onSelect && onSelect(item);
  };
  var onClick = function onClick2() {
    onSwitch && onSwitch({
      type: type === "exist" ? "custom" : "exist"
    });
  };
  return React__default.createElement(React__default.Fragment, null, React__default.createElement("ul", {
    className: "".concat(classPrefix, "-exist")
  }, existList.map(function(item, index) {
    return React__default.createElement("li", {
      className: "".concat(classPrefix, "-exist-item ").concat(item.selectedAddress ? "active" : ""),
      key: index,
      onClick: function onClick2() {
        return selectedExist(item);
      }
    }, item.selectedAddress ? React__default.createElement(React__default.Fragment, null, React__default.isValidElement(selectIcon) ? selectIcon : React__default.createElement(Check, {
      color: "#FA2C19"
    })) : React__default.createElement(React__default.Fragment, null, React__default.isValidElement(defaultIcon) ? defaultIcon : React__default.createElement(Location2, null)), React__default.createElement("div", {
      className: "".concat(classPrefix, "-exist-item-info")
    }, item.name && item.phone && React__default.createElement(React__default.Fragment, null, React__default.createElement("div", null, item.name), React__default.createElement("div", null, item.phone)), React__default.createElement("div", null, item.provinceName + item.cityName + item.countyName + item.townName + item.addressDetail)));
  })), (custom || custom && locale.address.chooseAnotherAddress) && React__default.createElement("div", {
    className: "".concat(classPrefix, "-footer"),
    onClick
  }, React__default.createElement("div", {
    className: "".concat(classPrefix, "-footer-btn")
  }, custom)));
};
var defaultProps = _objectSpread(_objectSpread({}, ComponentDefaults), {}, {
  defaultValue: [],
  type: "custom",
  options: [],
  optionKey: {
    textKey: "text",
    valueKey: "value",
    childrenKey: "children"
  },
  format: {},
  custom: false,
  existList: [],
  height: "200px",
  defaultIcon: null,
  selectIcon: null,
  closeIcon: null,
  backIcon: null
});
var InternalAddress = function InternalAddress2(props, ref) {
  var _useConfig2 = useConfig(), locale = _useConfig2.locale;
  var _defaultProps$props = _objectSpread(_objectSpread({}, defaultProps), props), visible = _defaultProps$props.visible, defaultVisible = _defaultProps$props.defaultVisible, defaultValue = _defaultProps$props.defaultValue, children = _defaultProps$props.children, type = _defaultProps$props.type, options = _defaultProps$props.options, optionKey = _defaultProps$props.optionKey, format = _defaultProps$props.format, height = _defaultProps$props.height, title = _defaultProps$props.title, existList = _defaultProps$props.existList, custom = _defaultProps$props.custom, selectIcon = _defaultProps$props.selectIcon, defaultIcon = _defaultProps$props.defaultIcon, closeIcon = _defaultProps$props.closeIcon, backIcon = _defaultProps$props.backIcon, _onChange2 = _defaultProps$props.onChange, onExistSelect = _defaultProps$props.onExistSelect, onClose = _defaultProps$props.onClose, onSwitch = _defaultProps$props.onSwitch, style = _defaultProps$props.style, className = _defaultProps$props.className, rest = _objectWithoutProperties(_defaultProps$props, _excluded3);
  var classPrefix = "nut-address";
  var _useState = useState(type), _useState2 = _slicedToArray(_useState, 2), currentType = _useState2[0], setCurrentType = _useState2[1];
  var _usePropsValue = usePropsValue({
    value: visible,
    defaultValue: defaultVisible,
    finalValue: defaultVisible
  }), _usePropsValue2 = _slicedToArray(_usePropsValue, 2), innerVisible = _usePropsValue2[0], setInnerVisible = _usePropsValue2[1];
  useImperativeHandle(ref, function() {
    return {
      open: function open() {
        setInnerVisible(true);
      },
      close: function close() {
        setInnerVisible(false);
      }
    };
  });
  var handleClose = function handleClose2() {
    setInnerVisible(false);
    onClose && onClose();
  };
  var renderLeftOnCustomSwitch = function renderLeftOnCustomSwitch2() {
    return React__default.createElement(React__default.Fragment, null, custom && React__default.createElement("div", {
      className: "".concat(classPrefix, "-left-icon"),
      onClick: onSwitchModule
    }, React__default.isValidElement(backIcon) ? backIcon : React__default.createElement(Left, {
      color: "#cccccc"
    })));
  };
  var selectedExistItem = function selectedExistItem2(data) {
    onExistSelect && onExistSelect(data);
    handleClose();
  };
  var onSwitchModule = function onSwitchModule2() {
    if (currentType === "exist") {
      setCurrentType("custom");
    } else {
      setCurrentType("exist");
    }
    onSwitch && onSwitch({
      type: currentType
    });
  };
  return React__default.createElement(React__default.Fragment, null, currentType === "custom" || currentType === "custom2" ? React__default.createElement(CustomRender, {
    visible: innerVisible,
    closeable: true,
    title: title || locale.address.selectRegion,
    left: renderLeftOnCustomSwitch(),
    defaultValue,
    options,
    format,
    optionKey,
    type: currentType,
    height,
    onClose: handleClose,
    onChange: function onChange(val, params) {
      _onChange2 === null || _onChange2 === void 0 ? void 0 : _onChange2(val, params);
    }
  }) : React__default.createElement(Popup, {
    visible: innerVisible,
    position: "bottom",
    round: true,
    closeable: true,
    closeIcon,
    title: title || locale.address.selectRegion,
    onClose: handleClose
  }, React__default.createElement(
    "div",
    {
      className: "".concat(classPrefix, " ").concat(className || ""),
      style: _objectSpread({}, style)
    },
    // 不需要 close，选中切换即关闭弹框。可手动关闭弹框，只关闭弹框不处理逻辑。
    React__default.createElement(ExistRender, {
      type: currentType,
      existList,
      selectIcon,
      defaultIcon,
      custom,
      onSelect: selectedExistItem,
      onSwitch: onSwitchModule
    })
  )));
};
var Address = forwardRef(InternalAddress);
Address.defaultProps = defaultProps;
Address.displayName = "NutAddress";
export {
  Address as default
};
