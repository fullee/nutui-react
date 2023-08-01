import _slicedToArray from "@babel/runtime/helpers/slicedToArray";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
var _excluded = ["height", "floorKey", "list", "sticky", "spaceHeight", "titleHeight", "showKeys", "className", "style", "onItemClick", "onIndexClick", "children"];
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
import React__default, { createContext, useRef, useState, useEffect } from "react";
import { useGesture } from "@use-gesture/react";
import { animated } from "@react-spring/web";
import classNames from "classnames";
import { C as ComponentDefaults } from "./typings.js";
var elevatorContext = createContext({});
var defaultProps = _objectSpread(_objectSpread({}, ComponentDefaults), {}, {
  height: "200px",
  floorKey: "title",
  list: [],
  sticky: false,
  spaceHeight: 23,
  titleHeight: 35,
  showKeys: true
});
var Elevator = function Elevator2(props) {
  var _classNames2;
  var _defaultProps$props = _objectSpread(_objectSpread({}, defaultProps), props), height = _defaultProps$props.height, floorKey = _defaultProps$props.floorKey, list = _defaultProps$props.list, sticky = _defaultProps$props.sticky, spaceHeight = _defaultProps$props.spaceHeight, titleHeight = _defaultProps$props.titleHeight, showKeys = _defaultProps$props.showKeys, className = _defaultProps$props.className, style = _defaultProps$props.style, onItemClick = _defaultProps$props.onItemClick, onIndexClick = _defaultProps$props.onIndexClick, children = _defaultProps$props.children, rest = _objectWithoutProperties(_defaultProps$props, _excluded);
  var classPrefix = "nut-elevator";
  var listview = useRef(null);
  var initData = {
    anchorIndex: 0,
    listHeight: [],
    listGroup: [],
    scrollY: 0
  };
  var touchState = useRef({
    y1: 0,
    y2: 0
  });
  var _useState = useState(0), _useState2 = _slicedToArray(_useState, 2), scrollY = _useState2[0], setScrollY = _useState2[1];
  var _useState3 = useState({}), _useState4 = _slicedToArray(_useState3, 2), currentData = _useState4[0], setCurrentData = _useState4[1];
  var _useState5 = useState(""), _useState6 = _slicedToArray(_useState5, 2), currentKey = _useState6[0], setCurrentKey = _useState6[1];
  var _useState7 = useState(0), _useState8 = _slicedToArray(_useState7, 2), currentIndex = _useState8[0], setCurrentIndex = _useState8[1];
  var _useState9 = useState(0), _useState10 = _slicedToArray(_useState9, 2), codeIndex = _useState10[0], setCodeIndex = _useState10[1];
  var _useState11 = useState(false), _useState12 = _slicedToArray(_useState11, 2), scrollStart = _useState12[0], setScrollStart = _useState12[1];
  var state = useRef(initData);
  var resetScrollState = function resetScrollState2() {
    setScrollStart(false);
  };
  var getData = function getData2(el, name) {
    var prefix = "data-";
    return el.getAttribute(prefix + name);
  };
  var calculateHeight = function calculateHeight2() {
    var height2 = 0;
    state.current.listHeight.push(height2);
    for (var i = 0; i < state.current.listGroup.length; i++) {
      var item = state.current.listGroup[i];
      height2 += item.clientHeight;
      state.current.listHeight.push(height2);
    }
  };
  var scrollTo = function scrollTo2(index) {
    if (!index && index !== 0) {
      return;
    }
    if (!state.current.listHeight.length) {
      calculateHeight();
    }
    var cacheIndex = index;
    if (index < 0) {
      cacheIndex = 0;
    }
    if (index > state.current.listHeight.length - 2) {
      cacheIndex = state.current.listHeight.length - 2;
    }
    setCodeIndex(cacheIndex);
    if (listview.current) {
      listview.current.scrollTo(0, state.current.listHeight[cacheIndex]);
    }
  };
  var bind = useGesture({
    onDragStart: function onDragStart(_ref) {
      var target = _ref.target, offset = _ref.offset;
      setScrollStart(true);
      var index = Number(getData(target, "index"));
      touchState.current.y1 = offset[1];
      state.current.anchorIndex = +index;
      setCodeIndex(function(codeIndex2) {
        return codeIndex2 + index;
      });
      scrollTo(index);
    },
    onDragEnd: function onDragEnd(_ref2) {
      var offset = _ref2.offset;
      touchState.current.y2 = offset[1];
      var delta = (touchState.current.y2 - touchState.current.y1) / spaceHeight || 0;
      var cacheIndex = state.current.anchorIndex + Math.ceil(delta);
      setCodeIndex(cacheIndex);
      scrollTo(cacheIndex);
      resetScrollState();
    }
  });
  var handleClickItem = function handleClickItem2(key, item) {
    onItemClick && onItemClick(key, item);
    setCurrentData(item);
    setCurrentKey(key);
  };
  var handleClickIndex = function handleClickIndex2(key) {
    onIndexClick && onIndexClick(key);
  };
  var setListGroup = function setListGroup2() {
    if (listview.current) {
      var els = listview.current.querySelectorAll(".nut-elevator__list__item");
      els.forEach(function(el) {
        if (el != null && !state.current.listGroup.includes(el)) {
          state.current.listGroup.push(el);
        }
      });
    }
  };
  var listViewScroll = function listViewScroll2(e) {
    var listHeight = state.current.listHeight;
    if (!listHeight.length) {
      calculateHeight();
    }
    var target = e.target;
    var scrollTop = target.scrollTop;
    state.current.scrollY = scrollTop;
    setScrollY(scrollTop);
    for (var i = 0; i < listHeight.length - 1; i++) {
      var height1 = listHeight[i];
      var height2 = listHeight[i + 1];
      if (state.current.scrollY >= height1 && state.current.scrollY < height2) {
        setCurrentIndex(i);
        return;
      }
    }
    setCurrentIndex(listHeight.length - 2);
  };
  useEffect(function() {
    if (listview.current) {
      setListGroup();
      listview.current.addEventListener("scroll", listViewScroll);
    }
  }, [listview]);
  return React__default.createElement("div", _objectSpread({
    className: "".concat(classPrefix, " ").concat(className),
    style
  }, rest), sticky && scrollY > 0 ? React__default.createElement("div", {
    className: "".concat(classPrefix, "__list__fixed")
  }, React__default.createElement("span", {
    className: "".concat(classPrefix, "__list__fixed__title")
  }, list[currentIndex < 0 ? 0 : currentIndex][floorKey])) : null, React__default.createElement("div", {
    className: "".concat(classPrefix, "__list"),
    style: {
      height: Number.isNaN(+height) ? height : "".concat(height, "px")
    }
  }, React__default.createElement("div", {
    className: "".concat(classPrefix, "__list__inner"),
    ref: listview
  }, list.map(function(item, idx) {
    return React__default.createElement("div", {
      className: "".concat(classPrefix, "__list__item"),
      key: idx
    }, React__default.createElement("div", {
      className: "".concat(classPrefix, "__list__item__code")
    }, item[floorKey]), React__default.createElement(React__default.Fragment, null, item.list.map(function(subitem) {
      var _classNames;
      return React__default.createElement("div", {
        className: classNames((_classNames = {}, _defineProperty(_classNames, "".concat(classPrefix, "__list__item__name"), true), _defineProperty(_classNames, "".concat(classPrefix, "__list__item__name--highcolor"), currentData.id === subitem.id && currentKey === item[floorKey]), _classNames)),
        key: subitem.id,
        onClick: function onClick() {
          return handleClickItem(item[floorKey], subitem);
        }
      }, children ? React__default.createElement(React__default.Fragment, null, React__default.createElement(elevatorContext.Provider, {
        value: subitem
      }, children)) : subitem.name);
    })));
  }))), showKeys ? React__default.createElement(React__default.Fragment, null, list.length && scrollStart ? React__default.createElement("div", {
    className: classNames((_classNames2 = {}, _defineProperty(_classNames2, "".concat(classPrefix, "__code--current"), true), _defineProperty(_classNames2, "".concat(classPrefix, "__code--current--current"), true), _classNames2))
  }, list[codeIndex < 0 ? 0 : codeIndex][floorKey]) : null, React__default.createElement("div", {
    className: "".concat(classPrefix, "__bars")
  }, React__default.createElement(animated.div, _objectSpread(_objectSpread({
    className: "".concat(classPrefix, "__bars__inner")
  }, bind()), {}, {
    style: {
      touchAction: "pan-y"
    }
  }), list.map(function(item, index) {
    var _classNames3;
    return React__default.createElement("div", {
      className: classNames((_classNames3 = {}, _defineProperty(_classNames3, "".concat(classPrefix, "__bars__inner__item"), true), _defineProperty(_classNames3, "".concat(classPrefix, "__bars__inner__item--active"), item[floorKey] === list[currentIndex < 0 ? 0 : currentIndex][floorKey]), _classNames3)),
      "data-index": index,
      key: index,
      onClick: function onClick() {
        return handleClickIndex(item[floorKey]);
      }
    }, item[floorKey]);
  })))) : null);
};
Elevator.defaultProps = defaultProps;
Elevator.displayName = "NutElevator";
Elevator.Context = elevatorContext;
export {
  Elevator as default
};
