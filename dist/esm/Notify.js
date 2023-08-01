import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _assertThisInitialized from "@babel/runtime/helpers/assertThisInitialized";
import _inherits from "@babel/runtime/helpers/inherits";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
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
import * as React from "react";
import classNames from "classnames";
import { CSSTransition } from "react-transition-group";
import { r as render, u as unmount } from "./render.js";
import { C as ComponentDefaults } from "./typings.js";
import "react-dom";
var classPrefix = "nut-notify";
var Notification = /* @__PURE__ */ function(_React$PureComponent) {
  _inherits(Notification2, _React$PureComponent);
  var _super = _createSuper(Notification2);
  function Notification2(props) {
    var _this;
    _classCallCheck(this, Notification2);
    _this = _super.call(this, props);
    _defineProperty(_assertThisInitialized(_this), "closeTimer", void 0);
    _this.close = _this.close.bind(_assertThisInitialized(_this));
    _this.startCloseTimer = _this.startCloseTimer.bind(_assertThisInitialized(_this));
    _this.clearCloseTimer = _this.clearCloseTimer.bind(_assertThisInitialized(_this));
    _this.clickCover = _this.clickCover.bind(_assertThisInitialized(_this));
    _this.state = {
      show: true
    };
    return _this;
  }
  _createClass(Notification2, [{
    key: "close",
    value: function close() {
      this.setState({
        show: false
      });
      this.clearCloseTimer();
      if (this.props.id) {
        var element = document.getElementById(this.props.id);
        element && element.parentNode && element.parentNode.removeChild(element);
      }
      this.props.onClose();
    }
  }, {
    key: "startCloseTimer",
    value: function startCloseTimer() {
      var _this2 = this;
      var duration = this.props.duration;
      if (duration) {
        this.closeTimer = window.setTimeout(function() {
          _this2.close();
        }, duration);
      }
    }
  }, {
    key: "clearCloseTimer",
    value: function clearCloseTimer() {
      if (this.closeTimer) {
        clearTimeout(this.closeTimer);
        this.closeTimer = -1;
      }
    }
  }, {
    key: "clickCover",
    value: function clickCover() {
      this.props.onClick();
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.startCloseTimer();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.clearCloseTimer();
    }
  }, {
    key: "render",
    value: function render2() {
      var _classNames;
      var _this$props = this.props, style = _this$props.style, message = _this$props.message, type = _this$props.type, className = _this$props.className, position = _this$props.position;
      var show = this.state.show;
      var classes = classNames((_classNames = {}, _defineProperty(_classNames, "".concat(classPrefix, "--popup-top"), position === "top"), _defineProperty(_classNames, "".concat(classPrefix, "--popup-bottom"), position === "bottom"), _defineProperty(_classNames, "".concat(classPrefix), true), _defineProperty(_classNames, "".concat(classPrefix, "--").concat(type), true), _classNames));
      return React.createElement(React.Fragment, null, React.createElement(CSSTransition, {
        "in": show,
        timeout: 300,
        classNames: "fade",
        unmountOnExit: true,
        appear: true,
        position
      }, React.createElement("div", {
        className: "".concat(classes, " ").concat(className),
        style,
        onClick: this.clickCover
      }, message)));
    }
  }]);
  return Notification2;
}(React.PureComponent);
_defineProperty(Notification, "newInstance", void 0);
Notification.newInstance = function(properties, callback) {
  var element = document.createElement("div");
  var id = properties.id ? properties.id : "".concat((/* @__PURE__ */ new Date()).getTime());
  element.id = id;
  properties.id = id;
  document.body.appendChild(element);
  var called = false;
  function ref(instance) {
    if (called) {
      return;
    }
    called = true;
    callback({
      component: instance,
      destroy: function destroy() {
        setTimeout(function() {
          unmount(element);
          element && element.parentNode && element.parentNode.removeChild(element);
        }, 300);
      }
    });
  }
  render(React.createElement(Notification, _objectSpread(_objectSpread({}, properties), {}, {
    ref
  })), element);
};
var messageInstance = null;
var options = _objectSpread(_objectSpread({}, ComponentDefaults), {}, {
  id: "",
  duration: 3e3,
  type: "danger",
  position: "top",
  onClose: function onClose() {
  },
  onClick: function onClick() {
  }
});
function getInstance(props, callback) {
  if (messageInstance) {
    messageInstance.destroy();
    messageInstance = null;
  }
  Notification.newInstance(props, function(notification) {
    return callback && callback(notification);
  });
}
function notice(opts) {
  opts = _objectSpread(_objectSpread({}, options), opts);
  getInstance(opts, function(notification) {
    messageInstance = notification;
  });
}
var errorMsg = function errorMsg2(message) {
  if (!message) {
    console.warn("[NutUI Notify]: message不能为空");
  }
};
var Notify = {
  text: function text(message) {
    var option = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    errorMsg(message);
    return notice(_objectSpread({
      message,
      type: "base"
    }, option));
  },
  success: function success(message) {
    var option = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    errorMsg(message);
    return notice(_objectSpread({
      message,
      type: "success"
    }, option));
  },
  primary: function primary(message) {
    var option = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    errorMsg(message);
    return notice(_objectSpread({
      message,
      type: "primary"
    }, option));
  },
  danger: function danger(message) {
    var option = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    errorMsg(message);
    return notice(_objectSpread({
      message,
      type: "danger"
    }, option));
  },
  warn: function warn(message) {
    var option = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    errorMsg(message);
    return notice(_objectSpread({
      message,
      type: "warning"
    }, option));
  },
  hide: function hide() {
    if (messageInstance) {
      messageInstance.destroy();
      messageInstance = null;
    }
  }
};
export {
  Notify as default
};
