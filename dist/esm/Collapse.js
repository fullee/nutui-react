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
import React__default, { useCallback } from "react";
import classNames from "classnames";
import { C as ComponentDefaults } from "./typings.js";
import { C as CollapseContext, a as CollapseItem } from "./collapseitem2.js";
import { u as usePropsValue } from "./use-props-value.js";
var defaultProps = _objectSpread(_objectSpread({}, ComponentDefaults), {}, {
  defaultActiveName: [],
  accordion: false,
  expandIcon: null,
  rotate: 180
});
var Collapse = function Collapse2(props) {
  var _defaultProps$props = _objectSpread(_objectSpread({}, defaultProps), props), className = _defaultProps$props.className, style = _defaultProps$props.style, children = _defaultProps$props.children, activeName = _defaultProps$props.activeName, defaultActiveName = _defaultProps$props.defaultActiveName, accordion = _defaultProps$props.accordion, expandIcon = _defaultProps$props.expandIcon, rotate = _defaultProps$props.rotate, onChange = _defaultProps$props.onChange;
  var classPrefix = "nut-collapse";
  var _usePropsValue = usePropsValue({
    value: activeName,
    defaultValue: defaultActiveName,
    finalValue: []
  }), _usePropsValue2 = _slicedToArray(_usePropsValue, 2), value = _usePropsValue2[0], setValue = _usePropsValue2[1];
  var changeVal = function changeVal2(newValue, name, isOpen2) {
    setValue(newValue);
    onChange && onChange(newValue, name, isOpen2);
  };
  var updateValue = function updateValue2(name) {
    if (accordion) {
      if (value === name) {
        changeVal("", name, false);
      } else {
        changeVal(name, name, true);
      }
    } else if (Array.isArray(value)) {
      if (value.includes(name)) {
        var newValue = value.filter(function(v) {
          return v !== name;
        });
        changeVal(newValue, name, false);
      } else {
        var _newValue = value.concat([name]);
        changeVal(_newValue, name, true);
      }
    } else {
      console.warn("[NutUI] <Collapse> 未开启手风琴模式时 activeName 应为数组");
    }
  };
  var isOpen = useCallback(function(name) {
    if (accordion) {
      return value === name;
    }
    if (Array.isArray(value)) {
      return value.includes(name);
    }
    return false;
  }, [accordion, value]);
  return React__default.createElement(CollapseContext.Provider, {
    value: {
      isOpen,
      updateValue,
      expandIcon,
      rotate
    }
  }, React__default.createElement("div", {
    className: classNames(classPrefix, className),
    style
  }, children));
};
Collapse.defaultProps = defaultProps;
Collapse.displayName = "NutCollapse";
Collapse.Item = CollapseItem;
export {
  Collapse as default
};
