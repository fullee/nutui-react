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
import React__default, { useState, useEffect } from "react";
import classNames from "classnames";
import { useConfig } from "./ConfigProvider.js";
import { C as ComponentDefaults } from "./typings.js";
var defaultProps = _objectSpread(_objectSpread({}, ComponentDefaults), {}, {
  content: "",
  fullPage: true,
  zIndex: 2e3,
  gapX: 24,
  gapY: 48,
  width: 120,
  height: 64,
  image: "",
  imageWidth: 120,
  imageHeight: 64,
  rotate: -22,
  color: "rgba(0,0,0,.15)",
  fontStyle: "normal",
  fontWeight: "normal",
  fontSize: 14
});
var WaterMark = function WaterMark2(props) {
  var _useConfig = useConfig(), locale = _useConfig.locale;
  var _defaultProps$props = _objectSpread(_objectSpread({}, defaultProps), props), content = _defaultProps$props.content, fullPage = _defaultProps$props.fullPage, zIndex = _defaultProps$props.zIndex, className = _defaultProps$props.className, gapX = _defaultProps$props.gapX, gapY = _defaultProps$props.gapY, width = _defaultProps$props.width, height = _defaultProps$props.height, image = _defaultProps$props.image, imageWidth = _defaultProps$props.imageWidth, imageHeight = _defaultProps$props.imageHeight, rotate = _defaultProps$props.rotate, color = _defaultProps$props.color, fontStyle = _defaultProps$props.fontStyle, fontFamily = _defaultProps$props.fontFamily, fontWeight = _defaultProps$props.fontWeight, fontSize = _defaultProps$props.fontSize, style = _defaultProps$props.style;
  var _useState = useState(""), _useState2 = _slicedToArray(_useState, 2), base64Url = _useState2[0], setBase64Url = _useState2[1];
  var classPrefix = "nut-watermark";
  var classes = classNames(classPrefix, _defineProperty({}, "".concat(classPrefix, "-full-page"), fullPage));
  var cls = classNames(classes, className);
  useEffect(function() {
    init();
  }, []);
  var init = function init2() {
    var canvas = document.createElement("canvas");
    var ratio = window.devicePixelRatio;
    var ctx = canvas.getContext("2d");
    var canvasWidth = "".concat((gapX + width) * ratio, "px");
    var canvasHeight = "".concat((gapY + height) * ratio, "px");
    var markWidth = width * ratio;
    var markHeight = height * ratio;
    canvas.setAttribute("width", canvasWidth);
    canvas.setAttribute("height", canvasHeight);
    if (ctx) {
      if (image) {
        ctx.translate(markWidth / 2, markHeight / 2);
        ctx.rotate(Math.PI / 180 * Number(rotate));
        var img = new Image();
        img.crossOrigin = "anonymous";
        img.referrerPolicy = "no-referrer";
        img.src = image;
        img.onload = function() {
          ctx.drawImage(img, -imageWidth * ratio / 2, -imageHeight * ratio / 2, imageWidth * ratio, imageHeight * ratio);
          ctx.restore();
          setBase64Url(canvas.toDataURL());
        };
      } else if (content) {
        ctx.textBaseline = "middle";
        ctx.textAlign = "center";
        ctx.translate(markWidth / 2, markHeight / 2);
        ctx.rotate(Math.PI / 180 * Number(rotate));
        var markSize = Number(fontSize) * ratio;
        ctx.font = "".concat(fontStyle, " normal ").concat(fontWeight, " ").concat(markSize, "px/").concat(markHeight, "px ").concat(fontFamily);
        ctx.fillStyle = color;
        ctx.fillText(content, 0, 0);
        ctx.restore();
        setBase64Url(canvas.toDataURL());
      }
    } else {
      throw new Error(locale.watermark.errorCanvasTips);
    }
  };
  return React__default.createElement("div", {
    className: cls,
    style: _objectSpread({
      zIndex,
      backgroundSize: "".concat(gapX + width, "px"),
      backgroundImage: "url('".concat(base64Url, "')")
    }, style)
  });
};
WaterMark.defaultProps = defaultProps;
WaterMark.displayName = "NutWaterMark";
export {
  WaterMark as default
};
