import _slicedToArray from "@babel/runtime/helpers/slicedToArray";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
var _excluded = ["children", "className", "style", "columns", "data", "bordered", "summary", "striped", "noData", "sorterIcon", "showHeader", "onSort"];
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
import classNames from "classnames";
import { DownArrow } from "@nutui/icons-react";
import { useConfig } from "./ConfigProvider.js";
import { C as ComponentDefaults } from "./typings.js";
var defaultProps = _objectSpread(_objectSpread({}, ComponentDefaults), {}, {
  columns: [],
  data: [],
  bordered: true,
  striped: false,
  noData: "",
  sorterIcon: null,
  showHeader: true
});
var Table = function Table2(props) {
  var _useConfig = useConfig(), locale = _useConfig.locale;
  defaultProps.noData = locale.noData;
  var _defaultProps$props = _objectSpread(_objectSpread({}, defaultProps), props), children = _defaultProps$props.children, className = _defaultProps$props.className, style = _defaultProps$props.style, columns = _defaultProps$props.columns, data = _defaultProps$props.data, bordered = _defaultProps$props.bordered, summary = _defaultProps$props.summary, striped = _defaultProps$props.striped, noData = _defaultProps$props.noData, sorterIcon = _defaultProps$props.sorterIcon, showHeader = _defaultProps$props.showHeader, onSort = _defaultProps$props.onSort, rest = _objectWithoutProperties(_defaultProps$props, _excluded);
  var _useState = useState(data), _useState2 = _slicedToArray(_useState, 2), curData = _useState2[0], setCurData = _useState2[1];
  useEffect(function() {
    if (data && String(data) !== String(curData)) {
      setCurData(data);
    }
  }, [data]);
  var classPrefix = "nut-table";
  var headerClassPrefix = "".concat(classPrefix, "__main__head__tr");
  var bodyClassPrefix = "".concat(classPrefix, "__main__body__tr");
  var cls = classNames(classPrefix, className);
  var handleSorterClick = function handleSorterClick2(item) {
    if (item.sorter) {
      onSort && onSort(item, curData);
      if (typeof item.sorter === "function") {
        setCurData(curData.sort(item.sorter));
      } else {
        setCurData(item.sorter === "default" ? curData.sort() : curData);
      }
    }
  };
  var cellClasses = function cellClasses2(item) {
    var _ref;
    return _ref = {}, _defineProperty(_ref, "".concat(headerClassPrefix, "--border"), props.bordered), _defineProperty(_ref, "".concat(headerClassPrefix, "--align").concat(item.align ? item.align : ""), true), _ref;
  };
  var getColumnItem = function getColumnItem2(value) {
    return columns.filter(function(item) {
      return item.key === value;
    })[0];
  };
  var renderHeadCells = function renderHeadCells2() {
    return columns.map(function(item, index) {
      return React__default.createElement("span", {
        className: classNames("".concat(headerClassPrefix, "__th"), cellClasses(item)),
        key: item.key,
        onClick: function onClick() {
          return handleSorterClick(item);
        }
      }, item.title, " ", item.sorter && (sorterIcon || React__default.createElement(DownArrow, {
        width: "12px",
        height: "12px"
      })));
    });
  };
  var sortDataItem = function sortDataItem2() {
    return columns.map(function(columns2) {
      return [columns2.key, columns2.render];
    });
  };
  var renderBodyTds = function renderBodyTds2(item) {
    return sortDataItem().map(function(_ref2, index) {
      var _ref3 = _slicedToArray(_ref2, 2), value = _ref3[0], render = _ref3[1];
      return React__default.createElement("span", {
        className: classNames("".concat(bodyClassPrefix, "__td"), cellClasses(getColumnItem(value))),
        key: value
      }, typeof item[value] === "function" || typeof render === "function" ? React__default.createElement("div", null, render ? render(item) : item[value](item)) : item[value]);
    });
  };
  var renderBoyTrs = function renderBoyTrs2() {
    return curData.map(function(item, index) {
      return React__default.createElement("div", {
        className: bodyClassPrefix,
        key: index
      }, renderBodyTds(item));
    });
  };
  return React__default.createElement("div", _objectSpread({
    className: cls,
    style
  }, rest), React__default.createElement("div", {
    className: classNames("".concat(classPrefix, "__main"), _defineProperty({}, "".concat(classPrefix, "__main--striped"), striped))
  }, showHeader && React__default.createElement("div", {
    className: "".concat(classPrefix, "__main__head")
  }, React__default.createElement("div", {
    className: headerClassPrefix
  }, renderHeadCells())), React__default.createElement("div", {
    className: "".concat(classPrefix, "__main__body")
  }, renderBoyTrs())), (summary || curData.length === 0) && React__default.createElement("div", {
    className: "".concat(classPrefix, "__summary")
  }, summary || noData));
};
Table.defaultProps = defaultProps;
Table.displayName = "NutTable";
export {
  Table as default
};
