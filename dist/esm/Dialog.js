import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
var _excluded = ["visible", "footer", "hideConfirmButton", "hideCancelButton", "lockScroll", "disableConfirmButton", "closeOnOverlayClick", "confirmText", "cancelText", "onClose", "onCancel", "onConfirm", "beforeCancel", "beforeClose"];
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
import React__default, { forwardRef } from "react";
import classNames from "classnames";
import Button from "./Button.js";
import { r as render, u as unmount } from "./render.js";
import { CSSTransition } from "react-transition-group";
import { d as defaultOverlayProps } from "./overlay2.js";
import { C as ComponentDefaults } from "./typings.js";
import Overlay from "./Overlay.js";
import { useConfig } from "./ConfigProvider.js";
import "react-dom";
function ConfirmDialog(props) {
  return React__default.createElement(Dialog, _objectSpread({}, props), props.content);
}
var normalizeConfig = function normalizeConfig2(config) {
  if (config.isNotice) {
    var icon = config.icon;
    if (!icon && icon !== null) {
      switch (config.noticeType) {
        case "alert":
          icon = "";
          break;
      }
    }
    config.hideCancelButton = true;
  }
  return config;
};
var confirm = function confirm2(config, renderFunc) {
  var div = document.createElement("div");
  document.body.appendChild(div);
  var dialogConfig = _objectSpread(_objectSpread({}, config), {}, {
    visible: false
  });
  var render$1 = function render$12(props, callback) {
    render(React__default.createElement(ConfirmDialog, _objectSpread(_objectSpread({}, props), {}, {
      onCancel: function onCancel2() {
        return _onCancel();
      }
    })), div);
    callback && callback();
  };
  var renderFunction = renderFunc || render$1;
  var onConfirm = function onConfirm2() {
    var _onConfirm = config.onConfirm || config.onConfirm;
    var ret = _onConfirm === null || _onConfirm === void 0 ? void 0 : _onConfirm();
    if (ret && ret.then) {
      renderFunction(dialogConfig);
      ret.then(function() {
        _onCancel(true);
      }, function(e) {
        console.error(e);
        renderFunction(dialogConfig);
      });
    }
    if (!ret) {
      _onCancel(true);
    }
  };
  dialogConfig.onConfirm = onConfirm;
  dialogConfig = normalizeConfig(dialogConfig);
  dialogConfig.visible = true;
  renderFunction(dialogConfig);
  var destroy = function destroy2() {
    unmount(div);
    if (div !== null && div !== void 0 && div.parentNode) {
      div.parentNode.removeChild(div);
    }
  };
  var _onCancel = function _onCancel2(confirm22) {
    !confirm22 && config.onCancel && config.onCancel();
    dialogConfig.visible = false;
    dialogConfig.onClose = function() {
      config.onClose && config.onClose();
    };
    renderFunction(dialogConfig, function() {
      destroy();
    });
  };
  var update = function update2(newConfig) {
    dialogConfig = _objectSpread(_objectSpread({}, dialogConfig), {}, {
      title: config.title
    }, newConfig);
    dialogConfig = normalizeConfig(dialogConfig);
    renderFunction(dialogConfig);
  };
  var close = function close2() {
    dialogConfig.visible = false;
    dialogConfig.onClose = function() {
      config.onClose && config.onClose();
      destroy();
    };
    renderFunction(dialogConfig);
  };
  return {
    close,
    update
  };
};
var Content = function Content2(props) {
  var visible = props.visible, title = props.title, footer = props.footer, footerDirection = props.footerDirection, onClick = props.onClick, children = props.children;
  var classPrefix = "nut-dialog";
  var renderHeader = function renderHeader2() {
    return title ? React__default.createElement("div", {
      className: "".concat(classPrefix, "__header")
    }, title) : null;
  };
  var renderFooter = function renderFooter2() {
    return footer ? React__default.createElement("div", {
      className: classNames("".concat(classPrefix, "__footer"), _defineProperty({}, footerDirection, footerDirection))
    }, footer) : null;
  };
  var handleClick = function handleClick2(e) {
    onClick && onClick(e);
  };
  return React__default.createElement("div", {
    className: "".concat(classPrefix, "__outer"),
    onClick: function onClick2(e) {
      return handleClick(e);
    }
  }, React__default.createElement("div", {
    className: classPrefix,
    style: {
      display: visible ? "flex" : "none"
    }
  }, renderHeader(), React__default.createElement("div", {
    className: "".concat(classPrefix, "__content")
  }, React__default.createElement(React__default.Fragment, null, children)), renderFooter()));
};
Content.displayName = "NutContent";
var defaultDialogProps = _objectSpread(_objectSpread({}, ComponentDefaults), {}, {
  overlay: true,
  overlayStyle: {},
  overlayClassName: "",
  onCancel: function onCancel() {
  },
  onClose: function onClose() {
  },
  onOverlayClick: function onOverlayClick(e) {
    return true;
  }
}, defaultOverlayProps);
var DialogWrap = function DialogWrap2(props) {
  var visible = props.visible, overlay = props.overlay, overlayStyle = props.overlayStyle, overlayClassName = props.overlayClassName, closeOnOverlayClick = props.closeOnOverlayClick, lockScroll = props.lockScroll, onClose2 = props.onClose, onCancel2 = props.onCancel, onOverlayClick2 = props.onOverlayClick;
  var onHandleClickOverlay = function onHandleClickOverlay2(e) {
    if (closeOnOverlayClick && visible && e.target === e.currentTarget) {
      var closed = onOverlayClick2 && onOverlayClick2(e);
      closed && (onClose2 === null || onClose2 === void 0 ? void 0 : onClose2());
      closed && (onCancel2 === null || onCancel2 === void 0 ? void 0 : onCancel2());
    }
  };
  return React__default.createElement(React__default.Fragment, null, overlay ? React__default.createElement(Overlay, {
    style: overlayStyle,
    className: overlayClassName,
    visible,
    closeOnOverlayClick,
    lockScroll,
    onClick: onHandleClickOverlay
  }) : null, React__default.createElement(CSSTransition, {
    "in": visible,
    timeout: 300,
    classNames: "fadeDialog",
    unmountOnExit: true,
    appear: true
  }, React__default.createElement(Content, _objectSpread(_objectSpread({}, props), {}, {
    visible
  }))));
};
DialogWrap.defaultProps = defaultDialogProps;
DialogWrap.displayName = "NutDialogWrap";
var defaultProps = {
  confirmText: "",
  cancelText: "",
  overlay: true,
  closeOnOverlayClick: true,
  hideConfirmButton: false,
  hideCancelButton: false,
  disableConfirmButton: false,
  footerDirection: "horizontal",
  lockScroll: true,
  beforeCancel: function beforeCancel() {
    return true;
  },
  beforeClose: function beforeClose() {
    return true;
  }
};
var BaseDialog = function BaseDialog2(props, ref) {
  var _useConfig = useConfig(), locale = _useConfig.locale;
  var visible = props.visible, footer = props.footer, hideConfirmButton = props.hideConfirmButton, hideCancelButton = props.hideCancelButton, lockScroll = props.lockScroll, disableConfirmButton = props.disableConfirmButton, closeOnOverlayClick = props.closeOnOverlayClick, confirmText = props.confirmText, cancelText = props.cancelText, onClose2 = props.onClose, onCancel2 = props.onCancel, onConfirm = props.onConfirm, beforeCancel2 = props.beforeCancel, beforeClose2 = props.beforeClose, restProps = _objectWithoutProperties(props, _excluded);
  var classPrefix = "nut-dialog";
  var renderFooter = function renderFooter2() {
    if (footer === null)
      return "";
    var handleCancel = function handleCancel2(e) {
      e.stopPropagation();
      if (!(beforeCancel2 !== null && beforeCancel2 !== void 0 && beforeCancel2()))
        return;
      if (!(beforeClose2 !== null && beforeClose2 !== void 0 && beforeClose2()))
        return;
      onClose2 === null || onClose2 === void 0 ? void 0 : onClose2();
      onCancel2 === null || onCancel2 === void 0 ? void 0 : onCancel2();
    };
    var handleOk = function handleOk2(e) {
      e.stopPropagation();
      onClose2 === null || onClose2 === void 0 ? void 0 : onClose2();
      onConfirm === null || onConfirm === void 0 ? void 0 : onConfirm(e);
    };
    return footer || React__default.createElement(React__default.Fragment, null, !hideCancelButton && React__default.createElement(Button, {
      size: "small",
      fill: "outline",
      type: "primary",
      className: "".concat(classPrefix, "__footer-cancel"),
      onClick: function onClick(e) {
        return handleCancel(e);
      }
    }, cancelText || locale.cancel), !hideConfirmButton && React__default.createElement(Button, {
      size: "small",
      type: "primary",
      className: classNames("".concat(classPrefix, "__footer-ok"), {
        disabled: disableConfirmButton
      }),
      disabled: disableConfirmButton,
      onClick: function onClick(e) {
        return handleOk(e);
      }
    }, confirmText || locale.confirm));
  };
  return React__default.createElement("div", {
    style: {
      display: visible ? "block" : "none"
    }
  }, React__default.createElement(DialogWrap, _objectSpread(_objectSpread({}, props), {}, {
    visible,
    lockScroll,
    footer: renderFooter(),
    onClose: onClose2,
    onCancel: onCancel2
  })));
};
var Dialog = forwardRef(BaseDialog);
Dialog.confirm = function(props) {
  return confirm(props);
};
["alert"].forEach(function(type) {
  Dialog[type] = function(props) {
    return confirm(_objectSpread(_objectSpread({}, props), {}, {
      isNotice: false,
      noticeType: type
    }));
  };
});
Dialog.defaultProps = defaultProps;
Dialog.displayName = "NutDialog";
export {
  Dialog as default
};
