import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
var _excluded = ["price", "symbol", "digits", "thousands", "position", "size", "line", "className", "style"];
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
import { C as ComponentDefaults } from "./typings.js";
var defaultProps = _objectSpread(_objectSpread({}, ComponentDefaults), {}, {
  price: 0,
  symbol: "&yen;",
  digits: 2,
  thousands: false,
  position: "before",
  size: "large",
  line: false
});
var Price = function Price2(props) {
  var _defaultProps$props = _objectSpread(_objectSpread({}, defaultProps), props), price = _defaultProps$props.price, symbol = _defaultProps$props.symbol, digits = _defaultProps$props.digits, thousands = _defaultProps$props.thousands, position = _defaultProps$props.position, size = _defaultProps$props.size, line = _defaultProps$props.line, className = _defaultProps$props.className, style = _defaultProps$props.style, rest = _objectWithoutProperties(_defaultProps$props, _excluded);
  var classPrefix = "nut-price";
  var showSymbol = function showSymbol2() {
    return {
      __html: symbol || ""
    };
  };
  var checkPoint = function checkPoint2(price2) {
    return String(price2).indexOf(".") > 0;
  };
  var formatThousands = function formatThousands2(num) {
    if (Number(num) === 0) {
      num = 0;
    }
    if (checkPoint(num)) {
      num = Number(num).toFixed(digits);
      num = typeof num.split(".") === "string" ? num.split(".") : num.split(".")[0];
    } else {
      num = num.toString();
    }
    if (thousands) {
      return (num || 0).toString().replace(/(\d)(?=(?:\d{3})+$)/g, "$1,");
    }
    return num;
  };
  var formatDecimal = function formatDecimal2(decimalNum) {
    if (Number(decimalNum) === 0) {
      decimalNum = 0;
    }
    if (checkPoint(decimalNum)) {
      decimalNum = Number(decimalNum).toFixed(digits);
      decimalNum = typeof decimalNum.split(".") === "string" ? 0 : decimalNum.split(".")[1] || 0;
    } else {
      decimalNum = 0;
    }
    var result = "0.".concat(decimalNum);
    var resultFixed = Number(result).toFixed(digits);
    return String(resultFixed).substring(2, resultFixed.length);
  };
  var renderSymbol = function renderSymbol2() {
    return React__default.createElement("div", {
      className: "".concat(classPrefix, "__symbol ").concat(classPrefix, "__symbol-").concat(size),
      dangerouslySetInnerHTML: showSymbol()
    });
  };
  return React__default.createElement("div", _objectSpread({
    className: "".concat(classPrefix, " ").concat(className, " ").concat(line ? "".concat(classPrefix, "--line") : ""),
    style
  }, rest), symbol && position === "before" ? renderSymbol() : null, React__default.createElement("div", {
    className: "".concat(classPrefix, "__integer ").concat(classPrefix, "__integer-").concat(size)
  }, formatThousands(price)), digits !== 0 ? React__default.createElement("div", {
    className: "".concat(classPrefix, "__decimal ").concat(classPrefix, "__decimal-").concat(size)
  }, ".") : null, React__default.createElement("div", {
    className: "".concat(classPrefix, "__decimal ").concat(classPrefix, "__decimal-").concat(size)
  }, formatDecimal(price)), symbol && position === "after" ? renderSymbol() : null);
};
Price.defaultProps = defaultProps;
Price.displayName = "NutPrice";
export {
  Price as default
};
