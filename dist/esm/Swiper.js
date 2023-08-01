import _slicedToArray from "@babel/runtime/helpers/slicedToArray";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _typeof from "@babel/runtime/helpers/typeof";
var _excluded = ["children", "direction", "className", "onChange", "defaultValue", "indicator", "touchable", "preventDefault", "stopPropagation", "autoPlay", "center"];
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
import React__default, { useRef, useState, useMemo, useEffect } from "react";
import classNames from "classnames";
import { D as DataContext } from "./context4.js";
import { g as getRect } from "./use-client-rect.js";
import Indicator from "./Indicator.js";
import SwiperItem from "./SwiperItem.js";
var defaultProps = {
  width: (typeof window === "undefined" ? "undefined" : _typeof(window)) === "object" ? window.innerWidth : 375,
  height: 0,
  duration: 500,
  defaultValue: 0,
  autoPlay: 0,
  direction: "horizontal",
  indicator: false,
  loop: false,
  touchable: true,
  preventDefault: true,
  stopPropagation: true,
  center: false,
  className: ""
};
var DISTANCE = 5;
var Swiper = React__default.forwardRef(function(props, ref) {
  var _classNames;
  var propSwiper = _objectSpread(_objectSpread({}, defaultProps), props);
  var children = propSwiper.children, direction = propSwiper.direction, className = propSwiper.className, onChange = propSwiper.onChange, defaultValue = propSwiper.defaultValue, indicator = propSwiper.indicator, touchable = propSwiper.touchable, preventDefault = propSwiper.preventDefault, stopPropagation = propSwiper.stopPropagation, autoPlay = propSwiper.autoPlay, center = propSwiper.center, rest = _objectWithoutProperties(propSwiper, _excluded);
  var container = useRef(null);
  var innerRef = useRef(null);
  var swiperRef = useRef({
    moving: false,
    autoplayTimer: null,
    width: 0,
    height: 0,
    offset: 0,
    size: 0
  });
  var isVertical = direction === "vertical";
  var _useState = useState(null), _useState2 = _slicedToArray(_useState, 2), rect = _useState2[0], setRect = _useState2[1];
  var _useState3 = useState(0), _useState4 = _slicedToArray(_useState3, 2), active = _useState4[0], setActive = _useState4[1];
  var _useState5 = useState(0), _useState6 = _slicedToArray(_useState5, 2), width = _useState6[0], setWidth = _useState6[1];
  var _useState7 = useState(0), _useState8 = _slicedToArray(_useState7, 2), height = _useState8[0], setHeight = _useState8[1];
  var _useState9 = useState(0), _useState10 = _slicedToArray(_useState9, 2), offset = _useState10[0], setOffset = _useState10[1];
  var _useState11 = useState([]), _useState12 = _slicedToArray(_useState11, 2), childOffset = _useState12[0], setChildOffset = _useState12[1];
  var _useState13 = useState(false), _useState14 = _slicedToArray(_useState13, 2), ready = _useState14[0], setReady = _useState14[1];
  var size = isVertical ? height : width;
  var _useState15 = useState({
    startX: 0,
    startY: 0,
    deltaX: 0,
    deltaY: 0,
    offsetX: 0,
    offsetY: 0,
    stateDirection: "",
    delta: 0,
    touchTime: 0
  }), _useState16 = _slicedToArray(_useState15, 1), touch = _useState16[0];
  var _useMemo = useMemo(function() {
    var childCount2 = 0;
    var childs2 = React__default.Children.map(props.children, function(child) {
      if (!React__default.isValidElement(child))
        return null;
      childCount2++;
      return child;
    });
    return {
      childs: childs2,
      childCount: childCount2
    };
  }, [props.children]), childs = _useMemo.childs, childCount = _useMemo.childCount;
  var trackSize = childCount * Number(size);
  var parent = {
    propSwiper,
    size
  };
  var minOffset = function() {
    if (rect) {
      var base = isVertical ? rect.height : rect.width;
      return base - Number(size) * childCount;
    }
    return 0;
  }();
  var stopAutoPlay = function stopAutoPlay2() {
    clearTimeout(swiperRef.current.autoplayTimer);
    swiperRef.current.autoplayTimer = null;
  };
  var startPlay = function startPlay2() {
    if (propSwiper.autoPlay <= 0 || childCount <= 1)
      return;
    stopAutoPlay();
    swiperRef.current.autoplayTimer = setTimeout(function() {
      next();
      startPlay2();
    }, Number(propSwiper.autoPlay));
  };
  var resetPosition = function resetPosition2() {
    swiperRef.current.moving = true;
    if (active <= -1) {
      move({
        pace: childCount
      });
    }
    if (active >= childCount) {
      move({
        pace: -childCount
      });
    }
  };
  var prev = function prev2() {
    resetPosition();
    resetTouchDetails();
    requestFrame(function() {
      requestFrame(function() {
        swiperRef.current.moving = false;
        move({
          pace: -1,
          isEmit: true
        });
      });
    });
  };
  var next = function next2() {
    resetPosition();
    resetTouchDetails();
    requestFrame(function() {
      requestFrame(function() {
        swiperRef.current.moving = false;
        move({
          pace: 1,
          isEmit: true
        });
      });
    });
  };
  var to = function to2(index) {
    resetPosition();
    resetTouchDetails();
    requestFrame(function() {
      requestFrame(function() {
        swiperRef.current.moving = false;
        var targetIndex;
        if (props.loop && childCount === index) {
          targetIndex = active === 0 ? 0 : index;
        } else {
          targetIndex = index % childCount;
        }
        move({
          pace: targetIndex - active,
          isEmit: true
        });
      });
    });
  };
  var resize = function resize2() {
    init(active);
  };
  var move = function move2(_ref) {
    var _ref$pace = _ref.pace, pace = _ref$pace === void 0 ? 0 : _ref$pace, _ref$offset = _ref.offset, offset2 = _ref$offset === void 0 ? 0 : _ref$offset, _ref$isEmit = _ref.isEmit, isEmit = _ref$isEmit === void 0 ? false : _ref$isEmit, _ref$movingStatus = _ref.movingStatus, movingStatus = _ref$movingStatus === void 0 ? false : _ref$movingStatus;
    if (childCount <= 1)
      return;
    var targetActive = getActive(pace);
    var targetOffset = getOffset(targetActive, offset2);
    if (props.loop) {
      if (Array.isArray(children) && children[0] && targetOffset !== minOffset) {
        var rightBound = targetOffset < minOffset;
        childOffset[0] = rightBound ? trackSize : 0;
      }
      if (Array.isArray(children) && children[childCount - 1] && targetOffset !== 0) {
        var leftBound = targetOffset > 0;
        childOffset[childCount - 1] = leftBound ? -trackSize : 0;
      }
      setChildOffset(childOffset);
    }
    if (isEmit && active !== targetActive) {
      props.onChange && props.onChange((targetActive + childCount) % childCount);
    }
    active = targetActive;
    setActive(targetActive);
    setOffset(targetOffset);
    getStyle(targetOffset);
  };
  var getActive = function getActive2(pace) {
    if (pace) {
      var _active = active + pace;
      if (props.loop) {
        return range(_active, -1, childCount);
      }
      return range(_active, 0, childCount - 1);
    }
    return active;
  };
  var getOffset = function getOffset2(active2) {
    var offset2 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
    var currentPosition = active2 * Number(size);
    if (!props.loop) {
      currentPosition = Math.min(currentPosition, -minOffset);
    }
    var targetOffset = offset2 - currentPosition;
    if (!props.loop) {
      targetOffset = range(targetOffset, minOffset, 0);
    }
    return targetOffset;
  };
  var requestFrame = function requestFrame2(fn) {
    window.requestAnimationFrame.call(window, fn);
  };
  var range = function range2(num, min, max) {
    return Math.min(Math.max(num, min), max);
  };
  var getDirection = function getDirection2(x, y) {
    if (x > y && x > DISTANCE)
      return "horizontal";
    if (y > x && y > DISTANCE)
      return "vertical";
    return "";
  };
  var resetTouchDetails = function resetTouchDetails2() {
    touch.startX = 0;
    touch.startY = 0;
    touch.deltaX = 0;
    touch.deltaY = 0;
    touch.offsetX = 0;
    touch.offsetY = 0;
    touch.delta = 0;
    touch.stateDirection = "";
    touch.touchTime = 0;
  };
  var touchStart = function touchStart2(e) {
    resetTouchDetails();
    touch.startX = e.touches[0].clientX;
    touch.startY = e.touches[0].clientY;
  };
  var handleTouchMove = function handleTouchMove2(e) {
    touch.deltaX = e.touches[0].clientX - touch.startX;
    touch.deltaY = e.touches[0].clientY - touch.startY;
    touch.offsetX = Math.abs(touch.deltaX);
    touch.offsetY = Math.abs(touch.deltaY);
    touch.delta = isVertical ? touch.deltaY : touch.deltaX;
    if (!touch.stateDirection) {
      touch.stateDirection = getDirection(touch.offsetX, touch.offsetY);
    }
  };
  var classPrefix = "nut-swiper";
  var contentClass = classNames((_classNames = {}, _defineProperty(_classNames, "".concat(classPrefix, "__inner"), true), _defineProperty(_classNames, "".concat(classPrefix, "__vertical"), isVertical), _classNames));
  var getStyle = function getStyle2() {
    var moveOffset = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : offset;
    var target = innerRef.current;
    var _offset = 0;
    if (!center) {
      _offset = moveOffset;
    } else {
      var _size = isVertical ? height : width;
      var val = isVertical ? rect.height - _size : rect.width - _size;
      _offset = moveOffset + (active === childCount - 1 && !props.loop ? -val / 2 : val / 2);
    }
    target.style.transitionDuration = "".concat(swiperRef.current.moving ? 0 : props.duration, "ms");
    target.style[isVertical ? "height" : "width"] = "".concat(Number(size) * childCount, "px");
    target.style[isVertical ? "width" : "height"] = "".concat(isVertical ? width : height, "px");
    target.style.transform = "translate3D".concat(!isVertical ? "(".concat(_offset, "px,0,0)") : "(0,".concat(_offset, "px,0)"));
  };
  var onTouchStart = function onTouchStart2(e) {
    if (props.preventDefault)
      e.preventDefault();
    if (props.stopPropagation)
      e.stopPropagation();
    if (!props.touchable)
      return;
    touchStart(e);
    touch.touchTime = Date.now();
    stopAutoPlay();
    resetPosition();
  };
  var onTouchMove = function onTouchMove2(e) {
    if (props.touchable && swiperRef.current.moving) {
      handleTouchMove(e);
      if (touch.stateDirection === props.direction) {
        move({
          offset: touch.delta
        });
      }
    }
  };
  var onTouchEnd = function onTouchEnd2(e) {
    if (!props.touchable || !swiperRef.current.moving)
      return;
    var speed = touch.delta / (Date.now() - touch.touchTime);
    var isShouldMove = Math.abs(speed) > 0.3 || Math.abs(touch.delta) > Number((size / 2).toFixed(2));
    var pace = 0;
    swiperRef.current.moving = false;
    if (isShouldMove && touch.stateDirection === props.direction) {
      var offset2 = isVertical ? touch.offsetY : touch.offsetX;
      if (props.loop) {
        if (offset2 > 0) {
          pace = touch.delta > 0 ? -1 : 1;
        } else {
          pace = 0;
        }
      } else {
        pace = -Math[touch.delta > 0 ? "ceil" : "floor"](touch.delta / size);
      }
      move({
        pace,
        isEmit: true
      });
    } else if (touch.delta) {
      move({
        pace: 0
      });
    } else {
      getStyle();
    }
    startPlay();
  };
  useEffect(function() {
    swiperRef.current.activeIndicator = (active + childCount) % childCount;
  }, [active]);
  var init = function init2() {
    var active2 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : +propSwiper.defaultValue;
    var rect2 = getRect(container === null || container === void 0 ? void 0 : container.current);
    var currentIndex = Math.max(Math.min(childCount - 1, active2), 0);
    var width2 = +propSwiper.width || rect2.width;
    var height2 = +propSwiper.height || rect2.height;
    size = isVertical ? height2 : width2;
    trackSize = childCount * Number(size);
    var targetOffset = getOffset(currentIndex);
    swiperRef.current.moving = true;
    if (ready) {
      swiperRef.current.moving = false;
    }
    setRect(rect2);
    setActive(currentIndex);
    setWidth(width2);
    setHeight(height2);
    setOffset(targetOffset);
    setReady(true);
  };
  useEffect(function() {
    if (ready) {
      getStyle();
    }
  }, [isVertical, width, height, offset, ready]);
  useEffect(function() {
    if (ready) {
      stopAutoPlay();
      startPlay();
    }
    return function() {
      return setReady(false);
    };
  }, [ready]);
  useEffect(function() {
    stopAutoPlay();
    startPlay();
  }, [children]);
  useEffect(function() {
    return init();
  }, [propSwiper.defaultValue]);
  useEffect(function() {
    var target = container.current;
    target.addEventListener("touchstart", onTouchStart, false);
    target.addEventListener("touchmove", onTouchMove, false);
    target.addEventListener("touchend", onTouchEnd, false);
    return function() {
      target.removeEventListener("touchstart", onTouchStart, false);
      target.removeEventListener("touchmove", onTouchMove, false);
      target.removeEventListener("touchend", onTouchEnd, false);
    };
  });
  useEffect(function() {
    return function() {
      return stopAutoPlay();
    };
  }, []);
  var getItemStyle = function getItemStyle2(index) {
    var style = {};
    if (size) {
      style[direction === "horizontal" ? "width" : "height"] = "".concat(size, "px");
    }
    var offset2 = childOffset[index];
    if (offset2) {
      style.transform = "translate3D".concat(direction === "horizontal" ? "(".concat(offset2, "px,0,0)") : "(0,".concat(offset2, "px,0)"));
    }
    return style;
  };
  React__default.useImperativeHandle(ref, function() {
    return {
      to,
      next,
      prev,
      resize
    };
  });
  var renderIndicator = function renderIndicator2() {
    if (React__default.isValidElement(indicator))
      return indicator;
    if (indicator === true) {
      var _classNames2;
      return React__default.createElement("div", {
        className: classNames((_classNames2 = {}, _defineProperty(_classNames2, "".concat(classPrefix, "__indicator"), true), _defineProperty(_classNames2, "".concat(classPrefix, "__indicator-vertical"), isVertical), _classNames2))
      }, React__default.createElement(Indicator, {
        current: (active + childCount) % childCount,
        total: childs === null || childs === void 0 ? void 0 : childs.length,
        direction
      }));
    }
    return null;
  };
  return React__default.createElement(DataContext.Provider, {
    value: parent
  }, React__default.createElement("div", _objectSpread({
    className: classNames(classPrefix, className),
    ref: container
  }, rest), React__default.createElement("div", {
    className: contentClass,
    ref: innerRef
  }, React__default.Children.map(childs, function(child, index) {
    return React__default.createElement("div", {
      className: "".concat(classPrefix, "__item-wrapper"),
      style: getItemStyle(index),
      key: index
    }, child);
  })), renderIndicator()));
});
Swiper.defaultProps = defaultProps;
Swiper.displayName = "NutSwiper";
var InnerSwiper = Swiper;
InnerSwiper.Item = SwiperItem;
export {
  InnerSwiper as default
};
