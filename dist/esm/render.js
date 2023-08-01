import _asyncToGenerator from "@babel/runtime/helpers/asyncToGenerator";
import _typeof from "@babel/runtime/helpers/typeof";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
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
import * as ReactDOM from "react-dom";
var fullClone = _objectSpread({}, ReactDOM);
var version = fullClone.version, reactRender = fullClone.render, unmountComponentAtNode = fullClone.unmountComponentAtNode;
var createRoot;
try {
  var mainVersion = Number((version || "").split(".")[0]);
  if (mainVersion >= 18 && fullClone.createRoot) {
    createRoot = fullClone.createRoot;
  }
} catch (e) {
}
function toggleWarning(skip) {
  var __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = fullClone.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  if (__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED && _typeof(__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED) === "object") {
    __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.usingClientEntryPoint = skip;
  }
}
var MARK = "__nutui_react_root__";
function legacyRender(node, container) {
  reactRender(node, container);
}
function concurrentRender(node, container) {
  toggleWarning(true);
  var root = container[MARK] || createRoot(container);
  toggleWarning(false);
  root.render(node);
  container[MARK] = root;
}
function render(node, container) {
  if (createRoot) {
    concurrentRender(node, container);
    return;
  }
  legacyRender(node, container);
}
function legacyUnmount(container) {
  return unmountComponentAtNode(container);
}
function concurrentUnmount(_x) {
  return _concurrentUnmount.apply(this, arguments);
}
function _concurrentUnmount() {
  _concurrentUnmount = _asyncToGenerator(/* @__PURE__ */ _regeneratorRuntime.mark(function _callee(container) {
    return _regeneratorRuntime.wrap(function _callee$(_context) {
      while (1)
        switch (_context.prev = _context.next) {
          case 0:
            return _context.abrupt("return", Promise.resolve().then(function() {
              var _container$MARK;
              (_container$MARK = container[MARK]) === null || _container$MARK === void 0 ? void 0 : _container$MARK.unmount();
              delete container[MARK];
            }));
          case 1:
          case "end":
            return _context.stop();
        }
    }, _callee);
  }));
  return _concurrentUnmount.apply(this, arguments);
}
function unmount(container) {
  if (createRoot) {
    return concurrentUnmount(container);
  }
  return legacyUnmount(container);
}
export {
  render as r,
  unmount as u
};
