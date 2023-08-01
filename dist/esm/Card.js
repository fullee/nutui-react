import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
var _excluded = ["className", "style", "src", "title", "price", "vipPrice", "shopDescription", "delivery", "shopName", "tag", "priceTag", "description", "extra"];
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
import React__default from "react";
import classNames from "classnames";
import Price from "./Price.js";
import Tag from "./Tag.js";
import { C as ComponentDefaults } from "./typings.js";
var defaultProps = _objectSpread(_objectSpread({}, ComponentDefaults), {}, {
  src: "",
  title: "",
  price: "",
  vipPrice: "",
  shopDescription: "",
  delivery: "",
  shopName: "",
  description: "",
  tag: "",
  priceTag: "",
  extra: ""
});
var Card = function Card2(props) {
  var _defaultProps$props = _objectSpread(_objectSpread({}, defaultProps), props), className = _defaultProps$props.className, style = _defaultProps$props.style, src = _defaultProps$props.src, title = _defaultProps$props.title, price = _defaultProps$props.price, vipPrice = _defaultProps$props.vipPrice, shopDescription = _defaultProps$props.shopDescription, delivery = _defaultProps$props.delivery, shopName = _defaultProps$props.shopName, tag = _defaultProps$props.tag, priceTag = _defaultProps$props.priceTag, description = _defaultProps$props.description, extra = _defaultProps$props.extra, rest = _objectWithoutProperties(_defaultProps$props, _excluded);
  var classPrefix = "nut-card";
  return React__default.createElement("div", _objectSpread({
    className: classNames(classPrefix, className),
    style
  }, rest), React__default.createElement("div", {
    className: "".concat(classPrefix, "__left")
  }, React__default.createElement("img", {
    src,
    alt: ""
  })), React__default.createElement("div", {
    className: "".concat(classPrefix, "__right")
  }, React__default.createElement("div", {
    className: "".concat(classPrefix, "__right-title")
  }, title), description, React__default.createElement("div", {
    className: "".concat(classPrefix, "right-price")
  }, React__default.createElement(Price, {
    size: "normal",
    price
  }), priceTag || React__default.createElement(Price, {
    size: "normal",
    className: "".concat(classPrefix, "right-price-origin"),
    price: vipPrice
  })), React__default.createElement("div", {
    className: "".concat(classPrefix, "right-other")
  }, tag || React__default.createElement(React__default.Fragment, null, React__default.createElement(Tag, {
    type: "danger"
  }, shopDescription), React__default.createElement(Tag, {
    plain: true
  }, delivery))), React__default.createElement("div", {
    className: "".concat(classPrefix, "right-shop")
  }, React__default.createElement("div", {
    className: "".concat(classPrefix, "right-shop-name")
  }, shopName), extra)));
};
Card.defaultProps = defaultProps;
Card.displayName = "NutCard";
export {
  Card as default
};
