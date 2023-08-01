import _toConsumableArray from "@babel/runtime/helpers/toConsumableArray";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import _slicedToArray from "@babel/runtime/helpers/slicedToArray";
import _createClass from "@babel/runtime/helpers/createClass";
import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
var _excluded = ["children", "uploadIcon", "uploadLabel", "name", "accept", "defaultValue", "value", "previewType", "fit", "disabled", "multiple", "url", "previewUrl", "headers", "timeout", "method", "xhrState", "withCredentials", "data", "preview", "deletable", "maxCount", "capture", "maxFileSize", "className", "autoUpload", "clearInput", "onStart", "onDelete", "onChange", "onFileItemClick", "onProgress", "onSuccess", "onUpdate", "onFailure", "onOversize", "beforeUpload", "beforeXhrUpload", "beforeDelete"];
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
import React__default, { useState, useEffect, useImperativeHandle } from "react";
import classNames from "classnames";
import { Failure, Loading, Link, Del, Photograph } from "@nutui/icons-react";
import Progress from "./Progress.js";
import { useConfig } from "./ConfigProvider.js";
import { a as isPromise } from "./index.js";
import { C as ComponentDefaults } from "./typings.js";
var UploadOptions = /* @__PURE__ */ _createClass(function UploadOptions2() {
  _classCallCheck(this, UploadOptions2);
  _defineProperty(this, "url", "");
  _defineProperty(this, "name", "file");
  _defineProperty(this, "fileType", "image");
  _defineProperty(this, "formData", void 0);
  _defineProperty(this, "sourceFile", void 0);
  _defineProperty(this, "method", "post");
  _defineProperty(this, "xhrState", 200);
  _defineProperty(this, "timeout", 30 * 1e3);
  _defineProperty(this, "headers", {});
  _defineProperty(this, "withCredentials", false);
  _defineProperty(this, "onStart", void 0);
  _defineProperty(this, "taroFilePath", void 0);
  _defineProperty(this, "onProgress", void 0);
  _defineProperty(this, "onSuccess", void 0);
  _defineProperty(this, "onFailure", void 0);
  _defineProperty(this, "beforeXhrUpload", void 0);
});
var Upload = /* @__PURE__ */ function() {
  function Upload2(options) {
    _classCallCheck(this, Upload2);
    _defineProperty(this, "options", void 0);
    this.options = options;
  }
  _createClass(Upload2, [{
    key: "upload",
    value: function upload() {
      var options = this.options;
      var xhr = new XMLHttpRequest();
      xhr.timeout = options.timeout;
      if (xhr.upload) {
        var _options$onStart;
        xhr.upload.addEventListener("progress", function(e) {
          var _options$onProgress;
          (_options$onProgress = options.onProgress) === null || _options$onProgress === void 0 ? void 0 : _options$onProgress.call(options, e, options);
        }, false);
        xhr.onreadystatechange = function() {
          if (xhr.readyState === 4) {
            if (xhr.status === options.xhrState) {
              var _options$onSuccess;
              (_options$onSuccess = options.onSuccess) === null || _options$onSuccess === void 0 ? void 0 : _options$onSuccess.call(options, xhr.responseText, options);
            } else {
              var _options$onFailure;
              (_options$onFailure = options.onFailure) === null || _options$onFailure === void 0 ? void 0 : _options$onFailure.call(options, xhr.responseText, options);
            }
          }
        };
        xhr.withCredentials = options.withCredentials;
        xhr.open(options.method, options.url, true);
        for (var _i = 0, _Object$entries = Object.entries(options.headers); _i < _Object$entries.length; _i++) {
          var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2), key = _Object$entries$_i[0], value = _Object$entries$_i[1];
          xhr.setRequestHeader(key, value);
        }
        (_options$onStart = options.onStart) === null || _options$onStart === void 0 ? void 0 : _options$onStart.call(options, options);
        if (options.beforeXhrUpload) {
          options.beforeXhrUpload(xhr, options);
        } else {
          xhr.send(options.formData);
        }
      } else {
        console.warn("浏览器不支持 XMLHttpRequest");
      }
    }
  }]);
  return Upload2;
}();
var funcInterceptor = function funcInterceptor2(interceptor, _ref) {
  var _ref$args = _ref.args, args = _ref$args === void 0 ? [] : _ref$args, done = _ref.done, canceled = _ref.canceled;
  if (interceptor) {
    var returnVal = interceptor.apply(null, args);
    if (isPromise(returnVal)) {
      returnVal.then(function(value) {
        if (value) {
          done(value);
        } else if (canceled) {
          canceled();
        }
      })["catch"](function() {
      });
    } else if (returnVal) {
      done();
    } else if (canceled) {
      canceled();
    }
  } else {
    done();
  }
};
var defaultProps = _objectSpread(_objectSpread({}, ComponentDefaults), {}, {
  url: "",
  maxCount: 1,
  previewType: "picture",
  fit: "cover",
  name: "file",
  accept: "*",
  disabled: false,
  autoUpload: true,
  multiple: false,
  maxFileSize: Number.MAX_VALUE,
  data: {},
  headers: {},
  method: "post",
  xhrState: 200,
  timeout: 1e3 * 30,
  withCredentials: false,
  clearInput: true,
  preview: true,
  deletable: true,
  capture: false,
  beforeDelete: function beforeDelete(file, files) {
    return true;
  }
});
var FileItem = /* @__PURE__ */ _createClass(function FileItem2() {
  _classCallCheck(this, FileItem2);
  _defineProperty(this, "status", "ready");
  _defineProperty(this, "message", "准备中..");
  _defineProperty(this, "uid", /* @__PURE__ */ (/* @__PURE__ */ new Date()).getTime().toString());
  _defineProperty(this, "name", void 0);
  _defineProperty(this, "url", void 0);
  _defineProperty(this, "type", void 0);
  _defineProperty(this, "path", void 0);
  _defineProperty(this, "percentage", 0);
  _defineProperty(this, "formData", new FormData());
  _defineProperty(this, "responseText", void 0);
});
var InternalUploader = function InternalUploader2(props, ref) {
  var _useConfig = useConfig(), locale = _useConfig.locale;
  var _defaultProps$props = _objectSpread(_objectSpread({}, defaultProps), props), children = _defaultProps$props.children, uploadIcon = _defaultProps$props.uploadIcon, uploadLabel = _defaultProps$props.uploadLabel, name = _defaultProps$props.name, accept = _defaultProps$props.accept, defaultValue = _defaultProps$props.defaultValue, value = _defaultProps$props.value, previewType = _defaultProps$props.previewType, fit = _defaultProps$props.fit, disabled = _defaultProps$props.disabled, multiple = _defaultProps$props.multiple, url = _defaultProps$props.url, previewUrl = _defaultProps$props.previewUrl, headers = _defaultProps$props.headers, timeout = _defaultProps$props.timeout, method = _defaultProps$props.method, xhrState = _defaultProps$props.xhrState, withCredentials = _defaultProps$props.withCredentials, data = _defaultProps$props.data, preview = _defaultProps$props.preview, deletable = _defaultProps$props.deletable, maxCount = _defaultProps$props.maxCount, capture = _defaultProps$props.capture, maxFileSize = _defaultProps$props.maxFileSize, className = _defaultProps$props.className, autoUpload = _defaultProps$props.autoUpload, clearInput = _defaultProps$props.clearInput, onStart = _defaultProps$props.onStart, onDelete = _defaultProps$props.onDelete, onChange = _defaultProps$props.onChange, onFileItemClick = _defaultProps$props.onFileItemClick, onProgress = _defaultProps$props.onProgress, onSuccess = _defaultProps$props.onSuccess, onUpdate = _defaultProps$props.onUpdate, onFailure = _defaultProps$props.onFailure, onOversize = _defaultProps$props.onOversize, beforeUpload = _defaultProps$props.beforeUpload, beforeXhrUpload = _defaultProps$props.beforeXhrUpload, beforeDelete2 = _defaultProps$props.beforeDelete, restProps = _objectWithoutProperties(_defaultProps$props, _excluded);
  var _useState = useState(defaultValue || []), _useState2 = _slicedToArray(_useState, 2), fileList = _useState2[0], setFileList = _useState2[1];
  var _useState3 = useState([]), _useState4 = _slicedToArray(_useState3, 2), uploadQueue = _useState4[0], setUploadQueue = _useState4[1];
  useEffect(function() {
    if (value) {
      setFileList(value);
    }
  }, [value]);
  var classes = classNames(className, "nut-uploader");
  useImperativeHandle(ref, function() {
    return {
      submit: function submit() {
        Promise.all(uploadQueue).then(function(res) {
          res.forEach(function(i) {
            return i.upload();
          });
        });
      },
      clear: function clear() {
        clearUploadQueue();
      }
    };
  });
  var clearUploadQueue = function clearUploadQueue2() {
    var index = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : -1;
    if (index > -1) {
      uploadQueue.splice(index, 1);
      setUploadQueue(uploadQueue);
    } else {
      setUploadQueue([]);
      fileList.splice(0, fileList.length);
      setFileList(_toConsumableArray(fileList));
    }
  };
  var clearInputValue = function clearInputValue2(el) {
    el.value = "";
  };
  var executeUpload = function executeUpload2(fileItem, index) {
    var uploadOption = new UploadOptions();
    uploadOption.url = url;
    for (var _i2 = 0, _Object$entries2 = Object.entries(data); _i2 < _Object$entries2.length; _i2++) {
      var _Object$entries2$_i = _slicedToArray(_Object$entries2[_i2], 2), key = _Object$entries2$_i[0], value2 = _Object$entries2$_i[1];
      fileItem.formData.append(key, value2);
    }
    uploadOption.formData = fileItem.formData;
    uploadOption.timeout = timeout * 1;
    uploadOption.method = method;
    uploadOption.xhrState = xhrState;
    uploadOption.headers = headers;
    uploadOption.withCredentials = withCredentials;
    uploadOption.beforeXhrUpload = beforeXhrUpload;
    try {
      uploadOption.sourceFile = fileItem.formData.get(name);
    } catch (error) {
      console.warn(error);
    }
    uploadOption.onStart = function(option) {
      clearUploadQueue(index);
      setFileList(function(fileList2) {
        fileList2.map(function(item) {
          if (item.uid === fileItem.uid) {
            item.status = "ready";
            item.message = locale.uploader.readyUpload;
          }
          return item;
        });
        return _toConsumableArray(fileList2);
      });
      onStart && onStart(option);
    };
    uploadOption.onProgress = function(e, option) {
      setFileList(function(fileList2) {
        fileList2.map(function(item) {
          if (item.uid === fileItem.uid) {
            item.status = "uploading";
            item.message = locale.uploader.uploading;
            item.percentage = (e.loaded / e.total * 100).toFixed(0);
            onProgress && onProgress({
              e,
              option,
              percentage: item.percentage
            });
          }
          return item;
        });
        return _toConsumableArray(fileList2);
      });
    };
    uploadOption.onSuccess = function(responseText, option) {
      setFileList(function(fileList2) {
        onUpdate && onUpdate(fileList2);
        fileList2.map(function(item) {
          if (item.uid === fileItem.uid) {
            item.status = "success";
            item.message = locale.uploader.success;
            item.responseText = responseText;
          }
          return item;
        });
        return _toConsumableArray(fileList2);
      });
      onSuccess && onSuccess({
        responseText,
        option,
        fileList
      });
    };
    uploadOption.onFailure = function(responseText, option) {
      setFileList(function(fileList2) {
        fileList2.map(function(item) {
          if (item.uid === fileItem.uid) {
            item.status = "error";
            item.message = locale.uploader.error;
            item.responseText = responseText;
          }
          return item;
        });
        return _toConsumableArray(fileList2);
      });
      onFailure && onFailure({
        responseText,
        option,
        fileList
      });
    };
    var task = new Upload(uploadOption);
    if (props.autoUpload) {
      task.upload();
    } else {
      uploadQueue.push(new Promise(function(resolve, reject) {
        resolve(task);
      }));
      setUploadQueue(uploadQueue);
    }
  };
  var readFile = function readFile2(files) {
    files.forEach(function(file, index) {
      var formData = new FormData();
      formData.append(name, file);
      var fileItem = new FileItem();
      fileItem.name = file.name;
      fileItem.status = "ready";
      fileItem.type = file.type;
      fileItem.formData = formData;
      fileItem.uid = file.lastModified + fileItem.uid;
      if (autoUpload) {
        fileItem.message = locale.uploader.readyUpload;
      } else {
        fileItem.message = locale.uploader.waitingUpload;
      }
      executeUpload(fileItem, index);
      if (preview && file.type.includes("image")) {
        var reader = new FileReader();
        reader.onload = function(event) {
          fileItem.url = event.target.result;
          fileList.push(fileItem);
          setFileList(_toConsumableArray(fileList));
        };
        reader.readAsDataURL(file);
      } else {
        fileList.push(fileItem);
        setFileList(_toConsumableArray(fileList));
      }
    });
  };
  var filterFiles = function filterFiles2(files) {
    var maximum = props.maxCount * 1;
    var oversizes = new Array();
    var filterFile = files.filter(function(file) {
      if (file.size > maxFileSize) {
        oversizes.push(file);
        return false;
      }
      return true;
    });
    if (oversizes.length) {
      onOversize && onOversize(files);
    }
    if (filterFile.length > maximum) {
      filterFile.splice(maximum, filterFile.length - maximum);
    }
    if (fileList.length !== 0) {
      var index = maximum - fileList.length;
      filterFile.splice(index, filterFile.length - index);
    }
    return filterFile;
  };
  var deleted = function deleted2(file, index) {
    fileList.splice(index, 1);
    onDelete && onDelete(file, fileList);
    setFileList(_toConsumableArray(fileList));
  };
  var onDeleteItem = function onDeleteItem2(file, index) {
    clearUploadQueue(index);
    funcInterceptor(beforeDelete2, {
      args: [file, fileList],
      done: function done() {
        return deleted(file, index);
      }
    });
  };
  var fileChange = function fileChange2(event) {
    if (disabled) {
      return;
    }
    var $el = event.target;
    var files = $el.files;
    if (beforeUpload) {
      beforeUpload(new Array().slice.call(files)).then(function(f) {
        var _files2 = filterFiles(new Array().slice.call(f));
        readFile(_files2);
      });
    } else {
      var _files = filterFiles(new Array().slice.call(files));
      readFile(_files);
    }
    onChange && onChange({
      fileList,
      event
    });
    if (clearInput) {
      clearInputValue($el);
    }
  };
  var handleItemClick = function handleItemClick2(file) {
    onFileItemClick && onFileItemClick(file);
  };
  return React__default.createElement("div", _objectSpread({
    className: classes
  }, restProps), children && React__default.createElement("div", {
    className: "nut-uploader__slot"
  }, React__default.createElement(React__default.Fragment, null, children, maxCount > fileList.length && React__default.createElement(React__default.Fragment, null, capture ? React__default.createElement("input", {
    className: "nut-uploader__input",
    type: "file",
    capture: "user",
    name,
    accept,
    disabled,
    multiple,
    onChange: fileChange
  }) : React__default.createElement("input", {
    className: "nut-uploader__input",
    type: "file",
    name,
    accept,
    disabled,
    multiple,
    onChange: fileChange
  })))), fileList.length !== 0 && fileList.map(function(item, index) {
    return React__default.createElement("div", {
      className: "nut-uploader__preview ".concat(previewType),
      key: item.uid
    }, previewType === "picture" && !children && React__default.createElement("div", {
      className: "nut-uploader__preview-img"
    }, deletable && React__default.createElement(Failure, {
      color: "rgba(0,0,0,0.6)",
      className: "close",
      onClick: function onClick() {
        return onDeleteItem(item, index);
      }
    }), item.status === "ready" ? React__default.createElement("div", {
      className: "nut-uploader__preview__progress"
    }, React__default.createElement("div", {
      className: "nut-uploader__preview__progress__msg"
    }, item.message)) : item.status !== "success" && React__default.createElement("div", {
      className: "nut-uploader__preview__progress"
    }, item.failIcon !== " " && item.loadingIcon !== " " && (item.status === "error" ? item.failIcon || React__default.createElement(Failure, {
      color: "#fff"
    }) : item.loadingIcon || React__default.createElement(Loading, {
      className: "nut-icon-loading",
      color: "#fff"
    })), React__default.createElement("div", {
      className: "nut-uploader__preview__progress__msg"
    }, item.message)), item.type.includes("image") ? React__default.createElement(React__default.Fragment, null, item.url && React__default.createElement("img", {
      className: "nut-uploader__preview-img__c",
      style: {
        objectFit: fit
      },
      src: item.url,
      alt: "",
      onClick: function onClick() {
        return handleItemClick(item);
      }
    })) : React__default.createElement(React__default.Fragment, null, previewUrl ? React__default.createElement("img", {
      className: "nut-uploader__preview-img__c",
      src: previewUrl,
      alt: "",
      onClick: function onClick() {
        return handleItemClick(item);
      }
    }) : React__default.createElement("div", {
      className: "nut-uploader__preview-img__file"
    }, React__default.createElement("div", {
      onClick: function onClick() {
        return handleItemClick(item);
      },
      className: "nut-uploader__preview-img__file__name"
    }, React__default.createElement(Link, {
      color: "#808080"
    }), " ", item.name))), item.status === "success" ? React__default.createElement("div", {
      className: "tips"
    }, item.name) : null), previewType === "list" && React__default.createElement("div", {
      className: "nut-uploader__preview-list"
    }, React__default.createElement("div", {
      className: "nut-uploader__preview-img__file__name ".concat(item.status),
      onClick: function onClick() {
        return handleItemClick(item);
      }
    }, React__default.createElement(Link, null), " ", item.name), deletable && React__default.createElement(Del, {
      color: "#808080",
      className: "nut-uploader__preview-img__file__del",
      onClick: function onClick() {
        return onDeleteItem(item, index);
      }
    }), item.status === "uploading" && React__default.createElement(Progress, {
      percent: item.percentage,
      color: "linear-gradient(270deg, rgba(18,126,255,1) 0%,rgba(32,147,255,1) 32.815625%,rgba(13,242,204,1) 100%)",
      showText: false
    })));
  }), maxCount > fileList.length && previewType === "picture" && !children && React__default.createElement("div", {
    className: "nut-uploader__upload ".concat(previewType, " ").concat(disabled ? "nut-uploader__upload-disabled" : "")
  }, React__default.createElement("div", {
    className: "nut-uploader__icon"
  }, uploadIcon || React__default.createElement(Photograph, {
    width: "20px",
    height: "20px",
    color: "#808080"
  }), React__default.createElement("span", {
    className: "nut-uploader__icon-tip"
  }, uploadLabel)), capture ? React__default.createElement("input", {
    className: "nut-uploader__input",
    type: "file",
    capture: "user",
    name,
    accept,
    disabled,
    multiple,
    onChange: fileChange
  }) : React__default.createElement("input", {
    className: "nut-uploader__input",
    type: "file",
    name,
    accept,
    disabled,
    multiple,
    onChange: fileChange
  })));
};
var Uploader = React__default.forwardRef(InternalUploader);
Uploader.defaultProps = defaultProps;
Uploader.displayName = "NutUploader";
export {
  Uploader as default
};
