import _slicedToArray from "@babel/runtime/helpers/slicedToArray";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
var _excluded = ["attract", "direction", "boundary", "children", "className", "style"];
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
import { useDrag } from "@use-gesture/react";
import { useSpring, animated } from "@react-spring/web";
import { C as ComponentDefaults } from "./typings.js";
var defaultProps = _objectSpread(_objectSpread({}, ComponentDefaults), {}, {
  attract: false,
  direction: void 0,
  boundary: {
    top: 0,
    left: 0,
    right: 0,
    bottom: 0
  }
});
var Drag = function Drag2(props) {
  var _defaultProps$props = _objectSpread(_objectSpread({}, defaultProps), props), attract = _defaultProps$props.attract, direction = _defaultProps$props.direction, boundary = _defaultProps$props.boundary, children = _defaultProps$props.children, className = _defaultProps$props.className, style = _defaultProps$props.style, reset = _objectWithoutProperties(_defaultProps$props, _excluded);
  var classPrefix = "nut-drag";
  var _useState = useState(boundary), _useState2 = _slicedToArray(_useState, 2), boundaryState = _useState2[0], setBoundaryState = _useState2[1];
  var myDrag = useRef(null);
  var _useSpring = useSpring(function() {
    return {
      x: 0,
      y: 0
    };
  }), _useSpring2 = _slicedToArray(_useSpring, 2), currstyle = _useSpring2[0], api = _useSpring2[1];
  var middleLine = useRef(0);
  var getInfo = function getInfo2() {
    var el = myDrag.current;
    if (el) {
      var offsetWidth = el.offsetWidth, offsetHeight = el.offsetHeight, offsetTop = el.offsetTop, offsetLeft = el.offsetLeft;
      var _document$documentEle = document.documentElement, clientWidth = _document$documentEle.clientWidth, clientHeight = _document$documentEle.clientHeight;
      var top = boundary.top, left = boundary.left, bottom = boundary.bottom, right = boundary.right;
      setBoundaryState({
        top: -offsetTop + top,
        left: -offsetLeft + left,
        bottom: clientHeight - offsetHeight - offsetTop - bottom,
        right: clientWidth - offsetWidth - offsetLeft - right
      });
      middleLine.current = clientWidth - offsetWidth - offsetLeft - (clientWidth - offsetWidth) / 2;
    }
  };
  var bind = useDrag(function(_ref) {
    var down = _ref.down, last = _ref.last, _ref$offset = _slicedToArray(_ref.offset, 2), x = _ref$offset[0], y = _ref$offset[1];
    api.start({
      x,
      y,
      immediate: down
    });
    if (last) {
      if (props.direction !== "y" && props.attract) {
        if (x < middleLine.current) {
          api.start({
            x: boundaryState.left,
            y,
            immediate: down
          });
        } else {
          api.start({
            x: boundaryState.right,
            y,
            immediate: down
          });
        }
      }
    }
  }, {
    from: function from() {
      return [currstyle.x.get(), currstyle.y.get()];
    },
    axis: direction,
    bounds: boundaryState
  });
  useEffect(function() {
    getInfo();
  }, [myDrag]);
  return React__default.createElement("div", _objectSpread(_objectSpread({
    style,
    className: "".concat(classPrefix, " ").concat(className)
  }, reset), {}, {
    ref: myDrag
  }), React__default.createElement(animated.div, _objectSpread({
    style: currstyle
  }, bind()), children));
};
Drag.defaultProps = defaultProps;
Drag.displayName = "NutDrag";
export {
  Drag as default
};
