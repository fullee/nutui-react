import _slicedToArray from "@babel/runtime/helpers/slicedToArray";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
var _excluded = ["children", "className", "style", "checked", "defaultChecked", "shape", "value", "icon", "activeIcon", "onChange"], _excluded2 = ["labelPosition", "disabled"];
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
import { CheckChecked, CheckNormal } from "@nutui/icons-react";
import classNames from "classnames";
import RadioGroup from "./RadioGroup.js";
import { C as ComponentDefaults } from "./typings.js";
import { u as usePropsValue } from "./use-props-value.js";
var RadioContext = React__default.createContext(null);
var defaultProps = _objectSpread(_objectSpread({}, ComponentDefaults), {}, {
  disabled: false,
  shape: "round",
  value: "",
  labelPosition: "right",
  icon: null,
  activeIcon: null,
  onChange: function onChange(checked) {
  }
});
var Radio = function Radio2(props) {
  var classPrefix = "nut-radio";
  var _defaultProps$props = _objectSpread(_objectSpread({}, defaultProps), props), children = _defaultProps$props.children, className = _defaultProps$props.className, style = _defaultProps$props.style, checked = _defaultProps$props.checked, defaultChecked = _defaultProps$props.defaultChecked, shape = _defaultProps$props.shape, value = _defaultProps$props.value, icon = _defaultProps$props.icon, activeIcon = _defaultProps$props.activeIcon, onChange2 = _defaultProps$props.onChange, others = _objectWithoutProperties(_defaultProps$props, _excluded);
  var labelPosition = others.labelPosition, disabled = others.disabled, rest = _objectWithoutProperties(others, _excluded2);
  var _usePropsValue = usePropsValue({
    value: checked,
    defaultValue: defaultChecked,
    finalValue: false,
    onChange: onChange2
  }), _usePropsValue2 = _slicedToArray(_usePropsValue, 2), checkedStatement = _usePropsValue2[0], setCheckedStatement = _usePropsValue2[1];
  var context = useContext(RadioContext);
  if (context) {
    checkedStatement = context.value === value;
    if (context.labelPosition !== void 0) {
      labelPosition = context.labelPosition;
    }
    if (context.disabled !== void 0) {
      disabled = context.disabled;
    }
    setCheckedStatement = function setCheckedStatement2(value2) {
      if (value2) {
        context.check(props.value === void 0 ? "" : props.value);
      } else {
        context.uncheck();
      }
    };
  }
  var renderLabel = function renderLabel2() {
    return React__default.createElement("div", {
      className: classNames("".concat(classPrefix, "__label"), _defineProperty({}, "".concat(classPrefix, "__label--disabled"), disabled))
    }, children);
  };
  var renderButton = function renderButton2() {
    var _classNames2;
    return React__default.createElement("div", {
      className: classNames("".concat(classPrefix, "__button"), (_classNames2 = {}, _defineProperty(_classNames2, "".concat(classPrefix, "__button--active"), checkedStatement), _defineProperty(_classNames2, "".concat(classPrefix, "__button--disabled"), disabled), _classNames2))
    }, children);
  };
  var color = function color2() {
    var _ref;
    return _ref = {}, _defineProperty(_ref, "".concat(classPrefix, "__icon--disable"), disabled), _defineProperty(_ref, "".concat(classPrefix, "__icon"), checkedStatement), _defineProperty(_ref, "".concat(classPrefix, "__icon--unchecked"), !checkedStatement), _ref;
  };
  var renderIcon = function renderIcon2() {
    var icon2 = props.icon, activeIcon2 = props.activeIcon;
    if (checkedStatement) {
      return React__default.isValidElement(activeIcon2) ? React__default.cloneElement(activeIcon2, _objectSpread(_objectSpread({}, activeIcon2.props), {}, {
        className: classNames(color())
      })) : React__default.createElement(CheckChecked, {
        className: classNames(color())
      });
    }
    return React__default.isValidElement(icon2) ? React__default.cloneElement(icon2, _objectSpread(_objectSpread({}, icon2.props), {}, {
      className: classNames(color())
    })) : React__default.createElement(CheckNormal, {
      className: classNames(color())
    });
  };
  var reverse = labelPosition === "left";
  var renderRadioItem = function renderRadioItem2() {
    if (shape === "button") {
      return renderButton();
    }
    if (reverse) {
      return React__default.createElement(React__default.Fragment, null, renderLabel(), renderIcon());
    }
    return React__default.createElement(React__default.Fragment, null, renderIcon(), renderLabel());
  };
  var handleClick = function handleClick2(e) {
    if (disabled || checkedStatement)
      return;
    setCheckedStatement(!checkedStatement);
  };
  return React__default.createElement("div", _objectSpread({
    className: "".concat(classPrefix, " ").concat(className, " ").concat(reverse ? "".concat(classPrefix, "--reverse") : ""),
    style,
    onClick: handleClick
  }, rest), renderRadioItem());
};
Radio.defaultProps = defaultProps;
Radio.displayName = "NutRadio";
Radio.Group = RadioGroup;
export {
  Radio as R,
  RadioContext as a
};
