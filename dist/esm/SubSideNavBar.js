import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
var _excluded = ["title", "value", "children", "onClick", "open"];
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
import React__default, { useContext, useRef, useCallback, useEffect } from "react";
import { O as OffsetContext, h as handleClick } from "./context.js";
var defaultProps = {
  open: true
};
var SubSideNavBar = function SubSideNavBar2(props) {
  var classPrefix = "nut-subsidenavbar";
  var _defaultProps$props = _objectSpread(_objectSpread({}, defaultProps), props), title = _defaultProps$props.title, value = _defaultProps$props.value, children = _defaultProps$props.children, onClick = _defaultProps$props.onClick, open = _defaultProps$props.open, rest = _objectWithoutProperties(_defaultProps$props, _excluded);
  var offset = useContext(OffsetContext);
  var listRef = useRef(null);
  var setListLevel = useCallback(function(nodeList) {
    var level = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1;
    var titleClass = nodeList[0].className;
    if (titleClass.includes("".concat(classPrefix, "__title"))) {
      var left = offset * (level + 1);
      nodeList[0].style.paddingLeft = "".concat(left, "px");
    }
    var childNodes = nodeList[1] && nodeList[1].children && Array.from(nodeList[1].children).filter(function(item) {
      return item.nodeType !== 3 && item.nodeType !== 8;
    });
    childNodes.forEach(function(item) {
      var itemClass = item.className;
      if (itemClass.includes("".concat(classPrefix, "__item"))) {
        var _left = offset * (level + 2);
        item.style.paddingLeft = "".concat(_left, "px");
      }
      if (itemClass.includes("".concat(classPrefix, "__list"))) {
        var level2 = item.getAttribute("level") ? Number(item.getAttribute("level")) : 1;
        level2 += 1;
        item.setAttribute("level", level2.toString());
        item.children && setListLevel(item.children, level2);
      }
    });
  }, [offset]);
  var clickFn = function clickFn2(e) {
    handleClick(e);
    var currentClass = e.currentTarget.className;
    var isShow = currentClass.includes("sidenavbar-show");
    onClick && onClick({
      title,
      value,
      isShow
    });
  };
  useEffect(function() {
    var _listRef$current, _listRef$current2;
    var childNodes = (_listRef$current = listRef.current) === null || _listRef$current === void 0 ? void 0 : _listRef$current.children;
    (_listRef$current2 = listRef.current) === null || _listRef$current2 === void 0 ? void 0 : _listRef$current2.setAttribute("level", "1");
    childNodes && setListLevel(childNodes);
  }, [setListLevel]);
  var divClass = open ? "".concat(classPrefix, "__list sidenavbar-show") : "".concat(classPrefix, "__list sidenavbar-hide");
  var iconClass = open ? "arrow-icon arrow-down" : "arrow-icon arrow-up";
  return React__default.createElement("div", _objectSpread({
    className: divClass,
    ref: listRef,
    onClick: clickFn
  }, rest), React__default.createElement("div", {
    className: "".concat(classPrefix, "__title ").concat(classPrefix, "-border-bt")
  }, title, " ", React__default.createElement("i", {
    className: iconClass
  })), React__default.createElement("div", {
    className: "".concat(classPrefix, "__content")
  }, children));
};
export {
  SubSideNavBar as default
};
