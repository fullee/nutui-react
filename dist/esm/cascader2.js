import _typeof from "@babel/runtime/helpers/typeof";
import _asyncToGenerator from "@babel/runtime/helpers/asyncToGenerator";
import _slicedToArray from "@babel/runtime/helpers/slicedToArray";
import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import _regeneratorRuntime from "@babel/runtime/regenerator";
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
function _toPropertyKey(arg) {
  var key = _toPrimitive(arg, "string");
  return _typeof(key) === "symbol" ? key : String(key);
}
function _toPrimitive(input, hint) {
  if (_typeof(input) !== "object" || input === null)
    return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== void 0) {
    var res = prim.call(input, hint || "default");
    if (_typeof(res) !== "object")
      return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
}
import React__default, { useState, useEffect, isValidElement } from "react";
import classNames from "classnames";
import { Loading, Checklist } from "@nutui/icons-react";
import { P as Popup } from "./popup2.js";
import { T as Tabs } from "./tabs2.js";
import { C as ComponentDefaults } from "./typings.js";
import { u as usePropsValue } from "./use-props-value.js";
var formatTree = function formatTree2(tree, parent, config) {
  return tree.map(function(node) {
    var _config$value = config.value, valueKey = _config$value === void 0 ? "value" : _config$value, _config$text = config.text, textKey = _config$text === void 0 ? "text" : _config$text, _config$children = config.children, childrenKey = _config$children === void 0 ? "children" : _config$children;
    var value = node[valueKey], text = node[textKey], children = node[childrenKey], others = _objectWithoutProperties(node, [valueKey, textKey, childrenKey].map(_toPropertyKey));
    var newNode = _objectSpread(_objectSpread({
      loading: false
    }, others), {}, {
      level: parent ? (parent && parent.level || 0) + 1 : 0,
      value,
      text,
      children,
      _parent: parent
    });
    if (newNode.children && newNode.children.length) {
      newNode.children = formatTree2(newNode.children, newNode, config);
    }
    return newNode;
  });
};
var eachTree = function eachTree2(tree, cb) {
  var i = 0;
  var node;
  while (node = tree[i++]) {
    if (cb(node) === true) {
      break;
    }
    if (node.children && node.children.length) {
      eachTree2(node.children, cb);
    }
  }
};
var defaultConvertConfig = {
  topId: null,
  idKey: "id",
  pidKey: "pid",
  sortKey: ""
};
var convertListToOptions = function convertListToOptions2(list, options) {
  var mergedOptions = _objectSpread(_objectSpread({}, defaultConvertConfig), options || {});
  var topId = mergedOptions.topId, idKey = mergedOptions.idKey, pidKey = mergedOptions.pidKey, sortKey = mergedOptions.sortKey;
  var result = [];
  var map = {};
  list.forEach(function(node) {
    node = _objectSpread({}, node);
    var _node = node, id = _node[idKey], pid = _node[pidKey];
    var children = map[pid] = map[pid] || [];
    if (!result.length && pid === topId) {
      result = children;
    }
    children.push(node);
    node.children = map[id] || (map[id] = []);
  });
  if (sortKey) {
    Object.keys(map).forEach(function(i) {
      if (map[i].length > 1) {
        map[i].sort(function(a, b) {
          return a[sortKey] - b[sortKey];
        });
      }
    });
  }
  map = null;
  return result;
};
var Tree = /* @__PURE__ */ function() {
  function Tree2(nodes, config) {
    var _this = this;
    _classCallCheck(this, Tree2);
    _defineProperty(this, "nodes", void 0);
    _defineProperty(this, "config", void 0);
    _defineProperty(this, "isLeaf", function(node, lazy) {
      var leaf = node.leaf, children = node.children;
      var hasChildren = Array.isArray(children) && Boolean(children.length);
      return leaf || !hasChildren && !lazy;
    });
    _defineProperty(this, "hasChildren", function(node, lazy) {
      var isLeaf = _this.isLeaf(node, lazy);
      if (isLeaf) {
        return false;
      }
      var children = node.children;
      return Array.isArray(children) && Boolean(children.length);
    });
    this.config = _objectSpread({
      value: "value",
      text: "text",
      children: "children"
    }, config || {});
    this.nodes = formatTree(nodes, null, this.config);
  }
  _createClass(Tree2, [{
    key: "updateChildren",
    value: function updateChildren(nodes, parent) {
      if (!parent) {
        this.nodes = formatTree(nodes, null, this.config);
      } else {
        parent.children = formatTree(nodes, parent, this.config);
      }
    }
    // for test
  }, {
    key: "getNodeByValue",
    value: function getNodeByValue(value) {
      var foundNode;
      eachTree(this.nodes, function(node) {
        if (node.value === value) {
          foundNode = node;
          return true;
        }
        return null;
      });
      return foundNode;
    }
  }, {
    key: "getPathNodesByValue",
    value: function getPathNodesByValue(value) {
      if (!value.length) {
        return [];
      }
      var pathNodes = [];
      var currentNodes = this.nodes;
      while (currentNodes && currentNodes.length) {
        var foundNode = currentNodes.find(function(node) {
          return node.value === value[node.level];
        });
        if (!foundNode) {
          break;
        }
        pathNodes.push(foundNode);
        currentNodes = foundNode.children;
      }
      return pathNodes;
    }
  }]);
  return Tree2;
}();
var defaultProps = _objectSpread(_objectSpread({}, ComponentDefaults), {}, {
  activeColor: "",
  activeIcon: "checklist",
  popup: true,
  visible: false,
  options: [],
  optionKey: {
    textKey: "text",
    valueKey: "value",
    childrenKey: "children"
  },
  format: {},
  closeable: false,
  closeIconPosition: "top-right",
  closeIcon: "close",
  lazy: false,
  onLoad: function onLoad() {
  },
  onClose: function onClose() {
  },
  onChange: function onChange() {
  },
  onPathChange: function onPathChange() {
  }
});
var InternalCascader = function InternalCascader2(props, ref) {
  var _defaultProps$props = _objectSpread(_objectSpread({}, defaultProps), props), className = _defaultProps$props.className, style = _defaultProps$props.style, activeColor = _defaultProps$props.activeColor, activeIcon = _defaultProps$props.activeIcon, popup = _defaultProps$props.popup, visible = _defaultProps$props.visible, options = _defaultProps$props.options, value = _defaultProps$props.value, defaultValue = _defaultProps$props.defaultValue, optionKey = _defaultProps$props.optionKey, format = _defaultProps$props.format, closeable = _defaultProps$props.closeable, closeIconPosition = _defaultProps$props.closeIconPosition, closeIcon = _defaultProps$props.closeIcon, lazy = _defaultProps$props.lazy, onLoad2 = _defaultProps$props.onLoad, onClose2 = _defaultProps$props.onClose, onChange2 = _defaultProps$props.onChange, onPathChange2 = _defaultProps$props.onPathChange;
  var _useState = useState("c1"), _useState2 = _slicedToArray(_useState, 2), tabvalue = _useState2[0], setTabvalue = _useState2[1];
  var _useState3 = useState([]), _useState4 = _slicedToArray(_useState3, 2), optionsData = _useState4[0], setOptionsData = _useState4[1];
  var isLazy = function isLazy2() {
    return state.configs.lazy && Boolean(state.configs.onLoad);
  };
  var _usePropsValue = usePropsValue({
    value,
    defaultValue,
    finalValue: defaultValue
  }), _usePropsValue2 = _slicedToArray(_usePropsValue, 2), innerValue = _usePropsValue2[0], setInnerValue = _usePropsValue2[1];
  var _useState5 = useState({
    optionsData: [],
    panes: [{
      nodes: [],
      selectedNode: [],
      paneKey: ""
    }],
    tree: new Tree([], {}),
    tabsCursor: 0,
    initLoading: false,
    currentProcessNode: [],
    configs: {
      lazy,
      onLoad: onLoad2,
      optionKey,
      format
    },
    lazyLoadMap: /* @__PURE__ */ new Map()
  }), _useState6 = _slicedToArray(_useState5, 1), state = _useState6[0];
  var classPrefix = classNames("nut-cascader");
  var classesPane = classNames(_defineProperty({}, "".concat(classPrefix, "-pane"), true));
  useEffect(function() {
    initData();
  }, [options, format]);
  var initData = /* @__PURE__ */ function() {
    var _ref = _asyncToGenerator(/* @__PURE__ */ _regeneratorRuntime.mark(function _callee() {
      return _regeneratorRuntime.wrap(function _callee$(_context) {
        while (1)
          switch (_context.prev = _context.next) {
            case 0:
              state.lazyLoadMap.clear();
              if (format && Object.keys(format).length > 0) {
                state.optionsData = convertListToOptions(options, format);
              } else {
                state.optionsData = options;
              }
              state.tree = new Tree(state.optionsData, {
                value: state.configs.optionKey.valueKey,
                text: state.configs.optionKey.textKey,
                children: state.configs.optionKey.childrenKey
              });
              if (!(isLazy() && !state.tree.nodes.length)) {
                _context.next = 6;
                break;
              }
              _context.next = 6;
              return invokeLazyLoad({
                root: true,
                loading: true,
                text: "",
                value: ""
              });
            case 6:
              state.panes = [{
                nodes: state.tree.nodes,
                selectedNode: null,
                paneKey: "c1"
              }];
              syncValue();
              setOptionsData(state.panes);
            case 9:
            case "end":
              return _context.stop();
          }
      }, _callee);
    }));
    return function initData2() {
      return _ref.apply(this, arguments);
    };
  }();
  var syncValue = /* @__PURE__ */ function() {
    var _ref2 = _asyncToGenerator(/* @__PURE__ */ _regeneratorRuntime.mark(function _callee3() {
      var currentValue, needToSync, parent, last, pathNodes;
      return _regeneratorRuntime.wrap(function _callee3$(_context3) {
        while (1)
          switch (_context3.prev = _context3.next) {
            case 0:
              currentValue = innerValue;
              if (!(currentValue === void 0 || currentValue !== defaultValue || !state.tree.nodes.length)) {
                _context3.next = 3;
                break;
              }
              return _context3.abrupt("return");
            case 3:
              if (!(currentValue.length === 0)) {
                _context3.next = 6;
                break;
              }
              state.tabsCursor = 0;
              return _context3.abrupt("return");
            case 6:
              needToSync = currentValue;
              if (!(isLazy() && Array.isArray(currentValue) && currentValue.length)) {
                _context3.next = 19;
                break;
              }
              needToSync = [];
              parent = state.tree.nodes.find(function(node) {
                return node.value === currentValue[0];
              });
              if (!parent) {
                _context3.next = 19;
                break;
              }
              needToSync = [parent.value];
              state.initLoading = true;
              _context3.next = 15;
              return currentValue.slice(1).reduce(/* @__PURE__ */ function() {
                var _ref3 = _asyncToGenerator(/* @__PURE__ */ _regeneratorRuntime.mark(function _callee2(p, value2) {
                  var _parent2$children;
                  var parent2, node;
                  return _regeneratorRuntime.wrap(function _callee2$(_context2) {
                    while (1)
                      switch (_context2.prev = _context2.next) {
                        case 0:
                          _context2.next = 2;
                          return p;
                        case 2:
                          parent2 = _context2.sent;
                          _context2.next = 5;
                          return invokeLazyLoad(parent2);
                        case 5:
                          node = parent2 === null || parent2 === void 0 ? void 0 : (_parent2$children = parent2.children) === null || _parent2$children === void 0 ? void 0 : _parent2$children.find(function(item) {
                            return item.value === value2;
                          });
                          if (node) {
                            needToSync.push(value2);
                          }
                          return _context2.abrupt("return", Promise.resolve(node));
                        case 8:
                        case "end":
                          return _context2.stop();
                      }
                  }, _callee2);
                }));
                return function(_x, _x2) {
                  return _ref3.apply(this, arguments);
                };
              }(), Promise.resolve(parent));
            case 15:
              last = _context3.sent;
              _context3.next = 18;
              return invokeLazyLoad(last);
            case 18:
              state.initLoading = false;
            case 19:
              if (needToSync.length && currentValue === defaultValue) {
                pathNodes = state.tree.getPathNodesByValue(needToSync);
                pathNodes.forEach(function(node, index) {
                  state.tabsCursor = index;
                  chooseItem(node, true);
                });
              }
            case 20:
            case "end":
              return _context3.stop();
          }
      }, _callee3);
    }));
    return function syncValue2() {
      return _ref2.apply(this, arguments);
    };
  }();
  var invokeLazyLoad = /* @__PURE__ */ function() {
    var _ref4 = _asyncToGenerator(/* @__PURE__ */ _regeneratorRuntime.mark(function _callee4(node) {
      var parent, lazyLoadPromise, nodes;
      return _regeneratorRuntime.wrap(function _callee4$(_context4) {
        while (1)
          switch (_context4.prev = _context4.next) {
            case 0:
              if (node) {
                _context4.next = 2;
                break;
              }
              return _context4.abrupt("return");
            case 2:
              if (state.configs.onLoad) {
                _context4.next = 5;
                break;
              }
              node.leaf = true;
              return _context4.abrupt("return");
            case 5:
              if (!(state.tree.isLeaf(node, isLazy()) || state.tree.hasChildren(node, isLazy()))) {
                _context4.next = 7;
                break;
              }
              return _context4.abrupt("return");
            case 7:
              node.loading = true;
              parent = node.root ? null : node;
              lazyLoadPromise = state.lazyLoadMap.get(node);
              if (!lazyLoadPromise) {
                lazyLoadPromise = new Promise(function(resolve) {
                  var _state$configs$onLoad, _state$configs;
                  (_state$configs$onLoad = (_state$configs = state.configs).onLoad) === null || _state$configs$onLoad === void 0 ? void 0 : _state$configs$onLoad.call(_state$configs, node, resolve);
                });
                state.lazyLoadMap.set(node, lazyLoadPromise);
              }
              _context4.next = 13;
              return lazyLoadPromise;
            case 13:
              nodes = _context4.sent;
              if (Array.isArray(nodes) && nodes.length > 0) {
                state.tree.updateChildren(nodes, parent);
              } else {
                node.leaf = true;
              }
              node.loading = false;
              state.lazyLoadMap["delete"](node);
            case 17:
            case "end":
              return _context4.stop();
          }
      }, _callee4);
    }));
    return function invokeLazyLoad2(_x3) {
      return _ref4.apply(this, arguments);
    };
  }();
  var close = function close2() {
    onClose2 && onClose2();
  };
  var closePopup = function closePopup2() {
    close();
  };
  var chooseItem = /* @__PURE__ */ function() {
    var _ref5 = _asyncToGenerator(/* @__PURE__ */ _regeneratorRuntime.mark(function _callee5(node, type) {
      var pathNodes, optionParams, level, _pathNodes, _optionParams;
      return _regeneratorRuntime.wrap(function _callee5$(_context5) {
        while (1)
          switch (_context5.prev = _context5.next) {
            case 0:
              if (!(!type && node.disabled || !state.panes[state.tabsCursor])) {
                _context5.next = 2;
                break;
              }
              return _context5.abrupt("return");
            case 2:
              if (!state.tree.isLeaf(node, isLazy())) {
                _context5.next = 10;
                break;
              }
              node.leaf = true;
              state.panes[state.tabsCursor].selectedNode = node;
              state.panes = state.panes.slice(0, node.level + 1);
              if (!type) {
                pathNodes = state.panes.map(function(item) {
                  return item.selectedNode;
                });
                optionParams = pathNodes.map(function(item) {
                  return item.value;
                });
                onChange2(optionParams, pathNodes);
                onPathChange2(optionParams, pathNodes);
                setInnerValue(optionParams);
              }
              setOptionsData(state.panes);
              close();
              return _context5.abrupt("return");
            case 10:
              if (!state.tree.hasChildren(node, isLazy())) {
                _context5.next = 20;
                break;
              }
              level = node.level + 1;
              state.panes[state.tabsCursor].selectedNode = node;
              state.panes = state.panes.slice(0, level);
              state.tabsCursor = level;
              state.panes.push({
                nodes: node.children || [],
                selectedNode: null,
                paneKey: "c".concat(state.tabsCursor + 1)
              });
              setOptionsData(state.panes);
              setTabvalue("c".concat(state.tabsCursor + 1));
              if (!type) {
                _pathNodes = state.panes.map(function(item) {
                  return item.selectedNode;
                });
                _optionParams = _pathNodes.map(function(item) {
                  return item === null || item === void 0 ? void 0 : item.value;
                });
                onPathChange2(_optionParams, _pathNodes);
              }
              return _context5.abrupt("return");
            case 20:
              state.currentProcessNode = node;
              if (!node.loading) {
                _context5.next = 23;
                break;
              }
              return _context5.abrupt("return");
            case 23:
              _context5.next = 25;
              return invokeLazyLoad(node);
            case 25:
              if (state.currentProcessNode === node) {
                state.panes[state.tabsCursor].selectedNode = node;
                chooseItem(node, type);
              }
              setOptionsData(state.panes);
            case 27:
            case "end":
              return _context5.stop();
          }
      }, _callee5);
    }));
    return function chooseItem2(_x4, _x5) {
      return _ref5.apply(this, arguments);
    };
  }();
  var renderItem = function renderItem2(pane, node, index) {
    var _pane$selectedNode;
    var classPrefix2 = "nut-cascader-item";
    var checked = ((_pane$selectedNode = pane.selectedNode) === null || _pane$selectedNode === void 0 ? void 0 : _pane$selectedNode.value) === node.value;
    var classes = classNames({
      active: checked,
      disabled: node.disabled
    }, classPrefix2);
    var classesTitle = classNames(_defineProperty({}, "".concat(classPrefix2, "__title"), true));
    var renderIcon = function renderIcon2() {
      if (checked) {
        if (isValidElement(activeIcon)) {
          return activeIcon;
        }
        return React__default.createElement(Checklist, {
          className: "".concat(checked ? "".concat(classPrefix, "__icon-check") : "")
        });
      }
      return null;
    };
    return React__default.createElement("div", {
      style: {
        color: checked ? activeColor : ""
      },
      className: classes,
      key: index,
      onClick: function onClick() {
        chooseItem(node, false);
      }
    }, React__default.createElement("div", {
      className: classesTitle
    }, node.text), node.loading ? React__default.createElement(Loading, {
      color: "#969799",
      className: "nut-cascader-item__icon-loading"
    }) : renderIcon());
  };
  var renderTabs = function renderTabs2() {
    return React__default.createElement("div", {
      className: "".concat(classPrefix, " ").concat(className),
      style
    }, React__default.createElement(Tabs, {
      value: tabvalue,
      title: function title() {
        return optionsData.map(function(pane, index) {
          var _pane$selectedNode2, _pane$selectedNode3;
          return React__default.createElement("div", {
            onClick: function onClick() {
              setTabvalue(pane.paneKey);
              state.tabsCursor = index;
            },
            className: "nut-tabs__titles-item ".concat(tabvalue === pane.paneKey ? "nut-tabs__titles-item--active" : ""),
            key: pane.paneKey
          }, React__default.createElement("span", {
            className: "nut-tabs__titles-item__text"
          }, !state.initLoading && state.panes.length && (pane === null || pane === void 0 ? void 0 : (_pane$selectedNode2 = pane.selectedNode) === null || _pane$selectedNode2 === void 0 ? void 0 : _pane$selectedNode2.text), !state.initLoading && state.panes.length && !(pane !== null && pane !== void 0 && (_pane$selectedNode3 = pane.selectedNode) !== null && _pane$selectedNode3 !== void 0 && _pane$selectedNode3.text) && "请选择", !(!state.initLoading && state.panes.length) && "Loading..."), React__default.createElement("span", {
            className: "nut-tabs__titles-item__line"
          }));
        });
      }
    }, !state.initLoading && state.panes.length ? optionsData.map(function(pane) {
      var _pane$nodes;
      return React__default.createElement(Tabs.TabPane, {
        key: pane.paneKey,
        value: pane.paneKey
      }, React__default.createElement("div", {
        className: classesPane
      }, (_pane$nodes = pane.nodes) === null || _pane$nodes === void 0 ? void 0 : _pane$nodes.map(function(node, index) {
        return renderItem(pane, node, index);
      })));
    }) : React__default.createElement(Tabs.TabPane, null, React__default.createElement("div", {
      className: classesPane
    }))));
  };
  return React__default.createElement(React__default.Fragment, null, popup ? React__default.createElement(Popup, {
    visible,
    position: "bottom",
    round: true,
    closeIcon,
    closeable,
    closeIconPosition,
    title: popup && props.title,
    left: props.left,
    // todo 只关闭，不处理逻辑。和popup的逻辑不一致。关闭时需要增加是否要处理回调
    onOverlayClick: closePopup,
    onCloseIconClick: closePopup
  }, renderTabs()) : renderTabs());
};
var Cascader = React__default.forwardRef(InternalCascader);
Cascader.defaultProps = defaultProps;
Cascader.displayName = "NutCascader";
export {
  Cascader as C
};
