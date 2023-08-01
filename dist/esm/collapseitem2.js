import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
var _excluded = ["children", "title", "name", "disabled", "expandIcon", "rotate", "extra", "style", "className"];
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
import React__default, { createContext, useContext, useRef, useMemo, useEffect } from "react";
import classNames from "classnames";
import { C as ComponentDefaults } from "./typings.js";
var collapseContext = {
  isOpen: function isOpen(name) {
    return true;
  },
  updateValue: function updateValue(name) {
  },
  expandIcon: null,
  rotate: 180
};
var CollapseContext = createContext(collapseContext);
var defaultProps = _objectSpread(_objectSpread({}, ComponentDefaults), {}, {
  title: null,
  name: "",
  expandIcon: null,
  disabled: false,
  extra: null
});
var CollapseItem = function CollapseItem2(props) {
  var _defaultProps$props = _objectSpread(_objectSpread({}, defaultProps), props), children = _defaultProps$props.children, title = _defaultProps$props.title, name = _defaultProps$props.name, disabled = _defaultProps$props.disabled, expandIcon = _defaultProps$props.expandIcon, rotate = _defaultProps$props.rotate, extra = _defaultProps$props.extra, style = _defaultProps$props.style, className = _defaultProps$props.className, rest = _objectWithoutProperties(_defaultProps$props, _excluded);
  var classPrefix = "nut-collapse-item";
  var context = useContext(CollapseContext);
  var wrapperRef = useRef(null);
  var contentRef = useRef(null);
  var expanded = useMemo(function() {
    if (context) {
      return context.isOpen(name);
    }
    return false;
  }, [name, context.isOpen]);
  var iconStyle = useMemo(function() {
    return expanded ? {
      transform: "translateY(-50%) rotate(".concat(rotate || context.rotate, "deg)")
    } : {
      transform: "translateY(-50%)"
    };
  }, [expanded, rotate]);
  var handleClick = function handleClick2() {
    if (!disabled) {
      context.updateValue(name);
    }
  };
  var onTransitionEnd = function onTransitionEnd2() {
    if (expanded) {
      if (wrapperRef.current) {
        wrapperRef.current.style.height = "";
      }
    }
  };
  var getOffsetHeight = function getOffsetHeight2() {
    var _contentRef$current;
    var height = (_contentRef$current = contentRef.current) === null || _contentRef$current === void 0 ? void 0 : _contentRef$current.offsetHeight;
    return height ? "".concat(height, "px") : "";
  };
  var toggle = function toggle2() {
    var start = expanded ? "0px" : getOffsetHeight();
    if (wrapperRef.current) {
      wrapperRef.current.style.height = start;
    }
    requestAnimationFrame(function() {
      requestAnimationFrame(function() {
        var end = expanded ? getOffsetHeight() : "0px";
        if (wrapperRef.current) {
          wrapperRef.current.style.height = end;
        }
      });
    });
  };
  var init = useRef(true);
  useEffect(function() {
    if (init.current) {
      init.current = false;
      if (!expanded) {
        wrapperRef.current.style.height = "0px";
      }
    } else {
      toggle();
    }
  }, [expanded]);
  return React__default.createElement("div", _objectSpread({
    className: classNames(classPrefix, className),
    style
  }, rest), React__default.createElement("div", {
    className: classNames("".concat(classPrefix, "__header"), {
      disabled
    }),
    onClick: handleClick
  }, React__default.createElement("div", {
    className: "".concat(classPrefix, "__title")
  }, title), React__default.createElement("div", {
    className: "".concat(classPrefix, "__extra")
  }, extra), React__default.createElement("div", {
    className: "".concat(classPrefix, "__icon-box")
  }, React__default.createElement("div", {
    className: "".concat(classPrefix, "__icon"),
    style: iconStyle
  }, expandIcon || context.expandIcon))), React__default.createElement("div", {
    className: "".concat(classPrefix, "__content"),
    onTransitionEnd,
    ref: wrapperRef
  }, React__default.createElement("div", {
    ref: contentRef,
    className: "".concat(classPrefix, "__content-text")
  }, children)));
};
CollapseItem.defaultProps = defaultProps;
CollapseItem.displayName = "NutCollapseItem";
export {
  CollapseContext as C,
  CollapseItem as a
};
