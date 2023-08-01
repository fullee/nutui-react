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
import React__default, { useContext } from "react";
import classNames from "classnames";
import { D as DataContext } from "./context4.js";
var defaultProps = {
  direction: "horizontal"
};
var SwiperItem = React__default.forwardRef(function(props, ref) {
  var classPrefix = "nut-swiper-item";
  var _props = _objectSpread(_objectSpread({}, defaultProps), props);
  var className = _props.className, style = _props.style, children = _props.children, direction = _props.direction, size = _props.size;
  var parent = useContext(DataContext);
  var classes = classNames(classPrefix, className);
  var getStyle = function getStyle2() {
    var style2 = {};
    var _direction = (parent === null || parent === void 0 ? void 0 : parent.propSwiper.direction) || direction;
    var _size = (parent === null || parent === void 0 ? void 0 : parent.size) || size;
    if (_size) {
      style2[_direction === "horizontal" ? "width" : "height"] = "".concat(_size, "px");
    }
    return style2;
  };
  return React__default.createElement("div", {
    className: classes,
    style: _objectSpread(_objectSpread({}, style), getStyle())
  }, children);
});
SwiperItem.defaultProps = defaultProps;
SwiperItem.displayName = "NutSwiperItem";
export {
  SwiperItem as default
};
