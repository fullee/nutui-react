import _slicedToArray from "@babel/runtime/helpers/slicedToArray";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
var _excluded = ["image", "imageSize", "description", "children", "className", "status"];
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
import { useConfig } from "./ConfigProvider.js";
import { C as ComponentDefaults } from "./typings.js";
var defaultStatus = {
  empty: "https://static-ftcms.jd.com/p/files/61a9e3183985005b3958672b.png",
  error: "https://ftcms.jd.com/p/files/61a9e33ee7dcdbcc0ce62736.png",
  network: "https://static-ftcms.jd.com/p/files/61a9e31de7dcdbcc0ce62734.png"
};
var defaultProps = _objectSpread(_objectSpread({}, ComponentDefaults), {}, {
  description: "",
  imageSize: "",
  status: "empty"
});
var classPrefix = "nut-empty";
var Empty = function Empty2(props) {
  var _useConfig = useConfig(), locale = _useConfig.locale;
  var _defaultProps$props = _objectSpread(_objectSpread({}, defaultProps), props), image = _defaultProps$props.image, imageSize = _defaultProps$props.imageSize, description = _defaultProps$props.description, children = _defaultProps$props.children, className = _defaultProps$props.className, status = _defaultProps$props.status, rest = _objectWithoutProperties(_defaultProps$props, _excluded);
  var _useState = useState({}), _useState2 = _slicedToArray(_useState, 2), imgStyle = _useState2[0], setImgStyle = _useState2[1];
  var imageUrl = image || defaultStatus[status];
  var imageNode = typeof imageUrl === "string" ? React__default.createElement("img", {
    className: "img",
    src: imageUrl,
    alt: "empty"
  }) : imageUrl;
  useEffect(function() {
    setImgStyle(function() {
      if (!imageSize) {
        return {};
      }
      if (typeof imageSize === "number") {
        return {
          width: "".concat(imageSize, "px"),
          height: "".concat(imageSize, "px")
        };
      }
      return {
        width: imageSize,
        height: imageSize
      };
    });
  }, [imageSize]);
  return React__default.createElement("div", _objectSpread({
    className: "".concat(classPrefix, " ").concat(className)
  }, rest), React__default.createElement(React__default.Fragment, null, React__default.createElement("div", {
    className: "".concat(classPrefix, "__image"),
    style: imgStyle
  }, imageNode), typeof description === "string" ? React__default.createElement("div", {
    className: "".concat(classPrefix, "__description")
  }, description || locale.noData) : description, children));
};
Empty.defaultProps = defaultProps;
Empty.displayName = "NutEmpty";
export {
  Empty as default
};
