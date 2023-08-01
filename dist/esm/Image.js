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
import React__default, { useState, useRef, useEffect, useCallback } from "react";
import { ImageError, Image as Image$1 } from "@nutui/icons-react";
import classNames from "classnames";
import { C as ComponentDefaults } from "./typings.js";
import { p as pxCheck } from "./px-check.js";
var defaultProps = _objectSpread(_objectSpread({}, ComponentDefaults), {}, {
  fit: "fill",
  position: "center",
  alt: "",
  width: "center",
  height: "",
  error: true,
  loading: true,
  lazy: false
});
var classPrefix = "nut-image";
var Image = function Image2(props) {
  var _defaultProps$props = _objectSpread(_objectSpread({}, defaultProps), props), className = _defaultProps$props.className, style = _defaultProps$props.style, src = _defaultProps$props.src, fit = _defaultProps$props.fit, position = _defaultProps$props.position, alt = _defaultProps$props.alt, width = _defaultProps$props.width, height = _defaultProps$props.height, radius = _defaultProps$props.radius, error = _defaultProps$props.error, loading = _defaultProps$props.loading, lazy = _defaultProps$props.lazy, onClick = _defaultProps$props.onClick, onLoad = _defaultProps$props.onLoad, onError = _defaultProps$props.onError;
  var _useState = useState(true), _useState2 = _slicedToArray(_useState, 2), innerLoading = _useState2[0], setInnerLoading = _useState2[1];
  var _useState3 = useState(false), _useState4 = _slicedToArray(_useState3, 2), isError = _useState4[0], setIsError = _useState4[1];
  var imgRef = useRef(null);
  useEffect(function() {
    if (imgRef.current && imgRef.current.complete && imgRef.current.naturalHeight !== 0) {
      setInnerLoading(false);
    } else if (src) {
      setInnerLoading(true);
    }
  }, [src]);
  var handleLoad = function handleLoad2() {
    setIsError(false);
    setInnerLoading(false);
    onLoad && onLoad();
  };
  var handleError = function handleError2() {
    setIsError(true);
    setInnerLoading(false);
    onError && onError();
  };
  var containerStyle = {
    height: height ? pxCheck(height) : "",
    width: width ? pxCheck(width) : "",
    overflow: radius !== void 0 && radius !== null ? "hidden" : "",
    borderRadius: radius !== void 0 && radius !== null ? pxCheck(radius) : ""
  };
  var imgStyle = _objectSpread({
    objectFit: fit,
    objectPosition: position
  }, style);
  var observer = useRef(null);
  var initObserver = function initObserver2() {
    var options = {
      threshold: [0],
      rootMargin: "0px"
      // 对视口进行收缩和扩张
    };
    observer.current = new IntersectionObserver(function(entires, self) {
      entires.forEach(function(item) {
        if (item.isIntersecting) {
          setTimeout(function() {
            var img = item.target;
            if (img.dataset.src) {
              img.src = img.dataset.src;
              img.removeAttribute("data-src");
            }
            resetObserver();
          }, 300);
        }
      });
    }, options);
    observer.current.observe(imgRef.current);
  };
  var resetObserver = function resetObserver2() {
    observer.current.disconnect && observer.current.disconnect();
  };
  useEffect(function() {
    lazy && initObserver();
    return function() {
      lazy && resetObserver();
    };
  }, [lazy]);
  var imageClick = function imageClick2(event) {
    onClick && onClick(event);
  };
  var renderErrorImg = useCallback(function() {
    if (!isError)
      return null;
    if (typeof error === "boolean" && error === true && !innerLoading) {
      return React__default.createElement("div", {
        className: "nut-img-error"
      }, React__default.createElement(ImageError, null));
    }
    if (React__default.isValidElement(error) && !innerLoading) {
      return React__default.createElement("div", {
        className: "nut-img-error"
      }, error);
    }
    return null;
  }, [error, isError]);
  var renderLoading = useCallback(function() {
    if (!loading)
      return null;
    if (typeof loading === "boolean" && loading === true && innerLoading) {
      return React__default.createElement("div", {
        className: "nut-img-loading"
      }, React__default.createElement(Image$1, null));
    }
    if (React__default.isValidElement(loading) && innerLoading) {
      return React__default.createElement("div", {
        className: "nut-img-loading"
      }, loading);
    }
    return null;
  }, [loading, innerLoading]);
  return React__default.createElement("div", {
    className: classNames(classPrefix, className),
    style: containerStyle,
    onClick: function onClick2(e) {
      imageClick(e);
    }
  }, lazy ? React__default.createElement("img", {
    ref: imgRef,
    className: "nut-img lazyload",
    style: imgStyle,
    "data-src": src,
    alt,
    loading: "lazy",
    onLoad: handleLoad,
    onError: handleError
  }) : React__default.createElement("img", {
    ref: imgRef,
    className: "nut-img",
    style: imgStyle,
    src,
    alt,
    onLoad: handleLoad,
    onError: handleError
  }), renderLoading(), renderErrorImg());
};
Image.defaultProps = defaultProps;
Image.displayName = "NutImage";
export {
  Image as default
};
