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
import React__default, { useRef, useState, useMemo, useEffect } from "react";
import { Notice, Close } from "@nutui/icons-react";
import classNames from "classnames";
import { g as getRect } from "./use-client-rect.js";
import { C as ComponentDefaults } from "./typings.js";
var defaultProps = _objectSpread(_objectSpread({}, ComponentDefaults), {}, {
  direction: "horizontal",
  list: [],
  duration: 1e3,
  height: 40,
  content: "",
  closeable: false,
  wrap: false,
  leftIcon: null,
  rightIcon: null,
  delay: 1,
  scrollable: null,
  speed: 50
});
var NoticeBar = function NoticeBar2(props) {
  var _defaultProps$props = _objectSpread(_objectSpread({}, defaultProps), props), children = _defaultProps$props.children, className = _defaultProps$props.className, style = _defaultProps$props.style, direction = _defaultProps$props.direction, list = _defaultProps$props.list, duration = _defaultProps$props.duration, height = _defaultProps$props.height, content = _defaultProps$props.content, closeable = _defaultProps$props.closeable, wrap = _defaultProps$props.wrap, leftIcon = _defaultProps$props.leftIcon, rightIcon = _defaultProps$props.rightIcon, delay = _defaultProps$props.delay, scrollable = _defaultProps$props.scrollable, speed = _defaultProps$props.speed, close = _defaultProps$props.close, click = _defaultProps$props.click, onClose = _defaultProps$props.onClose, onClick = _defaultProps$props.onClick, onItemClick = _defaultProps$props.onItemClick;
  var classPrefix = "nut-noticebar";
  var wrapRef = useRef(null);
  var contentRef = useRef(null);
  var _useState = useState(true), _useState2 = _slicedToArray(_useState, 2), showNoticeBar = _useState2[0], SetShowNoticeBar = _useState2[1];
  var scrollList = useRef([]);
  var _useState3 = useState(0), _useState4 = _slicedToArray(_useState3, 2), wrapWidth = _useState4[0], SetWrapWidth = _useState4[1];
  var _useState5 = useState(true), _useState6 = _slicedToArray(_useState5, 2), firstRound = _useState6[0], SetFirstRound = _useState6[1];
  var _useState7 = useState(0), _useState8 = _slicedToArray(_useState7, 2), animationDuration = _useState8[0], SetAnimationDuration = _useState8[1];
  var _useState9 = useState(0), _useState10 = _slicedToArray(_useState9, 2), offsetWidth = _useState10[0], SetOffsetW = _useState10[1];
  var _useState11 = useState(""), _useState12 = _slicedToArray(_useState11, 2), animationClass = _useState12[0], SetAnimationClass = _useState12[1];
  var _useState13 = useState(false), _useState14 = _slicedToArray(_useState13, 2), animate = _useState14[0], SetAnimate = _useState14[1];
  var _useState15 = useState(0), _useState16 = _slicedToArray(_useState15, 2), timer = _useState16[0], SetTimer = _useState16[1];
  var _useState17 = useState(null), _useState18 = _slicedToArray(_useState17, 2), isCanScroll = _useState18[0], SetIsCanScroll = _useState18[1];
  var isVertical = direction === "vertical";
  var _useState19 = useState(null), _useState20 = _slicedToArray(_useState19, 2), rect = _useState20[0], setRect = _useState20[1];
  var active = 0;
  var _useState21 = useState(false), _useState22 = _slicedToArray(_useState21, 2), ready = _useState22[0], setReady = _useState22[1];
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
  var _useState23 = useState([]), _useState24 = _slicedToArray(_useState23, 2), childOffset = _useState24[0], setChildOffset = _useState24[1];
  var _useState25 = useState(0), _useState26 = _slicedToArray(_useState25, 2), offset = _useState26[0], setOffset = _useState26[1];
  var _useMemo = useMemo(function() {
    var childCount2 = 0;
    var childs2 = React__default.Children.map(children, function(child) {
      if (!React__default.isValidElement(child))
        return null;
      childCount2++;
      return child;
    });
    return {
      childs: childs2,
      childCount: childCount2
    };
  }, [children]), childs = _useMemo.childs, childCount = _useMemo.childCount;
  var trackSize = childCount * Number(height);
  var minOffset = function() {
    if (rect) {
      var base = isVertical ? rect.height : rect.width;
      return base - Number(height) * childCount;
    }
    return 0;
  }();
  useEffect(function() {
    if (isVertical) {
      if (children) {
        scrollList.current = [].concat(childs);
      } else {
        scrollList.current = [].concat(list);
        startRollEasy();
      }
    } else {
      initScrollWrap();
    }
    return function() {
      clearInterval(timer);
    };
  }, []);
  useEffect(function() {
    initScrollWrap();
  }, [content]);
  useEffect(function() {
    if (list && list.length) {
      scrollList.current = [].concat(list);
    }
  }, [list]);
  var initScrollWrap = function initScrollWrap2(value) {
    if (showNoticeBar === false) {
      return;
    }
    setTimeout(function() {
      if (!wrapRef.current || !contentRef.current) {
        return;
      }
      var wrapW = getRect(wrapRef.current).width;
      var offsetW = getRect(contentRef.current).width;
      var canScroll = scrollable == null ? offsetW > wrapW : scrollable;
      SetIsCanScroll(canScroll);
      if (canScroll) {
        SetWrapWidth(wrapW);
        SetOffsetW(offsetW);
        SetAnimationDuration(offsetW / speed);
        SetAnimationClass("play");
      } else {
        SetAnimationClass("");
      }
    }, 0);
  };
  var handleClick = function handleClick2(event) {
    click && click(event);
    onClick && onClick(event);
  };
  var onClickIcon = function onClickIcon2(event) {
    event.stopPropagation();
    SetShowNoticeBar(!closeable);
    close && close(event);
    onClose && onClose(event);
  };
  var onAnimationEnd = function onAnimationEnd2() {
    SetFirstRound(false);
    setTimeout(function() {
      SetAnimationDuration((offsetWidth + wrapWidth) / speed);
      SetAnimationClass("play-infinite");
    }, 0);
  };
  var time = height / speed / 4 < 1 ? Number((height / speed / 4).toFixed(1)) * 1e3 : ~~(height / speed / 4) * 1e3;
  var startRollEasy = function startRollEasy2() {
    showhorseLamp();
    var timerCurr = window.setInterval(showhorseLamp, time + Number(duration));
    SetTimer(timerCurr);
  };
  var showhorseLamp = function showhorseLamp2() {
    SetAnimate(true);
    setTimeout(function() {
      scrollList.current.push(scrollList.current[0]);
      scrollList.current.shift();
      SetAnimate(false);
    }, time);
  };
  var handleClickIcon = function handleClickIcon2(event) {
    event.stopPropagation();
    SetShowNoticeBar(!closeable);
    close && close(event);
    onClose && onClose(event);
  };
  var isEllipsis = function isEllipsis2() {
    if (isCanScroll == null) {
      return wrap;
    }
    return !isCanScroll && !wrap;
  };
  var contentStyle = {
    animationDelay: "".concat(firstRound ? delay : 0, "s"),
    animationDuration: "".concat(animationDuration, "s"),
    transform: "translateX(".concat(firstRound ? 0 : "".concat(wrapWidth, "px"), ")")
  };
  var barStyle = {
    height: isVertical ? "".concat(height, "px") : ""
  };
  var duringTime = height / speed / 4 < 1 ? Number((height / speed / 4).toFixed(1)) : ~~(height / speed / 4);
  var noDuring = height / speed < 1 ? (height / speed).toFixed(1) : ~~(height / speed);
  var horseLampStyle = {
    transition: animate ? "all ".concat(duringTime === 0 ? noDuring : duringTime, "s") : "",
    marginTop: animate ? "-".concat(height, "px") : ""
  };
  var init = function init2() {
    var active2 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0;
    var rects = getRect(container === null || container === void 0 ? void 0 : container.current);
    var _active = Math.max(Math.min(childCount - 1, active2), 0);
    var _height = rects.height;
    trackSize = childCount * Number(_height);
    var targetOffset = getOffset(_active);
    swiperRef.current.moving = true;
    if (ready) {
      swiperRef.current.moving = false;
    }
    active2 = _active;
    setRect(rects);
    setOffset(targetOffset);
    setReady(true);
  };
  useEffect(function() {
    if (ready) {
      stopAutoPlay();
      autoplay();
    }
    return function() {
      setReady(false);
    };
  }, [ready]);
  useEffect(function() {
    if (isVertical && children) {
      init();
      stopAutoPlay();
      autoplay();
    }
  }, [children, container === null || container === void 0 ? void 0 : container.current]);
  var stopAutoPlay = function stopAutoPlay2() {
    clearTimeout(swiperRef.current.autoplayTimer);
    swiperRef.current.autoplayTimer = null;
  };
  var autoplay = function autoplay2() {
    if (childCount <= 1)
      return;
    stopAutoPlay();
    swiperRef.current.autoplayTimer = setTimeout(function() {
      next();
      autoplay2();
    }, Number(duration) + 100 * speed);
  };
  var move = function move2(_ref) {
    var _ref$pace = _ref.pace, pace = _ref$pace === void 0 ? 0 : _ref$pace, _ref$offset = _ref.offset, offset2 = _ref$offset === void 0 ? 0 : _ref$offset;
    if (childCount <= 1)
      return;
    var targetActive = getActive(pace);
    var targetOffset = getOffset(targetActive, offset2);
    if (Array.isArray(children) && children[0] && targetOffset !== minOffset) {
      var rightBound = targetOffset < minOffset;
      childOffset[0] = rightBound ? trackSize : 0;
    }
    if (Array.isArray(children) && children[childCount - 1] && targetOffset !== 0) {
      var leftBound = targetOffset > 0;
      childOffset[childCount - 1] = leftBound ? -trackSize : 0;
    }
    setChildOffset(childOffset);
    active = targetActive;
    setOffset(targetOffset);
    getStyle(targetOffset);
  };
  var next = function next2() {
    resettPosition();
    requestFrame(function() {
      requestFrame(function() {
        swiperRef.current.moving = false;
        move({
          pace: 1
        });
      });
    });
  };
  var handleItemClick = function handleItemClick2(event, value) {
    onItemClick && onItemClick(event, value);
  };
  var getStyle = function getStyle2() {
    var moveOffset = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : offset;
    var target = innerRef.current;
    var _offset = 0;
    var val = rect.height - height;
    _offset = moveOffset + Number(active === childCount - 1 && val / 2);
    target.style.transitionDuration = "".concat(swiperRef.current.moving ? 0 : duration, "ms");
    target.style.height = "".concat(Number(height) * childCount, "px");
    target.style.transform = "translate3D(0,".concat(_offset, "px,0)");
  };
  var itemStyle = function itemStyle2(index) {
    var style2 = {};
    if (height) {
      style2.height = "".concat(height, "px");
      style2.lineHeight = "".concat(height, "px");
    }
    var offset2 = childOffset[index];
    if (offset2) {
      style2.transform = "translate3D(0,".concat(offset2, "px,0)");
    }
    return style2;
  };
  var getActive = function getActive2(pace) {
    if (pace) {
      var _active = active + pace;
      return range(_active, -1, childCount);
    }
    return active;
  };
  var getOffset = function getOffset2(active2) {
    var offset2 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
    var currentPosition = active2 * Number(height);
    var targetOffset = offset2 - currentPosition;
    return targetOffset;
  };
  var requestFrame = function requestFrame2(fn) {
    window.requestAnimationFrame.call(window, fn);
  };
  var range = function range2(num, min, max) {
    return Math.min(Math.max(num, min), max);
  };
  var resettPosition = function resettPosition2() {
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
  var noticebarClass = classNames({
    "nut-noticebar-page": true,
    withicon: closeable,
    close: closeable,
    wrapable: wrap
  });
  useEffect(function() {
    return function() {
      stopAutoPlay();
    };
  }, []);
  return React__default.createElement("div", {
    className: "".concat(classPrefix, " ").concat(className || ""),
    style
  }, showNoticeBar && direction === "horizontal" ? React__default.createElement("div", {
    className: noticebarClass,
    style: barStyle,
    onClick: handleClick
  }, React__default.createElement("div", {
    className: "left-icon"
  }, leftIcon || React__default.createElement(Notice, {
    width: 16,
    height: 16
  })), React__default.createElement("div", {
    ref: wrapRef,
    className: "wrap"
  }, React__default.createElement("div", {
    ref: contentRef,
    className: "content ".concat(animationClass, " ").concat(isEllipsis() ? "nut-ellipsis" : ""),
    style: contentStyle,
    onAnimationEnd
  }, children, content)), closeable || rightIcon ? React__default.createElement("div", {
    className: "right-icon",
    onClick: onClickIcon
  }, rightIcon || React__default.createElement(Close, {
    width: 12,
    height: 12
  })) : null) : null, showNoticeBar && scrollList.current.length > 0 && isVertical ? React__default.createElement("div", {
    className: "nut-noticebar-vertical",
    style: barStyle,
    ref: container,
    onClick: handleClick
  }, leftIcon ? React__default.createElement("div", {
    className: "left-icon"
  }, leftIcon) : null, children ? React__default.createElement("div", {
    className: "nut-noticebar__inner",
    ref: innerRef
  }, scrollList.current.map(function(item, index) {
    return React__default.createElement("div", {
      className: "scroll-inner ",
      style: itemStyle(index),
      key: index,
      onClick: function onClick2(e) {
        handleItemClick(e, item);
      }
    }, item);
  })) : React__default.createElement("div", {
    className: "horseLamp_list",
    style: horseLampStyle
  }, scrollList.current.map(function(item, index) {
    return (
      // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
      React__default.createElement("div", {
        className: "horseLamp_list_item",
        style: {
          height
        },
        key: index,
        onClick: function onClick2(e) {
          handleItemClick(e, item);
        }
      }, item)
    );
  })), React__default.createElement("div", {
    className: "go",
    onClick: function onClick2(e) {
      handleClickIcon(e);
    }
  }, rightIcon || (closeable ? React__default.createElement(Close, {
    width: 12,
    height: 12
  }) : null))) : null);
};
NoticeBar.defaultProps = defaultProps;
NoticeBar.displayName = "NutNoticeBar";
export {
  NoticeBar as default
};
