import _slicedToArray from "@babel/runtime/helpers/slicedToArray";
import _toConsumableArray from "@babel/runtime/helpers/toConsumableArray";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
var _excluded = ["title", "confirmText", "visible", "type", "custom", "random", "style", "className", "onChange", "onDelete", "onClose", "onConfirm"];
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
import React__default, { useMemo, useState } from "react";
import classNames from "classnames";
import { RectDown } from "@nutui/icons-react";
import Popup from "./Popup.js";
import { useConfig } from "./ConfigProvider.js";
import { C as ComponentDefaults } from "./typings.js";
var defaultProps = _objectSpread(_objectSpread({}, ComponentDefaults), {}, {
  visible: false,
  type: "default",
  custom: [],
  random: false,
  onClose: function onClose() {
  }
});
var NumberKeyboard = function NumberKeyboard2(props) {
  var _useConfig = useConfig(), locale = _useConfig.locale;
  var title = props.title, confirmText = props.confirmText, visible = props.visible, type = props.type, custom = props.custom, random = props.random, style = props.style, className = props.className, onChange = props.onChange, onDelete = props.onDelete, onClose2 = props.onClose, onConfirm = props.onConfirm, rest = _objectWithoutProperties(props, _excluded);
  var classPrefix = "nut-numberkeyboard";
  var getBasicKeys = function getBasicKeys2() {
    var keys = new Array(9).fill(0).map(function(_, index) {
      return {
        id: String(index + 1),
        type: "num"
      };
    });
    return random ? keys.sort(function() {
      return Math.random() > 0.5 ? 1 : -1;
    }) : keys;
  };
  var getCustomKeys = function getCustomKeys2() {
    var customKeys = [{
      id: "close",
      type: "close"
    }, {
      id: "0",
      type: "num"
    }, {
      id: "delete",
      type: "delete"
    }];
    if (!custom)
      return customKeys;
    if (custom.length > 0) {
      customKeys[0] = {
        id: custom[0],
        type: "custom"
      };
    }
    if (custom.length > 1) {
      customKeys[2] = {
        id: custom[1],
        type: "custom"
      };
    }
    return customKeys;
  };
  var keysList = useMemo(function() {
    return [].concat(_toConsumableArray(getBasicKeys()), _toConsumableArray(getCustomKeys()));
  }, [type, random, custom]);
  var DeleteIcon = function DeleteIcon2() {
    return React__default.createElement("svg", {
      viewBox: "0 0 1024 1024",
      width: "36",
      height: "36"
    }, React__default.createElement("path", {
      d: "M875.594 186.122H390.803a51.162 51.162 0 0 0-36.18 14.986L79.91 475.821a51.166 51.166 0 0 0 0 72.358l274.714 274.712a51.164 51.164 0 0 0 36.179 14.986h484.791c46.033 0 83.484-37.45 83.484-83.483V269.606c.001-46.033-37.45-83.484-83.483-83.484zm32.32 568.274c0 17.85-14.473 32.318-32.32 32.318H390.803L116.089 512l274.714-274.714h484.791c17.849 0 32.32 14.47 32.32 32.32v484.789z",
      fill: "currentColor"
    }), React__default.createElement("path", {
      d: "M753.945 360.214l-121.43 121.429-121.43-121.429s-16.062-8.224-30.356 6.072c-14.295 14.295-6.073 30.357-6.073 30.357l121.43 121.428L486.8 627.357s-8.222 16.062 6.072 30.357c14.297 14.296 30.358 6.072 30.358 6.072l109.286-109.285 109.286 109.285s16.062 8.224 30.357-6.072c14.295-14.295 6.07-30.357 6.07-30.357L668.944 518.072l121.431-121.43s8.22-16.061-6.074-30.356c-14.294-14.296-30.356-6.072-30.356-6.072z",
      fill: "currentColor"
    }));
  };
  var NumberKeyboardKey = function NumberKeyboardKey2(props2) {
    var item = props2.item;
    var _useState = useState(false), _useState2 = _slicedToArray(_useState, 2), active = _useState2[0], setActive = _useState2[1];
    var _onTouchStart = function onTouchStart() {
      setActive(true);
    };
    var _onTouchEnd = function onTouchEnd(item2) {
      setActive(false);
      if (item2.type === "num" || item2.type === "custom") {
        onChange && onChange(item2.id);
      }
      if (item2.type === "close") {
        onClose2 && onClose2();
      }
      if (item2.type === "delete") {
        onDelete && onDelete();
      }
      if (item2.type === "confirm") {
        onConfirm && onConfirm();
      }
    };
    return React__default.createElement("div", {
      key: item.id,
      className: "".concat(classPrefix, "__body__wrapper")
    }, React__default.createElement("div", {
      className: classNames({
        key: true,
        active,
        close: item.type === "close",
        "delete": item.type === "delete",
        confirm: item.type === "confirm"
      }),
      onTouchStart: function onTouchStart() {
        return _onTouchStart();
      },
      onTouchEnd: function onTouchEnd() {
        return _onTouchEnd(item);
      },
      onTouchCancel: function onTouchCancel() {
        return _onTouchEnd(item);
      }
    }, (item.type === "num" || item.type === "custom") && React__default.createElement("div", null, item.id), item.type === "delete" && React__default.createElement(DeleteIcon, null), item.type === "close" && React__default.createElement(RectDown, {
      width: 25,
      height: 25
    }), item.type === "confirm" && React__default.createElement(React__default.Fragment, null, confirmText || locale.done)));
  };
  return React__default.createElement(Popup, _objectSpread({
    visible,
    position: "bottom",
    onOverlayClick: onClose2,
    onCloseIconClick: onClose2,
    overlayStyle: {
      backgroundColor: "rgba(0, 0, 0, 0)"
    }
  }, rest), React__default.createElement("div", {
    className: classNames(classPrefix, className),
    style
  }, title && React__default.createElement("div", {
    className: "".concat(classPrefix, "__header")
  }, React__default.createElement("h3", {
    className: "".concat(classPrefix, "__header__title")
  }, title), type === "default" && React__default.createElement("span", {
    className: "".concat(classPrefix, "__header__close"),
    onClick: onClose2
  }, locale.done)), React__default.createElement("div", {
    className: "".concat(classPrefix, "__body")
  }, React__default.createElement("div", {
    className: "".concat(classPrefix, "__body__keys")
  }, keysList === null || keysList === void 0 ? void 0 : keysList.map(function(item) {
    return React__default.createElement(NumberKeyboardKey, {
      key: item.id,
      item
    });
  })), type === "rightColumn" && React__default.createElement("div", {
    className: "".concat(classPrefix, "__sidebar")
  }, React__default.createElement(NumberKeyboardKey, {
    key: "delete",
    item: {
      id: "delete",
      type: "delete"
    }
  }), React__default.createElement(NumberKeyboardKey, {
    key: "confirm",
    item: {
      id: "confirm",
      type: "confirm"
    }
  })))));
};
NumberKeyboard.defaultProps = defaultProps;
NumberKeyboard.displayName = "NutNumberKeyboard";
export {
  NumberKeyboard as default
};
