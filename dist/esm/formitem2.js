import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _assertThisInitialized from "@babel/runtime/helpers/assertThisInitialized";
import _inherits from "@babel/runtime/helpers/inherits";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();
  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived), result;
    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }
    return _possibleConstructorReturn(this, result);
  };
}
function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct)
    return false;
  if (Reflect.construct.sham)
    return false;
  if (typeof Proxy === "function")
    return true;
  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
    return true;
  } catch (e) {
    return false;
  }
}
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
import React__default, { createContext } from "react";
import Cell from "./Cell.js";
import { C as ComponentDefaults } from "./typings.js";
var Context = createContext({});
function isForwardRefComponent(component) {
  return component.type && component.type.$$typeof && // eslint-disable-next-line react/display-name
  React__default.forwardRef(
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    function() {
    }
  ).$$typeof === component.type.$$typeof;
}
var defaultProps = _objectSpread(_objectSpread({}, ComponentDefaults), {}, {
  required: false,
  name: "",
  label: "",
  rules: [{
    required: false,
    message: ""
  }],
  errorMessageAlign: "left"
});
var FormItem = /* @__PURE__ */ function(_React__default$Compo) {
  _inherits(FormItem2, _React__default$Compo);
  var _super = _createSuper(FormItem2);
  function FormItem2(props) {
    var _this;
    _classCallCheck(this, FormItem2);
    _this = _super.call(this, props);
    _defineProperty(_assertThisInitialized(_this), "cancelRegister", void 0);
    _defineProperty(_assertThisInitialized(_this), "componentRef", void 0);
    _defineProperty(_assertThisInitialized(_this), "getControlled", function(children) {
      var _children$props, _objectSpread2;
      var _this$context = _this.context, setFieldsValue = _this$context.setFieldsValue, getFieldValue = _this$context.getFieldValue;
      var _this$props$name = _this.props.name, name = _this$props$name === void 0 ? "" : _this$props$name;
      if (children !== null && children !== void 0 && (_children$props = children.props) !== null && _children$props !== void 0 && _children$props.defaultValue) {
        console.warn("通过 initialValue 设置初始值");
      }
      var fieldValue = getFieldValue(name);
      var controlled = _objectSpread(_objectSpread({}, children.props), {}, (_objectSpread2 = {}, _defineProperty(_objectSpread2, _this.props.valuePropName || "value", fieldValue !== void 0 ? fieldValue : _this.props.initialValue), _defineProperty(_objectSpread2, _this.props.trigger || "onChange", function() {
        var originOnChange = children.props[_this.props.trigger || "onChange"];
        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }
        if (originOnChange) {
          originOnChange.apply(void 0, args);
        }
        var next = args[0];
        if (_this.props.getValueFromEvent) {
          var _this$props;
          next = (_this$props = _this.props).getValueFromEvent.apply(_this$props, args);
        }
        setFieldsValue(_defineProperty({}, name, next));
      }), _objectSpread2));
      if (isForwardRefComponent(children)) {
        controlled.ref = function(componentInstance) {
          var originRef = children.ref;
          if (originRef) {
            if (typeof originRef === "function") {
              originRef(componentInstance);
            }
            if ("current" in originRef) {
              originRef.current = componentInstance;
            }
          }
          _this.componentRef = componentInstance;
        };
      }
      return controlled;
    });
    _defineProperty(_assertThisInitialized(_this), "refresh", function() {
      _this.setState(function(_ref) {
        var resetCount = _ref.resetCount;
        return {
          resetCount: resetCount + 1
        };
      });
    });
    _defineProperty(_assertThisInitialized(_this), "onStoreChange", function(type) {
      if (type === "reset") {
        _this.refresh();
      } else {
        _this.forceUpdate();
      }
    });
    _defineProperty(_assertThisInitialized(_this), "renderLayout", function(childNode) {
      var _this$context$errors, _this$context$errors2;
      var _defaultProps$_this$p = _objectSpread(_objectSpread({}, defaultProps), _this.props), label = _defaultProps$_this$p.label, name = _defaultProps$_this$p.name, required = _defaultProps$_this$p.required, className = _defaultProps$_this$p.className, style = _defaultProps$_this$p.style, errorMessageAlign = _defaultProps$_this$p.errorMessageAlign;
      var item = ((_this$context$errors = _this.context.errors) === null || _this$context$errors === void 0 ? void 0 : _this$context$errors.length) > 0 && ((_this$context$errors2 = _this.context.errors) === null || _this$context$errors2 === void 0 ? void 0 : _this$context$errors2.filter(function(item2) {
        return item2.field === name;
      }));
      var starPosition = _this.context.starPosition;
      var renderStar = required && React__default.createElement("i", {
        className: "required"
      });
      var renderLabel = React__default.createElement(React__default.Fragment, null, starPosition === "left" ? renderStar : null, label, starPosition === "right" ? renderStar : null);
      return React__default.createElement(Cell, {
        className: "nut-form-item ".concat(className),
        style,
        onClick: function onClick(e) {
          return _this.props.onClick && _this.props.onClick(e, _this.componentRef);
        }
      }, label ? React__default.createElement("div", {
        className: "nut-cell__title nut-form-item__label"
      }, renderLabel) : null, React__default.createElement("div", {
        className: "nut-cell__value nut-form-item__body"
      }, React__default.createElement("div", {
        className: "nut-form-item__body__slots"
      }, childNode), item.length > 0 && React__default.createElement("div", {
        className: "nut-form-item__body__tips",
        style: {
          textAlign: errorMessageAlign
        }
      }, item[0].message)));
    });
    _this.componentRef = React__default.createRef();
    _this.state = {
      resetCount: 1
    };
    return _this;
  }
  _createClass(FormItem2, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.cancelRegister = this.context.registerField(this);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this.cancelRegister) {
        this.cancelRegister();
      }
    }
  }, {
    key: "render",
    value: function render() {
      var children = this.props.children;
      var child = Array.isArray(children) ? children[0] : children;
      var returnChildNode = React__default.cloneElement(child, this.getControlled(child));
      return React__default.createElement(React__default.Fragment, {
        key: this.state.resetCount
      }, this.renderLayout(returnChildNode));
    }
  }]);
  return FormItem2;
}(React__default.Component);
_defineProperty(FormItem, "defaultProps", defaultProps);
_defineProperty(FormItem, "contextType", Context);
export {
  Context as C,
  FormItem as F
};
