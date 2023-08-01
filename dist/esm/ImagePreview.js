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
import React__default, { useRef, useState, useEffect } from "react";
import Popup from "./Popup.js";
import Image from "./Image.js";
import Video from "./Video.js";
import Swiper from "./Swiper.js";
import SwiperItem from "./SwiperItem.js";
import { C as ComponentDefaults } from "./typings.js";
import { u as usePropsValue } from "./use-props-value.js";
var defaultProps = _objectSpread(_objectSpread({}, ComponentDefaults), {}, {
  images: [],
  videos: [],
  visible: false,
  autoPlay: 3e3,
  defaultValue: 0,
  closeOnContentClick: false,
  indicator: false,
  indicatorColor: "#fff",
  onChange: function onChange(value) {
  },
  onClose: function onClose() {
  }
});
var ImagePreview = function ImagePreview2(props) {
  var images = props.images, videos = props.videos, visible = props.visible, defaultValue = props.defaultValue, indicatorColor = props.indicatorColor, indicator = props.indicator, autoPlay = props.autoPlay, closeOnContentClick = props.closeOnContentClick, onClose2 = props.onClose;
  var classPrefix = "nut-imagepreview";
  var ref = useRef(null);
  var _usePropsValue = usePropsValue({
    value: props.value,
    defaultValue,
    finalValue: defaultValue,
    onChange: function onChange2(val) {
      var _props$onChange;
      (_props$onChange = props.onChange) === null || _props$onChange === void 0 ? void 0 : _props$onChange.call(props, val);
    }
  }), _usePropsValue2 = _slicedToArray(_usePropsValue, 2), innerNo = _usePropsValue2[0], setInnerNo = _usePropsValue2[1];
  var _useState = useState(visible), _useState2 = _slicedToArray(_useState, 2), showPop = _useState2[0], setShowPop = _useState2[1];
  var _useState3 = useState(0), _useState4 = _slicedToArray(_useState3, 2), active = _useState4[0], setActive = _useState4[1];
  var _useState5 = useState((images === null || images === void 0 ? void 0 : images.length) || 0 + ((videos === null || videos === void 0 ? void 0 : videos.length) || 0)), _useState6 = _slicedToArray(_useState5, 1), maxNo = _useState6[0];
  var _useState7 = useState({
    scale: 1,
    moveable: false
  }), _useState8 = _slicedToArray(_useState7, 2), store = _useState8[0], setStore = _useState8[1];
  var _useState9 = useState(0), _useState10 = _slicedToArray(_useState9, 2), lastTouchEndTime = _useState10[0], setLastTouchEndTime = _useState10[1];
  var onTouchStart = function onTouchStart2(event) {
    var touches = event.touches;
    var events = touches[0];
    var events2 = touches[1];
    var curTouchTime = /* @__PURE__ */ (/* @__PURE__ */ new Date()).getTime();
    if (curTouchTime - lastTouchEndTime < 300) {
      var store12 = store;
      if (store12.scale > 1) {
        store12.scale = 1;
      } else if (store12.scale === 1) {
        store12.scale = 2;
      }
      scaleNow();
    }
    var store1 = store;
    store1.moveable = true;
    if (events2) {
      store1.oriDistance = getDistance({
        x: events.pageX,
        y: events.pageY
      }, {
        x: events2.pageX,
        y: events2.pageY
      });
    }
    store1.originScale = store1.scale || 1;
  };
  var onTouchMove = function onTouchMove2(event) {
    var touches = event.touches;
    var events = touches[0];
    var events2 = touches[1];
    if (!store.moveable) {
      return;
    }
    var store1 = store;
    if (events2) {
      var curDistance = getDistance({
        x: events.pageX,
        y: events.pageY
      }, {
        x: events2.pageX,
        y: events2.pageY
      });
      var curScale = curDistance / store1.oriDistance;
      store1.scale = store1.originScale * curScale;
      if (store1.scale > 3) {
        store1.scale = 3;
      }
      scaleNow();
    }
  };
  var onTouchEnd = function onTouchEnd2() {
    setLastTouchEndTime(/* @__PURE__ */ (/* @__PURE__ */ new Date()).getTime());
    var store1 = store;
    store1.moveable = false;
    if (store1.scale < 1.1 && store1.scale > 1 || store1.scale < 1) {
      store1.scale = 1;
      scaleNow();
    }
  };
  useEffect(function() {
    init();
  }, []);
  var init = function init2() {
    document.addEventListener("touchmove", onTouchMove);
    document.addEventListener("touchend", onTouchEnd);
    document.addEventListener("touchcancel", onTouchEnd);
  };
  useEffect(function() {
    setShowPop(visible);
  }, [visible]);
  useEffect(function() {
    setInnerNo(defaultValue || 1);
  }, [defaultValue]);
  useEffect(function() {
    setActive(innerNo);
  }, [innerNo]);
  var scaleNow = function scaleNow2() {
    if (ref.current) {
      ref.current.style.transform = "scale(".concat(store.scale, ")");
    }
  };
  var getDistance = function getDistance2(first, second) {
    return Math.hypot(Math.abs(second.x - first.x), Math.abs(second.y - first.y));
  };
  var slideChangeEnd = function slideChangeEnd2(page) {
    setActive(page + 1);
  };
  var onCloseInner = function onCloseInner2() {
    setShowPop(false);
    setActive(1);
    scaleNow();
    onClose2 && onClose2();
    setStore(_objectSpread(_objectSpread({}, store), {}, {
      scale: 1
    }));
  };
  var closeOnImg = function closeOnImg2() {
    if (closeOnContentClick) {
      onCloseInner();
    }
  };
  return React__default.createElement(Popup, {
    visible: showPop,
    className: "".concat(classPrefix, "-pop"),
    style: {
      width: "100%"
    },
    onClick: onCloseInner
  }, React__default.createElement("div", {
    className: classPrefix,
    ref,
    onClick: closeOnImg,
    onTouchStart
  }, React__default.createElement(Swiper, {
    autoPlay,
    className: "".concat(classPrefix, "-swiper"),
    loop: true,
    preventDefault: false,
    style: {
      display: showPop ? "block" : "none",
      "--nutui-indicator-color": indicatorColor
    },
    direction: "horizontal",
    onChange: function onChange2(page) {
      return slideChangeEnd(page);
    },
    defaultValue: innerNo && (innerNo > maxNo ? maxNo - 1 : innerNo - 1),
    indicator
  }, (videos && videos.length > 0 ? videos.map(function(item, index) {
    return React__default.createElement(SwiperItem, {
      key: index
    }, React__default.createElement(Video, {
      source: item.source,
      options: item.options
    }));
  }) : []).concat(images && images.length > 0 ? images.map(function(item, index) {
    return React__default.createElement(SwiperItem, {
      key: index
    }, React__default.createElement(Image, {
      src: item.src
    }));
  }) : []))), React__default.createElement("div", {
    className: "".concat(classPrefix, "-index")
  }, active, "/", (images ? images.length : 0) + (videos ? videos.length : 0)));
};
ImagePreview.defaultProps = defaultProps;
ImagePreview.displayName = "NutImagePreview";
export {
  ImagePreview as default
};
