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
import React__default, { forwardRef, useRef, useState, useCallback, useImperativeHandle, useEffect } from "react";
import classNames from "classnames";
import { u as useTouch } from "./use-touch.js";
import { g as getRect } from "./use-client-rect.js";
function preventDefault(event, isStopPropagation) {
  if (typeof event.cancelable !== "boolean" || event.cancelable) {
    event.preventDefault();
  }
  if (isStopPropagation) {
    event.stopPropagation();
  }
}
var defaultProps = {
  name: ""
};
var Swipe = forwardRef(function(props, instanceRef) {
  var classPrefix = "nut-swipe";
  var touch = useTouch();
  var _defaultProps$props = _objectSpread(_objectSpread({}, defaultProps), props), children = _defaultProps$props.children, className = _defaultProps$props.className, style = _defaultProps$props.style;
  var root = useRef();
  var opened = useRef(false);
  var lockClick = useRef(false);
  var startOffset = useRef(0);
  var _useState = useState({
    offset: 0,
    dragging: false
  }), _useState2 = _slicedToArray(_useState, 2), state = _useState2[0], setState = _useState2[1];
  var _useState3 = useState({
    left: 0,
    right: 0
  }), _useState4 = _slicedToArray(_useState3, 2), actionWidth = _useState4[0], setActionWidth = _useState4[1];
  var wrapperStyle = {
    transform: "translate3d(".concat(state.offset, "px, 0, 0)"),
    transitionDuration: state.dragging ? "0s" : ".6s"
  };
  var leftWidth = actionWidth.left;
  var rightWidth = actionWidth.right;
  var _onTouchStart = function onTouchStart(event) {
    if (!props.disabled) {
      startOffset.current = state.offset;
      touch.start(event);
      props.onTouchStart && props.onTouchStart(event);
    }
  };
  var _onTouchMove = function onTouchMove(event) {
    if (props.disabled) {
      return;
    }
    touch.move(event);
    props.onTouchMove && props.onTouchMove(event);
    if (touch.isHorizontal()) {
      lockClick.current = true;
      var newState = _objectSpread(_objectSpread({}, state), {}, {
        dragging: true
      });
      var isEdge = !opened || touch.deltaX * startOffset.current < 0;
      if (isEdge) {
        preventDefault(event, true);
      }
      newState.offset = rangeCalculation(touch.deltaX + startOffset.current, -rightWidth, leftWidth);
      setState(newState);
    }
  };
  var _onTouchEnd = function onTouchEnd(event) {
    if (state.dragging) {
      setState(function(v) {
        return _objectSpread(_objectSpread({}, v), {}, {
          dragging: false
        });
      });
      toggle(state.offset > 0 ? "left" : "right");
      setTimeout(function() {
        lockClick.current = false;
      }, 0);
      props.onTouchEnd && props.onTouchEnd(event);
    }
  };
  var toggle = function toggle2(side) {
    var offset = Math.abs(state.offset);
    var base = 0.3;
    var baseNum = opened ? 1 - base : base;
    var width = side === "left" ? leftWidth : rightWidth;
    if (width && offset > Number(width) * baseNum) {
      open(side);
    } else {
      _close(side);
    }
  };
  var open = function open2(side) {
    var _props$onOpen;
    opened.current = true;
    var offset = side === "left" ? leftWidth : -rightWidth;
    var name = props.name;
    (_props$onOpen = props.onOpen) === null || _props$onOpen === void 0 ? void 0 : _props$onOpen.call(props, {
      name,
      position: side
    });
    setState(function(v) {
      return _objectSpread(_objectSpread({}, v), {}, {
        offset: Number(offset) || 0
      });
    });
  };
  var _close = function close(position) {
    if (opened.current) {
      var _props$onClose;
      opened.current = false;
      (_props$onClose = props.onClose) === null || _props$onClose === void 0 ? void 0 : _props$onClose.call(props, {
        name: props.name,
        position: position || "left"
      });
    }
    setState(function(v) {
      return _objectSpread(_objectSpread({}, v), {}, {
        offset: 0
      });
    });
  };
  var rangeCalculation = function rangeCalculation2(num, min, max) {
    return Math.min(Math.max(Number(num), Number(min)), Number(max));
  };
  var getNodeWidth = function getNodeWidth2(node) {
    if (node) {
      var ele = getRect(node);
      return ele.width;
    }
    return 0;
  };
  var leftRef = useCallback(function(node) {
    if (node !== null) {
      setActionWidth(function(v) {
        return _objectSpread(_objectSpread({}, v), {}, {
          left: getNodeWidth(node)
        });
      });
    }
  }, [props.leftAction]);
  var rightRef = useCallback(function(node) {
    if (node !== null) {
      setActionWidth(function(v) {
        return _objectSpread(_objectSpread({}, v), {}, {
          right: getNodeWidth(node)
        });
      });
    }
  }, [props.rightAction]);
  var renderActionContent = function renderActionContent2(side, measuredRef) {
    if (props["".concat(side, "Action")]) {
      return React__default.createElement("div", {
        ref: measuredRef,
        className: "".concat(classPrefix, "__").concat(side),
        onClick: function onClick(e) {
          return handleOperate(e, side);
        }
      }, props["".concat(side, "Action")]);
    }
    return null;
  };
  var handleOperate = function handleOperate2(event, position) {
    event.stopPropagation();
    if (props.beforeClose) {
      props.beforeClose(position);
    } else {
      props.onActionClick && props.onActionClick(event, position);
    }
  };
  useImperativeHandle(instanceRef, function() {
    return {
      open,
      close: function close() {
        return _close();
      }
    };
  });
  useEffect(function() {
    var handler = function handler2(event) {
      var targets = [root];
      if (targets.some(function(targetItem) {
        var targetElement = targetItem.current || targetItem;
        return !targetElement || (targetElement === null || targetElement === void 0 ? void 0 : targetElement.contains(event.target));
      })) {
        return;
      }
      _close();
    };
    document.addEventListener("touchstart", handler);
    return function() {
      document.removeEventListener("touchstart", handler);
    };
  }, []);
  return React__default.createElement("div", {
    ref: root,
    className: classNames(classPrefix, className),
    onTouchStart: function onTouchStart(e) {
      return _onTouchStart(e);
    },
    onTouchMove: function onTouchMove(e) {
      return _onTouchMove(e);
    },
    onTouchEnd: function onTouchEnd(e) {
      return _onTouchEnd(e);
    },
    style
  }, React__default.createElement("div", {
    className: "".concat(classPrefix, "__wrapper"),
    style: wrapperStyle
  }, renderActionContent("left", leftRef), children, renderActionContent("right", rightRef)));
});
Swipe.defaultProps = defaultProps;
Swipe.displayName = "NutSwipe";
export {
  Swipe as default
};
