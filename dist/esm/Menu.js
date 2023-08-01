import _toConsumableArray from "@babel/runtime/helpers/toConsumableArray";
import _slicedToArray from "@babel/runtime/helpers/slicedToArray";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
var _excluded = ["className", "icon", "scrollFixed", "lockScroll", "closeOnOverlayClick", "children", "activeColor", "onClose", "onOpen"];
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
import React__default, { useRef, useState, useEffect } from "react";
import classNames from "classnames";
import { ArrowUp2, ArrowDown2 } from "@nutui/icons-react";
import { M as MenuItem } from "./menuitem2.js";
import { C as ComponentDefaults } from "./typings.js";
import "react-transition-group";
import "./overlay2.js";
import "./use-click-away.js";
import "./index.js";
var defaultProps = _objectSpread(_objectSpread({}, ComponentDefaults), {}, {
  activeColor: "",
  closeOnOverlayClick: true,
  scrollFixed: false,
  lockScroll: true,
  icon: null,
  onOpen: function onOpen() {
  },
  onClose: function onClose() {
  }
});
var Menu = function Menu2(props) {
  var _defaultProps$props = _objectSpread(_objectSpread({}, defaultProps), props), className = _defaultProps$props.className, icon = _defaultProps$props.icon, scrollFixed = _defaultProps$props.scrollFixed, lockScroll = _defaultProps$props.lockScroll, closeOnOverlayClick = _defaultProps$props.closeOnOverlayClick, children = _defaultProps$props.children, activeColor = _defaultProps$props.activeColor, onClose2 = _defaultProps$props.onClose, onOpen2 = _defaultProps$props.onOpen, rest = _objectWithoutProperties(_defaultProps$props, _excluded);
  var menuRef = useRef(null);
  var _useState = useState(false), _useState2 = _slicedToArray(_useState, 2), isScrollFixed = _useState2[0], setIsScrollFixed = _useState2[1];
  var getScrollTop = function getScrollTop2(el) {
    return Math.max(0, "scrollTop" in el ? el.scrollTop : el.pageYOffset);
  };
  var onScroll = function onScroll2() {
    var scrollFixed2 = props.scrollFixed;
    var scrollTop = getScrollTop(window);
    var isFixed = scrollTop > (typeof scrollFixed2 === "boolean" ? 30 : Number(scrollFixed2));
    setIsScrollFixed(isFixed);
  };
  useEffect(function() {
    if (scrollFixed) {
      window.addEventListener("scroll", onScroll);
    }
    return function() {
      return window.removeEventListener("scroll", onScroll);
    };
  }, []);
  var _useState3 = useState([]), _useState4 = _slicedToArray(_useState3, 2), showMenuItem = _useState4[0], setShowMenuItem = _useState4[1];
  var _useState5 = useState([]), _useState6 = _slicedToArray(_useState5, 2), menuItemTitle = _useState6[0], setMenuItemTitle = _useState6[1];
  var toggleMenuItem = function toggleMenuItem2(index) {
    showMenuItem[index] = !showMenuItem[index];
    if (showMenuItem[index]) {
      onOpen2 && onOpen2();
    } else {
      onClose2 && onClose2();
    }
    var temp = showMenuItem.map(function(i, idx) {
      return idx === index ? i : false;
    });
    setShowMenuItem(_toConsumableArray(temp));
  };
  var hideMenuItem = function hideMenuItem2(index) {
    showMenuItem[index] = false;
    setShowMenuItem(_toConsumableArray(showMenuItem));
    onClose2 && onClose2();
  };
  var updateTitle = function updateTitle2(text, index) {
    menuItemTitle[index] = text;
    setMenuItemTitle(_toConsumableArray(menuItemTitle));
  };
  var cloneChildren = function cloneChildren2() {
    return React__default.Children.map(children, function(child, index) {
      return React__default.cloneElement(child, _objectSpread(_objectSpread({}, child.props), {}, {
        show: showMenuItem[index],
        index,
        activeColor,
        parent: {
          closeOnOverlayClick,
          lockScroll,
          toggleMenuItem,
          updateTitle,
          hideMenuItem,
          menuRef
        }
      }));
    });
  };
  var menuTitle = function menuTitle2() {
    return React__default.Children.map(children, function(child, index) {
      if (React__default.isValidElement(child)) {
        var _child$props = child.props, title = _child$props.title, options = _child$props.options, value = _child$props.value, disabled = _child$props.disabled, direction = _child$props.direction;
        var selected = options === null || options === void 0 ? void 0 : options.filter(function(option) {
          return option.value === value;
        });
        var finallyTitle = function finallyTitle2() {
          if (title)
            return title;
          if (menuItemTitle && menuItemTitle[index])
            return menuItemTitle[index];
          if (selected && selected.length && selected[0].text)
            return selected[0].text;
          return "";
        };
        return React__default.createElement("div", {
          className: classNames("nut-menu__item ", className, {
            active: showMenuItem[index],
            disabled
          }),
          style: {
            color: showMenuItem[index] ? activeColor : ""
          },
          key: index,
          onClick: function onClick(e) {
            e.stopPropagation();
            !disabled && toggleMenuItem(index);
          }
        }, React__default.createElement("div", {
          className: classNames("nut-menu__title ", {
            active: showMenuItem[index],
            disabled
          })
        }, React__default.createElement("div", {
          className: "nut-menu__title-text"
        }, finallyTitle()), icon || (direction === "up" ? React__default.createElement(ArrowUp2, {
          className: "nut-menu__title-icon"
        }) : React__default.createElement(ArrowDown2, {
          className: "nut-menu__title-icon"
        }))));
      }
      return null;
    });
  };
  return React__default.createElement("div", _objectSpread(_objectSpread({}, rest), {}, {
    className: classNames("nut-menu", className, {
      "scroll-fixed": isScrollFixed
    }),
    ref: menuRef
  }), React__default.createElement("div", {
    className: "nut-menu-relative"
  }, React__default.createElement("div", {
    className: classNames("nut-menu__bar", {
      opened: showMenuItem.includes(true)
    })
  }, menuTitle()), cloneChildren()));
};
Menu.defaultProps = defaultProps;
Menu.displayName = "NutMenu";
Menu.Item = MenuItem;
export {
  Menu as default
};
