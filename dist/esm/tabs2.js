import _slicedToArray from "@babel/runtime/helpers/slicedToArray";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
var _excluded = ["activeColor", "tabStyle", "direction", "activeType", "duration", "align", "title", "children", "onClick", "onChange", "className", "autoHeight"];
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
import { JoySmile } from "@nutui/icons-react";
import { C as ComponentDefaults } from "./typings.js";
import TabPane from "./TabPane.js";
import { r as requestAniFrame } from "./raf.js";
import { u as usePropsValue, a as useForceUpdate } from "./use-props-value.js";
var defaultProps = _objectSpread(_objectSpread({}, ComponentDefaults), {}, {
  tabStyle: {},
  activeColor: "",
  direction: "horizontal",
  activeType: "line",
  duration: 300,
  autoHeight: false
});
var classPrefix = "nut-tabs";
var Tabs = function Tabs2(props) {
  var _classNames;
  var _defaultProps$props = _objectSpread(_objectSpread({}, defaultProps), props), activeColor = _defaultProps$props.activeColor, tabStyle = _defaultProps$props.tabStyle, direction = _defaultProps$props.direction, activeType = _defaultProps$props.activeType, duration = _defaultProps$props.duration, align = _defaultProps$props.align, title = _defaultProps$props.title, children = _defaultProps$props.children, onClick = _defaultProps$props.onClick, onChange = _defaultProps$props.onChange, className = _defaultProps$props.className, autoHeight = _defaultProps$props.autoHeight, rest = _objectWithoutProperties(_defaultProps$props, _excluded);
  var _usePropsValue = usePropsValue({
    value: props.value,
    defaultValue: props.defaultValue,
    finalValue: 0,
    onChange
  }), _usePropsValue2 = _slicedToArray(_usePropsValue, 2), value = _usePropsValue2[0], setValue = _usePropsValue2[1];
  var _useState = useState({}), _useState2 = _slicedToArray(_useState, 2), contentStyle = _useState2[0], setContentStyle = _useState2[1];
  var titleItemsRef = useRef([]);
  var navRef = useRef(null);
  var scrollDirection = function scrollDirection2(nav, to, duration2, direction2) {
    var count = 0;
    var from = direction2 === "horizontal" ? nav.scrollLeft : nav.scrollTop;
    var frames = duration2 === 0 ? 1 : Math.round(duration2 * 1e3 / 16);
    function animate() {
      if (direction2 === "horizontal") {
        nav.scrollLeft += (to - from) / frames;
      } else {
        nav.scrollTop += (to - from) / frames;
      }
      if (++count < frames) {
        requestAniFrame(animate);
      }
    }
    animate();
  };
  var scrollIntoView = function scrollIntoView2(index, immediate) {
    var nav = navRef.current;
    var titleItem = titleItemsRef.current;
    if (!nav || !titleItem || !titleItem[index]) {
      return;
    }
    var title2 = titleItem[index];
    var to = 0;
    if (props.direction === "vertical") {
      var runTop = title2.offsetTop - nav.offsetTop + 10;
      to = runTop - (nav.offsetHeight - title2.offsetHeight) / 2;
    } else {
      to = title2.offsetLeft - (nav.offsetWidth - title2.offsetWidth) / 2;
    }
    scrollDirection(nav, to, immediate ? 0 : 0.3, props.direction);
  };
  var getTitles = function getTitles2() {
    var titles2 = [];
    React__default.Children.forEach(children, function(child, idx) {
      if (React__default.isValidElement(child)) {
        var props2 = child === null || child === void 0 ? void 0 : child.props;
        if (props2 !== null && props2 !== void 0 && props2.title || props2 !== null && props2 !== void 0 && props2.value) {
          titles2.push({
            title: props2.title,
            value: props2.value || idx,
            disabled: props2.disabled
          });
        }
      }
    });
    return titles2;
  };
  var titles = useRef(getTitles());
  var forceUpdate = useForceUpdate();
  useEffect(function() {
    titles.current = getTitles();
    var current = "";
    titles.current.forEach(function(title2) {
      if (title2.value == value) {
        current = value;
      }
    });
    if (current !== "" && current !== value) {
      setValue(current);
    } else {
      forceUpdate();
    }
  }, [children]);
  var classes = classNames(classPrefix, "".concat(classPrefix, "--").concat(direction), className);
  var classesTitle = classNames("".concat(classPrefix, "__titles"), (_classNames = {}, _defineProperty(_classNames, "".concat(classPrefix, "__titles--").concat(activeType), activeType), _defineProperty(_classNames, "".concat(classPrefix, "__titles--scrollable"), true), _defineProperty(_classNames, "".concat(classPrefix, "__titles--").concat(align), align), _classNames));
  var tabsActiveStyle = {
    color: activeType === "smile" ? activeColor : "",
    background: activeType === "line" ? activeColor : ""
  };
  useEffect(function() {
    var index = titles.current.findIndex(function(t) {
      return t.value == value;
    });
    setContentStyle({
      transform: direction === "horizontal" ? "translate3d(-".concat(index * 100, "%, 0, 0)") : "translate3d( 0,-".concat(index * 100, "%, 0)"),
      transitionDuration: "".concat(duration, "ms")
    });
    setTimeout(function() {
      scrollIntoView(index);
    });
  }, [value]);
  var tabChange = function tabChange2(item) {
    onClick && onClick(item.value);
    if (item.disabled) {
      return;
    }
    setValue(item.value);
  };
  return React__default.createElement("div", _objectSpread({
    className: classes
  }, rest), React__default.createElement("div", {
    className: classesTitle,
    style: _objectSpread({}, tabStyle),
    ref: navRef
  }, !!title && typeof title === "function" ? title() : titles.current.map(function(item) {
    var _classNames2;
    return React__default.createElement("div", {
      onClick: function onClick2() {
        tabChange(item);
      },
      className: classNames("".concat(classPrefix, "__titles-item"), (_classNames2 = {}, _defineProperty(_classNames2, "nut-tabs__titles-item--active", !item.disabled && String(item.value) === String(value)), _defineProperty(_classNames2, "nut-tabs__titles-item--disabled", item.disabled), _defineProperty(_classNames2, "nut-tabs__titles-item--".concat(align), align), _classNames2)),
      ref: function ref(_ref) {
        return titleItemsRef.current.push(_ref);
      },
      key: item.value
    }, activeType === "line" && React__default.createElement("div", {
      className: "".concat(classPrefix, "__titles-item__line"),
      style: tabsActiveStyle
    }), activeType === "smile" && React__default.createElement("div", {
      className: "".concat(classPrefix, "__titles-item__smile"),
      style: tabsActiveStyle
    }, React__default.createElement(JoySmile, {
      color: activeColor,
      width: 40,
      height: 20
    })), React__default.createElement("div", {
      className: classNames({
        ellipsis: true
      }, "".concat(classPrefix, "__titles-item__text"))
    }, item.title));
  })), React__default.createElement("div", {
    className: "".concat(classPrefix, "__content__wrap")
  }, React__default.createElement("div", {
    className: "".concat(classPrefix, "__content"),
    style: contentStyle
  }, React__default.Children.map(children, function(child, idx) {
    if (!React__default.isValidElement(child)) {
      return null;
    }
    var childProps = _objectSpread(_objectSpread({}, child.props), {}, {
      active: value === child.props.value
    });
    if (String(value) !== String(child.props.value || idx) && autoHeight) {
      childProps = _objectSpread(_objectSpread({}, childProps), {}, {
        autoHeightClassName: "inactive"
      });
    }
    return React__default.cloneElement(child, childProps);
  }))));
};
Tabs.defaultProps = defaultProps;
Tabs.displayName = "NutTabs";
Tabs.TabPane = TabPane;
export {
  Tabs as T
};
