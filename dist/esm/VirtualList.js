import _slicedToArray from "@babel/runtime/helpers/slicedToArray";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
var _excluded = ["list", "itemRender", "itemEqual", "itemHeight", "direction", "overscan", "key", "onScroll", "className", "containerHeight"];
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
import React__default, { useRef, useState, useEffect, useCallback } from "react";
import { C as ComponentDefaults } from "./typings.js";
var initPositinoCache = function initPositinoCache2(reaItemSize) {
  var length = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
  var index = 0;
  var positions = Array(length);
  while (index < length) {
    positions[index] = {
      index,
      height: reaItemSize,
      width: reaItemSize,
      top: index * reaItemSize,
      bottom: (index + 1) * reaItemSize,
      left: index * reaItemSize,
      right: (index + 1) * reaItemSize
    };
    index++;
  }
  return positions;
};
var getListTotalSize = function getListTotalSize2(positions, horizontal) {
  var index = positions.length - 1;
  var size = 0;
  if (index < 0) {
    size = 0;
  } else {
    size = horizontal ? positions[index].right : positions[index].bottom;
  }
  return size;
};
var binarySearch = function binarySearch2(positionsList) {
  var value = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
  var horizontal = arguments.length > 2 ? arguments[2] : void 0;
  var start = 0;
  var end = positionsList.length - 1;
  var tempIndex = null;
  var key = horizontal ? "right" : "bottom";
  while (start <= end) {
    var midIndex = Math.floor((start + end) / 2);
    var midValue = positionsList[midIndex][key];
    if (midValue === value) {
      return midIndex + 1;
    }
    if (midValue < value) {
      start = midIndex + 1;
    } else if (midValue > value) {
      if (tempIndex === null || tempIndex > midIndex) {
        tempIndex = midIndex;
      }
      end = midIndex - 1;
    }
  }
  tempIndex = tempIndex || 0;
  return tempIndex;
};
var getEndIndex = function getEndIndex2(_ref) {
  var list = _ref.list, startIndex = _ref.startIndex, visibleCount = _ref.visibleCount, _ref$itemEqual = _ref.itemEqual, itemEqual = _ref$itemEqual === void 0 ? true : _ref$itemEqual, positions = _ref.positions, offSetSize = _ref.offSetSize, overscan = _ref.overscan, _ref$sizeKey = _ref.sizeKey, sizeKey = _ref$sizeKey === void 0 ? "width" : _ref$sizeKey;
  var dataLength = list.length;
  var tempIndex = null;
  if (itemEqual) {
    var endIndex = startIndex + visibleCount;
    tempIndex = dataLength > 0 ? Math.min(dataLength, endIndex) : endIndex;
  } else {
    var sizeNum = 0;
    for (var i = startIndex; i < dataLength; i++) {
      sizeNum += positions[i][sizeKey] || 0;
      if (sizeNum > offSetSize) {
        var _endIndex = i + overscan;
        tempIndex = dataLength > 0 ? Math.min(dataLength, _endIndex) : _endIndex;
        break;
      }
    }
    if (sizeNum < offSetSize) {
      tempIndex = dataLength;
    }
  }
  tempIndex = tempIndex || 0;
  return tempIndex;
};
var updateItemSize = function updateItemSize2(positions, items, sizeKey) {
  var newPos = positions.concat();
  Array.from(items).forEach(function(item) {
    var index = Number(item.getAttribute("data-index"));
    var styleVal = item.getAttribute("style");
    if (styleVal && styleVal.includes("none"))
      return;
    var nowSize = item.getBoundingClientRect()[sizeKey];
    var oldSize = positions[index][sizeKey];
    var dValue = oldSize - nowSize;
    if (dValue) {
      if (sizeKey === "width") {
        newPos[index].right -= dValue;
        newPos[index][sizeKey] = nowSize;
        for (var k = index + 1; k < positions.length; k++) {
          newPos[k].left = positions[k - 1].right;
          newPos[k].right -= dValue;
        }
      } else if (sizeKey === "height") {
        newPos[index].bottom -= dValue;
        newPos[index][sizeKey] = nowSize;
        for (var _k = index + 1; _k < positions.length; _k++) {
          newPos[_k].top = positions[_k - 1].bottom;
          newPos[_k].bottom -= dValue;
        }
      }
    }
  });
};
var defaultProps = _objectSpread(_objectSpread({}, ComponentDefaults), {}, {
  list: [],
  itemHeight: 66,
  itemEqual: true,
  direction: "vertical",
  overscan: 2
});
var VirtualList = function VirtualList2(props) {
  var _defaultProps$props = _objectSpread(_objectSpread({}, defaultProps), props), list = _defaultProps$props.list, itemRender = _defaultProps$props.itemRender, itemEqual = _defaultProps$props.itemEqual, itemHeight = _defaultProps$props.itemHeight, direction = _defaultProps$props.direction, overscan = _defaultProps$props.overscan, key = _defaultProps$props.key, onScroll = _defaultProps$props.onScroll, className = _defaultProps$props.className, containerHeight = _defaultProps$props.containerHeight, rest = _objectWithoutProperties(_defaultProps$props, _excluded);
  var horizontal = direction === "horizontal";
  var sizeKey = horizontal ? "width" : "height";
  var scrollKey = horizontal ? "scrollLeft" : "scrollTop";
  var offsetKey = horizontal ? "left" : "top";
  var scrollRef = useRef(null);
  var itemsRef = useRef(null);
  var _useState = useState([{
    index: 0,
    left: 0,
    top: 0,
    bottom: 0,
    width: 0,
    height: 0,
    right: 0
  }]), _useState2 = _slicedToArray(_useState, 2), positions = _useState2[0], setPositions = _useState2[1];
  var _useState3 = useState(99999999), _useState4 = _slicedToArray(_useState3, 2), listTotalSize = _useState4[0], setListTotalSize = _useState4[1];
  var _useState5 = useState(0), _useState6 = _slicedToArray(_useState5, 2), visibleCount = _useState6[0], setVisibleCount = _useState6[1];
  var _useState7 = useState(containerHeight || 0), _useState8 = _slicedToArray(_useState7, 2), offSetSize = _useState8[0], setOffSetSize = _useState8[1];
  var _useState9 = useState({
    startOffset: 0,
    startIndex: 0,
    overStart: 0,
    endIndex: 10
    // 可视区域结束索引
  }), _useState10 = _slicedToArray(_useState9, 2), options = _useState10[0], setOptions = _useState10[1];
  useEffect(function() {
    var pos = initPositinoCache(itemHeight, list.length);
    setPositions(pos);
    var totalSize = getListTotalSize(pos, horizontal);
    setListTotalSize(totalSize);
  }, [list, itemHeight, horizontal]);
  var getElement = useCallback(function() {
    var _scrollRef$current;
    return ((_scrollRef$current = scrollRef.current) === null || _scrollRef$current === void 0 ? void 0 : _scrollRef$current.parentElement) || document.body;
  }, []);
  useEffect(function() {
    if (containerHeight)
      return;
    var size = horizontal ? getElement().offsetWidth : getElement().offsetHeight;
    setOffSetSize(size);
  }, [getElement, horizontal, containerHeight]);
  useEffect(function() {
    if (offSetSize === 0)
      return;
    var count = Math.ceil(offSetSize / itemHeight) + overscan;
    setVisibleCount(count);
    setOptions(function(options2) {
      return _objectSpread(_objectSpread({}, options2), {}, {
        endIndex: count
      });
    });
  }, [getElement, horizontal, itemHeight, overscan, offSetSize]);
  var updateTotalSize = useCallback(function() {
    if (!itemsRef.current)
      return;
    var items = itemsRef.current.children;
    if (!items.length)
      return;
    updateItemSize(positions, items, sizeKey);
    var totalSize = getListTotalSize(positions, horizontal);
    setListTotalSize(totalSize);
  }, [positions, sizeKey, horizontal]);
  var scroll = useCallback(function() {
    requestAnimationFrame(function(e) {
      var scrollSize = getElement()[scrollKey];
      var startIndex = binarySearch(positions, scrollSize, horizontal);
      var overStart = startIndex - overscan > -1 ? startIndex - overscan : 0;
      if (!itemEqual) {
        updateTotalSize();
      }
      var endIndex = getEndIndex({
        list,
        startIndex,
        visibleCount,
        itemEqual,
        positions,
        offSetSize,
        sizeKey,
        overscan
      });
      var startOffset = positions[startIndex][offsetKey];
      setOptions({
        startOffset,
        startIndex,
        overStart,
        endIndex
      });
      if (endIndex > list.length - 1) {
        if (onScroll) {
          onScroll();
        }
      }
    });
  }, [positions, getElement, list, visibleCount, itemEqual, updateTotalSize, offsetKey, sizeKey, scrollKey, horizontal, overscan, offSetSize]);
  useEffect(function() {
    var element = getElement();
    element.addEventListener("scroll", scroll, false);
    return function() {
      element.removeEventListener("scroll", scroll, false);
    };
  }, [getElement, scroll]);
  return React__default.createElement("div", _objectSpread(_objectSpread({
    className: className ? "".concat(className, " nut-virtualList-box") : "nut-virtualList-box"
  }, rest), {}, {
    style: _defineProperty({}, sizeKey, containerHeight ? "".concat(offSetSize, "px") : "")
  }), React__default.createElement("div", {
    ref: scrollRef,
    className: horizontal ? "nut-horizontal-box" : "nut-vertical-box",
    style: _defineProperty({
      position: "relative"
    }, sizeKey, "".concat(listTotalSize, "px"))
  }, React__default.createElement("ul", {
    className: horizontal ? "nut-virtuallist-items nut-horizontal-items" : "nut-virtuallist-items nut-vertical-items",
    ref: itemsRef,
    style: {
      transform: horizontal ? "translate3d(".concat(options.startOffset, "px,0,0)") : "translate3d(0,".concat(options.startOffset, "px,0)")
    }
  }, list.slice(options.overStart, options.endIndex).map(function(data, index) {
    var startIndex = options.startIndex, overStart = options.overStart;
    var dataIndex = overStart + index;
    var styleVal = dataIndex < startIndex ? "none" : "block";
    var keyVal = key && data[key] ? data[key] : dataIndex;
    return React__default.createElement("li", {
      "data-index": "".concat(dataIndex),
      className: dataIndex % 2 === 0 ? "nut-virtuallist-item even" : "nut-virtuallist-item odd",
      key: "".concat(keyVal),
      style: {
        display: styleVal
      }
    }, itemRender ? itemRender(data, dataIndex, index) : data);
  }))));
};
VirtualList.defaultProps = defaultProps;
VirtualList.displayName = "NutVirtualList";
export {
  VirtualList as default
};
