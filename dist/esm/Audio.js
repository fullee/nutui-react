import _slicedToArray from "@babel/runtime/helpers/slicedToArray";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
var _excluded = ["className", "src", "style", "muted", "autoPlay", "loop", "preload", "type", "onBack", "onForward", "onPause", "onEnd", "onMute", "onCanPlay", "children"];
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
import React__default, { useState, useRef, useEffect } from "react";
import { Service } from "@nutui/icons-react";
import classNames from "classnames";
import Range from "./Range.js";
import Button from "./Button.js";
import { useConfig } from "./ConfigProvider.js";
import { C as ComponentDefaults } from "./typings.js";
var defaultProps = _objectSpread(_objectSpread({}, ComponentDefaults), {}, {
  src: "",
  muted: false,
  autoPlay: false,
  loop: false,
  preload: "auto",
  type: "progress",
  onBack: function onBack(e) {
  },
  onForward: function onForward(e) {
  },
  onPause: function onPause(e) {
  },
  onEnd: function onEnd(e) {
  },
  onMute: function onMute(e) {
  },
  onCanPlay: function onCanPlay(e) {
  }
});
var Audio = function Audio2(props) {
  var _useConfig = useConfig(), locale = _useConfig.locale;
  var _defaultProps$props = _objectSpread(_objectSpread({}, defaultProps), props), className = _defaultProps$props.className, src = _defaultProps$props.src, style = _defaultProps$props.style, muted = _defaultProps$props.muted, autoPlay = _defaultProps$props.autoPlay, loop = _defaultProps$props.loop, preload = _defaultProps$props.preload, type = _defaultProps$props.type, onBack2 = _defaultProps$props.onBack, onForward2 = _defaultProps$props.onForward, onPause2 = _defaultProps$props.onPause, onEnd2 = _defaultProps$props.onEnd, onMute2 = _defaultProps$props.onMute, onCanPlay2 = _defaultProps$props.onCanPlay, children = _defaultProps$props.children, rest = _objectWithoutProperties(_defaultProps$props, _excluded);
  var _useState = useState(false), _useState2 = _slicedToArray(_useState, 2), playing = _useState2[0], setPlaying = _useState2[1];
  var _useState3 = useState(0), _useState4 = _slicedToArray(_useState3, 2), percent = _useState4[0], setPercent = _useState4[1];
  var _useState5 = useState(false), _useState6 = _slicedToArray(_useState5, 2), isCanPlay = _useState6[0], setIsCanPlay = _useState6[1];
  var _useState7 = useState("00:00:00"), _useState8 = _slicedToArray(_useState7, 2), currentDuration = _useState8[0], setCurrentDuration = _useState8[1];
  var AudioRef = useRef(null);
  var statusRef = useRef({
    currentTime: 0,
    currentDuration: "00:00:00",
    percent: 0,
    duration: "00:00:00",
    second: 0,
    hanMuted: props.muted,
    playing: props.autoPlay,
    handPlaying: false
  });
  var classPrefix = "nut-audio";
  var warn = console.warn;
  var handleEnded = function handleEnded2(e) {
    if (props.loop) {
      warn(locale.audio.tips || "onPlayEnd事件在loop=false时才会触发");
    } else {
      props.onEnd && props.onEnd(e);
    }
  };
  function watch() {
    if (AudioRef && AudioRef.current) {
      var current = AudioRef.current;
      current.addEventListener("play", function() {
        setPlaying(true);
      });
    }
  }
  useEffect(function() {
    watch();
  }, []);
  useEffect(function() {
  }, [currentDuration]);
  var handleStatusChange = function handleStatusChange2() {
    setPlaying(!playing);
    if (playing) {
      AudioRef && AudioRef.current && AudioRef.current.pause();
    } else {
      AudioRef && AudioRef.current && AudioRef.current.play();
    }
  };
  var renderIcon = function renderIcon2() {
    return React__default.createElement("div", {
      className: "".concat(classPrefix, "__icon")
    }, React__default.createElement("div", {
      className: classNames("".concat(classPrefix, "__icon-box"), playing ? "".concat(classPrefix, "__icon-play") : "".concat(classPrefix, "__icon-stop")),
      onClick: handleStatusChange
    }, React__default.createElement(Service, {
      className: playing ? "nut-icon-loading" : ""
    })));
  };
  var handleBack = function handleBack2() {
    if (statusRef.current.currentTime > 0 && AudioRef.current) {
      statusRef.current.currentTime--;
      AudioRef.current.currentTime = statusRef.current.currentTime;
      props.onBack && props.onBack(AudioRef.current);
    }
  };
  var handleForward = function handleForward2() {
    if (AudioRef.current) {
      statusRef.current.currentTime++;
      AudioRef.current.currentTime = statusRef.current.currentTime;
      props.onForward && props.onForward(AudioRef.current);
    }
  };
  var handleMute = function handleMute2() {
    if (AudioRef.current) {
      AudioRef.current.muted = !AudioRef.current.muted;
      props.onMute && props.onMute(AudioRef.current);
    }
  };
  var handlePause = function handlePause2(e) {
    setPlaying(false);
    props.onPause && props.onPause(e);
  };
  var formatSeconds = function formatSeconds2(value) {
    if (!value) {
      return "00:00:00";
    }
    var time = parseInt(value);
    var hours = Math.floor(time / 3600);
    var minutes = Math.floor((time - hours * 3600) / 60);
    var seconds = time - hours * 3600 - minutes * 60;
    var result = "";
    result += "".concat("0".concat(hours.toString()).slice(-2), ":");
    result += "".concat("0".concat(minutes.toString()).slice(-2), ":");
    result += "0".concat(seconds.toString()).slice(-2);
    return result;
  };
  var renderProgerss = function renderProgerss2() {
    return React__default.createElement(React__default.Fragment, null, React__default.createElement("div", {
      className: "".concat(classPrefix, "__progress")
    }, React__default.createElement("div", {
      className: "time"
    }, currentDuration), React__default.createElement("div", {
      className: "".concat(classPrefix, "__progress-bar-wrapper")
    }, React__default.createElement(Range, {
      value: percent,
      onChange: function onChange(val) {
        return setPercent(val);
      },
      currentDescription: null,
      maxDescription: null,
      minDescription: null,
      "inactive-color": "#cccccc",
      "active-color": "#fa2c19"
    })), React__default.createElement("div", {
      className: "time"
    }, AudioRef.current ? formatSeconds("".concat(statusRef.current.second)) : "00:00:00")), React__default.createElement("div", {
      className: isCanPlay ? "custom-button-group" : "custom-button-group-disable"
    }, React__default.createElement(Button, {
      type: "primary",
      size: "small",
      className: "back",
      onClick: handleBack
    }, locale.audio.back || "快退"), React__default.createElement(Button, {
      type: "primary",
      size: "small",
      className: "start",
      onClick: handleStatusChange
    }, playing ? "".concat(locale.audio.pause || "暂停") : "".concat(locale.audio.start || "开始")), React__default.createElement(Button, {
      type: "primary",
      size: "small",
      onClick: handleForward
    }, locale.audio.forward || "快进"), React__default.createElement(Button, {
      type: AudioRef.current && AudioRef.current.muted ? "default" : "primary",
      size: "small",
      onClick: handleMute
    }, locale.audio.mute || "静音")));
  };
  var renderNone = function renderNone2() {
    return React__default.createElement("div", {
      className: "".concat(classPrefix, "__none-container"),
      onClick: handleStatusChange
    }, children);
  };
  var renderAudio = function renderAudio2() {
    switch (type) {
      case "icon":
        return renderIcon();
      case "progress":
        return renderProgerss();
      case "none":
        return renderNone();
      default:
        return null;
    }
  };
  var handleCanplay = function handleCanplay2(e) {
    setIsCanPlay(true);
    if (props.autoPlay && !playing) {
      AudioRef && AudioRef.current && AudioRef.current.play();
    }
    if (AudioRef.current) {
      statusRef.current.second = AudioRef.current.duration || 0;
      props.onCanPlay && props.onCanPlay(e);
    }
  };
  var onTimeupdate = function onTimeupdate2(e) {
    var time = parseInt(String(e.target.currentTime));
    var formated = formatSeconds("".concat(time));
    statusRef.current.currentDuration = formated;
    setPercent(time / statusRef.current.second * 100);
    setCurrentDuration(formated);
    statusRef.current.currentTime = time;
  };
  return React__default.createElement("div", _objectSpread({
    className: classNames(classPrefix, className),
    style
  }, rest), renderAudio(), React__default.createElement("audio", {
    className: "audioMain",
    controls: type === "controls",
    ref: AudioRef,
    src,
    muted,
    preload,
    loop,
    onPause: function onPause3(e) {
      return handlePause(e);
    },
    onEnded: function onEnded(e) {
      return handleEnded(e);
    },
    onCanPlay: function onCanPlay3(e) {
      return handleCanplay(e);
    },
    onTimeUpdate: function onTimeUpdate(e) {
      return onTimeupdate(e);
    }
  }, React__default.createElement("track", {
    kind: "captions"
  })));
};
Audio.defaultProps = defaultProps;
Audio.displayName = "NutAudio";
export {
  Audio as default
};
