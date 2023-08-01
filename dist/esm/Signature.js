import _slicedToArray from "@babel/runtime/helpers/slicedToArray";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
var _excluded = ["type", "lineWidth", "strokeStyle", "unsupported", "className", "style", "onConfirm", "onClear"];
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
import React__default, { useRef, useState, useEffect, useImperativeHandle } from "react";
import { useConfig } from "./ConfigProvider.js";
import { C as ComponentDefaults } from "./typings.js";
var defaultProps = _objectSpread(_objectSpread({}, ComponentDefaults), {}, {
  type: "png",
  lineWidth: 2,
  strokeStyle: "#000",
  unsupported: ""
});
var InternalSignature = function InternalSignature2(props, ref) {
  var _useConfig = useConfig(), locale = _useConfig.locale;
  var _defaultProps$props = _objectSpread(_objectSpread({}, defaultProps), props), type = _defaultProps$props.type, lineWidth = _defaultProps$props.lineWidth, strokeStyle = _defaultProps$props.strokeStyle, unsupported = _defaultProps$props.unsupported, className = _defaultProps$props.className, style = _defaultProps$props.style, onConfirm = _defaultProps$props.onConfirm, onClear = _defaultProps$props.onClear, rest = _objectWithoutProperties(_defaultProps$props, _excluded);
  var classPrefix = "nut-signature";
  var canvasRef = useRef(null);
  var wrapRef = useRef(null);
  var _useState = useState(0), _useState2 = _slicedToArray(_useState, 2), canvasHeight = _useState2[0], setCanvasHeight = _useState2[1];
  var _useState3 = useState(0), _useState4 = _slicedToArray(_useState3, 2), canvasWidth = _useState4[0], setCanvasWidth = _useState4[1];
  var ctx = useRef(null);
  var isCanvasSupported = function isCanvasSupported2() {
    var elem = document.createElement("canvas");
    return !!(elem.getContext && elem.getContext("2d"));
  };
  var isSupportTouch = "ontouchstart" in window;
  var events = isSupportTouch ? ["touchstart", "touchmove", "touchend", "touchleave"] : ["mousedown", "mousemove", "mouseup", "mouseleave"];
  useEffect(function() {
    if (isCanvasSupported() && canvasRef.current && wrapRef.current) {
      ctx.current = canvasRef.current.getContext("2d");
      setCanvasWidth(wrapRef.current.offsetWidth);
      setCanvasHeight(wrapRef.current.offsetHeight);
      addEvent();
    }
  }, []);
  var startEventHandler = function startEventHandler2(event) {
    event.preventDefault();
    if (ctx.current && canvasRef.current) {
      ctx.current.beginPath();
      ctx.current.lineWidth = lineWidth;
      ctx.current.strokeStyle = strokeStyle;
      canvasRef.current.addEventListener(events[1], moveEventHandler, false);
      canvasRef.current.addEventListener(events[2], endEventHandler, false);
      canvasRef.current.addEventListener(events[3], leaveEventHandler, false);
    }
  };
  var addEvent = function addEvent2() {
    if (canvasRef.current) {
      canvasRef.current.addEventListener(events[0], startEventHandler, false);
    }
  };
  var moveEventHandler = function moveEventHandler2(event) {
    event.preventDefault();
    var evt = isSupportTouch ? event.touches[0] : event;
    if (canvasRef.current && ctx.current) {
      var coverPos = canvasRef.current.getBoundingClientRect();
      var mouseX = evt.clientX - coverPos.left;
      var mouseY = evt.clientY - coverPos.top;
      ctx.current.lineTo(mouseX, mouseY);
      ctx.current.stroke();
    }
  };
  var endEventHandler = function endEventHandler2(event) {
    event.preventDefault();
    if (canvasRef.current) {
      canvasRef.current.removeEventListener(events[1], moveEventHandler, false);
      canvasRef.current.removeEventListener(events[2], endEventHandler2, false);
    }
  };
  var leaveEventHandler = function leaveEventHandler2(event) {
    event.preventDefault();
    if (canvasRef.current) {
      canvasRef.current.removeEventListener(events[1], moveEventHandler, false);
      canvasRef.current.removeEventListener(events[2], endEventHandler, false);
    }
  };
  var handleClearBtn = function handleClearBtn2() {
    if (canvasRef.current && ctx.current) {
      canvasRef.current.addEventListener(events[2], endEventHandler, false);
      ctx.current.clearRect(0, 0, canvasWidth, canvasHeight);
      ctx.current.closePath();
    }
    onClear && onClear();
  };
  var onSave = function onSave2(canvas) {
    var dataurl;
    switch (type) {
      case "png":
        dataurl = canvas.toDataURL("image/png");
        break;
      case "jpg":
        dataurl = canvas.toDataURL("image/jpeg", 0.8);
        break;
      default:
        dataurl = canvas.toDataURL("image/png");
    }
    handleClearBtn();
    onConfirm && onConfirm(canvas, dataurl);
  };
  useImperativeHandle(ref, function() {
    return {
      confirm: function confirm() {
        onSave(canvasRef.current);
      },
      clear: function clear() {
        handleClearBtn();
      }
    };
  });
  return React__default.createElement("div", _objectSpread({
    className: "".concat(classPrefix, " ").concat(className),
    style
  }, rest), React__default.createElement("div", {
    className: "".concat(classPrefix, "__inner"),
    ref: wrapRef
  }, isCanvasSupported() ? React__default.createElement("canvas", {
    ref: canvasRef,
    height: canvasHeight,
    width: canvasWidth
  }) : React__default.createElement(React__default.Fragment, null, unsupported || React__default.createElement("p", {
    className: "".concat(classPrefix, "__unsupport")
  }, locale.signature.unsupported))));
};
var Signature = React__default.forwardRef(InternalSignature);
Signature.defaultProps = defaultProps;
Signature.displayName = "NutSignature";
export {
  Signature as default
};
