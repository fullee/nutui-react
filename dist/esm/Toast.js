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
import { Issue, Failure, Loading, Check } from "@nutui/icons-react";
import { r as render, u as unmount } from "./render.js";
import { O as Overlay } from "./overlay2.js";
import { C as ComponentDefaults } from "./typings.js";
import "react-dom";
import "react-transition-group";
var classPrefix = "nut-toast";
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
        }, duration * 1e3);
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
      var closeOnOverlayClick = this.props.closeOnOverlayClick;
      if (closeOnOverlayClick) {
        this.close();
      }
    }
  }, {
    key: "renderIcon",
    value: function renderIcon() {
      var icon = this.props.icon;
      if (typeof icon === "string") {
        var iconNode = null;
        switch (icon) {
          case "success":
            iconNode = React.createElement(Check, null);
            break;
          case "loading":
            iconNode = React.createElement(Loading, {
              className: "nut-icon-loading"
            });
            break;
          case "fail":
            iconNode = React.createElement(Failure, null);
            break;
          case "warn":
            iconNode = React.createElement(Issue, null);
            break;
        }
        return React.createElement("p", {
          className: "".concat(classPrefix, "__icon-wrapper")
        }, iconNode);
      }
      return icon;
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
      var _this3 = this;
      var _this$props = this.props, id = _this$props.id, icon = _this$props.icon, title = _this$props.title, content = _this$props.content, position = _this$props.position, size = _this$props.size, closeOnOverlayClick = _this$props.closeOnOverlayClick, lockScroll = _this$props.lockScroll, style = _this$props.style, className = _this$props.className, contentClassName = _this$props.contentClassName, contentStyle = _this$props.contentStyle;
      var show2 = this.state.show;
      var classes = classNames(_defineProperty({
        "nut-toast-has-icon": icon
      }, "nut-toast-".concat(size), true));
      return React.createElement(React.Fragment, null, React.createElement(Overlay, {
        visible: show2,
        style,
        className: "".concat(classPrefix, "__overlay-default ").concat(className),
        onClick: function onClick() {
          _this3.clickCover();
        },
        closeOnOverlayClick,
        lockScroll
      }, React.createElement("div", {
        className: "".concat(classPrefix, " ").concat(classes),
        id: "toast-".concat(id)
      }, React.createElement("div", {
        className: "".concat(classPrefix, "__inner ").concat(classPrefix, "-").concat(position, " ").concat(contentClassName),
        style: contentStyle
      }, this.renderIcon(), title ? React.createElement("div", {
        className: "".concat(classPrefix, "-title")
      }, title) : null, React.createElement("span", {
        className: "".concat(classPrefix, "-text")
      }, content)))));
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
        unmount(element);
        element && element.parentNode && element.parentNode.removeChild(element);
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
  duration: 2,
  position: "center",
  title: "",
  size: "base",
  icon: null,
  onClose: function onClose() {
  },
  closeOnOverlayClick: false,
  lockScroll: false,
  contentClassName: ""
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
  function close() {
    if (messageInstance) {
      messageInstance.destroy();
      messageInstance = null;
      opts.onClose && opts.onClose();
    }
  }
  var opts2 = _objectSpread(_objectSpread(_objectSpread({}, options), opts), {}, {
    onClose: close
  });
  getInstance(opts2, function(notification) {
    messageInstance = notification;
  });
}
var errorMsg = function errorMsg2(msg) {
  if (!msg) {
    console.warn("[NutUI Toast]: msg cannot be null");
  }
};
function show(option) {
  if (typeof option === "string") {
    errorMsg(option);
    return notice({
      content: option
    });
  }
  errorMsg(option.content);
  return notice(_objectSpread({}, option));
}
function config(config2) {
  if (config2.duration !== void 0) {
    options.duration = config2.duration;
  }
  if (config2.position !== void 0) {
    options.position = config2.position;
  }
  if (config2.closeOnOverlayClick !== void 0) {
    options.closeOnOverlayClick = config2.closeOnOverlayClick;
  }
  if (config2.lockScroll !== void 0) {
    options.lockScroll = config2.lockScroll;
  }
}
var Toast = {
  show,
  config,
  clear: function clear() {
    if (messageInstance) {
      messageInstance.destroy();
      messageInstance = null;
    }
  }
};
export {
  Toast as default
};
