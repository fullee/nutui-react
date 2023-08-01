import _slicedToArray from "@babel/runtime/helpers/slicedToArray";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
var _excluded = ["value", "mode", "prev", "next", "total", "pageSize", "itemSize", "onChange", "ellipse", "itemRender", "defaultValue", "className"];
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
import React__default, { useMemo } from "react";
import classNames from "classnames";
import { useConfig } from "./ConfigProvider.js";
import { u as usePropsValue } from "./use-props-value.js";
import { C as ComponentDefaults } from "./typings.js";
var defaultProps = _objectSpread(_objectSpread({}, ComponentDefaults), {}, {
  defaultValue: 1,
  mode: "multi",
  prev: null,
  next: null,
  total: 50,
  pageSize: 10,
  itemSize: 5,
  ellipse: false
});
var Pagination = function Pagination2(props) {
  var _useConfig = useConfig(), locale = _useConfig.locale;
  var _defaultProps$props = _objectSpread(_objectSpread({}, defaultProps), props), value = _defaultProps$props.value, mode = _defaultProps$props.mode, prev = _defaultProps$props.prev, next = _defaultProps$props.next, total = _defaultProps$props.total, pageSize = _defaultProps$props.pageSize, itemSize = _defaultProps$props.itemSize, onChange = _defaultProps$props.onChange, ellipse = _defaultProps$props.ellipse, itemRender = _defaultProps$props.itemRender, defaultValue = _defaultProps$props.defaultValue, className = _defaultProps$props.className, rest = _objectWithoutProperties(_defaultProps$props, _excluded);
  var classPrefix = "nut-pagination";
  var _usePropsValue = usePropsValue({
    value,
    defaultValue,
    finalValue: 1,
    onChange
  }), _usePropsValue2 = _slicedToArray(_usePropsValue, 2), currentPage = _usePropsValue2[0], setCurrentPage = _usePropsValue2[1];
  var pageCount = useMemo(function() {
    var num = Math.ceil(total / pageSize);
    return Number.isNaN(num) ? 1 : Math.max(1, num);
  }, [total, pageSize]);
  var pages = useMemo(function() {
    var items = [];
    var startPage = 1;
    var endPage = pageCount;
    var partialShow = pageCount > itemSize;
    if (partialShow) {
      startPage = Math.max(currentPage - Math.floor(itemSize / 2), 1);
      endPage = startPage + itemSize - 1;
      if (endPage > pageCount) {
        endPage = pageCount;
        startPage = endPage - itemSize + 1;
      }
    }
    for (var i = startPage; i <= endPage; i++) {
      items.push({
        number: i,
        text: i
      });
    }
    if (partialShow && itemSize > 0 && ellipse) {
      if (startPage > 1) {
        items.unshift({
          number: startPage - 1,
          text: "..."
        });
      }
      if (endPage < pageCount) {
        items.push({
          number: endPage + 1,
          text: "..."
        });
      }
    }
    return items;
  }, [currentPage, itemSize, pageCount]);
  var handleSelectPage = function handleSelectPage2(curPage) {
    if (curPage > pageCount || curPage < 1)
      return;
    setCurrentPage(curPage);
  };
  return React__default.createElement("div", _objectSpread({
    className: classNames(classPrefix, className)
  }, rest), React__default.createElement("div", {
    className: classNames("".concat(classPrefix, "__prev"), mode === "multi" ? "" : "simple-border", currentPage === 1 ? "disabled" : ""),
    onClick: function onClick(e) {
      return handleSelectPage(currentPage - 1);
    }
  }, prev || locale.pagination.prev), mode === "multi" && React__default.createElement("div", {
    className: "".concat(classPrefix, "__contain")
  }, pages.map(function(item, index) {
    return React__default.createElement("div", {
      key: "".concat(index, "pagination"),
      className: classNames("".concat(classPrefix, "__item"), {
        active: item.number === currentPage
      }),
      onClick: function onClick(e) {
        item.number !== currentPage && handleSelectPage(item.number);
      }
    }, itemRender ? itemRender(item) : item.text);
  })), mode === "simple" && React__default.createElement("div", {
    className: "".concat(classPrefix, "__contain")
  }, React__default.createElement("div", {
    className: "".concat(classPrefix, "__simple")
  }, currentPage, "/", pageCount)), React__default.createElement("div", {
    className: classNames("".concat(classPrefix, "__next"), currentPage >= pageCount ? "disabled" : ""),
    onClick: function onClick(e) {
      return handleSelectPage(currentPage + 1);
    }
  }, next || locale.pagination.next));
};
Pagination.defaultProps = defaultProps;
Pagination.displayName = "NutPagination";
export {
  Pagination as default
};
