import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
var _excluded = ["children", "source", "options", "className", "onPlay", "onPause", "onPlayEnd"];
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
import React__default, { useRef, useEffect } from "react";
import classNames from "classnames";
import { C as ComponentDefaults } from "./typings.js";
var defaultProps = _objectSpread(_objectSpread({}, ComponentDefaults), {}, {
  source: {
    type: {},
    src: ""
  },
  options: {
    controls: true,
    muted: false,
    autoplay: false,
    poster: "",
    playsinline: false,
    loop: false
  }
});
var classPrefix = "nut-video";
var Video = function Video2(props) {
  var _defaultProps$props = _objectSpread(_objectSpread({}, defaultProps), props), children = _defaultProps$props.children, source = _defaultProps$props.source, options = _defaultProps$props.options, className = _defaultProps$props.className, onPlay = _defaultProps$props.onPlay, onPause = _defaultProps$props.onPause, onPlayEnd = _defaultProps$props.onPlayEnd, restProps = _objectWithoutProperties(_defaultProps$props, _excluded);
  var rootRef = useRef(null);
  var classes = classNames(className, classPrefix);
  useEffect(function() {
    init();
  }, []);
  var init = function init2() {
    if (rootRef.current) {
      var videoRef = rootRef.current;
      if (options.autoplay) {
        setTimeout(function() {
          videoRef.play();
        }, 200);
      }
      if (options.playsinline) {
        videoRef.setAttribute("playsinline", String(options.playsinline));
        videoRef.setAttribute("webkit-playsinline", String(options.playsinline));
        videoRef.setAttribute("x5-video-player-type", "h5-page");
        videoRef.setAttribute("x5-video-player-fullscreen", "false");
      }
      videoRef.addEventListener("play", function() {
        onPlay && onPlay(videoRef);
      });
      videoRef.addEventListener("pause", function() {
        onPause && onPause(videoRef);
      });
      videoRef.addEventListener("ended", function() {
        videoRef.currentTime = 0;
        onPlayEnd && onPlayEnd(videoRef);
      });
    }
  };
  return React__default.createElement("div", _objectSpread({
    className: classes
  }, restProps), React__default.createElement("video", {
    className: "nut-video-player",
    muted: options.muted,
    autoPlay: options.autoplay,
    loop: options.loop,
    poster: options.poster,
    controls: options.controls,
    ref: rootRef,
    src: source.src
  }, React__default.createElement("source", {
    src: source.src,
    type: source.type
  }), React__default.createElement("track", {
    kind: "captions"
  })));
};
Video.defaultProps = defaultProps;
Video.displayName = "NutVideo";
export {
  Video as default
};
