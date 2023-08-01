(function(global2, factory) {
  typeof exports === "object" && typeof module !== "undefined" ? factory(exports, require("react"), require("react-dom")) : typeof define === "function" && define.amd ? define(["exports", "react", "react-dom"], factory) : (global2 = typeof globalThis !== "undefined" ? globalThis : global2 || self, factory((global2.nutui = global2.nutui || {}, global2.nutui.react = {}), global2.React, global2.ReactDOM));
})(this, function(exports2, React, ReactDOM) {
  var _a;
  "use strict";var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
/*!
* @nutui/nutui-react v2.0.8 Tue Aug 01 2023 20:49:42 GMT+0800 (中国标准时间)
* (c) 2023 @jdf2e.
* Released under the MIT License.
*/

  function _interopNamespaceDefault(e) {
    const n = Object.create(null, { [Symbol.toStringTag]: { value: "Module" } });
    if (e) {
      for (const k2 in e) {
        if (k2 !== "default") {
          const d = Object.getOwnPropertyDescriptor(e, k2);
          Object.defineProperty(n, k2, d.get ? d : {
            enumerable: true,
            get: () => e[k2]
          });
        }
      }
    }
    n.default = e;
    return Object.freeze(n);
  }
  const React__namespace = /* @__PURE__ */ _interopNamespaceDefault(React);
  const ReactDOM__namespace = /* @__PURE__ */ _interopNamespaceDefault(ReactDOM);
  var commonjsGlobal = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
  var classnamesExports = {};
  var classnames = {
    get exports() {
      return classnamesExports;
    },
    set exports(v) {
      classnamesExports = v;
    }
  };
  /*!
  	Copyright (c) 2018 Jed Watson.
  	Licensed under the MIT License (MIT), see
  	http://jedwatson.github.io/classnames
  */
  (function(module2) {
    (function() {
      var hasOwn = {}.hasOwnProperty;
      function classNames() {
        var classes = [];
        for (var i = 0; i < arguments.length; i++) {
          var arg = arguments[i];
          if (!arg)
            continue;
          var argType = typeof arg;
          if (argType === "string" || argType === "number") {
            classes.push(arg);
          } else if (Array.isArray(arg)) {
            if (arg.length) {
              var inner = classNames.apply(null, arg);
              if (inner) {
                classes.push(inner);
              }
            }
          } else if (argType === "object") {
            if (arg.toString !== Object.prototype.toString && !arg.toString.toString().includes("[native code]")) {
              classes.push(arg.toString());
              continue;
            }
            for (var key in arg) {
              if (hasOwn.call(arg, key) && arg[key]) {
                classes.push(key);
              }
            }
          }
        }
        return classes.join(" ");
      }
      if (module2.exports) {
        classNames.default = classNames;
        module2.exports = classNames;
      } else {
        window.classNames = classNames;
      }
    })();
  })(classnames);
  var D = {}, ir = {
    get exports() {
      return D;
    },
    set exports(h) {
      D = h;
    }
  }, k$6 = {};
  /**
   * @license React
   * react-jsx-runtime.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */
  var Re;
  function ur() {
    if (Re)
      return k$6;
    Re = 1;
    var h = React, S = Symbol.for("react.element"), M = Symbol.for("react.fragment"), R = Object.prototype.hasOwnProperty, A = h.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, I = { key: true, ref: true, __self: true, __source: true };
    function w(m, l2, T) {
      var d, g = {}, _ = null, $ = null;
      T !== void 0 && (_ = "" + T), l2.key !== void 0 && (_ = "" + l2.key), l2.ref !== void 0 && ($ = l2.ref);
      for (d in l2)
        R.call(l2, d) && !I.hasOwnProperty(d) && (g[d] = l2[d]);
      if (m && m.defaultProps)
        for (d in l2 = m.defaultProps, l2)
          g[d] === void 0 && (g[d] = l2[d]);
      return { $$typeof: S, type: m, key: _, ref: $, props: g, _owner: A.current };
    }
    return k$6.Fragment = M, k$6.jsx = w, k$6.jsxs = w, k$6;
  }
  var F = {};
  /**
   * @license React
   * react-jsx-runtime.development.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */
  var Te;
  function sr() {
    return Te || (Te = 1, process.env.NODE_ENV !== "production" && function() {
      var h = React, S = Symbol.for("react.element"), M = Symbol.for("react.portal"), R = Symbol.for("react.fragment"), A = Symbol.for("react.strict_mode"), I = Symbol.for("react.profiler"), w = Symbol.for("react.provider"), m = Symbol.for("react.context"), l2 = Symbol.for("react.forward_ref"), T = Symbol.for("react.suspense"), d = Symbol.for("react.suspense_list"), g = Symbol.for("react.memo"), _ = Symbol.for("react.lazy"), $ = Symbol.for("react.offscreen"), X = Symbol.iterator, Ce = "@@iterator";
      function Pe(e) {
        if (e === null || typeof e != "object")
          return null;
        var r = X && e[X] || e[Ce];
        return typeof r == "function" ? r : null;
      }
      var O = h.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
      function c(e) {
        {
          for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++)
            t[n - 1] = arguments[n];
          Se("error", e, t);
        }
      }
      function Se(e, r, t) {
        {
          var n = O.ReactDebugCurrentFrame, i = n.getStackAddendum();
          i !== "" && (r += "%s", t = t.concat([i]));
          var u = t.map(function(o) {
            return String(o);
          });
          u.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, u);
        }
      }
      var we = false, xe = false, je = false, ke = false, Fe = false, Z;
      Z = Symbol.for("react.module.reference");
      function De(e) {
        return !!(typeof e == "string" || typeof e == "function" || e === R || e === I || Fe || e === A || e === T || e === d || ke || e === $ || we || xe || je || typeof e == "object" && e !== null && (e.$$typeof === _ || e.$$typeof === g || e.$$typeof === w || e.$$typeof === m || e.$$typeof === l2 || // This needs to include all possible module reference object
        // types supported by any Flight configuration anywhere since
        // we don't know which Flight build this will end up being used
        // with.
        e.$$typeof === Z || e.getModuleId !== void 0));
      }
      function Ae(e, r, t) {
        var n = e.displayName;
        if (n)
          return n;
        var i = r.displayName || r.name || "";
        return i !== "" ? t + "(" + i + ")" : t;
      }
      function Q(e) {
        return e.displayName || "Context";
      }
      function E(e) {
        if (e == null)
          return null;
        if (typeof e.tag == "number" && c("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
          return e.displayName || e.name || null;
        if (typeof e == "string")
          return e;
        switch (e) {
          case R:
            return "Fragment";
          case M:
            return "Portal";
          case I:
            return "Profiler";
          case A:
            return "StrictMode";
          case T:
            return "Suspense";
          case d:
            return "SuspenseList";
        }
        if (typeof e == "object")
          switch (e.$$typeof) {
            case m:
              var r = e;
              return Q(r) + ".Consumer";
            case w:
              var t = e;
              return Q(t._context) + ".Provider";
            case l2:
              return Ae(e, e.render, "ForwardRef");
            case g:
              var n = e.displayName || null;
              return n !== null ? n : E(e.type) || "Memo";
            case _: {
              var i = e, u = i._payload, o = i._init;
              try {
                return E(o(u));
              } catch {
                return null;
              }
            }
          }
        return null;
      }
      var y2 = Object.assign, x2 = 0, ee, re, te, ne, ae, oe, ie;
      function ue() {
      }
      ue.__reactDisabledLog = true;
      function Ie() {
        {
          if (x2 === 0) {
            ee = console.log, re = console.info, te = console.warn, ne = console.error, ae = console.group, oe = console.groupCollapsed, ie = console.groupEnd;
            var e = {
              configurable: true,
              enumerable: true,
              value: ue,
              writable: true
            };
            Object.defineProperties(console, {
              info: e,
              log: e,
              warn: e,
              error: e,
              group: e,
              groupCollapsed: e,
              groupEnd: e
            });
          }
          x2++;
        }
      }
      function $e() {
        {
          if (x2--, x2 === 0) {
            var e = {
              configurable: true,
              enumerable: true,
              writable: true
            };
            Object.defineProperties(console, {
              log: y2({}, e, {
                value: ee
              }),
              info: y2({}, e, {
                value: re
              }),
              warn: y2({}, e, {
                value: te
              }),
              error: y2({}, e, {
                value: ne
              }),
              group: y2({}, e, {
                value: ae
              }),
              groupCollapsed: y2({}, e, {
                value: oe
              }),
              groupEnd: y2({}, e, {
                value: ie
              })
            });
          }
          x2 < 0 && c("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
        }
      }
      var U = O.ReactCurrentDispatcher, B;
      function W(e, r, t) {
        {
          if (B === void 0)
            try {
              throw Error();
            } catch (i) {
              var n = i.stack.trim().match(/\n( *(at )?)/);
              B = n && n[1] || "";
            }
          return `
` + B + e;
        }
      }
      var q = false, Y;
      {
        var We = typeof WeakMap == "function" ? WeakMap : Map;
        Y = new We();
      }
      function se(e, r) {
        if (!e || q)
          return "";
        {
          var t = Y.get(e);
          if (t !== void 0)
            return t;
        }
        var n;
        q = true;
        var i = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        var u;
        u = U.current, U.current = null, Ie();
        try {
          if (r) {
            var o = function() {
              throw Error();
            };
            if (Object.defineProperty(o.prototype, "props", {
              set: function() {
                throw Error();
              }
            }), typeof Reflect == "object" && Reflect.construct) {
              try {
                Reflect.construct(o, []);
              } catch (b) {
                n = b;
              }
              Reflect.construct(e, [], o);
            } else {
              try {
                o.call();
              } catch (b) {
                n = b;
              }
              e.call(o.prototype);
            }
          } else {
            try {
              throw Error();
            } catch (b) {
              n = b;
            }
            e();
          }
        } catch (b) {
          if (b && n && typeof b.stack == "string") {
            for (var a2 = b.stack.split(`
`), v = n.stack.split(`
`), s = a2.length - 1, f = v.length - 1; s >= 1 && f >= 0 && a2[s] !== v[f]; )
              f--;
            for (; s >= 1 && f >= 0; s--, f--)
              if (a2[s] !== v[f]) {
                if (s !== 1 || f !== 1)
                  do
                    if (s--, f--, f < 0 || a2[s] !== v[f]) {
                      var p = `
` + a2[s].replace(" at new ", " at ");
                      return e.displayName && p.includes("<anonymous>") && (p = p.replace("<anonymous>", e.displayName)), typeof e == "function" && Y.set(e, p), p;
                    }
                  while (s >= 1 && f >= 0);
                break;
              }
          }
        } finally {
          q = false, U.current = u, $e(), Error.prepareStackTrace = i;
        }
        var P = e ? e.displayName || e.name : "", ye = P ? W(P) : "";
        return typeof e == "function" && Y.set(e, ye), ye;
      }
      function Ye(e, r, t) {
        return se(e, false);
      }
      function Le(e) {
        var r = e.prototype;
        return !!(r && r.isReactComponent);
      }
      function L(e, r, t) {
        if (e == null)
          return "";
        if (typeof e == "function")
          return se(e, Le(e));
        if (typeof e == "string")
          return W(e);
        switch (e) {
          case T:
            return W("Suspense");
          case d:
            return W("SuspenseList");
        }
        if (typeof e == "object")
          switch (e.$$typeof) {
            case l2:
              return Ye(e.render);
            case g:
              return L(e.type, r, t);
            case _: {
              var n = e, i = n._payload, u = n._init;
              try {
                return L(u(i), r, t);
              } catch {
              }
            }
          }
        return "";
      }
      var N2 = Object.prototype.hasOwnProperty, fe = {}, le = O.ReactDebugCurrentFrame;
      function V2(e) {
        if (e) {
          var r = e._owner, t = L(e.type, e._source, r ? r.type : null);
          le.setExtraStackFrame(t);
        } else
          le.setExtraStackFrame(null);
      }
      function Ne(e, r, t, n, i) {
        {
          var u = Function.call.bind(N2);
          for (var o in e)
            if (u(e, o)) {
              var a2 = void 0;
              try {
                if (typeof e[o] != "function") {
                  var v = Error((n || "React class") + ": " + t + " type `" + o + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[o] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                  throw v.name = "Invariant Violation", v;
                }
                a2 = e[o](r, o, n, t, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
              } catch (s) {
                a2 = s;
              }
              a2 && !(a2 instanceof Error) && (V2(i), c("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", n || "React class", t, o, typeof a2), V2(null)), a2 instanceof Error && !(a2.message in fe) && (fe[a2.message] = true, V2(i), c("Failed %s type: %s", t, a2.message), V2(null));
            }
        }
      }
      var Ve = Array.isArray;
      function J(e) {
        return Ve(e);
      }
      function Me(e) {
        {
          var r = typeof Symbol == "function" && Symbol.toStringTag, t = r && e[Symbol.toStringTag] || e.constructor.name || "Object";
          return t;
        }
      }
      function Ue(e) {
        try {
          return ce(e), false;
        } catch {
          return true;
        }
      }
      function ce(e) {
        return "" + e;
      }
      function ve(e) {
        if (Ue(e))
          return c("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Me(e)), ce(e);
      }
      var j = O.ReactCurrentOwner, Be = {
        key: true,
        ref: true,
        __self: true,
        __source: true
      }, de, pe, G;
      G = {};
      function qe(e) {
        if (N2.call(e, "ref")) {
          var r = Object.getOwnPropertyDescriptor(e, "ref").get;
          if (r && r.isReactWarning)
            return false;
        }
        return e.ref !== void 0;
      }
      function Je(e) {
        if (N2.call(e, "key")) {
          var r = Object.getOwnPropertyDescriptor(e, "key").get;
          if (r && r.isReactWarning)
            return false;
        }
        return e.key !== void 0;
      }
      function Ge(e, r) {
        if (typeof e.ref == "string" && j.current && r && j.current.stateNode !== r) {
          var t = E(j.current.type);
          G[t] || (c('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', E(j.current.type), e.ref), G[t] = true);
        }
      }
      function ze(e, r) {
        {
          var t = function() {
            de || (de = true, c("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
          };
          t.isReactWarning = true, Object.defineProperty(e, "key", {
            get: t,
            configurable: true
          });
        }
      }
      function Ke(e, r) {
        {
          var t = function() {
            pe || (pe = true, c("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
          };
          t.isReactWarning = true, Object.defineProperty(e, "ref", {
            get: t,
            configurable: true
          });
        }
      }
      var He = function(e, r, t, n, i, u, o) {
        var a2 = {
          // This tag allows us to uniquely identify this as a React Element
          $$typeof: S,
          // Built-in properties that belong on the element
          type: e,
          key: r,
          ref: t,
          props: o,
          // Record the component responsible for creating this element.
          _owner: u
        };
        return a2._store = {}, Object.defineProperty(a2._store, "validated", {
          configurable: false,
          enumerable: false,
          writable: true,
          value: false
        }), Object.defineProperty(a2, "_self", {
          configurable: false,
          enumerable: false,
          writable: false,
          value: n
        }), Object.defineProperty(a2, "_source", {
          configurable: false,
          enumerable: false,
          writable: false,
          value: i
        }), Object.freeze && (Object.freeze(a2.props), Object.freeze(a2)), a2;
      };
      function Xe(e, r, t, n, i) {
        {
          var u, o = {}, a2 = null, v = null;
          t !== void 0 && (ve(t), a2 = "" + t), Je(r) && (ve(r.key), a2 = "" + r.key), qe(r) && (v = r.ref, Ge(r, i));
          for (u in r)
            N2.call(r, u) && !Be.hasOwnProperty(u) && (o[u] = r[u]);
          if (e && e.defaultProps) {
            var s = e.defaultProps;
            for (u in s)
              o[u] === void 0 && (o[u] = s[u]);
          }
          if (a2 || v) {
            var f = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
            a2 && ze(o, f), v && Ke(o, f);
          }
          return He(e, a2, v, i, n, j.current, o);
        }
      }
      var z = O.ReactCurrentOwner, ge = O.ReactDebugCurrentFrame;
      function C(e) {
        if (e) {
          var r = e._owner, t = L(e.type, e._source, r ? r.type : null);
          ge.setExtraStackFrame(t);
        } else
          ge.setExtraStackFrame(null);
      }
      var K;
      K = false;
      function H(e) {
        return typeof e == "object" && e !== null && e.$$typeof === S;
      }
      function Ee() {
        {
          if (z.current) {
            var e = E(z.current.type);
            if (e)
              return `

Check the render method of \`` + e + "`.";
          }
          return "";
        }
      }
      function Ze(e) {
        {
          if (e !== void 0) {
            var r = e.fileName.replace(/^.*[\\\/]/, ""), t = e.lineNumber;
            return `

Check your code at ` + r + ":" + t + ".";
          }
          return "";
        }
      }
      var be = {};
      function Qe(e) {
        {
          var r = Ee();
          if (!r) {
            var t = typeof e == "string" ? e : e.displayName || e.name;
            t && (r = `

Check the top-level render call using <` + t + ">.");
          }
          return r;
        }
      }
      function he(e, r) {
        {
          if (!e._store || e._store.validated || e.key != null)
            return;
          e._store.validated = true;
          var t = Qe(r);
          if (be[t])
            return;
          be[t] = true;
          var n = "";
          e && e._owner && e._owner !== z.current && (n = " It was passed a child from " + E(e._owner.type) + "."), C(e), c('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', t, n), C(null);
        }
      }
      function me(e, r) {
        {
          if (typeof e != "object")
            return;
          if (J(e))
            for (var t = 0; t < e.length; t++) {
              var n = e[t];
              H(n) && he(n, r);
            }
          else if (H(e))
            e._store && (e._store.validated = true);
          else if (e) {
            var i = Pe(e);
            if (typeof i == "function" && i !== e.entries)
              for (var u = i.call(e), o; !(o = u.next()).done; )
                H(o.value) && he(o.value, r);
          }
        }
      }
      function er(e) {
        {
          var r = e.type;
          if (r == null || typeof r == "string")
            return;
          var t;
          if (typeof r == "function")
            t = r.propTypes;
          else if (typeof r == "object" && (r.$$typeof === l2 || // Note: Memo only checks outer props here.
          // Inner props are checked in the reconciler.
          r.$$typeof === g))
            t = r.propTypes;
          else
            return;
          if (t) {
            var n = E(r);
            Ne(t, e.props, "prop", n, e);
          } else if (r.PropTypes !== void 0 && !K) {
            K = true;
            var i = E(r);
            c("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", i || "Unknown");
          }
          typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && c("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
        }
      }
      function rr(e) {
        {
          for (var r = Object.keys(e.props), t = 0; t < r.length; t++) {
            var n = r[t];
            if (n !== "children" && n !== "key") {
              C(e), c("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", n), C(null);
              break;
            }
          }
          e.ref !== null && (C(e), c("Invalid attribute `ref` supplied to `React.Fragment`."), C(null));
        }
      }
      function _e(e, r, t, n, i, u) {
        {
          var o = De(e);
          if (!o) {
            var a2 = "";
            (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (a2 += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
            var v = Ze(i);
            v ? a2 += v : a2 += Ee();
            var s;
            e === null ? s = "null" : J(e) ? s = "array" : e !== void 0 && e.$$typeof === S ? (s = "<" + (E(e.type) || "Unknown") + " />", a2 = " Did you accidentally export a JSX literal instead of a component?") : s = typeof e, c("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", s, a2);
          }
          var f = Xe(e, r, t, i, u);
          if (f == null)
            return f;
          if (o) {
            var p = r.children;
            if (p !== void 0)
              if (n)
                if (J(p)) {
                  for (var P = 0; P < p.length; P++)
                    me(p[P], e);
                  Object.freeze && Object.freeze(p);
                } else
                  c("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
              else
                me(p, e);
          }
          return e === R ? rr(f) : er(f), f;
        }
      }
      function tr(e, r, t) {
        return _e(e, r, t, true);
      }
      function nr(e, r, t) {
        return _e(e, r, t, false);
      }
      var ar = nr, or = tr;
      F.Fragment = R, F.jsx = ar, F.jsxs = or;
    }()), F;
  }
  (function(h) {
    process.env.NODE_ENV === "production" ? h.exports = ur() : h.exports = sr();
  })(ir);
  const lr = D.Fragment, cr = D.jsx, vr = D.jsxs;
  const a$x = {
    className: "",
    style: void 0,
    name: "ArrowDown2",
    width: "",
    height: "",
    onClick: () => {
    }
  }, y$9 = (h) => {
    const { className: r, style: d, name: e, color: p, width: m, height: w, onClick: n } = { ...a$x, ...h }, f = (t) => {
      n && n(t);
    }, c = (t) => t === "" ? "" : isNaN(Number(t)) ? String(t) : t + "px", g = () => {
      const t = "nut-icon";
      return classnamesExports({
        [`${r}`]: r,
        [t]: true,
        [t + "-" + e]: e
      });
    }, s = {}, i = c(m || ""), l2 = c(w || "");
    i && (s.width = i), l2 && (s.height = l2);
    const u = () => ({
      ...d,
      ...s
    });
    return /* @__PURE__ */ cr(lr, { children: /* @__PURE__ */ cr(
      "svg",
      {
        className: g(),
        style: u(),
        onClick: f,
        xmlns: "http://www.w3.org/2000/svg",
        color: p,
        viewBox: "0 0 2472 1024",
        "aria-labelledby": e,
        role: "presentation",
        children: /* @__PURE__ */ cr(
          "path",
          {
            d: "M1741.19 227.497a121.654 121.654 0 1 1 127.858 206.812L1292.65 790.27a182.482 182.482 0 0 1-191.727 0L524.646 434.31a121.654 121.654 0 1 1 127.859-206.812l544.403 335.887c181.387-111.8 362.773-223.965 544.282-335.887",
            fill: "currentColor",
            fillOpacity: "0.9"
          }
        )
      }
    ) });
  };
  y$9.defaultProps = a$x;
  const a$w = {
    className: "",
    style: void 0,
    name: "ArrowUp2",
    width: "",
    height: "",
    onClick: () => {
    }
  }, x$h = (h) => {
    const { className: o, style: p, name: e, color: d, width: m, height: f, onClick: n } = { ...a$w, ...h }, g = (t) => {
      n && n(t);
    }, i = (t) => t === "" ? "" : isNaN(Number(t)) ? String(t) : t + "px", w = () => {
      const t = "nut-icon";
      return classnamesExports({
        [`${o}`]: o,
        [t]: true,
        [t + "-" + e]: e
      });
    }, s = {}, c = i(m || ""), l2 = i(f || "");
    c && (s.width = c), l2 && (s.height = l2);
    const u = () => ({
      ...p,
      ...s
    });
    return /* @__PURE__ */ cr(lr, { children: /* @__PURE__ */ cr(
      "svg",
      {
        className: w(),
        style: u(),
        onClick: g,
        xmlns: "http://www.w3.org/2000/svg",
        color: d,
        viewBox: "0 0 2472 1024",
        "aria-labelledby": e,
        role: "presentation",
        children: /* @__PURE__ */ cr(
          "path",
          {
            d: "M623.406 815.479A129.722 129.722 0 1 1 487.068 594.95C691.9 468.083 896.73 341.993 1101.691 215.125a194.583 194.583 0 0 1 204.442 0l614.494 379.567a129.722 129.722 0 1 1-136.338 220.657l-580.506-358.292-580.377 358.422",
            fill: "currentColor",
            fillOpacity: "0.9"
          }
        )
      }
    ) });
  };
  x$h.defaultProps = a$w;
  const a$v = {
    className: "",
    style: void 0,
    name: "CheckChecked",
    width: "",
    height: "",
    onClick: () => {
    }
  }, y$8 = (h) => {
    const { className: r, style: d, name: e, color: p, width: m, height: f, onClick: o } = { ...a$v, ...h }, C = (t) => {
      o && o(t);
    }, i = (t) => t === "" ? "" : isNaN(Number(t)) ? String(t) : t + "px", k2 = () => {
      const t = "nut-icon";
      return classnamesExports({
        [`${r}`]: r,
        [t]: true,
        [t + "-" + e]: e
      });
    }, s = {}, l2 = i(m || ""), n = i(f || "");
    l2 && (s.width = l2), n && (s.height = n);
    const g = () => ({
      ...d,
      ...s
    });
    return /* @__PURE__ */ cr(lr, { children: /* @__PURE__ */ vr(
      "svg",
      {
        className: k2(),
        style: g(),
        onClick: C,
        xmlns: "http://www.w3.org/2000/svg",
        color: p,
        viewBox: "0 0 1032 1024",
        "aria-labelledby": e,
        role: "presentation",
        children: [
          /* @__PURE__ */ cr(
            "path",
            {
              d: "M510.613 2.837C229.793 2.837.032 232.598.032 513.418S229.793 1024 510.613 1024s510.582-229.762 510.582-510.582S794.27 2.837 510.613 2.837zm0 794.238c-156.01 0-283.656-127.646-283.656-283.657s127.645-283.656 283.656-283.656S794.27 357.407 794.27 513.418 666.624 797.075 510.613 797.075z",
              fill: "currentColor",
              fillOpacity: "0.9"
            }
          ),
          ",",
          /* @__PURE__ */ cr(
            "path",
            {
              d: "M382.968 513.418a127.645 127.645 0 1 0 255.29 0 127.645 127.645 0 1 0-255.29 0Z",
              fill: "currentColor",
              fillOpacity: "0.9"
            }
          )
        ]
      }
    ) });
  };
  y$8.defaultProps = a$v;
  const a$u = {
    className: "",
    style: void 0,
    name: "CheckDisabled",
    width: "",
    height: "",
    onClick: () => {
    }
  }, x$g = (h) => {
    const { className: i, style: d, name: e, color: m, width: p, height: f, onClick: o } = { ...a$u, ...h }, g = (t) => {
      o && o(t);
    }, r = (t) => t === "" ? "" : isNaN(Number(t)) ? String(t) : t + "px", C = () => {
      const t = "nut-icon";
      return classnamesExports({
        [`${i}`]: i,
        [t]: true,
        [t + "-" + e]: e
      });
    }, s = {}, n = r(p || ""), l2 = r(f || "");
    n && (s.width = n), l2 && (s.height = l2);
    const k2 = () => ({
      ...d,
      ...s
    });
    return /* @__PURE__ */ cr(lr, { children: /* @__PURE__ */ cr(
      "svg",
      {
        className: C(),
        style: k2(),
        onClick: g,
        xmlns: "http://www.w3.org/2000/svg",
        color: m,
        viewBox: "0 0 1024 1024",
        "aria-labelledby": e,
        role: "presentation",
        children: /* @__PURE__ */ cr(
          "path",
          {
            d: "M506.467 0C227.962 0 .094 227.868.094 506.374s227.868 506.373 506.373 506.373 506.374-227.868 506.374-506.373S787.786 0 506.467 0zm202.55 571.077H306.73c-45.01 0-67.516-22.506-67.516-67.517 0-45.01 22.505-67.516 67.516-67.516h402.286c45.01 0 67.516 22.505 67.516 67.516 0 45.011-22.505 67.517-67.516 67.517z",
            fill: "currentColor",
            fillOpacity: "0.9"
          }
        )
      }
    ) });
  };
  x$g.defaultProps = a$u;
  const a$t = {
    className: "",
    style: void 0,
    name: "CheckNormal",
    width: "",
    height: "",
    onClick: () => {
    }
  }, N = (h) => {
    const { className: o, style: m, name: e, color: d, width: p, height: C, onClick: r } = { ...a$t, ...h }, f = (t) => {
      r && r(t);
    }, n = (t) => t === "" ? "" : isNaN(Number(t)) ? String(t) : t + "px", g = () => {
      const t = "nut-icon";
      return classnamesExports({
        [`${o}`]: o,
        [t]: true,
        [t + "-" + e]: e
      });
    }, s = {}, i = n(p || ""), l2 = n(C || "");
    i && (s.width = i), l2 && (s.height = l2);
    const k2 = () => ({
      ...m,
      ...s
    });
    return /* @__PURE__ */ cr(lr, { children: /* @__PURE__ */ cr(
      "svg",
      {
        className: g(),
        style: k2(),
        onClick: f,
        xmlns: "http://www.w3.org/2000/svg",
        color: d,
        viewBox: "0 0 1024 1024",
        "aria-labelledby": e,
        role: "presentation",
        children: /* @__PURE__ */ cr(
          "path",
          {
            d: "M512 1024c-136.533 0-264.533-54.044-361.244-150.756C54.044 776.534 0 648.534 0 512c0-136.533 54.044-264.533 150.756-361.244C247.466 54.044 375.466 0 512 0c136.533 0 264.533 54.044 361.244 150.756C969.956 247.466 1024 375.466 1024 512s-54.044 264.533-150.756 361.244C776.534 969.956 648.534 1024 512 1024zm0-938.667c-113.778 0-221.867 45.511-301.511 125.156S85.333 398.222 85.333 512s45.511 221.867 125.156 301.511S398.222 938.667 512 938.667s221.867-45.511 301.511-125.156S938.667 625.778 938.667 512 893.156 290.133 813.51 210.489 625.778 85.333 512 85.333z",
            fill: "currentColor",
            fillOpacity: "0.9"
          }
        )
      }
    ) });
  };
  N.defaultProps = a$t;
  const a$s = {
    className: "",
    style: void 0,
    name: "Check",
    width: "",
    height: "",
    onClick: () => {
    }
  }, x$f = (h) => {
    const { className: o, style: d, name: e, color: p, width: m, height: f, onClick: r } = { ...a$s, ...h }, g = (t) => {
      r && r(t);
    }, n = (t) => t === "" ? "" : isNaN(Number(t)) ? String(t) : t + "px", C = () => {
      const t = "nut-icon";
      return classnamesExports({
        [`${o}`]: o,
        [t]: true,
        [t + "-" + e]: e
      });
    }, s = {}, i = n(m || ""), l2 = n(f || "");
    i && (s.width = i), l2 && (s.height = l2);
    const k2 = () => ({
      ...d,
      ...s
    });
    return /* @__PURE__ */ cr(lr, { children: /* @__PURE__ */ cr(
      "svg",
      {
        className: C(),
        style: k2(),
        onClick: g,
        xmlns: "http://www.w3.org/2000/svg",
        color: p,
        viewBox: "0 0 1024 1024",
        "aria-labelledby": e,
        role: "presentation",
        children: /* @__PURE__ */ cr(
          "path",
          {
            d: "M998.4 245.029c-219.429 153.6-398.629 332.8-552.229 552.228-40.228 58.514-128 54.857-164.571-3.657-69.486-106.057-149.943-186.514-256-256-51.2-32.914-18.286-113.371 40.229-98.743C182.857 460.8 274.286 508.343 358.4 585.143c157.257-190.172 358.4-340.114 588.8-435.2 62.171-25.6 106.057 58.514 51.2 95.086",
            fill: "currentColor",
            fillOpacity: "0.9"
          }
        )
      }
    ) });
  };
  x$f.defaultProps = a$s;
  const a$r = {
    className: "",
    style: void 0,
    name: "Checked",
    width: "",
    height: "",
    onClick: () => {
    }
  }, x$e = (h) => {
    const { className: o, style: d, name: e, color: m, width: p, height: C, onClick: r } = { ...a$r, ...h }, f = (t) => {
      r && r(t);
    }, n = (t) => t === "" ? "" : isNaN(Number(t)) ? String(t) : t + "px", g = () => {
      const t = "nut-icon";
      return classnamesExports({
        [`${o}`]: o,
        [t]: true,
        [t + "-" + e]: e
      });
    }, s = {}, i = n(p || ""), l2 = n(C || "");
    i && (s.width = i), l2 && (s.height = l2);
    const k2 = () => ({
      ...d,
      ...s
    });
    return /* @__PURE__ */ cr(lr, { children: /* @__PURE__ */ cr(
      "svg",
      {
        className: g(),
        style: k2(),
        onClick: f,
        xmlns: "http://www.w3.org/2000/svg",
        color: m,
        viewBox: "0 0 1024 1024",
        "aria-labelledby": e,
        role: "presentation",
        children: /* @__PURE__ */ cr(
          "path",
          {
            d: "M512 0C230.4 0 0 230.4 0 512s230.4 512 512 512 512-230.4 512-512S793.6 0 512 0zm281.6 369.778C779.378 381.156 600.178 500.622 472.178 691.2c0 0 0 2.844-2.845 2.844-8.533 5.69-48.355 36.978-88.177-8.533-39.823-51.2-62.578-99.555-142.223-142.222-2.844 0-2.844-2.845-2.844-2.845-8.533-11.377-39.822-56.888 19.911-56.888 45.511 0 91.022 11.377 162.133 73.955 5.69 5.689 14.223 5.689 17.067 0C469.333 517.69 608.711 366.933 768 318.578c0 0 19.911-2.845 31.289 14.222 5.689 11.378 11.378 22.756-5.689 36.978z",
            fill: "currentColor",
            fillOpacity: "0.9"
          }
        )
      }
    ) });
  };
  x$e.defaultProps = a$r;
  const a$q = {
    className: "",
    style: void 0,
    name: "Checklist",
    width: "",
    height: "",
    onClick: () => {
    }
  }, x$d = (h) => {
    const { className: i, style: d, name: e, color: p, width: m, height: f, onClick: o } = { ...a$q, ...h }, g = (t) => {
      o && o(t);
    }, r = (t) => t === "" ? "" : isNaN(Number(t)) ? String(t) : t + "px", k2 = () => {
      const t = "nut-icon";
      return classnamesExports({
        [`${i}`]: i,
        [t]: true,
        [t + "-" + e]: e
      });
    }, s = {}, n = r(m || ""), l2 = r(f || "");
    n && (s.width = n), l2 && (s.height = l2);
    const u = () => ({
      ...d,
      ...s
    });
    return /* @__PURE__ */ cr(lr, { children: /* @__PURE__ */ cr(
      "svg",
      {
        className: k2(),
        style: u(),
        onClick: g,
        xmlns: "http://www.w3.org/2000/svg",
        color: p,
        viewBox: "0 0 1024 1024",
        "aria-labelledby": e,
        role: "presentation",
        children: /* @__PURE__ */ cr(
          "path",
          {
            d: "M159.289 500.622c62.578 0 125.155 17.067 221.867 102.4 8.533 5.69 19.91 5.69 25.6 0 48.355-54.044 238.933-261.689 455.11-329.955 0 0 28.445-5.69 42.667 19.91 8.534 17.067 19.911 34.134-5.689 54.045-22.755 17.067-264.533 179.2-440.888 440.89l-2.845 2.844c-11.378 8.533-68.267 51.2-119.467-14.223-56.888-71.11-85.333-139.377-196.266-196.266-2.845 0-2.845-2.845-5.69-5.69-11.377-11.377-54.044-73.955 25.6-73.955z",
            fill: "currentColor",
            fillOpacity: "0.9"
          }
        )
      }
    ) });
  };
  x$d.defaultProps = a$q;
  const a$p = {
    className: "",
    style: void 0,
    name: "CircleClose",
    width: "",
    height: "",
    onClick: () => {
    }
  }, x$c = (h) => {
    const { className: l2, style: m, name: e, color: d, width: p, height: C, onClick: o } = { ...a$p, ...h }, f = (t) => {
      o && o(t);
    }, r = (t) => t === "" ? "" : isNaN(Number(t)) ? String(t) : t + "px", g = () => {
      const t = "nut-icon";
      return classnamesExports({
        [`${l2}`]: l2,
        [t]: true,
        [t + "-" + e]: e
      });
    }, c = {}, i = r(p || ""), n = r(C || "");
    i && (c.width = i), n && (c.height = n);
    const u = () => ({
      ...m,
      ...c
    });
    return /* @__PURE__ */ cr(lr, { children: /* @__PURE__ */ cr(
      "svg",
      {
        className: g(),
        style: u(),
        onClick: f,
        xmlns: "http://www.w3.org/2000/svg",
        color: d,
        viewBox: "0 0 1024 1024",
        "aria-labelledby": e,
        role: "presentation",
        children: /* @__PURE__ */ cr(
          "path",
          {
            d: "M511.492 73.063a438.425 438.425 0 0 1 310.545 748.953 439.16 439.16 0 1 1-621.09-621.073A435.695 435.695 0 0 1 511.492 73.046m0-73.063C267.49.018 57.468 172.408 9.87 411.717-37.713 651.042 90.39 890.658 315.823 984.03c225.45 93.355 485.444 14.472 621.005-188.416 135.543-202.906 108.885-473.293-63.659-645.82A509.645 509.645 0 0 0 511.492.002zm-175.7 635.495 299.673-299.674c12.049-12.049 24.115-12.049 36.164 0l15.496 15.497c12.05 12.066 12.05 24.115 0 36.18L387.47 687.122c-12.066 12.05-24.115 12.05-36.181 0l-15.497-15.496c-12.049-12.066-12.049-24.115 0-36.182zm0-284.177 15.496-15.497c12.066-12.049 24.115-12.049 36.18 0l299.64 299.674c12.05 12.049 12.05 24.098 0 36.164l-15.496 15.496c-12.05 12.05-24.115 12.05-36.182 0L335.808 387.465c-12.049-12.05-12.049-24.098 0-36.164z",
            fill: "currentColor",
            fillOpacity: "0.9"
          }
        )
      }
    ) });
  };
  x$c.defaultProps = a$p;
  const a$o = {
    className: "",
    style: void 0,
    name: "Close",
    width: "",
    height: "",
    onClick: () => {
    }
  }, x$b = (h) => {
    const { className: o, style: d, name: e, color: m, width: p, height: f, onClick: r } = { ...a$o, ...h }, g = (t) => {
      r && r(t);
    }, n = (t) => t === "" ? "" : isNaN(Number(t)) ? String(t) : t + "px", C = () => {
      const t = "nut-icon";
      return classnamesExports({
        [`${o}`]: o,
        [t]: true,
        [t + "-" + e]: e
      });
    }, s = {}, i = n(p || ""), l2 = n(f || "");
    i && (s.width = i), l2 && (s.height = l2);
    const u = () => ({
      ...d,
      ...s
    });
    return /* @__PURE__ */ cr(lr, { children: /* @__PURE__ */ cr(
      "svg",
      {
        className: C(),
        style: u(),
        onClick: g,
        xmlns: "http://www.w3.org/2000/svg",
        color: m,
        viewBox: "0 0 1026 1024",
        "aria-labelledby": e,
        role: "presentation",
        children: /* @__PURE__ */ cr(
          "path",
          {
            d: "M981.577 1024c-11.703 0-23.406-2.926-32.183-11.703L13.166 76.07c-14.629-17.555-14.629-46.812 0-64.366 17.554-14.629 46.811-14.629 64.365 0L1013.76 947.93c17.554 17.555 17.554 43.886 0 61.44-8.777 11.703-20.48 14.629-32.183 14.629zm-936.228 0c-11.703 0-23.406-2.926-32.183-11.703-17.555-17.554-17.555-43.886 0-61.44L949.394 14.63c17.555-17.555 43.886-17.555 61.44 0 17.555 17.554 17.555 43.885 0 61.44L74.606 1012.297C68.754 1021.074 57.05 1024 45.349 1024z",
            fill: "currentColor",
            fillOpacity: "0.9"
          }
        )
      }
    ) });
  };
  x$b.defaultProps = a$o;
  const a$n = {
    className: "",
    style: void 0,
    name: "Del",
    width: "",
    height: "",
    onClick: () => {
    }
  }, y$7 = (h) => {
    const { className: o, style: d, name: e, color: m, width: p, height: f, onClick: r } = { ...a$n, ...h }, g = (t) => {
      r && r(t);
    }, n = (t) => t === "" ? "" : isNaN(Number(t)) ? String(t) : t + "px", u = () => {
      const t = "nut-icon";
      return classnamesExports({
        [`${o}`]: o,
        [t]: true,
        [t + "-" + e]: e
      });
    }, s = {}, i = n(p || ""), l2 = n(f || "");
    i && (s.width = i), l2 && (s.height = l2);
    const w = () => ({
      ...d,
      ...s
    });
    return /* @__PURE__ */ cr(lr, { children: /* @__PURE__ */ cr(
      "svg",
      {
        className: u(),
        style: w(),
        onClick: g,
        xmlns: "http://www.w3.org/2000/svg",
        color: m,
        viewBox: "0 0 1024 1024",
        "aria-labelledby": e,
        role: "presentation",
        children: /* @__PURE__ */ cr(
          "path",
          {
            d: "M668.444 1024H355.556c-142.223 0-256-113.778-256-256V170.667h824.888V768c0 142.222-113.777 256-256 256zM184.89 256v512c0 93.867 76.8 170.667 170.667 170.667h312.888c93.867 0 170.667-76.8 170.667-170.667V256H184.89zm753.778 0H85.333c-22.755 0-42.666-19.911-42.666-42.667s19.91-42.666 42.666-42.666h853.334c22.755 0 42.666 19.91 42.666 42.666S961.423 256 938.667 256zM625.777 85.333H398.223c-22.755 0-42.666-19.91-42.666-42.666S375.466 0 398.222 0h227.556c22.755 0 42.666 19.911 42.666 42.667s-19.91 42.666-42.666 42.666z",
            fill: "currentColor",
            fillOpacity: "0.9"
          }
        )
      }
    ) });
  };
  y$7.defaultProps = a$n;
  const a$m = {
    className: "",
    style: void 0,
    name: "DownArrow",
    width: "",
    height: "",
    onClick: () => {
    }
  }, x$a = (h) => {
    const { className: r, style: d, name: e, color: p, width: m, height: w, onClick: n } = { ...a$m, ...h }, f = (t) => {
      n && n(t);
    }, c = (t) => t === "" ? "" : isNaN(Number(t)) ? String(t) : t + "px", g = () => {
      const t = "nut-icon";
      return classnamesExports({
        [`${r}`]: r,
        [t]: true,
        [t + "-" + e]: e
      });
    }, s = {}, i = c(m || ""), l2 = c(w || "");
    i && (s.width = i), l2 && (s.height = l2);
    const C = () => ({
      ...d,
      ...s
    });
    return /* @__PURE__ */ cr(lr, { children: /* @__PURE__ */ cr(
      "svg",
      {
        className: g(),
        style: C(),
        onClick: f,
        xmlns: "http://www.w3.org/2000/svg",
        color: p,
        viewBox: "0 0 1024 1024",
        "aria-labelledby": e,
        role: "presentation",
        children: /* @__PURE__ */ cr(
          "path",
          {
            d: "M128 349.867C93.867 332.8 34.133 341.333 8.533 384-8.533 418.133 0 477.867 42.667 503.467 179.2 588.8 315.733 665.6 443.733 750.933c42.667 25.6 93.867 25.6 136.534 0C716.8 665.6 853.333 588.8 981.333 503.467c42.667-25.6 51.2-76.8 25.6-119.467s-76.8-51.2-119.466-25.6C768 435.2 640 512 512 588.8 384 512 256 435.2 128 349.867",
            fill: "currentColor",
            fillOpacity: "0.9"
          }
        )
      }
    ) });
  };
  x$a.defaultProps = a$m;
  const a$l = {
    className: "",
    style: void 0,
    name: "Failure",
    width: "",
    height: "",
    onClick: () => {
    }
  }, x$9 = (h) => {
    const { className: r, style: d, name: e, color: m, width: p, height: f, onClick: l2 } = { ...a$l, ...h }, u = (t) => {
      l2 && l2(t);
    }, i = (t) => t === "" ? "" : isNaN(Number(t)) ? String(t) : t + "px", g = () => {
      const t = "nut-icon";
      return classnamesExports({
        [`${r}`]: r,
        [t]: true,
        [t + "-" + e]: e
      });
    }, s = {}, o = i(p || ""), n = i(f || "");
    o && (s.width = o), n && (s.height = n);
    const C = () => ({
      ...d,
      ...s
    });
    return /* @__PURE__ */ cr(lr, { children: /* @__PURE__ */ cr(
      "svg",
      {
        className: g(),
        style: C(),
        onClick: u,
        xmlns: "http://www.w3.org/2000/svg",
        color: m,
        viewBox: "0 0 1024 1024",
        "aria-labelledby": e,
        role: "presentation",
        children: /* @__PURE__ */ cr(
          "path",
          {
            d: "M512 1024C229.831 1024 0 794.169 0 512S229.831 0 512 0s512 229.831 512 512-229.831 512-512 512zm0-955.733C266.24 68.267 68.267 266.24 68.267 512S266.24 955.733 512 955.733 955.733 757.76 955.733 512 757.76 68.267 512 68.267zm111.502 282.169c13.654-13.654 34.134-13.654 47.787 0 11.378 11.377 13.653 31.857 2.275 45.51l-2.275 2.276-111.502 111.502 111.502 111.503c13.653 13.653 13.653 34.133 0 47.786-13.653 13.654-34.133 13.654-47.787 0L512 557.511 400.498 669.013c-11.378 11.378-31.858 13.654-45.511 2.276l-2.276-2.276c-11.378-11.377-13.653-31.857-2.275-45.51l2.275-2.276 111.502-111.503-111.502-111.502c-13.653-13.653-13.653-34.133 0-47.786s34.133-13.654 47.787 0L512 461.938l111.502-111.502z",
            fill: "currentColor",
            fillOpacity: "0.9"
          }
        )
      }
    ) });
  };
  x$9.defaultProps = a$l;
  const a$k = {
    className: "",
    style: void 0,
    name: "ImageError",
    width: "",
    height: "",
    onClick: () => {
    }
  }, k$5 = (h) => {
    const { className: s, style: d, name: e, color: m, width: p, height: f, onClick: o } = { ...a$k, ...h }, g = (t) => {
      o && o(t);
    }, c = (t) => t === "" ? "" : isNaN(Number(t)) ? String(t) : t + "px", u = () => {
      const t = "nut-icon";
      return classnamesExports({
        [`${s}`]: s,
        [t]: true,
        [t + "-" + e]: e
      });
    }, l2 = {}, i = c(p || ""), n = c(f || "");
    i && (l2.width = i), n && (l2.height = n);
    const C = () => ({
      ...d,
      ...l2
    });
    return /* @__PURE__ */ cr(lr, { children: /* @__PURE__ */ vr(
      "svg",
      {
        className: u(),
        style: C(),
        onClick: g,
        xmlns: "http://www.w3.org/2000/svg",
        color: m,
        viewBox: "0 0 1024 1024",
        "aria-labelledby": e,
        role: "presentation",
        children: [
          /* @__PURE__ */ cr(
            "path",
            {
              d: "M696.43 465.25c40.61 0 73.53-32.72 73.53-73.09s-32.96-73.08-73.53-73.08-73.54 32.72-73.54 73.08 32.92 73.09 73.54 73.09zM535.74 650.62l-273.61-259.4a56.19 56.19 0 0 0-15.36 11.58l-114 119.63-6-222.77c-.73-26.82 20.84-49.41 47.67-50.14l201.77-5.44 47.34-50-250.43 6.75C119 202.33 76.33 247.17 77.78 301l7.32 271.4 4.5 166.78C91.06 793 136.05 835.47 190.2 834l176-4.75 12-.32 47.34-50 116.18-122.64z",
              fill: "currentColor",
              fillOpacity: "0.9"
            }
          ),
          ",",
          /* @__PURE__ */ cr(
            "path",
            {
              d: "m861.71 214.8-242.83-33.86-55.09 41.46L855 263a49.05 49.05 0 0 1 41.79 55.13l-54.33 389.59-120.87-159.05A59.86 59.86 0 0 0 638.06 537l-44 33.08 65.07 86.15L603.84 698l-79.57 60.1-54.92 41.48 34.17 4.76 270.73 37.76a97.55 97.55 0 0 0 109.88-79.6 22.37 22.37 0 0 0 .65-3.44l60.53-434.16c7.44-53.32-29.95-102.62-83.6-110.1z",
              fill: "currentColor",
              fillOpacity: "0.9"
            }
          )
        ]
      }
    ) });
  };
  k$5.defaultProps = a$k;
  const a$j = {
    className: "",
    style: void 0,
    name: "Image",
    width: "",
    height: "",
    onClick: () => {
    }
  }, k$4 = (h) => {
    const { className: l2, style: d, name: c, color: m, width: p, height: f, onClick: r } = { ...a$j, ...h }, g = (t) => {
      r && r(t);
    }, o = (t) => t === "" ? "" : isNaN(Number(t)) ? String(t) : t + "px", u = () => {
      const t = "nut-icon";
      return classnamesExports({
        [`${l2}`]: l2,
        [t]: true,
        [t + "-" + c]: c
      });
    }, e = {}, i = o(p || ""), n = o(f || "");
    i && (e.width = i), n && (e.height = n);
    const w = () => ({
      ...d,
      ...e
    });
    return /* @__PURE__ */ cr(lr, { children: /* @__PURE__ */ vr(
      "svg",
      {
        className: u(),
        style: w(),
        onClick: g,
        xmlns: "http://www.w3.org/2000/svg",
        color: m,
        viewBox: "0 0 1024 1024",
        "aria-labelledby": c,
        role: "presentation",
        children: [
          /* @__PURE__ */ cr(
            "path",
            {
              d: "M853.161 892.55H362.595l-209.433-.414a18.5 18.5 0 0 1-1.813-.092c-24.849-2.485-47.825-14.06-64.696-32.595-16.991-18.665-26.35-42.855-26.35-68.112V264.626c0-55.808 45.404-101.211 101.212-101.211H853.16c55.808 0 101.21 45.403 101.21 101.211v225.513c0 .275-.006.552-.018.826-.022.494-1.972 51.723 15.481 85.462 4.717 9.119 1.148 20.335-7.97 25.053-9.117 4.714-20.335 1.15-25.053-7.97-21.3-41.177-19.845-97.643-19.619-103.74V264.627c0-35.307-28.724-64.031-64.03-64.031H161.515c-35.308 0-64.032 28.724-64.032 64.031v526.711c0 32.755 24.321 59.958 56.718 63.62l208.431.412h490.53c35.306 0 64.03-28.725 64.03-64.032l-.382-93.677c-.105-1.75-1.587-19.548-19.55-42.5a9.548 9.548 0 0 1-.147-.19l-21.712-28.489-117.227-155.119c-.416-.55-38.995-50.852-86.272-45.534-38.335 4.315-75.955 45.164-108.79 118.132-17.615 39.141-34.65 68.269-52.082 89.046-17.607 20.986-35.68 33.52-55.251 38.317-43.423 10.638-81.05-18.995-120.887-50.373l-5.057-3.98c-46.555-36.578-68.75-28.224-158.33 59.602-7.33 7.188-19.1 7.071-26.289-.26-7.187-7.33-7.07-19.1.26-26.287 46.659-45.746 77.544-72.727 107.086-84.283 33.358-13.048 64.275-6.267 100.242 21.994l5.093 4.008c33.923 26.72 63.22 49.795 89.029 43.467 25.618-6.279 53.3-42.114 82.28-106.509 39.14-86.976 85.838-134.027 138.797-139.849 68.454-7.515 117.824 57.405 119.892 60.172l117.122 154.98 21.6 28.344c26.277 33.631 27.334 61.639 27.367 64.725l.001.128.384 94.06c.001 55.884-45.4 101.287-101.209 101.287z",
              fill: "currentColor",
              fillOpacity: "0.9"
            }
          ),
          ",",
          /* @__PURE__ */ cr(
            "path",
            {
              d: "M312.328 446.968c-42.325 0-76.759-34.434-76.759-76.76s34.434-76.759 76.76-76.759 76.759 34.435 76.759 76.76-34.434 76.759-76.76 76.759zm0-116.34c-21.824 0-39.579 17.756-39.579 39.58s17.755 39.58 39.58 39.58 39.579-17.756 39.579-39.58-17.755-39.58-39.58-39.58z",
              fill: "currentColor",
              fillOpacity: "0.9"
            }
          )
        ]
      }
    ) });
  };
  k$4.defaultProps = a$j;
  const a$i = {
    className: "",
    style: void 0,
    name: "Issue",
    width: "",
    height: "",
    onClick: () => {
    }
  }, x$8 = (h) => {
    const { className: o, style: m, name: s, color: d, width: p, height: f, onClick: r } = { ...a$i, ...h }, u = (t) => {
      r && r(t);
    }, n = (t) => t === "" ? "" : isNaN(Number(t)) ? String(t) : t + "px", g = () => {
      const t = "nut-icon";
      return classnamesExports({
        [`${o}`]: o,
        [t]: true,
        [t + "-" + s]: s
      });
    }, e = {}, i = n(p || ""), l2 = n(f || "");
    i && (e.width = i), l2 && (e.height = l2);
    const C = () => ({
      ...m,
      ...e
    });
    return /* @__PURE__ */ cr(lr, { children: /* @__PURE__ */ cr(
      "svg",
      {
        className: g(),
        style: C(),
        onClick: u,
        xmlns: "http://www.w3.org/2000/svg",
        color: d,
        viewBox: "0 0 1024 1024",
        "aria-labelledby": s,
        role: "presentation",
        children: /* @__PURE__ */ cr(
          "path",
          {
            d: "M512 1024C229.831 1024 0 794.169 0 512S229.831 0 512 0s512 229.831 512 512-229.831 512-512 512zm0-955.733C266.24 68.267 68.267 266.24 68.267 512S266.24 955.733 512 955.733 955.733 757.76 955.733 512 757.76 68.267 512 68.267zm31.858 377.742c18.204 0 34.133 15.929 34.133 34.133 0 2.276 0 15.93-2.275 18.205l-34.134 195.697h29.582c18.205 0 34.134 15.93 34.134 34.134s-15.93 34.133-34.134 34.133h-91.022c-18.204 0-34.133-15.929-34.133-34.133v-20.48L480.142 512H450.56c-18.204 0-34.133-15.929-34.133-34.133s15.929-34.134 34.133-34.134h93.298zm-34.134-207.076c38.685 0 68.267 29.583 68.267 68.267s-29.582 68.267-68.267 68.267-68.266-29.583-68.266-68.267 29.582-68.267 68.266-68.267z",
            fill: "currentColor",
            fillOpacity: "0.9"
          }
        )
      }
    ) });
  };
  x$8.defaultProps = a$i;
  const a$h = {
    className: "",
    style: void 0,
    name: "JoySmile",
    width: "",
    height: "",
    onClick: () => {
    }
  }, x$7 = (h) => {
    const { className: i, style: d, name: e, color: m, width: p, height: f, onClick: r } = { ...a$h, ...h }, g = (t) => {
      r && r(t);
    }, c = (t) => t === "" ? "" : isNaN(Number(t)) ? String(t) : t + "px", u = () => {
      const t = "nut-icon";
      return classnamesExports({
        [`${i}`]: i,
        [t]: true,
        [t + "-" + e]: e
      });
    }, s = {}, n = c(p || ""), l2 = c(f || "");
    n && (s.width = n), l2 && (s.height = l2);
    const y2 = () => ({
      ...d,
      ...s
    });
    return /* @__PURE__ */ cr(lr, { children: /* @__PURE__ */ cr(
      "svg",
      {
        className: u(),
        style: y2(),
        onClick: g,
        xmlns: "http://www.w3.org/2000/svg",
        color: m,
        viewBox: "0 0 3072 1024",
        "aria-labelledby": e,
        role: "presentation",
        children: /* @__PURE__ */ cr(
          "path",
          {
            d: "M2185.74 479.429a117.992 117.992 0 1 0-162.829-170.852c-284.772 271.204-732.314 271.204-1017.087 0A118.05 118.05 0 0 0 842.996 479.43c375.98 358.045 966.705 358.045 1342.744 0",
            fill: "currentColor",
            fillOpacity: "0.9"
          }
        )
      }
    ) });
  };
  x$7.defaultProps = a$h;
  const a$g = {
    className: "",
    style: void 0,
    name: "Left",
    width: "",
    height: "",
    onClick: () => {
    }
  }, y$6 = (h) => {
    const { className: r, style: d, name: e, color: p, width: m, height: f, onClick: n } = { ...a$g, ...h }, g = (t) => {
      n && n(t);
    }, i = (t) => t === "" ? "" : isNaN(Number(t)) ? String(t) : t + "px", u = () => {
      const t = "nut-icon";
      return classnamesExports({
        [`${r}`]: r,
        [t]: true,
        [t + "-" + e]: e
      });
    }, s = {}, l2 = i(m || ""), c = i(f || "");
    l2 && (s.width = l2), c && (s.height = c);
    const w = () => ({
      ...d,
      ...s
    });
    return /* @__PURE__ */ cr(lr, { children: /* @__PURE__ */ cr(
      "svg",
      {
        className: u(),
        style: w(),
        onClick: g,
        xmlns: "http://www.w3.org/2000/svg",
        color: p,
        viewBox: "0 0 1024 1024",
        "aria-labelledby": e,
        role: "presentation",
        children: /* @__PURE__ */ cr(
          "path",
          {
            d: "M642.973 1005.542 321.912 587.098a123.278 123.278 0 0 1 0-150.17l321.06-418.443a47.182 47.182 0 0 1 74.83 57.422l-321.088 418.47a28.994 28.994 0 0 0 0 35.3l321.088 418.47a47.155 47.155 0 0 1-74.83 57.395",
            fill: "currentColor",
            fillOpacity: "0.9"
          }
        )
      }
    ) });
  };
  y$6.defaultProps = a$g;
  const a$f = {
    className: "",
    style: void 0,
    name: "Link",
    width: "",
    height: "",
    onClick: () => {
    }
  }, x$6 = (h) => {
    const { className: s, style: d, name: c, color: m, width: p, height: f, onClick: n } = { ...a$f, ...h }, g = (t) => {
      n && n(t);
    }, i = (t) => t === "" ? "" : isNaN(Number(t)) ? String(t) : t + "px", k2 = () => {
      const t = "nut-icon";
      return classnamesExports({
        [`${s}`]: s,
        [t]: true,
        [t + "-" + c]: c
      });
    }, e = {}, o = i(p || ""), r = i(f || "");
    o && (e.width = o), r && (e.height = r);
    const u = () => ({
      ...d,
      ...e
    });
    return /* @__PURE__ */ cr(lr, { children: /* @__PURE__ */ cr(
      "svg",
      {
        className: k2(),
        style: u(),
        onClick: g,
        xmlns: "http://www.w3.org/2000/svg",
        color: m,
        viewBox: "0 0 1024 1024",
        "aria-labelledby": c,
        role: "presentation",
        children: /* @__PURE__ */ cr(
          "path",
          {
            d: "M313.034 1004.045c-66.848 0-124.402-24.156-170.798-70.577l-40.854-40.829C54.96 846.218 28.966 783.097 30.83 714.411c3.702-66.85 31.56-131.808 79.819-180.12l137.4-137.373c14.86-14.861 40.855-14.861 55.69 0 14.86 14.861 16.725 38.99 0 55.69l-137.348 137.4a187.47 187.47 0 0 0-55.69 126.24c-1.864 46.422 14.835 89.115 46.396 120.675l40.855 40.855c31.56 31.56 74.253 48.286 120.674 46.421 46.421-1.838 92.843-22.291 126.24-55.69l137.4-137.4c14.862-14.86 40.856-14.86 55.69 0 14.862 14.862 14.862 40.856 0 55.69l-137.4 137.427c-48.285 48.259-113.27 76.117-180.118 79.82a5.645 5.645 0 0 0-7.405 0zm475.294-382.477c-11.133 0-18.563-3.702-27.832-12.997-14.86-14.861-14.86-40.855 0-55.69l115.082-115.108a187.47 187.47 0 0 0 55.716-126.267c1.838-46.395-14.861-89.114-46.421-120.674l-40.855-40.855c-64.985-64.959-176.364-61.257-246.915 9.294L478.266 278.108c-14.835 14.835-40.829 14.835-55.69 0-14.86-14.861-14.86-40.855 0-55.716l118.81-118.81C643.524 1.444 803.163-2.232 899.734 94.287l40.829 40.855c46.421 46.421 72.415 109.541 70.55 178.228-3.702 66.85-31.56 131.807-79.819 180.093L816.186 608.571c-7.43 7.43-18.563 11.133-27.858 12.997zm-332.327-1.864c-11.16 0-18.564-3.702-27.832-12.997-14.888-14.835-14.888-40.829 0-55.69l148.506-148.532c14.861-14.862 40.855-14.862 55.69 0 14.861 14.86 14.861 40.854 0 55.69L483.832 606.706c-7.404 7.43-18.563 11.159-27.831 12.997z",
            fill: "currentColor",
            fillOpacity: "0.9"
          }
        )
      }
    ) });
  };
  x$6.defaultProps = a$f;
  const a$e = {
    className: "",
    style: void 0,
    name: "Loading",
    width: "",
    height: "",
    onClick: () => {
    }
  }, k$3 = (h) => {
    const { className: l2, style: m, name: t, color: d, width: p, height: g, onClick: o } = { ...a$e, ...h }, f = (c) => {
      o && o(c);
    }, n = (c) => c === "" ? "" : isNaN(Number(c)) ? String(c) : c + "px", z = () => {
      const c = "nut-icon";
      return classnamesExports({
        [`${l2}`]: l2,
        [c]: true,
        [c + "-" + t]: t
      });
    }, s = {}, i = n(p || ""), r = n(g || "");
    i && (s.width = i), r && (s.height = r);
    const u = () => ({
      ...m,
      ...s
    });
    return /* @__PURE__ */ cr(lr, { children: /* @__PURE__ */ cr(
      "svg",
      {
        className: z(),
        style: u(),
        onClick: f,
        xmlns: "http://www.w3.org/2000/svg",
        color: d,
        viewBox: "0 0 1024 1024",
        "aria-labelledby": t,
        role: "presentation",
        children: /* @__PURE__ */ cr(
          "path",
          {
            d: "M784 902.4c9.6 19.2 6.4 41.6-12.8 54.4-19.2 9.6-41.6 3.2-51.2-12.8-9.6-19.2-6.4-41.6 12.8-54.4 16-12.8 38.4-8 51.2 12.8zM550.4 984c0 22.4-16 38.4-38.4 38.4s-38.4-16-38.4-38.4v-24c0-22.4 19.2-38.4 41.6-38.4 19.2 0 35.2 16 38.4 38.4v25.6h-3.2zm-240-43.2c-9.6 19.2-35.2 25.6-54.4 16-19.2-9.6-25.6-35.2-16-51.2l28.8-51.2c9.6-19.2 35.2-25.6 54.4-16s25.6 35.2 12.8 54.4l-25.6 48zM121.6 784c-19.2 9.6-41.6 3.2-54.4-16-9.6-19.2-6.4-41.6 12.8-54.4l76.8-44.8c19.2-9.6 41.6-3.2 54.4 16 9.6 19.2 3.2 41.6-16 54.4L121.6 784zM38.4 552C16 552 0 536 0 513.6s16-38.4 38.4-38.4H160c22.4 0 38.4 19.2 38.4 38.4 0 22.4-16 38.4-38.4 38.4H38.4zm44.8-241.6c-19.2-9.6-25.6-35.2-16-51.2 9.6-19.2 35.2-25.6 54.4-16L256 320c19.2 9.6 25.6 35.2 16 54.4s-35.2 25.6-54.4 16l-134.4-80zm160-185.6 92.8 160c9.6 19.2 35.2 25.6 54.4 12.8s25.6-35.2 12.8-54.4l-92.8-160C297.6 64 275.2 60.8 256 70.4c-16 12.8-22.4 33.6-12.8 54.4zM473.6 40c0-22.4 16-38.4 38.4-38.4s38.4 19.2 38.4 38.4v184c0 22.4-19.2 38.4-38.4 38.4-22.4 0-38.4-19.2-38.4-38.4V40zm240 43.2c9.6-19.2 35.2-25.6 54.4-16 19.2 9.6 25.6 35.2 16 51.2l-92.8 160c-9.6 19.2-35.2 25.6-54.4 16-19.2-9.6-25.6-35.2-12.8-54.4l89.6-156.8zm188.8 160-160 92.8c-19.2 9.6-25.6 35.2-16 54.4 12.8 19.2 35.2 25.6 54.4 12.8l160-92.8c19.2-9.6 25.6-35.2 12.8-54.4-9.6-16-32-25.6-51.2-12.8zM985.6 472c22.4 0 38.4 16 38.4 38.4s-16 38.4-38.4 38.4H800c-22.4 0-38.4-19.2-38.4-38.4 0-22.4 19.2-38.4 38.4-38.4h185.6z",
            fill: "currentColor",
            fillOpacity: "0.9"
          }
        )
      }
    ) });
  };
  k$3.defaultProps = a$e;
  const a$d = {
    className: "",
    style: void 0,
    name: "Location2",
    width: "",
    height: "",
    onClick: () => {
    }
  }, x$5 = (h) => {
    const { className: o, style: m, name: s, color: d, width: p, height: f, onClick: n } = { ...a$d, ...h }, g = (t) => {
      n && n(t);
    }, i = (t) => t === "" ? "" : isNaN(Number(t)) ? String(t) : t + "px", C = () => {
      const t = "nut-icon";
      return classnamesExports({
        [`${o}`]: o,
        [t]: true,
        [t + "-" + s]: s
      });
    }, e = {}, r = i(p || ""), l2 = i(f || "");
    r && (e.width = r), l2 && (e.height = l2);
    const u = () => ({
      ...m,
      ...e
    });
    return /* @__PURE__ */ cr(lr, { children: /* @__PURE__ */ cr(
      "svg",
      {
        className: C(),
        style: u(),
        onClick: g,
        xmlns: "http://www.w3.org/2000/svg",
        color: d,
        viewBox: "0 0 1024 1024",
        "aria-labelledby": s,
        role: "presentation",
        children: /* @__PURE__ */ cr(
          "path",
          {
            d: "m530.286 1005.714-25.6-10.971c-36.572-14.629-58.515-25.6-73.143-36.572-102.4-84.114-164.572-135.314-193.829-171.885-43.885-51.2-76.8-91.429-106.057-142.629C95.086 577.83 76.8 504.686 76.8 431.543c0-117.029 43.886-226.743 128-307.2C285.257 43.886 394.971 0 512 0s226.743 43.886 310.857 128c84.114 80.457 128 190.171 128 307.2 0 73.143-18.286 146.286-54.857 212.114-25.6 43.886-58.514 91.429-106.057 142.629-29.257 32.914-87.772 84.114-197.486 171.886 0 0-7.314 7.314-18.286 10.971l-43.885 32.914zM497.37 874.057s3.658 3.657 14.629 7.314c3.657-3.657 7.314-3.657 10.971-7.314C621.714 797.257 683.886 742.4 705.83 716.8c40.228-47.543 69.485-87.771 91.428-128 25.6-47.543 40.229-102.4 40.229-157.257 0-87.772-32.915-168.229-95.086-230.4-58.514-58.514-142.629-91.429-230.4-91.429S340.114 142.63 277.943 204.8c-62.172 62.171-95.086 142.629-95.086 230.4 0 54.857 14.629 109.714 40.229 157.257 25.6 43.886 54.857 80.457 95.085 124.343 25.6 29.257 84.115 80.457 179.2 157.257zm18.286-248.686c-102.4 0-182.857-80.457-182.857-182.857s80.457-182.857 182.857-182.857 182.857 80.457 182.857 182.857-80.457 182.857-182.857 182.857zm0-256c-40.228 0-73.143 32.915-73.143 73.143s32.915 73.143 73.143 73.143 73.143-32.914 73.143-73.143-32.914-73.143-73.143-73.143z",
            fill: "currentColor",
            fillOpacity: "0.9"
          }
        )
      }
    ) });
  };
  x$5.defaultProps = a$d;
  const a$c = {
    className: "",
    style: void 0,
    name: "MaskClose",
    width: "",
    height: "",
    onClick: () => {
    }
  }, x$4 = (h) => {
    const { className: c, style: d, name: s, color: m, width: p, height: f, onClick: l2 } = { ...a$c, ...h }, g = (t) => {
      l2 && l2(t);
    }, r = (t) => t === "" ? "" : isNaN(Number(t)) ? String(t) : t + "px", C = () => {
      const t = "nut-icon";
      return classnamesExports({
        [`${c}`]: c,
        [t]: true,
        [t + "-" + s]: s
      });
    }, e = {}, n = r(p || ""), i = r(f || "");
    n && (e.width = n), i && (e.height = i);
    const k2 = () => ({
      ...d,
      ...e
    });
    return /* @__PURE__ */ cr(lr, { children: /* @__PURE__ */ cr(
      "svg",
      {
        className: C(),
        style: k2(),
        onClick: g,
        xmlns: "http://www.w3.org/2000/svg",
        color: m,
        viewBox: "0 0 1024 1024",
        "aria-labelledby": s,
        role: "presentation",
        children: /* @__PURE__ */ cr(
          "path",
          {
            d: "M512 14.897C238.594 14.897 14.897 238.594 14.897 512S238.594 1009.103 512 1009.103 1009.103 785.406 1009.103 512 785.406 14.897 512 14.897zm207.126 646.234c16.57 16.57 16.57 41.425 0 57.995s-41.425 16.57-57.995 0L512 569.996l-149.13 149.13c-16.57 16.57-41.426 16.57-57.996 0s-16.57-41.425 0-57.995L454.004 512l-149.13-149.13c-16.57-16.57-16.57-41.426 0-57.996s41.425-16.57 57.995 0L512 454.004l149.13-149.13c16.57-16.57 41.426-16.57 57.996 0s16.57 41.425 0 57.995L569.996 512l149.13 149.13z",
            fill: "currentColor",
            fillOpacity: "0.9"
          }
        )
      }
    ) });
  };
  x$4.defaultProps = a$c;
  const a$b = {
    className: "",
    style: void 0,
    name: "Minus",
    width: "",
    height: "",
    onClick: () => {
    }
  }, y$5 = (h) => {
    const { className: i, style: d, name: s, color: p, width: m, height: f, onClick: o } = { ...a$b, ...h }, u = (t) => {
      o && o(t);
    }, r = (t) => t === "" ? "" : isNaN(Number(t)) ? String(t) : t + "px", g = () => {
      const t = "nut-icon";
      return classnamesExports({
        [`${i}`]: i,
        [t]: true,
        [t + "-" + s]: s
      });
    }, e = {}, c = r(m || ""), l2 = r(f || "");
    c && (e.width = c), l2 && (e.height = l2);
    const w = () => ({
      ...d,
      ...e
    });
    return /* @__PURE__ */ cr(lr, { children: /* @__PURE__ */ cr(
      "svg",
      {
        className: g(),
        style: w(),
        onClick: u,
        xmlns: "http://www.w3.org/2000/svg",
        color: p,
        viewBox: "0 0 1024 1024",
        "aria-labelledby": s,
        role: "presentation",
        children: /* @__PURE__ */ cr(
          "path",
          {
            d: "M299.52 460.8h409.6c28.16 0 51.2 23.04 51.2 51.2s-23.04 51.2-51.2 51.2h-409.6c-28.16 0-51.2-23.04-51.2-51.2s23.04-51.2 51.2-51.2z",
            fill: "currentColor",
            fillOpacity: "0.9"
          }
        )
      }
    ) });
  };
  y$5.defaultProps = a$b;
  const a$a = {
    className: "",
    style: void 0,
    name: "My",
    width: "",
    height: "",
    onClick: () => {
    }
  }, k$2 = (h) => {
    const { className: o, style: d, name: s, color: m, width: p, height: f, onClick: r } = { ...a$a, ...h }, g = (t) => {
      r && r(t);
    }, n = (t) => t === "" ? "" : isNaN(Number(t)) ? String(t) : t + "px", u = () => {
      const t = "nut-icon";
      return classnamesExports({
        [`${o}`]: o,
        [t]: true,
        [t + "-" + s]: s
      });
    }, e = {}, i = n(p || ""), l2 = n(f || "");
    i && (e.width = i), l2 && (e.height = l2);
    const y2 = () => ({
      ...d,
      ...e
    });
    return /* @__PURE__ */ cr(lr, { children: /* @__PURE__ */ cr(
      "svg",
      {
        className: u(),
        style: y2(),
        onClick: g,
        xmlns: "http://www.w3.org/2000/svg",
        color: m,
        viewBox: "0 0 1024 1024",
        "aria-labelledby": s,
        role: "presentation",
        children: /* @__PURE__ */ cr(
          "path",
          {
            d: "M512 813.949c-225.805 0-406.974-183.795-406.974-406.975S286.195 0 512 0s406.974 181.17 406.974 406.974S735.18 813.95 512 813.95zm0-735.18c-181.17 0-328.205 147.036-328.205 328.205S330.83 735.18 512 735.18s328.205-147.035 328.205-328.205S693.17 78.77 512 78.77zm202.174 939.98c-21.005 0-39.384-18.38-39.384-39.385 0-89.272-73.518-162.79-162.79-162.79-89.272 0-162.79 73.518-162.79 162.79 0 21.005-18.38 39.385-39.384 39.385s-39.385-18.38-39.385-39.385c0-133.908 107.651-241.559 241.559-241.559s241.559 107.651 241.559 241.56c0 21.004-15.754 39.384-39.385 39.384zM512 525.129c-39.385 0-78.77-13.129-105.026-36.76-15.753-13.128-18.38-39.384-2.625-55.138 13.128-15.754 39.384-18.38 55.138-2.626 23.63 21.005 81.395 21.005 105.026 0 15.754-13.128 42.01-13.128 55.138 5.251 13.128 15.754 13.128 42.01-5.251 55.139C590.77 512 551.385 525.128 512 525.128z",
            fill: "currentColor",
            fillOpacity: "0.9"
          }
        )
      }
    ) });
  };
  k$2.defaultProps = a$a;
  const a$9 = {
    className: "",
    style: void 0,
    name: "Notice",
    width: "",
    height: "",
    onClick: () => {
    }
  }, k$1 = (h) => {
    const { className: o, style: d, name: e, color: m, width: p, height: f, onClick: i } = { ...a$9, ...h }, g = (t) => {
      i && i(t);
    }, r = (t) => t === "" ? "" : isNaN(Number(t)) ? String(t) : t + "px", u = () => {
      const t = "nut-icon";
      return classnamesExports({
        [`${o}`]: o,
        [t]: true,
        [t + "-" + e]: e
      });
    }, s = {}, n = r(p || ""), l2 = r(f || "");
    n && (s.width = n), l2 && (s.height = l2);
    const C = () => ({
      ...d,
      ...s
    });
    return /* @__PURE__ */ cr(lr, { children: /* @__PURE__ */ cr(
      "svg",
      {
        className: u(),
        style: C(),
        onClick: g,
        xmlns: "http://www.w3.org/2000/svg",
        color: m,
        viewBox: "0 0 1027 1024",
        "aria-labelledby": e,
        role: "presentation",
        children: /* @__PURE__ */ cr(
          "path",
          {
            d: "M940.873 819.2h-85.334V430.933c0-192-153.6-345.6-341.333-345.6s-341.333 153.6-341.333 345.6V819.2H87.539V430.933C87.54 192 279.54 0 514.206 0s426.667 192 426.667 430.933V819.2zM514.633 1024c-68.267 0-132.267-29.867-174.934-85.333-17.066-17.067-12.8-42.667 4.267-59.734 17.067-12.8 46.933-12.8 59.733 8.534 29.867 34.133 68.267 51.2 110.934 51.2s81.066-17.067 106.666-51.2c12.8-17.067 42.667-21.334 59.734-8.534 17.066 12.8 21.333 42.667 8.533 59.734C646.899 994.133 582.899 1024 514.633 1024zm469.333-162.133h-12.8c-294.4-89.6-618.667-89.6-913.067 0-21.333 4.266-46.933-8.534-55.466-29.867-8.534-21.333 4.266-46.933 29.866-51.2 311.467-93.867 652.8-89.6 964.267 0 21.333 8.533 34.133 29.867 29.867 51.2-8.534 21.333-25.6 29.867-42.667 29.867z",
            fill: "currentColor",
            fillOpacity: "0.9"
          }
        )
      }
    ) });
  };
  k$1.defaultProps = a$9;
  const l = {
    className: "",
    style: void 0,
    name: "Photograph",
    width: "",
    height: "",
    onClick: () => {
    }
  }, x$3 = (a2) => {
    const { className: o, style: m, name: c, color: p, width: d, height: g, onClick: r } = { ...l, ...a2 }, f = (t) => {
      r && r(t);
    }, n = (t) => t === "" ? "" : isNaN(Number(t)) ? String(t) : t + "px", C = () => {
      const t = "nut-icon";
      return classnamesExports({
        [`${o}`]: o,
        [t]: true,
        [t + "-" + c]: c
      });
    }, e = {}, i = n(d || ""), h = n(g || "");
    i && (e.width = i), h && (e.height = h);
    const u = () => ({
      ...m,
      ...e
    });
    return /* @__PURE__ */ cr(lr, { children: /* @__PURE__ */ cr(
      "svg",
      {
        className: C(),
        style: u(),
        onClick: f,
        xmlns: "http://www.w3.org/2000/svg",
        color: p,
        viewBox: "0 0 1141 1024",
        "aria-labelledby": c,
        role: "presentation",
        children: /* @__PURE__ */ cr(
          "path",
          {
            d: "M570.514 789.943c-119.954 0-219.428-99.474-219.428-219.429s99.474-219.428 219.428-219.428 219.429 99.474 219.429 219.428-99.474 219.429-219.429 219.429zm0-351.086c-73.143 0-131.657 58.514-131.657 131.657s58.514 131.657 131.657 131.657 131.657-58.514 131.657-131.657-58.514-131.657-131.657-131.657zM877.714 1024h-614.4C117.03 1024 0 906.971 0 760.686V380.343c0-146.286 117.029-263.314 263.314-263.314h32.183c0-2.926 2.926-8.778 2.926-11.703C315.977 43.886 374.49 0 438.857 0h263.314c70.218 0 128.732 49.737 143.36 117.029h32.183c146.286 0 263.315 117.028 263.315 263.314v380.343C1141.029 906.97 1024 1024 877.714 1024zm-614.4-819.2c-96.548 0-175.543 78.994-175.543 175.543v380.343c0 96.548 78.995 175.543 175.543 175.543h614.4c96.549 0 175.543-78.995 175.543-175.543V380.343c0-96.549-78.994-175.543-175.543-175.543H819.2c-32.183 0-58.514-26.331-58.514-58.514S734.354 87.77 702.17 87.77H438.857c-26.331 0-49.737 17.555-55.588 40.96-2.926 5.852-2.926 11.703-2.926 17.555 0 32.183-26.332 58.514-58.514 58.514h-58.515zm-87.771 160.914a73.143 73.143 0 1 0 146.286 0 73.143 73.143 0 1 0-146.286 0Z",
            fill: "currentColor",
            fillOpacity: "0.9"
          }
        )
      }
    ) });
  };
  x$3.defaultProps = l;
  const a$8 = {
    className: "",
    style: void 0,
    name: "Plus",
    width: "",
    height: "",
    onClick: () => {
    }
  }, y$4 = (h) => {
    const { className: r, style: d, name: e, color: p, width: m, height: f, onClick: n } = { ...a$8, ...h }, u = (t) => {
      n && n(t);
    }, i = (t) => t === "" ? "" : isNaN(Number(t)) ? String(t) : t + "px", g = () => {
      const t = "nut-icon";
      return classnamesExports({
        [`${r}`]: r,
        [t]: true,
        [t + "-" + e]: e
      });
    }, s = {}, c = i(m || ""), l2 = i(f || "");
    c && (s.width = c), l2 && (s.height = l2);
    const w = () => ({
      ...d,
      ...s
    });
    return /* @__PURE__ */ cr(lr, { children: /* @__PURE__ */ cr(
      "svg",
      {
        className: g(),
        style: w(),
        onClick: u,
        xmlns: "http://www.w3.org/2000/svg",
        color: p,
        viewBox: "0 0 1024 1024",
        "aria-labelledby": e,
        role: "presentation",
        children: /* @__PURE__ */ cr(
          "path",
          {
            d: "M345.6 460.8h409.6q51.2 0 51.2 51.2t-51.2 51.2H345.6q-51.2 0-51.2-51.2t51.2-51.2zM550.4 256q51.2 0 51.2 51.2v409.6q0 51.2-51.2 51.2t-51.2-51.2V307.2q0-51.2 51.2-51.2z",
            fill: "currentColor",
            fillOpacity: "0.9"
          }
        )
      }
    ) });
  };
  y$4.defaultProps = a$8;
  const a$7 = {
    className: "",
    style: void 0,
    name: "RectDown",
    width: "",
    height: "",
    onClick: () => {
    }
  }, y$3 = (h) => {
    const { className: o, style: d, name: e, color: p, width: m, height: f, onClick: n } = { ...a$7, ...h }, g = (t) => {
      n && n(t);
    }, r = (t) => t === "" ? "" : isNaN(Number(t)) ? String(t) : t + "px", w = () => {
      const t = "nut-icon";
      return classnamesExports({
        [`${o}`]: o,
        [t]: true,
        [t + "-" + e]: e
      });
    }, s = {}, i = r(m || ""), l2 = r(f || "");
    i && (s.width = i), l2 && (s.height = l2);
    const u = () => ({
      ...d,
      ...s
    });
    return /* @__PURE__ */ cr(lr, { children: /* @__PURE__ */ cr(
      "svg",
      {
        className: w(),
        style: u(),
        onClick: g,
        xmlns: "http://www.w3.org/2000/svg",
        color: p,
        viewBox: "0 0 1024 1024",
        "aria-labelledby": e,
        role: "presentation",
        children: /* @__PURE__ */ cr(
          "path",
          {
            d: "M515.072 778.24c-14.336 0-28.672-5.632-39.936-16.384L69.12 356.864c-22.016-22.016-22.016-57.856 0-79.872s57.856-22.016 79.872 0L515.584 642.56 880.64 275.968c22.016-22.016 57.856-22.016 79.872 0s22.016 57.856 0 79.872L555.008 762.368c-10.752 10.752-25.6 15.872-39.936 15.872z",
            fill: "currentColor",
            fillOpacity: "0.9"
          }
        )
      }
    ) });
  };
  y$3.defaultProps = a$7;
  const a$6 = {
    className: "",
    style: void 0,
    name: "Search",
    width: "",
    height: "",
    onClick: () => {
    }
  }, x$2 = (h) => {
    const { className: r, style: d, name: e, color: m, width: p, height: f, onClick: o } = { ...a$6, ...h }, g = (t) => {
      o && o(t);
    }, n = (t) => t === "" ? "" : isNaN(Number(t)) ? String(t) : t + "px", u = () => {
      const t = "nut-icon";
      return classnamesExports({
        [`${r}`]: r,
        [t]: true,
        [t + "-" + e]: e
      });
    }, s = {}, i = n(p || ""), l2 = n(f || "");
    i && (s.width = i), l2 && (s.height = l2);
    const C = () => ({
      ...d,
      ...s
    });
    return /* @__PURE__ */ cr(lr, { children: /* @__PURE__ */ cr(
      "svg",
      {
        className: u(),
        style: C(),
        onClick: g,
        xmlns: "http://www.w3.org/2000/svg",
        color: m,
        viewBox: "0 0 1024 1024",
        "aria-labelledby": e,
        role: "presentation",
        children: /* @__PURE__ */ cr(
          "path",
          {
            d: "M512 1024C231.131 1024 0 792.869 0 512S231.131 0 512 0s512 231.131 512 512-231.131 512-512 512zm0-936.229C277.943 87.771 87.771 277.943 87.771 512S277.943 936.229 512 936.229 936.229 746.057 936.229 512 746.057 87.771 512 87.771zM980.114 1024c-11.703 0-23.405-2.926-32.183-11.703L830.903 895.27c-17.554-17.555-17.554-43.886 0-61.44s43.886-17.555 61.44 0l117.028 117.028c17.555 17.554 17.555 43.886 0 61.44-5.851 8.777-17.554 11.703-29.257 11.703z",
            fill: "currentColor",
            fillOpacity: "0.9"
          }
        )
      }
    ) });
  };
  x$2.defaultProps = a$6;
  const a$5 = {
    className: "",
    style: void 0,
    name: "Service",
    width: "",
    height: "",
    onClick: () => {
    }
  }, k = (h) => {
    const { className: r, style: m, name: e, color: d, width: p, height: f, onClick: i } = { ...a$5, ...h }, g = (t) => {
      i && i(t);
    }, o = (t) => t === "" ? "" : isNaN(Number(t)) ? String(t) : t + "px", u = () => {
      const t = "nut-icon";
      return classnamesExports({
        [`${r}`]: r,
        [t]: true,
        [t + "-" + e]: e
      });
    }, s = {}, n = o(p || ""), l2 = o(f || "");
    n && (s.width = n), l2 && (s.height = l2);
    const C = () => ({
      ...m,
      ...s
    });
    return /* @__PURE__ */ cr(lr, { children: /* @__PURE__ */ cr(
      "svg",
      {
        className: u(),
        style: C(),
        onClick: g,
        xmlns: "http://www.w3.org/2000/svg",
        color: d,
        viewBox: "0 0 1024 1024",
        "aria-labelledby": e,
        role: "presentation",
        children: /* @__PURE__ */ cr(
          "path",
          {
            d: "M1024 657.723H905.846v-126.03c0-228.431-177.23-413.54-393.846-413.54s-393.846 185.109-393.846 413.54v126.03H0v-126.03C0 236.307 228.43 0 512 0s512 236.308 512 531.692v126.031zM196.923 866.462C86.646 866.462 0 779.815 0 669.538s86.646-196.923 196.923-196.923 196.923 86.647 196.923 196.923S307.2 866.462 196.923 866.462zm0-275.693c-43.323 0-78.77 35.446-78.77 78.77s35.447 78.769 78.77 78.769 78.77-35.446 78.77-78.77-35.447-78.769-78.77-78.769zm630.154 275.693c-110.277 0-196.923-86.647-196.923-196.924S716.8 472.615 827.077 472.615 1024 559.262 1024 669.538s-86.646 196.924-196.923 196.924zm0-275.693c-43.323 0-78.77 35.446-78.77 78.77s35.447 78.769 78.77 78.769 78.77-35.446 78.77-78.77-35.447-78.769-78.77-78.769zm-149.662 429.293c-23.63 0-47.261-15.754-55.138-43.324-7.877-31.507 7.877-63.015 39.385-74.83 102.4-31.508 189.046-102.4 236.307-196.923 15.754-27.57 51.2-39.385 78.77-23.631s39.384 51.2 23.63 78.77c-63.015 122.091-177.23 216.614-307.2 256-3.938 3.938-11.815 3.938-15.754 3.938z",
            fill: "currentColor",
            fillOpacity: "0.9"
          }
        )
      }
    ) });
  };
  k.defaultProps = a$5;
  const a$4 = {
    className: "",
    style: void 0,
    name: "StarFillN",
    width: "",
    height: "",
    onClick: () => {
    }
  }, x$1 = (h) => {
    const { className: l2, style: d, name: e, color: p, width: m, height: f, onClick: r } = { ...a$4, ...h }, g = (t) => {
      r && r(t);
    }, i = (t) => t === "" ? "" : isNaN(Number(t)) ? String(t) : t + "px", u = () => {
      const t = "nut-icon";
      return classnamesExports({
        [`${l2}`]: l2,
        [t]: true,
        [t + "-" + e]: e
      });
    }, s = {}, o = i(m || ""), n = i(f || "");
    o && (s.width = o), n && (s.height = n);
    const w = () => ({
      ...d,
      ...s
    });
    return /* @__PURE__ */ cr(lr, { children: /* @__PURE__ */ cr(
      "svg",
      {
        className: u(),
        style: w(),
        onClick: g,
        xmlns: "http://www.w3.org/2000/svg",
        color: p,
        viewBox: "0 0 1081 1024",
        "aria-labelledby": e,
        role: "presentation",
        children: /* @__PURE__ */ cr(
          "path",
          {
            d: "M1047.135 361.244 722.87 312.89 577.802 22.756c-2.844-8.534-11.378-14.223-19.911-17.067-19.911-8.533-45.511-2.845-54.045 17.067L358.78 312.889 34.513 358.4c-8.533 0-17.067 5.689-22.755 11.378-17.067 17.066-14.223 42.666 0 56.889l233.244 227.555-54.044 321.422c-2.845 8.534 0 17.067 2.844 25.6 11.378 19.912 34.133 28.445 54.044 17.067L537.98 867.556l290.133 150.755c8.533 2.845 17.067 5.689 25.6 2.845 22.756-2.845 36.978-25.6 34.133-45.512l-54.044-321.422 233.244-227.555c5.69-5.69 11.378-14.223 11.378-22.756 5.69-19.911-8.533-39.822-31.289-42.667z",
            fill: "currentColor",
            fillOpacity: "0.9"
          }
        )
      }
    ) });
  };
  x$1.defaultProps = a$4;
  const a$3 = {
    className: "",
    style: void 0,
    name: "Tips",
    width: "",
    height: "",
    onClick: () => {
    }
  }, x = (h) => {
    const { className: i, style: m, name: s, color: p, width: d, height: f, onClick: o } = { ...a$3, ...h }, g = (t) => {
      o && o(t);
    }, r = (t) => t === "" ? "" : isNaN(Number(t)) ? String(t) : t + "px", u = () => {
      const t = "nut-icon";
      return classnamesExports({
        [`${i}`]: i,
        [t]: true,
        [t + "-" + s]: s
      });
    }, c = {}, n = r(d || ""), l2 = r(f || "");
    n && (c.width = n), l2 && (c.height = l2);
    const w = () => ({
      ...m,
      ...c
    });
    return /* @__PURE__ */ cr(lr, { children: /* @__PURE__ */ cr(
      "svg",
      {
        className: u(),
        style: w(),
        onClick: g,
        xmlns: "http://www.w3.org/2000/svg",
        color: p,
        viewBox: "0 0 1024 1024",
        "aria-labelledby": s,
        role: "presentation",
        children: /* @__PURE__ */ cr(
          "path",
          {
            d: "M512 1024C230.4 1024 0 793.6 0 512S230.4 0 512 0s512 230.4 512 512-230.4 512-512 512zm0-938.667c-234.667 0-426.667 192-426.667 426.667s192 426.667 426.667 426.667 426.667-192 426.667-426.667S746.667 85.333 512 85.333zM448 320a64 64 0 1 0 128 0 64 64 0 1 0-128 0Zm-17.067 149.333h51.2c12.8 0 21.334 8.534 21.334 21.334v8.533c0 12.8-8.534 21.333-21.334 21.333h-51.2c-12.8 0-25.6-12.8-25.6-25.6s12.8-25.6 25.6-25.6zm51.2 0H524.8c25.6 0 51.2 21.334 51.2 51.2v8.534L537.6 755.2c0 8.533-8.533 17.067-21.333 17.067H473.6c-25.6 0-51.2-21.334-51.2-51.2v-8.534L460.8 486.4c4.267-8.533 12.8-17.067 21.333-17.067zm8.534 251.734h76.8c12.8 0 25.6 12.8 25.6 25.6s-12.8 25.6-25.6 25.6h-76.8c-12.8 0-21.334-8.534-21.334-21.334v-12.8c4.267-12.8 12.8-17.066 21.334-17.066z",
            fill: "currentColor",
            fillOpacity: "0.9"
          }
        )
      }
    ) });
  };
  x.defaultProps = a$3;
  const a$2 = {
    className: "",
    style: void 0,
    name: "Top",
    width: "",
    height: "",
    onClick: () => {
    }
  }, y$2 = (h) => {
    const { className: o, style: p, name: c, color: d, width: m, height: f, onClick: r } = { ...a$2, ...h }, g = (t) => {
      r && r(t);
    }, n = (t) => t === "" ? "" : isNaN(Number(t)) ? String(t) : t + "px", u = () => {
      const t = "nut-icon";
      return classnamesExports({
        [`${o}`]: o,
        [t]: true,
        [t + "-" + c]: c
      });
    }, e = {}, i = n(m || ""), l2 = n(f || "");
    i && (e.width = i), l2 && (e.height = l2);
    const w = () => ({
      ...p,
      ...e
    });
    return /* @__PURE__ */ cr(lr, { children: /* @__PURE__ */ cr(
      "svg",
      {
        className: u(),
        style: w(),
        onClick: g,
        xmlns: "http://www.w3.org/2000/svg",
        color: d,
        viewBox: "0 0 1024 1024",
        "aria-labelledby": c,
        role: "presentation",
        children: /* @__PURE__ */ cr(
          "path",
          {
            d: "M136.533 540.444c-11.377 0-25.6-5.688-34.133-17.066-14.222-19.911-11.378-45.511 8.533-59.734L477.867 179.2c19.91-14.222 45.51-11.378 59.733 8.533s11.378 45.511-8.533 59.734L162.133 531.91c-5.689 5.689-14.222 8.533-25.6 8.533zm745.245 0c-8.534 0-17.067-2.844-25.6-8.533L489.244 247.467c-19.91-14.223-22.755-42.667-8.533-59.734 14.222-19.91 42.667-22.755 59.733-8.533l366.934 284.444c19.91 14.223 22.755 42.667 8.533 59.734-8.533 11.378-19.911 17.066-34.133 17.066zM512 1024c-22.756 0-42.667-19.911-42.667-42.667v-768c0-22.755 19.911-42.666 42.667-42.666s42.667 19.91 42.667 42.666v768c0 22.756-19.911 42.667-42.667 42.667zM884.622 85.333h-742.4c-22.755 0-42.666-19.91-42.666-42.666S119.466 0 142.222 0h742.4c22.756 0 42.667 19.911 42.667 42.667s-19.911 42.666-42.667 42.666z",
            fill: "currentColor",
            fillOpacity: "0.9"
          }
        )
      }
    ) });
  };
  y$2.defaultProps = a$2;
  const a$1 = {
    className: "",
    style: void 0,
    name: "TriangleDown",
    width: "",
    height: "",
    onClick: () => {
    }
  }, y$1 = (h) => {
    const { className: o, style: d, name: e, color: m, width: p, height: g, onClick: r } = { ...a$1, ...h }, f = (t) => {
      r && r(t);
    }, i = (t) => t === "" ? "" : isNaN(Number(t)) ? String(t) : t + "px", w = () => {
      const t = "nut-icon";
      return classnamesExports({
        [`${o}`]: o,
        [t]: true,
        [t + "-" + e]: e
      });
    }, s = {}, c = i(p || ""), l2 = i(g || "");
    c && (s.width = c), l2 && (s.height = l2);
    const u = () => ({
      ...d,
      ...s
    });
    return /* @__PURE__ */ cr(lr, { children: /* @__PURE__ */ cr(
      "svg",
      {
        className: w(),
        style: u(),
        onClick: f,
        xmlns: "http://www.w3.org/2000/svg",
        color: m,
        viewBox: "0 0 1024 1024",
        "aria-labelledby": e,
        role: "presentation",
        children: /* @__PURE__ */ cr(
          "path",
          {
            d: "m573.056 752 308.8-404.608A76.8 76.8 0 0 0 820.736 224H203.232a76.8 76.8 0 0 0-61.056 123.392L450.976 752a76.8 76.8 0 0 0 122.08 0z",
            fill: "currentColor",
            fillOpacity: "0.9"
          }
        )
      }
    ) });
  };
  y$1.defaultProps = a$1;
  const a = {
    className: "",
    style: void 0,
    name: "TriangleUp",
    width: "",
    height: "",
    onClick: () => {
    }
  }, y = (h) => {
    const { className: n, style: p, name: e, color: d, width: m, height: g, onClick: i } = { ...a, ...h }, f = (t) => {
      i && i(t);
    }, o = (t) => t === "" ? "" : isNaN(Number(t)) ? String(t) : t + "px", u = () => {
      const t = "nut-icon";
      return classnamesExports({
        [`${n}`]: n,
        [t]: true,
        [t + "-" + e]: e
      });
    }, s = {}, c = o(m || ""), l2 = o(g || "");
    c && (s.width = c), l2 && (s.height = l2);
    const w = () => ({
      ...p,
      ...s
    });
    return /* @__PURE__ */ cr(lr, { children: /* @__PURE__ */ cr(
      "svg",
      {
        className: u(),
        style: w(),
        onClick: f,
        xmlns: "http://www.w3.org/2000/svg",
        color: d,
        viewBox: "0 0 1024 1024",
        "aria-labelledby": e,
        role: "presentation",
        children: /* @__PURE__ */ cr(
          "path",
          {
            d: "m573.056 272 308.8 404.608A76.8 76.8 0 0 1 820.736 800H203.232a76.8 76.8 0 0 1-61.056-123.392L450.976 272a76.8 76.8 0 0 1 122.08 0z",
            fill: "currentColor",
            fillOpacity: "0.9"
          }
        )
      }
    ) });
  };
  y.defaultProps = a;
  const style_icon = "";
  const ComponentDefaults = {
    className: "",
    style: {}
  };
  const prefixCls$1 = "nut-button";
  const defaultProps$1q = {
    ...ComponentDefaults,
    color: "",
    type: "default",
    size: "normal",
    shape: "round",
    fill: "solid",
    loading: false,
    disabled: false,
    block: false,
    icon: null,
    nativeType: "button",
    onClick: (e) => {
    }
  };
  const Button = React.forwardRef(
    (props, ref) => {
      const {
        color,
        shape,
        fill,
        loading,
        disabled,
        type: type2,
        size,
        block,
        icon,
        children,
        onClick,
        className,
        style,
        nativeType,
        ...rest
      } = {
        ...defaultProps$1q,
        ...props
      };
      const getStyle = React.useCallback(() => {
        const style2 = {};
        if (props.color) {
          if (fill && fill === "outline") {
            style2.color = color;
            style2.background = "#fff";
            if (!(color == null ? void 0 : color.includes("gradient"))) {
              style2.borderColor = color;
            }
          } else {
            style2.color = "#fff";
            style2.background = color;
          }
        }
        return style2;
      }, [color]);
      const handleClick2 = (e) => {
        if (!loading && !disabled && onClick) {
          onClick(e);
        }
      };
      return /* @__PURE__ */ React.createElement(
        "button",
        {
          ...rest,
          ref,
          type: nativeType,
          className: classnamesExports(
            prefixCls$1,
            className,
            props.type ? `${prefixCls$1}--${type2}` : null,
            props.fill ? `${prefixCls$1}--${fill}` : null,
            {
              [`${prefixCls$1}--${size}`]: size,
              [`${prefixCls$1}--${shape}`]: shape,
              [`${prefixCls$1}--block`]: block,
              [`${prefixCls$1}--disabled`]: disabled,
              [`${prefixCls$1}--loading`]: loading
            }
          ),
          style: { ...getStyle(), ...style },
          onClick: (e) => handleClick2(e)
        },
        /* @__PURE__ */ React.createElement("div", { className: "nut-button__warp" }, loading ? /* @__PURE__ */ React.createElement(k$3, { className: "nut-icon-loading" }) : null, !loading && icon ? icon : null, children && /* @__PURE__ */ React.createElement("div", { className: icon || loading ? "nut-button-text" : "" }, children))
      );
    }
  );
  Button.displayName = "NutButton";
  const defaultProps$1p = {
    ...ComponentDefaults,
    title: "",
    description: "",
    divider: true
  };
  const classPrefix$o = "nut-cell-group";
  const CellGroup = (props) => {
    const { children, className, style, title, description, divider, ...rest } = {
      ...defaultProps$1p,
      ...props
    };
    return /* @__PURE__ */ React.createElement("div", { className: classnamesExports(classPrefix$o, className), ...rest }, title ? /* @__PURE__ */ React.createElement("div", { className: `${classPrefix$o}__title` }, title) : null, description ? /* @__PURE__ */ React.createElement("div", { className: `${classPrefix$o}__description` }, description) : null, /* @__PURE__ */ React.createElement(
      "div",
      {
        className: `${classPrefix$o}__wrap ${divider ? `${classPrefix$o}__wrap--divider` : ""}`
      },
      children
    ));
  };
  CellGroup.defaultProps = defaultProps$1p;
  CellGroup.displayName = "NutCellGroup";
  const defaultProps$1o = {
    ...ComponentDefaults,
    title: null,
    description: null,
    extra: null,
    radius: "6px",
    align: "flex-start",
    onClick: (event) => {
    }
  };
  const classPrefix$n = "nut-cell";
  const Cell = (props) => {
    const {
      children,
      onClick,
      title,
      description,
      extra,
      radius,
      align,
      className,
      style,
      ...rest
    } = {
      ...defaultProps$1o,
      ...props
    };
    const handleClick2 = (event) => {
      onClick(event);
    };
    const baseStyle = {
      ...style,
      borderRadius: Number.isNaN(Number(radius)) ? String(radius) : `${radius}px`,
      alignItems: align
    };
    const styles = title || description ? {} : {
      flex: 1
    };
    return /* @__PURE__ */ React.createElement(
      "div",
      {
        className: classnamesExports(classPrefix$n, className),
        onClick: (event) => handleClick2(event),
        style: baseStyle,
        ...rest
      },
      children || /* @__PURE__ */ React.createElement(React.Fragment, null, title || description ? /* @__PURE__ */ React.createElement("div", { className: `${classPrefix$n}__left` }, title ? /* @__PURE__ */ React.createElement("div", { className: `${classPrefix$n}__title` }, title) : null, description ? /* @__PURE__ */ React.createElement("div", { className: `${classPrefix$n}__description` }, description) : null) : null, extra ? /* @__PURE__ */ React.createElement(
        "div",
        {
          className: `${classPrefix$n}__extra`,
          style: styles
        },
        extra
      ) : null, /* @__PURE__ */ React.createElement("div", { className: `${classPrefix$n}__divider` }))
    );
  };
  Cell.defaultProps = defaultProps$1o;
  Cell.displayName = "NutCell";
  Cell.Group = CellGroup;
  var INFINITY = 1 / 0;
  var symbolTag = "[object Symbol]";
  var reAsciiWord = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;
  var reLatin = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g;
  var rsAstralRange = "\\ud800-\\udfff", rsComboMarksRange = "\\u0300-\\u036f\\ufe20-\\ufe23", rsComboSymbolsRange = "\\u20d0-\\u20f0", rsDingbatRange = "\\u2700-\\u27bf", rsLowerRange = "a-z\\xdf-\\xf6\\xf8-\\xff", rsMathOpRange = "\\xac\\xb1\\xd7\\xf7", rsNonCharRange = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf", rsPunctuationRange = "\\u2000-\\u206f", rsSpaceRange = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000", rsUpperRange = "A-Z\\xc0-\\xd6\\xd8-\\xde", rsVarRange = "\\ufe0e\\ufe0f", rsBreakRange = rsMathOpRange + rsNonCharRange + rsPunctuationRange + rsSpaceRange;
  var rsApos = "['’]", rsBreak = "[" + rsBreakRange + "]", rsCombo = "[" + rsComboMarksRange + rsComboSymbolsRange + "]", rsDigits = "\\d+", rsDingbat = "[" + rsDingbatRange + "]", rsLower = "[" + rsLowerRange + "]", rsMisc = "[^" + rsAstralRange + rsBreakRange + rsDigits + rsDingbatRange + rsLowerRange + rsUpperRange + "]", rsFitz = "\\ud83c[\\udffb-\\udfff]", rsModifier = "(?:" + rsCombo + "|" + rsFitz + ")", rsNonAstral = "[^" + rsAstralRange + "]", rsRegional = "(?:\\ud83c[\\udde6-\\uddff]){2}", rsSurrPair = "[\\ud800-\\udbff][\\udc00-\\udfff]", rsUpper = "[" + rsUpperRange + "]", rsZWJ = "\\u200d";
  var rsLowerMisc = "(?:" + rsLower + "|" + rsMisc + ")", rsUpperMisc = "(?:" + rsUpper + "|" + rsMisc + ")", rsOptLowerContr = "(?:" + rsApos + "(?:d|ll|m|re|s|t|ve))?", rsOptUpperContr = "(?:" + rsApos + "(?:D|LL|M|RE|S|T|VE))?", reOptMod = rsModifier + "?", rsOptVar = "[" + rsVarRange + "]?", rsOptJoin = "(?:" + rsZWJ + "(?:" + [rsNonAstral, rsRegional, rsSurrPair].join("|") + ")" + rsOptVar + reOptMod + ")*", rsSeq = rsOptVar + reOptMod + rsOptJoin, rsEmoji = "(?:" + [rsDingbat, rsRegional, rsSurrPair].join("|") + ")" + rsSeq;
  var reApos = RegExp(rsApos, "g");
  var reComboMark = RegExp(rsCombo, "g");
  var reUnicodeWord = RegExp([
    rsUpper + "?" + rsLower + "+" + rsOptLowerContr + "(?=" + [rsBreak, rsUpper, "$"].join("|") + ")",
    rsUpperMisc + "+" + rsOptUpperContr + "(?=" + [rsBreak, rsUpper + rsLowerMisc, "$"].join("|") + ")",
    rsUpper + "?" + rsLowerMisc + "+" + rsOptLowerContr,
    rsUpper + "+" + rsOptUpperContr,
    rsDigits,
    rsEmoji
  ].join("|"), "g");
  var reHasUnicodeWord = /[a-z][A-Z]|[A-Z]{2,}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;
  var deburredLetters = {
    // Latin-1 Supplement block.
    "À": "A",
    "Á": "A",
    "Â": "A",
    "Ã": "A",
    "Ä": "A",
    "Å": "A",
    "à": "a",
    "á": "a",
    "â": "a",
    "ã": "a",
    "ä": "a",
    "å": "a",
    "Ç": "C",
    "ç": "c",
    "Ð": "D",
    "ð": "d",
    "È": "E",
    "É": "E",
    "Ê": "E",
    "Ë": "E",
    "è": "e",
    "é": "e",
    "ê": "e",
    "ë": "e",
    "Ì": "I",
    "Í": "I",
    "Î": "I",
    "Ï": "I",
    "ì": "i",
    "í": "i",
    "î": "i",
    "ï": "i",
    "Ñ": "N",
    "ñ": "n",
    "Ò": "O",
    "Ó": "O",
    "Ô": "O",
    "Õ": "O",
    "Ö": "O",
    "Ø": "O",
    "ò": "o",
    "ó": "o",
    "ô": "o",
    "õ": "o",
    "ö": "o",
    "ø": "o",
    "Ù": "U",
    "Ú": "U",
    "Û": "U",
    "Ü": "U",
    "ù": "u",
    "ú": "u",
    "û": "u",
    "ü": "u",
    "Ý": "Y",
    "ý": "y",
    "ÿ": "y",
    "Æ": "Ae",
    "æ": "ae",
    "Þ": "Th",
    "þ": "th",
    "ß": "ss",
    // Latin Extended-A block.
    "Ā": "A",
    "Ă": "A",
    "Ą": "A",
    "ā": "a",
    "ă": "a",
    "ą": "a",
    "Ć": "C",
    "Ĉ": "C",
    "Ċ": "C",
    "Č": "C",
    "ć": "c",
    "ĉ": "c",
    "ċ": "c",
    "č": "c",
    "Ď": "D",
    "Đ": "D",
    "ď": "d",
    "đ": "d",
    "Ē": "E",
    "Ĕ": "E",
    "Ė": "E",
    "Ę": "E",
    "Ě": "E",
    "ē": "e",
    "ĕ": "e",
    "ė": "e",
    "ę": "e",
    "ě": "e",
    "Ĝ": "G",
    "Ğ": "G",
    "Ġ": "G",
    "Ģ": "G",
    "ĝ": "g",
    "ğ": "g",
    "ġ": "g",
    "ģ": "g",
    "Ĥ": "H",
    "Ħ": "H",
    "ĥ": "h",
    "ħ": "h",
    "Ĩ": "I",
    "Ī": "I",
    "Ĭ": "I",
    "Į": "I",
    "İ": "I",
    "ĩ": "i",
    "ī": "i",
    "ĭ": "i",
    "į": "i",
    "ı": "i",
    "Ĵ": "J",
    "ĵ": "j",
    "Ķ": "K",
    "ķ": "k",
    "ĸ": "k",
    "Ĺ": "L",
    "Ļ": "L",
    "Ľ": "L",
    "Ŀ": "L",
    "Ł": "L",
    "ĺ": "l",
    "ļ": "l",
    "ľ": "l",
    "ŀ": "l",
    "ł": "l",
    "Ń": "N",
    "Ņ": "N",
    "Ň": "N",
    "Ŋ": "N",
    "ń": "n",
    "ņ": "n",
    "ň": "n",
    "ŋ": "n",
    "Ō": "O",
    "Ŏ": "O",
    "Ő": "O",
    "ō": "o",
    "ŏ": "o",
    "ő": "o",
    "Ŕ": "R",
    "Ŗ": "R",
    "Ř": "R",
    "ŕ": "r",
    "ŗ": "r",
    "ř": "r",
    "Ś": "S",
    "Ŝ": "S",
    "Ş": "S",
    "Š": "S",
    "ś": "s",
    "ŝ": "s",
    "ş": "s",
    "š": "s",
    "Ţ": "T",
    "Ť": "T",
    "Ŧ": "T",
    "ţ": "t",
    "ť": "t",
    "ŧ": "t",
    "Ũ": "U",
    "Ū": "U",
    "Ŭ": "U",
    "Ů": "U",
    "Ű": "U",
    "Ų": "U",
    "ũ": "u",
    "ū": "u",
    "ŭ": "u",
    "ů": "u",
    "ű": "u",
    "ų": "u",
    "Ŵ": "W",
    "ŵ": "w",
    "Ŷ": "Y",
    "ŷ": "y",
    "Ÿ": "Y",
    "Ź": "Z",
    "Ż": "Z",
    "Ž": "Z",
    "ź": "z",
    "ż": "z",
    "ž": "z",
    "Ĳ": "IJ",
    "ĳ": "ij",
    "Œ": "Oe",
    "œ": "oe",
    "ŉ": "'n",
    "ſ": "ss"
  };
  var freeGlobal = typeof commonjsGlobal == "object" && commonjsGlobal && commonjsGlobal.Object === Object && commonjsGlobal;
  var freeSelf = typeof self == "object" && self && self.Object === Object && self;
  var root = freeGlobal || freeSelf || Function("return this")();
  function arrayReduce(array2, iteratee, accumulator, initAccum) {
    var index = -1, length = array2 ? array2.length : 0;
    if (initAccum && length) {
      accumulator = array2[++index];
    }
    while (++index < length) {
      accumulator = iteratee(accumulator, array2[index], index, array2);
    }
    return accumulator;
  }
  function asciiWords(string2) {
    return string2.match(reAsciiWord) || [];
  }
  function basePropertyOf(object2) {
    return function(key) {
      return object2 == null ? void 0 : object2[key];
    };
  }
  var deburrLetter = basePropertyOf(deburredLetters);
  function hasUnicodeWord(string2) {
    return reHasUnicodeWord.test(string2);
  }
  function unicodeWords(string2) {
    return string2.match(reUnicodeWord) || [];
  }
  var objectProto = Object.prototype;
  var objectToString = objectProto.toString;
  var Symbol$1 = root.Symbol;
  var symbolProto = Symbol$1 ? Symbol$1.prototype : void 0, symbolToString = symbolProto ? symbolProto.toString : void 0;
  function baseToString(value) {
    if (typeof value == "string") {
      return value;
    }
    if (isSymbol(value)) {
      return symbolToString ? symbolToString.call(value) : "";
    }
    var result = value + "";
    return result == "0" && 1 / value == -INFINITY ? "-0" : result;
  }
  function createCompounder(callback) {
    return function(string2) {
      return arrayReduce(words(deburr(string2).replace(reApos, "")), callback, "");
    };
  }
  function isObjectLike(value) {
    return !!value && typeof value == "object";
  }
  function isSymbol(value) {
    return typeof value == "symbol" || isObjectLike(value) && objectToString.call(value) == symbolTag;
  }
  function toString(value) {
    return value == null ? "" : baseToString(value);
  }
  function deburr(string2) {
    string2 = toString(string2);
    return string2 && string2.replace(reLatin, deburrLetter).replace(reComboMark, "");
  }
  var kebabCase = createCompounder(function(result, word, index) {
    return result + (index ? "-" : "") + word.toLowerCase();
  });
  function words(string2, pattern2, guard) {
    string2 = toString(string2);
    pattern2 = guard ? void 0 : pattern2;
    if (pattern2 === void 0) {
      return hasUnicodeWord(string2) ? unicodeWords(string2) : asciiWords(string2);
    }
    return string2.match(pattern2) || [];
  }
  var lodash_kebabcase = kebabCase;
  var lodash_isequalExports = {};
  var lodash_isequal = {
    get exports() {
      return lodash_isequalExports;
    },
    set exports(v) {
      lodash_isequalExports = v;
    }
  };
  (function(module2, exports3) {
    var LARGE_ARRAY_SIZE = 200;
    var HASH_UNDEFINED = "__lodash_hash_undefined__";
    var COMPARE_PARTIAL_FLAG = 1, COMPARE_UNORDERED_FLAG = 2;
    var MAX_SAFE_INTEGER = 9007199254740991;
    var argsTag = "[object Arguments]", arrayTag = "[object Array]", asyncTag = "[object AsyncFunction]", boolTag = "[object Boolean]", dateTag = "[object Date]", errorTag = "[object Error]", funcTag = "[object Function]", genTag = "[object GeneratorFunction]", mapTag = "[object Map]", numberTag = "[object Number]", nullTag = "[object Null]", objectTag = "[object Object]", promiseTag = "[object Promise]", proxyTag = "[object Proxy]", regexpTag = "[object RegExp]", setTag = "[object Set]", stringTag = "[object String]", symbolTag2 = "[object Symbol]", undefinedTag = "[object Undefined]", weakMapTag = "[object WeakMap]";
    var arrayBufferTag = "[object ArrayBuffer]", dataViewTag = "[object DataView]", float32Tag = "[object Float32Array]", float64Tag = "[object Float64Array]", int8Tag = "[object Int8Array]", int16Tag = "[object Int16Array]", int32Tag = "[object Int32Array]", uint8Tag = "[object Uint8Array]", uint8ClampedTag = "[object Uint8ClampedArray]", uint16Tag = "[object Uint16Array]", uint32Tag = "[object Uint32Array]";
    var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
    var reIsHostCtor = /^\[object .+?Constructor\]$/;
    var reIsUint = /^(?:0|[1-9]\d*)$/;
    var typedArrayTags = {};
    typedArrayTags[float32Tag] = typedArrayTags[float64Tag] = typedArrayTags[int8Tag] = typedArrayTags[int16Tag] = typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] = typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] = typedArrayTags[uint32Tag] = true;
    typedArrayTags[argsTag] = typedArrayTags[arrayTag] = typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] = typedArrayTags[dataViewTag] = typedArrayTags[dateTag] = typedArrayTags[errorTag] = typedArrayTags[funcTag] = typedArrayTags[mapTag] = typedArrayTags[numberTag] = typedArrayTags[objectTag] = typedArrayTags[regexpTag] = typedArrayTags[setTag] = typedArrayTags[stringTag] = typedArrayTags[weakMapTag] = false;
    var freeGlobal2 = typeof commonjsGlobal == "object" && commonjsGlobal && commonjsGlobal.Object === Object && commonjsGlobal;
    var freeSelf2 = typeof self == "object" && self && self.Object === Object && self;
    var root2 = freeGlobal2 || freeSelf2 || Function("return this")();
    var freeExports = exports3 && !exports3.nodeType && exports3;
    var freeModule = freeExports && true && module2 && !module2.nodeType && module2;
    var moduleExports = freeModule && freeModule.exports === freeExports;
    var freeProcess = moduleExports && freeGlobal2.process;
    var nodeUtil = function() {
      try {
        return freeProcess && freeProcess.binding && freeProcess.binding("util");
      } catch (e) {
      }
    }();
    var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;
    function arrayFilter(array2, predicate) {
      var index = -1, length = array2 == null ? 0 : array2.length, resIndex = 0, result = [];
      while (++index < length) {
        var value = array2[index];
        if (predicate(value, index, array2)) {
          result[resIndex++] = value;
        }
      }
      return result;
    }
    function arrayPush(array2, values) {
      var index = -1, length = values.length, offset = array2.length;
      while (++index < length) {
        array2[offset + index] = values[index];
      }
      return array2;
    }
    function arraySome(array2, predicate) {
      var index = -1, length = array2 == null ? 0 : array2.length;
      while (++index < length) {
        if (predicate(array2[index], index, array2)) {
          return true;
        }
      }
      return false;
    }
    function baseTimes(n, iteratee) {
      var index = -1, result = Array(n);
      while (++index < n) {
        result[index] = iteratee(index);
      }
      return result;
    }
    function baseUnary(func) {
      return function(value) {
        return func(value);
      };
    }
    function cacheHas(cache, key) {
      return cache.has(key);
    }
    function getValue2(object2, key) {
      return object2 == null ? void 0 : object2[key];
    }
    function mapToArray(map) {
      var index = -1, result = Array(map.size);
      map.forEach(function(value, key) {
        result[++index] = [key, value];
      });
      return result;
    }
    function overArg(func, transform) {
      return function(arg) {
        return func(transform(arg));
      };
    }
    function setToArray(set) {
      var index = -1, result = Array(set.size);
      set.forEach(function(value) {
        result[++index] = value;
      });
      return result;
    }
    var arrayProto = Array.prototype, funcProto = Function.prototype, objectProto2 = Object.prototype;
    var coreJsData = root2["__core-js_shared__"];
    var funcToString = funcProto.toString;
    var hasOwnProperty = objectProto2.hasOwnProperty;
    var maskSrcKey = function() {
      var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || "");
      return uid ? "Symbol(src)_1." + uid : "";
    }();
    var nativeObjectToString = objectProto2.toString;
    var reIsNative = RegExp(
      "^" + funcToString.call(hasOwnProperty).replace(reRegExpChar, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
    );
    var Buffer2 = moduleExports ? root2.Buffer : void 0, Symbol2 = root2.Symbol, Uint8Array2 = root2.Uint8Array, propertyIsEnumerable = objectProto2.propertyIsEnumerable, splice = arrayProto.splice, symToStringTag = Symbol2 ? Symbol2.toStringTag : void 0;
    var nativeGetSymbols = Object.getOwnPropertySymbols, nativeIsBuffer = Buffer2 ? Buffer2.isBuffer : void 0, nativeKeys = overArg(Object.keys, Object);
    var DataView = getNative(root2, "DataView"), Map2 = getNative(root2, "Map"), Promise2 = getNative(root2, "Promise"), Set2 = getNative(root2, "Set"), WeakMap2 = getNative(root2, "WeakMap"), nativeCreate = getNative(Object, "create");
    var dataViewCtorString = toSource(DataView), mapCtorString = toSource(Map2), promiseCtorString = toSource(Promise2), setCtorString = toSource(Set2), weakMapCtorString = toSource(WeakMap2);
    var symbolProto2 = Symbol2 ? Symbol2.prototype : void 0, symbolValueOf = symbolProto2 ? symbolProto2.valueOf : void 0;
    function Hash(entries) {
      var index = -1, length = entries == null ? 0 : entries.length;
      this.clear();
      while (++index < length) {
        var entry = entries[index];
        this.set(entry[0], entry[1]);
      }
    }
    function hashClear() {
      this.__data__ = nativeCreate ? nativeCreate(null) : {};
      this.size = 0;
    }
    function hashDelete(key) {
      var result = this.has(key) && delete this.__data__[key];
      this.size -= result ? 1 : 0;
      return result;
    }
    function hashGet(key) {
      var data = this.__data__;
      if (nativeCreate) {
        var result = data[key];
        return result === HASH_UNDEFINED ? void 0 : result;
      }
      return hasOwnProperty.call(data, key) ? data[key] : void 0;
    }
    function hashHas(key) {
      var data = this.__data__;
      return nativeCreate ? data[key] !== void 0 : hasOwnProperty.call(data, key);
    }
    function hashSet(key, value) {
      var data = this.__data__;
      this.size += this.has(key) ? 0 : 1;
      data[key] = nativeCreate && value === void 0 ? HASH_UNDEFINED : value;
      return this;
    }
    Hash.prototype.clear = hashClear;
    Hash.prototype["delete"] = hashDelete;
    Hash.prototype.get = hashGet;
    Hash.prototype.has = hashHas;
    Hash.prototype.set = hashSet;
    function ListCache(entries) {
      var index = -1, length = entries == null ? 0 : entries.length;
      this.clear();
      while (++index < length) {
        var entry = entries[index];
        this.set(entry[0], entry[1]);
      }
    }
    function listCacheClear() {
      this.__data__ = [];
      this.size = 0;
    }
    function listCacheDelete(key) {
      var data = this.__data__, index = assocIndexOf(data, key);
      if (index < 0) {
        return false;
      }
      var lastIndex = data.length - 1;
      if (index == lastIndex) {
        data.pop();
      } else {
        splice.call(data, index, 1);
      }
      --this.size;
      return true;
    }
    function listCacheGet(key) {
      var data = this.__data__, index = assocIndexOf(data, key);
      return index < 0 ? void 0 : data[index][1];
    }
    function listCacheHas(key) {
      return assocIndexOf(this.__data__, key) > -1;
    }
    function listCacheSet(key, value) {
      var data = this.__data__, index = assocIndexOf(data, key);
      if (index < 0) {
        ++this.size;
        data.push([key, value]);
      } else {
        data[index][1] = value;
      }
      return this;
    }
    ListCache.prototype.clear = listCacheClear;
    ListCache.prototype["delete"] = listCacheDelete;
    ListCache.prototype.get = listCacheGet;
    ListCache.prototype.has = listCacheHas;
    ListCache.prototype.set = listCacheSet;
    function MapCache(entries) {
      var index = -1, length = entries == null ? 0 : entries.length;
      this.clear();
      while (++index < length) {
        var entry = entries[index];
        this.set(entry[0], entry[1]);
      }
    }
    function mapCacheClear() {
      this.size = 0;
      this.__data__ = {
        "hash": new Hash(),
        "map": new (Map2 || ListCache)(),
        "string": new Hash()
      };
    }
    function mapCacheDelete(key) {
      var result = getMapData(this, key)["delete"](key);
      this.size -= result ? 1 : 0;
      return result;
    }
    function mapCacheGet(key) {
      return getMapData(this, key).get(key);
    }
    function mapCacheHas(key) {
      return getMapData(this, key).has(key);
    }
    function mapCacheSet(key, value) {
      var data = getMapData(this, key), size = data.size;
      data.set(key, value);
      this.size += data.size == size ? 0 : 1;
      return this;
    }
    MapCache.prototype.clear = mapCacheClear;
    MapCache.prototype["delete"] = mapCacheDelete;
    MapCache.prototype.get = mapCacheGet;
    MapCache.prototype.has = mapCacheHas;
    MapCache.prototype.set = mapCacheSet;
    function SetCache(values) {
      var index = -1, length = values == null ? 0 : values.length;
      this.__data__ = new MapCache();
      while (++index < length) {
        this.add(values[index]);
      }
    }
    function setCacheAdd(value) {
      this.__data__.set(value, HASH_UNDEFINED);
      return this;
    }
    function setCacheHas(value) {
      return this.__data__.has(value);
    }
    SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
    SetCache.prototype.has = setCacheHas;
    function Stack(entries) {
      var data = this.__data__ = new ListCache(entries);
      this.size = data.size;
    }
    function stackClear() {
      this.__data__ = new ListCache();
      this.size = 0;
    }
    function stackDelete(key) {
      var data = this.__data__, result = data["delete"](key);
      this.size = data.size;
      return result;
    }
    function stackGet(key) {
      return this.__data__.get(key);
    }
    function stackHas(key) {
      return this.__data__.has(key);
    }
    function stackSet(key, value) {
      var data = this.__data__;
      if (data instanceof ListCache) {
        var pairs = data.__data__;
        if (!Map2 || pairs.length < LARGE_ARRAY_SIZE - 1) {
          pairs.push([key, value]);
          this.size = ++data.size;
          return this;
        }
        data = this.__data__ = new MapCache(pairs);
      }
      data.set(key, value);
      this.size = data.size;
      return this;
    }
    Stack.prototype.clear = stackClear;
    Stack.prototype["delete"] = stackDelete;
    Stack.prototype.get = stackGet;
    Stack.prototype.has = stackHas;
    Stack.prototype.set = stackSet;
    function arrayLikeKeys(value, inherited) {
      var isArr = isArray(value), isArg = !isArr && isArguments(value), isBuff = !isArr && !isArg && isBuffer(value), isType = !isArr && !isArg && !isBuff && isTypedArray(value), skipIndexes = isArr || isArg || isBuff || isType, result = skipIndexes ? baseTimes(value.length, String) : [], length = result.length;
      for (var key in value) {
        if ((inherited || hasOwnProperty.call(value, key)) && !(skipIndexes && // Safari 9 has enumerable `arguments.length` in strict mode.
        (key == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
        isBuff && (key == "offset" || key == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
        isType && (key == "buffer" || key == "byteLength" || key == "byteOffset") || // Skip index properties.
        isIndex(key, length)))) {
          result.push(key);
        }
      }
      return result;
    }
    function assocIndexOf(array2, key) {
      var length = array2.length;
      while (length--) {
        if (eq(array2[length][0], key)) {
          return length;
        }
      }
      return -1;
    }
    function baseGetAllKeys(object2, keysFunc, symbolsFunc) {
      var result = keysFunc(object2);
      return isArray(object2) ? result : arrayPush(result, symbolsFunc(object2));
    }
    function baseGetTag(value) {
      if (value == null) {
        return value === void 0 ? undefinedTag : nullTag;
      }
      return symToStringTag && symToStringTag in Object(value) ? getRawTag(value) : objectToString2(value);
    }
    function baseIsArguments(value) {
      return isObjectLike2(value) && baseGetTag(value) == argsTag;
    }
    function baseIsEqual(value, other, bitmask, customizer, stack) {
      if (value === other) {
        return true;
      }
      if (value == null || other == null || !isObjectLike2(value) && !isObjectLike2(other)) {
        return value !== value && other !== other;
      }
      return baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual, stack);
    }
    function baseIsEqualDeep(object2, other, bitmask, customizer, equalFunc, stack) {
      var objIsArr = isArray(object2), othIsArr = isArray(other), objTag = objIsArr ? arrayTag : getTag(object2), othTag = othIsArr ? arrayTag : getTag(other);
      objTag = objTag == argsTag ? objectTag : objTag;
      othTag = othTag == argsTag ? objectTag : othTag;
      var objIsObj = objTag == objectTag, othIsObj = othTag == objectTag, isSameTag = objTag == othTag;
      if (isSameTag && isBuffer(object2)) {
        if (!isBuffer(other)) {
          return false;
        }
        objIsArr = true;
        objIsObj = false;
      }
      if (isSameTag && !objIsObj) {
        stack || (stack = new Stack());
        return objIsArr || isTypedArray(object2) ? equalArrays(object2, other, bitmask, customizer, equalFunc, stack) : equalByTag(object2, other, objTag, bitmask, customizer, equalFunc, stack);
      }
      if (!(bitmask & COMPARE_PARTIAL_FLAG)) {
        var objIsWrapped = objIsObj && hasOwnProperty.call(object2, "__wrapped__"), othIsWrapped = othIsObj && hasOwnProperty.call(other, "__wrapped__");
        if (objIsWrapped || othIsWrapped) {
          var objUnwrapped = objIsWrapped ? object2.value() : object2, othUnwrapped = othIsWrapped ? other.value() : other;
          stack || (stack = new Stack());
          return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
        }
      }
      if (!isSameTag) {
        return false;
      }
      stack || (stack = new Stack());
      return equalObjects(object2, other, bitmask, customizer, equalFunc, stack);
    }
    function baseIsNative(value) {
      if (!isObject2(value) || isMasked(value)) {
        return false;
      }
      var pattern2 = isFunction2(value) ? reIsNative : reIsHostCtor;
      return pattern2.test(toSource(value));
    }
    function baseIsTypedArray(value) {
      return isObjectLike2(value) && isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
    }
    function baseKeys(object2) {
      if (!isPrototype(object2)) {
        return nativeKeys(object2);
      }
      var result = [];
      for (var key in Object(object2)) {
        if (hasOwnProperty.call(object2, key) && key != "constructor") {
          result.push(key);
        }
      }
      return result;
    }
    function equalArrays(array2, other, bitmask, customizer, equalFunc, stack) {
      var isPartial = bitmask & COMPARE_PARTIAL_FLAG, arrLength = array2.length, othLength = other.length;
      if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
        return false;
      }
      var stacked = stack.get(array2);
      if (stacked && stack.get(other)) {
        return stacked == other;
      }
      var index = -1, result = true, seen = bitmask & COMPARE_UNORDERED_FLAG ? new SetCache() : void 0;
      stack.set(array2, other);
      stack.set(other, array2);
      while (++index < arrLength) {
        var arrValue = array2[index], othValue = other[index];
        if (customizer) {
          var compared = isPartial ? customizer(othValue, arrValue, index, other, array2, stack) : customizer(arrValue, othValue, index, array2, other, stack);
        }
        if (compared !== void 0) {
          if (compared) {
            continue;
          }
          result = false;
          break;
        }
        if (seen) {
          if (!arraySome(other, function(othValue2, othIndex) {
            if (!cacheHas(seen, othIndex) && (arrValue === othValue2 || equalFunc(arrValue, othValue2, bitmask, customizer, stack))) {
              return seen.push(othIndex);
            }
          })) {
            result = false;
            break;
          }
        } else if (!(arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
          result = false;
          break;
        }
      }
      stack["delete"](array2);
      stack["delete"](other);
      return result;
    }
    function equalByTag(object2, other, tag, bitmask, customizer, equalFunc, stack) {
      switch (tag) {
        case dataViewTag:
          if (object2.byteLength != other.byteLength || object2.byteOffset != other.byteOffset) {
            return false;
          }
          object2 = object2.buffer;
          other = other.buffer;
        case arrayBufferTag:
          if (object2.byteLength != other.byteLength || !equalFunc(new Uint8Array2(object2), new Uint8Array2(other))) {
            return false;
          }
          return true;
        case boolTag:
        case dateTag:
        case numberTag:
          return eq(+object2, +other);
        case errorTag:
          return object2.name == other.name && object2.message == other.message;
        case regexpTag:
        case stringTag:
          return object2 == other + "";
        case mapTag:
          var convert = mapToArray;
        case setTag:
          var isPartial = bitmask & COMPARE_PARTIAL_FLAG;
          convert || (convert = setToArray);
          if (object2.size != other.size && !isPartial) {
            return false;
          }
          var stacked = stack.get(object2);
          if (stacked) {
            return stacked == other;
          }
          bitmask |= COMPARE_UNORDERED_FLAG;
          stack.set(object2, other);
          var result = equalArrays(convert(object2), convert(other), bitmask, customizer, equalFunc, stack);
          stack["delete"](object2);
          return result;
        case symbolTag2:
          if (symbolValueOf) {
            return symbolValueOf.call(object2) == symbolValueOf.call(other);
          }
      }
      return false;
    }
    function equalObjects(object2, other, bitmask, customizer, equalFunc, stack) {
      var isPartial = bitmask & COMPARE_PARTIAL_FLAG, objProps = getAllKeys(object2), objLength = objProps.length, othProps = getAllKeys(other), othLength = othProps.length;
      if (objLength != othLength && !isPartial) {
        return false;
      }
      var index = objLength;
      while (index--) {
        var key = objProps[index];
        if (!(isPartial ? key in other : hasOwnProperty.call(other, key))) {
          return false;
        }
      }
      var stacked = stack.get(object2);
      if (stacked && stack.get(other)) {
        return stacked == other;
      }
      var result = true;
      stack.set(object2, other);
      stack.set(other, object2);
      var skipCtor = isPartial;
      while (++index < objLength) {
        key = objProps[index];
        var objValue = object2[key], othValue = other[key];
        if (customizer) {
          var compared = isPartial ? customizer(othValue, objValue, key, other, object2, stack) : customizer(objValue, othValue, key, object2, other, stack);
        }
        if (!(compared === void 0 ? objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack) : compared)) {
          result = false;
          break;
        }
        skipCtor || (skipCtor = key == "constructor");
      }
      if (result && !skipCtor) {
        var objCtor = object2.constructor, othCtor = other.constructor;
        if (objCtor != othCtor && ("constructor" in object2 && "constructor" in other) && !(typeof objCtor == "function" && objCtor instanceof objCtor && typeof othCtor == "function" && othCtor instanceof othCtor)) {
          result = false;
        }
      }
      stack["delete"](object2);
      stack["delete"](other);
      return result;
    }
    function getAllKeys(object2) {
      return baseGetAllKeys(object2, keys, getSymbols);
    }
    function getMapData(map, key) {
      var data = map.__data__;
      return isKeyable(key) ? data[typeof key == "string" ? "string" : "hash"] : data.map;
    }
    function getNative(object2, key) {
      var value = getValue2(object2, key);
      return baseIsNative(value) ? value : void 0;
    }
    function getRawTag(value) {
      var isOwn = hasOwnProperty.call(value, symToStringTag), tag = value[symToStringTag];
      try {
        value[symToStringTag] = void 0;
        var unmasked = true;
      } catch (e) {
      }
      var result = nativeObjectToString.call(value);
      if (unmasked) {
        if (isOwn) {
          value[symToStringTag] = tag;
        } else {
          delete value[symToStringTag];
        }
      }
      return result;
    }
    var getSymbols = !nativeGetSymbols ? stubArray : function(object2) {
      if (object2 == null) {
        return [];
      }
      object2 = Object(object2);
      return arrayFilter(nativeGetSymbols(object2), function(symbol) {
        return propertyIsEnumerable.call(object2, symbol);
      });
    };
    var getTag = baseGetTag;
    if (DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag || Map2 && getTag(new Map2()) != mapTag || Promise2 && getTag(Promise2.resolve()) != promiseTag || Set2 && getTag(new Set2()) != setTag || WeakMap2 && getTag(new WeakMap2()) != weakMapTag) {
      getTag = function(value) {
        var result = baseGetTag(value), Ctor = result == objectTag ? value.constructor : void 0, ctorString = Ctor ? toSource(Ctor) : "";
        if (ctorString) {
          switch (ctorString) {
            case dataViewCtorString:
              return dataViewTag;
            case mapCtorString:
              return mapTag;
            case promiseCtorString:
              return promiseTag;
            case setCtorString:
              return setTag;
            case weakMapCtorString:
              return weakMapTag;
          }
        }
        return result;
      };
    }
    function isIndex(value, length) {
      length = length == null ? MAX_SAFE_INTEGER : length;
      return !!length && (typeof value == "number" || reIsUint.test(value)) && (value > -1 && value % 1 == 0 && value < length);
    }
    function isKeyable(value) {
      var type2 = typeof value;
      return type2 == "string" || type2 == "number" || type2 == "symbol" || type2 == "boolean" ? value !== "__proto__" : value === null;
    }
    function isMasked(func) {
      return !!maskSrcKey && maskSrcKey in func;
    }
    function isPrototype(value) {
      var Ctor = value && value.constructor, proto = typeof Ctor == "function" && Ctor.prototype || objectProto2;
      return value === proto;
    }
    function objectToString2(value) {
      return nativeObjectToString.call(value);
    }
    function toSource(func) {
      if (func != null) {
        try {
          return funcToString.call(func);
        } catch (e) {
        }
        try {
          return func + "";
        } catch (e) {
        }
      }
      return "";
    }
    function eq(value, other) {
      return value === other || value !== value && other !== other;
    }
    var isArguments = baseIsArguments(function() {
      return arguments;
    }()) ? baseIsArguments : function(value) {
      return isObjectLike2(value) && hasOwnProperty.call(value, "callee") && !propertyIsEnumerable.call(value, "callee");
    };
    var isArray = Array.isArray;
    function isArrayLike(value) {
      return value != null && isLength(value.length) && !isFunction2(value);
    }
    var isBuffer = nativeIsBuffer || stubFalse;
    function isEqual2(value, other) {
      return baseIsEqual(value, other);
    }
    function isFunction2(value) {
      if (!isObject2(value)) {
        return false;
      }
      var tag = baseGetTag(value);
      return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
    }
    function isLength(value) {
      return typeof value == "number" && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
    }
    function isObject2(value) {
      var type2 = typeof value;
      return value != null && (type2 == "object" || type2 == "function");
    }
    function isObjectLike2(value) {
      return value != null && typeof value == "object";
    }
    var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;
    function keys(object2) {
      return isArrayLike(object2) ? arrayLikeKeys(object2) : baseKeys(object2);
    }
    function stubArray() {
      return [];
    }
    function stubFalse() {
      return false;
    }
    module2.exports = isEqual2;
  })(lodash_isequal, lodash_isequalExports);
  const isequal = lodash_isequalExports;
  function useMemo(getValue2, condition, shouldUpdate) {
    const cacheRef = React__namespace.useRef({});
    if (!("value" in cacheRef.current) || shouldUpdate(cacheRef.current.condition, condition)) {
      cacheRef.current.value = getValue2();
      cacheRef.current.condition = condition;
    }
    return cacheRef.current.value;
  }
  const zhCN = {
    save: "保存",
    confirm: "确认",
    cancel: "取消",
    done: "完成",
    noData: "暂无数据",
    placeholder: "请输入内容",
    select: "请选择",
    video: {
      errorTip: "视频加载失败",
      clickRetry: "点击重试"
    },
    fixednav: {
      activeText: "收起导航",
      inactiveText: "快速导航"
    },
    infiniteloading: {
      pullRefreshText: "松开刷新",
      loadText: "加载中……",
      loadMoreText: "哎呀，这里是底部了啦"
    },
    pagination: {
      prev: "上一页",
      next: "下一页"
    },
    range: {
      rangeText: "不在该区间内"
    },
    calendaritem: {
      weekdays: ["日", "一", "二", "三", "四", "五", "六"],
      end: "结束",
      start: "开始",
      confirm: "确认",
      title: "日历选择",
      monthTitle: (year, month) => `${year}年${Number(month) < 10 ? `0${Number(month)}` : month}月`,
      today: "今天",
      loadPreviousMonth: "加载上一个月",
      noEarlierMonth: "没有更早月份"
    },
    shortpassword: {
      title: "请输入密码",
      description: "您使用了虚拟资产，请进行验证",
      tips: "忘记密码"
    },
    uploader: {
      ready: "准备完成",
      readyUpload: "准备上传",
      waitingUpload: "等待上传",
      uploading: "上传中...",
      success: "上传成功",
      error: "上传失败",
      deleteWord: "用户阻止了删除！"
    },
    countdown: {
      day: "天",
      hour: "时",
      minute: "分",
      second: "秒"
    },
    address: {
      selectRegion: "请选择地址",
      deliveryTo: "配送至",
      chooseAnotherAddress: "选择其他地址"
    },
    signature: {
      reSign: "重签",
      unsupported: "对不起，当前浏览器不支持Canvas，无法使用本控件！"
    },
    ecard: {
      chooseText: "请选择电子卡面值",
      otherValueText: "其他面值",
      placeholder: "请输入1-5000整数"
    },
    timeselect: {
      pickupTime: "取件时间"
    },
    sku: {
      buyNow: "立即购买",
      buyNumber: "购买数量",
      addToCard: "加入购物车"
    },
    skuheader: {
      skuId: "商品编号"
    },
    addresslist: {
      addAddress: "新建地址"
    },
    comment: {
      complaintsText: "我要投诉",
      additionalReview: (day) => `购买${day}天后追评`,
      additionalImages: (length) => `${length}张追评图片`
    },
    searchbar: {
      basePlaceholder: "上京东，购好物",
      text: "文本",
      test: "测试",
      title1: "基础用法",
      title2: "搜索框形状及最大长度",
      title3: "搜索框内外背景设置",
      title4: "搜索框文本设置",
      title5: "自定义图标设置",
      title6: "数据改变监听"
    },
    audio: {
      back: "快退",
      forward: "快进",
      pause: "暂停",
      start: "开始",
      mute: "静音",
      tips: "onPlayEnd事件在loop=false时才会触发"
    },
    datepicker: {
      year: "年",
      month: "月",
      day: "日",
      hour: "时",
      min: "分",
      seconds: "秒"
    },
    pullToRefresh: {
      pullingText: "下拉刷新",
      canReleaseText: "松开刷新",
      refreshingText: "加载中...",
      completeText: "刷新成功"
    },
    watermark: {
      errorCanvasTips: "当前环境不支持Canvas"
    }
  };
  const classPrefix$m = "nut-configprovider";
  const defaultConfigRef = {
    current: {
      locale: zhCN
    }
  };
  const getDefaultConfig = () => {
    return defaultConfigRef.current;
  };
  const ConfigContext = React.createContext(null);
  const useConfig = () => {
    return React.useContext(ConfigContext) ?? getDefaultConfig();
  };
  function convertThemeVarsToCSSVars(themeVars) {
    const cssVars = {};
    Object.keys(themeVars).forEach((key) => {
      cssVars[`--${lodash_kebabcase(key)}`] = themeVars[key];
    });
    return cssVars;
  }
  const ConfigProvider = (props) => {
    const { style, className, children, ...config2 } = props;
    const mergedConfig = useMemo(
      () => {
        return {
          ...getDefaultConfig(),
          ...config2
        };
      },
      [config2],
      (prev, next) => prev.some((prevTheme, index) => {
        const nextTheme = next[index];
        return !isequal(prevTheme, nextTheme);
      })
    );
    const cssVarStyle = React.useMemo(() => {
      return convertThemeVarsToCSSVars(mergedConfig.theme || {});
    }, [mergedConfig.theme]);
    return /* @__PURE__ */ React.createElement(ConfigContext.Provider, { value: mergedConfig }, /* @__PURE__ */ React.createElement(
      "div",
      {
        className: classnamesExports(classPrefix$m, className),
        style: {
          ...cssVarStyle,
          ...style
        }
      },
      children
    ));
  };
  ConfigProvider.displayName = "NutConfigProvider";
  const pxCheck = (value) => {
    return Number.isNaN(Number(value)) ? String(value) : `${value}px`;
  };
  const defaultProps$1n = {
    ...ComponentDefaults,
    fit: "fill",
    position: "center",
    alt: "",
    width: "center",
    height: "",
    error: true,
    loading: true,
    lazy: false
  };
  const classPrefix$l = "nut-image";
  const Image$1 = (props) => {
    const {
      className,
      style,
      src,
      fit,
      position,
      alt,
      width,
      height,
      radius,
      error,
      loading,
      lazy,
      onClick,
      onLoad,
      onError
    } = { ...defaultProps$1n, ...props };
    const [innerLoading, setInnerLoading] = React.useState(true);
    const [isError, setIsError] = React.useState(false);
    const imgRef = React.useRef(null);
    React.useEffect(() => {
      if (imgRef.current && imgRef.current.complete && imgRef.current.naturalHeight !== 0) {
        setInnerLoading(false);
      } else if (src) {
        setInnerLoading(true);
      }
    }, [src]);
    const handleLoad = () => {
      setIsError(false);
      setInnerLoading(false);
      onLoad && onLoad();
    };
    const handleError = () => {
      setIsError(true);
      setInnerLoading(false);
      onError && onError();
    };
    const containerStyle = {
      height: height ? pxCheck(height) : "",
      width: width ? pxCheck(width) : "",
      overflow: radius !== void 0 && radius !== null ? "hidden" : "",
      borderRadius: radius !== void 0 && radius !== null ? pxCheck(radius) : ""
    };
    const imgStyle = {
      objectFit: fit,
      objectPosition: position,
      ...style
    };
    const observer = React.useRef(null);
    const initObserver = () => {
      const options2 = {
        threshold: [0],
        // 交会处
        rootMargin: "0px"
        // 对视口进行收缩和扩张
      };
      observer.current = new IntersectionObserver((entires, self2) => {
        entires.forEach((item) => {
          if (item.isIntersecting) {
            setTimeout(() => {
              const img = item.target;
              if (img.dataset.src) {
                img.src = img.dataset.src;
                img.removeAttribute("data-src");
              }
              resetObserver();
            }, 300);
          }
        });
      }, options2);
      observer.current.observe(imgRef.current);
    };
    const resetObserver = () => {
      observer.current.disconnect && observer.current.disconnect();
    };
    React.useEffect(() => {
      lazy && initObserver();
      return () => {
        lazy && resetObserver();
      };
    }, [lazy]);
    const imageClick = (event) => {
      onClick && onClick(event);
    };
    const renderErrorImg = React.useCallback(() => {
      if (!isError)
        return null;
      if (typeof error === "boolean" && error === true && !innerLoading) {
        return /* @__PURE__ */ React.createElement("div", { className: "nut-img-error" }, /* @__PURE__ */ React.createElement(k$5, null));
      }
      if (React.isValidElement(error) && !innerLoading) {
        return /* @__PURE__ */ React.createElement("div", { className: "nut-img-error" }, error);
      }
      return null;
    }, [error, isError]);
    const renderLoading = React.useCallback(() => {
      if (!loading)
        return null;
      if (typeof loading === "boolean" && loading === true && innerLoading) {
        return /* @__PURE__ */ React.createElement("div", { className: "nut-img-loading" }, /* @__PURE__ */ React.createElement(k$4, null));
      }
      if (React.isValidElement(loading) && innerLoading) {
        return /* @__PURE__ */ React.createElement("div", { className: "nut-img-loading" }, loading);
      }
      return null;
    }, [loading, innerLoading]);
    return /* @__PURE__ */ React.createElement(
      "div",
      {
        className: classnamesExports(classPrefix$l, className),
        style: containerStyle,
        onClick: (e) => {
          imageClick(e);
        }
      },
      lazy ? /* @__PURE__ */ React.createElement(
        "img",
        {
          ref: imgRef,
          className: "nut-img lazyload",
          style: imgStyle,
          "data-src": src,
          alt,
          loading: "lazy",
          onLoad: handleLoad,
          onError: handleError
        }
      ) : /* @__PURE__ */ React.createElement(
        "img",
        {
          ref: imgRef,
          className: "nut-img",
          style: imgStyle,
          src,
          alt,
          onLoad: handleLoad,
          onError: handleError
        }
      ),
      renderLoading(),
      renderErrorImg()
    );
  };
  Image$1.defaultProps = defaultProps$1n;
  Image$1.displayName = "NutImage";
  function _extends$4() {
    _extends$4 = Object.assign ? Object.assign.bind() : function(target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
    return _extends$4.apply(this, arguments);
  }
  function _objectWithoutPropertiesLoose$3(source, excluded) {
    if (source == null)
      return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;
    for (i = 0; i < sourceKeys.length; i++) {
      key = sourceKeys[i];
      if (excluded.indexOf(key) >= 0)
        continue;
      target[key] = source[key];
    }
    return target;
  }
  function _setPrototypeOf$1(o, p) {
    _setPrototypeOf$1 = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf2(o2, p2) {
      o2.__proto__ = p2;
      return o2;
    };
    return _setPrototypeOf$1(o, p);
  }
  function _inheritsLoose$1(subClass, superClass) {
    subClass.prototype = Object.create(superClass.prototype);
    subClass.prototype.constructor = subClass;
    _setPrototypeOf$1(subClass, superClass);
  }
  var propTypesExports = {};
  var propTypes = {
    get exports() {
      return propTypesExports;
    },
    set exports(v) {
      propTypesExports = v;
    }
  };
  var reactIsExports = {};
  var reactIs = {
    get exports() {
      return reactIsExports;
    },
    set exports(v) {
      reactIsExports = v;
    }
  };
  var reactIs_production_min = {};
  /** @license React v16.13.1
   * react-is.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */
  var hasRequiredReactIs_production_min;
  function requireReactIs_production_min() {
    if (hasRequiredReactIs_production_min)
      return reactIs_production_min;
    hasRequiredReactIs_production_min = 1;
    var b = "function" === typeof Symbol && Symbol.for, c = b ? Symbol.for("react.element") : 60103, d = b ? Symbol.for("react.portal") : 60106, e = b ? Symbol.for("react.fragment") : 60107, f = b ? Symbol.for("react.strict_mode") : 60108, g = b ? Symbol.for("react.profiler") : 60114, h = b ? Symbol.for("react.provider") : 60109, k2 = b ? Symbol.for("react.context") : 60110, l2 = b ? Symbol.for("react.async_mode") : 60111, m = b ? Symbol.for("react.concurrent_mode") : 60111, n = b ? Symbol.for("react.forward_ref") : 60112, p = b ? Symbol.for("react.suspense") : 60113, q = b ? Symbol.for("react.suspense_list") : 60120, r = b ? Symbol.for("react.memo") : 60115, t = b ? Symbol.for("react.lazy") : 60116, v = b ? Symbol.for("react.block") : 60121, w = b ? Symbol.for("react.fundamental") : 60117, x2 = b ? Symbol.for("react.responder") : 60118, y2 = b ? Symbol.for("react.scope") : 60119;
    function z(a2) {
      if ("object" === typeof a2 && null !== a2) {
        var u = a2.$$typeof;
        switch (u) {
          case c:
            switch (a2 = a2.type, a2) {
              case l2:
              case m:
              case e:
              case g:
              case f:
              case p:
                return a2;
              default:
                switch (a2 = a2 && a2.$$typeof, a2) {
                  case k2:
                  case n:
                  case t:
                  case r:
                  case h:
                    return a2;
                  default:
                    return u;
                }
            }
          case d:
            return u;
        }
      }
    }
    function A(a2) {
      return z(a2) === m;
    }
    reactIs_production_min.AsyncMode = l2;
    reactIs_production_min.ConcurrentMode = m;
    reactIs_production_min.ContextConsumer = k2;
    reactIs_production_min.ContextProvider = h;
    reactIs_production_min.Element = c;
    reactIs_production_min.ForwardRef = n;
    reactIs_production_min.Fragment = e;
    reactIs_production_min.Lazy = t;
    reactIs_production_min.Memo = r;
    reactIs_production_min.Portal = d;
    reactIs_production_min.Profiler = g;
    reactIs_production_min.StrictMode = f;
    reactIs_production_min.Suspense = p;
    reactIs_production_min.isAsyncMode = function(a2) {
      return A(a2) || z(a2) === l2;
    };
    reactIs_production_min.isConcurrentMode = A;
    reactIs_production_min.isContextConsumer = function(a2) {
      return z(a2) === k2;
    };
    reactIs_production_min.isContextProvider = function(a2) {
      return z(a2) === h;
    };
    reactIs_production_min.isElement = function(a2) {
      return "object" === typeof a2 && null !== a2 && a2.$$typeof === c;
    };
    reactIs_production_min.isForwardRef = function(a2) {
      return z(a2) === n;
    };
    reactIs_production_min.isFragment = function(a2) {
      return z(a2) === e;
    };
    reactIs_production_min.isLazy = function(a2) {
      return z(a2) === t;
    };
    reactIs_production_min.isMemo = function(a2) {
      return z(a2) === r;
    };
    reactIs_production_min.isPortal = function(a2) {
      return z(a2) === d;
    };
    reactIs_production_min.isProfiler = function(a2) {
      return z(a2) === g;
    };
    reactIs_production_min.isStrictMode = function(a2) {
      return z(a2) === f;
    };
    reactIs_production_min.isSuspense = function(a2) {
      return z(a2) === p;
    };
    reactIs_production_min.isValidElementType = function(a2) {
      return "string" === typeof a2 || "function" === typeof a2 || a2 === e || a2 === m || a2 === g || a2 === f || a2 === p || a2 === q || "object" === typeof a2 && null !== a2 && (a2.$$typeof === t || a2.$$typeof === r || a2.$$typeof === h || a2.$$typeof === k2 || a2.$$typeof === n || a2.$$typeof === w || a2.$$typeof === x2 || a2.$$typeof === y2 || a2.$$typeof === v);
    };
    reactIs_production_min.typeOf = z;
    return reactIs_production_min;
  }
  var reactIs_development = {};
  /** @license React v16.13.1
   * react-is.development.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */
  var hasRequiredReactIs_development;
  function requireReactIs_development() {
    if (hasRequiredReactIs_development)
      return reactIs_development;
    hasRequiredReactIs_development = 1;
    if (process.env.NODE_ENV !== "production") {
      (function() {
        var hasSymbol = typeof Symbol === "function" && Symbol.for;
        var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for("react.element") : 60103;
        var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for("react.portal") : 60106;
        var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for("react.fragment") : 60107;
        var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for("react.strict_mode") : 60108;
        var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for("react.profiler") : 60114;
        var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for("react.provider") : 60109;
        var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for("react.context") : 60110;
        var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for("react.async_mode") : 60111;
        var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for("react.concurrent_mode") : 60111;
        var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for("react.forward_ref") : 60112;
        var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for("react.suspense") : 60113;
        var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for("react.suspense_list") : 60120;
        var REACT_MEMO_TYPE = hasSymbol ? Symbol.for("react.memo") : 60115;
        var REACT_LAZY_TYPE = hasSymbol ? Symbol.for("react.lazy") : 60116;
        var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for("react.block") : 60121;
        var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for("react.fundamental") : 60117;
        var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for("react.responder") : 60118;
        var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for("react.scope") : 60119;
        function isValidElementType(type2) {
          return typeof type2 === "string" || typeof type2 === "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
          type2 === REACT_FRAGMENT_TYPE || type2 === REACT_CONCURRENT_MODE_TYPE || type2 === REACT_PROFILER_TYPE || type2 === REACT_STRICT_MODE_TYPE || type2 === REACT_SUSPENSE_TYPE || type2 === REACT_SUSPENSE_LIST_TYPE || typeof type2 === "object" && type2 !== null && (type2.$$typeof === REACT_LAZY_TYPE || type2.$$typeof === REACT_MEMO_TYPE || type2.$$typeof === REACT_PROVIDER_TYPE || type2.$$typeof === REACT_CONTEXT_TYPE || type2.$$typeof === REACT_FORWARD_REF_TYPE || type2.$$typeof === REACT_FUNDAMENTAL_TYPE || type2.$$typeof === REACT_RESPONDER_TYPE || type2.$$typeof === REACT_SCOPE_TYPE || type2.$$typeof === REACT_BLOCK_TYPE);
        }
        function typeOf(object2) {
          if (typeof object2 === "object" && object2 !== null) {
            var $$typeof = object2.$$typeof;
            switch ($$typeof) {
              case REACT_ELEMENT_TYPE:
                var type2 = object2.type;
                switch (type2) {
                  case REACT_ASYNC_MODE_TYPE:
                  case REACT_CONCURRENT_MODE_TYPE:
                  case REACT_FRAGMENT_TYPE:
                  case REACT_PROFILER_TYPE:
                  case REACT_STRICT_MODE_TYPE:
                  case REACT_SUSPENSE_TYPE:
                    return type2;
                  default:
                    var $$typeofType = type2 && type2.$$typeof;
                    switch ($$typeofType) {
                      case REACT_CONTEXT_TYPE:
                      case REACT_FORWARD_REF_TYPE:
                      case REACT_LAZY_TYPE:
                      case REACT_MEMO_TYPE:
                      case REACT_PROVIDER_TYPE:
                        return $$typeofType;
                      default:
                        return $$typeof;
                    }
                }
              case REACT_PORTAL_TYPE:
                return $$typeof;
            }
          }
          return void 0;
        }
        var AsyncMode = REACT_ASYNC_MODE_TYPE;
        var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
        var ContextConsumer = REACT_CONTEXT_TYPE;
        var ContextProvider = REACT_PROVIDER_TYPE;
        var Element2 = REACT_ELEMENT_TYPE;
        var ForwardRef = REACT_FORWARD_REF_TYPE;
        var Fragment = REACT_FRAGMENT_TYPE;
        var Lazy = REACT_LAZY_TYPE;
        var Memo = REACT_MEMO_TYPE;
        var Portal = REACT_PORTAL_TYPE;
        var Profiler = REACT_PROFILER_TYPE;
        var StrictMode = REACT_STRICT_MODE_TYPE;
        var Suspense = REACT_SUSPENSE_TYPE;
        var hasWarnedAboutDeprecatedIsAsyncMode = false;
        function isAsyncMode(object2) {
          {
            if (!hasWarnedAboutDeprecatedIsAsyncMode) {
              hasWarnedAboutDeprecatedIsAsyncMode = true;
              console["warn"]("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.");
            }
          }
          return isConcurrentMode(object2) || typeOf(object2) === REACT_ASYNC_MODE_TYPE;
        }
        function isConcurrentMode(object2) {
          return typeOf(object2) === REACT_CONCURRENT_MODE_TYPE;
        }
        function isContextConsumer(object2) {
          return typeOf(object2) === REACT_CONTEXT_TYPE;
        }
        function isContextProvider(object2) {
          return typeOf(object2) === REACT_PROVIDER_TYPE;
        }
        function isElement2(object2) {
          return typeof object2 === "object" && object2 !== null && object2.$$typeof === REACT_ELEMENT_TYPE;
        }
        function isForwardRef(object2) {
          return typeOf(object2) === REACT_FORWARD_REF_TYPE;
        }
        function isFragment(object2) {
          return typeOf(object2) === REACT_FRAGMENT_TYPE;
        }
        function isLazy(object2) {
          return typeOf(object2) === REACT_LAZY_TYPE;
        }
        function isMemo(object2) {
          return typeOf(object2) === REACT_MEMO_TYPE;
        }
        function isPortal(object2) {
          return typeOf(object2) === REACT_PORTAL_TYPE;
        }
        function isProfiler(object2) {
          return typeOf(object2) === REACT_PROFILER_TYPE;
        }
        function isStrictMode(object2) {
          return typeOf(object2) === REACT_STRICT_MODE_TYPE;
        }
        function isSuspense(object2) {
          return typeOf(object2) === REACT_SUSPENSE_TYPE;
        }
        reactIs_development.AsyncMode = AsyncMode;
        reactIs_development.ConcurrentMode = ConcurrentMode;
        reactIs_development.ContextConsumer = ContextConsumer;
        reactIs_development.ContextProvider = ContextProvider;
        reactIs_development.Element = Element2;
        reactIs_development.ForwardRef = ForwardRef;
        reactIs_development.Fragment = Fragment;
        reactIs_development.Lazy = Lazy;
        reactIs_development.Memo = Memo;
        reactIs_development.Portal = Portal;
        reactIs_development.Profiler = Profiler;
        reactIs_development.StrictMode = StrictMode;
        reactIs_development.Suspense = Suspense;
        reactIs_development.isAsyncMode = isAsyncMode;
        reactIs_development.isConcurrentMode = isConcurrentMode;
        reactIs_development.isContextConsumer = isContextConsumer;
        reactIs_development.isContextProvider = isContextProvider;
        reactIs_development.isElement = isElement2;
        reactIs_development.isForwardRef = isForwardRef;
        reactIs_development.isFragment = isFragment;
        reactIs_development.isLazy = isLazy;
        reactIs_development.isMemo = isMemo;
        reactIs_development.isPortal = isPortal;
        reactIs_development.isProfiler = isProfiler;
        reactIs_development.isStrictMode = isStrictMode;
        reactIs_development.isSuspense = isSuspense;
        reactIs_development.isValidElementType = isValidElementType;
        reactIs_development.typeOf = typeOf;
      })();
    }
    return reactIs_development;
  }
  var hasRequiredReactIs;
  function requireReactIs() {
    if (hasRequiredReactIs)
      return reactIsExports;
    hasRequiredReactIs = 1;
    (function(module2) {
      if (process.env.NODE_ENV === "production") {
        module2.exports = requireReactIs_production_min();
      } else {
        module2.exports = requireReactIs_development();
      }
    })(reactIs);
    return reactIsExports;
  }
  /*
  object-assign
  (c) Sindre Sorhus
  @license MIT
  */
  var objectAssign;
  var hasRequiredObjectAssign;
  function requireObjectAssign() {
    if (hasRequiredObjectAssign)
      return objectAssign;
    hasRequiredObjectAssign = 1;
    var getOwnPropertySymbols = Object.getOwnPropertySymbols;
    var hasOwnProperty = Object.prototype.hasOwnProperty;
    var propIsEnumerable = Object.prototype.propertyIsEnumerable;
    function toObject(val) {
      if (val === null || val === void 0) {
        throw new TypeError("Object.assign cannot be called with null or undefined");
      }
      return Object(val);
    }
    function shouldUseNative() {
      try {
        if (!Object.assign) {
          return false;
        }
        var test1 = new String("abc");
        test1[5] = "de";
        if (Object.getOwnPropertyNames(test1)[0] === "5") {
          return false;
        }
        var test2 = {};
        for (var i = 0; i < 10; i++) {
          test2["_" + String.fromCharCode(i)] = i;
        }
        var order2 = Object.getOwnPropertyNames(test2).map(function(n) {
          return test2[n];
        });
        if (order2.join("") !== "0123456789") {
          return false;
        }
        var test3 = {};
        "abcdefghijklmnopqrst".split("").forEach(function(letter) {
          test3[letter] = letter;
        });
        if (Object.keys(Object.assign({}, test3)).join("") !== "abcdefghijklmnopqrst") {
          return false;
        }
        return true;
      } catch (err) {
        return false;
      }
    }
    objectAssign = shouldUseNative() ? Object.assign : function(target, source) {
      var from;
      var to2 = toObject(target);
      var symbols;
      for (var s = 1; s < arguments.length; s++) {
        from = Object(arguments[s]);
        for (var key in from) {
          if (hasOwnProperty.call(from, key)) {
            to2[key] = from[key];
          }
        }
        if (getOwnPropertySymbols) {
          symbols = getOwnPropertySymbols(from);
          for (var i = 0; i < symbols.length; i++) {
            if (propIsEnumerable.call(from, symbols[i])) {
              to2[symbols[i]] = from[symbols[i]];
            }
          }
        }
      }
      return to2;
    };
    return objectAssign;
  }
  var ReactPropTypesSecret_1;
  var hasRequiredReactPropTypesSecret;
  function requireReactPropTypesSecret() {
    if (hasRequiredReactPropTypesSecret)
      return ReactPropTypesSecret_1;
    hasRequiredReactPropTypesSecret = 1;
    var ReactPropTypesSecret = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
    ReactPropTypesSecret_1 = ReactPropTypesSecret;
    return ReactPropTypesSecret_1;
  }
  var has;
  var hasRequiredHas;
  function requireHas() {
    if (hasRequiredHas)
      return has;
    hasRequiredHas = 1;
    has = Function.call.bind(Object.prototype.hasOwnProperty);
    return has;
  }
  var checkPropTypes_1;
  var hasRequiredCheckPropTypes;
  function requireCheckPropTypes() {
    if (hasRequiredCheckPropTypes)
      return checkPropTypes_1;
    hasRequiredCheckPropTypes = 1;
    var printWarning = function() {
    };
    if (process.env.NODE_ENV !== "production") {
      var ReactPropTypesSecret = requireReactPropTypesSecret();
      var loggedTypeFailures = {};
      var has2 = requireHas();
      printWarning = function(text) {
        var message = "Warning: " + text;
        if (typeof console !== "undefined") {
          console.error(message);
        }
        try {
          throw new Error(message);
        } catch (x2) {
        }
      };
    }
    function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
      if (process.env.NODE_ENV !== "production") {
        for (var typeSpecName in typeSpecs) {
          if (has2(typeSpecs, typeSpecName)) {
            var error;
            try {
              if (typeof typeSpecs[typeSpecName] !== "function") {
                var err = Error(
                  (componentName || "React class") + ": " + location + " type `" + typeSpecName + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof typeSpecs[typeSpecName] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
                );
                err.name = "Invariant Violation";
                throw err;
              }
              error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
            } catch (ex) {
              error = ex;
            }
            if (error && !(error instanceof Error)) {
              printWarning(
                (componentName || "React class") + ": type specification of " + location + " `" + typeSpecName + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof error + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
              );
            }
            if (error instanceof Error && !(error.message in loggedTypeFailures)) {
              loggedTypeFailures[error.message] = true;
              var stack = getStack ? getStack() : "";
              printWarning(
                "Failed " + location + " type: " + error.message + (stack != null ? stack : "")
              );
            }
          }
        }
      }
    }
    checkPropTypes.resetWarningCache = function() {
      if (process.env.NODE_ENV !== "production") {
        loggedTypeFailures = {};
      }
    };
    checkPropTypes_1 = checkPropTypes;
    return checkPropTypes_1;
  }
  var factoryWithTypeCheckers;
  var hasRequiredFactoryWithTypeCheckers;
  function requireFactoryWithTypeCheckers() {
    if (hasRequiredFactoryWithTypeCheckers)
      return factoryWithTypeCheckers;
    hasRequiredFactoryWithTypeCheckers = 1;
    var ReactIs2 = requireReactIs();
    var assign2 = requireObjectAssign();
    var ReactPropTypesSecret = requireReactPropTypesSecret();
    var has2 = requireHas();
    var checkPropTypes = requireCheckPropTypes();
    var printWarning = function() {
    };
    if (process.env.NODE_ENV !== "production") {
      printWarning = function(text) {
        var message = "Warning: " + text;
        if (typeof console !== "undefined") {
          console.error(message);
        }
        try {
          throw new Error(message);
        } catch (x2) {
        }
      };
    }
    function emptyFunctionThatReturnsNull() {
      return null;
    }
    factoryWithTypeCheckers = function(isValidElement, throwOnDirectAccess2) {
      var ITERATOR_SYMBOL = typeof Symbol === "function" && Symbol.iterator;
      var FAUX_ITERATOR_SYMBOL = "@@iterator";
      function getIteratorFn(maybeIterable) {
        var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
        if (typeof iteratorFn === "function") {
          return iteratorFn;
        }
      }
      var ANONYMOUS = "<<anonymous>>";
      var ReactPropTypes = {
        array: createPrimitiveTypeChecker("array"),
        bigint: createPrimitiveTypeChecker("bigint"),
        bool: createPrimitiveTypeChecker("boolean"),
        func: createPrimitiveTypeChecker("function"),
        number: createPrimitiveTypeChecker("number"),
        object: createPrimitiveTypeChecker("object"),
        string: createPrimitiveTypeChecker("string"),
        symbol: createPrimitiveTypeChecker("symbol"),
        any: createAnyTypeChecker(),
        arrayOf: createArrayOfTypeChecker,
        element: createElementTypeChecker(),
        elementType: createElementTypeTypeChecker(),
        instanceOf: createInstanceTypeChecker,
        node: createNodeChecker(),
        objectOf: createObjectOfTypeChecker,
        oneOf: createEnumTypeChecker,
        oneOfType: createUnionTypeChecker,
        shape: createShapeTypeChecker,
        exact: createStrictShapeTypeChecker
      };
      function is2(x2, y2) {
        if (x2 === y2) {
          return x2 !== 0 || 1 / x2 === 1 / y2;
        } else {
          return x2 !== x2 && y2 !== y2;
        }
      }
      function PropTypeError(message, data) {
        this.message = message;
        this.data = data && typeof data === "object" ? data : {};
        this.stack = "";
      }
      PropTypeError.prototype = Error.prototype;
      function createChainableTypeChecker(validate) {
        if (process.env.NODE_ENV !== "production") {
          var manualPropTypeCallCache = {};
          var manualPropTypeWarningCount = 0;
        }
        function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
          componentName = componentName || ANONYMOUS;
          propFullName = propFullName || propName;
          if (secret !== ReactPropTypesSecret) {
            if (throwOnDirectAccess2) {
              var err = new Error(
                "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
              );
              err.name = "Invariant Violation";
              throw err;
            } else if (process.env.NODE_ENV !== "production" && typeof console !== "undefined") {
              var cacheKey2 = componentName + ":" + propName;
              if (!manualPropTypeCallCache[cacheKey2] && // Avoid spamming the console because they are often not actionable except for lib authors
              manualPropTypeWarningCount < 3) {
                printWarning(
                  "You are manually calling a React.PropTypes validation function for the `" + propFullName + "` prop on `" + componentName + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
                );
                manualPropTypeCallCache[cacheKey2] = true;
                manualPropTypeWarningCount++;
              }
            }
          }
          if (props[propName] == null) {
            if (isRequired) {
              if (props[propName] === null) {
                return new PropTypeError("The " + location + " `" + propFullName + "` is marked as required " + ("in `" + componentName + "`, but its value is `null`."));
              }
              return new PropTypeError("The " + location + " `" + propFullName + "` is marked as required in " + ("`" + componentName + "`, but its value is `undefined`."));
            }
            return null;
          } else {
            return validate(props, propName, componentName, location, propFullName);
          }
        }
        var chainedCheckType = checkType.bind(null, false);
        chainedCheckType.isRequired = checkType.bind(null, true);
        return chainedCheckType;
      }
      function createPrimitiveTypeChecker(expectedType) {
        function validate(props, propName, componentName, location, propFullName, secret) {
          var propValue = props[propName];
          var propType = getPropType(propValue);
          if (propType !== expectedType) {
            var preciseType = getPreciseType(propValue);
            return new PropTypeError(
              "Invalid " + location + " `" + propFullName + "` of type " + ("`" + preciseType + "` supplied to `" + componentName + "`, expected ") + ("`" + expectedType + "`."),
              { expectedType }
            );
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createAnyTypeChecker() {
        return createChainableTypeChecker(emptyFunctionThatReturnsNull);
      }
      function createArrayOfTypeChecker(typeChecker) {
        function validate(props, propName, componentName, location, propFullName) {
          if (typeof typeChecker !== "function") {
            return new PropTypeError("Property `" + propFullName + "` of component `" + componentName + "` has invalid PropType notation inside arrayOf.");
          }
          var propValue = props[propName];
          if (!Array.isArray(propValue)) {
            var propType = getPropType(propValue);
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + propType + "` supplied to `" + componentName + "`, expected an array."));
          }
          for (var i = 0; i < propValue.length; i++) {
            var error = typeChecker(propValue, i, componentName, location, propFullName + "[" + i + "]", ReactPropTypesSecret);
            if (error instanceof Error) {
              return error;
            }
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createElementTypeChecker() {
        function validate(props, propName, componentName, location, propFullName) {
          var propValue = props[propName];
          if (!isValidElement(propValue)) {
            var propType = getPropType(propValue);
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + propType + "` supplied to `" + componentName + "`, expected a single ReactElement."));
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createElementTypeTypeChecker() {
        function validate(props, propName, componentName, location, propFullName) {
          var propValue = props[propName];
          if (!ReactIs2.isValidElementType(propValue)) {
            var propType = getPropType(propValue);
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + propType + "` supplied to `" + componentName + "`, expected a single ReactElement type."));
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createInstanceTypeChecker(expectedClass) {
        function validate(props, propName, componentName, location, propFullName) {
          if (!(props[propName] instanceof expectedClass)) {
            var expectedClassName = expectedClass.name || ANONYMOUS;
            var actualClassName = getClassName(props[propName]);
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + actualClassName + "` supplied to `" + componentName + "`, expected ") + ("instance of `" + expectedClassName + "`."));
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createEnumTypeChecker(expectedValues) {
        if (!Array.isArray(expectedValues)) {
          if (process.env.NODE_ENV !== "production") {
            if (arguments.length > 1) {
              printWarning(
                "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
              );
            } else {
              printWarning("Invalid argument supplied to oneOf, expected an array.");
            }
          }
          return emptyFunctionThatReturnsNull;
        }
        function validate(props, propName, componentName, location, propFullName) {
          var propValue = props[propName];
          for (var i = 0; i < expectedValues.length; i++) {
            if (is2(propValue, expectedValues[i])) {
              return null;
            }
          }
          var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
            var type2 = getPreciseType(value);
            if (type2 === "symbol") {
              return String(value);
            }
            return value;
          });
          return new PropTypeError("Invalid " + location + " `" + propFullName + "` of value `" + String(propValue) + "` " + ("supplied to `" + componentName + "`, expected one of " + valuesString + "."));
        }
        return createChainableTypeChecker(validate);
      }
      function createObjectOfTypeChecker(typeChecker) {
        function validate(props, propName, componentName, location, propFullName) {
          if (typeof typeChecker !== "function") {
            return new PropTypeError("Property `" + propFullName + "` of component `" + componentName + "` has invalid PropType notation inside objectOf.");
          }
          var propValue = props[propName];
          var propType = getPropType(propValue);
          if (propType !== "object") {
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + propType + "` supplied to `" + componentName + "`, expected an object."));
          }
          for (var key in propValue) {
            if (has2(propValue, key)) {
              var error = typeChecker(propValue, key, componentName, location, propFullName + "." + key, ReactPropTypesSecret);
              if (error instanceof Error) {
                return error;
              }
            }
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createUnionTypeChecker(arrayOfTypeCheckers) {
        if (!Array.isArray(arrayOfTypeCheckers)) {
          process.env.NODE_ENV !== "production" ? printWarning("Invalid argument supplied to oneOfType, expected an instance of array.") : void 0;
          return emptyFunctionThatReturnsNull;
        }
        for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
          var checker = arrayOfTypeCheckers[i];
          if (typeof checker !== "function") {
            printWarning(
              "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + getPostfixForTypeWarning(checker) + " at index " + i + "."
            );
            return emptyFunctionThatReturnsNull;
          }
        }
        function validate(props, propName, componentName, location, propFullName) {
          var expectedTypes = [];
          for (var i2 = 0; i2 < arrayOfTypeCheckers.length; i2++) {
            var checker2 = arrayOfTypeCheckers[i2];
            var checkerResult = checker2(props, propName, componentName, location, propFullName, ReactPropTypesSecret);
            if (checkerResult == null) {
              return null;
            }
            if (checkerResult.data && has2(checkerResult.data, "expectedType")) {
              expectedTypes.push(checkerResult.data.expectedType);
            }
          }
          var expectedTypesMessage = expectedTypes.length > 0 ? ", expected one of type [" + expectedTypes.join(", ") + "]" : "";
          return new PropTypeError("Invalid " + location + " `" + propFullName + "` supplied to " + ("`" + componentName + "`" + expectedTypesMessage + "."));
        }
        return createChainableTypeChecker(validate);
      }
      function createNodeChecker() {
        function validate(props, propName, componentName, location, propFullName) {
          if (!isNode(props[propName])) {
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` supplied to " + ("`" + componentName + "`, expected a ReactNode."));
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function invalidValidatorError(componentName, location, propFullName, key, type2) {
        return new PropTypeError(
          (componentName || "React class") + ": " + location + " type `" + propFullName + "." + key + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + type2 + "`."
        );
      }
      function createShapeTypeChecker(shapeTypes) {
        function validate(props, propName, componentName, location, propFullName) {
          var propValue = props[propName];
          var propType = getPropType(propValue);
          if (propType !== "object") {
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type `" + propType + "` " + ("supplied to `" + componentName + "`, expected `object`."));
          }
          for (var key in shapeTypes) {
            var checker = shapeTypes[key];
            if (typeof checker !== "function") {
              return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
            }
            var error = checker(propValue, key, componentName, location, propFullName + "." + key, ReactPropTypesSecret);
            if (error) {
              return error;
            }
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createStrictShapeTypeChecker(shapeTypes) {
        function validate(props, propName, componentName, location, propFullName) {
          var propValue = props[propName];
          var propType = getPropType(propValue);
          if (propType !== "object") {
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type `" + propType + "` " + ("supplied to `" + componentName + "`, expected `object`."));
          }
          var allKeys = assign2({}, props[propName], shapeTypes);
          for (var key in allKeys) {
            var checker = shapeTypes[key];
            if (has2(shapeTypes, key) && typeof checker !== "function") {
              return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
            }
            if (!checker) {
              return new PropTypeError(
                "Invalid " + location + " `" + propFullName + "` key `" + key + "` supplied to `" + componentName + "`.\nBad object: " + JSON.stringify(props[propName], null, "  ") + "\nValid keys: " + JSON.stringify(Object.keys(shapeTypes), null, "  ")
              );
            }
            var error = checker(propValue, key, componentName, location, propFullName + "." + key, ReactPropTypesSecret);
            if (error) {
              return error;
            }
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function isNode(propValue) {
        switch (typeof propValue) {
          case "number":
          case "string":
          case "undefined":
            return true;
          case "boolean":
            return !propValue;
          case "object":
            if (Array.isArray(propValue)) {
              return propValue.every(isNode);
            }
            if (propValue === null || isValidElement(propValue)) {
              return true;
            }
            var iteratorFn = getIteratorFn(propValue);
            if (iteratorFn) {
              var iterator = iteratorFn.call(propValue);
              var step;
              if (iteratorFn !== propValue.entries) {
                while (!(step = iterator.next()).done) {
                  if (!isNode(step.value)) {
                    return false;
                  }
                }
              } else {
                while (!(step = iterator.next()).done) {
                  var entry = step.value;
                  if (entry) {
                    if (!isNode(entry[1])) {
                      return false;
                    }
                  }
                }
              }
            } else {
              return false;
            }
            return true;
          default:
            return false;
        }
      }
      function isSymbol2(propType, propValue) {
        if (propType === "symbol") {
          return true;
        }
        if (!propValue) {
          return false;
        }
        if (propValue["@@toStringTag"] === "Symbol") {
          return true;
        }
        if (typeof Symbol === "function" && propValue instanceof Symbol) {
          return true;
        }
        return false;
      }
      function getPropType(propValue) {
        var propType = typeof propValue;
        if (Array.isArray(propValue)) {
          return "array";
        }
        if (propValue instanceof RegExp) {
          return "object";
        }
        if (isSymbol2(propType, propValue)) {
          return "symbol";
        }
        return propType;
      }
      function getPreciseType(propValue) {
        if (typeof propValue === "undefined" || propValue === null) {
          return "" + propValue;
        }
        var propType = getPropType(propValue);
        if (propType === "object") {
          if (propValue instanceof Date) {
            return "date";
          } else if (propValue instanceof RegExp) {
            return "regexp";
          }
        }
        return propType;
      }
      function getPostfixForTypeWarning(value) {
        var type2 = getPreciseType(value);
        switch (type2) {
          case "array":
          case "object":
            return "an " + type2;
          case "boolean":
          case "date":
          case "regexp":
            return "a " + type2;
          default:
            return type2;
        }
      }
      function getClassName(propValue) {
        if (!propValue.constructor || !propValue.constructor.name) {
          return ANONYMOUS;
        }
        return propValue.constructor.name;
      }
      ReactPropTypes.checkPropTypes = checkPropTypes;
      ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache;
      ReactPropTypes.PropTypes = ReactPropTypes;
      return ReactPropTypes;
    };
    return factoryWithTypeCheckers;
  }
  var factoryWithThrowingShims;
  var hasRequiredFactoryWithThrowingShims;
  function requireFactoryWithThrowingShims() {
    if (hasRequiredFactoryWithThrowingShims)
      return factoryWithThrowingShims;
    hasRequiredFactoryWithThrowingShims = 1;
    var ReactPropTypesSecret = requireReactPropTypesSecret();
    function emptyFunction() {
    }
    function emptyFunctionWithReset() {
    }
    emptyFunctionWithReset.resetWarningCache = emptyFunction;
    factoryWithThrowingShims = function() {
      function shim(props, propName, componentName, location, propFullName, secret) {
        if (secret === ReactPropTypesSecret) {
          return;
        }
        var err = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        err.name = "Invariant Violation";
        throw err;
      }
      shim.isRequired = shim;
      function getShim() {
        return shim;
      }
      var ReactPropTypes = {
        array: shim,
        bigint: shim,
        bool: shim,
        func: shim,
        number: shim,
        object: shim,
        string: shim,
        symbol: shim,
        any: shim,
        arrayOf: getShim,
        element: shim,
        elementType: shim,
        instanceOf: getShim,
        node: shim,
        objectOf: getShim,
        oneOf: getShim,
        oneOfType: getShim,
        shape: getShim,
        exact: getShim,
        checkPropTypes: emptyFunctionWithReset,
        resetWarningCache: emptyFunction
      };
      ReactPropTypes.PropTypes = ReactPropTypes;
      return ReactPropTypes;
    };
    return factoryWithThrowingShims;
  }
  if (process.env.NODE_ENV !== "production") {
    var ReactIs = requireReactIs();
    var throwOnDirectAccess = true;
    propTypes.exports = requireFactoryWithTypeCheckers()(ReactIs.isElement, throwOnDirectAccess);
  } else {
    propTypes.exports = requireFactoryWithThrowingShims()();
  }
  function hasClass(element, className) {
    if (element.classList)
      return !!className && element.classList.contains(className);
    return (" " + (element.className.baseVal || element.className) + " ").indexOf(" " + className + " ") !== -1;
  }
  function addClass(element, className) {
    if (element.classList)
      element.classList.add(className);
    else if (!hasClass(element, className))
      if (typeof element.className === "string")
        element.className = element.className + " " + className;
      else
        element.setAttribute("class", (element.className && element.className.baseVal || "") + " " + className);
  }
  function replaceClassName(origClass, classToRemove) {
    return origClass.replace(new RegExp("(^|\\s)" + classToRemove + "(?:\\s|$)", "g"), "$1").replace(/\s+/g, " ").replace(/^\s*|\s*$/g, "");
  }
  function removeClass$1(element, className) {
    if (element.classList) {
      element.classList.remove(className);
    } else if (typeof element.className === "string") {
      element.className = replaceClassName(element.className, className);
    } else {
      element.setAttribute("class", replaceClassName(element.className && element.className.baseVal || "", className));
    }
  }
  const config$2 = {
    disabled: false
  };
  var timeoutsShape = process.env.NODE_ENV !== "production" ? propTypesExports.oneOfType([propTypesExports.number, propTypesExports.shape({
    enter: propTypesExports.number,
    exit: propTypesExports.number,
    appear: propTypesExports.number
  }).isRequired]) : null;
  var classNamesShape = process.env.NODE_ENV !== "production" ? propTypesExports.oneOfType([propTypesExports.string, propTypesExports.shape({
    enter: propTypesExports.string,
    exit: propTypesExports.string,
    active: propTypesExports.string
  }), propTypesExports.shape({
    enter: propTypesExports.string,
    enterDone: propTypesExports.string,
    enterActive: propTypesExports.string,
    exit: propTypesExports.string,
    exitDone: propTypesExports.string,
    exitActive: propTypesExports.string
  })]) : null;
  const TransitionGroupContext = React.createContext(null);
  var forceReflow = function forceReflow2(node) {
    return node.scrollTop;
  };
  var UNMOUNTED = "unmounted";
  var EXITED = "exited";
  var ENTERING = "entering";
  var ENTERED = "entered";
  var EXITING = "exiting";
  var Transition = /* @__PURE__ */ function(_React$Component) {
    _inheritsLoose$1(Transition2, _React$Component);
    function Transition2(props, context) {
      var _this;
      _this = _React$Component.call(this, props, context) || this;
      var parentGroup = context;
      var appear = parentGroup && !parentGroup.isMounting ? props.enter : props.appear;
      var initialStatus;
      _this.appearStatus = null;
      if (props.in) {
        if (appear) {
          initialStatus = EXITED;
          _this.appearStatus = ENTERING;
        } else {
          initialStatus = ENTERED;
        }
      } else {
        if (props.unmountOnExit || props.mountOnEnter) {
          initialStatus = UNMOUNTED;
        } else {
          initialStatus = EXITED;
        }
      }
      _this.state = {
        status: initialStatus
      };
      _this.nextCallback = null;
      return _this;
    }
    Transition2.getDerivedStateFromProps = function getDerivedStateFromProps(_ref, prevState) {
      var nextIn = _ref.in;
      if (nextIn && prevState.status === UNMOUNTED) {
        return {
          status: EXITED
        };
      }
      return null;
    };
    var _proto = Transition2.prototype;
    _proto.componentDidMount = function componentDidMount() {
      this.updateStatus(true, this.appearStatus);
    };
    _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
      var nextStatus = null;
      if (prevProps !== this.props) {
        var status = this.state.status;
        if (this.props.in) {
          if (status !== ENTERING && status !== ENTERED) {
            nextStatus = ENTERING;
          }
        } else {
          if (status === ENTERING || status === ENTERED) {
            nextStatus = EXITING;
          }
        }
      }
      this.updateStatus(false, nextStatus);
    };
    _proto.componentWillUnmount = function componentWillUnmount() {
      this.cancelNextCallback();
    };
    _proto.getTimeouts = function getTimeouts() {
      var timeout = this.props.timeout;
      var exit, enter, appear;
      exit = enter = appear = timeout;
      if (timeout != null && typeof timeout !== "number") {
        exit = timeout.exit;
        enter = timeout.enter;
        appear = timeout.appear !== void 0 ? timeout.appear : enter;
      }
      return {
        exit,
        enter,
        appear
      };
    };
    _proto.updateStatus = function updateStatus(mounting, nextStatus) {
      if (mounting === void 0) {
        mounting = false;
      }
      if (nextStatus !== null) {
        this.cancelNextCallback();
        if (nextStatus === ENTERING) {
          if (this.props.unmountOnExit || this.props.mountOnEnter) {
            var node = this.props.nodeRef ? this.props.nodeRef.current : ReactDOM.findDOMNode(this);
            if (node)
              forceReflow(node);
          }
          this.performEnter(mounting);
        } else {
          this.performExit();
        }
      } else if (this.props.unmountOnExit && this.state.status === EXITED) {
        this.setState({
          status: UNMOUNTED
        });
      }
    };
    _proto.performEnter = function performEnter(mounting) {
      var _this2 = this;
      var enter = this.props.enter;
      var appearing = this.context ? this.context.isMounting : mounting;
      var _ref2 = this.props.nodeRef ? [appearing] : [ReactDOM.findDOMNode(this), appearing], maybeNode = _ref2[0], maybeAppearing = _ref2[1];
      var timeouts2 = this.getTimeouts();
      var enterTimeout = appearing ? timeouts2.appear : timeouts2.enter;
      if (!mounting && !enter || config$2.disabled) {
        this.safeSetState({
          status: ENTERED
        }, function() {
          _this2.props.onEntered(maybeNode);
        });
        return;
      }
      this.props.onEnter(maybeNode, maybeAppearing);
      this.safeSetState({
        status: ENTERING
      }, function() {
        _this2.props.onEntering(maybeNode, maybeAppearing);
        _this2.onTransitionEnd(enterTimeout, function() {
          _this2.safeSetState({
            status: ENTERED
          }, function() {
            _this2.props.onEntered(maybeNode, maybeAppearing);
          });
        });
      });
    };
    _proto.performExit = function performExit() {
      var _this3 = this;
      var exit = this.props.exit;
      var timeouts2 = this.getTimeouts();
      var maybeNode = this.props.nodeRef ? void 0 : ReactDOM.findDOMNode(this);
      if (!exit || config$2.disabled) {
        this.safeSetState({
          status: EXITED
        }, function() {
          _this3.props.onExited(maybeNode);
        });
        return;
      }
      this.props.onExit(maybeNode);
      this.safeSetState({
        status: EXITING
      }, function() {
        _this3.props.onExiting(maybeNode);
        _this3.onTransitionEnd(timeouts2.exit, function() {
          _this3.safeSetState({
            status: EXITED
          }, function() {
            _this3.props.onExited(maybeNode);
          });
        });
      });
    };
    _proto.cancelNextCallback = function cancelNextCallback() {
      if (this.nextCallback !== null) {
        this.nextCallback.cancel();
        this.nextCallback = null;
      }
    };
    _proto.safeSetState = function safeSetState(nextState, callback) {
      callback = this.setNextCallback(callback);
      this.setState(nextState, callback);
    };
    _proto.setNextCallback = function setNextCallback(callback) {
      var _this4 = this;
      var active = true;
      this.nextCallback = function(event) {
        if (active) {
          active = false;
          _this4.nextCallback = null;
          callback(event);
        }
      };
      this.nextCallback.cancel = function() {
        active = false;
      };
      return this.nextCallback;
    };
    _proto.onTransitionEnd = function onTransitionEnd(timeout, handler) {
      this.setNextCallback(handler);
      var node = this.props.nodeRef ? this.props.nodeRef.current : ReactDOM.findDOMNode(this);
      var doesNotHaveTimeoutOrListener = timeout == null && !this.props.addEndListener;
      if (!node || doesNotHaveTimeoutOrListener) {
        setTimeout(this.nextCallback, 0);
        return;
      }
      if (this.props.addEndListener) {
        var _ref3 = this.props.nodeRef ? [this.nextCallback] : [node, this.nextCallback], maybeNode = _ref3[0], maybeNextCallback = _ref3[1];
        this.props.addEndListener(maybeNode, maybeNextCallback);
      }
      if (timeout != null) {
        setTimeout(this.nextCallback, timeout);
      }
    };
    _proto.render = function render2() {
      var status = this.state.status;
      if (status === UNMOUNTED) {
        return null;
      }
      var _this$props = this.props, children = _this$props.children;
      _this$props.in;
      _this$props.mountOnEnter;
      _this$props.unmountOnExit;
      _this$props.appear;
      _this$props.enter;
      _this$props.exit;
      _this$props.timeout;
      _this$props.addEndListener;
      _this$props.onEnter;
      _this$props.onEntering;
      _this$props.onEntered;
      _this$props.onExit;
      _this$props.onExiting;
      _this$props.onExited;
      _this$props.nodeRef;
      var childProps = _objectWithoutPropertiesLoose$3(_this$props, ["children", "in", "mountOnEnter", "unmountOnExit", "appear", "enter", "exit", "timeout", "addEndListener", "onEnter", "onEntering", "onEntered", "onExit", "onExiting", "onExited", "nodeRef"]);
      return (
        // allows for nested Transitions
        /* @__PURE__ */ React.createElement(TransitionGroupContext.Provider, {
          value: null
        }, typeof children === "function" ? children(status, childProps) : React.cloneElement(React.Children.only(children), childProps))
      );
    };
    return Transition2;
  }(React.Component);
  Transition.contextType = TransitionGroupContext;
  Transition.propTypes = process.env.NODE_ENV !== "production" ? {
    /**
     * A React reference to DOM element that need to transition:
     * https://stackoverflow.com/a/51127130/4671932
     *
     *   - When `nodeRef` prop is used, `node` is not passed to callback functions
     *      (e.g. `onEnter`) because user already has direct access to the node.
     *   - When changing `key` prop of `Transition` in a `TransitionGroup` a new
     *     `nodeRef` need to be provided to `Transition` with changed `key` prop
     *     (see
     *     [test/CSSTransition-test.js](https://github.com/reactjs/react-transition-group/blob/13435f897b3ab71f6e19d724f145596f5910581c/test/CSSTransition-test.js#L362-L437)).
     */
    nodeRef: propTypesExports.shape({
      current: typeof Element === "undefined" ? propTypesExports.any : function(propValue, key, componentName, location, propFullName, secret) {
        var value = propValue[key];
        return propTypesExports.instanceOf(value && "ownerDocument" in value ? value.ownerDocument.defaultView.Element : Element)(propValue, key, componentName, location, propFullName, secret);
      }
    }),
    /**
     * A `function` child can be used instead of a React element. This function is
     * called with the current transition status (`'entering'`, `'entered'`,
     * `'exiting'`, `'exited'`), which can be used to apply context
     * specific props to a component.
     *
     * ```jsx
     * <Transition in={this.state.in} timeout={150}>
     *   {state => (
     *     <MyComponent className={`fade fade-${state}`} />
     *   )}
     * </Transition>
     * ```
     */
    children: propTypesExports.oneOfType([propTypesExports.func.isRequired, propTypesExports.element.isRequired]).isRequired,
    /**
     * Show the component; triggers the enter or exit states
     */
    in: propTypesExports.bool,
    /**
     * By default the child component is mounted immediately along with
     * the parent `Transition` component. If you want to "lazy mount" the component on the
     * first `in={true}` you can set `mountOnEnter`. After the first enter transition the component will stay
     * mounted, even on "exited", unless you also specify `unmountOnExit`.
     */
    mountOnEnter: propTypesExports.bool,
    /**
     * By default the child component stays mounted after it reaches the `'exited'` state.
     * Set `unmountOnExit` if you'd prefer to unmount the component after it finishes exiting.
     */
    unmountOnExit: propTypesExports.bool,
    /**
     * By default the child component does not perform the enter transition when
     * it first mounts, regardless of the value of `in`. If you want this
     * behavior, set both `appear` and `in` to `true`.
     *
     * > **Note**: there are no special appear states like `appearing`/`appeared`, this prop
     * > only adds an additional enter transition. However, in the
     * > `<CSSTransition>` component that first enter transition does result in
     * > additional `.appear-*` classes, that way you can choose to style it
     * > differently.
     */
    appear: propTypesExports.bool,
    /**
     * Enable or disable enter transitions.
     */
    enter: propTypesExports.bool,
    /**
     * Enable or disable exit transitions.
     */
    exit: propTypesExports.bool,
    /**
     * The duration of the transition, in milliseconds.
     * Required unless `addEndListener` is provided.
     *
     * You may specify a single timeout for all transitions:
     *
     * ```jsx
     * timeout={500}
     * ```
     *
     * or individually:
     *
     * ```jsx
     * timeout={{
     *  appear: 500,
     *  enter: 300,
     *  exit: 500,
     * }}
     * ```
     *
     * - `appear` defaults to the value of `enter`
     * - `enter` defaults to `0`
     * - `exit` defaults to `0`
     *
     * @type {number | { enter?: number, exit?: number, appear?: number }}
     */
    timeout: function timeout(props) {
      var pt = timeoutsShape;
      if (!props.addEndListener)
        pt = pt.isRequired;
      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }
      return pt.apply(void 0, [props].concat(args));
    },
    /**
     * Add a custom transition end trigger. Called with the transitioning
     * DOM node and a `done` callback. Allows for more fine grained transition end
     * logic. Timeouts are still used as a fallback if provided.
     *
     * **Note**: when `nodeRef` prop is passed, `node` is not passed.
     *
     * ```jsx
     * addEndListener={(node, done) => {
     *   // use the css transitionend event to mark the finish of a transition
     *   node.addEventListener('transitionend', done, false);
     * }}
     * ```
     */
    addEndListener: propTypesExports.func,
    /**
     * Callback fired before the "entering" status is applied. An extra parameter
     * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
     *
     * **Note**: when `nodeRef` prop is passed, `node` is not passed.
     *
     * @type Function(node: HtmlElement, isAppearing: bool) -> void
     */
    onEnter: propTypesExports.func,
    /**
     * Callback fired after the "entering" status is applied. An extra parameter
     * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
     *
     * **Note**: when `nodeRef` prop is passed, `node` is not passed.
     *
     * @type Function(node: HtmlElement, isAppearing: bool)
     */
    onEntering: propTypesExports.func,
    /**
     * Callback fired after the "entered" status is applied. An extra parameter
     * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
     *
     * **Note**: when `nodeRef` prop is passed, `node` is not passed.
     *
     * @type Function(node: HtmlElement, isAppearing: bool) -> void
     */
    onEntered: propTypesExports.func,
    /**
     * Callback fired before the "exiting" status is applied.
     *
     * **Note**: when `nodeRef` prop is passed, `node` is not passed.
     *
     * @type Function(node: HtmlElement) -> void
     */
    onExit: propTypesExports.func,
    /**
     * Callback fired after the "exiting" status is applied.
     *
     * **Note**: when `nodeRef` prop is passed, `node` is not passed.
     *
     * @type Function(node: HtmlElement) -> void
     */
    onExiting: propTypesExports.func,
    /**
     * Callback fired after the "exited" status is applied.
     *
     * **Note**: when `nodeRef` prop is passed, `node` is not passed
     *
     * @type Function(node: HtmlElement) -> void
     */
    onExited: propTypesExports.func
  } : {};
  function noop$2() {
  }
  Transition.defaultProps = {
    in: false,
    mountOnEnter: false,
    unmountOnExit: false,
    appear: false,
    enter: true,
    exit: true,
    onEnter: noop$2,
    onEntering: noop$2,
    onEntered: noop$2,
    onExit: noop$2,
    onExiting: noop$2,
    onExited: noop$2
  };
  Transition.UNMOUNTED = UNMOUNTED;
  Transition.EXITED = EXITED;
  Transition.ENTERING = ENTERING;
  Transition.ENTERED = ENTERED;
  Transition.EXITING = EXITING;
  const Transition$1 = Transition;
  var _addClass = function addClass$1(node, classes) {
    return node && classes && classes.split(" ").forEach(function(c) {
      return addClass(node, c);
    });
  };
  var removeClass = function removeClass2(node, classes) {
    return node && classes && classes.split(" ").forEach(function(c) {
      return removeClass$1(node, c);
    });
  };
  var CSSTransition = /* @__PURE__ */ function(_React$Component) {
    _inheritsLoose$1(CSSTransition2, _React$Component);
    function CSSTransition2() {
      var _this;
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
      _this.appliedClasses = {
        appear: {},
        enter: {},
        exit: {}
      };
      _this.onEnter = function(maybeNode, maybeAppearing) {
        var _this$resolveArgument = _this.resolveArguments(maybeNode, maybeAppearing), node = _this$resolveArgument[0], appearing = _this$resolveArgument[1];
        _this.removeClasses(node, "exit");
        _this.addClass(node, appearing ? "appear" : "enter", "base");
        if (_this.props.onEnter) {
          _this.props.onEnter(maybeNode, maybeAppearing);
        }
      };
      _this.onEntering = function(maybeNode, maybeAppearing) {
        var _this$resolveArgument2 = _this.resolveArguments(maybeNode, maybeAppearing), node = _this$resolveArgument2[0], appearing = _this$resolveArgument2[1];
        var type2 = appearing ? "appear" : "enter";
        _this.addClass(node, type2, "active");
        if (_this.props.onEntering) {
          _this.props.onEntering(maybeNode, maybeAppearing);
        }
      };
      _this.onEntered = function(maybeNode, maybeAppearing) {
        var _this$resolveArgument3 = _this.resolveArguments(maybeNode, maybeAppearing), node = _this$resolveArgument3[0], appearing = _this$resolveArgument3[1];
        var type2 = appearing ? "appear" : "enter";
        _this.removeClasses(node, type2);
        _this.addClass(node, type2, "done");
        if (_this.props.onEntered) {
          _this.props.onEntered(maybeNode, maybeAppearing);
        }
      };
      _this.onExit = function(maybeNode) {
        var _this$resolveArgument4 = _this.resolveArguments(maybeNode), node = _this$resolveArgument4[0];
        _this.removeClasses(node, "appear");
        _this.removeClasses(node, "enter");
        _this.addClass(node, "exit", "base");
        if (_this.props.onExit) {
          _this.props.onExit(maybeNode);
        }
      };
      _this.onExiting = function(maybeNode) {
        var _this$resolveArgument5 = _this.resolveArguments(maybeNode), node = _this$resolveArgument5[0];
        _this.addClass(node, "exit", "active");
        if (_this.props.onExiting) {
          _this.props.onExiting(maybeNode);
        }
      };
      _this.onExited = function(maybeNode) {
        var _this$resolveArgument6 = _this.resolveArguments(maybeNode), node = _this$resolveArgument6[0];
        _this.removeClasses(node, "exit");
        _this.addClass(node, "exit", "done");
        if (_this.props.onExited) {
          _this.props.onExited(maybeNode);
        }
      };
      _this.resolveArguments = function(maybeNode, maybeAppearing) {
        return _this.props.nodeRef ? [_this.props.nodeRef.current, maybeNode] : [maybeNode, maybeAppearing];
      };
      _this.getClassNames = function(type2) {
        var classNames = _this.props.classNames;
        var isStringClassNames = typeof classNames === "string";
        var prefix2 = isStringClassNames && classNames ? classNames + "-" : "";
        var baseClassName = isStringClassNames ? "" + prefix2 + type2 : classNames[type2];
        var activeClassName = isStringClassNames ? baseClassName + "-active" : classNames[type2 + "Active"];
        var doneClassName = isStringClassNames ? baseClassName + "-done" : classNames[type2 + "Done"];
        return {
          baseClassName,
          activeClassName,
          doneClassName
        };
      };
      return _this;
    }
    var _proto = CSSTransition2.prototype;
    _proto.addClass = function addClass2(node, type2, phase) {
      var className = this.getClassNames(type2)[phase + "ClassName"];
      var _this$getClassNames = this.getClassNames("enter"), doneClassName = _this$getClassNames.doneClassName;
      if (type2 === "appear" && phase === "done" && doneClassName) {
        className += " " + doneClassName;
      }
      if (phase === "active") {
        if (node)
          forceReflow(node);
      }
      if (className) {
        this.appliedClasses[type2][phase] = className;
        _addClass(node, className);
      }
    };
    _proto.removeClasses = function removeClasses(node, type2) {
      var _this$appliedClasses$ = this.appliedClasses[type2], baseClassName = _this$appliedClasses$.base, activeClassName = _this$appliedClasses$.active, doneClassName = _this$appliedClasses$.done;
      this.appliedClasses[type2] = {};
      if (baseClassName) {
        removeClass(node, baseClassName);
      }
      if (activeClassName) {
        removeClass(node, activeClassName);
      }
      if (doneClassName) {
        removeClass(node, doneClassName);
      }
    };
    _proto.render = function render2() {
      var _this$props = this.props;
      _this$props.classNames;
      var props = _objectWithoutPropertiesLoose$3(_this$props, ["classNames"]);
      return /* @__PURE__ */ React.createElement(Transition$1, _extends$4({}, props, {
        onEnter: this.onEnter,
        onEntered: this.onEntered,
        onEntering: this.onEntering,
        onExit: this.onExit,
        onExiting: this.onExiting,
        onExited: this.onExited
      }));
    };
    return CSSTransition2;
  }(React.Component);
  CSSTransition.defaultProps = {
    classNames: ""
  };
  CSSTransition.propTypes = process.env.NODE_ENV !== "production" ? _extends$4({}, Transition$1.propTypes, {
    /**
     * The animation classNames applied to the component as it appears, enters,
     * exits or has finished the transition. A single name can be provided, which
     * will be suffixed for each stage, e.g. `classNames="fade"` applies:
     *
     * - `fade-appear`, `fade-appear-active`, `fade-appear-done`
     * - `fade-enter`, `fade-enter-active`, `fade-enter-done`
     * - `fade-exit`, `fade-exit-active`, `fade-exit-done`
     *
     * A few details to note about how these classes are applied:
     *
     * 1. They are _joined_ with the ones that are already defined on the child
     *    component, so if you want to add some base styles, you can use
     *    `className` without worrying that it will be overridden.
     *
     * 2. If the transition component mounts with `in={false}`, no classes are
     *    applied yet. You might be expecting `*-exit-done`, but if you think
     *    about it, a component cannot finish exiting if it hasn't entered yet.
     *
     * 2. `fade-appear-done` and `fade-enter-done` will _both_ be applied. This
     *    allows you to define different behavior for when appearing is done and
     *    when regular entering is done, using selectors like
     *    `.fade-enter-done:not(.fade-appear-done)`. For example, you could apply
     *    an epic entrance animation when element first appears in the DOM using
     *    [Animate.css](https://daneden.github.io/animate.css/). Otherwise you can
     *    simply use `fade-enter-done` for defining both cases.
     *
     * Each individual classNames can also be specified independently like:
     *
     * ```js
     * classNames={{
     *  appear: 'my-appear',
     *  appearActive: 'my-active-appear',
     *  appearDone: 'my-done-appear',
     *  enter: 'my-enter',
     *  enterActive: 'my-active-enter',
     *  enterDone: 'my-done-enter',
     *  exit: 'my-exit',
     *  exitActive: 'my-active-exit',
     *  exitDone: 'my-done-exit',
     * }}
     * ```
     *
     * If you want to set these classes using CSS Modules:
     *
     * ```js
     * import styles from './styles.css';
     * ```
     *
     * you might want to use camelCase in your CSS file, that way could simply
     * spread them instead of listing them one by one:
     *
     * ```js
     * classNames={{ ...styles }}
     * ```
     *
     * @type {string | {
     *  appear?: string,
     *  appearActive?: string,
     *  appearDone?: string,
     *  enter?: string,
     *  enterActive?: string,
     *  enterDone?: string,
     *  exit?: string,
     *  exitActive?: string,
     *  exitDone?: string,
     * }}
     */
    classNames: classNamesShape,
    /**
     * A `<Transition>` callback fired immediately after the 'enter' or 'appear' class is
     * applied.
     *
     * **Note**: when `nodeRef` prop is passed, `node` is not passed.
     *
     * @type Function(node: HtmlElement, isAppearing: bool)
     */
    onEnter: propTypesExports.func,
    /**
     * A `<Transition>` callback fired immediately after the 'enter-active' or
     * 'appear-active' class is applied.
     *
     * **Note**: when `nodeRef` prop is passed, `node` is not passed.
     *
     * @type Function(node: HtmlElement, isAppearing: bool)
     */
    onEntering: propTypesExports.func,
    /**
     * A `<Transition>` callback fired immediately after the 'enter' or
     * 'appear' classes are **removed** and the `done` class is added to the DOM node.
     *
     * **Note**: when `nodeRef` prop is passed, `node` is not passed.
     *
     * @type Function(node: HtmlElement, isAppearing: bool)
     */
    onEntered: propTypesExports.func,
    /**
     * A `<Transition>` callback fired immediately after the 'exit' class is
     * applied.
     *
     * **Note**: when `nodeRef` prop is passed, `node` is not passed
     *
     * @type Function(node: HtmlElement)
     */
    onExit: propTypesExports.func,
    /**
     * A `<Transition>` callback fired immediately after the 'exit-active' is applied.
     *
     * **Note**: when `nodeRef` prop is passed, `node` is not passed
     *
     * @type Function(node: HtmlElement)
     */
    onExiting: propTypesExports.func,
    /**
     * A `<Transition>` callback fired immediately after the 'exit' classes
     * are **removed** and the `exit-done` class is added to the DOM node.
     *
     * **Note**: when `nodeRef` prop is passed, `node` is not passed
     *
     * @type Function(node: HtmlElement)
     */
    onExited: propTypesExports.func
  }) : {};
  const CSSTransition$1 = CSSTransition;
  const defaultOverlayProps = {
    ...ComponentDefaults,
    zIndex: 1e3,
    duration: 300,
    closeOnOverlayClick: true,
    visible: false,
    lockScroll: true,
    onClick: (event) => {
    }
  };
  const Overlay = (props) => {
    const {
      children,
      zIndex,
      duration,
      className,
      closeOnOverlayClick,
      visible,
      lockScroll,
      style,
      afterShow,
      afterClose,
      onClick,
      ...rest
    } = {
      ...defaultOverlayProps,
      ...props
    };
    const [innerVisible, setInnerVisible] = React.useState(visible);
    const classPrefix2 = `nut-overlay`;
    React.useEffect(() => {
      if (visible) {
        setInnerVisible(true);
      } else {
        setInnerVisible(false);
      }
      lock();
    }, [visible]);
    React.useEffect(() => {
      return () => {
        document.body.classList.remove("nut-overflow-hidden");
      };
    }, []);
    const classes = classnamesExports(className, classPrefix2);
    const styles = {
      zIndex,
      ...style
    };
    const lock = () => {
      if (lockScroll && visible) {
        document.body.classList.add("nut-overflow-hidden");
      } else {
        document.body.classList.remove("nut-overflow-hidden");
      }
    };
    const handleClick2 = (e) => {
      if (closeOnOverlayClick) {
        onClick && onClick(e);
      }
    };
    const onHandleOpened = (e) => {
      afterShow && afterShow();
    };
    const onHandleClosed = (e) => {
      afterClose && afterClose();
    };
    return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(
      CSSTransition$1,
      {
        classNames: `${classPrefix2}-slide`,
        unmountOnExit: true,
        timeout: duration,
        in: innerVisible,
        onEntered: onHandleOpened,
        onExited: onHandleClosed
      },
      /* @__PURE__ */ React.createElement("div", { className: classes, style: styles, ...rest, onClick: handleClick2 }, children)
    ));
  };
  Overlay.defaultProps = defaultOverlayProps;
  Overlay.displayName = "NutOverlay";
  const DataContext$2 = React.createContext({});
  const defaultProps$1m = {
    ...ComponentDefaults,
    span: "24",
    offset: "0",
    gutter: "0"
  };
  const Col = (props) => {
    const { className, style, span, offset, children, onClick } = {
      ...defaultProps$1m,
      ...props
    };
    const [colName, setColName] = React.useState("");
    const [colStyle, setColStyle] = React.useState({});
    const { gutter } = React.useContext(DataContext$2);
    const classs = () => {
      const prefixCls2 = "nut-col";
      return `${prefixCls2} ${prefixCls2}-${span} ${gutter ? `${prefixCls2}-gutter` : ""} ${prefixCls2}-offset-${offset}`;
    };
    const getStyle = () => {
      const style2 = {};
      style2.paddingLeft = `${gutter / 2}px`;
      style2.paddingRight = `${gutter / 2}px`;
      return style2;
    };
    React.useEffect(() => {
      setColName(classs);
      setColStyle(getStyle);
    }, [span, offset, gutter]);
    return /* @__PURE__ */ React.createElement(
      "div",
      {
        className: classnamesExports(colName, className),
        style: { ...style, ...colStyle },
        onClick: (e) => {
          onClick && onClick(e, "col");
        }
      },
      children
    );
  };
  Col.defaultProps = defaultProps$1m;
  Col.displayName = "NutCol";
  const defaultProps$1l = {
    ...ComponentDefaults,
    contentPosition: "center",
    direction: "horizontal"
  };
  const classPrefix$k = `nut-divider`;
  const Divider = (props) => {
    const { children, contentPosition, style, className, direction, ...rest } = {
      ...defaultProps$1l,
      ...props
    };
    const classes = direction === "horizontal" ? classnamesExports({
      [`${classPrefix$k}`]: true,
      [`${classPrefix$k}__center`]: children,
      [`${classPrefix$k}__left`]: contentPosition === "left",
      [`${classPrefix$k}__right`]: contentPosition === "right",
      [`${classPrefix$k}__hairline`]: true
    }) : classnamesExports({
      [`${classPrefix$k}`]: true,
      [`${classPrefix$k}__vertical`]: direction === "vertical"
    });
    return /* @__PURE__ */ React.createElement("div", { className: `${classes} ${className || ""}`, style, ...rest }, children);
  };
  Divider.defaultProps = defaultProps$1l;
  Divider.displayName = "NutDivider";
  const gridContext = {
    onClick: (item, index) => {
    }
  };
  const GridContext = React.createContext(gridContext);
  const defaultProps$1k = {
    text: "",
    columns: 4,
    gap: 0,
    center: true,
    square: false,
    reverse: false,
    direction: "vertical"
  };
  const GridItem = (props) => {
    useConfig();
    const {
      children,
      style,
      columns,
      index,
      gap,
      square,
      text,
      center,
      reverse,
      direction,
      className,
      onClick,
      ...rest
    } = {
      ...defaultProps$1k,
      ...props
    };
    const classPrefix2 = "nut-grid-item";
    const classes = classnamesExports(classPrefix2, className);
    const context = React.useContext(GridContext);
    const rootStyle = () => {
      const styles = {
        flexBasis: `${100 / +columns}%`,
        ...style
      };
      if (square) {
        styles.paddingTop = `${100 / +columns}%`;
      } else if (gap) {
        styles.paddingRight = pxCheck(gap);
        if (index >= Number(columns)) {
          styles.marginTop = pxCheck(gap);
        }
      }
      return styles;
    };
    const contentClass = () => {
      return classnamesExports(`${classPrefix2}__content`, {
        [`${classPrefix2}__content--border`]: true,
        [`${classPrefix2}__content--surround`]: gap,
        [`${classPrefix2}__content--center`]: center,
        [`${classPrefix2}__content--square`]: square,
        [`${classPrefix2}__content--reverse`]: reverse,
        [`${classPrefix2}__content--${direction}`]: !!direction
      });
    };
    const handleClick2 = (e) => {
      onClick && onClick(e);
      context.onClick && context.onClick(
        {
          text,
          index,
          columns,
          gap,
          center,
          square,
          reverse,
          direction
        },
        index
      );
    };
    return /* @__PURE__ */ React.createElement(
      "div",
      {
        className: classes,
        style: rootStyle(),
        ...rest,
        onClick: handleClick2
      },
      /* @__PURE__ */ React.createElement("div", { className: contentClass() }, children && /* @__PURE__ */ React.createElement(React.Fragment, null, children), text && /* @__PURE__ */ React.createElement("div", { className: `${classPrefix2}__text` }, text))
    );
  };
  GridItem.defaultProps = defaultProps$1k;
  GridItem.displayName = "NutGridItem";
  const defaultProps$1j = {
    columns: 4,
    gap: 0,
    center: true,
    square: false,
    reverse: false,
    direction: "vertical"
  };
  const Grid = (props) => {
    const {
      children,
      columns,
      gap,
      center,
      square,
      reverse,
      direction,
      style,
      className,
      onClick,
      ...rest
    } = { ...defaultProps$1j, ...props };
    const childrenDom = React.Children.toArray(children);
    const classPrefix2 = "nut-grid";
    const rootClass = () => {
      return classnamesExports(className, classPrefix2, {
        [`${classPrefix2}__border`]: !gap
      });
    };
    const rootStyle = () => {
      let styleSelf = {};
      if (style) {
        styleSelf = style;
      }
      if (gap) {
        styleSelf.paddingLeft = pxCheck(gap);
      }
      return styleSelf;
    };
    return /* @__PURE__ */ React.createElement("div", { className: rootClass(), style: rootStyle(), ...rest }, /* @__PURE__ */ React.createElement(GridContext.Provider, { value: { onClick } }, childrenDom.map((item, idex) => {
      return React.cloneElement(item, {
        index: idex,
        columns,
        center,
        gap,
        square,
        reverse,
        direction
      });
    })));
  };
  Grid.defaultProps = defaultProps$1j;
  Grid.displayName = "NutGrid";
  Grid.Item = GridItem;
  const defaultProps$1i = {};
  const Layout = (props) => {
    ({ ...defaultProps$1i, ...props });
    return /* @__PURE__ */ React.createElement("div", { className: "nut-layout" }, "Layout");
  };
  Layout.defaultProps = defaultProps$1i;
  Layout.displayName = "NutLayout";
  const classPrefix$j = "nut-row";
  const defaultProps$1h = {
    ...ComponentDefaults,
    type: "",
    justify: "start",
    align: "flex-start",
    wrap: "nowrap",
    gutter: "0"
  };
  const Row = (props) => {
    const {
      className,
      style,
      children,
      type: type2,
      justify,
      align,
      wrap,
      gutter,
      onClick
    } = {
      ...defaultProps$1h,
      ...props
    };
    const getClass = (prefix2, type22) => {
      const classType = type22 ? `nut-row-${prefix2}-${type22}` : "";
      const className2 = prefix2 ? classType : `nut-row-${type22}`;
      return className2;
    };
    const getClasses = () => {
      return `
    ${getClass("", type2)}
    ${getClass("justify", justify)}
    ${getClass("align", align)}
    ${getClass("flex", wrap)}
    ${classPrefix$j}
   `;
    };
    const parentRow = {
      gutter
    };
    return /* @__PURE__ */ React.createElement(DataContext$2.Provider, { value: parentRow }, React.createElement(
      "div",
      {
        className: classnamesExports(getClasses(), className),
        style,
        onClick: (e) => {
          onClick && onClick(e, "row");
        }
      },
      children
    ));
  };
  Row.defaultProps = defaultProps$1h;
  Row.displayName = "NutRow";
  const prefixCls = "nut-space";
  const defaultProps$1g = {
    direction: "horizontal"
  };
  const Space = (props) => {
    const { className, style, children, wrap, align, direction, justify } = {
      ...defaultProps$1g,
      ...props
    };
    const cls = classnamesExports(
      className,
      prefixCls,
      wrap && `${prefixCls}-wrap`,
      direction && `${prefixCls}-${direction}`,
      align && `${prefixCls}-align-${align}`,
      justify && `${prefixCls}-justify-${justify}`
    );
    return /* @__PURE__ */ React.createElement("div", { className: cls, style }, React.Children.map(children, (child) => {
      return child !== null && child !== void 0 && /* @__PURE__ */ React.createElement("div", { className: `${prefixCls}-item` }, child);
    }));
  };
  Space.defaultProps = defaultProps$1g;
  Space.displayName = "NutSpace";
  const canUseDom = !!(typeof window !== "undefined" && typeof document !== "undefined" && window.document && window.document.createElement);
  const defaultRoot = canUseDom ? window : void 0;
  const overflowStylePatterns = ["scroll", "auto", "overlay"];
  function isElement(node) {
    const ELEMENT_NODE_TYPE = 1;
    return node.nodeType === ELEMENT_NODE_TYPE;
  }
  function getScrollParent(el, root2 = defaultRoot) {
    let node = el;
    while (node && node !== root2 && isElement(node)) {
      if (node === document.body) {
        return root2;
      }
      const { overflowY } = window.getComputedStyle(node);
      if (overflowStylePatterns.includes(overflowY) && node.scrollHeight > node.clientHeight) {
        return node;
      }
      node = node.parentNode;
    }
    return root2;
  }
  function isWindow(val) {
    return val === window;
  }
  const getRect = (elementRef) => {
    const element = elementRef;
    if (isWindow(element)) {
      const width = element.innerWidth;
      const height = element.innerHeight;
      return {
        top: 0,
        left: 0,
        right: width,
        bottom: height,
        width,
        height
      };
    }
    if (element && element.getBoundingClientRect) {
      return element.getBoundingClientRect();
    }
    return {
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      width: 0,
      height: 0
    };
  };
  function useWatch(dep, callback, config2 = { immediate: false }) {
    const { immediate } = config2;
    const prev = React.useRef();
    const inited = React.useRef(false);
    const stop2 = React.useRef(false);
    React.useEffect(() => {
      const execute = () => callback(prev.current);
      if (!stop2.current) {
        if (!inited.current) {
          inited.current = true;
          if (immediate) {
            execute();
          }
        } else {
          execute();
        }
        prev.current = dep;
      }
    }, [dep]);
    return () => {
      stop2.current = true;
    };
  }
  const defaultProps$1f = {
    ...ComponentDefaults,
    position: "top",
    threshold: 0,
    zIndex: 2e3
  };
  const classPrefix$i = "nut-sticky";
  const Sticky = (props) => {
    const {
      position,
      zIndex,
      children,
      container,
      style,
      className,
      threshold,
      onChange,
      ...rest
    } = { ...defaultProps$1f, ...props };
    const stickyRef = React.useRef(null);
    const rootRef = React.useRef(null);
    const [isFixed, setIsFixed] = React.useState(false);
    const [stickyStyle, setStickyStyle] = React.useState({
      [position]: `${threshold}px`,
      zIndex
    });
    const [rootStyle, setRootStyle] = React.useState({});
    const getElement = React.useCallback(() => {
      return getScrollParent(rootRef.current);
    }, []);
    React.useEffect(() => {
      if (position === "top")
        return;
      const containerEle = container == null ? void 0 : container.current;
      if (!rootRef.current && !containerEle)
        return;
      const rootRect = getRect(rootRef.current);
      const containerRect = getRect(containerEle);
      const clientHeight = document.documentElement.clientHeight;
      const stCurrent = stickyRef.current;
      const stickyRect = getRect(stCurrent);
      let fixed = clientHeight - threshold < rootRect.bottom;
      if (containerEle) {
        fixed = containerRect.bottom > clientHeight - threshold - stickyRect.height && clientHeight - threshold - stickyRect.height > containerRect.top;
      }
      const defaultPostVal = fixed ? "fixed" : "inherit";
      setStickyStyle((prev) => {
        return {
          ...prev,
          position: defaultPostVal
        };
      });
      setIsFixed(fixed);
    }, [position, container, threshold]);
    const handleScroll = React.useCallback(() => {
      const containerEle = container == null ? void 0 : container.current;
      if (!rootRef.current && !containerEle)
        return;
      const rootRect = getRect(rootRef.current);
      const stCurrent = stickyRef.current;
      const stickyRect = getRect(stCurrent);
      const containerRect = getRect(containerEle);
      if (rootRect.height) {
        setRootStyle((prev) => {
          return {
            ...prev,
            height: rootRect.height
          };
        });
      }
      const getFixed = () => {
        let fixed2 = false;
        if (position === "top") {
          fixed2 = containerEle ? threshold > rootRect.top && containerRect.bottom > 0 : threshold > rootRect.top;
        } else {
          const clientHeight = document.documentElement.clientHeight;
          fixed2 = containerEle ? containerRect.bottom > 0 && clientHeight - threshold - stickyRect.height > containerRect.top : clientHeight - threshold < rootRect.bottom;
        }
        return {
          position: fixed2 ? "fixed" : "inherit",
          fixed: fixed2
        };
      };
      const getTransform = () => {
        if (position === "top") {
          if (containerEle) {
            const diff = containerRect.bottom - threshold - stickyRect.height;
            const transform = diff < 0 ? diff : 0;
            return { transform: `translate3d(0, ${transform}px, 0)` };
          }
          return {};
        }
        if (position === "bottom") {
          if (containerEle) {
            const clientHeight = document.documentElement.clientHeight;
            const diff = containerRect.bottom - (clientHeight - threshold);
            const transform = diff < 0 ? diff : 0;
            return { transform: `translate3d(0, ${transform}px, 0)` };
          }
          return {};
        }
        return {};
      };
      const fixed = getFixed();
      setStickyStyle((prev) => {
        return {
          ...prev,
          ...getTransform(),
          position: fixed.position
        };
      });
      setIsFixed(fixed.fixed);
    }, [position, threshold, container]);
    useWatch(isFixed, () => {
      onChange && onChange(isFixed);
    });
    React.useEffect(() => {
      const el = getElement();
      el.addEventListener("scroll", handleScroll, false);
      return () => {
        el.removeEventListener("scroll", handleScroll);
      };
    }, [getElement, handleScroll]);
    return /* @__PURE__ */ React.createElement(
      "div",
      {
        ref: rootRef,
        style: { ...style, ...rootStyle },
        className: classnamesExports(classPrefix$i, className),
        ...rest
      },
      /* @__PURE__ */ React.createElement("div", { className: "nut-sticky--box", ref: stickyRef, style: stickyStyle }, children)
    );
  };
  Sticky.defaultProps = defaultProps$1f;
  Sticky.displayName = "NutSticky";
  const defaultProps$1e = {
    ...ComponentDefaults,
    target: "",
    threshold: 200,
    zIndex: 10,
    duration: 1e3
  };
  const BackTop = (props) => {
    const {
      children,
      target,
      threshold,
      zIndex,
      className,
      duration,
      style,
      onClick
    } = {
      ...defaultProps$1e,
      ...props
    };
    const classPrefix2 = "nut-backtop";
    const [backTop, SetBackTop] = React.useState(false);
    const [scrollTop, SetScrollTop] = React.useState(0);
    let startTime = 0;
    const scrollEl = React.useRef(null);
    React.useEffect(() => {
      init();
      return () => removeEventListener();
    }, []);
    const init = () => {
      if (target && document.getElementById(target)) {
        scrollEl.current = document.getElementById(target);
      } else {
        scrollEl.current = window;
      }
      addEventListener();
      initCancelAniFrame();
    };
    const scrollListener = () => {
      let top = null;
      if (scrollEl.current instanceof Window) {
        top = scrollEl.current.pageYOffset;
        SetScrollTop(top);
      } else {
        top = scrollEl.current.scrollTop;
        SetScrollTop(top);
      }
      const showBtn = top >= threshold;
      SetBackTop(showBtn);
    };
    const scroll = (y2 = 0) => {
      if (scrollEl.current instanceof Window) {
        window.scrollTo(0, y2);
      } else {
        scrollEl.current.scrollTop = y2;
        window.scrollTo(0, y2);
      }
    };
    const scrollAnimation = () => {
      let cid = requestAniFrame2()(function fn() {
        const t = duration - Math.max(0, startTime - +/* @__PURE__ */ new Date() + duration / 2);
        const y2 = t * -scrollTop / duration + scrollTop;
        scroll(y2);
        cid = requestAniFrame2()(fn);
        if (t === duration || y2 === 0) {
          window.cancelAnimationFrame(cid);
        }
      });
    };
    const initCancelAniFrame = () => {
      window.cancelAnimationFrame = window.webkitCancelAnimationFrame;
    };
    const requestAniFrame2 = () => {
      return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function(callback) {
        window.setTimeout(callback, 1e3 / 60);
      };
    };
    function addEventListener() {
      var _a2, _b;
      (_a2 = scrollEl.current) == null ? void 0 : _a2.addEventListener("scroll", scrollListener, false);
      (_b = scrollEl.current) == null ? void 0 : _b.addEventListener("resize", scrollListener, false);
    }
    function removeEventListener() {
      var _a2, _b;
      (_a2 = scrollEl.current) == null ? void 0 : _a2.removeEventListener("scroll", scrollListener, false);
      (_b = scrollEl.current) == null ? void 0 : _b.removeEventListener("resize", scrollListener, false);
    }
    const goTop = (e) => {
      onClick && onClick(e);
      const otime = +/* @__PURE__ */ new Date();
      startTime = otime;
      duration > 0 ? scrollAnimation() : scroll();
    };
    const styles = style ? {
      zIndex,
      ...style
    } : {
      right: "10px",
      bottom: "20px",
      zIndex
    };
    return /* @__PURE__ */ React.createElement(
      "div",
      {
        className: classnamesExports(classPrefix2, className, {
          show: backTop
        }),
        style: styles,
        onClick: (e) => {
          goTop(e);
        }
      },
      children || /* @__PURE__ */ React.createElement(y$2, { width: 19, height: 19, className: "nut-backtop-main" })
    );
  };
  BackTop.defaultProps = defaultProps$1e;
  BackTop.displayName = "NutBackTop";
  function clamp$1(v, min, max) {
    return Math.max(min, Math.min(v, max));
  }
  const V = {
    toVector(v, fallback) {
      if (v === void 0)
        v = fallback;
      return Array.isArray(v) ? v : [v, v];
    },
    add(v1, v2) {
      return [v1[0] + v2[0], v1[1] + v2[1]];
    },
    sub(v1, v2) {
      return [v1[0] - v2[0], v1[1] - v2[1]];
    },
    addTo(v1, v2) {
      v1[0] += v2[0];
      v1[1] += v2[1];
    },
    subTo(v1, v2) {
      v1[0] -= v2[0];
      v1[1] -= v2[1];
    }
  };
  function rubberband$1(distance, dimension, constant) {
    if (dimension === 0 || Math.abs(dimension) === Infinity)
      return Math.pow(distance, constant * 5);
    return distance * dimension * constant / (dimension + constant * distance);
  }
  function rubberbandIfOutOfBounds$1(position, min, max, constant = 0.15) {
    if (constant === 0)
      return clamp$1(position, min, max);
    if (position < min)
      return -rubberband$1(min - position, max - min, constant) + min;
    if (position > max)
      return +rubberband$1(position - max, max - min, constant) + max;
    return position;
  }
  function computeRubberband(bounds, [Vx, Vy], [Rx, Ry]) {
    const [[X0, X1], [Y0, Y1]] = bounds;
    return [rubberbandIfOutOfBounds$1(Vx, X0, X1, Rx), rubberbandIfOutOfBounds$1(Vy, Y0, Y1, Ry)];
  }
  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }
    return obj;
  }
  function ownKeys(object2, enumerableOnly) {
    var keys = Object.keys(object2);
    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object2);
      enumerableOnly && (symbols = symbols.filter(function(sym) {
        return Object.getOwnPropertyDescriptor(object2, sym).enumerable;
      })), keys.push.apply(keys, symbols);
    }
    return keys;
  }
  function _objectSpread2(target) {
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
  const EVENT_TYPE_MAP = {
    pointer: {
      start: "down",
      change: "move",
      end: "up"
    },
    mouse: {
      start: "down",
      change: "move",
      end: "up"
    },
    touch: {
      start: "start",
      change: "move",
      end: "end"
    },
    gesture: {
      start: "start",
      change: "change",
      end: "end"
    }
  };
  function capitalize(string2) {
    if (!string2)
      return "";
    return string2[0].toUpperCase() + string2.slice(1);
  }
  const actionsWithoutCaptureSupported = ["enter", "leave"];
  function hasCapture(capture = false, actionKey) {
    return capture && !actionsWithoutCaptureSupported.includes(actionKey);
  }
  function toHandlerProp(device, action = "", capture = false) {
    const deviceProps = EVENT_TYPE_MAP[device];
    const actionKey = deviceProps ? deviceProps[action] || action : action;
    return "on" + capitalize(device) + capitalize(actionKey) + (hasCapture(capture, actionKey) ? "Capture" : "");
  }
  const pointerCaptureEvents = ["gotpointercapture", "lostpointercapture"];
  function parseProp(prop) {
    let eventKey = prop.substring(2).toLowerCase();
    const passive = !!~eventKey.indexOf("passive");
    if (passive)
      eventKey = eventKey.replace("passive", "");
    const captureKey = pointerCaptureEvents.includes(eventKey) ? "capturecapture" : "capture";
    const capture = !!~eventKey.indexOf(captureKey);
    if (capture)
      eventKey = eventKey.replace("capture", "");
    return {
      device: eventKey,
      capture,
      passive
    };
  }
  function toDomEventType(device, action = "") {
    const deviceProps = EVENT_TYPE_MAP[device];
    const actionKey = deviceProps ? deviceProps[action] || action : action;
    return device + actionKey;
  }
  function isTouch(event) {
    return "touches" in event;
  }
  function getPointerType(event) {
    if (isTouch(event))
      return "touch";
    if ("pointerType" in event)
      return event.pointerType;
    return "mouse";
  }
  function getCurrentTargetTouchList(event) {
    return Array.from(event.touches).filter((e) => {
      var _event$currentTarget, _event$currentTarget$;
      return e.target === event.currentTarget || ((_event$currentTarget = event.currentTarget) === null || _event$currentTarget === void 0 ? void 0 : (_event$currentTarget$ = _event$currentTarget.contains) === null || _event$currentTarget$ === void 0 ? void 0 : _event$currentTarget$.call(_event$currentTarget, e.target));
    });
  }
  function getTouchList(event) {
    return event.type === "touchend" || event.type === "touchcancel" ? event.changedTouches : event.targetTouches;
  }
  function getValueEvent(event) {
    return isTouch(event) ? getTouchList(event)[0] : event;
  }
  function distanceAngle(P1, P2) {
    const dx = P2.clientX - P1.clientX;
    const dy = P2.clientY - P1.clientY;
    const cx = (P2.clientX + P1.clientX) / 2;
    const cy = (P2.clientY + P1.clientY) / 2;
    const distance = Math.hypot(dx, dy);
    const angle = -(Math.atan2(dx, dy) * 180) / Math.PI;
    const origin = [cx, cy];
    return {
      angle,
      distance,
      origin
    };
  }
  function touchIds(event) {
    return getCurrentTargetTouchList(event).map((touch) => touch.identifier);
  }
  function touchDistanceAngle(event, ids) {
    const [P1, P2] = Array.from(event.touches).filter((touch) => ids.includes(touch.identifier));
    return distanceAngle(P1, P2);
  }
  function pointerId(event) {
    const valueEvent = getValueEvent(event);
    return isTouch(event) ? valueEvent.identifier : valueEvent.pointerId;
  }
  function pointerValues(event) {
    const valueEvent = getValueEvent(event);
    return [valueEvent.clientX, valueEvent.clientY];
  }
  const LINE_HEIGHT = 40;
  const PAGE_HEIGHT = 800;
  function wheelValues(event) {
    let {
      deltaX,
      deltaY,
      deltaMode
    } = event;
    if (deltaMode === 1) {
      deltaX *= LINE_HEIGHT;
      deltaY *= LINE_HEIGHT;
    } else if (deltaMode === 2) {
      deltaX *= PAGE_HEIGHT;
      deltaY *= PAGE_HEIGHT;
    }
    return [deltaX, deltaY];
  }
  function scrollValues(event) {
    var _ref, _ref2;
    const {
      scrollX,
      scrollY,
      scrollLeft,
      scrollTop
    } = event.currentTarget;
    return [(_ref = scrollX !== null && scrollX !== void 0 ? scrollX : scrollLeft) !== null && _ref !== void 0 ? _ref : 0, (_ref2 = scrollY !== null && scrollY !== void 0 ? scrollY : scrollTop) !== null && _ref2 !== void 0 ? _ref2 : 0];
  }
  function getEventDetails(event) {
    const payload = {};
    if ("buttons" in event)
      payload.buttons = event.buttons;
    if ("shiftKey" in event) {
      const {
        shiftKey,
        altKey,
        metaKey,
        ctrlKey
      } = event;
      Object.assign(payload, {
        shiftKey,
        altKey,
        metaKey,
        ctrlKey
      });
    }
    return payload;
  }
  function call$1(v, ...args) {
    if (typeof v === "function") {
      return v(...args);
    } else {
      return v;
    }
  }
  function noop$1() {
  }
  function chain(...fns) {
    if (fns.length === 0)
      return noop$1;
    if (fns.length === 1)
      return fns[0];
    return function() {
      let result;
      for (const fn of fns) {
        result = fn.apply(this, arguments) || result;
      }
      return result;
    };
  }
  function assignDefault(value, fallback) {
    return Object.assign({}, fallback, value || {});
  }
  const BEFORE_LAST_KINEMATICS_DELAY = 32;
  class Engine {
    constructor(ctrl, args, key) {
      this.ctrl = ctrl;
      this.args = args;
      this.key = key;
      if (!this.state) {
        this.state = {};
        this.computeValues([0, 0]);
        this.computeInitial();
        if (this.init)
          this.init();
        this.reset();
      }
    }
    get state() {
      return this.ctrl.state[this.key];
    }
    set state(state) {
      this.ctrl.state[this.key] = state;
    }
    get shared() {
      return this.ctrl.state.shared;
    }
    get eventStore() {
      return this.ctrl.gestureEventStores[this.key];
    }
    get timeoutStore() {
      return this.ctrl.gestureTimeoutStores[this.key];
    }
    get config() {
      return this.ctrl.config[this.key];
    }
    get sharedConfig() {
      return this.ctrl.config.shared;
    }
    get handler() {
      return this.ctrl.handlers[this.key];
    }
    reset() {
      const {
        state,
        shared,
        ingKey,
        args
      } = this;
      shared[ingKey] = state._active = state.active = state._blocked = state._force = false;
      state._step = [false, false];
      state.intentional = false;
      state._movement = [0, 0];
      state._distance = [0, 0];
      state._direction = [0, 0];
      state._delta = [0, 0];
      state._bounds = [[-Infinity, Infinity], [-Infinity, Infinity]];
      state.args = args;
      state.axis = void 0;
      state.memo = void 0;
      state.elapsedTime = 0;
      state.direction = [0, 0];
      state.distance = [0, 0];
      state.overflow = [0, 0];
      state._movementBound = [false, false];
      state.velocity = [0, 0];
      state.movement = [0, 0];
      state.delta = [0, 0];
      state.timeStamp = 0;
    }
    start(event) {
      const state = this.state;
      const config2 = this.config;
      if (!state._active) {
        this.reset();
        this.computeInitial();
        state._active = true;
        state.target = event.target;
        state.currentTarget = event.currentTarget;
        state.lastOffset = config2.from ? call$1(config2.from, state) : state.offset;
        state.offset = state.lastOffset;
      }
      state.startTime = state.timeStamp = event.timeStamp;
    }
    computeValues(values) {
      const state = this.state;
      state._values = values;
      state.values = this.config.transform(values);
    }
    computeInitial() {
      const state = this.state;
      state._initial = state._values;
      state.initial = state.values;
    }
    compute(event) {
      const {
        state,
        config: config2,
        shared
      } = this;
      state.args = this.args;
      let dt = 0;
      if (event) {
        state.event = event;
        if (config2.preventDefault && event.cancelable)
          state.event.preventDefault();
        state.type = event.type;
        shared.touches = this.ctrl.pointerIds.size || this.ctrl.touchIds.size;
        shared.locked = !!document.pointerLockElement;
        Object.assign(shared, getEventDetails(event));
        shared.down = shared.pressed = shared.buttons % 2 === 1 || shared.touches > 0;
        dt = event.timeStamp - state.timeStamp;
        state.timeStamp = event.timeStamp;
        state.elapsedTime = state.timeStamp - state.startTime;
      }
      if (state._active) {
        const _absoluteDelta = state._delta.map(Math.abs);
        V.addTo(state._distance, _absoluteDelta);
      }
      if (this.axisIntent)
        this.axisIntent(event);
      const [_m0, _m1] = state._movement;
      const [t0, t1] = config2.threshold;
      const {
        _step,
        values
      } = state;
      if (config2.hasCustomTransform) {
        if (_step[0] === false)
          _step[0] = Math.abs(_m0) >= t0 && values[0];
        if (_step[1] === false)
          _step[1] = Math.abs(_m1) >= t1 && values[1];
      } else {
        if (_step[0] === false)
          _step[0] = Math.abs(_m0) >= t0 && Math.sign(_m0) * t0;
        if (_step[1] === false)
          _step[1] = Math.abs(_m1) >= t1 && Math.sign(_m1) * t1;
      }
      state.intentional = _step[0] !== false || _step[1] !== false;
      if (!state.intentional)
        return;
      const movement = [0, 0];
      if (config2.hasCustomTransform) {
        const [v0, v1] = values;
        movement[0] = _step[0] !== false ? v0 - _step[0] : 0;
        movement[1] = _step[1] !== false ? v1 - _step[1] : 0;
      } else {
        movement[0] = _step[0] !== false ? _m0 - _step[0] : 0;
        movement[1] = _step[1] !== false ? _m1 - _step[1] : 0;
      }
      if (this.restrictToAxis && !state._blocked)
        this.restrictToAxis(movement);
      const previousOffset = state.offset;
      const gestureIsActive = state._active && !state._blocked || state.active;
      if (gestureIsActive) {
        state.first = state._active && !state.active;
        state.last = !state._active && state.active;
        state.active = shared[this.ingKey] = state._active;
        if (event) {
          if (state.first) {
            if ("bounds" in config2)
              state._bounds = call$1(config2.bounds, state);
            if (this.setup)
              this.setup();
          }
          state.movement = movement;
          this.computeOffset();
        }
      }
      const [ox, oy] = state.offset;
      const [[x0, x1], [y0, y1]] = state._bounds;
      state.overflow = [ox < x0 ? -1 : ox > x1 ? 1 : 0, oy < y0 ? -1 : oy > y1 ? 1 : 0];
      state._movementBound[0] = state.overflow[0] ? state._movementBound[0] === false ? state._movement[0] : state._movementBound[0] : false;
      state._movementBound[1] = state.overflow[1] ? state._movementBound[1] === false ? state._movement[1] : state._movementBound[1] : false;
      const rubberband2 = state._active ? config2.rubberband || [0, 0] : [0, 0];
      state.offset = computeRubberband(state._bounds, state.offset, rubberband2);
      state.delta = V.sub(state.offset, previousOffset);
      this.computeMovement();
      if (gestureIsActive && (!state.last || dt > BEFORE_LAST_KINEMATICS_DELAY)) {
        state.delta = V.sub(state.offset, previousOffset);
        const absoluteDelta = state.delta.map(Math.abs);
        V.addTo(state.distance, absoluteDelta);
        state.direction = state.delta.map(Math.sign);
        state._direction = state._delta.map(Math.sign);
        if (!state.first && dt > 0) {
          state.velocity = [absoluteDelta[0] / dt, absoluteDelta[1] / dt];
        }
      }
    }
    emit() {
      const state = this.state;
      const shared = this.shared;
      const config2 = this.config;
      if (!state._active)
        this.clean();
      if ((state._blocked || !state.intentional) && !state._force && !config2.triggerAllEvents)
        return;
      const memo = this.handler(_objectSpread2(_objectSpread2(_objectSpread2({}, shared), state), {}, {
        [this.aliasKey]: state.values
      }));
      if (memo !== void 0)
        state.memo = memo;
    }
    clean() {
      this.eventStore.clean();
      this.timeoutStore.clean();
    }
  }
  function selectAxis([dx, dy], threshold) {
    const absDx = Math.abs(dx);
    const absDy = Math.abs(dy);
    if (absDx > absDy && absDx > threshold) {
      return "x";
    }
    if (absDy > absDx && absDy > threshold) {
      return "y";
    }
    return void 0;
  }
  class CoordinatesEngine extends Engine {
    constructor(...args) {
      super(...args);
      _defineProperty(this, "aliasKey", "xy");
    }
    reset() {
      super.reset();
      this.state.axis = void 0;
    }
    init() {
      this.state.offset = [0, 0];
      this.state.lastOffset = [0, 0];
    }
    computeOffset() {
      this.state.offset = V.add(this.state.lastOffset, this.state.movement);
    }
    computeMovement() {
      this.state.movement = V.sub(this.state.offset, this.state.lastOffset);
    }
    axisIntent(event) {
      const state = this.state;
      const config2 = this.config;
      if (!state.axis && event) {
        const threshold = typeof config2.axisThreshold === "object" ? config2.axisThreshold[getPointerType(event)] : config2.axisThreshold;
        state.axis = selectAxis(state._movement, threshold);
      }
      state._blocked = (config2.lockDirection || !!config2.axis) && !state.axis || !!config2.axis && config2.axis !== state.axis;
    }
    restrictToAxis(v) {
      if (this.config.axis || this.config.lockDirection) {
        switch (this.state.axis) {
          case "x":
            v[1] = 0;
            break;
          case "y":
            v[0] = 0;
            break;
        }
      }
    }
  }
  const identity = (v) => v;
  const DEFAULT_RUBBERBAND = 0.15;
  const commonConfigResolver = {
    enabled(value = true) {
      return value;
    },
    eventOptions(value, _k, config2) {
      return _objectSpread2(_objectSpread2({}, config2.shared.eventOptions), value);
    },
    preventDefault(value = false) {
      return value;
    },
    triggerAllEvents(value = false) {
      return value;
    },
    rubberband(value = 0) {
      switch (value) {
        case true:
          return [DEFAULT_RUBBERBAND, DEFAULT_RUBBERBAND];
        case false:
          return [0, 0];
        default:
          return V.toVector(value);
      }
    },
    from(value) {
      if (typeof value === "function")
        return value;
      if (value != null)
        return V.toVector(value);
    },
    transform(value, _k, config2) {
      const transform = value || config2.shared.transform;
      this.hasCustomTransform = !!transform;
      if (process.env.NODE_ENV === "development") {
        const originalTransform = transform || identity;
        return (v) => {
          const r = originalTransform(v);
          if (!isFinite(r[0]) || !isFinite(r[1])) {
            console.warn(`[@use-gesture]: config.transform() must produce a valid result, but it was: [${r[0]},${[1]}]`);
          }
          return r;
        };
      }
      return transform || identity;
    },
    threshold(value) {
      return V.toVector(value, 0);
    }
  };
  if (process.env.NODE_ENV === "development") {
    Object.assign(commonConfigResolver, {
      domTarget(value) {
        if (value !== void 0) {
          throw Error(`[@use-gesture]: \`domTarget\` option has been renamed to \`target\`.`);
        }
        return NaN;
      },
      lockDirection(value) {
        if (value !== void 0) {
          throw Error(`[@use-gesture]: \`lockDirection\` option has been merged with \`axis\`. Use it as in \`{ axis: 'lock' }\``);
        }
        return NaN;
      },
      initial(value) {
        if (value !== void 0) {
          throw Error(`[@use-gesture]: \`initial\` option has been renamed to \`from\`.`);
        }
        return NaN;
      }
    });
  }
  const DEFAULT_AXIS_THRESHOLD = 0;
  const coordinatesConfigResolver = _objectSpread2(_objectSpread2({}, commonConfigResolver), {}, {
    axis(_v, _k, {
      axis
    }) {
      this.lockDirection = axis === "lock";
      if (!this.lockDirection)
        return axis;
    },
    axisThreshold(value = DEFAULT_AXIS_THRESHOLD) {
      return value;
    },
    bounds(value = {}) {
      if (typeof value === "function") {
        return (state) => coordinatesConfigResolver.bounds(value(state));
      }
      if ("current" in value) {
        return () => value.current;
      }
      if (typeof HTMLElement === "function" && value instanceof HTMLElement) {
        return value;
      }
      const {
        left = -Infinity,
        right = Infinity,
        top = -Infinity,
        bottom = Infinity
      } = value;
      return [[left, right], [top, bottom]];
    }
  });
  const DISPLACEMENT = 10;
  const KEYS_DELTA_MAP = {
    ArrowRight: (factor = 1) => [DISPLACEMENT * factor, 0],
    ArrowLeft: (factor = 1) => [-DISPLACEMENT * factor, 0],
    ArrowUp: (factor = 1) => [0, -DISPLACEMENT * factor],
    ArrowDown: (factor = 1) => [0, DISPLACEMENT * factor]
  };
  class DragEngine extends CoordinatesEngine {
    constructor(...args) {
      super(...args);
      _defineProperty(this, "ingKey", "dragging");
    }
    reset() {
      super.reset();
      const state = this.state;
      state._pointerId = void 0;
      state._pointerActive = false;
      state._keyboardActive = false;
      state._preventScroll = false;
      state._delayed = false;
      state.swipe = [0, 0];
      state.tap = false;
      state.canceled = false;
      state.cancel = this.cancel.bind(this);
    }
    setup() {
      const state = this.state;
      if (state._bounds instanceof HTMLElement) {
        const boundRect = state._bounds.getBoundingClientRect();
        const targetRect = state.currentTarget.getBoundingClientRect();
        const _bounds = {
          left: boundRect.left - targetRect.left + state.offset[0],
          right: boundRect.right - targetRect.right + state.offset[0],
          top: boundRect.top - targetRect.top + state.offset[1],
          bottom: boundRect.bottom - targetRect.bottom + state.offset[1]
        };
        state._bounds = coordinatesConfigResolver.bounds(_bounds);
      }
    }
    cancel() {
      const state = this.state;
      if (state.canceled)
        return;
      state.canceled = true;
      state._active = false;
      setTimeout(() => {
        this.compute();
        this.emit();
      }, 0);
    }
    setActive() {
      this.state._active = this.state._pointerActive || this.state._keyboardActive;
    }
    clean() {
      this.pointerClean();
      this.state._pointerActive = false;
      this.state._keyboardActive = false;
      super.clean();
    }
    pointerDown(event) {
      const config2 = this.config;
      const state = this.state;
      if (event.buttons != null && (Array.isArray(config2.pointerButtons) ? !config2.pointerButtons.includes(event.buttons) : config2.pointerButtons !== -1 && config2.pointerButtons !== event.buttons))
        return;
      const ctrlIds = this.ctrl.setEventIds(event);
      if (config2.pointerCapture) {
        event.target.setPointerCapture(event.pointerId);
      }
      if (ctrlIds && ctrlIds.size > 1 && state._pointerActive)
        return;
      this.start(event);
      this.setupPointer(event);
      state._pointerId = pointerId(event);
      state._pointerActive = true;
      this.computeValues(pointerValues(event));
      this.computeInitial();
      if (config2.preventScrollAxis && getPointerType(event) !== "mouse") {
        state._active = false;
        this.setupScrollPrevention(event);
      } else if (config2.delay > 0) {
        this.setupDelayTrigger(event);
        if (config2.triggerAllEvents) {
          this.compute(event);
          this.emit();
        }
      } else {
        this.startPointerDrag(event);
      }
    }
    startPointerDrag(event) {
      const state = this.state;
      state._active = true;
      state._preventScroll = true;
      state._delayed = false;
      this.compute(event);
      this.emit();
    }
    pointerMove(event) {
      const state = this.state;
      const config2 = this.config;
      if (!state._pointerActive)
        return;
      if (state.type === event.type && event.timeStamp === state.timeStamp)
        return;
      const id = pointerId(event);
      if (state._pointerId !== void 0 && id !== state._pointerId)
        return;
      const _values = pointerValues(event);
      if (document.pointerLockElement === event.target) {
        state._delta = [event.movementX, event.movementY];
      } else {
        state._delta = V.sub(_values, state._values);
        this.computeValues(_values);
      }
      V.addTo(state._movement, state._delta);
      this.compute(event);
      if (state._delayed && state.intentional) {
        this.timeoutStore.remove("dragDelay");
        state.active = false;
        this.startPointerDrag(event);
        return;
      }
      if (config2.preventScrollAxis && !state._preventScroll) {
        if (state.axis) {
          if (state.axis === config2.preventScrollAxis || config2.preventScrollAxis === "xy") {
            state._active = false;
            this.clean();
            return;
          } else {
            this.timeoutStore.remove("startPointerDrag");
            this.startPointerDrag(event);
            return;
          }
        } else {
          return;
        }
      }
      this.emit();
    }
    pointerUp(event) {
      this.ctrl.setEventIds(event);
      try {
        if (this.config.pointerCapture && event.target.hasPointerCapture(event.pointerId)) {
          ;
          event.target.releasePointerCapture(event.pointerId);
        }
      } catch (_unused) {
        if (process.env.NODE_ENV === "development") {
          console.warn(`[@use-gesture]: If you see this message, it's likely that you're using an outdated version of \`@react-three/fiber\`. 

Please upgrade to the latest version.`);
        }
      }
      const state = this.state;
      const config2 = this.config;
      if (!state._active || !state._pointerActive)
        return;
      const id = pointerId(event);
      if (state._pointerId !== void 0 && id !== state._pointerId)
        return;
      this.state._pointerActive = false;
      this.setActive();
      this.compute(event);
      const [dx, dy] = state._distance;
      state.tap = dx <= config2.tapsThreshold && dy <= config2.tapsThreshold;
      if (state.tap && config2.filterTaps) {
        state._force = true;
      } else {
        const [dirx, diry] = state.direction;
        const [vx, vy] = state.velocity;
        const [mx, my] = state.movement;
        const [svx, svy] = config2.swipe.velocity;
        const [sx, sy] = config2.swipe.distance;
        const sdt = config2.swipe.duration;
        if (state.elapsedTime < sdt) {
          if (Math.abs(vx) > svx && Math.abs(mx) > sx)
            state.swipe[0] = dirx;
          if (Math.abs(vy) > svy && Math.abs(my) > sy)
            state.swipe[1] = diry;
        }
      }
      this.emit();
    }
    pointerClick(event) {
      if (!this.state.tap && event.detail > 0) {
        event.preventDefault();
        event.stopPropagation();
      }
    }
    setupPointer(event) {
      const config2 = this.config;
      const device = config2.device;
      if (process.env.NODE_ENV === "development") {
        try {
          if (device === "pointer" && config2.preventScrollDelay === void 0) {
            const currentTarget = "uv" in event ? event.sourceEvent.currentTarget : event.currentTarget;
            const style = window.getComputedStyle(currentTarget);
            if (style.touchAction === "auto") {
              console.warn(`[@use-gesture]: The drag target has its \`touch-action\` style property set to \`auto\`. It is recommended to add \`touch-action: 'none'\` so that the drag gesture behaves correctly on touch-enabled devices. For more information read this: https://use-gesture.netlify.app/docs/extras/#touch-action.

This message will only show in development mode. It won't appear in production. If this is intended, you can ignore it.`, currentTarget);
            }
          }
        } catch (_unused2) {
        }
      }
      if (config2.pointerLock) {
        event.currentTarget.requestPointerLock();
      }
      if (!config2.pointerCapture) {
        this.eventStore.add(this.sharedConfig.window, device, "change", this.pointerMove.bind(this));
        this.eventStore.add(this.sharedConfig.window, device, "end", this.pointerUp.bind(this));
        this.eventStore.add(this.sharedConfig.window, device, "cancel", this.pointerUp.bind(this));
      }
    }
    pointerClean() {
      if (this.config.pointerLock && document.pointerLockElement === this.state.currentTarget) {
        document.exitPointerLock();
      }
    }
    preventScroll(event) {
      if (this.state._preventScroll && event.cancelable) {
        event.preventDefault();
      }
    }
    setupScrollPrevention(event) {
      this.state._preventScroll = false;
      persistEvent(event);
      const remove = this.eventStore.add(this.sharedConfig.window, "touch", "change", this.preventScroll.bind(this), {
        passive: false
      });
      this.eventStore.add(this.sharedConfig.window, "touch", "end", remove);
      this.eventStore.add(this.sharedConfig.window, "touch", "cancel", remove);
      this.timeoutStore.add("startPointerDrag", this.startPointerDrag.bind(this), this.config.preventScrollDelay, event);
    }
    setupDelayTrigger(event) {
      this.state._delayed = true;
      this.timeoutStore.add("dragDelay", () => {
        this.state._step = [0, 0];
        this.startPointerDrag(event);
      }, this.config.delay);
    }
    keyDown(event) {
      const deltaFn = KEYS_DELTA_MAP[event.key];
      if (deltaFn) {
        const state = this.state;
        const factor = event.shiftKey ? 10 : event.altKey ? 0.1 : 1;
        this.start(event);
        state._delta = deltaFn(factor);
        state._keyboardActive = true;
        V.addTo(state._movement, state._delta);
        this.compute(event);
        this.emit();
      }
    }
    keyUp(event) {
      if (!(event.key in KEYS_DELTA_MAP))
        return;
      this.state._keyboardActive = false;
      this.setActive();
      this.compute(event);
      this.emit();
    }
    bind(bindFunction) {
      const device = this.config.device;
      bindFunction(device, "start", this.pointerDown.bind(this));
      if (this.config.pointerCapture) {
        bindFunction(device, "change", this.pointerMove.bind(this));
        bindFunction(device, "end", this.pointerUp.bind(this));
        bindFunction(device, "cancel", this.pointerUp.bind(this));
        bindFunction("lostPointerCapture", "", this.pointerUp.bind(this));
      }
      if (this.config.keys) {
        bindFunction("key", "down", this.keyDown.bind(this));
        bindFunction("key", "up", this.keyUp.bind(this));
      }
      if (this.config.filterTaps) {
        bindFunction("click", "", this.pointerClick.bind(this), {
          capture: true,
          passive: false
        });
      }
    }
  }
  function persistEvent(event) {
    "persist" in event && typeof event.persist === "function" && event.persist();
  }
  const isBrowser = typeof window !== "undefined" && window.document && window.document.createElement;
  function supportsTouchEvents() {
    return isBrowser && "ontouchstart" in window;
  }
  function isTouchScreen() {
    return supportsTouchEvents() || isBrowser && window.navigator.maxTouchPoints > 1;
  }
  function supportsPointerEvents() {
    return isBrowser && "onpointerdown" in window;
  }
  function supportsPointerLock() {
    return isBrowser && "exitPointerLock" in window.document;
  }
  function supportsGestureEvents() {
    try {
      return "constructor" in GestureEvent;
    } catch (e) {
      return false;
    }
  }
  const SUPPORT = {
    isBrowser,
    gesture: supportsGestureEvents(),
    touch: isTouchScreen(),
    touchscreen: isTouchScreen(),
    pointer: supportsPointerEvents(),
    pointerLock: supportsPointerLock()
  };
  const DEFAULT_PREVENT_SCROLL_DELAY = 250;
  const DEFAULT_DRAG_DELAY = 180;
  const DEFAULT_SWIPE_VELOCITY = 0.5;
  const DEFAULT_SWIPE_DISTANCE = 50;
  const DEFAULT_SWIPE_DURATION = 250;
  const DEFAULT_DRAG_AXIS_THRESHOLD = {
    mouse: 0,
    touch: 0,
    pen: 8
  };
  const dragConfigResolver = _objectSpread2(_objectSpread2({}, coordinatesConfigResolver), {}, {
    device(_v, _k, {
      pointer: {
        touch = false,
        lock = false,
        mouse = false
      } = {}
    }) {
      this.pointerLock = lock && SUPPORT.pointerLock;
      if (SUPPORT.touch && touch)
        return "touch";
      if (this.pointerLock)
        return "mouse";
      if (SUPPORT.pointer && !mouse)
        return "pointer";
      if (SUPPORT.touch)
        return "touch";
      return "mouse";
    },
    preventScrollAxis(value, _k, {
      preventScroll
    }) {
      this.preventScrollDelay = typeof preventScroll === "number" ? preventScroll : preventScroll || preventScroll === void 0 && value ? DEFAULT_PREVENT_SCROLL_DELAY : void 0;
      if (!SUPPORT.touchscreen || preventScroll === false)
        return void 0;
      return value ? value : preventScroll !== void 0 ? "y" : void 0;
    },
    pointerCapture(_v, _k, {
      pointer: {
        capture = true,
        buttons = 1
      } = {}
    }) {
      this.pointerButtons = buttons;
      return !this.pointerLock && this.device === "pointer" && capture;
    },
    keys(value = true) {
      return value;
    },
    threshold(value, _k, {
      filterTaps = false,
      tapsThreshold = 3,
      axis = void 0
    }) {
      const threshold = V.toVector(value, filterTaps ? tapsThreshold : axis ? 1 : 0);
      this.filterTaps = filterTaps;
      this.tapsThreshold = tapsThreshold;
      return threshold;
    },
    swipe({
      velocity = DEFAULT_SWIPE_VELOCITY,
      distance = DEFAULT_SWIPE_DISTANCE,
      duration = DEFAULT_SWIPE_DURATION
    } = {}) {
      return {
        velocity: this.transform(V.toVector(velocity)),
        distance: this.transform(V.toVector(distance)),
        duration
      };
    },
    delay(value = 0) {
      switch (value) {
        case true:
          return DEFAULT_DRAG_DELAY;
        case false:
          return 0;
        default:
          return value;
      }
    },
    axisThreshold(value) {
      if (!value)
        return DEFAULT_DRAG_AXIS_THRESHOLD;
      return _objectSpread2(_objectSpread2({}, DEFAULT_DRAG_AXIS_THRESHOLD), value);
    }
  });
  if (process.env.NODE_ENV === "development") {
    Object.assign(dragConfigResolver, {
      useTouch(value) {
        if (value !== void 0) {
          throw Error(`[@use-gesture]: \`useTouch\` option has been renamed to \`pointer.touch\`. Use it as in \`{ pointer: { touch: true } }\`.`);
        }
        return NaN;
      },
      experimental_preventWindowScrollY(value) {
        if (value !== void 0) {
          throw Error(`[@use-gesture]: \`experimental_preventWindowScrollY\` option has been renamed to \`preventScroll\`.`);
        }
        return NaN;
      },
      swipeVelocity(value) {
        if (value !== void 0) {
          throw Error(`[@use-gesture]: \`swipeVelocity\` option has been renamed to \`swipe.velocity\`. Use it as in \`{ swipe: { velocity: 0.5 } }\`.`);
        }
        return NaN;
      },
      swipeDistance(value) {
        if (value !== void 0) {
          throw Error(`[@use-gesture]: \`swipeDistance\` option has been renamed to \`swipe.distance\`. Use it as in \`{ swipe: { distance: 50 } }\`.`);
        }
        return NaN;
      },
      swipeDuration(value) {
        if (value !== void 0) {
          throw Error(`[@use-gesture]: \`swipeDuration\` option has been renamed to \`swipe.duration\`. Use it as in \`{ swipe: { duration: 250 } }\`.`);
        }
        return NaN;
      }
    });
  }
  const SCALE_ANGLE_RATIO_INTENT_DEG = 30;
  const PINCH_WHEEL_RATIO = 100;
  class PinchEngine extends Engine {
    constructor(...args) {
      super(...args);
      _defineProperty(this, "ingKey", "pinching");
      _defineProperty(this, "aliasKey", "da");
    }
    init() {
      this.state.offset = [1, 0];
      this.state.lastOffset = [1, 0];
      this.state._pointerEvents = /* @__PURE__ */ new Map();
    }
    reset() {
      super.reset();
      const state = this.state;
      state._touchIds = [];
      state.canceled = false;
      state.cancel = this.cancel.bind(this);
      state.turns = 0;
    }
    computeOffset() {
      const {
        type: type2,
        movement,
        lastOffset
      } = this.state;
      if (type2 === "wheel") {
        this.state.offset = V.add(movement, lastOffset);
      } else {
        this.state.offset = [(1 + movement[0]) * lastOffset[0], movement[1] + lastOffset[1]];
      }
    }
    computeMovement() {
      const {
        offset,
        lastOffset
      } = this.state;
      this.state.movement = [offset[0] / lastOffset[0], offset[1] - lastOffset[1]];
    }
    axisIntent() {
      const state = this.state;
      const [_m0, _m1] = state._movement;
      if (!state.axis) {
        const axisMovementDifference = Math.abs(_m0) * SCALE_ANGLE_RATIO_INTENT_DEG - Math.abs(_m1);
        if (axisMovementDifference < 0)
          state.axis = "angle";
        else if (axisMovementDifference > 0)
          state.axis = "scale";
      }
    }
    restrictToAxis(v) {
      if (this.config.lockDirection) {
        if (this.state.axis === "scale")
          v[1] = 0;
        else if (this.state.axis === "angle")
          v[0] = 0;
      }
    }
    cancel() {
      const state = this.state;
      if (state.canceled)
        return;
      setTimeout(() => {
        state.canceled = true;
        state._active = false;
        this.compute();
        this.emit();
      }, 0);
    }
    touchStart(event) {
      this.ctrl.setEventIds(event);
      const state = this.state;
      const ctrlTouchIds = this.ctrl.touchIds;
      if (state._active) {
        if (state._touchIds.every((id) => ctrlTouchIds.has(id)))
          return;
      }
      if (ctrlTouchIds.size < 2)
        return;
      this.start(event);
      state._touchIds = Array.from(ctrlTouchIds).slice(0, 2);
      const payload = touchDistanceAngle(event, state._touchIds);
      this.pinchStart(event, payload);
    }
    pointerStart(event) {
      if (event.buttons != null && event.buttons % 2 !== 1)
        return;
      this.ctrl.setEventIds(event);
      event.target.setPointerCapture(event.pointerId);
      const state = this.state;
      const _pointerEvents = state._pointerEvents;
      const ctrlPointerIds = this.ctrl.pointerIds;
      if (state._active) {
        if (Array.from(_pointerEvents.keys()).every((id) => ctrlPointerIds.has(id)))
          return;
      }
      if (_pointerEvents.size < 2) {
        _pointerEvents.set(event.pointerId, event);
      }
      if (state._pointerEvents.size < 2)
        return;
      this.start(event);
      const payload = distanceAngle(...Array.from(_pointerEvents.values()));
      this.pinchStart(event, payload);
    }
    pinchStart(event, payload) {
      const state = this.state;
      state.origin = payload.origin;
      this.computeValues([payload.distance, payload.angle]);
      this.computeInitial();
      this.compute(event);
      this.emit();
    }
    touchMove(event) {
      if (!this.state._active)
        return;
      const payload = touchDistanceAngle(event, this.state._touchIds);
      this.pinchMove(event, payload);
    }
    pointerMove(event) {
      const _pointerEvents = this.state._pointerEvents;
      if (_pointerEvents.has(event.pointerId)) {
        _pointerEvents.set(event.pointerId, event);
      }
      if (!this.state._active)
        return;
      const payload = distanceAngle(...Array.from(_pointerEvents.values()));
      this.pinchMove(event, payload);
    }
    pinchMove(event, payload) {
      const state = this.state;
      const prev_a = state._values[1];
      const delta_a = payload.angle - prev_a;
      let delta_turns = 0;
      if (Math.abs(delta_a) > 270)
        delta_turns += Math.sign(delta_a);
      this.computeValues([payload.distance, payload.angle - 360 * delta_turns]);
      state.origin = payload.origin;
      state.turns = delta_turns;
      state._movement = [state._values[0] / state._initial[0] - 1, state._values[1] - state._initial[1]];
      this.compute(event);
      this.emit();
    }
    touchEnd(event) {
      this.ctrl.setEventIds(event);
      if (!this.state._active)
        return;
      if (this.state._touchIds.some((id) => !this.ctrl.touchIds.has(id))) {
        this.state._active = false;
        this.compute(event);
        this.emit();
      }
    }
    pointerEnd(event) {
      const state = this.state;
      this.ctrl.setEventIds(event);
      try {
        event.target.releasePointerCapture(event.pointerId);
      } catch (_unused) {
      }
      if (state._pointerEvents.has(event.pointerId)) {
        state._pointerEvents.delete(event.pointerId);
      }
      if (!state._active)
        return;
      if (state._pointerEvents.size < 2) {
        state._active = false;
        this.compute(event);
        this.emit();
      }
    }
    gestureStart(event) {
      if (event.cancelable)
        event.preventDefault();
      const state = this.state;
      if (state._active)
        return;
      this.start(event);
      this.computeValues([event.scale, event.rotation]);
      state.origin = [event.clientX, event.clientY];
      this.compute(event);
      this.emit();
    }
    gestureMove(event) {
      if (event.cancelable)
        event.preventDefault();
      if (!this.state._active)
        return;
      const state = this.state;
      this.computeValues([event.scale, event.rotation]);
      state.origin = [event.clientX, event.clientY];
      const _previousMovement = state._movement;
      state._movement = [event.scale - 1, event.rotation];
      state._delta = V.sub(state._movement, _previousMovement);
      this.compute(event);
      this.emit();
    }
    gestureEnd(event) {
      if (!this.state._active)
        return;
      this.state._active = false;
      this.compute(event);
      this.emit();
    }
    wheel(event) {
      const modifierKey = this.config.modifierKey;
      if (modifierKey && !event[modifierKey])
        return;
      if (!this.state._active)
        this.wheelStart(event);
      else
        this.wheelChange(event);
      this.timeoutStore.add("wheelEnd", this.wheelEnd.bind(this));
    }
    wheelStart(event) {
      this.start(event);
      this.wheelChange(event);
    }
    wheelChange(event) {
      const isR3f = "uv" in event;
      if (!isR3f) {
        if (event.cancelable) {
          event.preventDefault();
        }
        if (process.env.NODE_ENV === "development" && !event.defaultPrevented) {
          console.warn(`[@use-gesture]: To properly support zoom on trackpads, try using the \`target\` option.

This message will only appear in development mode.`);
        }
      }
      const state = this.state;
      state._delta = [-wheelValues(event)[1] / PINCH_WHEEL_RATIO * state.offset[0], 0];
      V.addTo(state._movement, state._delta);
      this.state.origin = [event.clientX, event.clientY];
      this.compute(event);
      this.emit();
    }
    wheelEnd() {
      if (!this.state._active)
        return;
      this.state._active = false;
      this.compute();
      this.emit();
    }
    bind(bindFunction) {
      const device = this.config.device;
      if (!!device) {
        bindFunction(device, "start", this[device + "Start"].bind(this));
        bindFunction(device, "change", this[device + "Move"].bind(this));
        bindFunction(device, "end", this[device + "End"].bind(this));
        bindFunction(device, "cancel", this[device + "End"].bind(this));
      }
      bindFunction("wheel", "", this.wheel.bind(this), {
        passive: false
      });
    }
  }
  const pinchConfigResolver = _objectSpread2(_objectSpread2({}, commonConfigResolver), {}, {
    device(_v, _k, {
      shared,
      pointer: {
        touch = false
      } = {}
    }) {
      const sharedConfig = shared;
      if (sharedConfig.target && !SUPPORT.touch && SUPPORT.gesture)
        return "gesture";
      if (SUPPORT.touch && touch)
        return "touch";
      if (SUPPORT.touchscreen) {
        if (SUPPORT.pointer)
          return "pointer";
        if (SUPPORT.touch)
          return "touch";
      }
    },
    bounds(_v, _k, {
      scaleBounds = {},
      angleBounds = {}
    }) {
      const _scaleBounds = (state) => {
        const D2 = assignDefault(call$1(scaleBounds, state), {
          min: -Infinity,
          max: Infinity
        });
        return [D2.min, D2.max];
      };
      const _angleBounds = (state) => {
        const A = assignDefault(call$1(angleBounds, state), {
          min: -Infinity,
          max: Infinity
        });
        return [A.min, A.max];
      };
      if (typeof scaleBounds !== "function" && typeof angleBounds !== "function")
        return [_scaleBounds(), _angleBounds()];
      return (state) => [_scaleBounds(state), _angleBounds(state)];
    },
    threshold(value, _k, config2) {
      this.lockDirection = config2.axis === "lock";
      const threshold = V.toVector(value, this.lockDirection ? [0.1, 3] : 0);
      return threshold;
    },
    modifierKey(value) {
      if (value === void 0)
        return "ctrlKey";
      return value;
    }
  });
  class MoveEngine extends CoordinatesEngine {
    constructor(...args) {
      super(...args);
      _defineProperty(this, "ingKey", "moving");
    }
    move(event) {
      if (this.config.mouseOnly && event.pointerType !== "mouse")
        return;
      if (!this.state._active)
        this.moveStart(event);
      else
        this.moveChange(event);
      this.timeoutStore.add("moveEnd", this.moveEnd.bind(this));
    }
    moveStart(event) {
      this.start(event);
      this.computeValues(pointerValues(event));
      this.compute(event);
      this.computeInitial();
      this.emit();
    }
    moveChange(event) {
      if (!this.state._active)
        return;
      const values = pointerValues(event);
      const state = this.state;
      state._delta = V.sub(values, state._values);
      V.addTo(state._movement, state._delta);
      this.computeValues(values);
      this.compute(event);
      this.emit();
    }
    moveEnd(event) {
      if (!this.state._active)
        return;
      this.state._active = false;
      this.compute(event);
      this.emit();
    }
    bind(bindFunction) {
      bindFunction("pointer", "change", this.move.bind(this));
      bindFunction("pointer", "leave", this.moveEnd.bind(this));
    }
  }
  const moveConfigResolver = _objectSpread2(_objectSpread2({}, coordinatesConfigResolver), {}, {
    mouseOnly: (value = true) => value
  });
  class ScrollEngine extends CoordinatesEngine {
    constructor(...args) {
      super(...args);
      _defineProperty(this, "ingKey", "scrolling");
    }
    scroll(event) {
      if (!this.state._active)
        this.start(event);
      this.scrollChange(event);
      this.timeoutStore.add("scrollEnd", this.scrollEnd.bind(this));
    }
    scrollChange(event) {
      if (event.cancelable)
        event.preventDefault();
      const state = this.state;
      const values = scrollValues(event);
      state._delta = V.sub(values, state._values);
      V.addTo(state._movement, state._delta);
      this.computeValues(values);
      this.compute(event);
      this.emit();
    }
    scrollEnd() {
      if (!this.state._active)
        return;
      this.state._active = false;
      this.compute();
      this.emit();
    }
    bind(bindFunction) {
      bindFunction("scroll", "", this.scroll.bind(this));
    }
  }
  const scrollConfigResolver = coordinatesConfigResolver;
  class WheelEngine extends CoordinatesEngine {
    constructor(...args) {
      super(...args);
      _defineProperty(this, "ingKey", "wheeling");
    }
    wheel(event) {
      if (!this.state._active)
        this.start(event);
      this.wheelChange(event);
      this.timeoutStore.add("wheelEnd", this.wheelEnd.bind(this));
    }
    wheelChange(event) {
      const state = this.state;
      state._delta = wheelValues(event);
      V.addTo(state._movement, state._delta);
      const [ox, oy] = state.overflow;
      const [dx, dy] = state._delta;
      const [dirx, diry] = state._direction;
      if (ox < 0 && dx > 0 && dirx < 0 || ox > 0 && dx < 0 && dirx > 0) {
        state._movement[0] = state._movementBound[0];
      }
      if (oy < 0 && dy > 0 && diry < 0 || oy > 0 && dy < 0 && diry > 0) {
        state._movement[1] = state._movementBound[1];
      }
      this.compute(event);
      this.emit();
    }
    wheelEnd() {
      if (!this.state._active)
        return;
      this.state._active = false;
      this.compute();
      this.emit();
    }
    bind(bindFunction) {
      bindFunction("wheel", "", this.wheel.bind(this));
    }
  }
  const wheelConfigResolver = coordinatesConfigResolver;
  class HoverEngine extends CoordinatesEngine {
    constructor(...args) {
      super(...args);
      _defineProperty(this, "ingKey", "hovering");
    }
    enter(event) {
      if (this.config.mouseOnly && event.pointerType !== "mouse")
        return;
      this.start(event);
      this.computeValues(pointerValues(event));
      this.compute(event);
      this.emit();
    }
    leave(event) {
      if (this.config.mouseOnly && event.pointerType !== "mouse")
        return;
      const state = this.state;
      if (!state._active)
        return;
      state._active = false;
      const values = pointerValues(event);
      state._movement = state._delta = V.sub(values, state._values);
      this.computeValues(values);
      this.compute(event);
      state.delta = state.movement;
      this.emit();
    }
    bind(bindFunction) {
      bindFunction("pointer", "enter", this.enter.bind(this));
      bindFunction("pointer", "leave", this.leave.bind(this));
    }
  }
  const hoverConfigResolver = _objectSpread2(_objectSpread2({}, coordinatesConfigResolver), {}, {
    mouseOnly: (value = true) => value
  });
  const EngineMap = /* @__PURE__ */ new Map();
  const ConfigResolverMap = /* @__PURE__ */ new Map();
  function registerAction(action) {
    EngineMap.set(action.key, action.engine);
    ConfigResolverMap.set(action.key, action.resolver);
  }
  const dragAction = {
    key: "drag",
    engine: DragEngine,
    resolver: dragConfigResolver
  };
  const hoverAction = {
    key: "hover",
    engine: HoverEngine,
    resolver: hoverConfigResolver
  };
  const moveAction = {
    key: "move",
    engine: MoveEngine,
    resolver: moveConfigResolver
  };
  const pinchAction = {
    key: "pinch",
    engine: PinchEngine,
    resolver: pinchConfigResolver
  };
  const scrollAction = {
    key: "scroll",
    engine: ScrollEngine,
    resolver: scrollConfigResolver
  };
  const wheelAction = {
    key: "wheel",
    engine: WheelEngine,
    resolver: wheelConfigResolver
  };
  function _objectWithoutPropertiesLoose$2(source, excluded) {
    if (source == null)
      return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;
    for (i = 0; i < sourceKeys.length; i++) {
      key = sourceKeys[i];
      if (excluded.indexOf(key) >= 0)
        continue;
      target[key] = source[key];
    }
    return target;
  }
  function _objectWithoutProperties(source, excluded) {
    if (source == null)
      return {};
    var target = _objectWithoutPropertiesLoose$2(source, excluded);
    var key, i;
    if (Object.getOwnPropertySymbols) {
      var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
      for (i = 0; i < sourceSymbolKeys.length; i++) {
        key = sourceSymbolKeys[i];
        if (excluded.indexOf(key) >= 0)
          continue;
        if (!Object.prototype.propertyIsEnumerable.call(source, key))
          continue;
        target[key] = source[key];
      }
    }
    return target;
  }
  const sharedConfigResolver = {
    target(value) {
      if (value) {
        return () => "current" in value ? value.current : value;
      }
      return void 0;
    },
    enabled(value = true) {
      return value;
    },
    window(value = SUPPORT.isBrowser ? window : void 0) {
      return value;
    },
    eventOptions({
      passive = true,
      capture = false
    } = {}) {
      return {
        passive,
        capture
      };
    },
    transform(value) {
      return value;
    }
  };
  const _excluded$3 = ["target", "eventOptions", "window", "enabled", "transform"];
  function resolveWith(config2 = {}, resolvers) {
    const result = {};
    for (const [key, resolver] of Object.entries(resolvers)) {
      switch (typeof resolver) {
        case "function":
          if (process.env.NODE_ENV === "development") {
            const r = resolver.call(result, config2[key], key, config2);
            if (!Number.isNaN(r))
              result[key] = r;
          } else {
            result[key] = resolver.call(result, config2[key], key, config2);
          }
          break;
        case "object":
          result[key] = resolveWith(config2[key], resolver);
          break;
        case "boolean":
          if (resolver)
            result[key] = config2[key];
          break;
      }
    }
    return result;
  }
  function parse(newConfig, gestureKey, _config = {}) {
    const _ref = newConfig, {
      target,
      eventOptions,
      window: window2,
      enabled,
      transform
    } = _ref, rest = _objectWithoutProperties(_ref, _excluded$3);
    _config.shared = resolveWith({
      target,
      eventOptions,
      window: window2,
      enabled,
      transform
    }, sharedConfigResolver);
    if (gestureKey) {
      const resolver = ConfigResolverMap.get(gestureKey);
      _config[gestureKey] = resolveWith(_objectSpread2({
        shared: _config.shared
      }, rest), resolver);
    } else {
      for (const key in rest) {
        const resolver = ConfigResolverMap.get(key);
        if (resolver) {
          _config[key] = resolveWith(_objectSpread2({
            shared: _config.shared
          }, rest[key]), resolver);
        } else if (process.env.NODE_ENV === "development") {
          if (!["drag", "pinch", "scroll", "wheel", "move", "hover"].includes(key)) {
            if (key === "domTarget") {
              throw Error(`[@use-gesture]: \`domTarget\` option has been renamed to \`target\`.`);
            }
            console.warn(`[@use-gesture]: Unknown config key \`${key}\` was used. Please read the documentation for further information.`);
          }
        }
      }
    }
    return _config;
  }
  class EventStore {
    constructor(ctrl, gestureKey) {
      _defineProperty(this, "_listeners", /* @__PURE__ */ new Set());
      this._ctrl = ctrl;
      this._gestureKey = gestureKey;
    }
    add(element, device, action, handler, options2) {
      const listeners = this._listeners;
      const type2 = toDomEventType(device, action);
      const _options = this._gestureKey ? this._ctrl.config[this._gestureKey].eventOptions : {};
      const eventOptions = _objectSpread2(_objectSpread2({}, _options), options2);
      element.addEventListener(type2, handler, eventOptions);
      const remove = () => {
        element.removeEventListener(type2, handler, eventOptions);
        listeners.delete(remove);
      };
      listeners.add(remove);
      return remove;
    }
    clean() {
      this._listeners.forEach((remove) => remove());
      this._listeners.clear();
    }
  }
  class TimeoutStore {
    constructor() {
      _defineProperty(this, "_timeouts", /* @__PURE__ */ new Map());
    }
    add(key, callback, ms = 140, ...args) {
      this.remove(key);
      this._timeouts.set(key, window.setTimeout(callback, ms, ...args));
    }
    remove(key) {
      const timeout = this._timeouts.get(key);
      if (timeout)
        window.clearTimeout(timeout);
    }
    clean() {
      this._timeouts.forEach((timeout) => void window.clearTimeout(timeout));
      this._timeouts.clear();
    }
  }
  let Controller$1 = class Controller {
    constructor(handlers) {
      _defineProperty(this, "gestures", /* @__PURE__ */ new Set());
      _defineProperty(this, "_targetEventStore", new EventStore(this));
      _defineProperty(this, "gestureEventStores", {});
      _defineProperty(this, "gestureTimeoutStores", {});
      _defineProperty(this, "handlers", {});
      _defineProperty(this, "config", {});
      _defineProperty(this, "pointerIds", /* @__PURE__ */ new Set());
      _defineProperty(this, "touchIds", /* @__PURE__ */ new Set());
      _defineProperty(this, "state", {
        shared: {
          shiftKey: false,
          metaKey: false,
          ctrlKey: false,
          altKey: false
        }
      });
      resolveGestures(this, handlers);
    }
    setEventIds(event) {
      if (isTouch(event)) {
        this.touchIds = new Set(touchIds(event));
        return this.touchIds;
      } else if ("pointerId" in event) {
        if (event.type === "pointerup" || event.type === "pointercancel")
          this.pointerIds.delete(event.pointerId);
        else if (event.type === "pointerdown")
          this.pointerIds.add(event.pointerId);
        return this.pointerIds;
      }
    }
    applyHandlers(handlers, nativeHandlers) {
      this.handlers = handlers;
      this.nativeHandlers = nativeHandlers;
    }
    applyConfig(config2, gestureKey) {
      this.config = parse(config2, gestureKey, this.config);
    }
    clean() {
      this._targetEventStore.clean();
      for (const key of this.gestures) {
        this.gestureEventStores[key].clean();
        this.gestureTimeoutStores[key].clean();
      }
    }
    effect() {
      if (this.config.shared.target)
        this.bind();
      return () => this._targetEventStore.clean();
    }
    bind(...args) {
      const sharedConfig = this.config.shared;
      const props = {};
      let target;
      if (sharedConfig.target) {
        target = sharedConfig.target();
        if (!target)
          return;
      }
      if (sharedConfig.enabled) {
        for (const gestureKey of this.gestures) {
          const gestureConfig = this.config[gestureKey];
          const bindFunction = bindToProps(props, gestureConfig.eventOptions, !!target);
          if (gestureConfig.enabled) {
            const Engine2 = EngineMap.get(gestureKey);
            new Engine2(this, args, gestureKey).bind(bindFunction);
          }
        }
        const nativeBindFunction = bindToProps(props, sharedConfig.eventOptions, !!target);
        for (const eventKey in this.nativeHandlers) {
          nativeBindFunction(eventKey, "", (event) => this.nativeHandlers[eventKey](_objectSpread2(_objectSpread2({}, this.state.shared), {}, {
            event,
            args
          })), void 0, true);
        }
      }
      for (const handlerProp in props) {
        props[handlerProp] = chain(...props[handlerProp]);
      }
      if (!target)
        return props;
      for (const handlerProp in props) {
        const {
          device,
          capture,
          passive
        } = parseProp(handlerProp);
        this._targetEventStore.add(target, device, "", props[handlerProp], {
          capture,
          passive
        });
      }
    }
  };
  function setupGesture(ctrl, gestureKey) {
    ctrl.gestures.add(gestureKey);
    ctrl.gestureEventStores[gestureKey] = new EventStore(ctrl, gestureKey);
    ctrl.gestureTimeoutStores[gestureKey] = new TimeoutStore();
  }
  function resolveGestures(ctrl, internalHandlers) {
    if (internalHandlers.drag)
      setupGesture(ctrl, "drag");
    if (internalHandlers.wheel)
      setupGesture(ctrl, "wheel");
    if (internalHandlers.scroll)
      setupGesture(ctrl, "scroll");
    if (internalHandlers.move)
      setupGesture(ctrl, "move");
    if (internalHandlers.pinch)
      setupGesture(ctrl, "pinch");
    if (internalHandlers.hover)
      setupGesture(ctrl, "hover");
  }
  const bindToProps = (props, eventOptions, withPassiveOption) => (device, action, handler, options2 = {}, isNative = false) => {
    var _options$capture, _options$passive;
    const capture = (_options$capture = options2.capture) !== null && _options$capture !== void 0 ? _options$capture : eventOptions.capture;
    const passive = (_options$passive = options2.passive) !== null && _options$passive !== void 0 ? _options$passive : eventOptions.passive;
    let handlerProp = isNative ? device : toHandlerProp(device, action, capture);
    if (withPassiveOption && passive)
      handlerProp += "Passive";
    props[handlerProp] = props[handlerProp] || [];
    props[handlerProp].push(handler);
  };
  const RE_NOT_NATIVE = /^on(Drag|Wheel|Scroll|Move|Pinch|Hover)/;
  function sortHandlers(_handlers) {
    const native = {};
    const handlers = {};
    const actions = /* @__PURE__ */ new Set();
    for (let key in _handlers) {
      if (RE_NOT_NATIVE.test(key)) {
        actions.add(RegExp.lastMatch);
        handlers[key] = _handlers[key];
      } else {
        native[key] = _handlers[key];
      }
    }
    return [handlers, native, actions];
  }
  function registerGesture(actions, handlers, handlerKey, key, internalHandlers, config2) {
    if (!actions.has(handlerKey))
      return;
    if (!EngineMap.has(key)) {
      if (process.env.NODE_ENV === "development") {
        console.warn(`[@use-gesture]: You've created a custom handler that that uses the \`${key}\` gesture but isn't properly configured.

Please add \`${key}Action\` when creating your handler.`);
      }
      return;
    }
    const startKey = handlerKey + "Start";
    const endKey = handlerKey + "End";
    const fn = (state) => {
      let memo = void 0;
      if (state.first && startKey in handlers)
        handlers[startKey](state);
      if (handlerKey in handlers)
        memo = handlers[handlerKey](state);
      if (state.last && endKey in handlers)
        handlers[endKey](state);
      return memo;
    };
    internalHandlers[key] = fn;
    config2[key] = config2[key] || {};
  }
  function parseMergedHandlers(mergedHandlers, mergedConfig) {
    const [handlers, nativeHandlers, actions] = sortHandlers(mergedHandlers);
    const internalHandlers = {};
    registerGesture(actions, handlers, "onDrag", "drag", internalHandlers, mergedConfig);
    registerGesture(actions, handlers, "onWheel", "wheel", internalHandlers, mergedConfig);
    registerGesture(actions, handlers, "onScroll", "scroll", internalHandlers, mergedConfig);
    registerGesture(actions, handlers, "onPinch", "pinch", internalHandlers, mergedConfig);
    registerGesture(actions, handlers, "onMove", "move", internalHandlers, mergedConfig);
    registerGesture(actions, handlers, "onHover", "hover", internalHandlers, mergedConfig);
    return {
      handlers: internalHandlers,
      config: mergedConfig,
      nativeHandlers
    };
  }
  function useRecognizers(handlers, config2 = {}, gestureKey, nativeHandlers) {
    const ctrl = React.useMemo(() => new Controller$1(handlers), []);
    ctrl.applyHandlers(handlers, nativeHandlers);
    ctrl.applyConfig(config2, gestureKey);
    React.useEffect(ctrl.effect.bind(ctrl));
    React.useEffect(() => {
      return ctrl.clean.bind(ctrl);
    }, []);
    if (config2.target === void 0) {
      return ctrl.bind.bind(ctrl);
    }
    return void 0;
  }
  function useDrag(handler, config2) {
    registerAction(dragAction);
    return useRecognizers({
      drag: handler
    }, config2 || {}, "drag");
  }
  function createUseGesture(actions) {
    actions.forEach(registerAction);
    return function useGesture2(_handlers, _config) {
      const {
        handlers,
        nativeHandlers,
        config: config2
      } = parseMergedHandlers(_handlers, _config || {});
      return useRecognizers(handlers, config2, void 0, nativeHandlers);
    };
  }
  function useGesture(handlers, config2) {
    const hook = createUseGesture([dragAction, pinchAction, scrollAction, wheelAction, moveAction, hoverAction]);
    return hook(handlers, config2 || {});
  }
  let updateQueue = makeQueue();
  const raf = (fn) => schedule(fn, updateQueue);
  let writeQueue = makeQueue();
  raf.write = (fn) => schedule(fn, writeQueue);
  let onStartQueue = makeQueue();
  raf.onStart = (fn) => schedule(fn, onStartQueue);
  let onFrameQueue = makeQueue();
  raf.onFrame = (fn) => schedule(fn, onFrameQueue);
  let onFinishQueue = makeQueue();
  raf.onFinish = (fn) => schedule(fn, onFinishQueue);
  let timeouts = [];
  raf.setTimeout = (handler, ms) => {
    let time = raf.now() + ms;
    let cancel = () => {
      let i = timeouts.findIndex((t) => t.cancel == cancel);
      if (~i)
        timeouts.splice(i, 1);
      pendingCount -= ~i ? 1 : 0;
    };
    let timeout = {
      time,
      handler,
      cancel
    };
    timeouts.splice(findTimeout(time), 0, timeout);
    pendingCount += 1;
    start();
    return timeout;
  };
  let findTimeout = (time) => ~(~timeouts.findIndex((t) => t.time > time) || ~timeouts.length);
  raf.cancel = (fn) => {
    onStartQueue.delete(fn);
    onFrameQueue.delete(fn);
    onFinishQueue.delete(fn);
    updateQueue.delete(fn);
    writeQueue.delete(fn);
  };
  raf.sync = (fn) => {
    sync = true;
    raf.batchedUpdates(fn);
    sync = false;
  };
  raf.throttle = (fn) => {
    let lastArgs;
    function queuedFn() {
      try {
        fn(...lastArgs);
      } finally {
        lastArgs = null;
      }
    }
    function throttled(...args) {
      lastArgs = args;
      raf.onStart(queuedFn);
    }
    throttled.handler = fn;
    throttled.cancel = () => {
      onStartQueue.delete(queuedFn);
      lastArgs = null;
    };
    return throttled;
  };
  let nativeRaf = typeof window != "undefined" ? window.requestAnimationFrame : () => {
  };
  raf.use = (impl) => nativeRaf = impl;
  raf.now = typeof performance != "undefined" ? () => performance.now() : Date.now;
  raf.batchedUpdates = (fn) => fn();
  raf.catch = console.error;
  raf.frameLoop = "always";
  raf.advance = () => {
    if (raf.frameLoop !== "demand") {
      console.warn("Cannot call the manual advancement of rafz whilst frameLoop is not set as demand");
    } else {
      update();
    }
  };
  let ts = -1;
  let pendingCount = 0;
  let sync = false;
  function schedule(fn, queue) {
    if (sync) {
      queue.delete(fn);
      fn(0);
    } else {
      queue.add(fn);
      start();
    }
  }
  function start() {
    if (ts < 0) {
      ts = 0;
      if (raf.frameLoop !== "demand") {
        nativeRaf(loop);
      }
    }
  }
  function stop() {
    ts = -1;
  }
  function loop() {
    if (~ts) {
      nativeRaf(loop);
      raf.batchedUpdates(update);
    }
  }
  function update() {
    let prevTs = ts;
    ts = raf.now();
    let count = findTimeout(ts);
    if (count) {
      eachSafely(timeouts.splice(0, count), (t) => t.handler());
      pendingCount -= count;
    }
    if (!pendingCount) {
      stop();
      return;
    }
    onStartQueue.flush();
    updateQueue.flush(prevTs ? Math.min(64, ts - prevTs) : 16.667);
    onFrameQueue.flush();
    writeQueue.flush();
    onFinishQueue.flush();
  }
  function makeQueue() {
    let next = /* @__PURE__ */ new Set();
    let current = next;
    return {
      add(fn) {
        pendingCount += current == next && !next.has(fn) ? 1 : 0;
        next.add(fn);
      },
      delete(fn) {
        pendingCount -= current == next && next.has(fn) ? 1 : 0;
        return next.delete(fn);
      },
      flush(arg) {
        if (current.size) {
          next = /* @__PURE__ */ new Set();
          pendingCount -= current.size;
          eachSafely(current, (fn) => fn(arg) && next.add(fn));
          pendingCount += next.size;
          current = next;
        }
      }
    };
  }
  function eachSafely(values, each2) {
    values.forEach((value) => {
      try {
        each2(value);
      } catch (e) {
        raf.catch(e);
      }
    });
  }
  function noop() {
  }
  const defineHidden = (obj, key, value) => Object.defineProperty(obj, key, {
    value,
    writable: true,
    configurable: true
  });
  const is = {
    arr: Array.isArray,
    obj: (a2) => !!a2 && a2.constructor.name === "Object",
    fun: (a2) => typeof a2 === "function",
    str: (a2) => typeof a2 === "string",
    num: (a2) => typeof a2 === "number",
    und: (a2) => a2 === void 0
  };
  function isEqual(a2, b) {
    if (is.arr(a2)) {
      if (!is.arr(b) || a2.length !== b.length)
        return false;
      for (let i = 0; i < a2.length; i++) {
        if (a2[i] !== b[i])
          return false;
      }
      return true;
    }
    return a2 === b;
  }
  const each = (obj, fn) => obj.forEach(fn);
  function eachProp(obj, fn, ctx2) {
    if (is.arr(obj)) {
      for (let i = 0; i < obj.length; i++) {
        fn.call(ctx2, obj[i], `${i}`);
      }
      return;
    }
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        fn.call(ctx2, obj[key], key);
      }
    }
  }
  const toArray = (a2) => is.und(a2) ? [] : is.arr(a2) ? a2 : [a2];
  function flush(queue, iterator) {
    if (queue.size) {
      const items = Array.from(queue);
      queue.clear();
      each(items, iterator);
    }
  }
  const flushCalls = (queue, ...args) => flush(queue, (fn) => fn(...args));
  const isSSR = () => typeof window === "undefined" || !window.navigator || /ServerSideRendering|^Deno\//.test(window.navigator.userAgent);
  let createStringInterpolator$1;
  let to;
  let colors$1 = null;
  let skipAnimation = false;
  let willAdvance = noop;
  const assign = (globals2) => {
    if (globals2.to)
      to = globals2.to;
    if (globals2.now)
      raf.now = globals2.now;
    if (globals2.colors !== void 0)
      colors$1 = globals2.colors;
    if (globals2.skipAnimation != null)
      skipAnimation = globals2.skipAnimation;
    if (globals2.createStringInterpolator)
      createStringInterpolator$1 = globals2.createStringInterpolator;
    if (globals2.requestAnimationFrame)
      raf.use(globals2.requestAnimationFrame);
    if (globals2.batchedUpdates)
      raf.batchedUpdates = globals2.batchedUpdates;
    if (globals2.willAdvance)
      willAdvance = globals2.willAdvance;
    if (globals2.frameLoop)
      raf.frameLoop = globals2.frameLoop;
  };
  var globals = /* @__PURE__ */ Object.freeze({
    __proto__: null,
    get createStringInterpolator() {
      return createStringInterpolator$1;
    },
    get to() {
      return to;
    },
    get colors() {
      return colors$1;
    },
    get skipAnimation() {
      return skipAnimation;
    },
    get willAdvance() {
      return willAdvance;
    },
    assign
  });
  const startQueue = /* @__PURE__ */ new Set();
  let currentFrame = [];
  let prevFrame = [];
  let priority = 0;
  const frameLoop = {
    get idle() {
      return !startQueue.size && !currentFrame.length;
    },
    start(animation) {
      if (priority > animation.priority) {
        startQueue.add(animation);
        raf.onStart(flushStartQueue);
      } else {
        startSafely(animation);
        raf(advance);
      }
    },
    advance,
    sort(animation) {
      if (priority) {
        raf.onFrame(() => frameLoop.sort(animation));
      } else {
        const prevIndex = currentFrame.indexOf(animation);
        if (~prevIndex) {
          currentFrame.splice(prevIndex, 1);
          startUnsafely(animation);
        }
      }
    },
    clear() {
      currentFrame = [];
      startQueue.clear();
    }
  };
  function flushStartQueue() {
    startQueue.forEach(startSafely);
    startQueue.clear();
    raf(advance);
  }
  function startSafely(animation) {
    if (!currentFrame.includes(animation))
      startUnsafely(animation);
  }
  function startUnsafely(animation) {
    currentFrame.splice(findIndex(currentFrame, (other) => other.priority > animation.priority), 0, animation);
  }
  function advance(dt) {
    const nextFrame = prevFrame;
    for (let i = 0; i < currentFrame.length; i++) {
      const animation = currentFrame[i];
      priority = animation.priority;
      if (!animation.idle) {
        willAdvance(animation);
        animation.advance(dt);
        if (!animation.idle) {
          nextFrame.push(animation);
        }
      }
    }
    priority = 0;
    prevFrame = currentFrame;
    prevFrame.length = 0;
    currentFrame = nextFrame;
    return currentFrame.length > 0;
  }
  function findIndex(arr, test) {
    const index = arr.findIndex(test);
    return index < 0 ? arr.length : index;
  }
  const clamp = (min, max, v) => Math.min(Math.max(v, min), max);
  const colors = {
    transparent: 0,
    aliceblue: 4042850303,
    antiquewhite: 4209760255,
    aqua: 16777215,
    aquamarine: 2147472639,
    azure: 4043309055,
    beige: 4126530815,
    bisque: 4293182719,
    black: 255,
    blanchedalmond: 4293643775,
    blue: 65535,
    blueviolet: 2318131967,
    brown: 2771004159,
    burlywood: 3736635391,
    burntsienna: 3934150143,
    cadetblue: 1604231423,
    chartreuse: 2147418367,
    chocolate: 3530104575,
    coral: 4286533887,
    cornflowerblue: 1687547391,
    cornsilk: 4294499583,
    crimson: 3692313855,
    cyan: 16777215,
    darkblue: 35839,
    darkcyan: 9145343,
    darkgoldenrod: 3095792639,
    darkgray: 2846468607,
    darkgreen: 6553855,
    darkgrey: 2846468607,
    darkkhaki: 3182914559,
    darkmagenta: 2332068863,
    darkolivegreen: 1433087999,
    darkorange: 4287365375,
    darkorchid: 2570243327,
    darkred: 2332033279,
    darksalmon: 3918953215,
    darkseagreen: 2411499519,
    darkslateblue: 1211993087,
    darkslategray: 793726975,
    darkslategrey: 793726975,
    darkturquoise: 13554175,
    darkviolet: 2483082239,
    deeppink: 4279538687,
    deepskyblue: 12582911,
    dimgray: 1768516095,
    dimgrey: 1768516095,
    dodgerblue: 512819199,
    firebrick: 2988581631,
    floralwhite: 4294635775,
    forestgreen: 579543807,
    fuchsia: 4278255615,
    gainsboro: 3705462015,
    ghostwhite: 4177068031,
    gold: 4292280575,
    goldenrod: 3668254975,
    gray: 2155905279,
    green: 8388863,
    greenyellow: 2919182335,
    grey: 2155905279,
    honeydew: 4043305215,
    hotpink: 4285117695,
    indianred: 3445382399,
    indigo: 1258324735,
    ivory: 4294963455,
    khaki: 4041641215,
    lavender: 3873897215,
    lavenderblush: 4293981695,
    lawngreen: 2096890111,
    lemonchiffon: 4294626815,
    lightblue: 2916673279,
    lightcoral: 4034953471,
    lightcyan: 3774873599,
    lightgoldenrodyellow: 4210742015,
    lightgray: 3553874943,
    lightgreen: 2431553791,
    lightgrey: 3553874943,
    lightpink: 4290167295,
    lightsalmon: 4288707327,
    lightseagreen: 548580095,
    lightskyblue: 2278488831,
    lightslategray: 2005441023,
    lightslategrey: 2005441023,
    lightsteelblue: 2965692159,
    lightyellow: 4294959359,
    lime: 16711935,
    limegreen: 852308735,
    linen: 4210091775,
    magenta: 4278255615,
    maroon: 2147483903,
    mediumaquamarine: 1724754687,
    mediumblue: 52735,
    mediumorchid: 3126187007,
    mediumpurple: 2473647103,
    mediumseagreen: 1018393087,
    mediumslateblue: 2070474495,
    mediumspringgreen: 16423679,
    mediumturquoise: 1221709055,
    mediumvioletred: 3340076543,
    midnightblue: 421097727,
    mintcream: 4127193855,
    mistyrose: 4293190143,
    moccasin: 4293178879,
    navajowhite: 4292783615,
    navy: 33023,
    oldlace: 4260751103,
    olive: 2155872511,
    olivedrab: 1804477439,
    orange: 4289003775,
    orangered: 4282712319,
    orchid: 3664828159,
    palegoldenrod: 4008225535,
    palegreen: 2566625535,
    paleturquoise: 2951671551,
    palevioletred: 3681588223,
    papayawhip: 4293907967,
    peachpuff: 4292524543,
    peru: 3448061951,
    pink: 4290825215,
    plum: 3718307327,
    powderblue: 2967529215,
    purple: 2147516671,
    rebeccapurple: 1714657791,
    red: 4278190335,
    rosybrown: 3163525119,
    royalblue: 1097458175,
    saddlebrown: 2336560127,
    salmon: 4202722047,
    sandybrown: 4104413439,
    seagreen: 780883967,
    seashell: 4294307583,
    sienna: 2689740287,
    silver: 3233857791,
    skyblue: 2278484991,
    slateblue: 1784335871,
    slategray: 1887473919,
    slategrey: 1887473919,
    snow: 4294638335,
    springgreen: 16744447,
    steelblue: 1182971135,
    tan: 3535047935,
    teal: 8421631,
    thistle: 3636451583,
    tomato: 4284696575,
    turquoise: 1088475391,
    violet: 4001558271,
    wheat: 4125012991,
    white: 4294967295,
    whitesmoke: 4126537215,
    yellow: 4294902015,
    yellowgreen: 2597139199
  };
  const NUMBER = "[-+]?\\d*\\.?\\d+";
  const PERCENTAGE = NUMBER + "%";
  function call(...parts) {
    return "\\(\\s*(" + parts.join(")\\s*,\\s*(") + ")\\s*\\)";
  }
  const rgb = new RegExp("rgb" + call(NUMBER, NUMBER, NUMBER));
  const rgba = new RegExp("rgba" + call(NUMBER, NUMBER, NUMBER, NUMBER));
  const hsl = new RegExp("hsl" + call(NUMBER, PERCENTAGE, PERCENTAGE));
  const hsla = new RegExp("hsla" + call(NUMBER, PERCENTAGE, PERCENTAGE, NUMBER));
  const hex3 = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/;
  const hex4 = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/;
  const hex6 = /^#([0-9a-fA-F]{6})$/;
  const hex8 = /^#([0-9a-fA-F]{8})$/;
  function normalizeColor(color) {
    let match;
    if (typeof color === "number") {
      return color >>> 0 === color && color >= 0 && color <= 4294967295 ? color : null;
    }
    if (match = hex6.exec(color))
      return parseInt(match[1] + "ff", 16) >>> 0;
    if (colors$1 && colors$1[color] !== void 0) {
      return colors$1[color];
    }
    if (match = rgb.exec(color)) {
      return (parse255(match[1]) << 24 | parse255(match[2]) << 16 | parse255(match[3]) << 8 | 255) >>> 0;
    }
    if (match = rgba.exec(color)) {
      return (parse255(match[1]) << 24 | parse255(match[2]) << 16 | parse255(match[3]) << 8 | parse1(match[4])) >>> 0;
    }
    if (match = hex3.exec(color)) {
      return parseInt(match[1] + match[1] + match[2] + match[2] + match[3] + match[3] + "ff", 16) >>> 0;
    }
    if (match = hex8.exec(color))
      return parseInt(match[1], 16) >>> 0;
    if (match = hex4.exec(color)) {
      return parseInt(match[1] + match[1] + match[2] + match[2] + match[3] + match[3] + match[4] + match[4], 16) >>> 0;
    }
    if (match = hsl.exec(color)) {
      return (hslToRgb(parse360(match[1]), parsePercentage(match[2]), parsePercentage(match[3])) | 255) >>> 0;
    }
    if (match = hsla.exec(color)) {
      return (hslToRgb(parse360(match[1]), parsePercentage(match[2]), parsePercentage(match[3])) | parse1(match[4])) >>> 0;
    }
    return null;
  }
  function hue2rgb(p, q, t) {
    if (t < 0)
      t += 1;
    if (t > 1)
      t -= 1;
    if (t < 1 / 6)
      return p + (q - p) * 6 * t;
    if (t < 1 / 2)
      return q;
    if (t < 2 / 3)
      return p + (q - p) * (2 / 3 - t) * 6;
    return p;
  }
  function hslToRgb(h, s, l2) {
    const q = l2 < 0.5 ? l2 * (1 + s) : l2 + s - l2 * s;
    const p = 2 * l2 - q;
    const r = hue2rgb(p, q, h + 1 / 3);
    const g = hue2rgb(p, q, h);
    const b = hue2rgb(p, q, h - 1 / 3);
    return Math.round(r * 255) << 24 | Math.round(g * 255) << 16 | Math.round(b * 255) << 8;
  }
  function parse255(str) {
    const int = parseInt(str, 10);
    if (int < 0)
      return 0;
    if (int > 255)
      return 255;
    return int;
  }
  function parse360(str) {
    const int = parseFloat(str);
    return (int % 360 + 360) % 360 / 360;
  }
  function parse1(str) {
    const num = parseFloat(str);
    if (num < 0)
      return 0;
    if (num > 1)
      return 255;
    return Math.round(num * 255);
  }
  function parsePercentage(str) {
    const int = parseFloat(str);
    if (int < 0)
      return 0;
    if (int > 100)
      return 1;
    return int / 100;
  }
  function colorToRgba(input) {
    let int32Color = normalizeColor(input);
    if (int32Color === null)
      return input;
    int32Color = int32Color || 0;
    let r = (int32Color & 4278190080) >>> 24;
    let g = (int32Color & 16711680) >>> 16;
    let b = (int32Color & 65280) >>> 8;
    let a2 = (int32Color & 255) / 255;
    return `rgba(${r}, ${g}, ${b}, ${a2})`;
  }
  const createInterpolator = (range2, output, extrapolate) => {
    if (is.fun(range2)) {
      return range2;
    }
    if (is.arr(range2)) {
      return createInterpolator({
        range: range2,
        output,
        extrapolate
      });
    }
    if (is.str(range2.output[0])) {
      return createStringInterpolator$1(range2);
    }
    const config2 = range2;
    const outputRange = config2.output;
    const inputRange = config2.range || [0, 1];
    const extrapolateLeft = config2.extrapolateLeft || config2.extrapolate || "extend";
    const extrapolateRight = config2.extrapolateRight || config2.extrapolate || "extend";
    const easing = config2.easing || ((t) => t);
    return (input) => {
      const range3 = findRange(input, inputRange);
      return interpolate(input, inputRange[range3], inputRange[range3 + 1], outputRange[range3], outputRange[range3 + 1], easing, extrapolateLeft, extrapolateRight, config2.map);
    };
  };
  function interpolate(input, inputMin, inputMax, outputMin, outputMax, easing, extrapolateLeft, extrapolateRight, map) {
    let result = map ? map(input) : input;
    if (result < inputMin) {
      if (extrapolateLeft === "identity")
        return result;
      else if (extrapolateLeft === "clamp")
        result = inputMin;
    }
    if (result > inputMax) {
      if (extrapolateRight === "identity")
        return result;
      else if (extrapolateRight === "clamp")
        result = inputMax;
    }
    if (outputMin === outputMax)
      return outputMin;
    if (inputMin === inputMax)
      return input <= inputMin ? outputMin : outputMax;
    if (inputMin === -Infinity)
      result = -result;
    else if (inputMax === Infinity)
      result = result - inputMin;
    else
      result = (result - inputMin) / (inputMax - inputMin);
    result = easing(result);
    if (outputMin === -Infinity)
      result = -result;
    else if (outputMax === Infinity)
      result = result + outputMin;
    else
      result = result * (outputMax - outputMin) + outputMin;
    return result;
  }
  function findRange(input, inputRange) {
    for (var i = 1; i < inputRange.length - 1; ++i)
      if (inputRange[i] >= input)
        break;
    return i - 1;
  }
  const steps = (steps2, direction = "end") => (progress) => {
    progress = direction === "end" ? Math.min(progress, 0.999) : Math.max(progress, 1e-3);
    const expanded = progress * steps2;
    const rounded = direction === "end" ? Math.floor(expanded) : Math.ceil(expanded);
    return clamp(0, 1, rounded / steps2);
  };
  const c1 = 1.70158;
  const c2 = c1 * 1.525;
  const c3 = c1 + 1;
  const c4 = 2 * Math.PI / 3;
  const c5 = 2 * Math.PI / 4.5;
  const bounceOut = (x2) => {
    const n1 = 7.5625;
    const d1 = 2.75;
    if (x2 < 1 / d1) {
      return n1 * x2 * x2;
    } else if (x2 < 2 / d1) {
      return n1 * (x2 -= 1.5 / d1) * x2 + 0.75;
    } else if (x2 < 2.5 / d1) {
      return n1 * (x2 -= 2.25 / d1) * x2 + 0.9375;
    } else {
      return n1 * (x2 -= 2.625 / d1) * x2 + 0.984375;
    }
  };
  const easings = {
    linear: (x2) => x2,
    easeInQuad: (x2) => x2 * x2,
    easeOutQuad: (x2) => 1 - (1 - x2) * (1 - x2),
    easeInOutQuad: (x2) => x2 < 0.5 ? 2 * x2 * x2 : 1 - Math.pow(-2 * x2 + 2, 2) / 2,
    easeInCubic: (x2) => x2 * x2 * x2,
    easeOutCubic: (x2) => 1 - Math.pow(1 - x2, 3),
    easeInOutCubic: (x2) => x2 < 0.5 ? 4 * x2 * x2 * x2 : 1 - Math.pow(-2 * x2 + 2, 3) / 2,
    easeInQuart: (x2) => x2 * x2 * x2 * x2,
    easeOutQuart: (x2) => 1 - Math.pow(1 - x2, 4),
    easeInOutQuart: (x2) => x2 < 0.5 ? 8 * x2 * x2 * x2 * x2 : 1 - Math.pow(-2 * x2 + 2, 4) / 2,
    easeInQuint: (x2) => x2 * x2 * x2 * x2 * x2,
    easeOutQuint: (x2) => 1 - Math.pow(1 - x2, 5),
    easeInOutQuint: (x2) => x2 < 0.5 ? 16 * x2 * x2 * x2 * x2 * x2 : 1 - Math.pow(-2 * x2 + 2, 5) / 2,
    easeInSine: (x2) => 1 - Math.cos(x2 * Math.PI / 2),
    easeOutSine: (x2) => Math.sin(x2 * Math.PI / 2),
    easeInOutSine: (x2) => -(Math.cos(Math.PI * x2) - 1) / 2,
    easeInExpo: (x2) => x2 === 0 ? 0 : Math.pow(2, 10 * x2 - 10),
    easeOutExpo: (x2) => x2 === 1 ? 1 : 1 - Math.pow(2, -10 * x2),
    easeInOutExpo: (x2) => x2 === 0 ? 0 : x2 === 1 ? 1 : x2 < 0.5 ? Math.pow(2, 20 * x2 - 10) / 2 : (2 - Math.pow(2, -20 * x2 + 10)) / 2,
    easeInCirc: (x2) => 1 - Math.sqrt(1 - Math.pow(x2, 2)),
    easeOutCirc: (x2) => Math.sqrt(1 - Math.pow(x2 - 1, 2)),
    easeInOutCirc: (x2) => x2 < 0.5 ? (1 - Math.sqrt(1 - Math.pow(2 * x2, 2))) / 2 : (Math.sqrt(1 - Math.pow(-2 * x2 + 2, 2)) + 1) / 2,
    easeInBack: (x2) => c3 * x2 * x2 * x2 - c1 * x2 * x2,
    easeOutBack: (x2) => 1 + c3 * Math.pow(x2 - 1, 3) + c1 * Math.pow(x2 - 1, 2),
    easeInOutBack: (x2) => x2 < 0.5 ? Math.pow(2 * x2, 2) * ((c2 + 1) * 2 * x2 - c2) / 2 : (Math.pow(2 * x2 - 2, 2) * ((c2 + 1) * (x2 * 2 - 2) + c2) + 2) / 2,
    easeInElastic: (x2) => x2 === 0 ? 0 : x2 === 1 ? 1 : -Math.pow(2, 10 * x2 - 10) * Math.sin((x2 * 10 - 10.75) * c4),
    easeOutElastic: (x2) => x2 === 0 ? 0 : x2 === 1 ? 1 : Math.pow(2, -10 * x2) * Math.sin((x2 * 10 - 0.75) * c4) + 1,
    easeInOutElastic: (x2) => x2 === 0 ? 0 : x2 === 1 ? 1 : x2 < 0.5 ? -(Math.pow(2, 20 * x2 - 10) * Math.sin((20 * x2 - 11.125) * c5)) / 2 : Math.pow(2, -20 * x2 + 10) * Math.sin((20 * x2 - 11.125) * c5) / 2 + 1,
    easeInBounce: (x2) => 1 - bounceOut(1 - x2),
    easeOutBounce: bounceOut,
    easeInOutBounce: (x2) => x2 < 0.5 ? (1 - bounceOut(1 - 2 * x2)) / 2 : (1 + bounceOut(2 * x2 - 1)) / 2,
    steps
  };
  function _extends$3() {
    _extends$3 = Object.assign ? Object.assign.bind() : function(target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
    return _extends$3.apply(this, arguments);
  }
  const $get = Symbol.for("FluidValue.get");
  const $observers = Symbol.for("FluidValue.observers");
  const hasFluidValue = (arg) => Boolean(arg && arg[$get]);
  const getFluidValue = (arg) => arg && arg[$get] ? arg[$get]() : arg;
  const getFluidObservers = (target) => target[$observers] || null;
  function callFluidObserver(observer, event) {
    if (observer.eventObserved) {
      observer.eventObserved(event);
    } else {
      observer(event);
    }
  }
  function callFluidObservers(target, event) {
    let observers = target[$observers];
    if (observers) {
      observers.forEach((observer) => {
        callFluidObserver(observer, event);
      });
    }
  }
  class FluidValue {
    constructor(get) {
      this[$get] = void 0;
      this[$observers] = void 0;
      if (!get && !(get = this.get)) {
        throw Error("Unknown getter");
      }
      setFluidGetter(this, get);
    }
  }
  const setFluidGetter = (target, get) => setHidden(target, $get, get);
  function addFluidObserver(target, observer) {
    if (target[$get]) {
      let observers = target[$observers];
      if (!observers) {
        setHidden(target, $observers, observers = /* @__PURE__ */ new Set());
      }
      if (!observers.has(observer)) {
        observers.add(observer);
        if (target.observerAdded) {
          target.observerAdded(observers.size, observer);
        }
      }
    }
    return observer;
  }
  function removeFluidObserver(target, observer) {
    let observers = target[$observers];
    if (observers && observers.has(observer)) {
      const count = observers.size - 1;
      if (count) {
        observers.delete(observer);
      } else {
        target[$observers] = null;
      }
      if (target.observerRemoved) {
        target.observerRemoved(count, observer);
      }
    }
  }
  const setHidden = (target, key, value) => Object.defineProperty(target, key, {
    value,
    writable: true,
    configurable: true
  });
  const numberRegex = /[+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?/g;
  const colorRegex = /(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))/gi;
  const unitRegex = new RegExp(`(${numberRegex.source})(%|[a-z]+)`, "i");
  const rgbaRegex = /rgba\(([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+)\)/gi;
  const cssVariableRegex = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;
  const variableToRgba = (input) => {
    const [token, fallback] = parseCSSVariable(input);
    if (!token || isSSR()) {
      return input;
    }
    const value = window.getComputedStyle(document.documentElement).getPropertyValue(token);
    if (value) {
      return value.trim();
    } else if (fallback && fallback.startsWith("--")) {
      const _value = window.getComputedStyle(document.documentElement).getPropertyValue(fallback);
      if (_value) {
        return _value;
      } else {
        return input;
      }
    } else if (fallback && cssVariableRegex.test(fallback)) {
      return variableToRgba(fallback);
    } else if (fallback) {
      return fallback;
    }
    return input;
  };
  const parseCSSVariable = (current) => {
    const match = cssVariableRegex.exec(current);
    if (!match)
      return [,];
    const [, token, fallback] = match;
    return [token, fallback];
  };
  let namedColorRegex;
  const rgbaRound = (_, p1, p2, p3, p4) => `rgba(${Math.round(p1)}, ${Math.round(p2)}, ${Math.round(p3)}, ${p4})`;
  const createStringInterpolator = (config2) => {
    if (!namedColorRegex)
      namedColorRegex = colors$1 ? new RegExp(`(${Object.keys(colors$1).join("|")})(?!\\w)`, "g") : /^\b$/;
    const output = config2.output.map((value) => {
      return getFluidValue(value).replace(cssVariableRegex, variableToRgba).replace(colorRegex, colorToRgba).replace(namedColorRegex, colorToRgba);
    });
    const keyframes = output.map((value) => value.match(numberRegex).map(Number));
    const outputRanges = keyframes[0].map((_, i) => keyframes.map((values) => {
      if (!(i in values)) {
        throw Error('The arity of each "output" value must be equal');
      }
      return values[i];
    }));
    const interpolators = outputRanges.map((output2) => createInterpolator(_extends$3({}, config2, {
      output: output2
    })));
    return (input) => {
      var _output$find;
      const missingUnit = !unitRegex.test(output[0]) && ((_output$find = output.find((value) => unitRegex.test(value))) == null ? void 0 : _output$find.replace(numberRegex, ""));
      let i = 0;
      return output[0].replace(numberRegex, () => `${interpolators[i++](input)}${missingUnit || ""}`).replace(rgbaRegex, rgbaRound);
    };
  };
  const prefix = "react-spring: ";
  const once = (fn) => {
    const func = fn;
    let called = false;
    if (typeof func != "function") {
      throw new TypeError(`${prefix}once requires a function parameter`);
    }
    return (...args) => {
      if (!called) {
        func(...args);
        called = true;
      }
    };
  };
  const warnInterpolate = once(console.warn);
  function deprecateInterpolate() {
    warnInterpolate(`${prefix}The "interpolate" function is deprecated in v9 (use "to" instead)`);
  }
  const warnDirectCall = once(console.warn);
  function deprecateDirectCall() {
    warnDirectCall(`${prefix}Directly calling start instead of using the api object is deprecated in v9 (use ".start" instead), this will be removed in later 0.X.0 versions`);
  }
  function isAnimatedString(value) {
    return is.str(value) && (value[0] == "#" || /\d/.test(value) || !isSSR() && cssVariableRegex.test(value) || value in (colors$1 || {}));
  }
  const useIsomorphicLayoutEffect = isSSR() ? React.useEffect : React.useLayoutEffect;
  const useIsMounted = () => {
    const isMounted = React.useRef(false);
    useIsomorphicLayoutEffect(() => {
      isMounted.current = true;
      return () => {
        isMounted.current = false;
      };
    }, []);
    return isMounted;
  };
  function useForceUpdate$1() {
    const update2 = React.useState()[1];
    const isMounted = useIsMounted();
    return () => {
      if (isMounted.current) {
        update2(Math.random());
      }
    };
  }
  function useMemoOne(getResult, inputs) {
    const [initial] = React.useState(() => ({
      inputs,
      result: getResult()
    }));
    const committed = React.useRef();
    const prevCache = committed.current;
    let cache = prevCache;
    if (cache) {
      const useCache = Boolean(inputs && cache.inputs && areInputsEqual(inputs, cache.inputs));
      if (!useCache) {
        cache = {
          inputs,
          result: getResult()
        };
      }
    } else {
      cache = initial;
    }
    React.useEffect(() => {
      committed.current = cache;
      if (prevCache == initial) {
        initial.inputs = initial.result = void 0;
      }
    }, [cache]);
    return cache.result;
  }
  function areInputsEqual(next, prev) {
    if (next.length !== prev.length) {
      return false;
    }
    for (let i = 0; i < next.length; i++) {
      if (next[i] !== prev[i]) {
        return false;
      }
    }
    return true;
  }
  const useOnce = (effect) => React.useEffect(effect, emptyDeps);
  const emptyDeps = [];
  function usePrev(value) {
    const prevRef = React.useRef();
    React.useEffect(() => {
      prevRef.current = value;
    });
    return prevRef.current;
  }
  const $node = Symbol.for("Animated:node");
  const isAnimated = (value) => !!value && value[$node] === value;
  const getAnimated = (owner) => owner && owner[$node];
  const setAnimated = (owner, node) => defineHidden(owner, $node, node);
  const getPayload = (owner) => owner && owner[$node] && owner[$node].getPayload();
  class Animated {
    constructor() {
      this.payload = void 0;
      setAnimated(this, this);
    }
    getPayload() {
      return this.payload || [];
    }
  }
  class AnimatedValue extends Animated {
    constructor(_value) {
      super();
      this.done = true;
      this.elapsedTime = void 0;
      this.lastPosition = void 0;
      this.lastVelocity = void 0;
      this.v0 = void 0;
      this.durationProgress = 0;
      this._value = _value;
      if (is.num(this._value)) {
        this.lastPosition = this._value;
      }
    }
    static create(value) {
      return new AnimatedValue(value);
    }
    getPayload() {
      return [this];
    }
    getValue() {
      return this._value;
    }
    setValue(value, step) {
      if (is.num(value)) {
        this.lastPosition = value;
        if (step) {
          value = Math.round(value / step) * step;
          if (this.done) {
            this.lastPosition = value;
          }
        }
      }
      if (this._value === value) {
        return false;
      }
      this._value = value;
      return true;
    }
    reset() {
      const {
        done
      } = this;
      this.done = false;
      if (is.num(this._value)) {
        this.elapsedTime = 0;
        this.durationProgress = 0;
        this.lastPosition = this._value;
        if (done)
          this.lastVelocity = null;
        this.v0 = null;
      }
    }
  }
  class AnimatedString extends AnimatedValue {
    constructor(value) {
      super(0);
      this._string = null;
      this._toString = void 0;
      this._toString = createInterpolator({
        output: [value, value]
      });
    }
    static create(value) {
      return new AnimatedString(value);
    }
    getValue() {
      let value = this._string;
      return value == null ? this._string = this._toString(this._value) : value;
    }
    setValue(value) {
      if (is.str(value)) {
        if (value == this._string) {
          return false;
        }
        this._string = value;
        this._value = 1;
      } else if (super.setValue(value)) {
        this._string = null;
      } else {
        return false;
      }
      return true;
    }
    reset(goal) {
      if (goal) {
        this._toString = createInterpolator({
          output: [this.getValue(), goal]
        });
      }
      this._value = 0;
      super.reset();
    }
  }
  const TreeContext = {
    dependencies: null
  };
  class AnimatedObject extends Animated {
    constructor(source) {
      super();
      this.source = source;
      this.setValue(source);
    }
    getValue(animated2) {
      const values = {};
      eachProp(this.source, (source, key) => {
        if (isAnimated(source)) {
          values[key] = source.getValue(animated2);
        } else if (hasFluidValue(source)) {
          values[key] = getFluidValue(source);
        } else if (!animated2) {
          values[key] = source;
        }
      });
      return values;
    }
    setValue(source) {
      this.source = source;
      this.payload = this._makePayload(source);
    }
    reset() {
      if (this.payload) {
        each(this.payload, (node) => node.reset());
      }
    }
    _makePayload(source) {
      if (source) {
        const payload = /* @__PURE__ */ new Set();
        eachProp(source, this._addToPayload, payload);
        return Array.from(payload);
      }
    }
    _addToPayload(source) {
      if (TreeContext.dependencies && hasFluidValue(source)) {
        TreeContext.dependencies.add(source);
      }
      const payload = getPayload(source);
      if (payload) {
        each(payload, (node) => this.add(node));
      }
    }
  }
  class AnimatedArray extends AnimatedObject {
    constructor(source) {
      super(source);
    }
    static create(source) {
      return new AnimatedArray(source);
    }
    getValue() {
      return this.source.map((node) => node.getValue());
    }
    setValue(source) {
      const payload = this.getPayload();
      if (source.length == payload.length) {
        return payload.map((node, i) => node.setValue(source[i])).some(Boolean);
      }
      super.setValue(source.map(makeAnimated));
      return true;
    }
  }
  function makeAnimated(value) {
    const nodeType = isAnimatedString(value) ? AnimatedString : AnimatedValue;
    return nodeType.create(value);
  }
  function getAnimatedType(value) {
    const parentNode = getAnimated(value);
    return parentNode ? parentNode.constructor : is.arr(value) ? AnimatedArray : isAnimatedString(value) ? AnimatedString : AnimatedValue;
  }
  function _extends$2() {
    _extends$2 = Object.assign ? Object.assign.bind() : function(target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
    return _extends$2.apply(this, arguments);
  }
  const withAnimated = (Component, host2) => {
    const hasInstance = !is.fun(Component) || Component.prototype && Component.prototype.isReactComponent;
    return React.forwardRef((givenProps, givenRef) => {
      const instanceRef = React.useRef(null);
      const ref = hasInstance && React.useCallback((value) => {
        instanceRef.current = updateRef(givenRef, value);
      }, [givenRef]);
      const [props, deps] = getAnimatedState(givenProps, host2);
      const forceUpdate = useForceUpdate$1();
      const callback = () => {
        const instance = instanceRef.current;
        if (hasInstance && !instance) {
          return;
        }
        const didUpdate = instance ? host2.applyAnimatedValues(instance, props.getValue(true)) : false;
        if (didUpdate === false) {
          forceUpdate();
        }
      };
      const observer = new PropsObserver(callback, deps);
      const observerRef = React.useRef();
      useIsomorphicLayoutEffect(() => {
        observerRef.current = observer;
        each(deps, (dep) => addFluidObserver(dep, observer));
        return () => {
          if (observerRef.current) {
            each(observerRef.current.deps, (dep) => removeFluidObserver(dep, observerRef.current));
            raf.cancel(observerRef.current.update);
          }
        };
      });
      React.useEffect(callback, []);
      useOnce(() => () => {
        const observer2 = observerRef.current;
        each(observer2.deps, (dep) => removeFluidObserver(dep, observer2));
      });
      const usedProps = host2.getComponentProps(props.getValue());
      return React__namespace.createElement(Component, _extends$2({}, usedProps, {
        ref
      }));
    });
  };
  class PropsObserver {
    constructor(update2, deps) {
      this.update = update2;
      this.deps = deps;
    }
    eventObserved(event) {
      if (event.type == "change") {
        raf.write(this.update);
      }
    }
  }
  function getAnimatedState(props, host2) {
    const dependencies = /* @__PURE__ */ new Set();
    TreeContext.dependencies = dependencies;
    if (props.style)
      props = _extends$2({}, props, {
        style: host2.createAnimatedStyle(props.style)
      });
    props = new AnimatedObject(props);
    TreeContext.dependencies = null;
    return [props, dependencies];
  }
  function updateRef(ref, value) {
    if (ref) {
      if (is.fun(ref))
        ref(value);
      else
        ref.current = value;
    }
    return value;
  }
  const cacheKey = Symbol.for("AnimatedComponent");
  const createHost = (components, {
    applyAnimatedValues: _applyAnimatedValues = () => false,
    createAnimatedStyle: _createAnimatedStyle = (style) => new AnimatedObject(style),
    getComponentProps: _getComponentProps = (props) => props
  } = {}) => {
    const hostConfig = {
      applyAnimatedValues: _applyAnimatedValues,
      createAnimatedStyle: _createAnimatedStyle,
      getComponentProps: _getComponentProps
    };
    const animated2 = (Component) => {
      const displayName = getDisplayName(Component) || "Anonymous";
      if (is.str(Component)) {
        Component = animated2[Component] || (animated2[Component] = withAnimated(Component, hostConfig));
      } else {
        Component = Component[cacheKey] || (Component[cacheKey] = withAnimated(Component, hostConfig));
      }
      Component.displayName = `Animated(${displayName})`;
      return Component;
    };
    eachProp(components, (Component, key) => {
      if (is.arr(components)) {
        key = getDisplayName(Component);
      }
      animated2[key] = animated2(Component);
    });
    return {
      animated: animated2
    };
  };
  const getDisplayName = (arg) => is.str(arg) ? arg : arg && is.str(arg.displayName) ? arg.displayName : is.fun(arg) && arg.name || null;
  function _extends$1() {
    _extends$1 = Object.assign ? Object.assign.bind() : function(target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
    return _extends$1.apply(this, arguments);
  }
  function callProp(value, ...args) {
    return is.fun(value) ? value(...args) : value;
  }
  const matchProp = (value, key) => value === true || !!(key && value && (is.fun(value) ? value(key) : toArray(value).includes(key)));
  const resolveProp = (prop, key) => is.obj(prop) ? key && prop[key] : prop;
  const getDefaultProp = (props, key) => props.default === true ? props[key] : props.default ? props.default[key] : void 0;
  const noopTransform = (value) => value;
  const getDefaultProps = (props, transform = noopTransform) => {
    let keys = DEFAULT_PROPS;
    if (props.default && props.default !== true) {
      props = props.default;
      keys = Object.keys(props);
    }
    const defaults2 = {};
    for (const key of keys) {
      const value = transform(props[key], key);
      if (!is.und(value)) {
        defaults2[key] = value;
      }
    }
    return defaults2;
  };
  const DEFAULT_PROPS = ["config", "onProps", "onStart", "onChange", "onPause", "onResume", "onRest"];
  const RESERVED_PROPS = {
    config: 1,
    from: 1,
    to: 1,
    ref: 1,
    loop: 1,
    reset: 1,
    pause: 1,
    cancel: 1,
    reverse: 1,
    immediate: 1,
    default: 1,
    delay: 1,
    onProps: 1,
    onStart: 1,
    onChange: 1,
    onPause: 1,
    onResume: 1,
    onRest: 1,
    onResolve: 1,
    items: 1,
    trail: 1,
    sort: 1,
    expires: 1,
    initial: 1,
    enter: 1,
    update: 1,
    leave: 1,
    children: 1,
    onDestroyed: 1,
    keys: 1,
    callId: 1,
    parentId: 1
  };
  function getForwardProps(props) {
    const forward = {};
    let count = 0;
    eachProp(props, (value, prop) => {
      if (!RESERVED_PROPS[prop]) {
        forward[prop] = value;
        count++;
      }
    });
    if (count) {
      return forward;
    }
  }
  function inferTo(props) {
    const to2 = getForwardProps(props);
    if (to2) {
      const out = {
        to: to2
      };
      eachProp(props, (val, key) => key in to2 || (out[key] = val));
      return out;
    }
    return _extends$1({}, props);
  }
  function computeGoal(value) {
    value = getFluidValue(value);
    return is.arr(value) ? value.map(computeGoal) : isAnimatedString(value) ? globals.createStringInterpolator({
      range: [0, 1],
      output: [value, value]
    })(1) : value;
  }
  function hasProps(props) {
    for (const _ in props)
      return true;
    return false;
  }
  function isAsyncTo(to2) {
    return is.fun(to2) || is.arr(to2) && is.obj(to2[0]);
  }
  function detachRefs(ctrl, ref) {
    var _ctrl$ref;
    (_ctrl$ref = ctrl.ref) == null ? void 0 : _ctrl$ref.delete(ctrl);
    ref == null ? void 0 : ref.delete(ctrl);
  }
  function replaceRef(ctrl, ref) {
    if (ref && ctrl.ref !== ref) {
      var _ctrl$ref2;
      (_ctrl$ref2 = ctrl.ref) == null ? void 0 : _ctrl$ref2.delete(ctrl);
      ref.add(ctrl);
      ctrl.ref = ref;
    }
  }
  const config$1 = {
    default: {
      tension: 170,
      friction: 26
    },
    gentle: {
      tension: 120,
      friction: 14
    },
    wobbly: {
      tension: 180,
      friction: 12
    },
    stiff: {
      tension: 210,
      friction: 20
    },
    slow: {
      tension: 280,
      friction: 60
    },
    molasses: {
      tension: 280,
      friction: 120
    }
  };
  const defaults = _extends$1({}, config$1.default, {
    mass: 1,
    damping: 1,
    easing: easings.linear,
    clamp: false
  });
  class AnimationConfig {
    constructor() {
      this.tension = void 0;
      this.friction = void 0;
      this.frequency = void 0;
      this.damping = void 0;
      this.mass = void 0;
      this.velocity = 0;
      this.restVelocity = void 0;
      this.precision = void 0;
      this.progress = void 0;
      this.duration = void 0;
      this.easing = void 0;
      this.clamp = void 0;
      this.bounce = void 0;
      this.decay = void 0;
      this.round = void 0;
      Object.assign(this, defaults);
    }
  }
  function mergeConfig(config2, newConfig, defaultConfig) {
    if (defaultConfig) {
      defaultConfig = _extends$1({}, defaultConfig);
      sanitizeConfig(defaultConfig, newConfig);
      newConfig = _extends$1({}, defaultConfig, newConfig);
    }
    sanitizeConfig(config2, newConfig);
    Object.assign(config2, newConfig);
    for (const key in defaults) {
      if (config2[key] == null) {
        config2[key] = defaults[key];
      }
    }
    let {
      mass,
      frequency,
      damping
    } = config2;
    if (!is.und(frequency)) {
      if (frequency < 0.01)
        frequency = 0.01;
      if (damping < 0)
        damping = 0;
      config2.tension = Math.pow(2 * Math.PI / frequency, 2) * mass;
      config2.friction = 4 * Math.PI * damping * mass / frequency;
    }
    return config2;
  }
  function sanitizeConfig(config2, props) {
    if (!is.und(props.decay)) {
      config2.duration = void 0;
    } else {
      const isTensionConfig = !is.und(props.tension) || !is.und(props.friction);
      if (isTensionConfig || !is.und(props.frequency) || !is.und(props.damping) || !is.und(props.mass)) {
        config2.duration = void 0;
        config2.decay = void 0;
      }
      if (isTensionConfig) {
        config2.frequency = void 0;
      }
    }
  }
  const emptyArray = [];
  class Animation {
    constructor() {
      this.changed = false;
      this.values = emptyArray;
      this.toValues = null;
      this.fromValues = emptyArray;
      this.to = void 0;
      this.from = void 0;
      this.config = new AnimationConfig();
      this.immediate = false;
    }
  }
  function scheduleProps(callId, {
    key,
    props,
    defaultProps: defaultProps2,
    state,
    actions
  }) {
    return new Promise((resolve, reject) => {
      var _props$cancel;
      let delay;
      let timeout;
      let cancel = matchProp((_props$cancel = props.cancel) != null ? _props$cancel : defaultProps2 == null ? void 0 : defaultProps2.cancel, key);
      if (cancel) {
        onStart();
      } else {
        if (!is.und(props.pause)) {
          state.paused = matchProp(props.pause, key);
        }
        let pause = defaultProps2 == null ? void 0 : defaultProps2.pause;
        if (pause !== true) {
          pause = state.paused || matchProp(pause, key);
        }
        delay = callProp(props.delay || 0, key);
        if (pause) {
          state.resumeQueue.add(onResume);
          actions.pause();
        } else {
          actions.resume();
          onResume();
        }
      }
      function onPause() {
        state.resumeQueue.add(onResume);
        state.timeouts.delete(timeout);
        timeout.cancel();
        delay = timeout.time - raf.now();
      }
      function onResume() {
        if (delay > 0 && !globals.skipAnimation) {
          state.delayed = true;
          timeout = raf.setTimeout(onStart, delay);
          state.pauseQueue.add(onPause);
          state.timeouts.add(timeout);
        } else {
          onStart();
        }
      }
      function onStart() {
        if (state.delayed) {
          state.delayed = false;
        }
        state.pauseQueue.delete(onPause);
        state.timeouts.delete(timeout);
        if (callId <= (state.cancelId || 0)) {
          cancel = true;
        }
        try {
          actions.start(_extends$1({}, props, {
            callId,
            cancel
          }), resolve);
        } catch (err) {
          reject(err);
        }
      }
    });
  }
  const getCombinedResult = (target, results) => results.length == 1 ? results[0] : results.some((result) => result.cancelled) ? getCancelledResult(target.get()) : results.every((result) => result.noop) ? getNoopResult(target.get()) : getFinishedResult(target.get(), results.every((result) => result.finished));
  const getNoopResult = (value) => ({
    value,
    noop: true,
    finished: true,
    cancelled: false
  });
  const getFinishedResult = (value, finished, cancelled = false) => ({
    value,
    finished,
    cancelled
  });
  const getCancelledResult = (value) => ({
    value,
    cancelled: true,
    finished: false
  });
  function runAsync(to2, props, state, target) {
    const {
      callId,
      parentId,
      onRest
    } = props;
    const {
      asyncTo: prevTo,
      promise: prevPromise
    } = state;
    if (!parentId && to2 === prevTo && !props.reset) {
      return prevPromise;
    }
    return state.promise = (async () => {
      state.asyncId = callId;
      state.asyncTo = to2;
      const defaultProps2 = getDefaultProps(props, (value, key) => key === "onRest" ? void 0 : value);
      let preventBail;
      let bail;
      const bailPromise = new Promise((resolve, reject) => (preventBail = resolve, bail = reject));
      const bailIfEnded = (bailSignal) => {
        const bailResult = callId <= (state.cancelId || 0) && getCancelledResult(target) || callId !== state.asyncId && getFinishedResult(target, false);
        if (bailResult) {
          bailSignal.result = bailResult;
          bail(bailSignal);
          throw bailSignal;
        }
      };
      const animate = (arg1, arg2) => {
        const bailSignal = new BailSignal();
        const skipAnimationSignal = new SkipAnimationSignal();
        return (async () => {
          if (globals.skipAnimation) {
            stopAsync(state);
            skipAnimationSignal.result = getFinishedResult(target, false);
            bail(skipAnimationSignal);
            throw skipAnimationSignal;
          }
          bailIfEnded(bailSignal);
          const props2 = is.obj(arg1) ? _extends$1({}, arg1) : _extends$1({}, arg2, {
            to: arg1
          });
          props2.parentId = callId;
          eachProp(defaultProps2, (value, key) => {
            if (is.und(props2[key])) {
              props2[key] = value;
            }
          });
          const result2 = await target.start(props2);
          bailIfEnded(bailSignal);
          if (state.paused) {
            await new Promise((resume) => {
              state.resumeQueue.add(resume);
            });
          }
          return result2;
        })();
      };
      let result;
      if (globals.skipAnimation) {
        stopAsync(state);
        return getFinishedResult(target, false);
      }
      try {
        let animating;
        if (is.arr(to2)) {
          animating = (async (queue) => {
            for (const props2 of queue) {
              await animate(props2);
            }
          })(to2);
        } else {
          animating = Promise.resolve(to2(animate, target.stop.bind(target)));
        }
        await Promise.all([animating.then(preventBail), bailPromise]);
        result = getFinishedResult(target.get(), true, false);
      } catch (err) {
        if (err instanceof BailSignal) {
          result = err.result;
        } else if (err instanceof SkipAnimationSignal) {
          result = err.result;
        } else {
          throw err;
        }
      } finally {
        if (callId == state.asyncId) {
          state.asyncId = parentId;
          state.asyncTo = parentId ? prevTo : void 0;
          state.promise = parentId ? prevPromise : void 0;
        }
      }
      if (is.fun(onRest)) {
        raf.batchedUpdates(() => {
          onRest(result, target, target.item);
        });
      }
      return result;
    })();
  }
  function stopAsync(state, cancelId) {
    flush(state.timeouts, (t) => t.cancel());
    state.pauseQueue.clear();
    state.resumeQueue.clear();
    state.asyncId = state.asyncTo = state.promise = void 0;
    if (cancelId)
      state.cancelId = cancelId;
  }
  class BailSignal extends Error {
    constructor() {
      super("An async animation has been interrupted. You see this error because you forgot to use `await` or `.catch(...)` on its returned promise.");
      this.result = void 0;
    }
  }
  class SkipAnimationSignal extends Error {
    constructor() {
      super("SkipAnimationSignal");
      this.result = void 0;
    }
  }
  const isFrameValue = (value) => value instanceof FrameValue;
  let nextId$1 = 1;
  class FrameValue extends FluidValue {
    constructor(...args) {
      super(...args);
      this.id = nextId$1++;
      this.key = void 0;
      this._priority = 0;
    }
    get priority() {
      return this._priority;
    }
    set priority(priority2) {
      if (this._priority != priority2) {
        this._priority = priority2;
        this._onPriorityChange(priority2);
      }
    }
    get() {
      const node = getAnimated(this);
      return node && node.getValue();
    }
    to(...args) {
      return globals.to(this, args);
    }
    interpolate(...args) {
      deprecateInterpolate();
      return globals.to(this, args);
    }
    toJSON() {
      return this.get();
    }
    observerAdded(count) {
      if (count == 1)
        this._attach();
    }
    observerRemoved(count) {
      if (count == 0)
        this._detach();
    }
    _attach() {
    }
    _detach() {
    }
    _onChange(value, idle = false) {
      callFluidObservers(this, {
        type: "change",
        parent: this,
        value,
        idle
      });
    }
    _onPriorityChange(priority2) {
      if (!this.idle) {
        frameLoop.sort(this);
      }
      callFluidObservers(this, {
        type: "priority",
        parent: this,
        priority: priority2
      });
    }
  }
  const $P = Symbol.for("SpringPhase");
  const HAS_ANIMATED = 1;
  const IS_ANIMATING = 2;
  const IS_PAUSED = 4;
  const hasAnimated = (target) => (target[$P] & HAS_ANIMATED) > 0;
  const isAnimating = (target) => (target[$P] & IS_ANIMATING) > 0;
  const isPaused = (target) => (target[$P] & IS_PAUSED) > 0;
  const setActiveBit = (target, active) => active ? target[$P] |= IS_ANIMATING | HAS_ANIMATED : target[$P] &= ~IS_ANIMATING;
  const setPausedBit = (target, paused) => paused ? target[$P] |= IS_PAUSED : target[$P] &= ~IS_PAUSED;
  class SpringValue extends FrameValue {
    constructor(arg1, arg2) {
      super();
      this.key = void 0;
      this.animation = new Animation();
      this.queue = void 0;
      this.defaultProps = {};
      this._state = {
        paused: false,
        delayed: false,
        pauseQueue: /* @__PURE__ */ new Set(),
        resumeQueue: /* @__PURE__ */ new Set(),
        timeouts: /* @__PURE__ */ new Set()
      };
      this._pendingCalls = /* @__PURE__ */ new Set();
      this._lastCallId = 0;
      this._lastToId = 0;
      this._memoizedDuration = 0;
      if (!is.und(arg1) || !is.und(arg2)) {
        const props = is.obj(arg1) ? _extends$1({}, arg1) : _extends$1({}, arg2, {
          from: arg1
        });
        if (is.und(props.default)) {
          props.default = true;
        }
        this.start(props);
      }
    }
    get idle() {
      return !(isAnimating(this) || this._state.asyncTo) || isPaused(this);
    }
    get goal() {
      return getFluidValue(this.animation.to);
    }
    get velocity() {
      const node = getAnimated(this);
      return node instanceof AnimatedValue ? node.lastVelocity || 0 : node.getPayload().map((node2) => node2.lastVelocity || 0);
    }
    get hasAnimated() {
      return hasAnimated(this);
    }
    get isAnimating() {
      return isAnimating(this);
    }
    get isPaused() {
      return isPaused(this);
    }
    get isDelayed() {
      return this._state.delayed;
    }
    advance(dt) {
      let idle = true;
      let changed = false;
      const anim = this.animation;
      let {
        config: config2,
        toValues
      } = anim;
      const payload = getPayload(anim.to);
      if (!payload && hasFluidValue(anim.to)) {
        toValues = toArray(getFluidValue(anim.to));
      }
      anim.values.forEach((node2, i) => {
        if (node2.done)
          return;
        const to2 = node2.constructor == AnimatedString ? 1 : payload ? payload[i].lastPosition : toValues[i];
        let finished = anim.immediate;
        let position = to2;
        if (!finished) {
          position = node2.lastPosition;
          if (config2.tension <= 0) {
            node2.done = true;
            return;
          }
          let elapsed = node2.elapsedTime += dt;
          const from = anim.fromValues[i];
          const v0 = node2.v0 != null ? node2.v0 : node2.v0 = is.arr(config2.velocity) ? config2.velocity[i] : config2.velocity;
          let velocity;
          const precision = config2.precision || (from == to2 ? 5e-3 : Math.min(1, Math.abs(to2 - from) * 1e-3));
          if (!is.und(config2.duration)) {
            let p = 1;
            if (config2.duration > 0) {
              if (this._memoizedDuration !== config2.duration) {
                this._memoizedDuration = config2.duration;
                if (node2.durationProgress > 0) {
                  node2.elapsedTime = config2.duration * node2.durationProgress;
                  elapsed = node2.elapsedTime += dt;
                }
              }
              p = (config2.progress || 0) + elapsed / this._memoizedDuration;
              p = p > 1 ? 1 : p < 0 ? 0 : p;
              node2.durationProgress = p;
            }
            position = from + config2.easing(p) * (to2 - from);
            velocity = (position - node2.lastPosition) / dt;
            finished = p == 1;
          } else if (config2.decay) {
            const decay = config2.decay === true ? 0.998 : config2.decay;
            const e = Math.exp(-(1 - decay) * elapsed);
            position = from + v0 / (1 - decay) * (1 - e);
            finished = Math.abs(node2.lastPosition - position) <= precision;
            velocity = v0 * e;
          } else {
            velocity = node2.lastVelocity == null ? v0 : node2.lastVelocity;
            const restVelocity = config2.restVelocity || precision / 10;
            const bounceFactor = config2.clamp ? 0 : config2.bounce;
            const canBounce = !is.und(bounceFactor);
            const isGrowing = from == to2 ? node2.v0 > 0 : from < to2;
            let isMoving;
            let isBouncing = false;
            const step = 1;
            const numSteps = Math.ceil(dt / step);
            for (let n = 0; n < numSteps; ++n) {
              isMoving = Math.abs(velocity) > restVelocity;
              if (!isMoving) {
                finished = Math.abs(to2 - position) <= precision;
                if (finished) {
                  break;
                }
              }
              if (canBounce) {
                isBouncing = position == to2 || position > to2 == isGrowing;
                if (isBouncing) {
                  velocity = -velocity * bounceFactor;
                  position = to2;
                }
              }
              const springForce = -config2.tension * 1e-6 * (position - to2);
              const dampingForce = -config2.friction * 1e-3 * velocity;
              const acceleration = (springForce + dampingForce) / config2.mass;
              velocity = velocity + acceleration * step;
              position = position + velocity * step;
            }
          }
          node2.lastVelocity = velocity;
          if (Number.isNaN(position)) {
            console.warn(`Got NaN while animating:`, this);
            finished = true;
          }
        }
        if (payload && !payload[i].done) {
          finished = false;
        }
        if (finished) {
          node2.done = true;
        } else {
          idle = false;
        }
        if (node2.setValue(position, config2.round)) {
          changed = true;
        }
      });
      const node = getAnimated(this);
      const currVal = node.getValue();
      if (idle) {
        const finalVal = getFluidValue(anim.to);
        if ((currVal !== finalVal || changed) && !config2.decay) {
          node.setValue(finalVal);
          this._onChange(finalVal);
        } else if (changed && config2.decay) {
          this._onChange(currVal);
        }
        this._stop();
      } else if (changed) {
        this._onChange(currVal);
      }
    }
    set(value) {
      raf.batchedUpdates(() => {
        this._stop();
        this._focus(value);
        this._set(value);
      });
      return this;
    }
    pause() {
      this._update({
        pause: true
      });
    }
    resume() {
      this._update({
        pause: false
      });
    }
    finish() {
      if (isAnimating(this)) {
        const {
          to: to2,
          config: config2
        } = this.animation;
        raf.batchedUpdates(() => {
          this._onStart();
          if (!config2.decay) {
            this._set(to2, false);
          }
          this._stop();
        });
      }
      return this;
    }
    update(props) {
      const queue = this.queue || (this.queue = []);
      queue.push(props);
      return this;
    }
    start(to2, arg2) {
      let queue;
      if (!is.und(to2)) {
        queue = [is.obj(to2) ? to2 : _extends$1({}, arg2, {
          to: to2
        })];
      } else {
        queue = this.queue || [];
        this.queue = [];
      }
      return Promise.all(queue.map((props) => {
        const up = this._update(props);
        return up;
      })).then((results) => getCombinedResult(this, results));
    }
    stop(cancel) {
      const {
        to: to2
      } = this.animation;
      this._focus(this.get());
      stopAsync(this._state, cancel && this._lastCallId);
      raf.batchedUpdates(() => this._stop(to2, cancel));
      return this;
    }
    reset() {
      this._update({
        reset: true
      });
    }
    eventObserved(event) {
      if (event.type == "change") {
        this._start();
      } else if (event.type == "priority") {
        this.priority = event.priority + 1;
      }
    }
    _prepareNode(props) {
      const key = this.key || "";
      let {
        to: to2,
        from
      } = props;
      to2 = is.obj(to2) ? to2[key] : to2;
      if (to2 == null || isAsyncTo(to2)) {
        to2 = void 0;
      }
      from = is.obj(from) ? from[key] : from;
      if (from == null) {
        from = void 0;
      }
      const range2 = {
        to: to2,
        from
      };
      if (!hasAnimated(this)) {
        if (props.reverse)
          [to2, from] = [from, to2];
        from = getFluidValue(from);
        if (!is.und(from)) {
          this._set(from);
        } else if (!getAnimated(this)) {
          this._set(to2);
        }
      }
      return range2;
    }
    _update(_ref, isLoop) {
      let props = _extends$1({}, _ref);
      const {
        key,
        defaultProps: defaultProps2
      } = this;
      if (props.default)
        Object.assign(defaultProps2, getDefaultProps(props, (value, prop) => /^on/.test(prop) ? resolveProp(value, key) : value));
      mergeActiveFn(this, props, "onProps");
      sendEvent(this, "onProps", props, this);
      const range2 = this._prepareNode(props);
      if (Object.isFrozen(this)) {
        throw Error("Cannot animate a `SpringValue` object that is frozen. Did you forget to pass your component to `animated(...)` before animating its props?");
      }
      const state = this._state;
      return scheduleProps(++this._lastCallId, {
        key,
        props,
        defaultProps: defaultProps2,
        state,
        actions: {
          pause: () => {
            if (!isPaused(this)) {
              setPausedBit(this, true);
              flushCalls(state.pauseQueue);
              sendEvent(this, "onPause", getFinishedResult(this, checkFinished(this, this.animation.to)), this);
            }
          },
          resume: () => {
            if (isPaused(this)) {
              setPausedBit(this, false);
              if (isAnimating(this)) {
                this._resume();
              }
              flushCalls(state.resumeQueue);
              sendEvent(this, "onResume", getFinishedResult(this, checkFinished(this, this.animation.to)), this);
            }
          },
          start: this._merge.bind(this, range2)
        }
      }).then((result) => {
        if (props.loop && result.finished && !(isLoop && result.noop)) {
          const nextProps = createLoopUpdate(props);
          if (nextProps) {
            return this._update(nextProps, true);
          }
        }
        return result;
      });
    }
    _merge(range2, props, resolve) {
      if (props.cancel) {
        this.stop(true);
        return resolve(getCancelledResult(this));
      }
      const hasToProp = !is.und(range2.to);
      const hasFromProp = !is.und(range2.from);
      if (hasToProp || hasFromProp) {
        if (props.callId > this._lastToId) {
          this._lastToId = props.callId;
        } else {
          return resolve(getCancelledResult(this));
        }
      }
      const {
        key,
        defaultProps: defaultProps2,
        animation: anim
      } = this;
      const {
        to: prevTo,
        from: prevFrom
      } = anim;
      let {
        to: to2 = prevTo,
        from = prevFrom
      } = range2;
      if (hasFromProp && !hasToProp && (!props.default || is.und(to2))) {
        to2 = from;
      }
      if (props.reverse)
        [to2, from] = [from, to2];
      const hasFromChanged = !isEqual(from, prevFrom);
      if (hasFromChanged) {
        anim.from = from;
      }
      from = getFluidValue(from);
      const hasToChanged = !isEqual(to2, prevTo);
      if (hasToChanged) {
        this._focus(to2);
      }
      const hasAsyncTo = isAsyncTo(props.to);
      const {
        config: config2
      } = anim;
      const {
        decay,
        velocity
      } = config2;
      if (hasToProp || hasFromProp) {
        config2.velocity = 0;
      }
      if (props.config && !hasAsyncTo) {
        mergeConfig(config2, callProp(props.config, key), props.config !== defaultProps2.config ? callProp(defaultProps2.config, key) : void 0);
      }
      let node = getAnimated(this);
      if (!node || is.und(to2)) {
        return resolve(getFinishedResult(this, true));
      }
      const reset = is.und(props.reset) ? hasFromProp && !props.default : !is.und(from) && matchProp(props.reset, key);
      const value = reset ? from : this.get();
      const goal = computeGoal(to2);
      const isAnimatable = is.num(goal) || is.arr(goal) || isAnimatedString(goal);
      const immediate = !hasAsyncTo && (!isAnimatable || matchProp(defaultProps2.immediate || props.immediate, key));
      if (hasToChanged) {
        const nodeType = getAnimatedType(to2);
        if (nodeType !== node.constructor) {
          if (immediate) {
            node = this._set(goal);
          } else
            throw Error(`Cannot animate between ${node.constructor.name} and ${nodeType.name}, as the "to" prop suggests`);
        }
      }
      const goalType = node.constructor;
      let started = hasFluidValue(to2);
      let finished = false;
      if (!started) {
        const hasValueChanged = reset || !hasAnimated(this) && hasFromChanged;
        if (hasToChanged || hasValueChanged) {
          finished = isEqual(computeGoal(value), goal);
          started = !finished;
        }
        if (!isEqual(anim.immediate, immediate) && !immediate || !isEqual(config2.decay, decay) || !isEqual(config2.velocity, velocity)) {
          started = true;
        }
      }
      if (finished && isAnimating(this)) {
        if (anim.changed && !reset) {
          started = true;
        } else if (!started) {
          this._stop(prevTo);
        }
      }
      if (!hasAsyncTo) {
        if (started || hasFluidValue(prevTo)) {
          anim.values = node.getPayload();
          anim.toValues = hasFluidValue(to2) ? null : goalType == AnimatedString ? [1] : toArray(goal);
        }
        if (anim.immediate != immediate) {
          anim.immediate = immediate;
          if (!immediate && !reset) {
            this._set(prevTo);
          }
        }
        if (started) {
          const {
            onRest
          } = anim;
          each(ACTIVE_EVENTS, (type2) => mergeActiveFn(this, props, type2));
          const result = getFinishedResult(this, checkFinished(this, prevTo));
          flushCalls(this._pendingCalls, result);
          this._pendingCalls.add(resolve);
          if (anim.changed)
            raf.batchedUpdates(() => {
              anim.changed = !reset;
              onRest == null ? void 0 : onRest(result, this);
              if (reset) {
                callProp(defaultProps2.onRest, result);
              } else {
                anim.onStart == null ? void 0 : anim.onStart(result, this);
              }
            });
        }
      }
      if (reset) {
        this._set(value);
      }
      if (hasAsyncTo) {
        resolve(runAsync(props.to, props, this._state, this));
      } else if (started) {
        this._start();
      } else if (isAnimating(this) && !hasToChanged) {
        this._pendingCalls.add(resolve);
      } else {
        resolve(getNoopResult(value));
      }
    }
    _focus(value) {
      const anim = this.animation;
      if (value !== anim.to) {
        if (getFluidObservers(this)) {
          this._detach();
        }
        anim.to = value;
        if (getFluidObservers(this)) {
          this._attach();
        }
      }
    }
    _attach() {
      let priority2 = 0;
      const {
        to: to2
      } = this.animation;
      if (hasFluidValue(to2)) {
        addFluidObserver(to2, this);
        if (isFrameValue(to2)) {
          priority2 = to2.priority + 1;
        }
      }
      this.priority = priority2;
    }
    _detach() {
      const {
        to: to2
      } = this.animation;
      if (hasFluidValue(to2)) {
        removeFluidObserver(to2, this);
      }
    }
    _set(arg, idle = true) {
      const value = getFluidValue(arg);
      if (!is.und(value)) {
        const oldNode = getAnimated(this);
        if (!oldNode || !isEqual(value, oldNode.getValue())) {
          const nodeType = getAnimatedType(value);
          if (!oldNode || oldNode.constructor != nodeType) {
            setAnimated(this, nodeType.create(value));
          } else {
            oldNode.setValue(value);
          }
          if (oldNode) {
            raf.batchedUpdates(() => {
              this._onChange(value, idle);
            });
          }
        }
      }
      return getAnimated(this);
    }
    _onStart() {
      const anim = this.animation;
      if (!anim.changed) {
        anim.changed = true;
        sendEvent(this, "onStart", getFinishedResult(this, checkFinished(this, anim.to)), this);
      }
    }
    _onChange(value, idle) {
      if (!idle) {
        this._onStart();
        callProp(this.animation.onChange, value, this);
      }
      callProp(this.defaultProps.onChange, value, this);
      super._onChange(value, idle);
    }
    _start() {
      const anim = this.animation;
      getAnimated(this).reset(getFluidValue(anim.to));
      if (!anim.immediate) {
        anim.fromValues = anim.values.map((node) => node.lastPosition);
      }
      if (!isAnimating(this)) {
        setActiveBit(this, true);
        if (!isPaused(this)) {
          this._resume();
        }
      }
    }
    _resume() {
      if (globals.skipAnimation) {
        this.finish();
      } else {
        frameLoop.start(this);
      }
    }
    _stop(goal, cancel) {
      if (isAnimating(this)) {
        setActiveBit(this, false);
        const anim = this.animation;
        each(anim.values, (node) => {
          node.done = true;
        });
        if (anim.toValues) {
          anim.onChange = anim.onPause = anim.onResume = void 0;
        }
        callFluidObservers(this, {
          type: "idle",
          parent: this
        });
        const result = cancel ? getCancelledResult(this.get()) : getFinishedResult(this.get(), checkFinished(this, goal != null ? goal : anim.to));
        flushCalls(this._pendingCalls, result);
        if (anim.changed) {
          anim.changed = false;
          sendEvent(this, "onRest", result, this);
        }
      }
    }
  }
  function checkFinished(target, to2) {
    const goal = computeGoal(to2);
    const value = computeGoal(target.get());
    return isEqual(value, goal);
  }
  function createLoopUpdate(props, loop2 = props.loop, to2 = props.to) {
    let loopRet = callProp(loop2);
    if (loopRet) {
      const overrides = loopRet !== true && inferTo(loopRet);
      const reverse = (overrides || props).reverse;
      const reset = !overrides || overrides.reset;
      return createUpdate(_extends$1({}, props, {
        loop: loop2,
        default: false,
        pause: void 0,
        to: !reverse || isAsyncTo(to2) ? to2 : void 0,
        from: reset ? props.from : void 0,
        reset
      }, overrides));
    }
  }
  function createUpdate(props) {
    const {
      to: to2,
      from
    } = props = inferTo(props);
    const keys = /* @__PURE__ */ new Set();
    if (is.obj(to2))
      findDefined(to2, keys);
    if (is.obj(from))
      findDefined(from, keys);
    props.keys = keys.size ? Array.from(keys) : null;
    return props;
  }
  function declareUpdate(props) {
    const update2 = createUpdate(props);
    if (is.und(update2.default)) {
      update2.default = getDefaultProps(update2);
    }
    return update2;
  }
  function findDefined(values, keys) {
    eachProp(values, (value, key) => value != null && keys.add(key));
  }
  const ACTIVE_EVENTS = ["onStart", "onRest", "onChange", "onPause", "onResume"];
  function mergeActiveFn(target, props, type2) {
    target.animation[type2] = props[type2] !== getDefaultProp(props, type2) ? resolveProp(props[type2], target.key) : void 0;
  }
  function sendEvent(target, type2, ...args) {
    var _target$animation$typ, _target$animation, _target$defaultProps$, _target$defaultProps;
    (_target$animation$typ = (_target$animation = target.animation)[type2]) == null ? void 0 : _target$animation$typ.call(_target$animation, ...args);
    (_target$defaultProps$ = (_target$defaultProps = target.defaultProps)[type2]) == null ? void 0 : _target$defaultProps$.call(_target$defaultProps, ...args);
  }
  const BATCHED_EVENTS = ["onStart", "onChange", "onRest"];
  let nextId = 1;
  class Controller {
    constructor(props, flush2) {
      this.id = nextId++;
      this.springs = {};
      this.queue = [];
      this.ref = void 0;
      this._flush = void 0;
      this._initialProps = void 0;
      this._lastAsyncId = 0;
      this._active = /* @__PURE__ */ new Set();
      this._changed = /* @__PURE__ */ new Set();
      this._started = false;
      this._item = void 0;
      this._state = {
        paused: false,
        pauseQueue: /* @__PURE__ */ new Set(),
        resumeQueue: /* @__PURE__ */ new Set(),
        timeouts: /* @__PURE__ */ new Set()
      };
      this._events = {
        onStart: /* @__PURE__ */ new Map(),
        onChange: /* @__PURE__ */ new Map(),
        onRest: /* @__PURE__ */ new Map()
      };
      this._onFrame = this._onFrame.bind(this);
      if (flush2) {
        this._flush = flush2;
      }
      if (props) {
        this.start(_extends$1({
          default: true
        }, props));
      }
    }
    get idle() {
      return !this._state.asyncTo && Object.values(this.springs).every((spring) => {
        return spring.idle && !spring.isDelayed && !spring.isPaused;
      });
    }
    get item() {
      return this._item;
    }
    set item(item) {
      this._item = item;
    }
    get() {
      const values = {};
      this.each((spring, key) => values[key] = spring.get());
      return values;
    }
    set(values) {
      for (const key in values) {
        const value = values[key];
        if (!is.und(value)) {
          this.springs[key].set(value);
        }
      }
    }
    update(props) {
      if (props) {
        this.queue.push(createUpdate(props));
      }
      return this;
    }
    start(props) {
      let {
        queue
      } = this;
      if (props) {
        queue = toArray(props).map(createUpdate);
      } else {
        this.queue = [];
      }
      if (this._flush) {
        return this._flush(this, queue);
      }
      prepareKeys(this, queue);
      return flushUpdateQueue(this, queue);
    }
    stop(arg, keys) {
      if (arg !== !!arg) {
        keys = arg;
      }
      if (keys) {
        const springs = this.springs;
        each(toArray(keys), (key) => springs[key].stop(!!arg));
      } else {
        stopAsync(this._state, this._lastAsyncId);
        this.each((spring) => spring.stop(!!arg));
      }
      return this;
    }
    pause(keys) {
      if (is.und(keys)) {
        this.start({
          pause: true
        });
      } else {
        const springs = this.springs;
        each(toArray(keys), (key) => springs[key].pause());
      }
      return this;
    }
    resume(keys) {
      if (is.und(keys)) {
        this.start({
          pause: false
        });
      } else {
        const springs = this.springs;
        each(toArray(keys), (key) => springs[key].resume());
      }
      return this;
    }
    each(iterator) {
      eachProp(this.springs, iterator);
    }
    _onFrame() {
      const {
        onStart,
        onChange,
        onRest
      } = this._events;
      const active = this._active.size > 0;
      const changed = this._changed.size > 0;
      if (active && !this._started || changed && !this._started) {
        this._started = true;
        flush(onStart, ([onStart2, result]) => {
          result.value = this.get();
          onStart2(result, this, this._item);
        });
      }
      const idle = !active && this._started;
      const values = changed || idle && onRest.size ? this.get() : null;
      if (changed && onChange.size) {
        flush(onChange, ([onChange2, result]) => {
          result.value = values;
          onChange2(result, this, this._item);
        });
      }
      if (idle) {
        this._started = false;
        flush(onRest, ([onRest2, result]) => {
          result.value = values;
          onRest2(result, this, this._item);
        });
      }
    }
    eventObserved(event) {
      if (event.type == "change") {
        this._changed.add(event.parent);
        if (!event.idle) {
          this._active.add(event.parent);
        }
      } else if (event.type == "idle") {
        this._active.delete(event.parent);
      } else
        return;
      raf.onFrame(this._onFrame);
    }
  }
  function flushUpdateQueue(ctrl, queue) {
    return Promise.all(queue.map((props) => flushUpdate(ctrl, props))).then((results) => getCombinedResult(ctrl, results));
  }
  async function flushUpdate(ctrl, props, isLoop) {
    const {
      keys,
      to: to2,
      from,
      loop: loop2,
      onRest,
      onResolve
    } = props;
    const defaults2 = is.obj(props.default) && props.default;
    if (loop2) {
      props.loop = false;
    }
    if (to2 === false)
      props.to = null;
    if (from === false)
      props.from = null;
    const asyncTo = is.arr(to2) || is.fun(to2) ? to2 : void 0;
    if (asyncTo) {
      props.to = void 0;
      props.onRest = void 0;
      if (defaults2) {
        defaults2.onRest = void 0;
      }
    } else {
      each(BATCHED_EVENTS, (key) => {
        const handler = props[key];
        if (is.fun(handler)) {
          const queue = ctrl["_events"][key];
          props[key] = ({
            finished,
            cancelled
          }) => {
            const result2 = queue.get(handler);
            if (result2) {
              if (!finished)
                result2.finished = false;
              if (cancelled)
                result2.cancelled = true;
            } else {
              queue.set(handler, {
                value: null,
                finished: finished || false,
                cancelled: cancelled || false
              });
            }
          };
          if (defaults2) {
            defaults2[key] = props[key];
          }
        }
      });
    }
    const state = ctrl["_state"];
    if (props.pause === !state.paused) {
      state.paused = props.pause;
      flushCalls(props.pause ? state.pauseQueue : state.resumeQueue);
    } else if (state.paused) {
      props.pause = true;
    }
    const promises = (keys || Object.keys(ctrl.springs)).map((key) => ctrl.springs[key].start(props));
    const cancel = props.cancel === true || getDefaultProp(props, "cancel") === true;
    if (asyncTo || cancel && state.asyncId) {
      promises.push(scheduleProps(++ctrl["_lastAsyncId"], {
        props,
        state,
        actions: {
          pause: noop,
          resume: noop,
          start(props2, resolve) {
            if (cancel) {
              stopAsync(state, ctrl["_lastAsyncId"]);
              resolve(getCancelledResult(ctrl));
            } else {
              props2.onRest = onRest;
              resolve(runAsync(asyncTo, props2, state, ctrl));
            }
          }
        }
      }));
    }
    if (state.paused) {
      await new Promise((resume) => {
        state.resumeQueue.add(resume);
      });
    }
    const result = getCombinedResult(ctrl, await Promise.all(promises));
    if (loop2 && result.finished && !(isLoop && result.noop)) {
      const nextProps = createLoopUpdate(props, loop2, to2);
      if (nextProps) {
        prepareKeys(ctrl, [nextProps]);
        return flushUpdate(ctrl, nextProps, true);
      }
    }
    if (onResolve) {
      raf.batchedUpdates(() => onResolve(result, ctrl, ctrl.item));
    }
    return result;
  }
  function getSprings(ctrl, props) {
    const springs = _extends$1({}, ctrl.springs);
    if (props) {
      each(toArray(props), (props2) => {
        if (is.und(props2.keys)) {
          props2 = createUpdate(props2);
        }
        if (!is.obj(props2.to)) {
          props2 = _extends$1({}, props2, {
            to: void 0
          });
        }
        prepareSprings(springs, props2, (key) => {
          return createSpring(key);
        });
      });
    }
    setSprings(ctrl, springs);
    return springs;
  }
  function setSprings(ctrl, springs) {
    eachProp(springs, (spring, key) => {
      if (!ctrl.springs[key]) {
        ctrl.springs[key] = spring;
        addFluidObserver(spring, ctrl);
      }
    });
  }
  function createSpring(key, observer) {
    const spring = new SpringValue();
    spring.key = key;
    if (observer) {
      addFluidObserver(spring, observer);
    }
    return spring;
  }
  function prepareSprings(springs, props, create) {
    if (props.keys) {
      each(props.keys, (key) => {
        const spring = springs[key] || (springs[key] = create(key));
        spring["_prepareNode"](props);
      });
    }
  }
  function prepareKeys(ctrl, queue) {
    each(queue, (props) => {
      prepareSprings(ctrl.springs, props, (key) => {
        return createSpring(key, ctrl);
      });
    });
  }
  function _objectWithoutPropertiesLoose$1(source, excluded) {
    if (source == null)
      return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;
    for (i = 0; i < sourceKeys.length; i++) {
      key = sourceKeys[i];
      if (excluded.indexOf(key) >= 0)
        continue;
      target[key] = source[key];
    }
    return target;
  }
  const _excluded$6 = ["children"];
  const SpringContext = (_ref) => {
    let {
      children
    } = _ref, props = _objectWithoutPropertiesLoose$1(_ref, _excluded$6);
    const inherited = React.useContext(ctx);
    const pause = props.pause || !!inherited.pause, immediate = props.immediate || !!inherited.immediate;
    props = useMemoOne(() => ({
      pause,
      immediate
    }), [pause, immediate]);
    const {
      Provider
    } = ctx;
    return React__namespace.createElement(Provider, {
      value: props
    }, children);
  };
  const ctx = makeContext(SpringContext, {});
  SpringContext.Provider = ctx.Provider;
  SpringContext.Consumer = ctx.Consumer;
  function makeContext(target, init) {
    Object.assign(target, React__namespace.createContext(init));
    target.Provider._context = target;
    target.Consumer._context = target;
    return target;
  }
  const SpringRef = () => {
    const current = [];
    const SpringRef2 = function SpringRef3(props) {
      deprecateDirectCall();
      const results = [];
      each(current, (ctrl, i) => {
        if (is.und(props)) {
          results.push(ctrl.start());
        } else {
          const update2 = _getProps(props, ctrl, i);
          if (update2) {
            results.push(ctrl.start(update2));
          }
        }
      });
      return results;
    };
    SpringRef2.current = current;
    SpringRef2.add = function(ctrl) {
      if (!current.includes(ctrl)) {
        current.push(ctrl);
      }
    };
    SpringRef2.delete = function(ctrl) {
      const i = current.indexOf(ctrl);
      if (~i)
        current.splice(i, 1);
    };
    SpringRef2.pause = function() {
      each(current, (ctrl) => ctrl.pause(...arguments));
      return this;
    };
    SpringRef2.resume = function() {
      each(current, (ctrl) => ctrl.resume(...arguments));
      return this;
    };
    SpringRef2.set = function(values) {
      each(current, (ctrl) => ctrl.set(values));
    };
    SpringRef2.start = function(props) {
      const results = [];
      each(current, (ctrl, i) => {
        if (is.und(props)) {
          results.push(ctrl.start());
        } else {
          const update2 = this._getProps(props, ctrl, i);
          if (update2) {
            results.push(ctrl.start(update2));
          }
        }
      });
      return results;
    };
    SpringRef2.stop = function() {
      each(current, (ctrl) => ctrl.stop(...arguments));
      return this;
    };
    SpringRef2.update = function(props) {
      each(current, (ctrl, i) => ctrl.update(this._getProps(props, ctrl, i)));
      return this;
    };
    const _getProps = function _getProps2(arg, ctrl, index) {
      return is.fun(arg) ? arg(index, ctrl) : arg;
    };
    SpringRef2._getProps = _getProps;
    return SpringRef2;
  };
  function useSprings(length, props, deps) {
    const propsFn = is.fun(props) && props;
    if (propsFn && !deps)
      deps = [];
    const ref = React.useMemo(() => propsFn || arguments.length == 3 ? SpringRef() : void 0, []);
    const layoutId = React.useRef(0);
    const forceUpdate = useForceUpdate$1();
    const state = React.useMemo(() => ({
      ctrls: [],
      queue: [],
      flush(ctrl, updates2) {
        const springs2 = getSprings(ctrl, updates2);
        const canFlushSync = layoutId.current > 0 && !state.queue.length && !Object.keys(springs2).some((key) => !ctrl.springs[key]);
        return canFlushSync ? flushUpdateQueue(ctrl, updates2) : new Promise((resolve) => {
          setSprings(ctrl, springs2);
          state.queue.push(() => {
            resolve(flushUpdateQueue(ctrl, updates2));
          });
          forceUpdate();
        });
      }
    }), []);
    const ctrls = React.useRef([...state.ctrls]);
    const updates = [];
    const prevLength = usePrev(length) || 0;
    React.useMemo(() => {
      each(ctrls.current.slice(length, prevLength), (ctrl) => {
        detachRefs(ctrl, ref);
        ctrl.stop(true);
      });
      ctrls.current.length = length;
      declareUpdates(prevLength, length);
    }, [length]);
    React.useMemo(() => {
      declareUpdates(0, Math.min(prevLength, length));
    }, deps);
    function declareUpdates(startIndex, endIndex) {
      for (let i = startIndex; i < endIndex; i++) {
        const ctrl = ctrls.current[i] || (ctrls.current[i] = new Controller(null, state.flush));
        const update2 = propsFn ? propsFn(i, ctrl) : props[i];
        if (update2) {
          updates[i] = declareUpdate(update2);
        }
      }
    }
    const springs = ctrls.current.map((ctrl, i) => getSprings(ctrl, updates[i]));
    const context = React.useContext(SpringContext);
    const prevContext = usePrev(context);
    const hasContext = context !== prevContext && hasProps(context);
    useIsomorphicLayoutEffect(() => {
      layoutId.current++;
      state.ctrls = ctrls.current;
      const {
        queue
      } = state;
      if (queue.length) {
        state.queue = [];
        each(queue, (cb) => cb());
      }
      each(ctrls.current, (ctrl, i) => {
        ref == null ? void 0 : ref.add(ctrl);
        if (hasContext) {
          ctrl.start({
            default: context
          });
        }
        const update2 = updates[i];
        if (update2) {
          replaceRef(ctrl, update2.ref);
          if (ctrl.ref) {
            ctrl.queue.push(update2);
          } else {
            ctrl.start(update2);
          }
        }
      });
    });
    useOnce(() => () => {
      each(state.ctrls, (ctrl) => ctrl.stop(true));
    });
    const values = springs.map((x2) => _extends$1({}, x2));
    return ref ? [values, ref] : values;
  }
  function useSpring(props, deps) {
    const isFn = is.fun(props);
    const [[values], ref] = useSprings(1, isFn ? props : [props], isFn ? deps || [] : deps);
    return isFn || arguments.length == 2 ? [values, ref] : values;
  }
  let TransitionPhase;
  (function(TransitionPhase2) {
    TransitionPhase2["MOUNT"] = "mount";
    TransitionPhase2["ENTER"] = "enter";
    TransitionPhase2["UPDATE"] = "update";
    TransitionPhase2["LEAVE"] = "leave";
  })(TransitionPhase || (TransitionPhase = {}));
  class Interpolation extends FrameValue {
    constructor(source, args) {
      super();
      this.key = void 0;
      this.idle = true;
      this.calc = void 0;
      this._active = /* @__PURE__ */ new Set();
      this.source = source;
      this.calc = createInterpolator(...args);
      const value = this._get();
      const nodeType = getAnimatedType(value);
      setAnimated(this, nodeType.create(value));
    }
    advance(_dt) {
      const value = this._get();
      const oldValue = this.get();
      if (!isEqual(value, oldValue)) {
        getAnimated(this).setValue(value);
        this._onChange(value, this.idle);
      }
      if (!this.idle && checkIdle(this._active)) {
        becomeIdle(this);
      }
    }
    _get() {
      const inputs = is.arr(this.source) ? this.source.map(getFluidValue) : toArray(getFluidValue(this.source));
      return this.calc(...inputs);
    }
    _start() {
      if (this.idle && !checkIdle(this._active)) {
        this.idle = false;
        each(getPayload(this), (node) => {
          node.done = false;
        });
        if (globals.skipAnimation) {
          raf.batchedUpdates(() => this.advance());
          becomeIdle(this);
        } else {
          frameLoop.start(this);
        }
      }
    }
    _attach() {
      let priority2 = 1;
      each(toArray(this.source), (source) => {
        if (hasFluidValue(source)) {
          addFluidObserver(source, this);
        }
        if (isFrameValue(source)) {
          if (!source.idle) {
            this._active.add(source);
          }
          priority2 = Math.max(priority2, source.priority + 1);
        }
      });
      this.priority = priority2;
      this._start();
    }
    _detach() {
      each(toArray(this.source), (source) => {
        if (hasFluidValue(source)) {
          removeFluidObserver(source, this);
        }
      });
      this._active.clear();
      becomeIdle(this);
    }
    eventObserved(event) {
      if (event.type == "change") {
        if (event.idle) {
          this.advance();
        } else {
          this._active.add(event.parent);
          this._start();
        }
      } else if (event.type == "idle") {
        this._active.delete(event.parent);
      } else if (event.type == "priority") {
        this.priority = toArray(this.source).reduce((highest, parent) => Math.max(highest, (isFrameValue(parent) ? parent.priority : 0) + 1), 0);
      }
    }
  }
  function isIdle(source) {
    return source.idle !== false;
  }
  function checkIdle(active) {
    return !active.size || Array.from(active).every(isIdle);
  }
  function becomeIdle(self2) {
    if (!self2.idle) {
      self2.idle = true;
      each(getPayload(self2), (node) => {
        node.done = true;
      });
      callFluidObservers(self2, {
        type: "idle",
        parent: self2
      });
    }
  }
  globals.assign({
    createStringInterpolator,
    to: (source, args) => new Interpolation(source, args)
  });
  function _objectWithoutPropertiesLoose(source, excluded) {
    if (source == null)
      return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;
    for (i = 0; i < sourceKeys.length; i++) {
      key = sourceKeys[i];
      if (excluded.indexOf(key) >= 0)
        continue;
      target[key] = source[key];
    }
    return target;
  }
  const _excluded$2 = ["style", "children", "scrollTop", "scrollLeft", "viewBox"];
  const isCustomPropRE = /^--/;
  function dangerousStyleValue(name, value) {
    if (value == null || typeof value === "boolean" || value === "")
      return "";
    if (typeof value === "number" && value !== 0 && !isCustomPropRE.test(name) && !(isUnitlessNumber.hasOwnProperty(name) && isUnitlessNumber[name]))
      return value + "px";
    return ("" + value).trim();
  }
  const attributeCache = {};
  function applyAnimatedValues(instance, props) {
    if (!instance.nodeType || !instance.setAttribute) {
      return false;
    }
    const isFilterElement = instance.nodeName === "filter" || instance.parentNode && instance.parentNode.nodeName === "filter";
    const _ref = props, {
      style,
      children,
      scrollTop,
      scrollLeft,
      viewBox
    } = _ref, attributes = _objectWithoutPropertiesLoose(_ref, _excluded$2);
    const values = Object.values(attributes);
    const names = Object.keys(attributes).map((name) => isFilterElement || instance.hasAttribute(name) ? name : attributeCache[name] || (attributeCache[name] = name.replace(/([A-Z])/g, (n) => "-" + n.toLowerCase())));
    if (children !== void 0) {
      instance.textContent = children;
    }
    for (let name in style) {
      if (style.hasOwnProperty(name)) {
        const value = dangerousStyleValue(name, style[name]);
        if (isCustomPropRE.test(name)) {
          instance.style.setProperty(name, value);
        } else {
          instance.style[name] = value;
        }
      }
    }
    names.forEach((name, i) => {
      instance.setAttribute(name, values[i]);
    });
    if (scrollTop !== void 0) {
      instance.scrollTop = scrollTop;
    }
    if (scrollLeft !== void 0) {
      instance.scrollLeft = scrollLeft;
    }
    if (viewBox !== void 0) {
      instance.setAttribute("viewBox", viewBox);
    }
  }
  let isUnitlessNumber = {
    animationIterationCount: true,
    borderImageOutset: true,
    borderImageSlice: true,
    borderImageWidth: true,
    boxFlex: true,
    boxFlexGroup: true,
    boxOrdinalGroup: true,
    columnCount: true,
    columns: true,
    flex: true,
    flexGrow: true,
    flexPositive: true,
    flexShrink: true,
    flexNegative: true,
    flexOrder: true,
    gridRow: true,
    gridRowEnd: true,
    gridRowSpan: true,
    gridRowStart: true,
    gridColumn: true,
    gridColumnEnd: true,
    gridColumnSpan: true,
    gridColumnStart: true,
    fontWeight: true,
    lineClamp: true,
    lineHeight: true,
    opacity: true,
    order: true,
    orphans: true,
    tabSize: true,
    widows: true,
    zIndex: true,
    zoom: true,
    fillOpacity: true,
    floodOpacity: true,
    stopOpacity: true,
    strokeDasharray: true,
    strokeDashoffset: true,
    strokeMiterlimit: true,
    strokeOpacity: true,
    strokeWidth: true
  };
  const prefixKey = (prefix2, key) => prefix2 + key.charAt(0).toUpperCase() + key.substring(1);
  const prefixes = ["Webkit", "Ms", "Moz", "O"];
  isUnitlessNumber = Object.keys(isUnitlessNumber).reduce((acc, prop) => {
    prefixes.forEach((prefix2) => acc[prefixKey(prefix2, prop)] = acc[prop]);
    return acc;
  }, isUnitlessNumber);
  const _excluded$1 = ["x", "y", "z"];
  const domTransforms = /^(matrix|translate|scale|rotate|skew)/;
  const pxTransforms = /^(translate)/;
  const degTransforms = /^(rotate|skew)/;
  const addUnit = (value, unit) => is.num(value) && value !== 0 ? value + unit : value;
  const isValueIdentity = (value, id) => is.arr(value) ? value.every((v) => isValueIdentity(v, id)) : is.num(value) ? value === id : parseFloat(value) === id;
  class AnimatedStyle extends AnimatedObject {
    constructor(_ref) {
      let {
        x: x2,
        y: y2,
        z
      } = _ref, style = _objectWithoutPropertiesLoose(_ref, _excluded$1);
      const inputs = [];
      const transforms = [];
      if (x2 || y2 || z) {
        inputs.push([x2 || 0, y2 || 0, z || 0]);
        transforms.push((xyz) => [`translate3d(${xyz.map((v) => addUnit(v, "px")).join(",")})`, isValueIdentity(xyz, 0)]);
      }
      eachProp(style, (value, key) => {
        if (key === "transform") {
          inputs.push([value || ""]);
          transforms.push((transform) => [transform, transform === ""]);
        } else if (domTransforms.test(key)) {
          delete style[key];
          if (is.und(value))
            return;
          const unit = pxTransforms.test(key) ? "px" : degTransforms.test(key) ? "deg" : "";
          inputs.push(toArray(value));
          transforms.push(key === "rotate3d" ? ([x3, y3, z2, deg]) => [`rotate3d(${x3},${y3},${z2},${addUnit(deg, unit)})`, isValueIdentity(deg, 0)] : (input) => [`${key}(${input.map((v) => addUnit(v, unit)).join(",")})`, isValueIdentity(input, key.startsWith("scale") ? 1 : 0)]);
        }
      });
      if (inputs.length) {
        style.transform = new FluidTransform(inputs, transforms);
      }
      super(style);
    }
  }
  class FluidTransform extends FluidValue {
    constructor(inputs, transforms) {
      super();
      this._value = null;
      this.inputs = inputs;
      this.transforms = transforms;
    }
    get() {
      return this._value || (this._value = this._get());
    }
    _get() {
      let transform = "";
      let identity2 = true;
      each(this.inputs, (input, i) => {
        const arg1 = getFluidValue(input[0]);
        const [t, id] = this.transforms[i](is.arr(arg1) ? arg1 : input.map(getFluidValue));
        transform += " " + t;
        identity2 = identity2 && id;
      });
      return identity2 ? "none" : transform;
    }
    observerAdded(count) {
      if (count == 1)
        each(this.inputs, (input) => each(input, (value) => hasFluidValue(value) && addFluidObserver(value, this)));
    }
    observerRemoved(count) {
      if (count == 0)
        each(this.inputs, (input) => each(input, (value) => hasFluidValue(value) && removeFluidObserver(value, this)));
    }
    eventObserved(event) {
      if (event.type == "change") {
        this._value = null;
      }
      callFluidObservers(this, event);
    }
  }
  const primitives = ["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "u", "ul", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "tspan"];
  const _excluded = ["scrollTop", "scrollLeft"];
  globals.assign({
    batchedUpdates: ReactDOM.unstable_batchedUpdates,
    createStringInterpolator,
    colors
  });
  const host = createHost(primitives, {
    applyAnimatedValues,
    createAnimatedStyle: (style) => new AnimatedStyle(style),
    getComponentProps: (_ref) => {
      let props = _objectWithoutPropertiesLoose(_ref, _excluded);
      return props;
    }
  });
  const animated = host.animated;
  const elevatorContext = React.createContext({});
  const defaultProps$1d = {
    ...ComponentDefaults,
    height: "200px",
    floorKey: "title",
    list: [],
    sticky: false,
    spaceHeight: 23,
    titleHeight: 35,
    showKeys: true
  };
  const Elevator = (props) => {
    const {
      height,
      floorKey,
      list,
      sticky,
      spaceHeight,
      titleHeight,
      showKeys,
      className,
      style,
      onItemClick,
      onIndexClick,
      children,
      ...rest
    } = {
      ...defaultProps$1d,
      ...props
    };
    const classPrefix2 = "nut-elevator";
    const listview = React.useRef(null);
    const initData = {
      anchorIndex: 0,
      listHeight: [],
      listGroup: [],
      scrollY: 0
    };
    const touchState = React.useRef({
      y1: 0,
      y2: 0
    });
    const [scrollY, setScrollY] = React.useState(0);
    const [currentData, setCurrentData] = React.useState(
      {}
    );
    const [currentKey, setCurrentKey] = React.useState("");
    const [currentIndex, setCurrentIndex] = React.useState(0);
    const [codeIndex, setCodeIndex] = React.useState(0);
    const [scrollStart, setScrollStart] = React.useState(false);
    const state = React.useRef(initData);
    const resetScrollState = () => {
      setScrollStart(false);
    };
    const getData = (el, name) => {
      const prefix2 = "data-";
      return el.getAttribute(prefix2 + name);
    };
    const calculateHeight = () => {
      let height2 = 0;
      state.current.listHeight.push(height2);
      for (let i = 0; i < state.current.listGroup.length; i++) {
        const item = state.current.listGroup[i];
        height2 += item.clientHeight;
        state.current.listHeight.push(height2);
      }
    };
    const scrollTo = (index) => {
      if (!index && index !== 0) {
        return;
      }
      if (!state.current.listHeight.length) {
        calculateHeight();
      }
      let cacheIndex = index;
      if (index < 0) {
        cacheIndex = 0;
      }
      if (index > state.current.listHeight.length - 2) {
        cacheIndex = state.current.listHeight.length - 2;
      }
      setCodeIndex(cacheIndex);
      if (listview.current) {
        listview.current.scrollTo(0, state.current.listHeight[cacheIndex]);
      }
    };
    const bind = useGesture({
      onDragStart: ({ target, offset }) => {
        setScrollStart(true);
        const index = Number(getData(target, "index"));
        touchState.current.y1 = offset[1];
        state.current.anchorIndex = +index;
        setCodeIndex((codeIndex2) => codeIndex2 + index);
        scrollTo(index);
      },
      onDragEnd: ({ offset }) => {
        touchState.current.y2 = offset[1];
        const delta = (touchState.current.y2 - touchState.current.y1) / spaceHeight || 0;
        const cacheIndex = state.current.anchorIndex + Math.ceil(delta);
        setCodeIndex(cacheIndex);
        scrollTo(cacheIndex);
        resetScrollState();
      }
    });
    const handleClickItem = (key, item) => {
      onItemClick && onItemClick(key, item);
      setCurrentData(item);
      setCurrentKey(key);
    };
    const handleClickIndex = (key) => {
      onIndexClick && onIndexClick(key);
    };
    const setListGroup = () => {
      if (listview.current) {
        const els = listview.current.querySelectorAll(".nut-elevator__list__item");
        els.forEach((el) => {
          if (el != null && !state.current.listGroup.includes(el)) {
            state.current.listGroup.push(el);
          }
        });
      }
    };
    const listViewScroll = (e) => {
      const { listHeight } = state.current;
      if (!listHeight.length) {
        calculateHeight();
      }
      const target = e.target;
      const { scrollTop } = target;
      state.current.scrollY = scrollTop;
      setScrollY(scrollTop);
      for (let i = 0; i < listHeight.length - 1; i++) {
        const height1 = listHeight[i];
        const height2 = listHeight[i + 1];
        if (state.current.scrollY >= height1 && state.current.scrollY < height2) {
          setCurrentIndex(i);
          return;
        }
      }
      setCurrentIndex(listHeight.length - 2);
    };
    React.useEffect(() => {
      if (listview.current) {
        setListGroup();
        listview.current.addEventListener("scroll", listViewScroll);
      }
    }, [listview]);
    return /* @__PURE__ */ React.createElement("div", { className: `${classPrefix2} ${className}`, style, ...rest }, sticky && scrollY > 0 ? /* @__PURE__ */ React.createElement("div", { className: `${classPrefix2}__list__fixed` }, /* @__PURE__ */ React.createElement("span", { className: `${classPrefix2}__list__fixed__title` }, list[currentIndex < 0 ? 0 : currentIndex][floorKey])) : null, /* @__PURE__ */ React.createElement(
      "div",
      {
        className: `${classPrefix2}__list`,
        style: { height: Number.isNaN(+height) ? height : `${height}px` }
      },
      /* @__PURE__ */ React.createElement("div", { className: `${classPrefix2}__list__inner`, ref: listview }, list.map((item, idx) => {
        return /* @__PURE__ */ React.createElement("div", { className: `${classPrefix2}__list__item`, key: idx }, /* @__PURE__ */ React.createElement("div", { className: `${classPrefix2}__list__item__code` }, item[floorKey]), /* @__PURE__ */ React.createElement(React.Fragment, null, item.list.map((subitem) => {
          return /* @__PURE__ */ React.createElement(
            "div",
            {
              className: classnamesExports({
                [`${classPrefix2}__list__item__name`]: true,
                [`${classPrefix2}__list__item__name--highcolor`]: currentData.id === subitem.id && currentKey === item[floorKey]
              }),
              key: subitem.id,
              onClick: () => handleClickItem(item[floorKey], subitem)
            },
            children ? /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(elevatorContext.Provider, { value: subitem }, children)) : subitem.name
          );
        })));
      }))
    ), showKeys ? /* @__PURE__ */ React.createElement(React.Fragment, null, list.length && scrollStart ? /* @__PURE__ */ React.createElement(
      "div",
      {
        className: classnamesExports({
          [`${classPrefix2}__code--current`]: true,
          [`${classPrefix2}__code--current--current`]: true
        })
      },
      list[codeIndex < 0 ? 0 : codeIndex][floorKey]
    ) : null, /* @__PURE__ */ React.createElement("div", { className: `${classPrefix2}__bars` }, /* @__PURE__ */ React.createElement(
      animated.div,
      {
        className: `${classPrefix2}__bars__inner`,
        ...bind(),
        style: { touchAction: "pan-y" }
      },
      list.map((item, index) => {
        return /* @__PURE__ */ React.createElement(
          "div",
          {
            className: classnamesExports({
              [`${classPrefix2}__bars__inner__item`]: true,
              [`${classPrefix2}__bars__inner__item--active`]: item[floorKey] === list[currentIndex < 0 ? 0 : currentIndex][floorKey]
            }),
            "data-index": index,
            key: index,
            onClick: () => handleClickIndex(item[floorKey])
          },
          item[floorKey]
        );
      })
    ))) : null);
  };
  Elevator.defaultProps = defaultProps$1d;
  Elevator.displayName = "NutElevator";
  Elevator.Context = elevatorContext;
  const defaultProps$1c = {
    ...ComponentDefaults,
    activeText: "",
    inactiveText: "",
    type: "right",
    position: {
      top: "auto",
      bottom: "auto"
    }
  };
  const FixedNav = (props) => {
    const { locale } = useConfig();
    const {
      className,
      overlay,
      visible,
      list,
      activeText,
      inactiveText,
      position,
      onChange,
      onSelect,
      type: type2,
      children,
      style,
      content,
      ...rest
    } = {
      ...defaultProps$1c,
      ...props
    };
    const classPrefix2 = "nut-fixednav";
    const classes = classnamesExports(
      {
        active: visible
      },
      type2,
      className,
      classPrefix2
    );
    const handleClick2 = (item, event) => {
      onSelect(item, event);
    };
    const onUpdateValue = (value = !visible) => {
      onChange(value);
    };
    return /* @__PURE__ */ React.createElement(
      "div",
      {
        className: classes,
        style: {
          ...position,
          ...style
        },
        ...rest
      },
      overlay && /* @__PURE__ */ React.createElement(
        Overlay,
        {
          visible,
          zIndex: 200,
          onClick: () => onUpdateValue(false)
        }
      ),
      /* @__PURE__ */ React.createElement("div", { className: "list" }, children || /* @__PURE__ */ React.createElement("div", { className: `${classPrefix2}__list` }, list.map((item, index) => {
        return /* @__PURE__ */ React.createElement(
          "div",
          {
            className: `${classPrefix2}__list-item`,
            onClick: (event) => handleClick2(item, event),
            key: item.id || index
          },
          /* @__PURE__ */ React.createElement("img", { src: item.icon, alt: "" }),
          /* @__PURE__ */ React.createElement("div", { className: `${classPrefix2}__list-text` }, item.text),
          item.num && /* @__PURE__ */ React.createElement("div", { className: "b" }, item.num)
        );
      }))),
      /* @__PURE__ */ React.createElement("div", { className: `${classPrefix2}__btn`, onClick: () => onUpdateValue() }, content || /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(y$6, { color: "#fff" }), /* @__PURE__ */ React.createElement("div", { className: "text" }, visible ? activeText || locale.fixednav.activeText : inactiveText || locale.fixednav.inactiveText)))
    );
  };
  FixedNav.defaultProps = defaultProps$1c;
  FixedNav.displayName = "NutFixedNav";
  const defaultProps$1b = {
    ...ComponentDefaults,
    left: "",
    right: "",
    back: "",
    fixed: false,
    safeAreaInsetTop: false,
    placeholder: false,
    zIndex: 10
  };
  const NavBar = (props) => {
    const {
      right,
      left,
      className,
      style,
      back,
      fixed,
      safeAreaInsetTop,
      placeholder,
      zIndex,
      onBackClick
    } = {
      ...defaultProps$1b,
      ...props
    };
    const classPrefix2 = "nut-navbar";
    const children = Array.isArray(props.children) ? props.children : [props.children];
    const styles = () => {
      return {
        ...style,
        zIndex
      };
    };
    const renderLeft = () => {
      return /* @__PURE__ */ React.createElement("div", { className: `${classPrefix2}__left` }, back && /* @__PURE__ */ React.createElement(
        "div",
        {
          className: `${classPrefix2}__left__back`,
          onClick: (e) => onBackClick(e)
        },
        back
      ), left);
    };
    const renderContent = () => {
      return /* @__PURE__ */ React.createElement("div", { className: `${classPrefix2}__title` }, children);
    };
    const renderRight = () => {
      return /* @__PURE__ */ React.createElement("div", { className: `${classPrefix2}__right` }, right);
    };
    const renderWrapper = () => {
      return /* @__PURE__ */ React.createElement("div", { className: cls, style: styles() }, renderLeft(), renderContent(), renderRight());
    };
    const classes = classnamesExports({
      [`${classPrefix2}--fixed`]: fixed,
      [`${classPrefix2}--safe-area-inset-top`]: safeAreaInsetTop
    });
    const cls = classnamesExports(classPrefix2, classes, className);
    return /* @__PURE__ */ React.createElement(React.Fragment, null, fixed && placeholder ? /* @__PURE__ */ React.createElement("div", { className: `${classPrefix2}--placeholder` }, renderWrapper()) : renderWrapper());
  };
  NavBar.defaultProps = defaultProps$1b;
  NavBar.displayName = "NutNavBar";
  const defaultProps$1a = {
    ...ComponentDefaults,
    position: "center",
    transition: "",
    overlayStyle: {},
    overlayClassName: "",
    closeable: false,
    closeIconPosition: "top-right",
    closeIcon: "close",
    destroyOnClose: false,
    portal: null,
    overlay: true,
    round: false,
    onOpen: () => {
    },
    onClose: () => {
    },
    onOverlayClick: (e) => true,
    onCloseIconClick: (e) => true,
    ...defaultOverlayProps
  };
  let _zIndex = 1e3;
  const Popup = (props) => {
    const {
      children,
      visible,
      overlay,
      closeOnOverlayClick,
      overlayStyle,
      overlayClassName,
      zIndex,
      lockScroll,
      duration,
      closeable,
      closeIconPosition,
      closeIcon,
      left,
      title,
      style,
      transition,
      round,
      position,
      className,
      destroyOnClose,
      portal,
      onOpen,
      onClose,
      onOverlayClick,
      onCloseIconClick,
      afterShow,
      afterClose,
      onClick
    } = { ...defaultProps$1a, ...props };
    const [index, setIndex] = React.useState(zIndex || _zIndex);
    const [innerVisible, setInnerVisible] = React.useState(visible);
    const [showChildren, setShowChildren] = React.useState(true);
    const [transitionName, setTransitionName] = React.useState("");
    const classPrefix2 = "nut-popup";
    const baseStyle = {
      zIndex: index
    };
    const overlayStyles = {
      ...overlayStyle,
      ...baseStyle
    };
    const popStyles = {
      ...style,
      ...baseStyle
    };
    const popClassName = classnamesExports({
      round,
      [`${classPrefix2}`]: true,
      [`${classPrefix2}-${position}`]: true,
      [`${className || ""}`]: true
    });
    const closeClasses = classnamesExports({
      [`${classPrefix2}__close-icon`]: true,
      [`${classPrefix2}__close-icon--${closeIconPosition}`]: true
    });
    const open = () => {
      if (!innerVisible) {
        setInnerVisible(true);
        setIndex(++_zIndex);
      }
      if (destroyOnClose) {
        setShowChildren(true);
      }
      onOpen && onOpen();
    };
    const close = () => {
      if (innerVisible) {
        setInnerVisible(false);
        if (destroyOnClose) {
          setTimeout(() => {
            setShowChildren(false);
          }, Number(duration));
        }
        onClose && onClose();
      }
    };
    const onHandleClickOverlay = (e) => {
      e.stopPropagation();
      if (closeOnOverlayClick) {
        const closed = onOverlayClick && onOverlayClick(e);
        closed && close();
      }
    };
    const onHandleClick = (e) => {
      onClick && onClick(e);
    };
    const onHandleClickCloseIcon = (e) => {
      const closed = onCloseIconClick && onCloseIconClick(e);
      closed && close();
    };
    const onHandleOpened = (e) => {
      afterShow && afterShow();
    };
    const onHandleClosed = (e) => {
      afterClose && afterClose();
    };
    const resolveContainer = (getContainer) => {
      const container = typeof getContainer === "function" ? getContainer() : getContainer;
      return container || document.body;
    };
    const renderToContainer = (getContainer, node) => {
      if (getContainer) {
        const container = resolveContainer(getContainer);
        return ReactDOM.createPortal(node, container);
      }
      return node;
    };
    const renderIcon = () => {
      if (closeable) {
        return /* @__PURE__ */ React.createElement("div", { className: closeClasses, onClick: onHandleClickCloseIcon }, React.isValidElement(closeIcon) ? closeIcon : /* @__PURE__ */ React.createElement(x$b, { width: 12, height: 12 }));
      }
      return null;
    };
    const renderTitle = () => {
      return /* @__PURE__ */ React.createElement(React.Fragment, null, position === "bottom" && /* @__PURE__ */ React.createElement(React.Fragment, null, left && /* @__PURE__ */ React.createElement("div", { className: `${classPrefix2}-left-icon` }, left), title && /* @__PURE__ */ React.createElement("div", { className: `${classPrefix2}-title` }, title)));
    };
    const renderPop = () => {
      return /* @__PURE__ */ React.createElement(
        CSSTransition$1,
        {
          classNames: transitionName,
          unmountOnExit: true,
          timeout: duration,
          in: innerVisible,
          onEntered: onHandleOpened,
          onExited: onHandleClosed
        },
        /* @__PURE__ */ React.createElement("div", { style: popStyles, className: popClassName, onClick: onHandleClick }, renderTitle(), renderIcon(), showChildren ? children : "")
      );
    };
    const renderNode = () => {
      return /* @__PURE__ */ React.createElement(React.Fragment, null, overlay ? /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(
        Overlay,
        {
          style: overlayStyles,
          className: overlayClassName,
          visible: innerVisible,
          closeOnOverlayClick,
          zIndex,
          lockScroll,
          duration,
          onClick: onHandleClickOverlay
        }
      ), renderPop()) : /* @__PURE__ */ React.createElement(React.Fragment, null, renderPop()));
    };
    React.useEffect(() => {
      visible && open();
      !visible && close();
    }, [visible]);
    React.useEffect(() => {
      setTransitionName(transition || `${classPrefix2}-slide-${position}`);
    }, [position, transition]);
    return /* @__PURE__ */ React.createElement(React.Fragment, null, renderToContainer(portal, renderNode()));
  };
  Popup.defaultProps = defaultProps$1a;
  Popup.displayName = "NutPopup";
  const handleClick = (e) => {
    e.stopPropagation();
    const isIcon = e.target.className.includes("arrow-icon");
    const isTitle = e.target.className.includes("__title") || isIcon;
    const currentClass = e.currentTarget.className;
    const isShow = currentClass.includes("sidenavbar-show");
    const arrowIcon = e.currentTarget.querySelector(".arrow-icon");
    const iconClass = arrowIcon.className;
    if (isTitle) {
      e.currentTarget.className = isShow ? currentClass.replace("sidenavbar-show", "sidenavbar-hide") : currentClass.replace("sidenavbar-hide", "sidenavbar-show");
      arrowIcon.className = isShow ? iconClass.replace("arrow-down", "arrow-up") : iconClass.replace("arrow-up", "arrow-down");
    }
  };
  const OffsetContext = React.createContext(20);
  const defaultProps$19 = {
    ...ComponentDefaults,
    position: "left",
    width: "80%"
  };
  const SideNavBar = (props) => {
    const classPrefix2 = "nut-sidenavbar";
    const {
      title,
      visible,
      width,
      position,
      children,
      className,
      onClose,
      ...rest
    } = {
      ...defaultProps$19,
      ...props
    };
    const indent = props.indent ? Number(props.indent) : 20;
    return /* @__PURE__ */ React.createElement(
      Popup,
      {
        visible,
        style: { width, height: "100%" },
        position,
        onClose
      },
      /* @__PURE__ */ React.createElement("div", { className: classnamesExports(className, classPrefix2), ...rest }, /* @__PURE__ */ React.createElement("div", { className: `${classPrefix2}__content` }, /* @__PURE__ */ React.createElement(
        "div",
        {
          className: `${classPrefix2}__list sidenavbar-show`,
          onClick: handleClick
        },
        /* @__PURE__ */ React.createElement(
          "div",
          {
            className: `${classPrefix2}__title ${classPrefix2}-border-bt`,
            style: { paddingLeft: `${indent}px` }
          },
          title,
          " ",
          /* @__PURE__ */ React.createElement("i", { className: "arrow-icon arrow-down" })
        ),
        /* @__PURE__ */ React.createElement(OffsetContext.Provider, { value: indent }, /* @__PURE__ */ React.createElement("div", { className: `${classPrefix2}__content` }, children))
      )))
    );
  };
  SideNavBar.defaultProps = defaultProps$19;
  SideNavBar.displayName = "NutSideNavBar";
  const SideNavBarItem = (props) => {
    const classPrefix2 = "nut-subsidenavbar";
    const { title, value, children, onClick, ...rest } = props;
    const clickFn = (e) => {
      e.stopPropagation();
      onClick && onClick({ title, value });
    };
    return /* @__PURE__ */ React.createElement(
      "div",
      {
        className: `${classPrefix2}__item ${classPrefix2}-border-bt`,
        onClick: clickFn,
        ...rest
      },
      title
    );
  };
  const defaultProps$18 = {
    open: true
  };
  const SubSideNavBar = (props) => {
    const classPrefix2 = "nut-subsidenavbar";
    const { title, value, children, onClick, open, ...rest } = {
      ...defaultProps$18,
      ...props
    };
    const offset = React.useContext(OffsetContext);
    const listRef = React.useRef(null);
    const setListLevel = React.useCallback(
      (nodeList, level = 1) => {
        const titleClass = nodeList[0].className;
        if (titleClass.includes(`${classPrefix2}__title`)) {
          const left = offset * (level + 1);
          nodeList[0].style.paddingLeft = `${left}px`;
        }
        const childNodes = nodeList[1] && nodeList[1].children && Array.from(nodeList[1].children).filter(
          (item) => item.nodeType !== 3 && item.nodeType !== 8
        );
        childNodes.forEach((item) => {
          const itemClass = item.className;
          if (itemClass.includes(`${classPrefix2}__item`)) {
            const left = offset * (level + 2);
            item.style.paddingLeft = `${left}px`;
          }
          if (itemClass.includes(`${classPrefix2}__list`)) {
            let level2 = item.getAttribute("level") ? Number(item.getAttribute("level")) : 1;
            level2 += 1;
            item.setAttribute("level", level2.toString());
            item.children && setListLevel(item.children, level2);
          }
        });
      },
      [offset]
    );
    const clickFn = (e) => {
      handleClick(e);
      const currentClass = e.currentTarget.className;
      const isShow = currentClass.includes("sidenavbar-show");
      onClick && onClick({ title, value, isShow });
    };
    React.useEffect(() => {
      var _a2, _b;
      const childNodes = (_a2 = listRef.current) == null ? void 0 : _a2.children;
      (_b = listRef.current) == null ? void 0 : _b.setAttribute("level", "1");
      childNodes && setListLevel(childNodes);
    }, [setListLevel]);
    const divClass = open ? `${classPrefix2}__list sidenavbar-show` : `${classPrefix2}__list sidenavbar-hide`;
    const iconClass = open ? "arrow-icon arrow-down" : "arrow-icon arrow-up";
    return /* @__PURE__ */ React.createElement("div", { className: divClass, ref: listRef, onClick: clickFn, ...rest }, /* @__PURE__ */ React.createElement("div", { className: `${classPrefix2}__title ${classPrefix2}-border-bt` }, title, " ", /* @__PURE__ */ React.createElement("i", { className: iconClass })), /* @__PURE__ */ React.createElement("div", { className: `${classPrefix2}__content` }, children));
  };
  function useForceUpdate() {
    const [, updateState] = React.useState();
    return React.useCallback(() => updateState({}), []);
  }
  function usePropsValue({
    value,
    defaultValue,
    finalValue,
    onChange = (value2) => {
    }
  }) {
    const forceUpdate = useForceUpdate();
    const dfValue = defaultValue !== void 0 ? defaultValue : finalValue;
    const stateRef = React.useRef(value !== void 0 ? value : dfValue);
    if (value !== void 0) {
      stateRef.current = value;
    }
    const setState = React.useCallback(
      (v) => {
        const prevState = stateRef.current;
        stateRef.current = v;
        if (prevState !== stateRef.current) {
          forceUpdate();
        }
        onChange == null ? void 0 : onChange(v);
      },
      [value, onChange]
    );
    return [stateRef.current, setState];
  }
  const defaultProps$17 = {
    ...ComponentDefaults,
    value: "",
    dot: false,
    max: 99,
    top: "0",
    right: "5",
    color: ""
  };
  const Badge = (props) => {
    const { className, style, value, max, children, dot, top, right, color } = {
      ...defaultProps$17,
      ...props
    };
    const classPrefix2 = "nut-badge";
    const classes = classnamesExports(classPrefix2, className);
    const contentClasses = classnamesExports(
      { [`${classPrefix2}__dot`]: dot },
      `${classPrefix2}__content`,
      `${classPrefix2}__sup`
    );
    function content() {
      if (dot || typeof value === "object")
        return null;
      if (typeof value === "number" && typeof max === "number") {
        return max < value ? `${max}+` : value;
      }
      return value;
    }
    const getStyle = () => {
      const style2 = {};
      style2.top = `${Number(top) || parseFloat(top) || 0}px`;
      style2.right = `${Number(right) || parseFloat(right) || 0}px`;
      style2.background = color;
      return style2;
    };
    return /* @__PURE__ */ React.createElement("div", { className: classes, style }, typeof value === "object" && value && /* @__PURE__ */ React.createElement("div", { className: `${classPrefix2}__icon` }, value), /* @__PURE__ */ React.createElement("div", null, children), /* @__PURE__ */ React.createElement("div", { className: contentClasses, style: getStyle() }, content()));
  };
  Badge.defaultProps = defaultProps$17;
  Badge.displayName = "NutBadge";
  const defaultProps$16 = {
    ...ComponentDefaults,
    title: "",
    icon: null,
    active: false,
    index: 0,
    value: "",
    dot: false,
    max: 99,
    top: "0",
    right: "5"
  };
  const TabbarItem = (props) => {
    const {
      className,
      style,
      title,
      icon,
      active,
      activeColor,
      inactiveColor,
      index,
      value,
      dot,
      max,
      top,
      right,
      handleClick: handleClick2
    } = {
      ...defaultProps$16,
      ...props
    };
    const classPrefix2 = "nut-tabbar-item";
    const tabbarItemClass = classnamesExports(className, classPrefix2, {
      [`${classPrefix2}-active`]: active
    });
    const boxPrefix = `${classPrefix2}__icon-box`;
    const titleClass = classnamesExports(boxPrefix, `${boxPrefix}-nav`, {
      [`${boxPrefix}-large`]: !icon
    });
    const badgeProps = {
      value,
      dot,
      max,
      top,
      right,
      color: activeColor
    };
    return /* @__PURE__ */ React.createElement(
      "div",
      {
        className: tabbarItemClass,
        style: {
          color: active ? activeColor : inactiveColor,
          ...style
        },
        onClick: () => handleClick2(index)
      },
      icon ? /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Badge, { ...badgeProps }, /* @__PURE__ */ React.createElement("div", { className: boxPrefix }, icon)), /* @__PURE__ */ React.createElement("div", { className: titleClass }, title)) : /* @__PURE__ */ React.createElement(Badge, { ...badgeProps }, /* @__PURE__ */ React.createElement("div", { className: titleClass }, title))
    );
  };
  const defaultProps$15 = {
    ...ComponentDefaults,
    defaultValue: 0,
    fixed: false,
    inactiveColor: "",
    activeColor: "",
    safeArea: false,
    onSwitch: (value) => {
    }
  };
  const Tabbar = (props) => {
    const {
      children,
      defaultValue,
      value,
      fixed,
      activeColor,
      inactiveColor,
      safeArea,
      className,
      style,
      onSwitch
    } = {
      ...defaultProps$15,
      ...props
    };
    const classPrefix2 = "nut-tabbar";
    const [selectIndex, setSelectIndex] = usePropsValue({
      value,
      defaultValue,
      finalValue: 0,
      onChange: onSwitch
    });
    return /* @__PURE__ */ React.createElement(
      "div",
      {
        className: classnamesExports(classPrefix2, className, {
          [`${classPrefix2}__fixed`]: fixed
        }),
        style
      },
      /* @__PURE__ */ React.createElement("div", { className: `${classPrefix2}__wrap` }, React.Children.map(children, (child, idx) => {
        if (!React.isValidElement(child)) {
          return null;
        }
        const childProps = {
          ...child.props,
          active: idx === selectIndex,
          index: idx,
          inactiveColor,
          activeColor,
          handleClick: setSelectIndex
        };
        return React.cloneElement(child, childProps);
      })),
      (fixed || safeArea) && /* @__PURE__ */ React.createElement("div", { className: `${classPrefix2}__safe-area` })
    );
  };
  Tabbar.defaultProps = defaultProps$15;
  Tabbar.displayName = "NutTabbar";
  Tabbar.Item = TabbarItem;
  const defaultProps$14 = {
    title: "",
    value: "",
    disabled: false
  };
  const TabPane = (props) => {
    const { children, autoHeightClassName, className, disabled } = {
      ...defaultProps$14,
      ...props
    };
    const classPrefix2 = "nut-tabpane";
    const classes = classnamesExports(
      {
        active: !disabled && props.active
      },
      classPrefix2,
      autoHeightClassName,
      className
    );
    return children ? /* @__PURE__ */ React.createElement("div", { className: classes }, !disabled && children) : null;
  };
  function requestAniFrame() {
    if (typeof window !== "undefined") {
      const _window = window;
      return _window.requestAnimationFrame || _window.webkitRequestAnimationFrame || function(callback) {
        _window.setTimeout(callback, 1e3 / 60);
      };
    }
    return function(callback) {
      setTimeout(callback, 1e3 / 60);
    };
  }
  const requestAniFrame$1 = requestAniFrame();
  const defaultProps$13 = {
    ...ComponentDefaults,
    tabStyle: {},
    activeColor: "",
    direction: "horizontal",
    activeType: "line",
    duration: 300,
    autoHeight: false
  };
  const classPrefix$h = "nut-tabs";
  const Tabs = (props) => {
    const {
      activeColor,
      tabStyle,
      direction,
      activeType,
      duration,
      align,
      title,
      children,
      onClick,
      onChange,
      className,
      autoHeight,
      ...rest
    } = {
      ...defaultProps$13,
      ...props
    };
    const [value, setValue] = usePropsValue({
      value: props.value,
      defaultValue: props.defaultValue,
      finalValue: 0,
      onChange
    });
    const [contentStyle, setContentStyle] = React.useState({});
    const titleItemsRef = React.useRef([]);
    const navRef = React.useRef(null);
    const scrollDirection = (nav, to2, duration2, direction2) => {
      let count = 0;
      const from = direction2 === "horizontal" ? nav.scrollLeft : nav.scrollTop;
      const frames = duration2 === 0 ? 1 : Math.round(duration2 * 1e3 / 16);
      function animate() {
        if (direction2 === "horizontal") {
          nav.scrollLeft += (to2 - from) / frames;
        } else {
          nav.scrollTop += (to2 - from) / frames;
        }
        if (++count < frames) {
          requestAniFrame$1(animate);
        }
      }
      animate();
    };
    const scrollIntoView = (index, immediate) => {
      const nav = navRef.current;
      const titleItem = titleItemsRef.current;
      if (!nav || !titleItem || !titleItem[index]) {
        return;
      }
      const title2 = titleItem[index];
      let to2 = 0;
      if (props.direction === "vertical") {
        const runTop = title2.offsetTop - nav.offsetTop + 10;
        to2 = runTop - (nav.offsetHeight - title2.offsetHeight) / 2;
      } else {
        to2 = title2.offsetLeft - (nav.offsetWidth - title2.offsetWidth) / 2;
      }
      scrollDirection(nav, to2, immediate ? 0 : 0.3, props.direction);
    };
    const getTitles = () => {
      const titles2 = [];
      React.Children.forEach(children, (child, idx) => {
        if (React.isValidElement(child)) {
          const props2 = child == null ? void 0 : child.props;
          if ((props2 == null ? void 0 : props2.title) || (props2 == null ? void 0 : props2.value)) {
            titles2.push({
              title: props2.title,
              value: props2.value || idx,
              disabled: props2.disabled
            });
          }
        }
      });
      return titles2;
    };
    const titles = React.useRef(getTitles());
    const forceUpdate = useForceUpdate();
    React.useEffect(() => {
      titles.current = getTitles();
      let current = "";
      titles.current.forEach((title2) => {
        if (title2.value == value) {
          current = value;
        }
      });
      if (current !== "" && current !== value) {
        setValue(current);
      } else {
        forceUpdate();
      }
    }, [children]);
    const classes = classnamesExports(
      classPrefix$h,
      `${classPrefix$h}--${direction}`,
      className
    );
    const classesTitle = classnamesExports(`${classPrefix$h}__titles`, {
      [`${classPrefix$h}__titles--${activeType}`]: activeType,
      [`${classPrefix$h}__titles--scrollable`]: true,
      [`${classPrefix$h}__titles--${align}`]: align
    });
    const tabsActiveStyle = {
      color: activeType === "smile" ? activeColor : "",
      background: activeType === "line" ? activeColor : ""
    };
    React.useEffect(() => {
      const index = titles.current.findIndex((t) => t.value == value);
      setContentStyle({
        transform: direction === "horizontal" ? `translate3d(-${index * 100}%, 0, 0)` : `translate3d( 0,-${index * 100}%, 0)`,
        transitionDuration: `${duration}ms`
      });
      setTimeout(() => {
        scrollIntoView(index);
      });
    }, [value]);
    const tabChange = (item) => {
      onClick && onClick(item.value);
      if (item.disabled) {
        return;
      }
      setValue(item.value);
    };
    return /* @__PURE__ */ React.createElement("div", { className: classes, ...rest }, /* @__PURE__ */ React.createElement("div", { className: classesTitle, style: { ...tabStyle }, ref: navRef }, !!title && typeof title === "function" ? title() : titles.current.map((item) => {
      return /* @__PURE__ */ React.createElement(
        "div",
        {
          onClick: () => {
            tabChange(item);
          },
          className: classnamesExports(`${classPrefix$h}__titles-item`, {
            [`nut-tabs__titles-item--active`]: !item.disabled && String(item.value) === String(value),
            [`nut-tabs__titles-item--disabled`]: item.disabled,
            [`nut-tabs__titles-item--${align}`]: align
          }),
          ref: (ref) => titleItemsRef.current.push(ref),
          key: item.value
        },
        activeType === "line" && /* @__PURE__ */ React.createElement(
          "div",
          {
            className: `${classPrefix$h}__titles-item__line`,
            style: tabsActiveStyle
          }
        ),
        activeType === "smile" && /* @__PURE__ */ React.createElement(
          "div",
          {
            className: `${classPrefix$h}__titles-item__smile`,
            style: tabsActiveStyle
          },
          /* @__PURE__ */ React.createElement(x$7, { color: activeColor, width: 40, height: 20 })
        ),
        /* @__PURE__ */ React.createElement(
          "div",
          {
            className: classnamesExports(
              {
                ellipsis: true
              },
              `${classPrefix$h}__titles-item__text`
            )
          },
          item.title
        )
      );
    })), /* @__PURE__ */ React.createElement("div", { className: `${classPrefix$h}__content__wrap` }, /* @__PURE__ */ React.createElement("div", { className: `${classPrefix$h}__content`, style: contentStyle }, React.Children.map(children, (child, idx) => {
      if (!React.isValidElement(child)) {
        return null;
      }
      let childProps = {
        ...child.props,
        active: value === child.props.value
      };
      if (String(value) !== String(child.props.value || idx) && autoHeight) {
        childProps = {
          ...childProps,
          autoHeightClassName: "inactive"
        };
      }
      return React.cloneElement(child, childProps);
    }))));
  };
  Tabs.defaultProps = defaultProps$13;
  Tabs.displayName = "NutTabs";
  Tabs.TabPane = TabPane;
  const formatTree = (tree, parent, config2) => tree.map((node) => {
    const {
      value: valueKey = "value",
      text: textKey = "text",
      children: childrenKey = "children"
    } = config2;
    const {
      [valueKey]: value,
      [textKey]: text,
      [childrenKey]: children,
      ...others
    } = node;
    const newNode = {
      loading: false,
      ...others,
      level: parent ? (parent && parent.level || 0) + 1 : 0,
      value,
      text,
      children,
      _parent: parent
    };
    if (newNode.children && newNode.children.length) {
      newNode.children = formatTree(newNode.children, newNode, config2);
    }
    return newNode;
  });
  const eachTree = (tree, cb) => {
    let i = 0;
    let node;
    while (node = tree[i++]) {
      if (cb(node) === true) {
        break;
      }
      if (node.children && node.children.length) {
        eachTree(node.children, cb);
      }
    }
  };
  const defaultConvertConfig = {
    topId: null,
    idKey: "id",
    pidKey: "pid",
    sortKey: ""
  };
  const convertListToOptions = (list, options2) => {
    const mergedOptions = {
      ...defaultConvertConfig,
      ...options2 || {}
    };
    const { topId, idKey, pidKey, sortKey } = mergedOptions;
    let result = [];
    let map = {};
    list.forEach((node) => {
      node = { ...node };
      const { [idKey]: id, [pidKey]: pid } = node;
      const children = map[pid] = map[pid] || [];
      if (!result.length && pid === topId) {
        result = children;
      }
      children.push(node);
      node.children = map[id] || (map[id] = []);
    });
    if (sortKey) {
      Object.keys(map).forEach((i) => {
        if (map[i].length > 1) {
          map[i].sort((a2, b) => a2[sortKey] - b[sortKey]);
        }
      });
    }
    map = null;
    return result;
  };
  class Tree {
    constructor(nodes, config2) {
      __publicField(this, "nodes");
      __publicField(this, "config");
      __publicField(this, "isLeaf", (node, lazy) => {
        const { leaf, children } = node;
        const hasChildren = Array.isArray(children) && Boolean(children.length);
        return leaf || !hasChildren && !lazy;
      });
      __publicField(this, "hasChildren", (node, lazy) => {
        const isLeaf = this.isLeaf(node, lazy);
        if (isLeaf) {
          return false;
        }
        const { children } = node;
        return Array.isArray(children) && Boolean(children.length);
      });
      this.config = {
        value: "value",
        text: "text",
        children: "children",
        ...config2 || {}
      };
      this.nodes = formatTree(nodes, null, this.config);
    }
    updateChildren(nodes, parent) {
      if (!parent) {
        this.nodes = formatTree(nodes, null, this.config);
      } else {
        parent.children = formatTree(nodes, parent, this.config);
      }
    }
    // for test
    getNodeByValue(value) {
      let foundNode;
      eachTree(this.nodes, (node) => {
        if (node.value === value) {
          foundNode = node;
          return true;
        }
        return null;
      });
      return foundNode;
    }
    getPathNodesByValue(value) {
      if (!value.length) {
        return [];
      }
      const pathNodes = [];
      let currentNodes = this.nodes;
      while (currentNodes && currentNodes.length) {
        const foundNode = currentNodes.find(
          (node) => node.value === value[node.level]
        );
        if (!foundNode) {
          break;
        }
        pathNodes.push(foundNode);
        currentNodes = foundNode.children;
      }
      return pathNodes;
    }
  }
  const defaultProps$12 = {
    ...ComponentDefaults,
    activeColor: "",
    activeIcon: "checklist",
    popup: true,
    visible: false,
    options: [],
    optionKey: { textKey: "text", valueKey: "value", childrenKey: "children" },
    format: {},
    closeable: false,
    closeIconPosition: "top-right",
    closeIcon: "close",
    lazy: false,
    onLoad: () => {
    },
    onClose: () => {
    },
    onChange: () => {
    },
    onPathChange: () => {
    }
  };
  const InternalCascader = (props, ref) => {
    const {
      className,
      style,
      activeColor,
      activeIcon,
      popup,
      visible,
      options: options2,
      value,
      defaultValue,
      optionKey,
      format: format2,
      closeable,
      closeIconPosition,
      closeIcon,
      lazy,
      onLoad,
      onClose,
      onChange,
      onPathChange
    } = { ...defaultProps$12, ...props };
    const [tabvalue, setTabvalue] = React.useState("c1");
    const [optionsData, setOptionsData] = React.useState([]);
    const isLazy = () => state.configs.lazy && Boolean(state.configs.onLoad);
    const [innerValue, setInnerValue] = usePropsValue({
      value,
      defaultValue,
      finalValue: defaultValue
    });
    const [state] = React.useState({
      optionsData: [],
      panes: [
        {
          nodes: [],
          selectedNode: [],
          paneKey: ""
        }
      ],
      tree: new Tree([], {}),
      tabsCursor: 0,
      // 选中的tab项
      initLoading: false,
      currentProcessNode: [],
      configs: {
        lazy,
        onLoad,
        optionKey,
        format: format2
      },
      lazyLoadMap: /* @__PURE__ */ new Map()
    });
    const classPrefix2 = classnamesExports(`nut-cascader`);
    const classesPane = classnamesExports({
      [`${classPrefix2}-pane`]: true
    });
    React.useEffect(() => {
      initData();
    }, [options2, format2]);
    const initData = async () => {
      state.lazyLoadMap.clear();
      if (format2 && Object.keys(format2).length > 0) {
        state.optionsData = convertListToOptions(
          options2,
          format2
        );
      } else {
        state.optionsData = options2;
      }
      state.tree = new Tree(state.optionsData, {
        value: state.configs.optionKey.valueKey,
        text: state.configs.optionKey.textKey,
        children: state.configs.optionKey.childrenKey
      });
      if (isLazy() && !state.tree.nodes.length) {
        await invokeLazyLoad({
          root: true,
          loading: true,
          text: "",
          value: ""
        });
      }
      state.panes = [
        {
          nodes: state.tree.nodes,
          selectedNode: null,
          paneKey: "c1"
        }
      ];
      syncValue();
      setOptionsData(state.panes);
    };
    const syncValue = async () => {
      const currentValue = innerValue;
      if (currentValue === void 0 || currentValue !== defaultValue || !state.tree.nodes.length) {
        return;
      }
      if (currentValue.length === 0) {
        state.tabsCursor = 0;
        return;
      }
      let needToSync = currentValue;
      if (isLazy() && Array.isArray(currentValue) && currentValue.length) {
        needToSync = [];
        const parent = state.tree.nodes.find(
          (node) => node.value === currentValue[0]
        );
        if (parent) {
          needToSync = [parent.value];
          state.initLoading = true;
          const last = await currentValue.slice(1).reduce(async (p, value2) => {
            var _a2;
            const parent2 = await p;
            await invokeLazyLoad(parent2);
            const node = (_a2 = parent2 == null ? void 0 : parent2.children) == null ? void 0 : _a2.find(
              (item) => item.value === value2
            );
            if (node) {
              needToSync.push(value2);
            }
            return Promise.resolve(node);
          }, Promise.resolve(parent));
          await invokeLazyLoad(last);
          state.initLoading = false;
        }
      }
      if (needToSync.length && currentValue === defaultValue) {
        const pathNodes = state.tree.getPathNodesByValue(needToSync);
        pathNodes.forEach((node, index) => {
          state.tabsCursor = index;
          chooseItem(node, true);
        });
      }
    };
    const invokeLazyLoad = async (node) => {
      if (!node) {
        return;
      }
      if (!state.configs.onLoad) {
        node.leaf = true;
        return;
      }
      if (state.tree.isLeaf(node, isLazy()) || state.tree.hasChildren(node, isLazy())) {
        return;
      }
      node.loading = true;
      const parent = node.root ? null : node;
      let lazyLoadPromise = state.lazyLoadMap.get(node);
      if (!lazyLoadPromise) {
        lazyLoadPromise = new Promise((resolve) => {
          var _a2, _b;
          (_b = (_a2 = state.configs).onLoad) == null ? void 0 : _b.call(_a2, node, resolve);
        });
        state.lazyLoadMap.set(node, lazyLoadPromise);
      }
      const nodes = await lazyLoadPromise;
      if (Array.isArray(nodes) && nodes.length > 0) {
        state.tree.updateChildren(nodes, parent);
      } else {
        node.leaf = true;
      }
      node.loading = false;
      state.lazyLoadMap.delete(node);
    };
    const close = () => {
      onClose && onClose();
    };
    const closePopup = () => {
      close();
    };
    const chooseItem = async (node, type2) => {
      if (!type2 && node.disabled || !state.panes[state.tabsCursor]) {
        return;
      }
      if (state.tree.isLeaf(node, isLazy())) {
        node.leaf = true;
        state.panes[state.tabsCursor].selectedNode = node;
        state.panes = state.panes.slice(0, node.level + 1);
        if (!type2) {
          const pathNodes = state.panes.map((item) => item.selectedNode);
          const optionParams = pathNodes.map((item) => item.value);
          onChange(optionParams, pathNodes);
          onPathChange(optionParams, pathNodes);
          setInnerValue(optionParams);
        }
        setOptionsData(state.panes);
        close();
        return;
      }
      if (state.tree.hasChildren(node, isLazy())) {
        const level = node.level + 1;
        state.panes[state.tabsCursor].selectedNode = node;
        state.panes = state.panes.slice(0, level);
        state.tabsCursor = level;
        state.panes.push({
          nodes: node.children || [],
          selectedNode: null,
          paneKey: `c${state.tabsCursor + 1}`
        });
        setOptionsData(state.panes);
        setTabvalue(`c${state.tabsCursor + 1}`);
        if (!type2) {
          const pathNodes = state.panes.map((item) => item.selectedNode);
          const optionParams = pathNodes.map((item) => item == null ? void 0 : item.value);
          onPathChange(optionParams, pathNodes);
        }
        return;
      }
      state.currentProcessNode = node;
      if (node.loading) {
        return;
      }
      await invokeLazyLoad(node);
      if (state.currentProcessNode === node) {
        state.panes[state.tabsCursor].selectedNode = node;
        chooseItem(node, type2);
      }
      setOptionsData(state.panes);
    };
    const renderItem = (pane, node, index) => {
      var _a2;
      const classPrefix22 = "nut-cascader-item";
      const checked = ((_a2 = pane.selectedNode) == null ? void 0 : _a2.value) === node.value;
      const classes = classnamesExports(
        {
          active: checked,
          disabled: node.disabled
        },
        classPrefix22
      );
      const classesTitle = classnamesExports({
        [`${classPrefix22}__title`]: true
      });
      const renderIcon = () => {
        if (checked) {
          if (React.isValidElement(activeIcon)) {
            return activeIcon;
          }
          return /* @__PURE__ */ React.createElement(
            x$d,
            {
              className: `${checked ? `${classPrefix2}__icon-check` : ""}`
            }
          );
        }
        return null;
      };
      return /* @__PURE__ */ React.createElement(
        "div",
        {
          style: { color: checked ? activeColor : "" },
          className: classes,
          key: index,
          onClick: () => {
            chooseItem(node, false);
          }
        },
        /* @__PURE__ */ React.createElement("div", { className: classesTitle }, node.text),
        node.loading ? /* @__PURE__ */ React.createElement(
          k$3,
          {
            color: "#969799",
            className: "nut-cascader-item__icon-loading"
          }
        ) : renderIcon()
      );
    };
    const renderTabs = () => {
      return /* @__PURE__ */ React.createElement("div", { className: `${classPrefix2} ${className}`, style }, /* @__PURE__ */ React.createElement(
        Tabs,
        {
          value: tabvalue,
          title: () => {
            return optionsData.map((pane, index) => {
              var _a2, _b;
              return /* @__PURE__ */ React.createElement(
                "div",
                {
                  onClick: () => {
                    setTabvalue(pane.paneKey);
                    state.tabsCursor = index;
                  },
                  className: `nut-tabs__titles-item ${tabvalue === pane.paneKey ? "nut-tabs__titles-item--active" : ""}`,
                  key: pane.paneKey
                },
                /* @__PURE__ */ React.createElement("span", { className: "nut-tabs__titles-item__text" }, !state.initLoading && state.panes.length && ((_a2 = pane == null ? void 0 : pane.selectedNode) == null ? void 0 : _a2.text), !state.initLoading && state.panes.length && !((_b = pane == null ? void 0 : pane.selectedNode) == null ? void 0 : _b.text) && "请选择", !(!state.initLoading && state.panes.length) && "Loading..."),
                /* @__PURE__ */ React.createElement("span", { className: "nut-tabs__titles-item__line" })
              );
            });
          }
        },
        !state.initLoading && state.panes.length ? optionsData.map((pane) => {
          var _a2;
          return /* @__PURE__ */ React.createElement(Tabs.TabPane, { key: pane.paneKey, value: pane.paneKey }, /* @__PURE__ */ React.createElement("div", { className: classesPane }, (_a2 = pane.nodes) == null ? void 0 : _a2.map(
            (node, index) => renderItem(pane, node, index)
          )));
        }) : /* @__PURE__ */ React.createElement(Tabs.TabPane, null, /* @__PURE__ */ React.createElement("div", { className: classesPane }))
      ));
    };
    return /* @__PURE__ */ React.createElement(React.Fragment, null, popup ? /* @__PURE__ */ React.createElement(
      Popup,
      {
        visible,
        position: "bottom",
        round: true,
        closeIcon,
        closeable,
        closeIconPosition,
        title: popup && props.title,
        left: props.left,
        onOverlayClick: closePopup,
        onCloseIconClick: closePopup
      },
      renderTabs()
    ) : renderTabs());
  };
  const Cascader = React.forwardRef(InternalCascader);
  Cascader.defaultProps = defaultProps$12;
  Cascader.displayName = "NutCascader";
  const defaultProps$11 = {
    ...ComponentDefaults,
    visible: false,
    type: "custom",
    options: [],
    optionKey: { textKey: "text", valueKey: "value", childrenKey: "children" },
    format: {},
    height: "200px"
  };
  const CustomRender = (props) => {
    const {
      children,
      visible,
      type: type2,
      height,
      options: options2,
      title,
      left,
      value,
      defaultValue,
      optionKey,
      format: format2,
      onClose,
      onChange,
      onPathChange,
      ...rest
    } = {
      ...defaultProps$11,
      ...props
    };
    return /* @__PURE__ */ React.createElement(React.Fragment, null, type2 === "custom" && /* @__PURE__ */ React.createElement(
      Cascader,
      {
        visible,
        value,
        defaultValue,
        title,
        left,
        options: options2,
        format: format2,
        optionKey,
        onClose: () => {
          onClose == null ? void 0 : onClose();
        },
        onChange: (val) => {
          onChange == null ? void 0 : onChange(val);
        },
        onPathChange,
        ...rest
      }
    ));
  };
  const defaultProps$10 = {
    type: "custom",
    existList: [],
    defaultIcon: null,
    selectIcon: null,
    custom: false
  };
  const ExistRender = (props) => {
    const { locale } = useConfig();
    const {
      children,
      type: type2,
      existList,
      selectIcon,
      defaultIcon,
      custom,
      onSelect,
      onSwitch,
      ...rest
    } = { ...defaultProps$10, ...props };
    const classPrefix2 = "nut-address";
    const selectedExist = (item) => {
      existList.forEach((list, index) => {
        list.selectedAddress = false;
      });
      item.selectedAddress = true;
      onSelect && onSelect(item);
    };
    const onClick = () => {
      onSwitch && onSwitch({ type: type2 === "exist" ? "custom" : "exist" });
    };
    return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("ul", { className: `${classPrefix2}-exist` }, existList.map((item, index) => {
      return /* @__PURE__ */ React.createElement(
        "li",
        {
          className: `${classPrefix2}-exist-item ${item.selectedAddress ? "active" : ""}`,
          key: index,
          onClick: () => selectedExist(item)
        },
        item.selectedAddress ? /* @__PURE__ */ React.createElement(React.Fragment, null, React.isValidElement(selectIcon) ? selectIcon : /* @__PURE__ */ React.createElement(x$f, { color: "#FA2C19" })) : /* @__PURE__ */ React.createElement(React.Fragment, null, React.isValidElement(defaultIcon) ? defaultIcon : /* @__PURE__ */ React.createElement(x$5, null)),
        /* @__PURE__ */ React.createElement("div", { className: `${classPrefix2}-exist-item-info` }, item.name && item.phone && /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", null, item.name), /* @__PURE__ */ React.createElement("div", null, item.phone)), /* @__PURE__ */ React.createElement("div", null, item.provinceName + item.cityName + item.countyName + item.townName + item.addressDetail))
      );
    })), (custom || custom && locale.address.chooseAnotherAddress) && /* @__PURE__ */ React.createElement("div", { className: `${classPrefix2}-footer`, onClick }, /* @__PURE__ */ React.createElement("div", { className: `${classPrefix2}-footer-btn` }, custom)));
  };
  const defaultProps$$ = {
    ...ComponentDefaults,
    defaultValue: [],
    type: "custom",
    options: [],
    optionKey: { textKey: "text", valueKey: "value", childrenKey: "children" },
    format: {},
    custom: false,
    existList: [],
    height: "200px",
    defaultIcon: null,
    selectIcon: null,
    closeIcon: null,
    backIcon: null
  };
  const InternalAddress = (props, ref) => {
    const { locale } = useConfig();
    const {
      visible,
      defaultVisible,
      defaultValue,
      children,
      type: type2,
      options: options2,
      optionKey,
      format: format2,
      height,
      title,
      existList,
      custom,
      selectIcon,
      defaultIcon,
      closeIcon,
      backIcon,
      onChange,
      onExistSelect,
      onClose,
      onSwitch,
      style,
      className,
      ...rest
    } = {
      ...defaultProps$$,
      ...props
    };
    const classPrefix2 = "nut-address";
    const [currentType, setCurrentType] = React.useState(type2);
    const [innerVisible, setInnerVisible] = usePropsValue({
      value: visible,
      defaultValue: defaultVisible,
      finalValue: defaultVisible
    });
    React.useImperativeHandle(ref, () => {
      return {
        open() {
          setInnerVisible(true);
        },
        close() {
          setInnerVisible(false);
        }
      };
    });
    const handleClose = () => {
      setInnerVisible(false);
      onClose && onClose();
    };
    const renderLeftOnCustomSwitch = () => {
      return /* @__PURE__ */ React.createElement(React.Fragment, null, custom && /* @__PURE__ */ React.createElement("div", { className: `${classPrefix2}-left-icon`, onClick: onSwitchModule }, React.isValidElement(backIcon) ? backIcon : /* @__PURE__ */ React.createElement(y$6, { color: "#cccccc" })));
    };
    const selectedExistItem = (data) => {
      onExistSelect && onExistSelect(data);
      handleClose();
    };
    const onSwitchModule = () => {
      if (currentType === "exist") {
        setCurrentType("custom");
      } else {
        setCurrentType("exist");
      }
      onSwitch && onSwitch({ type: currentType });
    };
    return /* @__PURE__ */ React.createElement(React.Fragment, null, currentType === "custom" || currentType === "custom2" ? /* @__PURE__ */ React.createElement(
      CustomRender,
      {
        visible: innerVisible,
        closeable: true,
        title: title || locale.address.selectRegion,
        left: renderLeftOnCustomSwitch(),
        defaultValue,
        options: options2,
        format: format2,
        optionKey,
        type: currentType,
        height,
        onClose: handleClose,
        onChange: (val, params) => {
          onChange == null ? void 0 : onChange(val, params);
        }
      }
    ) : /* @__PURE__ */ React.createElement(
      Popup,
      {
        visible: innerVisible,
        position: "bottom",
        round: true,
        closeable: true,
        closeIcon,
        title: title || locale.address.selectRegion,
        onClose: handleClose
      },
      /* @__PURE__ */ React.createElement(
        "div",
        {
          className: `${classPrefix2} ${className || ""}`,
          style: { ...style }
        },
        // 不需要 close，选中切换即关闭弹框。可手动关闭弹框，只关闭弹框不处理逻辑。
        /* @__PURE__ */ React.createElement(
          ExistRender,
          {
            type: currentType,
            existList,
            selectIcon,
            defaultIcon,
            custom,
            onSelect: selectedExistItem,
            onSwitch: onSwitchModule
          }
        )
      )
    ));
  };
  const Address = React.forwardRef(InternalAddress);
  Address.defaultProps = defaultProps$$;
  Address.displayName = "NutAddress";
  const Utils = {
    /**
     * 是否为闫年
     * @return {Boolse} true|false
     */
    isLeapYear(y2) {
      return y2 % 4 == 0 && y2 % 100 != 0 || y2 % 400 == 0;
    },
    /**
     * 返回星期数
     * @return {String}
     */
    getWhatDay(year, month, day) {
      const date2 = /* @__PURE__ */ new Date(`${year}/${month}/${day}`);
      const index = date2.getDay();
      const dayNames = [
        "星期日",
        "星期一",
        "星期二",
        "星期三",
        "星期四",
        "星期五",
        "星期六"
      ];
      return dayNames[index];
    },
    /**
     * 返回上一个月在当前面板中的天数
     * @return {Number}
     */
    getMonthPreDay(year, month) {
      const date2 = /* @__PURE__ */ new Date(`${year}/${month}/01`);
      let day = date2.getDay();
      if (day === 0) {
        day = 7;
      }
      return day;
    },
    /**
     * 返回月份天数
     * @return {Number}
     */
    getMonthDays(year, month) {
      if (/^0/.test(month)) {
        month = month.split("")[1];
      }
      return [
        0,
        31,
        this.isLeapYear(Number(year)) ? 29 : 28,
        31,
        30,
        31,
        30,
        31,
        31,
        30,
        31,
        30,
        31
      ][month];
    },
    /**
     * 补齐数字位数
     * @return {string}
     */
    getNumTwoBit(n) {
      n = Number(n);
      return (n > 9 ? "" : "0") + n;
    },
    /**
     * 日期对象转成字符串
     * @return {string}
     */
    date2Str(date2, split) {
      split = split || "-";
      const y2 = date2.getFullYear();
      const m = this.getNumTwoBit(date2.getMonth() + 1);
      const d = this.getNumTwoBit(date2.getDate());
      return [y2, m, d].join(split);
    },
    /**
     * 返回日期格式字符串
     * @param {Number} 0返回今天的日期、1返回明天的日期，2返回后天得日期，依次类推
     * @return {string} '2014-12-31'
     */
    getDay(i) {
      i = i || 0;
      let date2 = /* @__PURE__ */ new Date();
      const diff = i * (1e3 * 60 * 60 * 24);
      date2 = new Date(date2.getTime() + diff);
      return this.date2Str(date2);
    },
    /**
     * 时间比较
     * @return {Boolean}
     */
    compareDate(date1, date2) {
      const startTime = new Date(date1.replace("-", "/").replace("-", "/"));
      const endTime = new Date(date2.replace("-", "/").replace("-", "/"));
      if (startTime >= endTime) {
        return false;
      }
      return true;
    },
    /**
     * 时间是否相等
     * @return {Boolean}
     */
    isEqual(date1 = "", date2) {
      const startTime = new Date(date1.replace("-", "/")).getTime();
      const endTime = new Date(date2.replace("-", "/")).getTime();
      if (startTime === endTime) {
        return true;
      }
      return false;
    },
    getMonthWeek(year, month, date2, firstDayOfWeek = 0) {
      const dateNow = new Date(Number(year), parseInt(month) - 1, Number(date2));
      let w = dateNow.getDay();
      const d = dateNow.getDate();
      let remainder = 6 - w;
      if (firstDayOfWeek !== 0) {
        w = w === 0 ? 7 : w;
        remainder = 7 - w;
      }
      return Math.ceil((d + remainder) / 7);
    },
    getYearWeek(year, month, date2, firstDayOfWeek = 0) {
      const dateNow = new Date(Number(year), parseInt(month) - 1, Number(date2));
      const dateFirst = new Date(Number(year), 0, 1);
      const dataNumber = Math.round(
        (dateNow.valueOf() - dateFirst.valueOf()) / 864e5
      );
      return Math.ceil((dataNumber + (dateFirst.getDay() + 1 - 1)) / 7);
    },
    getWeekDate(year, month, date2, firstDayOfWeek = 0) {
      const dateNow = new Date(Number(year), parseInt(month) - 1, Number(date2));
      const nowTime = dateNow.getTime();
      let day = dateNow.getDay();
      if (firstDayOfWeek === 0) {
        const oneDayTime2 = 24 * 60 * 60 * 1e3;
        const SundayTime2 = nowTime - day * oneDayTime2;
        const SaturdayTime = nowTime + (6 - day) * oneDayTime2;
        const sunday2 = this.date2Str(new Date(SundayTime2));
        const saturday = this.date2Str(new Date(SaturdayTime));
        return [sunday2, saturday];
      }
      day = day === 0 ? 7 : day;
      const oneDayTime = 24 * 60 * 60 * 1e3;
      const MondayTime = nowTime - (day - 1) * oneDayTime;
      const SundayTime = nowTime + (7 - day) * oneDayTime;
      const monday = this.date2Str(new Date(MondayTime));
      const sunday = this.date2Str(new Date(SundayTime));
      return [monday, sunday];
    },
    formatResultDate(date2) {
      const days = [...date2.split("-")];
      days[2] = Utils.getNumTwoBit(Number(days[2]));
      days[3] = `${days[0]}-${days[1]}-${days[2]}`;
      days[4] = Utils.getWhatDay(+days[0], +days[1], +days[2]);
      return days;
    }
  };
  const getCurrMonthData = (type2, year, month) => {
    switch (type2) {
      case "prev":
        month === 1 && (year -= 1);
        month = month === 1 ? 12 : --month;
        break;
      case "next":
        month === 12 && (year += 1);
        month = month === 12 ? 1 : ++month;
        break;
    }
    return [
      year,
      Utils.getNumTwoBit(month),
      Utils.getMonthDays(String(year), String(month))
    ];
  };
  const getDaysStatus = (type2, year, month) => {
    let days = Utils.getMonthDays(`${year}`, `${month}`);
    if (type2 === "prev" && days >= 7) {
      days -= 7;
    }
    return Array.from(Array(days), (v, k2) => {
      return {
        day: k2 + 1,
        type: type2,
        year,
        month
      };
    });
  };
  const getPreMonthDates = (type2, year, month, firstDayOfWeek) => {
    let preMonth = +month - 1;
    let preYear = year;
    if (preMonth <= 0) {
      preMonth = 12;
      preYear += 1;
    }
    let days = Utils.getMonthPreDay(+year, +month);
    days -= firstDayOfWeek;
    if (type2 === "prev" && days >= 7) {
      days -= 7;
    }
    const preDates = Utils.getMonthDays(`${preYear}`, `${preMonth}`);
    const months = Array.from(Array(preDates), (v, k2) => {
      return {
        day: k2 + 1,
        type: type2,
        preYear,
        preMonth
      };
    });
    return months.slice(preDates - days);
  };
  const splitDate = (date2) => {
    const split = date2.indexOf("-") !== -1 ? "-" : "/";
    return date2.split(split);
  };
  const isMultiple = (day, days) => {
    if (days.length > 0) {
      return days.some((item) => {
        return Utils.isEqual(item, day);
      });
    }
    return false;
  };
  const isCurrDay = (month, day) => {
    const date2 = `${month.curData[0]}/${month.curData[1]}/${day}`;
    return Utils.isEqual(date2, Utils.date2Str(/* @__PURE__ */ new Date(), "/"));
  };
  const getCurrDate = (day, month) => {
    return `${month.curData[0]}/${month.curData[1]}/${Utils.getNumTwoBit(
      +day.day
    )}`;
  };
  const isStart = (day, days) => {
    return Utils.isEqual(days[0], day);
  };
  const isEnd = (day, days) => {
    return Utils.isEqual(days[1], day);
  };
  const isStartAndEnd = (days) => {
    return days.length >= 2 && Utils.isEqual(days[0], days[1]);
  };
  const defaultProps$_ = {
    ...ComponentDefaults,
    type: "single",
    autoBackfill: false,
    popup: true,
    title: "",
    startDate: Utils.getDay(0),
    endDate: Utils.getDay(365),
    showToday: true,
    startText: "",
    endText: "",
    confirmText: "",
    showTitle: true,
    showSubTitle: true,
    scrollAnimation: true,
    firstDayOfWeek: 0,
    disableDate: (date2) => false,
    renderHeaderButtons: void 0,
    renderDay: void 0,
    renderDayTop: void 0,
    renderDayBottom: void 0,
    onConfirm: (data) => {
    },
    onUpdate: () => {
    },
    onDayClick: (data) => {
    },
    onPageChange: (data) => {
    }
  };
  const CalendarItem = React.forwardRef((props, ref) => {
    const { locale } = useConfig();
    const {
      style,
      className,
      popup,
      type: type2,
      autoBackfill,
      title,
      defaultValue,
      startDate,
      endDate,
      showToday,
      startText,
      endText,
      confirmText,
      showTitle,
      showSubTitle,
      scrollAnimation,
      firstDayOfWeek,
      disableDate,
      renderHeaderButtons,
      renderDay,
      renderDayTop,
      renderDayBottom,
      onConfirm,
      onUpdate,
      onDayClick,
      onPageChange
    } = { ...defaultProps$_, ...props };
    const weekdays = locale.calendaritem.weekdays;
    const weeks = [
      ...weekdays.slice(firstDayOfWeek, 7),
      ...weekdays.slice(0, firstDayOfWeek)
    ];
    const monthTitle = locale.calendaritem.monthTitle;
    const [yearMonthTitle, setYearMonthTitle] = React.useState("");
    const [monthsData, setMonthsData] = React.useState([]);
    const [monthsNum, setMonthsNum] = React.useState(0);
    const [translateY, setTranslateY] = React.useState(0);
    const [monthDefaultRange, setMonthDefaultRange] = React.useState([]);
    const propStartDate = startDate || Utils.getDay(0);
    const propEndDate = endDate || Utils.getDay(365);
    const startDates = splitDate(propStartDate);
    const endDates = splitDate(propEndDate);
    const [state] = React.useState({
      currDateArray: []
    });
    const resetDefaultValue = () => {
      if (defaultValue || Array.isArray(defaultValue) && defaultValue.length > 0) {
        return type2 !== "single" ? [...defaultValue] : defaultValue;
      }
      return void 0;
    };
    const [currentDate, setCurrentDate] = usePropsValue({
      value: props.value,
      defaultValue: resetDefaultValue(),
      finalValue: [],
      onChange: (val) => {
      }
    });
    const weeksPanel = React.useRef(null);
    const monthsRef = React.useRef(null);
    const monthsPanel = React.useRef(null);
    const viewAreaRef = React.useRef(null);
    const [avgHeight, setAvgHeight] = React.useState(0);
    let viewHeight = 0;
    const classPrefix2 = "nut-calendar";
    const dayPrefix = "nut-calendar-day";
    const getMonthData = (curData, monthNum, type22) => {
      let i = 0;
      let date2 = curData;
      const monthData = monthsData;
      do {
        const y2 = parseInt(date2[0], 10);
        const m = parseInt(date2[1], 10);
        const days = [
          ...getPreMonthDates("prev", y2, m, firstDayOfWeek),
          ...getDaysStatus("active", y2, m)
        ];
        const cssHeight = 39 + (days.length > 35 ? 384 : 320);
        let scrollTop = 0;
        if (monthData.length > 0) {
          const monthEle = monthData[monthData.length - 1];
          scrollTop = monthEle.scrollTop + monthEle.cssHeight;
        }
        const monthInfo = {
          curData: date2,
          title: monthTitle(y2, m),
          monthData: days,
          cssHeight,
          scrollTop
        };
        if (type22 === "next") {
          if (!endDates || !Utils.compareDate(
            `${endDates[0]}/${endDates[1]}/${Utils.getMonthDays(
              endDates[0],
              endDates[1]
            )}`,
            `${curData[0]}/${curData[1]}/${curData[2]}`
          )) {
            monthData.push(monthInfo);
          }
        } else if (!startDates || !Utils.compareDate(
          `${curData[0]}/${curData[1]}/${curData[2]}`,
          `${startDates[0]}/${startDates[1]}/01`
        )) {
          monthData.unshift(monthInfo);
        }
        date2 = getCurrMonthData("next", y2, m);
      } while (i++ < monthNum);
      setMonthsData(monthData);
    };
    const setReachedYearMonthInfo = (current) => {
      const currentMonthsData = monthsData[current];
      const [year, month] = currentMonthsData.curData;
      if (currentMonthsData.title === yearMonthTitle)
        return;
      onPageChange && onPageChange([year, month, `${year}-${month}`]);
      setYearMonthTitle(currentMonthsData.title);
    };
    const setDefaultRange = (monthNum, current) => {
      let start2 = 0;
      let end = 0;
      if (monthNum >= 3) {
        if (current > 0 && current < monthNum) {
          start2 = current - 1;
          end = current + 3;
        } else if (current === 0) {
          start2 = current;
          end = current + 4;
        } else if (current === monthNum) {
          start2 = current - 2;
          end = current + 2;
        }
      } else {
        start2 = 0;
        end = monthNum + 2;
      }
      setMonthDefaultRange([start2, end]);
      setTranslateY(monthsData[start2].scrollTop);
      setReachedYearMonthInfo(current);
    };
    const getMonthNum = () => {
      let monthNum = Number(endDates[1]) - Number(startDates[1]);
      const yearNum = Number(endDates[0]) - Number(startDates[0]);
      if (yearNum > 0) {
        monthNum += 12 * yearNum;
      }
      if (monthNum <= 0) {
        monthNum = 1;
      }
      setMonthsNum(monthNum);
      return monthNum;
    };
    const setDefaultDate = () => {
      let defaultData = [];
      if (type2 === "range" && Array.isArray(currentDate)) {
        if (currentDate.length > 0) {
          if (propStartDate && Utils.compareDate(currentDate[0], propStartDate)) {
            currentDate.splice(0, 1, propStartDate);
          }
          if (propEndDate && Utils.compareDate(propEndDate, currentDate[1])) {
            currentDate.splice(1, 1, propEndDate);
          }
          defaultData = [
            ...splitDate(currentDate[0]),
            ...splitDate(currentDate[1])
          ];
        }
      } else if (type2 === "multiple" && Array.isArray(currentDate)) {
        if (currentDate.length > 0) {
          const defaultArr = [];
          const obj = {};
          currentDate.forEach((item) => {
            if (propStartDate && !Utils.compareDate(item, propStartDate) && propEndDate && !Utils.compareDate(propEndDate, item)) {
              if (!Object.hasOwnProperty.call(obj, item)) {
                defaultArr.push(item);
                obj[item] = item;
              }
            }
          });
          currentDate.splice(0) && currentDate.push(...defaultArr);
          defaultData = [...splitDate(defaultArr[0])];
        }
      } else if (type2 === "week" && Array.isArray(currentDate)) {
        if (currentDate.length > 0) {
          const [y2, m, d] = splitDate(currentDate[0]);
          const weekArr = Utils.getWeekDate(y2, m, d, firstDayOfWeek);
          currentDate.splice(0) && currentDate.push(...weekArr);
          if (propStartDate && Utils.compareDate(currentDate[0], propStartDate)) {
            currentDate.splice(0, 1, propStartDate);
          }
          if (propEndDate && Utils.compareDate(propEndDate, currentDate[1])) {
            currentDate.splice(1, 1, propEndDate);
          }
          defaultData = [
            ...splitDate(currentDate[0]),
            ...splitDate(currentDate[1])
          ];
        }
      } else if (currentDate) {
        if (currentDate.length > 0) {
          if (propStartDate && Utils.compareDate(currentDate, propStartDate)) {
            defaultData = [...splitDate(propStartDate)];
          } else if (propEndDate && !Utils.compareDate(currentDate, propEndDate)) {
            defaultData = [...splitDate(propEndDate)];
          } else {
            defaultData = [...splitDate(currentDate)];
          }
        } else {
          defaultData = [];
        }
      }
      return defaultData;
    };
    const getCurrentIndex = (defaultData) => {
      let current = 0;
      let lastCurrent = 0;
      if (defaultData.length > 0) {
        monthsData.forEach((item, index) => {
          if (item.title === monthTitle(defaultData[0], defaultData[1])) {
            current = index;
          }
          if (type2 === "range" || type2 === "week") {
            if (item.title === monthTitle(defaultData[3], defaultData[4])) {
              lastCurrent = index;
            }
          }
        });
      } else {
        const date2 = /* @__PURE__ */ new Date();
        const year = date2.getFullYear();
        const month = date2.getMonth() + 1;
        const index = monthsData.findIndex((item) => {
          return +item.curData[0] === year && +item.curData[1] === month;
        });
        if (index > -1) {
          current = index;
        }
      }
      return {
        current,
        lastCurrent
      };
    };
    const renderCurrentDate = () => {
      const defaultData = setDefaultDate();
      const current = getCurrentIndex(defaultData);
      if (defaultData.length > 0) {
        if (type2 === "range") {
          chooseDay(
            { day: defaultData[2], type: "active" },
            monthsData[current.current],
            true
          );
          chooseDay(
            { day: defaultData[5], type: "active" },
            monthsData[current.lastCurrent],
            true
          );
        } else if (props.type === "week") {
          chooseDay(
            { day: defaultData[2], type: "curr" },
            monthsData[current.current],
            true
          );
        } else if (type2 === "multiple") {
          [...currentDate].forEach((item) => {
            const dateArr = splitDate(item);
            let currentIndex = current.current;
            monthsData.forEach((item2, index) => {
              if (item2.title === monthTitle(dateArr[0], dateArr[1])) {
                currentIndex = index;
              }
            });
            chooseDay(
              { day: dateArr[2], type: "active" },
              monthsData[currentIndex],
              true
            );
          });
        } else {
          chooseDay(
            { day: defaultData[2], type: "active" },
            monthsData[current.current],
            true
          );
        }
      }
      return current.current;
    };
    const requestAniFrameFunc = (current, monthNum) => {
      const lastItem = monthsData[monthsData.length - 1];
      const containerHeight = lastItem.cssHeight + lastItem.scrollTop;
      requestAniFrame$1(() => {
        if (monthsRef && monthsPanel && viewAreaRef) {
          viewHeight = monthsRef.current.clientHeight;
          monthsPanel.current.style.height = `${containerHeight}px`;
          monthsRef.current.scrollTop = monthsData[current].scrollTop;
        }
      });
      setAvgHeight(Math.floor(containerHeight / (monthNum + 1)));
    };
    const initData = () => {
      const monthNum = getMonthNum();
      getMonthData(startDates, monthNum, "next");
      const current = renderCurrentDate();
      setDefaultRange(monthNum, current);
      requestAniFrameFunc(current, monthNum);
    };
    React.useEffect(() => {
      initData();
    }, []);
    const resetRender = () => {
      state.currDateArray.splice(0);
      monthsData.splice(0);
      initData();
    };
    React.useEffect(() => {
      setCurrentDate(resetDefaultValue() || []);
      popup && resetRender();
    }, [defaultValue]);
    const scrollToDate = (date2) => {
      if (Utils.compareDate(date2, propStartDate)) {
        date2 = propStartDate;
      } else if (!Utils.compareDate(date2, propEndDate)) {
        date2 = propEndDate;
      }
      const dateArr = splitDate(date2);
      monthsData.forEach((item, index) => {
        if (item.title === monthTitle(dateArr[0], dateArr[1])) {
          const currTop = monthsData[index].scrollTop;
          if (monthsRef.current) {
            const distance = currTop - monthsRef.current.scrollTop;
            if (scrollAnimation) {
              let flag = 0;
              const interval = setInterval(() => {
                flag++;
                if (monthsRef.current) {
                  const offset = distance / 10;
                  monthsRef.current.scrollTop += offset;
                }
                if (flag >= 10) {
                  clearInterval(interval);
                  if (monthsRef.current) {
                    monthsRef.current.scrollTop = currTop;
                  }
                }
              }, 40);
            } else {
              monthsRef.current.scrollTop = currTop;
            }
          }
        }
      });
    };
    const monthsViewScroll = (e) => {
      if (monthsData.length <= 1) {
        return;
      }
      const scrollTop = e.target.scrollTop;
      let current = Math.floor(scrollTop / avgHeight);
      const nextTop = monthsData[current + 1].scrollTop;
      const nextHeight = monthsData[current + 1].cssHeight;
      if (current === 0) {
        if (scrollTop >= nextTop) {
          current += 1;
        }
      } else if (current > 0 && current < monthsNum - 1) {
        if (scrollTop >= nextTop) {
          current += 1;
        }
        if (scrollTop < monthsData[current].scrollTop) {
          current -= 1;
        }
      } else {
        const viewPosition = Math.round(scrollTop + viewHeight);
        if (current + 1 <= monthsNum && viewPosition >= nextTop + nextHeight) {
          current += 1;
        }
        if (current >= 1 && scrollTop < monthsData[current - 1].scrollTop) {
          current -= 1;
        }
      }
      setDefaultRange(monthsNum, current);
    };
    React.useImperativeHandle(ref, () => ({
      scrollToDate
    }));
    const getClasses = (day, month) => {
      const dateStr = getCurrDate(day, month);
      if (day.type === "active") {
        if (propStartDate && Utils.compareDate(dateStr, propStartDate) || propEndDate && Utils.compareDate(propEndDate, dateStr)) {
          return `${dayPrefix}-disabled`;
        }
        if (type2 === "range" || type2 === "week") {
          if (isStart(dateStr, currentDate) || isEnd(dateStr, currentDate)) {
            return `${dayPrefix}-active ${isStart(dateStr, currentDate) ? "active-start" : ""} ${isEnd(dateStr, currentDate) ? "active-end" : ""}`;
          }
          if (Array.isArray(currentDate) && Object.values(currentDate).length === 2 && Utils.compareDate(currentDate[0], dateStr) && Utils.compareDate(dateStr, currentDate[1])) {
            if (disableDate(day)) {
              return `${dayPrefix}-choose-disabled`;
            }
            return `${dayPrefix}-choose`;
          }
        } else if (type2 === "multiple" && isMultiple(dateStr, currentDate) || !Array.isArray(currentDate) && Utils.isEqual(currentDate, dateStr)) {
          return `${dayPrefix}-active`;
        }
        if (disableDate(day)) {
          return `${dayPrefix}-disabled`;
        }
        return null;
      }
      return `${dayPrefix}-disabled`;
    };
    const chooseDay = (day, month, isFirst) => {
      if (getClasses(day, month) === `${dayPrefix}-disabled`) {
        return;
      }
      const days = [...month.curData];
      const [y2, m] = month.curData;
      days[2] = typeof day.day === "number" ? Utils.getNumTwoBit(day.day) : day.day;
      days[3] = `${days[0]}/${days[1]}/${days[2]}`;
      days[4] = Utils.getWhatDay(+days[0], +days[1], +days[2]);
      if (type2 === "multiple") {
        if (currentDate.length > 0) {
          let hasIndex = "";
          currentDate.forEach((item, index) => {
            if (item === days[3]) {
              hasIndex = index;
            }
          });
          if (isFirst) {
            state.currDateArray.push([...days]);
          } else if (hasIndex !== "") {
            currentDate.splice(hasIndex, 1);
            state.currDateArray.splice(hasIndex, 1);
          } else {
            currentDate.push(days[3]);
            state.currDateArray.push([...days]);
          }
        } else {
          currentDate.push(days[3]);
          state.currDateArray = [[...days]];
        }
      } else if (type2 === "range") {
        const curDataLength = Object.values(currentDate).length;
        if (curDataLength === 2 || curDataLength === 0) {
          Array.isArray(currentDate) && currentDate.splice(0) && currentDate.push(days[3]);
          state.currDateArray = [[...days]];
        } else if (Utils.compareDate(currentDate[0], days[3])) {
          Array.isArray(currentDate) && currentDate.push(days[3]);
          state.currDateArray = [...state.currDateArray, [...days]];
        } else {
          Array.isArray(currentDate) && currentDate.unshift(days[3]);
          state.currDateArray = [[...days], ...state.currDateArray];
        }
      } else if (type2 === "week") {
        const weekArr = Utils.getWeekDate(y2, m, `${day.day}`, firstDayOfWeek);
        if (propStartDate && Utils.compareDate(weekArr[0], propStartDate)) {
          weekArr.splice(0, 1, propStartDate);
        }
        if (propEndDate && Utils.compareDate(propEndDate, weekArr[1])) {
          weekArr.splice(1, 1, propEndDate);
        }
        Array.isArray(currentDate) && currentDate.splice(0) && currentDate.push(...weekArr);
        state.currDateArray = [
          Utils.formatResultDate(weekArr[0]),
          Utils.formatResultDate(weekArr[1])
        ];
      } else {
        setCurrentDate(days[3]);
        state.currDateArray = [...days];
      }
      if (!isFirst) {
        onDayClick && onDayClick(state.currDateArray);
        if (autoBackfill || !popup) {
          confirm2();
        }
      }
      setMonthsData(monthsData.slice());
    };
    const confirm2 = () => {
      if (type2 === "range" && state.currDateArray.length === 2 || type2 !== "range") {
        const chooseData = state.currDateArray.slice(0);
        onConfirm && onConfirm(chooseData);
        if (popup) {
          onUpdate && onUpdate();
        }
      }
    };
    const classes = classnamesExports(
      {
        [`${classPrefix2}-title`]: !popup,
        [`${classPrefix2}-nofooter`]: !!autoBackfill
      },
      className,
      classPrefix2
    );
    const headerClasses = classnamesExports({
      [`${classPrefix2}-header`]: true,
      [`${classPrefix2}-header-title`]: !popup
    });
    const isStartTip = (day, month) => {
      return (type2 === "range" || type2 === "week") && day.type === "active" && isStart(getCurrDate(day, month), currentDate);
    };
    const isEndTip = (day, month) => {
      return currentDate.length >= 2 && (type2 === "range" || type2 === "week") && day.type === "active" && isEnd(getCurrDate(day, month), currentDate);
    };
    const renderHeader = () => {
      return /* @__PURE__ */ React.createElement("div", { className: headerClasses }, showTitle && /* @__PURE__ */ React.createElement("div", { className: `${classPrefix2}-title` }, title || locale.calendaritem.title), renderHeaderButtons && /* @__PURE__ */ React.createElement("div", { className: `${classPrefix2}-header-buttons` }, renderHeaderButtons()), showSubTitle && /* @__PURE__ */ React.createElement("div", { className: `${classPrefix2}-sub-title` }, yearMonthTitle), /* @__PURE__ */ React.createElement("div", { className: `${classPrefix2}-weeks`, ref: weeksPanel }, weeks.map((item) => /* @__PURE__ */ React.createElement("div", { className: `${classPrefix2}-week-item`, key: item }, item))));
    };
    const renderContent = () => {
      return /* @__PURE__ */ React.createElement(
        "div",
        {
          className: `${classPrefix2}-content`,
          onScroll: monthsViewScroll,
          ref: monthsRef
        },
        /* @__PURE__ */ React.createElement("div", { className: `${classPrefix2}-pannel`, ref: monthsPanel }, /* @__PURE__ */ React.createElement(
          "div",
          {
            className: "viewArea",
            ref: viewAreaRef,
            style: { transform: `translateY(${translateY}px)` }
          },
          monthsData.slice(monthDefaultRange[0], monthDefaultRange[1]).map((month, key) => {
            return /* @__PURE__ */ React.createElement("div", { className: `${classPrefix2}-month`, key }, /* @__PURE__ */ React.createElement("div", { className: `${classPrefix2}-month-title` }, month.title), /* @__PURE__ */ React.createElement("div", { className: `${classPrefix2}-days` }, month.monthData.map((day, i) => /* @__PURE__ */ React.createElement(
              "div",
              {
                className: [
                  `${classPrefix2}-day`,
                  getClasses(day, month)
                ].join(" "),
                onClick: () => {
                  chooseDay(day, month);
                },
                key: i
              },
              /* @__PURE__ */ React.createElement("div", { className: `${classPrefix2}-day-day` }, renderDay ? renderDay(day) : day.day),
              !isStartTip(day, month) && renderDayTop && /* @__PURE__ */ React.createElement("div", { className: `${classPrefix2}-day-info-top` }, renderDayTop(day)),
              !isStartTip(day, month) && !isEndTip(day, month) && renderDayBottom && /* @__PURE__ */ React.createElement("div", { className: `${classPrefix2}-day-info-bottom` }, renderDayBottom(day)),
              !isStartTip(day, month) && !isEndTip(day, month) && !renderDayBottom && showToday && isCurrDay(month, day.day) && /* @__PURE__ */ React.createElement("div", { className: `${classPrefix2}-day-info-curr` }, locale.calendaritem.today),
              isStartTip(day, month) && /* @__PURE__ */ React.createElement(
                "div",
                {
                  className: `${classPrefix2}-day-info ${isStartAndEnd(currentDate) ? `${classPrefix2}-day-info-top` : ""}`
                },
                startText || locale.calendaritem.start
              ),
              isEndTip(day, month) && /* @__PURE__ */ React.createElement("div", { className: `${classPrefix2}-day-info` }, endText || locale.calendaritem.end)
            ))));
          })
        ))
      );
    };
    const renderFooter = () => {
      return /* @__PURE__ */ React.createElement("div", { className: "nut-calendar-footer" }, /* @__PURE__ */ React.createElement("div", { className: "calendar-confirm-btn", onClick: confirm2 }, confirmText || locale.confirm));
    };
    return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", { className: classes, style }, renderHeader(), renderContent(), popup && !autoBackfill ? renderFooter() : ""));
  });
  CalendarItem.defaultProps = defaultProps$_;
  CalendarItem.displayName = "NutCalendarItem";
  const defaultProps$Z = {
    ...ComponentDefaults,
    type: "single",
    autoBackfill: false,
    popup: true,
    visible: false,
    title: "",
    defaultValue: "",
    startDate: Utils.getDay(0),
    endDate: Utils.getDay(365),
    showToday: true,
    startText: "",
    endText: "",
    confirmText: "",
    showTitle: true,
    showSubTitle: true,
    scrollAnimation: true,
    firstDayOfWeek: 0,
    disableDate: (date2) => false,
    renderHeaderButtons: void 0,
    renderDay: void 0,
    renderDayTop: void 0,
    renderDayBottom: void 0,
    onClose: () => {
    },
    onConfirm: (param) => {
    },
    onDayClick: (data) => {
    },
    onPageChange: (param) => {
    }
  };
  const Calendar = React.forwardRef((props, ref) => {
    const { locale } = useConfig();
    const {
      style,
      className,
      popup,
      visible,
      type: type2,
      autoBackfill,
      title,
      defaultValue,
      startDate,
      endDate,
      showToday,
      startText,
      endText,
      confirmText,
      showTitle,
      showSubTitle,
      scrollAnimation,
      firstDayOfWeek,
      disableDate,
      renderHeaderButtons,
      renderDay,
      renderDayTop,
      renderDayBottom,
      onClose,
      onConfirm,
      onDayClick,
      onPageChange
    } = { ...defaultProps$Z, ...props };
    const calendarRef = React.useRef(null);
    const close = () => {
      onClose && onClose();
    };
    const choose = (param) => {
      close();
      onConfirm && onConfirm(param);
    };
    const closePopup = () => {
      close();
    };
    const select = (param) => {
      onDayClick && onDayClick(param);
    };
    const scrollToDate = (date2) => {
      var _a2;
      (_a2 = calendarRef.current) == null ? void 0 : _a2.scrollToDate(date2);
    };
    const yearMonthChange = (param) => {
      onPageChange && onPageChange(param);
    };
    React.useImperativeHandle(ref, () => ({
      scrollToDate
    }));
    const renderItem = () => {
      return /* @__PURE__ */ React.createElement(
        CalendarItem,
        {
          ref: calendarRef,
          style,
          className,
          type: type2,
          autoBackfill,
          popup,
          title: title || locale.calendaritem.title,
          defaultValue,
          startDate,
          endDate,
          showToday,
          startText: startText || locale.calendaritem.start,
          endText: endText || locale.calendaritem.end,
          confirmText: confirmText || locale.calendaritem.confirm,
          showTitle,
          showSubTitle,
          scrollAnimation,
          firstDayOfWeek,
          disableDate,
          renderHeaderButtons,
          renderDay,
          renderDayTop,
          renderDayBottom,
          onConfirm: choose,
          onDayClick: select,
          onPageChange: yearMonthChange
        }
      );
    };
    return /* @__PURE__ */ React.createElement(React.Fragment, null, popup ? /* @__PURE__ */ React.createElement(
      Popup,
      {
        visible,
        position: "bottom",
        round: true,
        closeable: true,
        destroyOnClose: true,
        onOverlayClick: closePopup,
        onCloseIconClick: closePopup,
        style: { height: "85vh" }
      },
      renderItem()
    ) : renderItem());
  });
  Calendar.defaultProps = defaultProps$Z;
  Calendar.displayName = "NutCalendar";
  const CheckboxGroupContext = React.createContext(null);
  const defaultProps$Y = {
    max: void 0,
    labelPosition: "right",
    direction: "vertical",
    onChange: (value) => {
    },
    options: []
  };
  const classPrefix$g = "nut-checkboxgroup";
  const CheckboxGroup = React.forwardRef(
    (props, ref) => {
      const { children } = { ...defaultProps$Y, ...props };
      const {
        className,
        disabled,
        onChange,
        value,
        defaultValue,
        max,
        labelPosition,
        direction,
        options: options2,
        ...rest
      } = props;
      React.useImperativeHandle(ref, () => ({
        toggle(state) {
          if (state === false) {
            setValue([]);
          } else {
            const childrenLabel = [];
            React.Children.map(children, (child) => {
              const childProps = child.props;
              childrenLabel.push(childProps.value);
            });
            setValue(childrenLabel);
          }
        },
        reverse() {
          const childrenLabel = [];
          React.Children.map(children, (child) => {
            const childProps = child.props;
            childrenLabel.push(childProps.value);
          });
          const reverse = childrenLabel.filter(
            (c) => (_value == null ? void 0 : _value.findIndex((v) => v === c)) === -1
          );
          setValue(reverse);
        }
      }));
      const [_value, setValue] = usePropsValue({
        value: props.value,
        defaultValue: props.defaultValue,
        finalValue: [],
        onChange
      });
      const renderOptions = React.useCallback(() => {
        return options2 == null ? void 0 : options2.map(({ label, value: value2, disabled: disabled2, onChange: onChange2, ...rest2 }) => {
          return /* @__PURE__ */ React.createElement(
            Checkbox,
            {
              key: value2 == null ? void 0 : value2.toString(),
              label,
              disabled: disabled2,
              value: value2,
              ...rest2
            }
          );
        });
      }, [options2, max]);
      return /* @__PURE__ */ React.createElement(
        CheckboxGroupContext.Provider,
        {
          value: {
            labelPosition: labelPosition || "right",
            disabled,
            max,
            value: _value,
            check: (value2) => {
              const combined = [..._value, value2];
              setValue(combined);
            },
            uncheck: (value2) => {
              const reduced = _value.filter((item) => item !== value2);
              setValue(reduced);
            }
          }
        },
        /* @__PURE__ */ React.createElement(
          "div",
          {
            className: classnamesExports(classPrefix$g, className, {
              [`nut-checkboxgroup--${props.direction}`]: props.direction
            }),
            ...rest
          },
          (options2 == null ? void 0 : options2.length) ? renderOptions() : children
        )
      );
    }
  );
  CheckboxGroup.defaultProps = defaultProps$Y;
  CheckboxGroup.displayName = "NutCheckboxGroup";
  const defaultProps$X = {
    ...ComponentDefaults,
    disabled: false,
    labelPosition: "right",
    icon: null,
    activeIcon: null,
    indeterminateIcon: null,
    onChange: (value) => {
    }
  };
  const classPrefix$f = "nut-checkbox";
  const Checkbox = (props) => {
    const { children } = {
      ...defaultProps$X,
      ...props
    };
    const {
      icon,
      label,
      className,
      activeIcon,
      checked,
      value,
      defaultChecked,
      disabled,
      onChange,
      indeterminate,
      indeterminateIcon,
      ...others
    } = props;
    let { labelPosition, ...rest } = others;
    const ctx2 = React.useContext(CheckboxGroupContext);
    let [innerChecked, setChecked] = usePropsValue({
      value: props.checked,
      defaultValue: props.defaultChecked,
      finalValue: defaultChecked,
      onChange
    });
    let [innerDisabled, setDisabled] = React.useState(disabled);
    const [innerIndeterminate, setIndeterminate] = React.useState(indeterminate);
    React.useEffect(() => {
      setDisabled(disabled);
    }, [disabled]);
    React.useEffect(() => {
      setIndeterminate(indeterminate);
    }, [indeterminate]);
    if (ctx2) {
      if (ctx2.labelPosition !== void 0) {
        labelPosition = ctx2.labelPosition;
      }
      innerDisabled = ctx2.disabled !== void 0 ? ctx2.disabled : innerDisabled;
      innerChecked = ctx2.value.includes(value);
      setChecked = (checked2) => {
        if (ctx2.disabled)
          return;
        if (checked2)
          ctx2.check(value);
        if (!checked2)
          ctx2.uncheck(value);
      };
    }
    const renderIcon = () => {
      if (!innerChecked) {
        return React.isValidElement(icon) ? icon : /* @__PURE__ */ React.createElement(N, { className: color() });
      }
      if (innerIndeterminate) {
        return React.isValidElement(indeterminateIcon) ? indeterminateIcon : /* @__PURE__ */ React.createElement(x$g, { className: color() });
      }
      return React.isValidElement(activeIcon) ? activeIcon : /* @__PURE__ */ React.createElement(x$e, { className: color() });
    };
    const color = () => {
      if (innerDisabled) {
        return `${classPrefix$f}__icon--disable`;
      }
      if (innerChecked) {
        if (innerIndeterminate) {
          return `${classPrefix$f}__icon--indeterminate`;
        }
        return `${classPrefix$f}__icon`;
      }
      return `${classPrefix$f}__icon--unchecked`;
    };
    const renderLabel = () => {
      return /* @__PURE__ */ React.createElement(
        "span",
        {
          className: classnamesExports(`${classPrefix$f}__label `, {
            [`${classPrefix$f}__label--disabled`]: innerDisabled
          })
        },
        children || label
      );
    };
    const handleClick2 = () => {
      if (disabled)
        return;
      const latestChecked = !innerChecked;
      if (ctx2 && ctx2.max !== void 0) {
        if (latestChecked && ctx2.value.length >= ctx2.max)
          return;
      }
      setChecked(latestChecked);
    };
    return /* @__PURE__ */ React.createElement(
      "div",
      {
        className: classnamesExports(classPrefix$f, className, {
          [`${classPrefix$f}--reverse`]: labelPosition === "left"
        }),
        ...rest,
        onClick: handleClick2
      },
      renderIcon(),
      renderLabel()
    );
  };
  Checkbox.defaultProps = defaultProps$X;
  Checkbox.displayName = "NutCheckBox";
  Checkbox.Group = CheckboxGroup;
  const MIN_DISTANCE = 10;
  function getDirection(x2, y2) {
    if (x2 > y2 && x2 > MIN_DISTANCE) {
      return "horizontal";
    }
    if (y2 > x2 && y2 > MIN_DISTANCE) {
      return "vertical";
    }
    return "";
  }
  function useTouch() {
    const [startX, SetStartX] = React.useState(0);
    const [startY, SetStartY] = React.useState(0);
    const [moveX, SetMoveX] = React.useState(0);
    const [moveY, SetMoveY] = React.useState(0);
    const [deltaX, SetDeltaX] = React.useState(0);
    const [deltaY, SetDeltaY] = React.useState(0);
    const [offsetX, SetOffsetX] = React.useState(0);
    const [offsetY, SetOffsetY] = React.useState(0);
    const [direction, SetDirection] = React.useState("");
    const isVertical = () => direction === "vertical";
    const isHorizontal = () => direction === "horizontal";
    const reset = () => {
      SetDeltaX(0);
      SetDeltaY(0);
      SetOffsetX(0);
      SetOffsetY(0);
      SetDirection("");
    };
    const start2 = (event) => {
      reset();
      SetStartX(event.touches[0].clientX);
      SetStartY(event.touches[0].clientY);
    };
    const move = (event) => {
      const touch = event.touches[0];
      const dX = touch.clientX - startX;
      const dY = touch.clientY - startY;
      SetDeltaX(dX);
      SetDeltaY(dY);
      SetMoveX(touch.clientX);
      SetMoveY(touch.clientY);
      SetOffsetX(Math.abs(dX));
      SetOffsetY(Math.abs(dY));
      if (!direction) {
        SetDirection(getDirection(offsetX, offsetY));
      }
    };
    return {
      move,
      start: start2,
      reset,
      startX,
      startY,
      moveX,
      moveY,
      deltaX,
      deltaY,
      offsetX,
      offsetY,
      direction,
      isVertical,
      isHorizontal
    };
  }
  const InternalPickerPanel = (props, ref) => {
    const {
      keyIndex = 0,
      defaultValue,
      options: options2 = [],
      threeDimensional = true,
      duration = 1e3,
      chooseItem
    } = props;
    const touch = useTouch();
    const DEFAULT_DURATION = 200;
    const INERTIA_TIME = 300;
    const INERTIA_DISTANCE = 15;
    const [currIndex, setCurrIndex] = React.useState(1);
    const lineSpacing = 36;
    const [touchTime, setTouchTime] = React.useState(0);
    const [touchDeg, setTouchDeg] = React.useState("0deg");
    const rotation = 20;
    const moving = React.useRef(false);
    let timer;
    const rollerRef = React.useRef(null);
    const PickerPanelRef = React.useRef(null);
    const [startTime, setStartTime] = React.useState(0);
    const [startY, setStartY] = React.useState(0);
    const transformY = React.useRef(0);
    const [scrollDistance, setScrollDistance] = React.useState(0);
    const isHidden = (index) => {
      if (index >= currIndex + 8 || index <= currIndex - 8) {
        return true;
      }
      return false;
    };
    const setTransform = (translateY = 0, type2, time = DEFAULT_DURATION, deg) => {
      let nTime = time;
      if (type2 !== "end") {
        nTime = 0;
      }
      setTouchTime(nTime);
      setTouchDeg(deg);
      setScrollDistance(translateY);
    };
    const setMove = (move, type2, time) => {
      let updateMove = move + transformY.current;
      if (type2 === "end") {
        if (updateMove > 0) {
          updateMove = 0;
        }
        if (updateMove < -(options2.length - 1) * lineSpacing) {
          updateMove = -(options2.length - 1) * lineSpacing;
        }
        const endMove = Math.round(updateMove / lineSpacing) * lineSpacing;
        const deg = `${(Math.abs(Math.round(endMove / lineSpacing)) + 1) * rotation}deg`;
        setTransform(endMove, type2, time, deg);
        setCurrIndex(Math.abs(Math.round(endMove / lineSpacing)) + 1);
      } else {
        let deg = 0;
        const currentDeg = (-updateMove / lineSpacing + 1) * rotation;
        const maxDeg = (options2.length + 1) * rotation;
        const minDeg = 0;
        deg = Math.min(Math.max(currentDeg, minDeg), maxDeg);
        if (minDeg < deg && deg < maxDeg) {
          setTransform(updateMove, "", void 0, `${deg}deg`);
          setCurrIndex(Math.abs(Math.round(updateMove / lineSpacing)) + 1);
        }
      }
    };
    const setChooseValue = (move) => {
      chooseItem && chooseItem(options2 == null ? void 0 : options2[Math.round(-move / lineSpacing)], keyIndex);
    };
    const touchStart = (event) => {
      touch.start(event);
      setStartY(touch.deltaY);
      setStartTime(Date.now());
      transformY.current = scrollDistance;
    };
    const touchMove = (event) => {
      touch.move(event);
      if (touch.isVertical) {
        moving.current = true;
        preventDefault2(event, true);
      }
      const move = touch.deltaY - startY;
      setMove(move);
    };
    const touchEnd = (event) => {
      if (!moving.current)
        return;
      const move = touch.deltaY - startY;
      const moveTime = Date.now() - startTime;
      if (moveTime <= INERTIA_TIME && Math.abs(move) > INERTIA_DISTANCE) {
        const distance = momentum(move, moveTime);
        setMove(distance, "end", +duration);
      } else {
        setMove(move, "end");
      }
      setTimeout(() => {
        touch.reset();
      }, 0);
    };
    const momentum = (distance, duration2) => {
      let nDistance = distance;
      const speed = Math.abs(nDistance / duration2);
      nDistance = speed / 3e-3 * (nDistance < 0 ? -1 : 1);
      return nDistance;
    };
    const modifyStatus = (type2, val) => {
      const value = val || defaultValue;
      let index = -1;
      if (value) {
        options2.some((item, idx) => {
          if (item.value === value) {
            index = idx;
            return true;
          }
          return false;
        });
      } else {
        options2.forEach((item, i) => {
          if (item.value === defaultValue) {
            index = i;
          }
        });
      }
      setCurrIndex(index === -1 ? 1 : index + 1);
      const move = index === -1 ? 0 : index * lineSpacing;
      type2 && setChooseValue(-move);
      setMove(-move);
    };
    const stopMomentum = () => {
      moving.current = false;
      setTouchTime(0);
      setChooseValue(scrollDistance);
    };
    const preventDefault2 = (event, isStopPropagation) => {
      if (typeof event.cancelable !== "boolean" || event.cancelable) {
        event.preventDefault();
      }
      if (isStopPropagation) {
        event.stopPropagation();
      }
    };
    const touchRollerStyle = () => {
      return {
        transition: `transform ${touchTime}ms cubic-bezier(0.17, 0.89, 0.45, 1)`,
        transform: `rotate3d(1, 0, 0, ${touchDeg})`
      };
    };
    const touchTileStyle = () => {
      return {
        transition: `transform ${touchTime}ms cubic-bezier(0.17, 0.89, 0.45, 1)`,
        transform: `translate3d(0, ${scrollDistance}px, 0)`
      };
    };
    React.useEffect(() => {
      setScrollDistance(0);
      transformY.current = 0;
      modifyStatus(false);
      return () => {
        clearTimeout(timer);
      };
    }, [options2]);
    React.useImperativeHandle(ref, () => ({
      stopMomentum,
      moving: moving.current
    }));
    return /* @__PURE__ */ React.createElement(
      "div",
      {
        className: "nut-picker-list",
        ref: PickerPanelRef,
        onTouchStart: touchStart,
        onTouchMove: touchMove,
        onTouchEnd: touchEnd
      },
      /* @__PURE__ */ React.createElement(
        "div",
        {
          className: "nut-picker-roller",
          ref: rollerRef,
          style: threeDimensional ? touchRollerStyle() : touchTileStyle(),
          onTransitionEnd: stopMomentum
        },
        threeDimensional && options2.map((item, index) => {
          return /* @__PURE__ */ React.createElement(
            "div",
            {
              className: `nut-picker-roller-item ${isHidden(index + 1) && "nut-picker-roller-item-hidden"}`,
              style: {
                transform: `rotate3d(1, 0, 0, ${-rotation * (index + 1)}deg) translate3d(0px, 0px, 104px)`
              },
              key: item.value ? item.value : index
            },
            /* @__PURE__ */ React.createElement(React.Fragment, null, item.text ? item.text : item)
          );
        }),
        !threeDimensional && options2.map((item, index) => {
          return /* @__PURE__ */ React.createElement(
            "div",
            {
              className: "nut-picker-roller-item-title",
              key: item.value ? item.value : index
            },
            /* @__PURE__ */ React.createElement(React.Fragment, null, item.text ? item.text : item)
          );
        })
      ),
      /* @__PURE__ */ React.createElement("div", { className: "nut-picker-mask" }),
      /* @__PURE__ */ React.createElement("div", { className: "nut-picker-indicator" })
    );
  };
  const PickerPanel = React.forwardRef(InternalPickerPanel);
  function useRefs() {
    const refs = React.useRef([]);
    const setRefs = React.useCallback(
      (index) => (el) => {
        if (el)
          refs.current[index] = el;
      },
      []
    );
    const reset = React.useCallback(() => {
      refs.current = [];
    }, []);
    return [refs.current, setRefs, reset];
  }
  const defaultProps$W = {
    ...ComponentDefaults,
    title: "",
    options: [],
    value: [],
    defaultValue: [],
    threeDimensional: true,
    duration: 1e3
  };
  const InternalPicker = (props, ref) => {
    const { locale } = useConfig();
    const {
      children,
      visible,
      title,
      options: options2 = [],
      defaultValue = [],
      className,
      style,
      threeDimensional,
      duration,
      onConfirm,
      onClose,
      afterClose,
      onChange,
      ...rest
    } = { ...defaultProps$W, ...props };
    const classPrefix2 = "nut-picker";
    const classes = classnamesExports(classPrefix2, className);
    const [selectedValue, setSelectedValue] = usePropsValue({
      value: props.value,
      defaultValue: [...defaultValue],
      finalValue: [...defaultValue],
      onChange: (val) => {
        var _a2;
        (_a2 = props.onConfirm) == null ? void 0 : _a2.call(props, setSelectedOptions(), val);
      }
    });
    const [innerVisible, setInnerVisible] = usePropsValue({
      value: props.visible,
      defaultValue: false,
      finalValue: false
    });
    const [innerValue, setInnerValue] = React.useState(selectedValue);
    const [columnIndex, setColumnIndex] = React.useState(0);
    const pickerRef = React.useRef(null);
    const [refs, setRefs] = useRefs();
    const [columnsList, setColumnsList] = React.useState([]);
    const isConfirmEvent = React.useRef(false);
    const actions = {
      open: () => {
        setInnerVisible(true);
      },
      close: () => {
        setInnerVisible(false);
      }
    };
    React.useImperativeHandle(ref, () => actions);
    const formatCascade = (columns, values) => {
      const formatted = [];
      let columnOptions = {
        text: "",
        value: "",
        children: columns
      };
      let columnIndex2 = 0;
      while (columnOptions && columnOptions.children) {
        const options22 = columnOptions.children;
        const value = values[columnIndex2];
        let index = options22.findIndex(
          (columnItem) => columnItem.value === value
        );
        if (index === -1)
          index = 0;
        columnOptions = columnOptions.children[index];
        columnIndex2++;
        formatted.push(options22);
      }
      return formatted;
    };
    const columnsType = () => {
      const firstColumn = options2[0];
      if (firstColumn) {
        if (Array.isArray(firstColumn)) {
          return "multiple";
        }
        if ("children" in firstColumn) {
          return "cascade";
        }
      }
      return "single";
    };
    const normalListData = (innerValue2) => {
      const type2 = columnsType();
      switch (type2) {
        case "multiple":
          return options2;
        case "cascade":
          return formatCascade(options2, innerValue2);
        default:
          return [options2];
      }
    };
    const init = () => {
      const normalData = normalListData(
        innerValue
      );
      setColumnsList(normalData);
      const data = [];
      normalData.length > 0 && normalData.map((item) => {
        item[0] && data.push(item[0].value);
        return item;
      });
      if (!innerValue.length && innerValue.length === 0) {
        setInnerValue([...data]);
      }
    };
    React.useEffect(() => {
      setInnerValue(innerValue !== selectedValue ? selectedValue : innerValue);
    }, [innerVisible]);
    React.useEffect(() => {
      if (innerVisible) {
        init();
      }
    }, [options2, innerVisible]);
    React.useEffect(() => {
      onChange && onChange(setSelectedOptions(), innerValue, columnIndex);
    }, [innerValue, columnsList]);
    const setSelectedOptions = () => {
      const options22 = [];
      let currOptions = [];
      columnsList.forEach((columnOptions, index) => {
        currOptions = columnOptions.filter(
          (item) => item.value === innerValue[index]
        );
        if (currOptions[0]) {
          options22.push(currOptions[0]);
        } else {
          columnOptions[0] && options22.push(columnOptions[0]);
        }
      });
      return options22;
    };
    const chooseItem = (columnOptions, columnIndex2) => {
      var _a2, _b;
      const values = [];
      const start2 = columnIndex2;
      if (columnOptions && Object.keys(columnOptions).length) {
        if (values[columnIndex2] !== columnOptions.value) {
          if (columnsType() === "cascade") {
            values[columnIndex2] = columnOptions.value || "";
            while ((_a2 = columnOptions == null ? void 0 : columnOptions.children) == null ? void 0 : _a2[0]) {
              values[columnIndex2 + 1] = columnOptions.children[0].value;
              columnIndex2++;
              columnOptions = columnOptions.children[0];
            }
            if ((_b = columnOptions == null ? void 0 : columnOptions.children) == null ? void 0 : _b.length) {
              values[columnIndex2 + 1] = "";
            }
            const combineResult = [
              ...innerValue.slice(0, start2),
              ...values.splice(start2)
            ];
            setInnerValue(combineResult);
            setColumnsList(normalListData(combineResult));
          } else {
            setInnerValue((data) => {
              const cdata = [...data];
              cdata[columnIndex2] = Object.prototype.hasOwnProperty.call(
                columnOptions,
                "value"
              ) ? columnOptions.value : "";
              return cdata;
            });
          }
          setColumnIndex(columnIndex2);
        }
      }
    };
    const confirm2 = () => {
      let moving = false;
      refs.forEach((ref2) => {
        if (ref2.moving)
          moving = true;
        ref2.stopMomentum();
      });
      if (moving) {
        isConfirmEvent.current = true;
      } else {
        setSelectedValue(innerValue);
        closePicker();
      }
      setTimeout(() => {
        isConfirmEvent.current = false;
      }, 0);
    };
    const closePicker = () => {
      setInnerVisible(false);
      onClose && onClose(setSelectedOptions(), innerValue);
      afterClose && afterClose(setSelectedOptions(), innerValue, pickerRef);
    };
    const renderTitleBar = () => {
      return /* @__PURE__ */ React.createElement("div", { className: `${classPrefix2}__control` }, /* @__PURE__ */ React.createElement(
        "span",
        {
          className: `${classPrefix2}__cancel-btn`,
          onClick: (e) => {
            e.stopPropagation();
            closePicker();
          }
        },
        locale.cancel
      ), /* @__PURE__ */ React.createElement("div", { className: `${classPrefix2}__title` }, title || ""), /* @__PURE__ */ React.createElement(
        "span",
        {
          className: `${classPrefix2}__confirm-btn`,
          onClick: (e) => {
            e.stopPropagation();
            confirm2();
          }
        },
        locale.confirm
      ));
    };
    return /* @__PURE__ */ React.createElement(React.Fragment, null, typeof children === "function" && children(selectedValue), /* @__PURE__ */ React.createElement(
      Popup,
      {
        visible: innerVisible,
        position: "bottom",
        afterClose: () => {
          closePicker();
        }
      },
      /* @__PURE__ */ React.createElement("div", { className: classes, style, ...rest }, renderTitleBar(), typeof children !== "function" && children, /* @__PURE__ */ React.createElement("div", { className: `${classPrefix2}__panel`, ref: pickerRef }, columnsList == null ? void 0 : columnsList.map((item, index) => {
        return /* @__PURE__ */ React.createElement(
          PickerPanel,
          {
            ref: setRefs(index),
            defaultValue: innerValue == null ? void 0 : innerValue[index],
            options: item,
            threeDimensional,
            chooseItem: (value, index2) => chooseItem(value, index2),
            duration,
            key: index,
            keyIndex: index
          }
        );
      })))
    ));
  };
  const Picker = React.forwardRef(InternalPicker);
  const currentYear = (/* @__PURE__ */ new Date()).getFullYear();
  const defaultProps$V = {
    ...ComponentDefaults,
    visible: false,
    title: "",
    type: "date",
    showChinese: false,
    threeDimensional: true,
    minuteStep: 1,
    startDate: new Date(currentYear - 10, 0, 1),
    endDate: new Date(currentYear + 10, 11, 31)
  };
  const DatePicker = (props) => {
    const {
      startDate,
      endDate,
      type: type2,
      showChinese,
      minuteStep,
      visible,
      title,
      defaultValue,
      formatter,
      onClose,
      onConfirm,
      filter,
      onChange,
      threeDimensional,
      className,
      style,
      ...rest
    } = {
      ...defaultProps$V,
      ...props
    };
    const { locale } = useConfig();
    const datepickerLang = locale.datepicker;
    const zhCNType = {
      day: datepickerLang.day,
      year: datepickerLang.year,
      month: datepickerLang.month,
      hour: datepickerLang.hour,
      minute: datepickerLang.min,
      seconds: datepickerLang.seconds
    };
    const [defaultValueOfPicker, setDefaultValueOfPicker] = React.useState([]);
    const [options2, setOptions] = React.useState([]);
    const isDate = (val) => {
      return Object.prototype.toString.call(val) === "[object Date]" && !Number.isNaN(val.getTime());
    };
    const formatValue = (value) => {
      let cvalue = value;
      if (!cvalue || cvalue && !isDate(cvalue)) {
        cvalue = startDate;
      }
      let timestmp = Math.max(cvalue.getTime(), startDate.getTime());
      timestmp = Math.min(timestmp, endDate.getTime());
      return timestmp;
    };
    const [currentDate, setCurrentDate] = usePropsValue({
      value: props.value && formatValue(props.value),
      defaultValue: formatValue(props.defaultValue || null),
      finalValue: 0,
      onChange: (val) => {
      }
    });
    function getMonthEndDay(year, month) {
      return new Date(year, month, 0).getDate();
    }
    const getBoundary = (type22, value) => {
      const boundary = type22 === "min" ? startDate : endDate;
      const year = boundary.getFullYear();
      let month = 1;
      let date2 = 1;
      let hour = 0;
      let minute = 0;
      if (type22 === "max") {
        month = 12;
        date2 = getMonthEndDay(value.getFullYear(), value.getMonth() + 1);
        hour = 23;
        minute = 59;
      }
      const seconds = minute;
      if (value.getFullYear() === year) {
        month = boundary.getMonth() + 1;
        if (value.getMonth() + 1 === month) {
          date2 = boundary.getDate();
          if (value.getDate() === date2) {
            hour = boundary.getHours();
            if (value.getHours() === hour) {
              minute = boundary.getMinutes();
            }
          }
        }
      }
      return {
        [`${type22}Year`]: year,
        [`${type22}Month`]: month,
        [`${type22}Date`]: date2,
        [`${type22}Hour`]: hour,
        [`${type22}Minute`]: minute,
        [`${type22}Seconds`]: seconds
      };
    };
    const ranges = () => {
      const curDate = new Date(currentDate);
      if (!curDate)
        return [];
      const { maxYear, maxDate, maxMonth, maxHour, maxMinute, maxSeconds } = getBoundary("max", curDate);
      const { minYear, minDate, minMonth, minHour, minMinute, minSeconds } = getBoundary("min", curDate);
      let result = [
        {
          type: "year",
          range: [minYear, maxYear]
        },
        {
          type: "month",
          range: [minMonth, maxMonth]
        },
        {
          type: "day",
          range: [minDate, maxDate]
        },
        {
          type: "hour",
          range: [minHour, maxHour]
        },
        {
          type: "minute",
          range: [minMinute, maxMinute]
        },
        {
          type: "seconds",
          range: [minSeconds, maxSeconds]
        }
      ];
      switch (type2.toLocaleLowerCase()) {
        case "date":
          result = result.slice(0, 3);
          break;
        case "datetime":
          result = result.slice(0, 5);
          break;
        case "time":
          result = result.slice(3, 6);
          break;
        case "year-month":
          result = result.slice(0, 2);
          break;
        case "hour-minutes":
          result = result.slice(3, 5);
          break;
        case "month-day":
          result = result.slice(1, 3);
          break;
        case "datehour":
          result = result.slice(0, 4);
          break;
      }
      return result;
    };
    const updateChooseValueCustmer = (selectedOptions, selectedValue, index) => {
      var _a2;
      const rangeType = type2.toLocaleLowerCase();
      if (["date", "datetime", "datehour", "month-day", "year-month"].includes(
        rangeType
      )) {
        const formatDate = [];
        selectedValue.forEach((item) => {
          formatDate.push(item);
        });
        if (rangeType === "month-day" && formatDate.length < 3) {
          formatDate.unshift(
            new Date(defaultValue || startDate || endDate).getFullYear()
          );
        }
        if (rangeType === "year-month" && formatDate.length < 3) {
          formatDate.push(
            new Date(defaultValue || startDate || endDate).getDate()
          );
        }
        const year = Number(formatDate[0]);
        const month = Number(formatDate[1]) - 1;
        const day = Math.min(
          Number(formatDate[2]),
          getMonthEndDay(Number(formatDate[0]), Number(formatDate[1]))
        );
        let date2 = null;
        if (rangeType === "date" || rangeType === "month-day" || rangeType === "year-month") {
          date2 = new Date(year, month, day);
        } else if (rangeType === "datetime") {
          date2 = new Date(
            year,
            month,
            day,
            Number(formatDate[3]),
            Number(formatDate[4])
          );
        } else if (rangeType === "datehour") {
          date2 = new Date(year, month, day, Number(formatDate[3]));
        }
        const isEqual2 = ((_a2 = new Date(currentDate)) == null ? void 0 : _a2.getTime()) === (date2 == null ? void 0 : date2.getTime());
        date2 && isDate(date2) && !isEqual2 && setCurrentDate(formatValue(date2));
      }
      props.onChange && props.onChange(selectedOptions, selectedValue, index);
    };
    const padZero = (num, targetLength = 2) => {
      let str = `${num}`;
      while (str.length < targetLength) {
        str = `0${str}`;
      }
      return str;
    };
    const formatterOption = (type22, value) => {
      let fOption = null;
      if (formatter) {
        fOption = formatter(type22, {
          text: padZero(value, 2),
          value: padZero(value, 2)
        });
      } else {
        const padMin = padZero(value, 2);
        const fatter = showChinese ? zhCNType[type22] : "";
        fOption = { text: padMin + fatter, value: padMin };
      }
      return fOption;
    };
    const generateValue = (min, max, val, type22, columnIndex) => {
      var _a2;
      let cmin = min;
      const arr = [];
      let index = 0;
      while (cmin <= max) {
        arr.push(formatterOption(type22, cmin));
        if (type22 === "minute") {
          cmin += minuteStep;
        } else {
          cmin++;
        }
        if (cmin <= val) {
          index++;
        }
      }
      defaultValueOfPicker[columnIndex] = (_a2 = arr[index]) == null ? void 0 : _a2.value;
      setDefaultValueOfPicker([...defaultValueOfPicker]);
      if (props.filter && props.filter(type22, arr)) {
        return props.filter(type22, arr);
      }
      return arr;
    };
    const getDateIndex = (type22) => {
      const date2 = new Date(currentDate);
      if (!currentDate)
        return 0;
      if (type22 === "year") {
        return date2.getFullYear();
      }
      if (type22 === "month") {
        return date2.getMonth() + 1;
      }
      if (type22 === "day") {
        return date2.getDate();
      }
      if (type22 === "hour") {
        return date2.getHours();
      }
      if (type22 === "minute") {
        return date2.getMinutes();
      }
      if (type22 === "seconds") {
        return date2.getSeconds();
      }
      return 0;
    };
    const columns = () => {
      const val = ranges().map((res, columnIndex) => {
        return generateValue(
          res.range[0],
          res.range[1],
          getDateIndex(res.type),
          res.type,
          columnIndex
        );
      });
      return val || [];
    };
    React.useEffect(() => {
      if (currentDate) {
        setOptions(columns());
      }
    }, [currentDate]);
    return /* @__PURE__ */ React.createElement("div", { className: `nut-datepicker ${className}`, style, ...rest }, options2.length && /* @__PURE__ */ React.createElement(
      Picker,
      {
        title,
        visible,
        options: options2,
        onClose,
        defaultValue: defaultValueOfPicker,
        onConfirm: (options22, value) => onConfirm && onConfirm(options22, value),
        onChange: (options22, value, index) => updateChooseValueCustmer(options22, value, index),
        threeDimensional
      }
    ));
  };
  DatePicker.defaultProps = defaultProps$V;
  DatePicker.displayName = "NutDatePicker";
  const Context = React.createContext({});
  function _extends() {
    _extends = Object.assign ? Object.assign.bind() : function(target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
    return _extends.apply(this, arguments);
  }
  function _inheritsLoose(subClass, superClass) {
    subClass.prototype = Object.create(superClass.prototype);
    subClass.prototype.constructor = subClass;
    _setPrototypeOf(subClass, superClass);
  }
  function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf2(o2) {
      return o2.__proto__ || Object.getPrototypeOf(o2);
    };
    return _getPrototypeOf(o);
  }
  function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf2(o2, p2) {
      o2.__proto__ = p2;
      return o2;
    };
    return _setPrototypeOf(o, p);
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
  function _construct(Parent, args, Class) {
    if (_isNativeReflectConstruct()) {
      _construct = Reflect.construct.bind();
    } else {
      _construct = function _construct2(Parent2, args2, Class2) {
        var a2 = [null];
        a2.push.apply(a2, args2);
        var Constructor = Function.bind.apply(Parent2, a2);
        var instance = new Constructor();
        if (Class2)
          _setPrototypeOf(instance, Class2.prototype);
        return instance;
      };
    }
    return _construct.apply(null, arguments);
  }
  function _isNativeFunction(fn) {
    return Function.toString.call(fn).indexOf("[native code]") !== -1;
  }
  function _wrapNativeSuper(Class) {
    var _cache = typeof Map === "function" ? /* @__PURE__ */ new Map() : void 0;
    _wrapNativeSuper = function _wrapNativeSuper2(Class2) {
      if (Class2 === null || !_isNativeFunction(Class2))
        return Class2;
      if (typeof Class2 !== "function") {
        throw new TypeError("Super expression must either be null or a function");
      }
      if (typeof _cache !== "undefined") {
        if (_cache.has(Class2))
          return _cache.get(Class2);
        _cache.set(Class2, Wrapper);
      }
      function Wrapper() {
        return _construct(Class2, arguments, _getPrototypeOf(this).constructor);
      }
      Wrapper.prototype = Object.create(Class2.prototype, {
        constructor: {
          value: Wrapper,
          enumerable: false,
          writable: true,
          configurable: true
        }
      });
      return _setPrototypeOf(Wrapper, Class2);
    };
    return _wrapNativeSuper(Class);
  }
  var formatRegExp = /%[sdj%]/g;
  var warning = function warning2() {
  };
  if (typeof process !== "undefined" && process.env && process.env.NODE_ENV !== "production" && typeof window !== "undefined" && typeof document !== "undefined") {
    warning = function warning2(type2, errors) {
      if (typeof console !== "undefined" && console.warn && typeof ASYNC_VALIDATOR_NO_WARNING === "undefined") {
        if (errors.every(function(e) {
          return typeof e === "string";
        })) {
          console.warn(type2, errors);
        }
      }
    };
  }
  function convertFieldsError(errors) {
    if (!errors || !errors.length)
      return null;
    var fields = {};
    errors.forEach(function(error) {
      var field = error.field;
      fields[field] = fields[field] || [];
      fields[field].push(error);
    });
    return fields;
  }
  function format(template) {
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }
    var i = 0;
    var len = args.length;
    if (typeof template === "function") {
      return template.apply(null, args);
    }
    if (typeof template === "string") {
      var str = template.replace(formatRegExp, function(x2) {
        if (x2 === "%%") {
          return "%";
        }
        if (i >= len) {
          return x2;
        }
        switch (x2) {
          case "%s":
            return String(args[i++]);
          case "%d":
            return Number(args[i++]);
          case "%j":
            try {
              return JSON.stringify(args[i++]);
            } catch (_) {
              return "[Circular]";
            }
            break;
          default:
            return x2;
        }
      });
      return str;
    }
    return template;
  }
  function isNativeStringType(type2) {
    return type2 === "string" || type2 === "url" || type2 === "hex" || type2 === "email" || type2 === "date" || type2 === "pattern";
  }
  function isEmptyValue(value, type2) {
    if (value === void 0 || value === null) {
      return true;
    }
    if (type2 === "array" && Array.isArray(value) && !value.length) {
      return true;
    }
    if (isNativeStringType(type2) && typeof value === "string" && !value) {
      return true;
    }
    return false;
  }
  function asyncParallelArray(arr, func, callback) {
    var results = [];
    var total = 0;
    var arrLength = arr.length;
    function count(errors) {
      results.push.apply(results, errors || []);
      total++;
      if (total === arrLength) {
        callback(results);
      }
    }
    arr.forEach(function(a2) {
      func(a2, count);
    });
  }
  function asyncSerialArray(arr, func, callback) {
    var index = 0;
    var arrLength = arr.length;
    function next(errors) {
      if (errors && errors.length) {
        callback(errors);
        return;
      }
      var original = index;
      index = index + 1;
      if (original < arrLength) {
        func(arr[original], next);
      } else {
        callback([]);
      }
    }
    next([]);
  }
  function flattenObjArr(objArr) {
    var ret = [];
    Object.keys(objArr).forEach(function(k2) {
      ret.push.apply(ret, objArr[k2] || []);
    });
    return ret;
  }
  var AsyncValidationError = /* @__PURE__ */ function(_Error) {
    _inheritsLoose(AsyncValidationError2, _Error);
    function AsyncValidationError2(errors, fields) {
      var _this;
      _this = _Error.call(this, "Async Validation Error") || this;
      _this.errors = errors;
      _this.fields = fields;
      return _this;
    }
    return AsyncValidationError2;
  }(/* @__PURE__ */ _wrapNativeSuper(Error));
  function asyncMap(objArr, option, func, callback, source) {
    if (option.first) {
      var _pending = new Promise(function(resolve, reject) {
        var next = function next2(errors) {
          callback(errors);
          return errors.length ? reject(new AsyncValidationError(errors, convertFieldsError(errors))) : resolve(source);
        };
        var flattenArr = flattenObjArr(objArr);
        asyncSerialArray(flattenArr, func, next);
      });
      _pending["catch"](function(e) {
        return e;
      });
      return _pending;
    }
    var firstFields = option.firstFields === true ? Object.keys(objArr) : option.firstFields || [];
    var objArrKeys = Object.keys(objArr);
    var objArrLength = objArrKeys.length;
    var total = 0;
    var results = [];
    var pending = new Promise(function(resolve, reject) {
      var next = function next2(errors) {
        results.push.apply(results, errors);
        total++;
        if (total === objArrLength) {
          callback(results);
          return results.length ? reject(new AsyncValidationError(results, convertFieldsError(results))) : resolve(source);
        }
      };
      if (!objArrKeys.length) {
        callback(results);
        resolve(source);
      }
      objArrKeys.forEach(function(key) {
        var arr = objArr[key];
        if (firstFields.indexOf(key) !== -1) {
          asyncSerialArray(arr, func, next);
        } else {
          asyncParallelArray(arr, func, next);
        }
      });
    });
    pending["catch"](function(e) {
      return e;
    });
    return pending;
  }
  function isErrorObj(obj) {
    return !!(obj && obj.message !== void 0);
  }
  function getValue(value, path) {
    var v = value;
    for (var i = 0; i < path.length; i++) {
      if (v == void 0) {
        return v;
      }
      v = v[path[i]];
    }
    return v;
  }
  function complementError(rule, source) {
    return function(oe) {
      var fieldValue;
      if (rule.fullFields) {
        fieldValue = getValue(source, rule.fullFields);
      } else {
        fieldValue = source[oe.field || rule.fullField];
      }
      if (isErrorObj(oe)) {
        oe.field = oe.field || rule.fullField;
        oe.fieldValue = fieldValue;
        return oe;
      }
      return {
        message: typeof oe === "function" ? oe() : oe,
        fieldValue,
        field: oe.field || rule.fullField
      };
    };
  }
  function deepMerge(target, source) {
    if (source) {
      for (var s in source) {
        if (source.hasOwnProperty(s)) {
          var value = source[s];
          if (typeof value === "object" && typeof target[s] === "object") {
            target[s] = _extends({}, target[s], value);
          } else {
            target[s] = value;
          }
        }
      }
    }
    return target;
  }
  var required$1 = function required2(rule, value, source, errors, options2, type2) {
    if (rule.required && (!source.hasOwnProperty(rule.field) || isEmptyValue(value, type2 || rule.type))) {
      errors.push(format(options2.messages.required, rule.fullField));
    }
  };
  var whitespace = function whitespace2(rule, value, source, errors, options2) {
    if (/^\s+$/.test(value) || value === "") {
      errors.push(format(options2.messages.whitespace, rule.fullField));
    }
  };
  var urlReg;
  var getUrlRegex = function() {
    if (urlReg) {
      return urlReg;
    }
    var word = "[a-fA-F\\d:]";
    var b = function b2(options2) {
      return options2 && options2.includeBoundaries ? "(?:(?<=\\s|^)(?=" + word + ")|(?<=" + word + ")(?=\\s|$))" : "";
    };
    var v4 = "(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}";
    var v6seg = "[a-fA-F\\d]{1,4}";
    var v6 = ("\n(?:\n(?:" + v6seg + ":){7}(?:" + v6seg + "|:)|                                    // 1:2:3:4:5:6:7::  1:2:3:4:5:6:7:8\n(?:" + v6seg + ":){6}(?:" + v4 + "|:" + v6seg + "|:)|                             // 1:2:3:4:5:6::    1:2:3:4:5:6::8   1:2:3:4:5:6::8  1:2:3:4:5:6::1.2.3.4\n(?:" + v6seg + ":){5}(?::" + v4 + "|(?::" + v6seg + "){1,2}|:)|                   // 1:2:3:4:5::      1:2:3:4:5::7:8   1:2:3:4:5::8    1:2:3:4:5::7:1.2.3.4\n(?:" + v6seg + ":){4}(?:(?::" + v6seg + "){0,1}:" + v4 + "|(?::" + v6seg + "){1,3}|:)| // 1:2:3:4::        1:2:3:4::6:7:8   1:2:3:4::8      1:2:3:4::6:7:1.2.3.4\n(?:" + v6seg + ":){3}(?:(?::" + v6seg + "){0,2}:" + v4 + "|(?::" + v6seg + "){1,4}|:)| // 1:2:3::          1:2:3::5:6:7:8   1:2:3::8        1:2:3::5:6:7:1.2.3.4\n(?:" + v6seg + ":){2}(?:(?::" + v6seg + "){0,3}:" + v4 + "|(?::" + v6seg + "){1,5}|:)| // 1:2::            1:2::4:5:6:7:8   1:2::8          1:2::4:5:6:7:1.2.3.4\n(?:" + v6seg + ":){1}(?:(?::" + v6seg + "){0,4}:" + v4 + "|(?::" + v6seg + "){1,6}|:)| // 1::              1::3:4:5:6:7:8   1::8            1::3:4:5:6:7:1.2.3.4\n(?::(?:(?::" + v6seg + "){0,5}:" + v4 + "|(?::" + v6seg + "){1,7}|:))             // ::2:3:4:5:6:7:8  ::2:3:4:5:6:7:8  ::8             ::1.2.3.4\n)(?:%[0-9a-zA-Z]{1,})?                                             // %eth0            %1\n").replace(/\s*\/\/.*$/gm, "").replace(/\n/g, "").trim();
    var v46Exact = new RegExp("(?:^" + v4 + "$)|(?:^" + v6 + "$)");
    var v4exact = new RegExp("^" + v4 + "$");
    var v6exact = new RegExp("^" + v6 + "$");
    var ip = function ip2(options2) {
      return options2 && options2.exact ? v46Exact : new RegExp("(?:" + b(options2) + v4 + b(options2) + ")|(?:" + b(options2) + v6 + b(options2) + ")", "g");
    };
    ip.v4 = function(options2) {
      return options2 && options2.exact ? v4exact : new RegExp("" + b(options2) + v4 + b(options2), "g");
    };
    ip.v6 = function(options2) {
      return options2 && options2.exact ? v6exact : new RegExp("" + b(options2) + v6 + b(options2), "g");
    };
    var protocol = "(?:(?:[a-z]+:)?//)";
    var auth = "(?:\\S+(?::\\S*)?@)?";
    var ipv4 = ip.v4().source;
    var ipv6 = ip.v6().source;
    var host2 = "(?:(?:[a-z\\u00a1-\\uffff0-9][-_]*)*[a-z\\u00a1-\\uffff0-9]+)";
    var domain = "(?:\\.(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)*";
    var tld = "(?:\\.(?:[a-z\\u00a1-\\uffff]{2,}))";
    var port = "(?::\\d{2,5})?";
    var path = '(?:[/?#][^\\s"]*)?';
    var regex = "(?:" + protocol + "|www\\.)" + auth + "(?:localhost|" + ipv4 + "|" + ipv6 + "|" + host2 + domain + tld + ")" + port + path;
    urlReg = new RegExp("(?:^" + regex + "$)", "i");
    return urlReg;
  };
  var pattern$2 = {
    // http://emailregex.com/
    email: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+\.)+[a-zA-Z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]{2,}))$/,
    // url: new RegExp(
    //   '^(?!mailto:)(?:(?:http|https|ftp)://|//)(?:\\S+(?::\\S*)?@)?(?:(?:(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[0-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z\\u00a1-\\uffff0-9]+-*)*[a-z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-z\\u00a1-\\uffff0-9]+-*)*[a-z\\u00a1-\\uffff0-9]+)*(?:\\.(?:[a-z\\u00a1-\\uffff]{2,})))|localhost)(?::\\d{2,5})?(?:(/|\\?|#)[^\\s]*)?$',
    //   'i',
    // ),
    hex: /^#?([a-f0-9]{6}|[a-f0-9]{3})$/i
  };
  var types = {
    integer: function integer2(value) {
      return types.number(value) && parseInt(value, 10) === value;
    },
    "float": function float(value) {
      return types.number(value) && !types.integer(value);
    },
    array: function array2(value) {
      return Array.isArray(value);
    },
    regexp: function regexp2(value) {
      if (value instanceof RegExp) {
        return true;
      }
      try {
        return !!new RegExp(value);
      } catch (e) {
        return false;
      }
    },
    date: function date2(value) {
      return typeof value.getTime === "function" && typeof value.getMonth === "function" && typeof value.getYear === "function" && !isNaN(value.getTime());
    },
    number: function number2(value) {
      if (isNaN(value)) {
        return false;
      }
      return typeof value === "number";
    },
    object: function object2(value) {
      return typeof value === "object" && !types.array(value);
    },
    method: function method2(value) {
      return typeof value === "function";
    },
    email: function email(value) {
      return typeof value === "string" && value.length <= 320 && !!value.match(pattern$2.email);
    },
    url: function url(value) {
      return typeof value === "string" && value.length <= 2048 && !!value.match(getUrlRegex());
    },
    hex: function hex(value) {
      return typeof value === "string" && !!value.match(pattern$2.hex);
    }
  };
  var type$1 = function type2(rule, value, source, errors, options2) {
    if (rule.required && value === void 0) {
      required$1(rule, value, source, errors, options2);
      return;
    }
    var custom = ["integer", "float", "array", "regexp", "object", "method", "email", "number", "date", "url", "hex"];
    var ruleType = rule.type;
    if (custom.indexOf(ruleType) > -1) {
      if (!types[ruleType](value)) {
        errors.push(format(options2.messages.types[ruleType], rule.fullField, rule.type));
      }
    } else if (ruleType && typeof value !== rule.type) {
      errors.push(format(options2.messages.types[ruleType], rule.fullField, rule.type));
    }
  };
  var range = function range2(rule, value, source, errors, options2) {
    var len = typeof rule.len === "number";
    var min = typeof rule.min === "number";
    var max = typeof rule.max === "number";
    var spRegexp = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g;
    var val = value;
    var key = null;
    var num = typeof value === "number";
    var str = typeof value === "string";
    var arr = Array.isArray(value);
    if (num) {
      key = "number";
    } else if (str) {
      key = "string";
    } else if (arr) {
      key = "array";
    }
    if (!key) {
      return false;
    }
    if (arr) {
      val = value.length;
    }
    if (str) {
      val = value.replace(spRegexp, "_").length;
    }
    if (len) {
      if (val !== rule.len) {
        errors.push(format(options2.messages[key].len, rule.fullField, rule.len));
      }
    } else if (min && !max && val < rule.min) {
      errors.push(format(options2.messages[key].min, rule.fullField, rule.min));
    } else if (max && !min && val > rule.max) {
      errors.push(format(options2.messages[key].max, rule.fullField, rule.max));
    } else if (min && max && (val < rule.min || val > rule.max)) {
      errors.push(format(options2.messages[key].range, rule.fullField, rule.min, rule.max));
    }
  };
  var ENUM$1 = "enum";
  var enumerable$1 = function enumerable2(rule, value, source, errors, options2) {
    rule[ENUM$1] = Array.isArray(rule[ENUM$1]) ? rule[ENUM$1] : [];
    if (rule[ENUM$1].indexOf(value) === -1) {
      errors.push(format(options2.messages[ENUM$1], rule.fullField, rule[ENUM$1].join(", ")));
    }
  };
  var pattern$1 = function pattern2(rule, value, source, errors, options2) {
    if (rule.pattern) {
      if (rule.pattern instanceof RegExp) {
        rule.pattern.lastIndex = 0;
        if (!rule.pattern.test(value)) {
          errors.push(format(options2.messages.pattern.mismatch, rule.fullField, value, rule.pattern));
        }
      } else if (typeof rule.pattern === "string") {
        var _pattern = new RegExp(rule.pattern);
        if (!_pattern.test(value)) {
          errors.push(format(options2.messages.pattern.mismatch, rule.fullField, value, rule.pattern));
        }
      }
    }
  };
  var rules = {
    required: required$1,
    whitespace,
    type: type$1,
    range,
    "enum": enumerable$1,
    pattern: pattern$1
  };
  var string = function string2(rule, value, callback, source, options2) {
    var errors = [];
    var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
    if (validate) {
      if (isEmptyValue(value, "string") && !rule.required) {
        return callback();
      }
      rules.required(rule, value, source, errors, options2, "string");
      if (!isEmptyValue(value, "string")) {
        rules.type(rule, value, source, errors, options2);
        rules.range(rule, value, source, errors, options2);
        rules.pattern(rule, value, source, errors, options2);
        if (rule.whitespace === true) {
          rules.whitespace(rule, value, source, errors, options2);
        }
      }
    }
    callback(errors);
  };
  var method = function method2(rule, value, callback, source, options2) {
    var errors = [];
    var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
    if (validate) {
      if (isEmptyValue(value) && !rule.required) {
        return callback();
      }
      rules.required(rule, value, source, errors, options2);
      if (value !== void 0) {
        rules.type(rule, value, source, errors, options2);
      }
    }
    callback(errors);
  };
  var number = function number2(rule, value, callback, source, options2) {
    var errors = [];
    var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
    if (validate) {
      if (value === "") {
        value = void 0;
      }
      if (isEmptyValue(value) && !rule.required) {
        return callback();
      }
      rules.required(rule, value, source, errors, options2);
      if (value !== void 0) {
        rules.type(rule, value, source, errors, options2);
        rules.range(rule, value, source, errors, options2);
      }
    }
    callback(errors);
  };
  var _boolean = function _boolean2(rule, value, callback, source, options2) {
    var errors = [];
    var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
    if (validate) {
      if (isEmptyValue(value) && !rule.required) {
        return callback();
      }
      rules.required(rule, value, source, errors, options2);
      if (value !== void 0) {
        rules.type(rule, value, source, errors, options2);
      }
    }
    callback(errors);
  };
  var regexp = function regexp2(rule, value, callback, source, options2) {
    var errors = [];
    var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
    if (validate) {
      if (isEmptyValue(value) && !rule.required) {
        return callback();
      }
      rules.required(rule, value, source, errors, options2);
      if (!isEmptyValue(value)) {
        rules.type(rule, value, source, errors, options2);
      }
    }
    callback(errors);
  };
  var integer = function integer2(rule, value, callback, source, options2) {
    var errors = [];
    var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
    if (validate) {
      if (isEmptyValue(value) && !rule.required) {
        return callback();
      }
      rules.required(rule, value, source, errors, options2);
      if (value !== void 0) {
        rules.type(rule, value, source, errors, options2);
        rules.range(rule, value, source, errors, options2);
      }
    }
    callback(errors);
  };
  var floatFn = function floatFn2(rule, value, callback, source, options2) {
    var errors = [];
    var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
    if (validate) {
      if (isEmptyValue(value) && !rule.required) {
        return callback();
      }
      rules.required(rule, value, source, errors, options2);
      if (value !== void 0) {
        rules.type(rule, value, source, errors, options2);
        rules.range(rule, value, source, errors, options2);
      }
    }
    callback(errors);
  };
  var array = function array2(rule, value, callback, source, options2) {
    var errors = [];
    var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
    if (validate) {
      if ((value === void 0 || value === null) && !rule.required) {
        return callback();
      }
      rules.required(rule, value, source, errors, options2, "array");
      if (value !== void 0 && value !== null) {
        rules.type(rule, value, source, errors, options2);
        rules.range(rule, value, source, errors, options2);
      }
    }
    callback(errors);
  };
  var object = function object2(rule, value, callback, source, options2) {
    var errors = [];
    var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
    if (validate) {
      if (isEmptyValue(value) && !rule.required) {
        return callback();
      }
      rules.required(rule, value, source, errors, options2);
      if (value !== void 0) {
        rules.type(rule, value, source, errors, options2);
      }
    }
    callback(errors);
  };
  var ENUM = "enum";
  var enumerable = function enumerable2(rule, value, callback, source, options2) {
    var errors = [];
    var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
    if (validate) {
      if (isEmptyValue(value) && !rule.required) {
        return callback();
      }
      rules.required(rule, value, source, errors, options2);
      if (value !== void 0) {
        rules[ENUM](rule, value, source, errors, options2);
      }
    }
    callback(errors);
  };
  var pattern = function pattern2(rule, value, callback, source, options2) {
    var errors = [];
    var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
    if (validate) {
      if (isEmptyValue(value, "string") && !rule.required) {
        return callback();
      }
      rules.required(rule, value, source, errors, options2);
      if (!isEmptyValue(value, "string")) {
        rules.pattern(rule, value, source, errors, options2);
      }
    }
    callback(errors);
  };
  var date = function date2(rule, value, callback, source, options2) {
    var errors = [];
    var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
    if (validate) {
      if (isEmptyValue(value, "date") && !rule.required) {
        return callback();
      }
      rules.required(rule, value, source, errors, options2);
      if (!isEmptyValue(value, "date")) {
        var dateObject;
        if (value instanceof Date) {
          dateObject = value;
        } else {
          dateObject = new Date(value);
        }
        rules.type(rule, dateObject, source, errors, options2);
        if (dateObject) {
          rules.range(rule, dateObject.getTime(), source, errors, options2);
        }
      }
    }
    callback(errors);
  };
  var required = function required2(rule, value, callback, source, options2) {
    var errors = [];
    var type2 = Array.isArray(value) ? "array" : typeof value;
    rules.required(rule, value, source, errors, options2, type2);
    callback(errors);
  };
  var type = function type2(rule, value, callback, source, options2) {
    var ruleType = rule.type;
    var errors = [];
    var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
    if (validate) {
      if (isEmptyValue(value, ruleType) && !rule.required) {
        return callback();
      }
      rules.required(rule, value, source, errors, options2, ruleType);
      if (!isEmptyValue(value, ruleType)) {
        rules.type(rule, value, source, errors, options2);
      }
    }
    callback(errors);
  };
  var any = function any2(rule, value, callback, source, options2) {
    var errors = [];
    var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
    if (validate) {
      if (isEmptyValue(value) && !rule.required) {
        return callback();
      }
      rules.required(rule, value, source, errors, options2);
    }
    callback(errors);
  };
  var validators = {
    string,
    method,
    number,
    "boolean": _boolean,
    regexp,
    integer,
    "float": floatFn,
    array,
    object,
    "enum": enumerable,
    pattern,
    date,
    url: type,
    hex: type,
    email: type,
    required,
    any
  };
  function newMessages() {
    return {
      "default": "Validation error on field %s",
      required: "%s is required",
      "enum": "%s must be one of %s",
      whitespace: "%s cannot be empty",
      date: {
        format: "%s date %s is invalid for format %s",
        parse: "%s date could not be parsed, %s is invalid ",
        invalid: "%s date %s is invalid"
      },
      types: {
        string: "%s is not a %s",
        method: "%s is not a %s (function)",
        array: "%s is not an %s",
        object: "%s is not an %s",
        number: "%s is not a %s",
        date: "%s is not a %s",
        "boolean": "%s is not a %s",
        integer: "%s is not an %s",
        "float": "%s is not a %s",
        regexp: "%s is not a valid %s",
        email: "%s is not a valid %s",
        url: "%s is not a valid %s",
        hex: "%s is not a valid %s"
      },
      string: {
        len: "%s must be exactly %s characters",
        min: "%s must be at least %s characters",
        max: "%s cannot be longer than %s characters",
        range: "%s must be between %s and %s characters"
      },
      number: {
        len: "%s must equal %s",
        min: "%s cannot be less than %s",
        max: "%s cannot be greater than %s",
        range: "%s must be between %s and %s"
      },
      array: {
        len: "%s must be exactly %s in length",
        min: "%s cannot be less than %s in length",
        max: "%s cannot be greater than %s in length",
        range: "%s must be between %s and %s in length"
      },
      pattern: {
        mismatch: "%s value %s does not match pattern %s"
      },
      clone: function clone() {
        var cloned = JSON.parse(JSON.stringify(this));
        cloned.clone = this.clone;
        return cloned;
      }
    };
  }
  var messages = newMessages();
  var Schema = /* @__PURE__ */ function() {
    function Schema2(descriptor) {
      this.rules = null;
      this._messages = messages;
      this.define(descriptor);
    }
    var _proto = Schema2.prototype;
    _proto.define = function define2(rules2) {
      var _this = this;
      if (!rules2) {
        throw new Error("Cannot configure a schema with no rules");
      }
      if (typeof rules2 !== "object" || Array.isArray(rules2)) {
        throw new Error("Rules must be an object");
      }
      this.rules = {};
      Object.keys(rules2).forEach(function(name) {
        var item = rules2[name];
        _this.rules[name] = Array.isArray(item) ? item : [item];
      });
    };
    _proto.messages = function messages2(_messages) {
      if (_messages) {
        this._messages = deepMerge(newMessages(), _messages);
      }
      return this._messages;
    };
    _proto.validate = function validate(source_, o, oc) {
      var _this2 = this;
      if (o === void 0) {
        o = {};
      }
      if (oc === void 0) {
        oc = function oc2() {
        };
      }
      var source = source_;
      var options2 = o;
      var callback = oc;
      if (typeof options2 === "function") {
        callback = options2;
        options2 = {};
      }
      if (!this.rules || Object.keys(this.rules).length === 0) {
        if (callback) {
          callback(null, source);
        }
        return Promise.resolve(source);
      }
      function complete(results) {
        var errors = [];
        var fields = {};
        function add(e) {
          if (Array.isArray(e)) {
            var _errors;
            errors = (_errors = errors).concat.apply(_errors, e);
          } else {
            errors.push(e);
          }
        }
        for (var i = 0; i < results.length; i++) {
          add(results[i]);
        }
        if (!errors.length) {
          callback(null, source);
        } else {
          fields = convertFieldsError(errors);
          callback(errors, fields);
        }
      }
      if (options2.messages) {
        var messages$1 = this.messages();
        if (messages$1 === messages) {
          messages$1 = newMessages();
        }
        deepMerge(messages$1, options2.messages);
        options2.messages = messages$1;
      } else {
        options2.messages = this.messages();
      }
      var series = {};
      var keys = options2.keys || Object.keys(this.rules);
      keys.forEach(function(z) {
        var arr = _this2.rules[z];
        var value = source[z];
        arr.forEach(function(r) {
          var rule = r;
          if (typeof rule.transform === "function") {
            if (source === source_) {
              source = _extends({}, source);
            }
            value = source[z] = rule.transform(value);
          }
          if (typeof rule === "function") {
            rule = {
              validator: rule
            };
          } else {
            rule = _extends({}, rule);
          }
          rule.validator = _this2.getValidationMethod(rule);
          if (!rule.validator) {
            return;
          }
          rule.field = z;
          rule.fullField = rule.fullField || z;
          rule.type = _this2.getType(rule);
          series[z] = series[z] || [];
          series[z].push({
            rule,
            value,
            source,
            field: z
          });
        });
      });
      var errorFields = {};
      return asyncMap(series, options2, function(data, doIt) {
        var rule = data.rule;
        var deep = (rule.type === "object" || rule.type === "array") && (typeof rule.fields === "object" || typeof rule.defaultField === "object");
        deep = deep && (rule.required || !rule.required && data.value);
        rule.field = data.field;
        function addFullField(key, schema) {
          return _extends({}, schema, {
            fullField: rule.fullField + "." + key,
            fullFields: rule.fullFields ? [].concat(rule.fullFields, [key]) : [key]
          });
        }
        function cb(e) {
          if (e === void 0) {
            e = [];
          }
          var errorList = Array.isArray(e) ? e : [e];
          if (!options2.suppressWarning && errorList.length) {
            Schema2.warning("async-validator:", errorList);
          }
          if (errorList.length && rule.message !== void 0) {
            errorList = [].concat(rule.message);
          }
          var filledErrors = errorList.map(complementError(rule, source));
          if (options2.first && filledErrors.length) {
            errorFields[rule.field] = 1;
            return doIt(filledErrors);
          }
          if (!deep) {
            doIt(filledErrors);
          } else {
            if (rule.required && !data.value) {
              if (rule.message !== void 0) {
                filledErrors = [].concat(rule.message).map(complementError(rule, source));
              } else if (options2.error) {
                filledErrors = [options2.error(rule, format(options2.messages.required, rule.field))];
              }
              return doIt(filledErrors);
            }
            var fieldsSchema = {};
            if (rule.defaultField) {
              Object.keys(data.value).map(function(key) {
                fieldsSchema[key] = rule.defaultField;
              });
            }
            fieldsSchema = _extends({}, fieldsSchema, data.rule.fields);
            var paredFieldsSchema = {};
            Object.keys(fieldsSchema).forEach(function(field) {
              var fieldSchema = fieldsSchema[field];
              var fieldSchemaList = Array.isArray(fieldSchema) ? fieldSchema : [fieldSchema];
              paredFieldsSchema[field] = fieldSchemaList.map(addFullField.bind(null, field));
            });
            var schema = new Schema2(paredFieldsSchema);
            schema.messages(options2.messages);
            if (data.rule.options) {
              data.rule.options.messages = options2.messages;
              data.rule.options.error = options2.error;
            }
            schema.validate(data.value, data.rule.options || options2, function(errs) {
              var finalErrors = [];
              if (filledErrors && filledErrors.length) {
                finalErrors.push.apply(finalErrors, filledErrors);
              }
              if (errs && errs.length) {
                finalErrors.push.apply(finalErrors, errs);
              }
              doIt(finalErrors.length ? finalErrors : null);
            });
          }
        }
        var res;
        if (rule.asyncValidator) {
          res = rule.asyncValidator(rule, data.value, cb, data.source, options2);
        } else if (rule.validator) {
          try {
            res = rule.validator(rule, data.value, cb, data.source, options2);
          } catch (error) {
            console.error == null ? void 0 : console.error(error);
            if (!options2.suppressValidatorError) {
              setTimeout(function() {
                throw error;
              }, 0);
            }
            cb(error.message);
          }
          if (res === true) {
            cb();
          } else if (res === false) {
            cb(typeof rule.message === "function" ? rule.message(rule.fullField || rule.field) : rule.message || (rule.fullField || rule.field) + " fails");
          } else if (res instanceof Array) {
            cb(res);
          } else if (res instanceof Error) {
            cb(res.message);
          }
        }
        if (res && res.then) {
          res.then(function() {
            return cb();
          }, function(e) {
            return cb(e);
          });
        }
      }, function(results) {
        complete(results);
      }, source);
    };
    _proto.getType = function getType(rule) {
      if (rule.type === void 0 && rule.pattern instanceof RegExp) {
        rule.type = "pattern";
      }
      if (typeof rule.validator !== "function" && rule.type && !validators.hasOwnProperty(rule.type)) {
        throw new Error(format("Unknown rule type %s", rule.type));
      }
      return rule.type || "string";
    };
    _proto.getValidationMethod = function getValidationMethod(rule) {
      if (typeof rule.validator === "function") {
        return rule.validator;
      }
      var keys = Object.keys(rule);
      var messageIndex = keys.indexOf("message");
      if (messageIndex !== -1) {
        keys.splice(messageIndex, 1);
      }
      if (keys.length === 1 && keys[0] === "required") {
        return validators.required;
      }
      return validators[this.getType(rule)] || void 0;
    };
    return Schema2;
  }();
  Schema.register = function register(type2, validator) {
    if (typeof validator !== "function") {
      throw new Error("Cannot register a validator by type, validator is not a function");
    }
    validators[type2] = validator;
  };
  Schema.warning = warning;
  Schema.messages = messages;
  Schema.validators = validators;
  class FormStore {
    constructor() {
      // 初始化数据
      __publicField(this, "initialValues", {});
      // 存放表单中所有的数据 eg. {password: "ddd",username: "123"}
      __publicField(this, "store", {});
      // 所有的组件实例
      __publicField(this, "fieldEntities", []);
      // 校验成功或失败的回调，onFinish、onFinishFailed
      __publicField(this, "callbacks", {});
      __publicField(this, "errors", []);
      /**
       * 注册组件实例
       * @param field
       */
      __publicField(this, "registerField", (field) => {
        this.fieldEntities.push(field);
        return () => {
          this.fieldEntities = this.fieldEntities.filter((item) => item !== field);
          if (this.store) {
            delete this.store[field.props.name];
          }
        };
      });
      /**
       * 获取 formItem 的值
       * @param name
       */
      __publicField(this, "getFieldValue", (name) => {
        var _a2;
        return (_a2 = this.store) == null ? void 0 : _a2[name];
      });
      /**
       * 设置 form 的初始值，之后在 reset 的时候使用
       * @param values
       * @param init
       */
      __publicField(this, "setInitialValues", (values, init) => {
        if (init) {
          this.initialValues = values;
          this.store = values;
        }
      });
      /**
       * 存储组件数据
       * @param newStore { [name]: newValue }
       */
      __publicField(this, "setFieldsValue", (newStore) => {
        this.store = {
          ...this.store,
          ...newStore
        };
        this.fieldEntities.forEach((enetity) => {
          const { name } = enetity.props;
          Object.keys(newStore).forEach((key) => {
            if (key === name) {
              enetity.onStoreChange("update");
            }
          });
        });
      });
      __publicField(this, "setCallback", (callback) => {
        this.callbacks = {
          ...this.callbacks,
          ...callback
        };
      });
      __publicField(this, "validate", () => {
        const err = [];
        this.errors.length = 0;
        this.fieldEntities.forEach((entity) => {
          var _a2;
          const { name, rules: rules2 = [] } = entity.props;
          const descriptor = {};
          if (rules2.length) {
            if (rules2.length > 1) {
              descriptor[name] = [];
              rules2.forEach((v) => {
                descriptor[name].push(v);
              });
            } else {
              descriptor[name] = rules2[0];
            }
          }
          const validator = new Schema(descriptor);
          validator.messages();
          validator.validate({ [name]: (_a2 = this.store) == null ? void 0 : _a2[name] }, (errors) => {
            if (errors) {
              err.push(...errors);
              this.errors.push(...errors);
            }
            entity.onStoreChange("validate");
          });
        });
        return err;
      });
      __publicField(this, "submit", () => {
        var _a2, _b, _c, _d;
        const errors = this.validate();
        if (errors.length === 0) {
          (_b = (_a2 = this.callbacks).onFinish) == null ? void 0 : _b.call(_a2, this.store);
        } else if (errors.length > 0) {
          (_d = (_c = this.callbacks).onFinishFailed) == null ? void 0 : _d.call(_c, this.store, errors);
        }
      });
      __publicField(this, "resetFields", () => {
        this.errors.length = 0;
        this.store = this.initialValues;
        this.fieldEntities.forEach((entity) => {
          entity.onStoreChange("reset");
        });
      });
      __publicField(this, "getForm", () => {
        return {
          setInitialValues: this.setInitialValues,
          setCallback: this.setCallback,
          registerField: this.registerField,
          getFieldValue: this.getFieldValue,
          setFieldsValue: this.setFieldsValue,
          resetFields: this.resetFields,
          submit: this.submit,
          store: this.store,
          errors: this.errors,
          fieldEntities: this.fieldEntities
        };
      });
      this.callbacks = {
        onFinish: () => {
        },
        onFinishFailed: () => {
        }
      };
    }
  }
  const useForm = (form) => {
    const formRef = React.useRef();
    if (!formRef.current) {
      if (form) {
        formRef.current = form;
      } else {
        const formStore = new FormStore();
        formRef.current = formStore.getForm();
      }
    }
    return [formRef.current];
  };
  function isForwardRefComponent(component) {
    return component.type && component.type.$$typeof && // eslint-disable-next-line react/display-name
    React.forwardRef(
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      () => {
      }
    ).$$typeof === component.type.$$typeof;
  }
  const defaultProps$U = {
    ...ComponentDefaults,
    required: false,
    name: "",
    label: "",
    rules: [{ required: false, message: "" }],
    errorMessageAlign: "left"
  };
  class FormItem extends React.Component {
    constructor(props) {
      super(props);
      __publicField(this, "cancelRegister");
      __publicField(this, "componentRef");
      // children添加value属性和onChange事件
      __publicField(this, "getControlled", (children) => {
        var _a2;
        const { setFieldsValue, getFieldValue } = this.context;
        const { name = "" } = this.props;
        if ((_a2 = children == null ? void 0 : children.props) == null ? void 0 : _a2.defaultValue) {
          console.warn("通过 initialValue 设置初始值");
        }
        const fieldValue = getFieldValue(name);
        const controlled = {
          ...children.props,
          [this.props.valuePropName || "value"]: fieldValue !== void 0 ? fieldValue : this.props.initialValue,
          [this.props.trigger || "onChange"]: (...args) => {
            const originOnChange = children.props[this.props.trigger || "onChange"];
            if (originOnChange) {
              originOnChange(...args);
            }
            let [next] = args;
            if (this.props.getValueFromEvent) {
              next = this.props.getValueFromEvent(...args);
            }
            setFieldsValue({ [name]: next });
          }
        };
        if (isForwardRefComponent(children)) {
          controlled.ref = (componentInstance) => {
            const originRef = children.ref;
            if (originRef) {
              if (typeof originRef === "function") {
                originRef(componentInstance);
              }
              if ("current" in originRef) {
                originRef.current = componentInstance;
              }
            }
            this.componentRef = componentInstance;
          };
        }
        return controlled;
      });
      __publicField(this, "refresh", () => {
        this.setState(({ resetCount }) => ({
          resetCount: resetCount + 1
        }));
      });
      __publicField(this, "onStoreChange", (type2) => {
        if (type2 === "reset") {
          this.refresh();
        } else {
          this.forceUpdate();
        }
      });
      __publicField(this, "renderLayout", (childNode) => {
        var _a2, _b;
        const { label, name, required: required2, className, style, errorMessageAlign } = {
          ...defaultProps$U,
          ...this.props
        };
        const item = ((_a2 = this.context.errors) == null ? void 0 : _a2.length) > 0 && ((_b = this.context.errors) == null ? void 0 : _b.filter((item2) => {
          return item2.field === name;
        }));
        const { starPosition } = this.context;
        const renderStar = required2 && /* @__PURE__ */ React.createElement("i", { className: "required" });
        const renderLabel = /* @__PURE__ */ React.createElement(React.Fragment, null, starPosition === "left" ? renderStar : null, label, starPosition === "right" ? renderStar : null);
        return /* @__PURE__ */ React.createElement(
          Cell,
          {
            className: `nut-form-item ${className}`,
            style,
            onClick: (e) => this.props.onClick && this.props.onClick(e, this.componentRef)
          },
          label ? /* @__PURE__ */ React.createElement("div", { className: "nut-cell__title nut-form-item__label" }, renderLabel) : null,
          /* @__PURE__ */ React.createElement("div", { className: "nut-cell__value nut-form-item__body" }, /* @__PURE__ */ React.createElement("div", { className: "nut-form-item__body__slots" }, childNode), item.length > 0 && /* @__PURE__ */ React.createElement(
            "div",
            {
              className: "nut-form-item__body__tips",
              style: { textAlign: errorMessageAlign }
            },
            item[0].message
          ))
        );
      });
      this.componentRef = React.createRef();
      this.state = {
        resetCount: 1
      };
    }
    componentDidMount() {
      this.cancelRegister = this.context.registerField(this);
    }
    componentWillUnmount() {
      if (this.cancelRegister) {
        this.cancelRegister();
      }
    }
    render() {
      const { children } = this.props;
      const child = Array.isArray(children) ? children[0] : children;
      const returnChildNode = React.cloneElement(
        child,
        this.getControlled(child)
      );
      return /* @__PURE__ */ React.createElement(React.Fragment, { key: this.state.resetCount }, this.renderLayout(returnChildNode));
    }
  }
  __publicField(FormItem, "defaultProps", defaultProps$U);
  __publicField(FormItem, "contextType", Context);
  const defaultProps$T = {
    ...ComponentDefaults,
    labelPosition: "right",
    starPosition: "left",
    onFinish: (values) => {
    },
    onFinishFailed: (values, errorFields) => {
    }
  };
  const PositionInfo = {
    top: "form-layout-top",
    left: "form-layout-left",
    right: "form-layout-right"
  };
  const Form = (props) => {
    const classPrefix2 = "nut-form";
    const {
      className,
      style,
      footer,
      children,
      initialValues,
      onFinish,
      onFinishFailed,
      labelPosition,
      starPosition,
      form
    } = {
      ...defaultProps$T,
      ...props
    };
    let formInstance;
    if (form !== void 0) {
      formInstance = form;
    } else {
      [formInstance] = useForm();
    }
    formInstance.starPosition = starPosition;
    const { setCallback, submit, resetFields, setInitialValues } = formInstance;
    setCallback({
      onFinish,
      onFinishFailed
    });
    const mountRef = React.useRef(false);
    setInitialValues(initialValues, !mountRef.current);
    if (!mountRef.current) {
      mountRef.current = true;
    }
    return /* @__PURE__ */ React.createElement(
      "form",
      {
        className: classnamesExports(
          classPrefix2,
          className,
          PositionInfo[labelPosition]
        ),
        style,
        onSubmit: (e) => {
          e.preventDefault();
          e.stopPropagation();
          submit();
        },
        onReset: (e) => {
          e.preventDefault();
          e.stopPropagation();
          resetFields();
        }
      },
      /* @__PURE__ */ React.createElement(Cell.Group, null, /* @__PURE__ */ React.createElement(Context.Provider, { value: formInstance }, children), footer ? /* @__PURE__ */ React.createElement(Cell, null, footer) : null)
    );
  };
  Form.defaultProps = defaultProps$T;
  Form.displayName = "NutForm";
  Form.Item = FormItem;
  Form.useForm = useForm;
  function trimExtraChar(value, char, regExp) {
    const index = value.indexOf(char);
    if (index === -1) {
      return value;
    }
    if (char === "-" && index !== 0) {
      return value.slice(0, index);
    }
    return value.slice(0, index + 1) + value.slice(index).replace(regExp, "");
  }
  function formatNumber(value, allowDot = true, allowMinus = true) {
    if (allowDot) {
      value = trimExtraChar(value, ".", /\./g);
    } else {
      value = value.split(".")[0];
    }
    if (allowMinus) {
      value = trimExtraChar(value, "-", /-/g);
    } else {
      value = value.replace(/-/, "");
    }
    const regExp = allowDot ? /[^-0-9.]/g : /[^-0-9]/g;
    return value.replace(regExp, "");
  }
  const defaultProps$S = {
    ...ComponentDefaults,
    type: "text",
    name: "",
    placeholder: "",
    confirmType: "done",
    align: "left",
    required: false,
    disabled: false,
    readOnly: false,
    maxLength: 9999,
    clearable: false,
    clearIcon: null,
    formatTrigger: "onChange",
    autoFocus: false
  };
  const Input = React.forwardRef(
    (props, ref) => {
      const { locale } = useConfig();
      const {
        type: type2,
        name,
        placeholder,
        align,
        disabled,
        readOnly,
        maxLength,
        clearable,
        clearIcon,
        formatTrigger,
        autoFocus,
        style,
        className,
        onChange,
        onFocus,
        onClear,
        formatter,
        onClick,
        confirmType,
        defaultValue,
        value: _value,
        ...rest
      } = {
        ...defaultProps$S,
        ...props
      };
      const [value, setValue] = usePropsValue({
        value: props.value,
        defaultValue: props.defaultValue,
        finalValue: "",
        onChange
      });
      const inputRef = React.useRef(null);
      const composingRef = React.useRef(false);
      const [active, setActive] = React.useState(false);
      React.useImperativeHandle(ref, () => {
        return {
          clear: () => {
            setValue("");
          },
          focus: () => {
            var _a2;
            (_a2 = inputRef.current) == null ? void 0 : _a2.focus();
          },
          blur: () => {
            var _a2;
            (_a2 = inputRef.current) == null ? void 0 : _a2.blur();
          },
          get nativeElement() {
            return inputRef.current;
          }
        };
      });
      const inputClass = React.useCallback(() => {
        const classPrefix2 = "nut-input";
        return [classPrefix2, `${disabled ? `${classPrefix2}-disabled` : ""}`].filter(Boolean).join(" ");
      }, [disabled]);
      const updateValue = (value2, trigger = "onChange") => {
        let val = value2;
        if (type2 === "number") {
          val = formatNumber(val, false, true);
        }
        if (type2 === "digit") {
          val = formatNumber(val, true, true);
        }
        if (formatter && trigger === formatTrigger) {
          val = formatter(val);
        }
        setValue(val);
        const eventHandler = props[trigger];
        if (eventHandler && typeof eventHandler === "function") {
          eventHandler(val);
        }
      };
      const handleFocus = (event) => {
        const val = event.target.value;
        onFocus && onFocus(val);
        setActive(true);
      };
      const handleInput = (value2) => {
        updateValue(value2, "onChange");
      };
      const handleBlur = (event) => {
        const val = event.target.value;
        updateValue(val, "onBlur");
        setActive(false);
      };
      const inputType = (type22) => {
        if (type22 === "digit") {
          return "text";
        }
        if (type22 === "number") {
          return "tel";
        }
        return type22;
      };
      return /* @__PURE__ */ React.createElement(
        "div",
        {
          className: `${inputClass()}  ${className || ""}`,
          style,
          onClick: (e) => {
            onClick && onClick(e);
          }
        },
        /* @__PURE__ */ React.createElement(
          "input",
          {
            ...rest,
            name,
            className: "nut-input-native",
            ref: inputRef,
            style: { textAlign: align },
            type: inputType(type2),
            maxLength,
            placeholder: placeholder || locale.placeholder,
            disabled,
            readOnly,
            value,
            autoFocus,
            enterKeyHint: confirmType,
            onBlur: (e) => {
              handleBlur(e);
            },
            onFocus: (e) => {
              handleFocus(e);
            },
            onChange: (e) => {
              handleInput(e.currentTarget.value);
            },
            onCompositionStart: (e) => {
              var _a2;
              composingRef.current = true;
              (_a2 = props.onCompositionStart) == null ? void 0 : _a2.call(props, e);
            },
            onCompositionEnd: (e) => {
              var _a2;
              composingRef.current = false;
              (_a2 = props.onCompositionEnd) == null ? void 0 : _a2.call(props, e);
            }
          }
        ),
        clearable && !readOnly && active && value.length > 0 ? /* @__PURE__ */ React.createElement(
          "span",
          {
            style: { display: "flex", alignItems: "center" },
            onClick: () => {
              if (!disabled) {
                setValue("");
                onClear && onClear("");
              }
            }
          },
          clearIcon || /* @__PURE__ */ React.createElement(x$4, { className: "nut-input-clear" })
        ) : null
      );
    }
  );
  Input.defaultProps = defaultProps$S;
  Input.displayName = "NutInput";
  const defaultProps$R = {
    ...ComponentDefaults,
    disabled: false,
    min: 1,
    max: 9999,
    readOnly: false,
    allowEmpty: false,
    defaultValue: 0,
    step: 1,
    digits: 0,
    async: false
  };
  const classPrefix$e = `nut-inputnumber`;
  const InputNumber = (props) => {
    const {
      children,
      disabled,
      min,
      max,
      readOnly,
      value,
      defaultValue,
      allowEmpty,
      digits,
      step,
      async,
      className,
      style,
      formatter,
      onPlus,
      onMinus,
      onOverlimit,
      onBlur,
      onFocus,
      onChange,
      ...restProps
    } = {
      ...defaultProps$R,
      ...props
    };
    const inputRef = React.useRef("");
    const [_checked, setChecked] = usePropsValue({
      value,
      defaultValue
    });
    React.useEffect(() => {
      if (formatter) {
        if (_checked || _checked === 0) {
          inputRef.current = formatter(_checked);
          setChecked(formatter(_checked));
        }
      }
    }, []);
    const classes = classnamesExports(
      {
        [`${classPrefix$e}`]: true,
        [`${classPrefix$e}--disabled`]: disabled
      },
      className
    );
    const styles = {
      ...style
    };
    const addAllow = (value2 = _checked) => {
      if (formatter) {
        const numValue = String(value2).replace(/[^0-9|.]/gi, "");
        return Number(numValue) < Number(max) && !disabled;
      }
      return Number(value2) < Number(max) && !disabled;
    };
    const reduceAllow = (value2 = _checked) => {
      if (formatter) {
        const numValue = String(value2).replace(/[^0-9|.]/gi, "");
        return Number(numValue) > Number(min) && !disabled;
      }
      return Number(value2) > Number(min) && !disabled;
    };
    const iconMinusClasses = classnamesExports("nut-inputnumber__icon icon-minus", {
      "nut-inputnumber__icon--disabled": !reduceAllow()
    });
    const iconAddClasses = classnamesExports("nut-inputnumber__icon icon-plus", {
      "nut-inputnumber__icon--disabled": !addAllow()
    });
    const fixedDecimalPlaces = (v) => {
      return Number(v).toFixed(Number(digits));
    };
    const emitChange = (value2, e) => {
      const outputValue = fixedDecimalPlaces(value2);
      onChange && onChange(outputValue, e);
      if (!async) {
        if (Number(outputValue) < Number(min)) {
          formatter ? setChecked(formatter(Number(min))) : setChecked(Number(min));
        } else if (Number(outputValue) > Number(max)) {
          formatter ? setChecked(formatter(Number(max))) : setChecked(Number(max));
        } else {
          formatter ? setChecked(formatter(outputValue)) : setChecked(outputValue);
        }
      }
    };
    const reduceNumber = (e) => {
      onMinus && onMinus(e);
      if (reduceAllow()) {
        if (formatter) {
          const numValue = String(_checked).replace(/[^0-9|.]/gi, "");
          const outputValue = Number(numValue) - Number(step);
          inputRef.current = formatter(outputValue);
          emitChange(outputValue, e);
        } else {
          const outputValue = Number(_checked) - Number(step);
          emitChange(outputValue, e);
        }
      } else {
        onOverlimit && onOverlimit(e);
      }
    };
    const addNumber = (e) => {
      onPlus && onPlus(e);
      if (addAllow()) {
        if (formatter) {
          const numValue = String(_checked).replace(/[^0-9|.]/gi, "");
          const outputValue = Number(numValue) + Number(step);
          inputRef.current = formatter(outputValue);
          emitChange(outputValue, e);
        } else {
          const outputValue = Number(_checked) + Number(step);
          emitChange(outputValue, e);
        }
      } else {
        onOverlimit && onOverlimit(e);
      }
    };
    const changeValue = (e) => {
      const input = e.target;
      onChange && onChange(input.valueAsNumber, e);
      if (!async) {
        if (Number.isNaN(input.valueAsNumber)) {
          setChecked("");
        } else {
          setChecked(input.valueAsNumber);
        }
      }
    };
    const changeFormatValue = (e) => {
      const input = e.target.value;
      const numReg = new RegExp("^[0-9]*$");
      const numValue = input.replace(/[^0-9|.]/gi, "");
      if (formatter) {
        if (!numReg.test(input[0]) && numValue) {
          setChecked(formatter(numValue));
        } else if (!numReg.test(input[0]) && !numValue) {
          setChecked(input);
        } else if (numReg.test(input[0])) {
          if (formatter(numValue) === inputRef.current) {
            setChecked(numValue);
          } else {
            setChecked(formatter(numValue));
            inputRef.current = formatter(numValue);
          }
        }
      }
    };
    const burFormatValue = (e) => {
      const input = e.target.value;
      const numReg = new RegExp("^[0-9]*$");
      const numValue = input.replace(/[^0-9|.]/gi, "");
      if (formatter) {
        if (formatter(numValue) === input) {
          emitChange(numValue, e);
          return;
        }
        if (!numReg.test(input) || !input) {
          setChecked(formatter(""));
        }
      }
    };
    const focusValue = (e) => {
      if (disabled)
        return;
      if (readOnly)
        return;
      onFocus && onFocus(e);
    };
    const burValue = (e) => {
      if (disabled)
        return;
      if (readOnly)
        return;
      const input = e.target;
      let value2 = input.valueAsNumber;
      if (Number.isNaN(value2) && !allowEmpty) {
        value2 = Number(defaultValue);
      }
      if (value2 < Number(min)) {
        value2 = Number(min);
      } else if (value2 > Number(max)) {
        value2 = Number(max);
      }
      emitChange(value2, e);
      onBlur && onBlur(e);
    };
    return /* @__PURE__ */ React.createElement("div", { className: classes, style: styles, ...restProps }, /* @__PURE__ */ React.createElement("div", { className: "nut-input-minus" }, /* @__PURE__ */ React.createElement(
      y$5,
      {
        className: iconMinusClasses,
        onClick: (e) => reduceNumber(e)
      }
    )), /* @__PURE__ */ React.createElement(React.Fragment, null, formatter ? /* @__PURE__ */ React.createElement(
      "input",
      {
        type: "text",
        min,
        max,
        disabled,
        readOnly,
        value: _checked,
        onInput: changeFormatValue,
        onBlur: burFormatValue,
        onFocus: focusValue
      }
    ) : /* @__PURE__ */ React.createElement(
      "input",
      {
        type: "number",
        min,
        max,
        disabled,
        readOnly,
        value: _checked,
        onInput: changeValue,
        onBlur: burValue,
        onFocus: focusValue
      }
    )), /* @__PURE__ */ React.createElement("div", { className: "nut-input-add" }, /* @__PURE__ */ React.createElement(y$4, { className: iconAddClasses, onClick: (e) => addNumber(e) })));
  };
  InputNumber.defaultProps = defaultProps$R;
  InputNumber.displayName = "NutInputNumber";
  const isObject = (val) => val !== null && typeof val === "object";
  const isFunction = (val) => typeof val === "function";
  const isPromise = (val) => {
    return isObject(val) && isFunction(val.then) && isFunction(val.catch);
  };
  const getTargetElement = (target) => {
    let targetElement;
    if (isFunction(target)) {
      targetElement = target();
    } else if ("current" in target) {
      targetElement = target.current;
    } else {
      targetElement = target;
    }
    return targetElement;
  };
  function useClickAway(onClickAway, target, eventName = "click", useCapture, isListener, outerVar) {
    const handler = (event) => {
      const targets = Array.isArray(target) ? target : [target];
      if (targets.some((item) => {
        const targetElement = getTargetElement(item);
        return !targetElement || targetElement.contains(event.target);
      })) {
        return;
      }
      if (outerVar) {
        onClickAway();
      }
    };
    React.useEffect(() => {
      if (isListener) {
        window.addEventListener(eventName, handler, useCapture);
      } else {
        window.removeEventListener(eventName, handler, useCapture);
      }
      return () => {
        window.removeEventListener(eventName, handler, useCapture);
      };
    }, [target]);
  }
  const defaultProps$Q = {
    ...ComponentDefaults,
    columns: 1,
    direction: "down",
    icon: null,
    activeTitleClass: "",
    inactiveTitleClass: "",
    onChange: (value) => void 0
  };
  const MenuItem = React.forwardRef((props, ref) => {
    const {
      className,
      style,
      options: options2,
      value,
      columns,
      title,
      icon,
      direction,
      onChange,
      activeTitleClass,
      inactiveTitleClass,
      closeOnClickAway,
      children,
      activeColor,
      show: show2,
      parent,
      index
    } = {
      ...defaultProps$Q,
      ...props
    };
    const [showPopup, setShowPopup] = React.useState(show2);
    const [innerValue, setValue] = React.useState(value);
    React.useEffect(() => {
      setShowPopup(show2);
    }, [show2]);
    React.useEffect(() => {
      getParentOffset();
    }, [showPopup]);
    React.useImperativeHandle(ref, () => ({
      toggle: parent.toggleMenuItem
    }));
    const getIconCName = (optionVal, value2) => {
      return classnamesExports({
        [activeTitleClass]: optionVal === value2,
        [inactiveTitleClass]: optionVal !== value2
      });
    };
    const setTitle = (text) => {
      if (!title) {
        parent.updateTitle(text, index);
      }
    };
    const handleClick2 = (item) => {
      parent.toggleMenuItem(index);
      setTitle(item.text);
      setValue(item.value);
      onChange && onChange(item);
    };
    const isShow = () => {
      if (showPopup)
        return {};
      return { display: "none" };
    };
    const [position, setPosition] = React.useState({
      top: 0,
      height: 0
    });
    const getParentOffset = () => {
      setTimeout(() => {
        const p = parent.menuRef.current;
        const rect = p.getBoundingClientRect();
        setPosition({
          height: rect.height,
          top: rect.top
        });
      });
    };
    const getPosition = () => {
      return direction === "down" ? {
        top: `${position.top + position.height}px`,
        bottom: "0",
        height: "initial"
      } : {
        bottom: `${window.innerHeight - position.top}px`,
        top: "auto",
        height: "initial"
      };
    };
    const micRef = React.useRef(null);
    const targetSet = [micRef.current];
    useClickAway(
      () => {
        parent.hideMenuItem(index);
      },
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      targetSet,
      "click",
      false,
      showPopup,
      closeOnClickAway
    );
    return /* @__PURE__ */ React.createElement(
      "div",
      {
        className: "nut-menu-item-container",
        ref: micRef
      },
      /* @__PURE__ */ React.createElement(
        Overlay,
        {
          className: "nut-menu__overlay",
          style: getPosition(),
          lockScroll: parent.lockScroll,
          visible: showPopup,
          closeOnOverlayClick: parent.closeOnOverlayClick,
          onClick: () => {
            parent.closeOnOverlayClick && parent.toggleMenuItem(index);
          }
        }
      ),
      /* @__PURE__ */ React.createElement(
        "div",
        {
          className: classnamesExports(className, {
            "nut-menu-item__wrap": direction === "down",
            "nut-menu-item__wrap-up": direction !== "down"
          }),
          style: {
            ...style,
            ...isShow()
          }
        },
        /* @__PURE__ */ React.createElement(
          CSSTransition$1,
          {
            in: showPopup,
            timeout: 100,
            classNames: direction === "down" ? "menu-item" : "menu-item-up"
          },
          /* @__PURE__ */ React.createElement("div", { className: "nut-menu-item__content" }, options2 == null ? void 0 : options2.map((item) => {
            return /* @__PURE__ */ React.createElement(
              "div",
              {
                className: `nut-menu-item__option ${classnamesExports({
                  active: item.value === innerValue
                })}`,
                key: item.text,
                style: {
                  flexBasis: `${100 / columns}%`
                },
                onClick: () => {
                  handleClick2(item);
                }
              },
              item.value === innerValue ? /* @__PURE__ */ React.createElement("i", null, icon || /* @__PURE__ */ React.createElement(
                x$f,
                {
                  color: activeColor,
                  className: getIconCName(item.value, value)
                }
              )) : null,
              /* @__PURE__ */ React.createElement(
                "div",
                {
                  className: getIconCName(item.value, value),
                  style: {
                    color: `${item.value === innerValue ? activeColor : ""}`
                  }
                },
                item.text
              )
            );
          }), children)
        )
      )
    );
  });
  MenuItem.defaultProps = defaultProps$Q;
  MenuItem.displayName = "NutMenuItem";
  const defaultProps$P = {
    ...ComponentDefaults,
    activeColor: "",
    closeOnOverlayClick: true,
    scrollFixed: false,
    lockScroll: true,
    icon: null,
    onOpen: () => {
    },
    onClose: () => {
    }
  };
  const Menu = (props) => {
    const {
      className,
      icon,
      scrollFixed,
      lockScroll,
      closeOnOverlayClick,
      children,
      activeColor,
      onClose,
      onOpen,
      ...rest
    } = {
      ...defaultProps$P,
      ...props
    };
    const menuRef = React.useRef(null);
    const [isScrollFixed, setIsScrollFixed] = React.useState(false);
    const getScrollTop = (el) => {
      return Math.max(0, "scrollTop" in el ? el.scrollTop : el.pageYOffset);
    };
    const onScroll = () => {
      const { scrollFixed: scrollFixed2 } = props;
      const scrollTop = getScrollTop(window);
      const isFixed = scrollTop > (typeof scrollFixed2 === "boolean" ? 30 : Number(scrollFixed2));
      setIsScrollFixed(isFixed);
    };
    React.useEffect(() => {
      if (scrollFixed) {
        window.addEventListener("scroll", onScroll);
      }
      return () => window.removeEventListener("scroll", onScroll);
    }, []);
    const [showMenuItem, setShowMenuItem] = React.useState([]);
    const [menuItemTitle, setMenuItemTitle] = React.useState([]);
    const toggleMenuItem = (index) => {
      showMenuItem[index] = !showMenuItem[index];
      if (showMenuItem[index]) {
        onOpen && onOpen();
      } else {
        onClose && onClose();
      }
      const temp = showMenuItem.map(
        (i, idx) => idx === index ? i : false
      );
      setShowMenuItem([...temp]);
    };
    const hideMenuItem = (index) => {
      showMenuItem[index] = false;
      setShowMenuItem([...showMenuItem]);
      onClose && onClose();
    };
    const updateTitle = (text, index) => {
      menuItemTitle[index] = text;
      setMenuItemTitle([...menuItemTitle]);
    };
    const cloneChildren = () => {
      return React.Children.map(children, (child, index) => {
        return React.cloneElement(child, {
          ...child.props,
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
        });
      });
    };
    const menuTitle = () => {
      return React.Children.map(children, (child, index) => {
        if (React.isValidElement(child)) {
          const { title, options: options2, value, disabled, direction } = child.props;
          const selected = options2 == null ? void 0 : options2.filter(
            (option) => option.value === value
          );
          const finallyTitle = () => {
            if (title)
              return title;
            if (menuItemTitle && menuItemTitle[index])
              return menuItemTitle[index];
            if (selected && selected.length && selected[0].text)
              return selected[0].text;
            return "";
          };
          return /* @__PURE__ */ React.createElement(
            "div",
            {
              className: classnamesExports("nut-menu__item ", className, {
                active: showMenuItem[index],
                disabled
              }),
              style: { color: showMenuItem[index] ? activeColor : "" },
              key: index,
              onClick: (e) => {
                e.stopPropagation();
                !disabled && toggleMenuItem(index);
              }
            },
            /* @__PURE__ */ React.createElement(
              "div",
              {
                className: classnamesExports("nut-menu__title ", {
                  active: showMenuItem[index],
                  disabled
                })
              },
              /* @__PURE__ */ React.createElement("div", { className: "nut-menu__title-text" }, finallyTitle()),
              icon || (direction === "up" ? /* @__PURE__ */ React.createElement(x$h, { className: "nut-menu__title-icon" }) : /* @__PURE__ */ React.createElement(y$9, { className: "nut-menu__title-icon" }))
            )
          );
        }
        return null;
      });
    };
    return /* @__PURE__ */ React.createElement(
      "div",
      {
        ...rest,
        className: classnamesExports(`nut-menu`, className, {
          "scroll-fixed": isScrollFixed
        }),
        ref: menuRef
      },
      /* @__PURE__ */ React.createElement("div", { className: "nut-menu-relative" }, /* @__PURE__ */ React.createElement(
        "div",
        {
          className: classnamesExports("nut-menu__bar", {
            opened: showMenuItem.includes(true)
          })
        },
        menuTitle()
      ), cloneChildren())
    );
  };
  Menu.defaultProps = defaultProps$P;
  Menu.displayName = "NutMenu";
  Menu.Item = MenuItem;
  const defaultProps$O = {
    ...ComponentDefaults,
    visible: false,
    type: "default",
    custom: [],
    random: false,
    onClose: () => {
    }
  };
  const NumberKeyboard = (props) => {
    const { locale } = useConfig();
    const {
      title,
      confirmText,
      visible,
      type: type2,
      custom,
      random,
      style,
      className,
      onChange,
      onDelete,
      onClose,
      onConfirm,
      ...rest
    } = props;
    const classPrefix2 = "nut-numberkeyboard";
    const getBasicKeys = () => {
      const keys = new Array(9).fill(0).map((_, index) => {
        return {
          id: String(index + 1),
          type: "num"
        };
      });
      return random ? keys.sort(() => Math.random() > 0.5 ? 1 : -1) : keys;
    };
    const getCustomKeys = () => {
      const customKeys = [
        { id: "close", type: "close" },
        { id: "0", type: "num" },
        { id: "delete", type: "delete" }
      ];
      if (!custom)
        return customKeys;
      if (custom.length > 0) {
        customKeys[0] = { id: custom[0], type: "custom" };
      }
      if (custom.length > 1) {
        customKeys[2] = { id: custom[1], type: "custom" };
      }
      return customKeys;
    };
    const keysList = React.useMemo(() => {
      return [...getBasicKeys(), ...getCustomKeys()];
    }, [type2, random, custom]);
    const DeleteIcon = () => {
      return /* @__PURE__ */ React.createElement("svg", { viewBox: "0 0 1024 1024", width: "36", height: "36" }, /* @__PURE__ */ React.createElement(
        "path",
        {
          d: "M875.594 186.122H390.803a51.162 51.162 0 0 0-36.18 14.986L79.91 475.821a51.166 51.166 0 0 0 0 72.358l274.714 274.712a51.164 51.164 0 0 0 36.179 14.986h484.791c46.033 0 83.484-37.45 83.484-83.483V269.606c.001-46.033-37.45-83.484-83.483-83.484zm32.32 568.274c0 17.85-14.473 32.318-32.32 32.318H390.803L116.089 512l274.714-274.714h484.791c17.849 0 32.32 14.47 32.32 32.32v484.789z",
          fill: "currentColor"
        }
      ), /* @__PURE__ */ React.createElement(
        "path",
        {
          d: "M753.945 360.214l-121.43 121.429-121.43-121.429s-16.062-8.224-30.356 6.072c-14.295 14.295-6.073 30.357-6.073 30.357l121.43 121.428L486.8 627.357s-8.222 16.062 6.072 30.357c14.297 14.296 30.358 6.072 30.358 6.072l109.286-109.285 109.286 109.285s16.062 8.224 30.357-6.072c14.295-14.295 6.07-30.357 6.07-30.357L668.944 518.072l121.431-121.43s8.22-16.061-6.074-30.356c-14.294-14.296-30.356-6.072-30.356-6.072z",
          fill: "currentColor"
        }
      ));
    };
    const NumberKeyboardKey = (props2) => {
      const { item } = props2;
      const [active, setActive] = React.useState(false);
      const onTouchStart = () => {
        setActive(true);
      };
      const onTouchEnd = (item2) => {
        setActive(false);
        if (item2.type === "num" || item2.type === "custom") {
          onChange && onChange(item2.id);
        }
        if (item2.type === "close") {
          onClose && onClose();
        }
        if (item2.type === "delete") {
          onDelete && onDelete();
        }
        if (item2.type === "confirm") {
          onConfirm && onConfirm();
        }
      };
      return /* @__PURE__ */ React.createElement("div", { key: item.id, className: `${classPrefix2}__body__wrapper` }, /* @__PURE__ */ React.createElement(
        "div",
        {
          className: classnamesExports({
            key: true,
            active,
            close: item.type === "close",
            delete: item.type === "delete",
            confirm: item.type === "confirm"
          }),
          onTouchStart: () => onTouchStart(),
          onTouchEnd: () => onTouchEnd(item),
          onTouchCancel: () => onTouchEnd(item)
        },
        (item.type === "num" || item.type === "custom") && /* @__PURE__ */ React.createElement("div", null, item.id),
        item.type === "delete" && /* @__PURE__ */ React.createElement(DeleteIcon, null),
        item.type === "close" && /* @__PURE__ */ React.createElement(y$3, { width: 25, height: 25 }),
        item.type === "confirm" && /* @__PURE__ */ React.createElement(React.Fragment, null, confirmText || locale.done)
      ));
    };
    return /* @__PURE__ */ React.createElement(
      Popup,
      {
        visible,
        position: "bottom",
        onOverlayClick: onClose,
        onCloseIconClick: onClose,
        overlayStyle: { backgroundColor: "rgba(0, 0, 0, 0)" },
        ...rest
      },
      /* @__PURE__ */ React.createElement("div", { className: classnamesExports(classPrefix2, className), style }, title && /* @__PURE__ */ React.createElement("div", { className: `${classPrefix2}__header` }, /* @__PURE__ */ React.createElement("h3", { className: `${classPrefix2}__header__title` }, title), type2 === "default" && /* @__PURE__ */ React.createElement(
        "span",
        {
          className: `${classPrefix2}__header__close`,
          onClick: onClose
        },
        locale.done
      )), /* @__PURE__ */ React.createElement("div", { className: `${classPrefix2}__body` }, /* @__PURE__ */ React.createElement("div", { className: `${classPrefix2}__body__keys` }, keysList == null ? void 0 : keysList.map((item) => {
        return /* @__PURE__ */ React.createElement(NumberKeyboardKey, { key: item.id, item });
      })), type2 === "rightColumn" && /* @__PURE__ */ React.createElement("div", { className: `${classPrefix2}__sidebar` }, /* @__PURE__ */ React.createElement(
        NumberKeyboardKey,
        {
          key: "delete",
          item: {
            id: "delete",
            type: "delete"
          }
        }
      ), /* @__PURE__ */ React.createElement(
        NumberKeyboardKey,
        {
          key: "confirm",
          item: {
            id: "confirm",
            type: "confirm"
          }
        }
      ))))
    );
  };
  NumberKeyboard.defaultProps = defaultProps$O;
  NumberKeyboard.displayName = "NutNumberKeyboard";
  const RadioContext = React.createContext(null);
  const defaultProps$N = {
    labelPosition: "right",
    onChange: (value) => {
    },
    direction: "vertical",
    options: []
  };
  const classPrefix$d = "nut-radiogroup";
  const RadioGroup = React.forwardRef(
    (props, ref) => {
      const {
        children,
        className,
        value,
        defaultValue,
        onChange,
        labelPosition,
        direction,
        options: options2,
        disabled,
        ...rest
      } = { ...defaultProps$N, ...props };
      const [val2State, setVal2State] = usePropsValue({
        defaultValue: props.defaultValue,
        value: props.value,
        finalValue: "",
        onChange
      });
      const renderOptionsChildren = React.useCallback(() => {
        return options2 == null ? void 0 : options2.map(({ label, value: value2, disabled: disabled2, onChange: onChange2, ...rest2 }) => {
          return /* @__PURE__ */ React.createElement(
            Radio,
            {
              ...rest2,
              key: value2 == null ? void 0 : value2.toString(),
              children: label,
              value: value2,
              disabled: disabled2,
              onChange: onChange2,
              labelPosition,
              checked: value2 === val2State
            }
          );
        });
      }, [options2]);
      return /* @__PURE__ */ React.createElement(
        RadioContext.Provider,
        {
          value: {
            labelPosition: labelPosition || "right",
            disabled,
            value: val2State,
            check: (value2) => {
              setVal2State(value2);
            },
            uncheck: () => {
              setVal2State("");
            }
          }
        },
        /* @__PURE__ */ React.createElement(
          "div",
          {
            className: classnamesExports(classPrefix$d, className, {
              [`${classPrefix$d}--${props.direction}`]: props.direction
            }),
            ...rest
          },
          (options2 == null ? void 0 : options2.length) ? renderOptionsChildren() : children
        )
      );
    }
  );
  RadioGroup.defaultProps = defaultProps$N;
  RadioGroup.displayName = "NutRadioGroup";
  const defaultProps$M = {
    ...ComponentDefaults,
    disabled: false,
    shape: "round",
    value: "",
    labelPosition: "right",
    icon: null,
    activeIcon: null,
    onChange: (checked) => {
    }
  };
  const Radio = (props) => {
    const classPrefix2 = "nut-radio";
    const {
      children,
      className,
      style,
      checked,
      defaultChecked,
      shape,
      value,
      icon,
      activeIcon,
      onChange,
      ...others
    } = {
      ...defaultProps$M,
      ...props
    };
    let { labelPosition, disabled, ...rest } = others;
    let [checkedStatement, setCheckedStatement] = usePropsValue({
      value: checked,
      defaultValue: defaultChecked,
      finalValue: false,
      onChange
    });
    const context = React.useContext(RadioContext);
    if (context) {
      checkedStatement = context.value === value;
      if (context.labelPosition !== void 0) {
        labelPosition = context.labelPosition;
      }
      if (context.disabled !== void 0) {
        disabled = context.disabled;
      }
      setCheckedStatement = (value2) => {
        if (value2) {
          context.check(props.value === void 0 ? "" : props.value);
        } else {
          context.uncheck();
        }
      };
    }
    const renderLabel = () => {
      return /* @__PURE__ */ React.createElement(
        "div",
        {
          className: classnamesExports(`${classPrefix2}__label`, {
            [`${classPrefix2}__label--disabled`]: disabled
          })
        },
        children
      );
    };
    const renderButton = () => {
      return /* @__PURE__ */ React.createElement(
        "div",
        {
          className: classnamesExports(`${classPrefix2}__button`, {
            [`${classPrefix2}__button--active`]: checkedStatement,
            [`${classPrefix2}__button--disabled`]: disabled
          })
        },
        children
      );
    };
    const color = () => {
      return {
        [`${classPrefix2}__icon--disable`]: disabled,
        [`${classPrefix2}__icon`]: checkedStatement,
        [`${classPrefix2}__icon--unchecked`]: !checkedStatement
      };
    };
    const renderIcon = () => {
      const { icon: icon2, activeIcon: activeIcon2 } = props;
      if (checkedStatement) {
        return React.isValidElement(activeIcon2) ? React.cloneElement(activeIcon2, {
          ...activeIcon2.props,
          className: classnamesExports(color())
        }) : /* @__PURE__ */ React.createElement(y$8, { className: classnamesExports(color()) });
      }
      return React.isValidElement(icon2) ? React.cloneElement(icon2, {
        ...icon2.props,
        className: classnamesExports(color())
      }) : /* @__PURE__ */ React.createElement(N, { className: classnamesExports(color()) });
    };
    const reverse = labelPosition === "left";
    const renderRadioItem = () => {
      if (shape === "button") {
        return renderButton();
      }
      if (reverse) {
        return /* @__PURE__ */ React.createElement(React.Fragment, null, renderLabel(), renderIcon());
      }
      return /* @__PURE__ */ React.createElement(React.Fragment, null, renderIcon(), renderLabel());
    };
    const handleClick2 = (e) => {
      if (disabled || checkedStatement)
        return;
      setCheckedStatement(!checkedStatement);
    };
    return /* @__PURE__ */ React.createElement(
      "div",
      {
        className: `${classPrefix2} ${className} ${reverse ? `${classPrefix2}--reverse` : ""}`,
        style,
        onClick: handleClick2,
        ...rest
      },
      renderRadioItem()
    );
  };
  Radio.defaultProps = defaultProps$M;
  Radio.displayName = "NutRadio";
  Radio.Group = RadioGroup;
  const defaultProps$L = {
    ...ComponentDefaults,
    range: false,
    min: 0,
    max: 100,
    step: 1,
    vertical: false,
    marks: {}
  };
  const Range = (props) => {
    const {
      className,
      range: range2,
      disabled,
      button,
      vertical,
      marks,
      onChange,
      onStart,
      onEnd,
      minDescription,
      maxDescription,
      currentDescription,
      min,
      max,
      step,
      value,
      defaultValue
    } = { ...defaultProps$L, ...props };
    const classPrefix2 = "nut-range";
    const [buttonIndex, setButtonIndex] = React.useState(0);
    const [dragStatus, setDragStatus] = React.useState("start");
    const touch = useTouch();
    const root2 = React.useRef(null);
    const [marksList, setMarksList] = React.useState([]);
    const [startValue, setStartValue] = React.useState(0);
    const handleChange = (value2) => {
      onChange && onChange(value2);
    };
    const [current, setCurrent] = usePropsValue({
      value,
      defaultValue,
      finalValue: 0,
      onChange: handleChange
    });
    const [exactValue, setEaxctValue] = React.useState(
      () => value || defaultValue || 0
    );
    React.useEffect(() => {
      if (marks) {
        const marksKeys = Object.keys(marks);
        const list = marksKeys.map(parseFloat).sort((a2, b) => a2 - b).filter((point) => point >= min && point <= max);
        setMarksList(list);
      }
    }, [marks]);
    const scope = () => {
      return max - min;
    };
    const classes = classnamesExports(classPrefix2, {
      [`${classPrefix2}-disabled`]: disabled,
      [`${classPrefix2}-vertical`]: vertical
    });
    const containerClasses = classnamesExports(`${classPrefix2}-container`, className, {
      [`${classPrefix2}-container-vertical`]: vertical
    });
    const markClassName = React.useCallback(
      (mark) => {
        const classPrefix22 = "nut-range-mark";
        let lowerBound = min;
        let upperBound = max;
        if (range2 && Array.isArray(current)) {
          lowerBound = current[0];
          upperBound = current[1];
        } else {
          upperBound = current;
        }
        const isActive = mark <= upperBound && mark >= lowerBound;
        return [
          `${classPrefix22}-text`,
          `${isActive ? `${classPrefix22}-text-active` : ""}`
        ].join(" ");
      },
      [range2, current, min, max]
    );
    const isRange = (val) => {
      return !!range2 && Array.isArray(val);
    };
    const calcMainAxis = () => {
      const modelVal = current;
      if (isRange(modelVal)) {
        return `${(modelVal[1] - modelVal[0]) * 100 / scope()}%`;
      }
      return `${(modelVal - min) * 100 / scope()}%`;
    };
    const calcOffset = () => {
      const modelVal = current;
      if (isRange(modelVal)) {
        return `${(modelVal[0] - min) * 100 / scope()}%`;
      }
      return `0%`;
    };
    const barStyle = () => {
      if (vertical) {
        return {
          height: calcMainAxis(),
          top: calcOffset(),
          transition: dragStatus ? "none" : void 0
        };
      }
      return {
        width: calcMainAxis(),
        left: calcOffset(),
        transition: dragStatus ? "none" : void 0
      };
    };
    const marksStyle = (mark) => {
      let style = {
        left: `${(mark - min) / scope() * 100}%`
      };
      if (vertical) {
        style = {
          top: `${(mark - min) / scope() * 100}%`
        };
      }
      return style;
    };
    const tickClass = (mark) => {
      if (range2 && Array.isArray(current)) {
        return mark <= current[1] && mark >= current[0];
      }
      return mark <= current;
    };
    const format2 = (value2) => {
      value2 = Math.max(+min, Math.min(value2, +max));
      return Math.round(value2 / +step) * +step;
    };
    const isSameValue = (newValue, oldValue) => {
      return JSON.stringify(newValue) === JSON.stringify(oldValue);
    };
    const handleOverlap = (value2) => {
      if (value2[0] > value2[1]) {
        return value2.slice(0).reverse();
      }
      return value2;
    };
    const updateValue = (value2, end) => {
      if (isRange(value2)) {
        value2 = handleOverlap(value2).map(format2);
      } else {
        value2 = format2(value2);
      }
      if (!isSameValue(value2, current)) {
        setCurrent(value2);
      }
      end && onEnd && onEnd(value2);
    };
    const click = (event) => {
      if (disabled || !root2.current) {
        return;
      }
      setDragStatus("");
      const rect = getRect(root2.current);
      let delta = event.clientX - rect.left;
      let total = rect.width;
      if (vertical) {
        delta = event.clientY - rect.top;
        total = rect.height;
      }
      const value2 = min + delta / total * scope();
      setEaxctValue(current);
      if (isRange(current)) {
        const [left, right] = current;
        const middle = (left + right) / 2;
        if (value2 <= middle) {
          updateValue([value2, right], true);
        } else {
          updateValue([left, value2], true);
        }
      } else {
        updateValue(value2, true);
      }
    };
    const onTouchStart = (event) => {
      if (disabled) {
        return;
      }
      touch.start(event);
      setEaxctValue(current);
      if (isRange(current)) {
        setStartValue(current.map(format2));
      } else {
        setStartValue(format2(current));
      }
      setDragStatus("start");
    };
    const onTouchMove = (event) => {
      event.stopPropagation();
      if (disabled || !root2.current) {
        return;
      }
      if (dragStatus === "start") {
        onStart && onStart();
      }
      touch.move(event);
      setDragStatus("draging");
      const rect = getRect(root2.current);
      let delta = touch.deltaX;
      let total = rect.width;
      let diff = delta / total * scope();
      if (vertical) {
        delta = touch.deltaY;
        total = rect.height;
        diff = delta / total * scope();
      }
      let newValue;
      if (isRange(startValue)) {
        newValue = exactValue.slice();
        newValue[buttonIndex] = startValue[buttonIndex] + diff;
      } else {
        newValue = startValue + diff;
      }
      setEaxctValue(newValue);
      updateValue(newValue);
    };
    const onTouchEnd = () => {
      if (disabled) {
        return;
      }
      if (dragStatus === "draging") {
        updateValue(current, true);
      }
      setDragStatus("");
    };
    const curValue = (idx) => {
      const modelVal = current;
      const value2 = typeof idx === "number" ? modelVal[idx] : modelVal;
      return value2;
    };
    const renderButton = (index) => {
      return /* @__PURE__ */ React.createElement(React.Fragment, null, button || /* @__PURE__ */ React.createElement("div", { className: "nut-range-button" }, currentDescription !== null && /* @__PURE__ */ React.createElement("div", { className: "number" }, currentDescription ? currentDescription(curValue(index)) : curValue(index))));
    };
    return /* @__PURE__ */ React.createElement("div", { className: containerClasses }, minDescription !== null && /* @__PURE__ */ React.createElement("div", { className: "min" }, minDescription || min), /* @__PURE__ */ React.createElement("div", { ref: root2, className: classes, onClick: (e) => click(e) }, marksList.length > 0 && /* @__PURE__ */ React.createElement("div", { className: "nut-range-mark" }, marksList.map((marks2) => {
      return /* @__PURE__ */ React.createElement(
        "span",
        {
          key: marks2,
          className: markClassName(marks2),
          style: marksStyle(marks2)
        },
        marks2,
        /* @__PURE__ */ React.createElement(
          "span",
          {
            className: classnamesExports("nut-range-tick", {
              active: tickClass(marks2)
            })
          }
        )
      );
    })), /* @__PURE__ */ React.createElement("div", { className: "nut-range-bar", style: barStyle() }, range2 ? [0, 1].map((item, index) => {
      return /* @__PURE__ */ React.createElement(
        "div",
        {
          key: index,
          className: `${index === 0 ? "nut-range-button-wrapper-left" : ""}
                  ${index === 1 ? "nut-range-button-wrapper-right" : ""}`,
          onTouchStart: (e) => {
            if (typeof index === "number") {
              setButtonIndex(index);
            }
            onTouchStart(e);
          },
          onTouchMove: (e) => onTouchMove(e),
          onTouchEnd,
          onTouchCancel: onTouchEnd,
          onClick: (e) => e.stopPropagation()
        },
        renderButton(index)
      );
    }) : /* @__PURE__ */ React.createElement(
      "div",
      {
        className: "nut-range-button-wrapper",
        onTouchStart: (e) => onTouchStart(e),
        onTouchMove: (e) => onTouchMove(e),
        onTouchEnd,
        onTouchCancel: onTouchEnd,
        onClick: (e) => e.stopPropagation()
      },
      renderButton()
    ))), maxDescription !== null && /* @__PURE__ */ React.createElement("div", { className: "max" }, maxDescription || max));
  };
  Range.defaultProps = defaultProps$L;
  Range.displayName = "NutRange";
  const defaultProps$K = {
    ...ComponentDefaults,
    count: 5,
    min: 0,
    checkedIcon: null,
    uncheckedIcon: null,
    disabled: false,
    readOnly: false,
    allowHalf: false
  };
  const Rate = (props) => {
    const {
      className,
      style,
      count,
      value,
      defaultValue,
      min,
      checkedIcon,
      uncheckedIcon,
      disabled,
      readOnly,
      allowHalf,
      onChange
    } = {
      ...defaultProps$K,
      ...props
    };
    const classPrefix2 = "nut-rate";
    const [countArray, setCountArray] = React.useState([1, 2, 3, 4, 5]);
    const [score, setScore] = usePropsValue({
      value,
      defaultValue: Math.max(defaultValue || 0, min),
      finalValue: 0,
      onChange
    });
    React.useEffect(() => {
      const tmp = [];
      for (let i = 1; i <= Number(count); i++) {
        tmp.push(i);
      }
      setCountArray(tmp);
    }, [count]);
    const renderIcon = (n) => {
      return n <= score ? checkedIcon || /* @__PURE__ */ React.createElement(x$1, null) : uncheckedIcon || (checkedIcon ? React.cloneElement(checkedIcon, {
        color: void 0
      }) : /* @__PURE__ */ React.createElement(x$1, null));
    };
    const onClick = (e, index) => {
      e.preventDefault();
      e.stopPropagation();
      if (disabled || readOnly)
        return;
      let value2 = 0;
      if (!(index === 1 && score === index)) {
        value2 = index;
      }
      value2 = Math.max(value2, min);
      setScore(value2);
    };
    const onHalfClick = (event, n) => {
      event.preventDefault();
      event.stopPropagation();
      const value2 = Math.max(min, n - 0.5);
      setScore(value2);
    };
    return /* @__PURE__ */ React.createElement(
      "div",
      {
        className: classnamesExports(classPrefix2, className, {
          disabled,
          readonly: readOnly
        }),
        style
      },
      countArray.map((n) => {
        return /* @__PURE__ */ React.createElement(
          "div",
          {
            className: `${classPrefix2}-item`,
            key: n,
            onClick: (event) => onClick(event, n)
          },
          /* @__PURE__ */ React.createElement(
            "div",
            {
              className: classnamesExports(`${classPrefix2}-item__icon`, {
                [`${classPrefix2}-item__icon--disabled`]: disabled || n > score
              })
            },
            renderIcon(n)
          ),
          allowHalf && score > n - 1 && /* @__PURE__ */ React.createElement(
            "div",
            {
              className: classnamesExports(
                `${classPrefix2}-item__half`,
                `${classPrefix2}-item__icon`,
                `${classPrefix2}-item__icon--half`
              ),
              onClick: (event) => onHalfClick(event, n)
            },
            renderIcon(n)
          )
        );
      })
    );
  };
  Rate.defaultProps = defaultProps$K;
  Rate.displayName = "NutRate";
  const defaultProps$J = {
    ...ComponentDefaults,
    placeholder: "",
    shape: "square",
    disabled: false,
    maxLength: 9999,
    clearable: true,
    readOnly: false,
    autoFocus: false,
    left: "",
    right: "",
    rightIn: "",
    leftIn: /* @__PURE__ */ React.createElement(x$2, { width: "12", height: "12" })
  };
  const SearchBar = (props) => {
    const classPrefix2 = "nut-searchbar";
    const { locale } = useConfig();
    const searchRef = React.useRef(null);
    const [value, setValue] = React.useState(() => props.value);
    const {
      placeholder,
      shape,
      className,
      disabled,
      maxLength,
      clearable,
      readOnly,
      autoFocus,
      right,
      left,
      leftIn,
      rightIn,
      onChange,
      onFocus,
      onBlur,
      onClear,
      onSearch,
      onInputClick
    } = {
      ...defaultProps$J,
      ...props
    };
    const forceFocus = () => {
      const searchSelf = searchRef.current;
      searchSelf && searchSelf.focus();
    };
    const change = (event) => {
      const { value: value2 } = event.target;
      onChange && (onChange == null ? void 0 : onChange(value2, event));
      setValue(value2);
    };
    const focus = (event) => {
      const { value: value2 } = event.target;
      onFocus && (onFocus == null ? void 0 : onFocus(value2, event));
    };
    const blur = (event) => {
      const searchSelf = searchRef.current;
      searchSelf && searchSelf.blur();
      const { value: value2 } = event.target;
      onBlur && (onBlur == null ? void 0 : onBlur(value2, event));
    };
    React.useEffect(() => {
      setValue(props.value);
    }, [props.value]);
    React.useEffect(() => {
      autoFocus && forceFocus();
    }, [autoFocus]);
    const renderField = () => {
      return /* @__PURE__ */ React.createElement(
        "input",
        {
          className: `${classPrefix2}__input ${clearable ? `${classPrefix2}__input-clear` : ""}`,
          ref: searchRef,
          style: { ...props.style },
          value: value || "",
          placeholder: placeholder || locale.placeholder,
          disabled,
          readOnly,
          maxLength,
          onKeyDown: onKeydown,
          onChange: (e) => change(e),
          onFocus: (e) => focus(e),
          onBlur: (e) => blur(e),
          onClick: (e) => clickInput(e)
        }
      );
    };
    const clickInput = (e) => {
      onInputClick && onInputClick(e);
    };
    const renderLeftIn = () => {
      if (!leftIn)
        return null;
      return /* @__PURE__ */ React.createElement("div", { className: `${classPrefix2}__leftin ${classPrefix2}__icon` }, leftIn);
    };
    const renderLeft = () => {
      if (!left)
        return null;
      return /* @__PURE__ */ React.createElement("div", { className: `${classPrefix2}__left` }, left);
    };
    const renderRightIn = () => {
      if (!rightIn)
        return null;
      return /* @__PURE__ */ React.createElement("div", { className: `${classPrefix2}__rightin ${classPrefix2}__icon` }, rightIn);
    };
    const renderRight = () => {
      if (!right)
        return null;
      return /* @__PURE__ */ React.createElement("div", { className: `${classPrefix2}__right` }, right);
    };
    const handleClear = () => {
      return /* @__PURE__ */ React.createElement(
        "div",
        {
          className: `${classPrefix2}__clear ${rightIn ? "pos-right" : ""}`,
          onClick: (e) => clearaVal(e)
        },
        /* @__PURE__ */ React.createElement(x$c, { color: "#555", width: 12, height: 12 })
      );
    };
    const clearaVal = (event) => {
      if (disabled || readOnly) {
        return;
      }
      setValue("");
      onClear && onClear(event);
      forceFocus();
    };
    const onKeydown = (e) => {
      if (e.key === "Enter") {
        const event = e.nativeEvent;
        if (typeof event.cancelable !== "boolean" || event.cancelable) {
          event.preventDefault();
        }
        onSearch && onSearch(value);
      }
    };
    return /* @__PURE__ */ React.createElement(
      "div",
      {
        className: `${classPrefix2} ${disabled ? `${classPrefix2}__disabled` : ""}  ${className || ""}`,
        style: { ...props.style }
      },
      renderLeft(),
      /* @__PURE__ */ React.createElement(
        "div",
        {
          className: `${classPrefix2}__content ${shape === "round" ? `${classPrefix2}__round` : ""}`
        },
        renderLeftIn(),
        renderField(),
        renderRightIn(),
        clearable && value && handleClear()
      ),
      renderRight()
    );
  };
  SearchBar.defaultProps = defaultProps$J;
  SearchBar.displayName = "NutSearchBar";
  const defaultProps$I = {
    ...ComponentDefaults,
    value: "",
    visible: false,
    plain: false,
    hideFooter: true,
    length: 6,
    // 1~6
    autoFocus: false
  };
  const ShortPassword = (props) => {
    const { locale } = useConfig();
    const {
      title,
      description,
      tips,
      visible,
      value,
      error,
      hideFooter,
      length,
      plain,
      style,
      className,
      closeable,
      autoFocus,
      onFocus,
      onChange,
      onConfirm,
      onTips,
      onCancel,
      onClose,
      onComplete,
      onOverlayClick,
      onCloseIconClick,
      ...rest
    } = {
      ...defaultProps$I,
      ...props
    };
    const classPrefix2 = "nut-shortpassword";
    const comLen = React.useMemo(() => {
      return Math.min(Math.max(4, length || 4), 6);
    }, [length]);
    const format2 = (val) => {
      return val.slice(0, comLen);
    };
    const [inputValue, setInputValue] = usePropsValue({ value, onChange });
    React.useEffect(() => {
      if (visible && autoFocus) {
        onFocus && onFocus();
      }
    }, [visible]);
    React.useEffect(() => {
      const val = format2(value);
      if (val.length >= comLen) {
        onComplete && onComplete(val);
      }
      setInputValue(format2(value));
    }, [value]);
    const sure = () => {
      onConfirm && onConfirm(inputValue);
    };
    return /* @__PURE__ */ React.createElement(
      Popup,
      {
        style: {
          padding: "32px 24px 28px 24px",
          borderRadius: "12px",
          textAlign: "center"
        },
        visible,
        closeable: true,
        onOverlayClick: onClose,
        onCloseIconClick: onClose,
        ...rest
      },
      /* @__PURE__ */ React.createElement("div", { className: classnamesExports(className, classPrefix2), style }, /* @__PURE__ */ React.createElement("div", { className: `${classPrefix2}__title` }, title || locale.shortpassword.title), /* @__PURE__ */ React.createElement("div", { className: `${classPrefix2}__description` }, description || locale.shortpassword.description), /* @__PURE__ */ React.createElement("div", { className: `${classPrefix2}__input`, onClick: onFocus }, /* @__PURE__ */ React.createElement("div", { className: `${classPrefix2}__input-site` }), /* @__PURE__ */ React.createElement("div", { className: `${classPrefix2}__input-fake` }, [...new Array(comLen).keys()].map((item, index) => {
        return /* @__PURE__ */ React.createElement("div", { className: `${classPrefix2}__input-fake__li`, key: index }, inputValue.length > index && /* @__PURE__ */ React.createElement(React.Fragment, null, plain ? inputValue[index] : /* @__PURE__ */ React.createElement(
          "div",
          {
            className: `${classPrefix2}__input-fake__li__icon`
          }
        )));
      }))), /* @__PURE__ */ React.createElement("div", { className: `${classPrefix2}__message` }, /* @__PURE__ */ React.createElement("div", { className: `${classPrefix2}__message__error` }, error), /* @__PURE__ */ React.createElement("div", { className: `${classPrefix2}__message__forget`, onClick: onTips }, tips || /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(x, { width: 11, height: 11, style: { marginRight: "3px" } }), locale.shortpassword.tips))), !hideFooter && /* @__PURE__ */ React.createElement("div", { className: `${classPrefix2}__footer` }, /* @__PURE__ */ React.createElement(
        "div",
        {
          className: `${classPrefix2}__footer__cancel`,
          onClick: onCancel
        },
        locale.cancel
      ), /* @__PURE__ */ React.createElement("div", { className: `${classPrefix2}__footer__sure`, onClick: sure }, locale.confirm)))
    );
  };
  ShortPassword.defaultProps = defaultProps$I;
  ShortPassword.displayName = "NutShortPassword";
  const defaultProps$H = {
    ...ComponentDefaults,
    type: "png",
    lineWidth: 2,
    strokeStyle: "#000",
    unsupported: ""
  };
  const InternalSignature = (props, ref) => {
    const { locale } = useConfig();
    const {
      type: type2,
      lineWidth,
      strokeStyle,
      unsupported,
      className,
      style,
      onConfirm,
      onClear,
      ...rest
    } = {
      ...defaultProps$H,
      ...props
    };
    const classPrefix2 = `nut-signature`;
    const canvasRef = React.useRef(null);
    const wrapRef = React.useRef(null);
    const [canvasHeight, setCanvasHeight] = React.useState(0);
    const [canvasWidth, setCanvasWidth] = React.useState(0);
    const ctx2 = React.useRef(null);
    const isCanvasSupported = () => {
      const elem = document.createElement("canvas");
      return !!(elem.getContext && elem.getContext("2d"));
    };
    const isSupportTouch = "ontouchstart" in window;
    const events = isSupportTouch ? ["touchstart", "touchmove", "touchend", "touchleave"] : ["mousedown", "mousemove", "mouseup", "mouseleave"];
    React.useEffect(() => {
      if (isCanvasSupported() && canvasRef.current && wrapRef.current) {
        ctx2.current = canvasRef.current.getContext("2d");
        setCanvasWidth(wrapRef.current.offsetWidth);
        setCanvasHeight(wrapRef.current.offsetHeight);
        addEvent();
      }
    }, []);
    const startEventHandler = (event) => {
      event.preventDefault();
      if (ctx2.current && canvasRef.current) {
        ctx2.current.beginPath();
        ctx2.current.lineWidth = lineWidth;
        ctx2.current.strokeStyle = strokeStyle;
        canvasRef.current.addEventListener(events[1], moveEventHandler, false);
        canvasRef.current.addEventListener(events[2], endEventHandler, false);
        canvasRef.current.addEventListener(events[3], leaveEventHandler, false);
      }
    };
    const addEvent = () => {
      if (canvasRef.current) {
        canvasRef.current.addEventListener(events[0], startEventHandler, false);
      }
    };
    const moveEventHandler = (event) => {
      event.preventDefault();
      const evt = isSupportTouch ? event.touches[0] : event;
      if (canvasRef.current && ctx2.current) {
        const coverPos = canvasRef.current.getBoundingClientRect();
        const mouseX = evt.clientX - coverPos.left;
        const mouseY = evt.clientY - coverPos.top;
        ctx2.current.lineTo(mouseX, mouseY);
        ctx2.current.stroke();
      }
    };
    const endEventHandler = (event) => {
      event.preventDefault();
      if (canvasRef.current) {
        canvasRef.current.removeEventListener(events[1], moveEventHandler, false);
        canvasRef.current.removeEventListener(events[2], endEventHandler, false);
      }
    };
    const leaveEventHandler = (event) => {
      event.preventDefault();
      if (canvasRef.current) {
        canvasRef.current.removeEventListener(events[1], moveEventHandler, false);
        canvasRef.current.removeEventListener(events[2], endEventHandler, false);
      }
    };
    const handleClearBtn = () => {
      if (canvasRef.current && ctx2.current) {
        canvasRef.current.addEventListener(events[2], endEventHandler, false);
        ctx2.current.clearRect(0, 0, canvasWidth, canvasHeight);
        ctx2.current.closePath();
      }
      onClear && onClear();
    };
    const onSave = (canvas) => {
      let dataurl;
      switch (type2) {
        case "png":
          dataurl = canvas.toDataURL("image/png");
          break;
        case "jpg":
          dataurl = canvas.toDataURL("image/jpeg", 0.8);
          break;
        default:
          dataurl = canvas.toDataURL("image/png");
      }
      handleClearBtn();
      onConfirm && onConfirm(canvas, dataurl);
    };
    React.useImperativeHandle(ref, () => ({
      confirm: () => {
        onSave(canvasRef.current);
      },
      clear: () => {
        handleClearBtn();
      }
    }));
    return /* @__PURE__ */ React.createElement("div", { className: `${classPrefix2} ${className}`, style, ...rest }, /* @__PURE__ */ React.createElement("div", { className: `${classPrefix2}__inner`, ref: wrapRef }, isCanvasSupported() ? /* @__PURE__ */ React.createElement("canvas", { ref: canvasRef, height: canvasHeight, width: canvasWidth }) : /* @__PURE__ */ React.createElement(React.Fragment, null, unsupported || /* @__PURE__ */ React.createElement("p", { className: `${classPrefix2}__unsupport` }, locale.signature.unsupported))));
  };
  const Signature = React.forwardRef(InternalSignature);
  Signature.defaultProps = defaultProps$H;
  Signature.displayName = "NutSignature";
  const defaultProps$G = {
    ...ComponentDefaults,
    disabled: false,
    activeText: "",
    inactiveText: ""
  };
  const Switch = (props) => {
    const {
      checked,
      defaultChecked,
      disabled,
      activeText,
      inactiveText,
      className,
      style,
      onChange
    } = {
      ...defaultProps$G,
      ...props
    };
    const classPrefix2 = "nut-switch";
    const [value, setValue] = usePropsValue({
      value: checked,
      defaultValue: defaultChecked
    });
    const classes = () => {
      return `${classPrefix2} ${value ? "switch-open" : "switch-close"} ${disabled ? `${classPrefix2}-disabled` : ""} ${`${classPrefix2}-base`} ${className}`;
    };
    const onClick = (event) => {
      if (disabled)
        return;
      onChange && onChange(!value, event);
      setValue(!value);
    };
    return /* @__PURE__ */ React.createElement("div", { className: classes(), onClick: (e) => onClick(e), style }, /* @__PURE__ */ React.createElement("div", { className: "switch-button" }, !value && /* @__PURE__ */ React.createElement("div", { className: "close-line" }), activeText && /* @__PURE__ */ React.createElement(React.Fragment, null, value ? /* @__PURE__ */ React.createElement("div", { className: `${classPrefix2}__label open` }, activeText) : /* @__PURE__ */ React.createElement("div", { className: `${classPrefix2}__label close` }, inactiveText))));
  };
  Switch.defaultProps = defaultProps$G;
  Switch.displayName = "NutSwitch";
  const defaultProps$F = {
    ...ComponentDefaults,
    defaultValue: "",
    showCount: false,
    rows: 2,
    maxLength: 140,
    placeholder: "",
    readOnly: false,
    disabled: false,
    autoSize: false
  };
  const TextArea = (props) => {
    const { locale } = useConfig();
    const {
      className,
      value,
      defaultValue,
      showCount,
      maxLength,
      rows,
      placeholder,
      readOnly,
      disabled,
      autoSize,
      style,
      onChange,
      onBlur,
      onFocus,
      ...rest
    } = { ...defaultProps$F, ...props };
    const classPrefix2 = "nut-textarea";
    const textareaRef = React.useRef(null);
    const compositionRef = React.useRef(false);
    const format2 = (value2) => {
      if (maxLength !== void 0 && value2.length > maxLength) {
        return value2.substring(0, maxLength);
      }
      return value2;
    };
    const [inputValue, setInputValue] = usePropsValue({
      value,
      defaultValue,
      finalValue: format2(defaultValue),
      onChange
    });
    React.useEffect(() => {
      if (autoSize) {
        setContentHeight();
      }
    }, [autoSize, defaultValue, inputValue]);
    const setContentHeight = () => {
      const textarea = textareaRef.current;
      if (textarea) {
        textarea.style.height = "auto";
        const height = textarea == null ? void 0 : textarea.scrollHeight;
        if (height) {
          textarea.style.height = `${height}px`;
        }
      }
    };
    const handleChange = (event) => {
      const text = event.target;
      const value2 = compositionRef.current ? text.value : format2(text.value);
      setInputValue(value2);
    };
    const handleFocus = (event) => {
      if (disabled)
        return;
      if (readOnly)
        return;
      onFocus && onFocus(event);
    };
    const handleBlur = (event) => {
      if (disabled)
        return;
      if (readOnly)
        return;
      onBlur && onBlur(event);
    };
    return /* @__PURE__ */ React.createElement(
      "div",
      {
        className: classnamesExports(classPrefix2, className, {
          [`${classPrefix2}__disabled`]: disabled
        })
      },
      /* @__PURE__ */ React.createElement(
        "textarea",
        {
          ref: textareaRef,
          className: `${classPrefix2}__textarea`,
          style,
          disabled,
          readOnly,
          value: inputValue,
          onChange: (e) => handleChange(e),
          onBlur: (e) => handleBlur(e),
          onFocus: (e) => handleFocus(e),
          onCompositionEnd: () => {
            compositionRef.current = false;
          },
          onCompositionStart: () => {
            compositionRef.current = true;
          },
          rows,
          maxLength: maxLength === -1 ? void 0 : maxLength,
          placeholder: placeholder || locale.placeholder,
          ...rest
        }
      ),
      showCount && /* @__PURE__ */ React.createElement("div", { className: `${classPrefix2}__limit` }, inputValue.length, "/", maxLength < 0 ? 0 : maxLength)
    );
  };
  TextArea.defaultProps = defaultProps$F;
  TextArea.displayName = "NutTextArea";
  const defaultProps$E = {
    ...ComponentDefaults,
    percent: 0,
    showText: false,
    animated: false,
    lazy: false,
    delay: 0
  };
  const Progress = (props) => {
    const {
      className,
      style,
      percent,
      background,
      color,
      strokeWidth,
      showText,
      animated: animated2,
      children,
      lazy,
      delay,
      ...rest
    } = {
      ...defaultProps$E,
      ...props
    };
    const classPrefix2 = "nut-progress";
    const classesInner = classnamesExports({
      [`${classPrefix2}-inner`]: true,
      [`${classPrefix2}-active`]: animated2
    });
    const stylesOuter = {
      height: `${strokeWidth}px`,
      background
    };
    const [displayPercent, setDispalyPercent] = React.useState(0);
    const stylesInner = {
      width: `${displayPercent}%`,
      background: color
    };
    React.useEffect(() => {
      setDispalyPercent(percent);
    }, [percent]);
    const [intersecting, setIntersecting] = React.useState(false);
    const progressRef = React.useRef(null);
    const observer = React.useRef(null);
    const initObserver = () => {
      const options2 = {
        threshold: [0],
        rootMargin: "0px"
      };
      observer.current = new IntersectionObserver((entires, self2) => {
        entires.forEach((item) => {
          if (item.isIntersecting) {
            setIntersecting(true);
          } else {
            setIntersecting(false);
          }
        });
      }, options2);
      observer.current.observe(progressRef.current);
    };
    const resetObserver = () => {
      observer.current.disconnect && observer.current.disconnect();
    };
    React.useEffect(() => {
      if (lazy) {
        setTimeout(() => {
          if (intersecting) {
            setDispalyPercent(percent);
          } else {
            setDispalyPercent(0);
          }
        }, delay);
      }
    }, [intersecting]);
    React.useEffect(() => {
      lazy && initObserver();
      let timer = null;
      if (delay) {
        setDispalyPercent(0);
        timer = setTimeout(() => {
          setDispalyPercent(percent);
        }, delay);
      }
      return () => {
        lazy && resetObserver();
        timer && clearTimeout(timer);
      };
    }, []);
    return /* @__PURE__ */ React.createElement(
      "div",
      {
        ref: progressRef,
        className: classnamesExports(classPrefix2, className),
        style,
        ...rest
      },
      /* @__PURE__ */ React.createElement("div", { className: `${classPrefix2}-outer`, style: stylesOuter }, /* @__PURE__ */ React.createElement("div", { className: classesInner, style: stylesInner }, showText && /* @__PURE__ */ React.createElement(
        "div",
        {
          className: `${classPrefix2}-text`,
          style: { left: `${displayPercent}%` }
        },
        children || /* @__PURE__ */ React.createElement(
          "div",
          {
            className: `${classPrefix2}-text__inner`,
            style: {
              background: color
            }
          },
          percent,
          "%"
        )
      )))
    );
  };
  Progress.defaultProps = defaultProps$E;
  Progress.displayName = "NutProgress";
  class UploadOptions {
    constructor() {
      __publicField(this, "url", "");
      __publicField(this, "name", "file");
      __publicField(this, "fileType", "image");
      __publicField(this, "formData");
      __publicField(this, "sourceFile");
      __publicField(this, "method", "post");
      __publicField(this, "xhrState", 200);
      __publicField(this, "timeout", 30 * 1e3);
      __publicField(this, "headers", {});
      __publicField(this, "withCredentials", false);
      __publicField(this, "onStart");
      __publicField(this, "taroFilePath");
      __publicField(this, "onProgress");
      __publicField(this, "onSuccess");
      __publicField(this, "onFailure");
      __publicField(this, "beforeXhrUpload");
    }
  }
  class Upload {
    constructor(options2) {
      __publicField(this, "options");
      this.options = options2;
    }
    upload() {
      var _a2;
      const { options: options2 } = this;
      const xhr = new XMLHttpRequest();
      xhr.timeout = options2.timeout;
      if (xhr.upload) {
        xhr.upload.addEventListener(
          "progress",
          (e) => {
            var _a3;
            (_a3 = options2.onProgress) == null ? void 0 : _a3.call(options2, e, options2);
          },
          false
        );
        xhr.onreadystatechange = () => {
          var _a3, _b;
          if (xhr.readyState === 4) {
            if (xhr.status === options2.xhrState) {
              (_a3 = options2.onSuccess) == null ? void 0 : _a3.call(options2, xhr.responseText, options2);
            } else {
              (_b = options2.onFailure) == null ? void 0 : _b.call(options2, xhr.responseText, options2);
            }
          }
        };
        xhr.withCredentials = options2.withCredentials;
        xhr.open(options2.method, options2.url, true);
        for (const [key, value] of Object.entries(options2.headers)) {
          xhr.setRequestHeader(key, value);
        }
        (_a2 = options2.onStart) == null ? void 0 : _a2.call(options2, options2);
        if (options2.beforeXhrUpload) {
          options2.beforeXhrUpload(xhr, options2);
        } else {
          xhr.send(options2.formData);
        }
      } else {
        console.warn("浏览器不支持 XMLHttpRequest");
      }
    }
  }
  const funcInterceptor = (interceptor, {
    args = [],
    done,
    canceled
  }) => {
    if (interceptor) {
      const returnVal = interceptor.apply(null, args);
      if (isPromise(returnVal)) {
        returnVal.then((value) => {
          if (value) {
            done(value);
          } else if (canceled) {
            canceled();
          }
        }).catch(() => {
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
  const defaultProps$D = {
    ...ComponentDefaults,
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
    beforeDelete: (file, files) => {
      return true;
    }
  };
  class FileItem {
    constructor() {
      __publicField(this, "status", "ready");
      __publicField(this, "message", "准备中..");
      __publicField(this, "uid", (/* @__PURE__ */ new Date()).getTime().toString());
      __publicField(this, "name");
      __publicField(this, "url");
      __publicField(this, "type");
      __publicField(this, "path");
      __publicField(this, "percentage", 0);
      __publicField(this, "formData", new FormData());
      __publicField(this, "responseText");
    }
  }
  const InternalUploader = (props, ref) => {
    const { locale } = useConfig();
    const {
      children,
      uploadIcon,
      uploadLabel,
      name,
      accept,
      defaultValue,
      value,
      previewType,
      fit,
      disabled,
      multiple,
      url,
      previewUrl,
      headers,
      timeout,
      method: method2,
      xhrState,
      withCredentials,
      data,
      preview,
      deletable,
      maxCount,
      capture,
      maxFileSize,
      className,
      autoUpload,
      clearInput,
      onStart,
      onDelete,
      onChange,
      onFileItemClick,
      onProgress,
      onSuccess,
      onUpdate,
      onFailure,
      onOversize,
      beforeUpload,
      beforeXhrUpload,
      beforeDelete,
      ...restProps
    } = { ...defaultProps$D, ...props };
    const [fileList, setFileList] = React.useState(defaultValue || []);
    const [uploadQueue, setUploadQueue] = React.useState([]);
    React.useEffect(() => {
      if (value) {
        setFileList(value);
      }
    }, [value]);
    const classes = classnamesExports(className, "nut-uploader");
    React.useImperativeHandle(ref, () => ({
      submit: () => {
        Promise.all(uploadQueue).then((res) => {
          res.forEach((i) => i.upload());
        });
      },
      clear: () => {
        clearUploadQueue();
      }
    }));
    const clearUploadQueue = (index = -1) => {
      if (index > -1) {
        uploadQueue.splice(index, 1);
        setUploadQueue(uploadQueue);
      } else {
        setUploadQueue([]);
        fileList.splice(0, fileList.length);
        setFileList([...fileList]);
      }
    };
    const clearInputValue = (el) => {
      el.value = "";
    };
    const executeUpload = (fileItem, index) => {
      const uploadOption = new UploadOptions();
      uploadOption.url = url;
      for (const [key, value2] of Object.entries(data)) {
        fileItem.formData.append(key, value2);
      }
      uploadOption.formData = fileItem.formData;
      uploadOption.timeout = timeout * 1;
      uploadOption.method = method2;
      uploadOption.xhrState = xhrState;
      uploadOption.headers = headers;
      uploadOption.withCredentials = withCredentials;
      uploadOption.beforeXhrUpload = beforeXhrUpload;
      try {
        uploadOption.sourceFile = fileItem.formData.get(name);
      } catch (error) {
        console.warn(error);
      }
      uploadOption.onStart = (option) => {
        clearUploadQueue(index);
        setFileList((fileList2) => {
          fileList2.map((item) => {
            if (item.uid === fileItem.uid) {
              item.status = "ready";
              item.message = locale.uploader.readyUpload;
            }
            return item;
          });
          return [...fileList2];
        });
        onStart && onStart(option);
      };
      uploadOption.onProgress = (e, option) => {
        setFileList((fileList2) => {
          fileList2.map((item) => {
            if (item.uid === fileItem.uid) {
              item.status = "uploading";
              item.message = locale.uploader.uploading;
              item.percentage = (e.loaded / e.total * 100).toFixed(0);
              onProgress && onProgress({ e, option, percentage: item.percentage });
            }
            return item;
          });
          return [...fileList2];
        });
      };
      uploadOption.onSuccess = (responseText, option) => {
        setFileList((fileList2) => {
          onUpdate && onUpdate(fileList2);
          fileList2.map((item) => {
            if (item.uid === fileItem.uid) {
              item.status = "success";
              item.message = locale.uploader.success;
              item.responseText = responseText;
            }
            return item;
          });
          return [...fileList2];
        });
        onSuccess && onSuccess({
          responseText,
          option,
          fileList
        });
      };
      uploadOption.onFailure = (responseText, option) => {
        setFileList((fileList2) => {
          fileList2.map((item) => {
            if (item.uid === fileItem.uid) {
              item.status = "error";
              item.message = locale.uploader.error;
              item.responseText = responseText;
            }
            return item;
          });
          return [...fileList2];
        });
        onFailure && onFailure({
          responseText,
          option,
          fileList
        });
      };
      const task = new Upload(uploadOption);
      if (props.autoUpload) {
        task.upload();
      } else {
        uploadQueue.push(
          new Promise((resolve, reject) => {
            resolve(task);
          })
        );
        setUploadQueue(uploadQueue);
      }
    };
    const readFile = (files) => {
      files.forEach((file, index) => {
        const formData = new FormData();
        formData.append(name, file);
        const fileItem = new FileItem();
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
          const reader = new FileReader();
          reader.onload = (event) => {
            fileItem.url = event.target.result;
            fileList.push(fileItem);
            setFileList([...fileList]);
          };
          reader.readAsDataURL(file);
        } else {
          fileList.push(fileItem);
          setFileList([...fileList]);
        }
      });
    };
    const filterFiles = (files) => {
      const maximum = props.maxCount * 1;
      const oversizes = new Array();
      const filterFile = files.filter((file) => {
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
        const index = maximum - fileList.length;
        filterFile.splice(index, filterFile.length - index);
      }
      return filterFile;
    };
    const deleted = (file, index) => {
      fileList.splice(index, 1);
      onDelete && onDelete(file, fileList);
      setFileList([...fileList]);
    };
    const onDeleteItem = (file, index) => {
      clearUploadQueue(index);
      funcInterceptor(beforeDelete, {
        args: [file, fileList],
        done: () => deleted(file, index)
      });
    };
    const fileChange = (event) => {
      if (disabled) {
        return;
      }
      const $el = event.target;
      const { files } = $el;
      if (beforeUpload) {
        beforeUpload(new Array().slice.call(files)).then(
          (f) => {
            const _files = filterFiles(new Array().slice.call(f));
            readFile(_files);
          }
        );
      } else {
        const _files = filterFiles(new Array().slice.call(files));
        readFile(_files);
      }
      onChange && onChange({ fileList, event });
      if (clearInput) {
        clearInputValue($el);
      }
    };
    const handleItemClick = (file) => {
      onFileItemClick && onFileItemClick(file);
    };
    return /* @__PURE__ */ React.createElement("div", { className: classes, ...restProps }, children && /* @__PURE__ */ React.createElement("div", { className: "nut-uploader__slot" }, /* @__PURE__ */ React.createElement(React.Fragment, null, children, maxCount > fileList.length && /* @__PURE__ */ React.createElement(React.Fragment, null, capture ? /* @__PURE__ */ React.createElement(
      "input",
      {
        className: "nut-uploader__input",
        type: "file",
        capture: "user",
        name,
        accept,
        disabled,
        multiple,
        onChange: fileChange
      }
    ) : /* @__PURE__ */ React.createElement(
      "input",
      {
        className: "nut-uploader__input",
        type: "file",
        name,
        accept,
        disabled,
        multiple,
        onChange: fileChange
      }
    )))), fileList.length !== 0 && fileList.map((item, index) => {
      return /* @__PURE__ */ React.createElement(
        "div",
        {
          className: `nut-uploader__preview ${previewType}`,
          key: item.uid
        },
        previewType === "picture" && !children && /* @__PURE__ */ React.createElement("div", { className: "nut-uploader__preview-img" }, deletable && /* @__PURE__ */ React.createElement(
          x$9,
          {
            color: "rgba(0,0,0,0.6)",
            className: "close",
            onClick: () => onDeleteItem(item, index)
          }
        ), item.status === "ready" ? /* @__PURE__ */ React.createElement("div", { className: "nut-uploader__preview__progress" }, /* @__PURE__ */ React.createElement("div", { className: "nut-uploader__preview__progress__msg" }, item.message)) : item.status !== "success" && /* @__PURE__ */ React.createElement("div", { className: "nut-uploader__preview__progress" }, item.failIcon !== " " && item.loadingIcon !== " " && (item.status === "error" ? item.failIcon || /* @__PURE__ */ React.createElement(x$9, { color: "#fff" }) : item.loadingIcon || /* @__PURE__ */ React.createElement(
          k$3,
          {
            className: "nut-icon-loading",
            color: "#fff"
          }
        )), /* @__PURE__ */ React.createElement("div", { className: "nut-uploader__preview__progress__msg" }, item.message)), item.type.includes("image") ? /* @__PURE__ */ React.createElement(React.Fragment, null, item.url && /* @__PURE__ */ React.createElement(
          "img",
          {
            className: "nut-uploader__preview-img__c",
            style: { objectFit: fit },
            src: item.url,
            alt: "",
            onClick: () => handleItemClick(item)
          }
        )) : /* @__PURE__ */ React.createElement(React.Fragment, null, previewUrl ? /* @__PURE__ */ React.createElement(
          "img",
          {
            className: "nut-uploader__preview-img__c",
            src: previewUrl,
            alt: "",
            onClick: () => handleItemClick(item)
          }
        ) : /* @__PURE__ */ React.createElement("div", { className: "nut-uploader__preview-img__file" }, /* @__PURE__ */ React.createElement(
          "div",
          {
            onClick: () => handleItemClick(item),
            className: "nut-uploader__preview-img__file__name"
          },
          /* @__PURE__ */ React.createElement(x$6, { color: "#808080" }),
          " ",
          item.name
        ))), item.status === "success" ? /* @__PURE__ */ React.createElement("div", { className: "tips" }, item.name) : null),
        previewType === "list" && /* @__PURE__ */ React.createElement("div", { className: "nut-uploader__preview-list" }, /* @__PURE__ */ React.createElement(
          "div",
          {
            className: `nut-uploader__preview-img__file__name ${item.status}`,
            onClick: () => handleItemClick(item)
          },
          /* @__PURE__ */ React.createElement(x$6, null),
          " ",
          item.name
        ), deletable && /* @__PURE__ */ React.createElement(
          y$7,
          {
            color: "#808080",
            className: "nut-uploader__preview-img__file__del",
            onClick: () => onDeleteItem(item, index)
          }
        ), item.status === "uploading" && /* @__PURE__ */ React.createElement(
          Progress,
          {
            percent: item.percentage,
            color: "linear-gradient(270deg, rgba(18,126,255,1) 0%,rgba(32,147,255,1) 32.815625%,rgba(13,242,204,1) 100%)",
            showText: false
          }
        ))
      );
    }), maxCount > fileList.length && previewType === "picture" && !children && /* @__PURE__ */ React.createElement(
      "div",
      {
        className: `nut-uploader__upload ${previewType} ${disabled ? "nut-uploader__upload-disabled" : ""}`
      },
      /* @__PURE__ */ React.createElement("div", { className: "nut-uploader__icon" }, uploadIcon || /* @__PURE__ */ React.createElement(x$3, { width: "20px", height: "20px", color: "#808080" }), /* @__PURE__ */ React.createElement("span", { className: "nut-uploader__icon-tip" }, uploadLabel)),
      capture ? /* @__PURE__ */ React.createElement(
        "input",
        {
          className: "nut-uploader__input",
          type: "file",
          capture: "user",
          name,
          accept,
          disabled,
          multiple,
          onChange: fileChange
        }
      ) : /* @__PURE__ */ React.createElement(
        "input",
        {
          className: "nut-uploader__input",
          type: "file",
          name,
          accept,
          disabled,
          multiple,
          onChange: fileChange
        }
      )
    ));
  };
  const Uploader = React.forwardRef(InternalUploader);
  Uploader.defaultProps = defaultProps$D;
  Uploader.displayName = "NutUploader";
  const defaultProps$C = {
    ...ComponentDefaults,
    visible: false,
    description: "",
    options: [],
    optionKey: { name: "name", description: "description" },
    cancelText: "",
    onCancel: () => {
    },
    onSelect: () => {
    }
  };
  const ActionSheet = (props) => {
    const {
      children,
      cancelText,
      optionKey,
      title,
      description,
      options: options2,
      onCancel,
      onSelect,
      visible,
      className,
      style,
      ...rest
    } = { ...defaultProps$C, ...props };
    const classPrefix2 = "nut-actionsheet";
    const cancelActionSheet = () => {
      onCancel && onCancel();
    };
    const chooseItem = (item, index) => {
      if (!item.disabled) {
        onSelect && onSelect(item, index);
      }
    };
    return /* @__PURE__ */ React.createElement(
      Popup,
      {
        round: true,
        visible,
        position: "bottom",
        title,
        className: classPrefix2,
        onClose: () => {
          onCancel && onCancel();
        }
      },
      /* @__PURE__ */ React.createElement("div", { className: `${className}`, style, ...rest }, description && /* @__PURE__ */ React.createElement("div", { className: `${classPrefix2}__description` }, description), options2.length ? /* @__PURE__ */ React.createElement("div", { className: `${classPrefix2}__list` }, options2.map((item, index) => {
        return /* @__PURE__ */ React.createElement(
          "div",
          {
            className: `${classPrefix2}__item ${item.disabled ? "disabled" : ""} ${item.danger ? "danger" : ""}`,
            key: index,
            onClick: () => chooseItem(item, index)
          },
          item[optionKey.name],
          /* @__PURE__ */ React.createElement("div", { className: `${classPrefix2}__item-description` }, item[optionKey.description])
        );
      })) : children, cancelText && /* @__PURE__ */ React.createElement(
        "div",
        {
          className: `${classPrefix2}__cancel`,
          onClick: () => cancelActionSheet()
        },
        cancelText
      ))
    );
  };
  ActionSheet.defaultProps = defaultProps$C;
  ActionSheet.displayName = "NutActionSheet";
  const fullClone = {
    ...ReactDOM__namespace
  };
  const { version, render: reactRender, unmountComponentAtNode } = fullClone;
  let createRoot;
  try {
    const mainVersion = Number((version || "").split(".")[0]);
    if (mainVersion >= 18 && fullClone.createRoot) {
      createRoot = fullClone.createRoot;
    }
  } catch (e) {
  }
  function toggleWarning(skip) {
    const { __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED } = fullClone;
    if (__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED && typeof __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED === "object") {
      __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.usingClientEntryPoint = skip;
    }
  }
  const MARK = "__nutui_react_root__";
  function legacyRender(node, container) {
    reactRender(node, container);
  }
  function concurrentRender(node, container) {
    toggleWarning(true);
    const root2 = container[MARK] || createRoot(container);
    toggleWarning(false);
    root2.render(node);
    container[MARK] = root2;
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
  async function concurrentUnmount(container) {
    return Promise.resolve().then(() => {
      var _a2;
      (_a2 = container[MARK]) == null ? void 0 : _a2.unmount();
      delete container[MARK];
    });
  }
  function unmount(container) {
    if (createRoot) {
      return concurrentUnmount(container);
    }
    return legacyUnmount(container);
  }
  function ConfirmDialog(props) {
    return /* @__PURE__ */ React.createElement(Dialog, { ...props }, props.content);
  }
  const normalizeConfig = (config2) => {
    if (config2.isNotice) {
      let { icon } = config2;
      if (!icon && icon !== null) {
        switch (config2.noticeType) {
          case "alert":
            icon = "";
            break;
        }
      }
      config2.hideCancelButton = true;
    }
    return config2;
  };
  const confirm = (config2, renderFunc) => {
    const div = document.createElement("div");
    document.body.appendChild(div);
    let dialogConfig = {
      ...config2,
      visible: false
    };
    const render$1 = (props, callback) => {
      render(/* @__PURE__ */ React.createElement(ConfirmDialog, { ...props, onCancel: () => onCancel() }), div);
      callback && callback();
    };
    const renderFunction = renderFunc || render$1;
    const onConfirm = () => {
      const _onConfirm = config2.onConfirm || config2.onConfirm;
      const ret = _onConfirm == null ? void 0 : _onConfirm();
      if (ret && ret.then) {
        renderFunction(dialogConfig);
        ret.then(
          () => {
            onCancel(true);
          },
          (e) => {
            console.error(e);
            renderFunction(dialogConfig);
          }
        );
      }
      if (!ret) {
        onCancel(true);
      }
    };
    dialogConfig.onConfirm = onConfirm;
    dialogConfig = normalizeConfig(dialogConfig);
    dialogConfig.visible = true;
    renderFunction(dialogConfig);
    const destroy = () => {
      unmount(div);
      if (div == null ? void 0 : div.parentNode) {
        div.parentNode.removeChild(div);
      }
    };
    const onCancel = (confirm2) => {
      !confirm2 && config2.onCancel && config2.onCancel();
      dialogConfig.visible = false;
      dialogConfig.onClose = () => {
        config2.onClose && config2.onClose();
      };
      renderFunction(dialogConfig, () => {
        destroy();
      });
    };
    const update2 = (newConfig) => {
      dialogConfig = {
        ...dialogConfig,
        title: config2.title,
        // 避免 newConfig 未传递 title 时，icon 出现多个的问题
        ...newConfig
      };
      dialogConfig = normalizeConfig(dialogConfig);
      renderFunction(dialogConfig);
    };
    const close = () => {
      dialogConfig.visible = false;
      dialogConfig.onClose = () => {
        config2.onClose && config2.onClose();
        destroy();
      };
      renderFunction(dialogConfig);
    };
    return {
      close,
      update: update2
    };
  };
  const Content = (props) => {
    const { visible, title, footer, footerDirection, onClick, children } = props;
    const classPrefix2 = "nut-dialog";
    const renderHeader = () => {
      return title ? /* @__PURE__ */ React.createElement("div", { className: `${classPrefix2}__header` }, title) : null;
    };
    const renderFooter = () => {
      return footer ? /* @__PURE__ */ React.createElement(
        "div",
        {
          className: classnamesExports(`${classPrefix2}__footer`, {
            [footerDirection]: footerDirection
          })
        },
        footer
      ) : null;
    };
    const handleClick2 = (e) => {
      onClick && onClick(e);
    };
    return /* @__PURE__ */ React.createElement("div", { className: `${classPrefix2}__outer`, onClick: (e) => handleClick2(e) }, /* @__PURE__ */ React.createElement(
      "div",
      {
        className: classPrefix2,
        style: { display: visible ? "flex" : "none" }
      },
      renderHeader(),
      /* @__PURE__ */ React.createElement("div", { className: `${classPrefix2}__content` }, /* @__PURE__ */ React.createElement(React.Fragment, null, children)),
      renderFooter()
    ));
  };
  Content.displayName = "NutContent";
  const defaultDialogProps = {
    ...ComponentDefaults,
    overlay: true,
    overlayStyle: {},
    overlayClassName: "",
    onCancel: () => {
    },
    onClose: () => {
    },
    onOverlayClick: (e) => true,
    ...defaultOverlayProps
  };
  const DialogWrap = (props) => {
    const {
      visible,
      overlay,
      overlayStyle,
      overlayClassName,
      closeOnOverlayClick,
      lockScroll,
      onClose,
      onCancel,
      onOverlayClick
    } = props;
    const onHandleClickOverlay = (e) => {
      if (closeOnOverlayClick && visible && e.target === e.currentTarget) {
        const closed = onOverlayClick && onOverlayClick(e);
        closed && (onClose == null ? void 0 : onClose());
        closed && (onCancel == null ? void 0 : onCancel());
      }
    };
    return /* @__PURE__ */ React.createElement(React.Fragment, null, overlay ? /* @__PURE__ */ React.createElement(
      Overlay,
      {
        style: overlayStyle,
        className: overlayClassName,
        visible,
        closeOnOverlayClick,
        lockScroll,
        onClick: onHandleClickOverlay
      }
    ) : null, /* @__PURE__ */ React.createElement(
      CSSTransition$1,
      {
        in: visible,
        timeout: 300,
        classNames: "fadeDialog",
        unmountOnExit: true,
        appear: true
      },
      /* @__PURE__ */ React.createElement(Content, { ...props, visible })
    ));
  };
  DialogWrap.defaultProps = defaultDialogProps;
  DialogWrap.displayName = "NutDialogWrap";
  const defaultProps$B = {
    confirmText: "",
    cancelText: "",
    overlay: true,
    closeOnOverlayClick: true,
    hideConfirmButton: false,
    hideCancelButton: false,
    disableConfirmButton: false,
    footerDirection: "horizontal",
    lockScroll: true,
    beforeCancel: () => true,
    beforeClose: () => true
  };
  const BaseDialog = (props, ref) => {
    const { locale } = useConfig();
    const {
      visible,
      footer,
      hideConfirmButton,
      hideCancelButton,
      lockScroll,
      disableConfirmButton,
      closeOnOverlayClick,
      confirmText,
      cancelText,
      onClose,
      onCancel,
      onConfirm,
      beforeCancel,
      beforeClose,
      ...restProps
    } = props;
    const classPrefix2 = "nut-dialog";
    const renderFooter = () => {
      if (footer === null)
        return "";
      const handleCancel = (e) => {
        e.stopPropagation();
        if (!(beforeCancel == null ? void 0 : beforeCancel()))
          return;
        if (!(beforeClose == null ? void 0 : beforeClose()))
          return;
        onClose == null ? void 0 : onClose();
        onCancel == null ? void 0 : onCancel();
      };
      const handleOk = (e) => {
        e.stopPropagation();
        onClose == null ? void 0 : onClose();
        onConfirm == null ? void 0 : onConfirm(e);
      };
      return footer || /* @__PURE__ */ React.createElement(React.Fragment, null, !hideCancelButton && /* @__PURE__ */ React.createElement(
        Button,
        {
          size: "small",
          fill: "outline",
          type: "primary",
          className: `${classPrefix2}__footer-cancel`,
          onClick: (e) => handleCancel(e)
        },
        cancelText || locale.cancel
      ), !hideConfirmButton && /* @__PURE__ */ React.createElement(
        Button,
        {
          size: "small",
          type: "primary",
          className: classnamesExports(`${classPrefix2}__footer-ok`, {
            disabled: disableConfirmButton
          }),
          disabled: disableConfirmButton,
          onClick: (e) => handleOk(e)
        },
        confirmText || locale.confirm
      ));
    };
    return /* @__PURE__ */ React.createElement("div", { style: { display: visible ? "block" : "none" } }, /* @__PURE__ */ React.createElement(
      DialogWrap,
      {
        ...props,
        visible,
        lockScroll,
        footer: renderFooter(),
        onClose,
        onCancel
      }
    ));
  };
  const Dialog = React.forwardRef(BaseDialog);
  Dialog.confirm = (props) => {
    return confirm(props);
  };
  ["alert"].forEach((type2) => {
    Dialog[type2] = (props) => {
      return confirm({
        ...props,
        isNotice: false,
        noticeType: type2
      });
    };
  });
  Dialog.defaultProps = defaultProps$B;
  Dialog.displayName = "NutDialog";
  const defaultProps$A = {
    ...ComponentDefaults,
    attract: false,
    direction: void 0,
    boundary: {
      top: 0,
      left: 0,
      right: 0,
      bottom: 0
    }
  };
  const Drag = (props) => {
    const { attract, direction, boundary, children, className, style, ...reset } = {
      ...defaultProps$A,
      ...props
    };
    const classPrefix2 = "nut-drag";
    const [boundaryState, setBoundaryState] = React.useState(boundary);
    const myDrag = React.useRef(null);
    const [currstyle, api] = useSpring(() => ({
      x: 0,
      y: 0
    }));
    const middleLine = React.useRef(0);
    const getInfo = () => {
      const el = myDrag.current;
      if (el) {
        const { offsetWidth, offsetHeight, offsetTop, offsetLeft } = el;
        const { clientWidth, clientHeight } = document.documentElement;
        const { top, left, bottom, right } = boundary;
        setBoundaryState({
          top: -offsetTop + top,
          left: -offsetLeft + left,
          bottom: clientHeight - offsetHeight - offsetTop - bottom,
          right: clientWidth - offsetWidth - offsetLeft - right
        });
        middleLine.current = clientWidth - offsetWidth - offsetLeft - (clientWidth - offsetWidth) / 2;
      }
    };
    const bind = useDrag(
      ({ down, last, offset: [x2, y2] }) => {
        api.start({ x: x2, y: y2, immediate: down });
        if (last) {
          if (props.direction !== "y" && props.attract) {
            if (x2 < middleLine.current) {
              api.start({ x: boundaryState.left, y: y2, immediate: down });
            } else {
              api.start({
                x: boundaryState.right,
                y: y2,
                immediate: down
              });
            }
          }
        }
      },
      {
        from: () => [currstyle.x.get(), currstyle.y.get()],
        axis: direction,
        bounds: boundaryState
      }
    );
    React.useEffect(() => {
      getInfo();
    }, [myDrag]);
    return /* @__PURE__ */ React.createElement(
      "div",
      {
        style,
        className: `${classPrefix2} ${className}`,
        ...reset,
        ref: myDrag
      },
      /* @__PURE__ */ React.createElement(animated.div, { style: currstyle, ...bind() }, children)
    );
  };
  Drag.defaultProps = defaultProps$A;
  Drag.displayName = "NutDrag";
  const defaultStatus = {
    empty: "https://static-ftcms.jd.com/p/files/61a9e3183985005b3958672b.png",
    error: "https://ftcms.jd.com/p/files/61a9e33ee7dcdbcc0ce62736.png",
    network: "https://static-ftcms.jd.com/p/files/61a9e31de7dcdbcc0ce62734.png"
  };
  const defaultProps$z = {
    ...ComponentDefaults,
    description: "",
    imageSize: "",
    status: "empty"
  };
  const classPrefix$c = `nut-empty`;
  const Empty = (props) => {
    const { locale } = useConfig();
    const {
      image,
      imageSize,
      description,
      children,
      className,
      status,
      ...rest
    } = {
      ...defaultProps$z,
      ...props
    };
    const [imgStyle, setImgStyle] = React.useState({});
    const imageUrl = image || defaultStatus[status];
    const imageNode = typeof imageUrl === "string" ? /* @__PURE__ */ React.createElement("img", { className: "img", src: imageUrl, alt: "empty" }) : imageUrl;
    React.useEffect(() => {
      setImgStyle(() => {
        if (!imageSize) {
          return {};
        }
        if (typeof imageSize === "number") {
          return {
            width: `${imageSize}px`,
            height: `${imageSize}px`
          };
        }
        return {
          width: imageSize,
          height: imageSize
        };
      });
    }, [imageSize]);
    return /* @__PURE__ */ React.createElement("div", { className: `${classPrefix$c} ${className}`, ...rest }, /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", { className: `${classPrefix$c}__image`, style: imgStyle }, imageNode), typeof description === "string" ? /* @__PURE__ */ React.createElement("div", { className: `${classPrefix$c}__description` }, description || locale.noData) : description, children));
  };
  Empty.defaultProps = defaultProps$z;
  Empty.displayName = "NutEmpty";
  const defaultProps$y = {
    ...ComponentDefaults,
    hasMore: true,
    threshold: 200,
    target: "",
    capture: false,
    pullRefresh: false
  };
  const classPrefix$b = `nut-infiniteloading`;
  const InfiniteLoading = (props) => {
    const { locale } = useConfig();
    const {
      children,
      hasMore,
      threshold,
      target,
      capture,
      pullRefresh,
      pullingText,
      loadingText,
      loadMoreText,
      className,
      onRefresh,
      onLoadMore,
      onScroll,
      ...restProps
    } = {
      ...defaultProps$y,
      ...props
    };
    const [isInfiniting, setIsInfiniting] = React.useState(false);
    const scroller = React.useRef(null);
    const refreshTop = React.useRef(null);
    const scrollEl = React.useRef(window);
    const isTouching = React.useRef(false);
    const beforeScrollTop = React.useRef(0);
    const refreshMaxH = React.useRef(0);
    const y2 = React.useRef(0);
    const distance = React.useRef(0);
    const classes = classnamesExports(className, classPrefix$b);
    React.useEffect(() => {
      if (target && document.getElementById(target)) {
        scrollEl.current = document.getElementById(target);
      } else {
        scrollEl.current = window;
      }
      scrollEl.current.addEventListener("scroll", handleScroll, capture);
      return () => {
        scrollEl.current.removeEventListener("scroll", handleScroll, capture);
      };
    }, [hasMore, isInfiniting]);
    React.useEffect(() => {
      const element = scroller.current;
      element.addEventListener("touchmove", touchMove, { passive: false });
      return () => {
        element.removeEventListener("touchmove", touchMove, {
          passive: false
        });
      };
    }, []);
    const getStyle = () => {
      return {
        height: distance.current < 0 ? `0px` : `${distance.current}px`,
        transition: isTouching.current ? `height 0s cubic-bezier(0.25,0.1,0.25,1)` : `height 0.2s cubic-bezier(0.25,0.1,0.25,1)`
      };
    };
    const handleScroll = () => {
      requestAniFrame2()(() => {
        if (!isScrollAtBottom() || !hasMore || isInfiniting) {
          return false;
        }
        setIsInfiniting(true);
        onLoadMore && onLoadMore(infiniteDone);
        return true;
      });
    };
    const infiniteDone = () => {
      setIsInfiniting(false);
    };
    const refreshDone = () => {
      distance.current = 0;
      refreshTop.current.style.height = `${distance.current}px`;
      isTouching.current = false;
    };
    const touchStart = (event) => {
      if (beforeScrollTop.current === 0 && !isTouching.current && pullRefresh) {
        y2.current = event.touches[0].pageY;
        isTouching.current = true;
        const childHeight = refreshTop.current.firstElementChild.offsetHeight;
        refreshMaxH.current = Math.floor(childHeight * 1 + 10);
      }
    };
    const touchMove = (event) => {
      distance.current = event.touches[0].pageY - y2.current;
      if (distance.current > 0 && isTouching.current) {
        event.preventDefault();
        if (distance.current >= refreshMaxH.current) {
          distance.current = refreshMaxH.current;
          refreshTop.current.style.height = `${distance.current}px`;
        } else {
          refreshTop.current.style.height = `${distance.current}px`;
        }
      } else {
        distance.current = 0;
        refreshTop.current.style.height = `${distance.current}px`;
        isTouching.current = false;
      }
    };
    const touchEnd = () => {
      if (distance.current < refreshMaxH.current) {
        distance.current = 0;
        refreshTop.current.style.height = `${distance.current}px`;
      } else {
        onRefresh && onRefresh(refreshDone);
      }
    };
    const requestAniFrame2 = () => {
      return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function fn(callback) {
        window.setTimeout(callback, 1e3 / 60);
      };
    };
    const getWindowScrollTop = () => {
      return window.scrollY !== void 0 ? window.scrollY : (document.documentElement || document.body.parentNode || document.body).scrollTop;
    };
    const calculateTopPosition = (el) => {
      return !el ? 0 : el.offsetTop + calculateTopPosition(el.offsetParent);
    };
    const isScrollAtBottom = () => {
      let offsetDistance = 0;
      let resScrollTop = 0;
      let direction = "down";
      const windowScrollTop = getWindowScrollTop();
      if (!target || !document.getElementById(target)) {
        if (scroller.current) {
          offsetDistance = calculateTopPosition(scroller.current) + scroller.current.offsetHeight - windowScrollTop - window.innerHeight;
        }
        resScrollTop = windowScrollTop;
      } else {
        const { scrollHeight, clientHeight, scrollTop } = scrollEl.current;
        offsetDistance = scrollHeight - clientHeight - scrollTop;
        resScrollTop = scrollTop;
      }
      if (beforeScrollTop.current > resScrollTop) {
        direction = "up";
      } else {
        direction = "down";
      }
      beforeScrollTop.current = resScrollTop;
      onScroll && onScroll(resScrollTop);
      return offsetDistance <= threshold && direction === "down";
    };
    return /* @__PURE__ */ React.createElement(
      "div",
      {
        className: classes,
        ref: scroller,
        onTouchStart: touchStart,
        onTouchEnd: touchEnd,
        ...restProps
      },
      /* @__PURE__ */ React.createElement("div", { className: "nut-infinite-top", ref: refreshTop, style: getStyle() }, /* @__PURE__ */ React.createElement("div", { className: "top-box" }, pullingText || locale.infiniteloading.pullRefreshText)),
      /* @__PURE__ */ React.createElement("div", { className: "nut-infinite-container" }, children),
      /* @__PURE__ */ React.createElement("div", { className: "nut-infinite-bottom" }, isInfiniting ? /* @__PURE__ */ React.createElement("div", { className: "bottom-box" }, loadingText || locale.infiniteloading.loadText) : !hasMore && /* @__PURE__ */ React.createElement("div", { className: "tips" }, loadMoreText || locale.infiniteloading.loadMoreText))
    );
  };
  InfiniteLoading.defaultProps = defaultProps$y;
  InfiniteLoading.displayName = "NutInfiniteLoading";
  const defaultProps$x = {
    ...ComponentDefaults,
    direction: "horizontal",
    list: [],
    duration: 1e3,
    height: 40,
    content: "",
    closeable: false,
    wrap: false,
    leftIcon: null,
    rightIcon: null,
    delay: 1,
    scrollable: null,
    speed: 50
  };
  const NoticeBar = (props) => {
    const {
      children,
      className,
      style,
      direction,
      list,
      duration,
      height,
      content,
      closeable,
      wrap,
      leftIcon,
      rightIcon,
      delay,
      scrollable,
      speed,
      close,
      click,
      onClose,
      onClick,
      onItemClick
    } = {
      ...defaultProps$x,
      ...props
    };
    const classPrefix2 = "nut-noticebar";
    const wrapRef = React.useRef(null);
    const contentRef = React.useRef(null);
    const [showNoticeBar, SetShowNoticeBar] = React.useState(true);
    const scrollList = React.useRef([]);
    const [wrapWidth, SetWrapWidth] = React.useState(0);
    const [firstRound, SetFirstRound] = React.useState(true);
    const [animationDuration, SetAnimationDuration] = React.useState(0);
    const [offsetWidth, SetOffsetW] = React.useState(0);
    const [animationClass, SetAnimationClass] = React.useState("");
    const [animate, SetAnimate] = React.useState(false);
    const [timer, SetTimer] = React.useState(0);
    const [isCanScroll, SetIsCanScroll] = React.useState(null);
    const isVertical = direction === "vertical";
    const [rect, setRect] = React.useState(null);
    let active = 0;
    const [ready, setReady] = React.useState(false);
    const container = React.useRef(null);
    const innerRef = React.useRef(null);
    const swiperRef = React.useRef({
      moving: false,
      autoplayTimer: null,
      width: 0,
      height: 0,
      offset: 0,
      size: 0
    });
    const [childOffset, setChildOffset] = React.useState([]);
    const [offset, setOffset] = React.useState(0);
    const { childs, childCount } = React.useMemo(() => {
      let childCount2 = 0;
      const childs2 = React.Children.map(children, (child) => {
        if (!React.isValidElement(child))
          return null;
        childCount2++;
        return child;
      });
      return {
        childs: childs2,
        childCount: childCount2
      };
    }, [children]);
    let trackSize = childCount * Number(height);
    const minOffset = (() => {
      if (rect) {
        const base = isVertical ? rect.height : rect.width;
        return base - Number(height) * childCount;
      }
      return 0;
    })();
    React.useEffect(() => {
      if (isVertical) {
        if (children) {
          scrollList.current = [].concat(childs);
        } else {
          scrollList.current = [].concat(list);
          startRollEasy();
        }
      } else {
        initScrollWrap();
      }
      return () => {
        clearInterval(timer);
      };
    }, []);
    React.useEffect(() => {
      initScrollWrap();
    }, [content]);
    React.useEffect(() => {
      if (list && list.length) {
        scrollList.current = [].concat(list);
      }
    }, [list]);
    const initScrollWrap = (value) => {
      if (showNoticeBar === false) {
        return;
      }
      setTimeout(() => {
        if (!wrapRef.current || !contentRef.current) {
          return;
        }
        const wrapW = getRect(wrapRef.current).width;
        const offsetW = getRect(contentRef.current).width;
        const canScroll = scrollable == null ? offsetW > wrapW : scrollable;
        SetIsCanScroll(canScroll);
        if (canScroll) {
          SetWrapWidth(wrapW);
          SetOffsetW(offsetW);
          SetAnimationDuration(offsetW / speed);
          SetAnimationClass("play");
        } else {
          SetAnimationClass("");
        }
      }, 0);
    };
    const handleClick2 = (event) => {
      click && click(event);
      onClick && onClick(event);
    };
    const onClickIcon = (event) => {
      event.stopPropagation();
      SetShowNoticeBar(!closeable);
      close && close(event);
      onClose && onClose(event);
    };
    const onAnimationEnd = () => {
      SetFirstRound(false);
      setTimeout(() => {
        SetAnimationDuration((offsetWidth + wrapWidth) / speed);
        SetAnimationClass("play-infinite");
      }, 0);
    };
    const time = height / speed / 4 < 1 ? Number((height / speed / 4).toFixed(1)) * 1e3 : ~~(height / speed / 4) * 1e3;
    const startRollEasy = () => {
      showhorseLamp();
      const timerCurr = window.setInterval(showhorseLamp, time + Number(duration));
      SetTimer(timerCurr);
    };
    const showhorseLamp = () => {
      SetAnimate(true);
      setTimeout(() => {
        scrollList.current.push(scrollList.current[0]);
        scrollList.current.shift();
        SetAnimate(false);
      }, time);
    };
    const handleClickIcon = (event) => {
      event.stopPropagation();
      SetShowNoticeBar(!closeable);
      close && close(event);
      onClose && onClose(event);
    };
    const isEllipsis = () => {
      if (isCanScroll == null) {
        return wrap;
      }
      return !isCanScroll && !wrap;
    };
    const contentStyle = {
      animationDelay: `${firstRound ? delay : 0}s`,
      animationDuration: `${animationDuration}s`,
      transform: `translateX(${firstRound ? 0 : `${wrapWidth}px`})`
    };
    const barStyle = {
      height: isVertical ? `${height}px` : ""
    };
    const duringTime = height / speed / 4 < 1 ? Number((height / speed / 4).toFixed(1)) : ~~(height / speed / 4);
    const noDuring = height / speed < 1 ? (height / speed).toFixed(1) : ~~(height / speed);
    const horseLampStyle = {
      transition: animate ? `all ${duringTime === 0 ? noDuring : duringTime}s` : "",
      marginTop: animate ? `-${height}px` : ""
    };
    const init = (active2 = 0) => {
      const rects = getRect(container == null ? void 0 : container.current);
      const _active = Math.max(Math.min(childCount - 1, active2), 0);
      const _height = rects.height;
      trackSize = childCount * Number(_height);
      const targetOffset = getOffset(_active);
      swiperRef.current.moving = true;
      if (ready) {
        swiperRef.current.moving = false;
      }
      active2 = _active;
      setRect(rects);
      setOffset(targetOffset);
      setReady(true);
    };
    React.useEffect(() => {
      if (ready) {
        stopAutoPlay();
        autoplay();
      }
      return () => {
        setReady(false);
      };
    }, [ready]);
    React.useEffect(() => {
      if (isVertical && children) {
        init();
        stopAutoPlay();
        autoplay();
      }
    }, [children, container == null ? void 0 : container.current]);
    const stopAutoPlay = () => {
      clearTimeout(swiperRef.current.autoplayTimer);
      swiperRef.current.autoplayTimer = null;
    };
    const autoplay = () => {
      if (childCount <= 1)
        return;
      stopAutoPlay();
      swiperRef.current.autoplayTimer = setTimeout(() => {
        next();
        autoplay();
      }, Number(duration) + 100 * speed);
    };
    const move = ({ pace = 0, offset: offset2 = 0 }) => {
      if (childCount <= 1)
        return;
      const targetActive = getActive(pace);
      const targetOffset = getOffset(targetActive, offset2);
      if (Array.isArray(children) && children[0] && targetOffset !== minOffset) {
        const rightBound = targetOffset < minOffset;
        childOffset[0] = rightBound ? trackSize : 0;
      }
      if (Array.isArray(children) && children[childCount - 1] && targetOffset !== 0) {
        const leftBound = targetOffset > 0;
        childOffset[childCount - 1] = leftBound ? -trackSize : 0;
      }
      setChildOffset(childOffset);
      active = targetActive;
      setOffset(targetOffset);
      getStyle(targetOffset);
    };
    const next = () => {
      resettPosition();
      requestFrame(() => {
        requestFrame(() => {
          swiperRef.current.moving = false;
          move({
            pace: 1
          });
        });
      });
    };
    const handleItemClick = (event, value) => {
      onItemClick && onItemClick(event, value);
    };
    const getStyle = (moveOffset = offset) => {
      const target = innerRef.current;
      let _offset = 0;
      const val = rect.height - height;
      _offset = moveOffset + Number(active === childCount - 1 && val / 2);
      target.style.transitionDuration = `${swiperRef.current.moving ? 0 : duration}ms`;
      target.style.height = `${Number(height) * childCount}px`;
      target.style.transform = `translate3D(0,${_offset}px,0)`;
    };
    const itemStyle = (index) => {
      const style2 = {};
      if (height) {
        style2.height = `${height}px`;
        style2.lineHeight = `${height}px`;
      }
      const offset2 = childOffset[index];
      if (offset2) {
        style2.transform = `translate3D(0,${offset2}px,0)`;
      }
      return style2;
    };
    const getActive = (pace) => {
      if (pace) {
        const _active = active + pace;
        return range2(_active, -1, childCount);
      }
      return active;
    };
    const getOffset = (active2, offset2 = 0) => {
      const currentPosition = active2 * Number(height);
      const targetOffset = offset2 - currentPosition;
      return targetOffset;
    };
    const requestFrame = (fn) => {
      window.requestAnimationFrame.call(window, fn);
    };
    const range2 = (num, min, max) => {
      return Math.min(Math.max(num, min), max);
    };
    const resettPosition = () => {
      swiperRef.current.moving = true;
      if (active <= -1) {
        move({ pace: childCount });
      }
      if (active >= childCount) {
        move({ pace: -childCount });
      }
    };
    const noticebarClass = classnamesExports({
      "nut-noticebar-page": true,
      withicon: closeable,
      close: closeable,
      wrapable: wrap
    });
    React.useEffect(() => {
      return () => {
        stopAutoPlay();
      };
    }, []);
    return /* @__PURE__ */ React.createElement("div", { className: `${classPrefix2} ${className || ""}`, style }, showNoticeBar && direction === "horizontal" ? /* @__PURE__ */ React.createElement("div", { className: noticebarClass, style: barStyle, onClick: handleClick2 }, /* @__PURE__ */ React.createElement("div", { className: "left-icon" }, leftIcon || /* @__PURE__ */ React.createElement(k$1, { width: 16, height: 16 })), /* @__PURE__ */ React.createElement("div", { ref: wrapRef, className: "wrap" }, /* @__PURE__ */ React.createElement(
      "div",
      {
        ref: contentRef,
        className: `content ${animationClass} ${isEllipsis() ? "nut-ellipsis" : ""}`,
        style: contentStyle,
        onAnimationEnd
      },
      children,
      content
    )), closeable || rightIcon ? /* @__PURE__ */ React.createElement("div", { className: "right-icon", onClick: onClickIcon }, rightIcon || /* @__PURE__ */ React.createElement(x$b, { width: 12, height: 12 })) : null) : null, showNoticeBar && scrollList.current.length > 0 && isVertical ? /* @__PURE__ */ React.createElement(
      "div",
      {
        className: "nut-noticebar-vertical",
        style: barStyle,
        ref: container,
        onClick: handleClick2
      },
      leftIcon ? /* @__PURE__ */ React.createElement("div", { className: "left-icon" }, leftIcon) : null,
      children ? /* @__PURE__ */ React.createElement("div", { className: "nut-noticebar__inner", ref: innerRef }, scrollList.current.map((item, index) => {
        return /* @__PURE__ */ React.createElement(
          "div",
          {
            className: "scroll-inner ",
            style: itemStyle(index),
            key: index,
            onClick: (e) => {
              handleItemClick(e, item);
            }
          },
          item
        );
      })) : /* @__PURE__ */ React.createElement("div", { className: "horseLamp_list", style: horseLampStyle }, scrollList.current.map((item, index) => {
        return (
          // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
          /* @__PURE__ */ React.createElement(
            "div",
            {
              className: "horseLamp_list_item",
              style: { height },
              key: index,
              onClick: (e) => {
                handleItemClick(e, item);
              }
            },
            item
          )
        );
      })),
      /* @__PURE__ */ React.createElement(
        "div",
        {
          className: "go",
          onClick: (e) => {
            handleClickIcon(e);
          }
        },
        rightIcon || (closeable ? /* @__PURE__ */ React.createElement(x$b, { width: 12, height: 12 }) : null)
      )
    ) : null);
  };
  NoticeBar.defaultProps = defaultProps$x;
  NoticeBar.displayName = "NutNoticeBar";
  const classPrefix$a = "nut-notify";
  let Notification$1 = (_a = class extends React__namespace.PureComponent {
    constructor(props) {
      super(props);
      __publicField(this, "closeTimer");
      this.close = this.close.bind(this);
      this.startCloseTimer = this.startCloseTimer.bind(this);
      this.clearCloseTimer = this.clearCloseTimer.bind(this);
      this.clickCover = this.clickCover.bind(this);
      this.state = {
        show: true
      };
    }
    close() {
      this.setState({
        show: false
      });
      this.clearCloseTimer();
      if (this.props.id) {
        const element = document.getElementById(this.props.id);
        element && element.parentNode && element.parentNode.removeChild(element);
      }
      this.props.onClose();
    }
    startCloseTimer() {
      const { duration } = this.props;
      if (duration) {
        this.closeTimer = window.setTimeout(() => {
          this.close();
        }, duration);
      }
    }
    clearCloseTimer() {
      if (this.closeTimer) {
        clearTimeout(this.closeTimer);
        this.closeTimer = -1;
      }
    }
    clickCover() {
      this.props.onClick();
    }
    componentDidMount() {
      this.startCloseTimer();
    }
    componentWillUnmount() {
      this.clearCloseTimer();
    }
    render() {
      const { style, message, type: type2, className, position } = this.props;
      const { show: show2 } = this.state;
      const classes = classnamesExports({
        [`${classPrefix$a}--popup-top`]: position === "top",
        [`${classPrefix$a}--popup-bottom`]: position === "bottom",
        [`${classPrefix$a}`]: true,
        [`${classPrefix$a}--${type2}`]: true
      });
      return /* @__PURE__ */ React__namespace.createElement(React__namespace.Fragment, null, /* @__PURE__ */ React__namespace.createElement(
        CSSTransition$1,
        {
          in: show2,
          timeout: 300,
          classNames: "fade",
          unmountOnExit: true,
          appear: true,
          position
        },
        /* @__PURE__ */ React__namespace.createElement(
          "div",
          {
            className: `${classes} ${className}`,
            style,
            onClick: this.clickCover
          },
          message
        )
      ));
    }
  }, __publicField(_a, "newInstance"), _a);
  Notification$1.newInstance = (properties, callback) => {
    const element = document.createElement("div");
    const id = properties.id ? properties.id : `${(/* @__PURE__ */ new Date()).getTime()}`;
    element.id = id;
    properties.id = id;
    document.body.appendChild(element);
    let called = false;
    function ref(instance) {
      if (called) {
        return;
      }
      called = true;
      callback({
        component: instance,
        destroy() {
          setTimeout(() => {
            unmount(element);
            element && element.parentNode && element.parentNode.removeChild(element);
          }, 300);
        }
      });
    }
    render(/* @__PURE__ */ React__namespace.createElement(Notification$1, { ...properties, ref }), element);
  };
  let messageInstance$1 = null;
  const options$1 = {
    ...ComponentDefaults,
    id: "",
    duration: 3e3,
    // 时长
    type: "danger",
    position: "top",
    onClose: () => {
    },
    onClick: () => {
    }
  };
  function getInstance$1(props, callback) {
    if (messageInstance$1) {
      messageInstance$1.destroy();
      messageInstance$1 = null;
    }
    Notification$1.newInstance(props, (notification) => {
      return callback && callback(notification);
    });
  }
  function notice$1(opts) {
    opts = { ...options$1, ...opts };
    getInstance$1(opts, (notification) => {
      messageInstance$1 = notification;
    });
  }
  const errorMsg$1 = (message) => {
    if (!message) {
      console.warn("[NutUI Notify]: message不能为空");
    }
  };
  const Notify = {
    text(message, option = {}) {
      errorMsg$1(message);
      return notice$1({ message, type: "base", ...option });
    },
    success(message, option = {}) {
      errorMsg$1(message);
      return notice$1({ message, type: "success", ...option });
    },
    primary(message, option = {}) {
      errorMsg$1(message);
      return notice$1({ message, type: "primary", ...option });
    },
    danger(message, option = {}) {
      errorMsg$1(message);
      return notice$1({ message, type: "danger", ...option });
    },
    warn(message, option = {}) {
      errorMsg$1(message);
      return notice$1({ message, type: "warning", ...option });
    },
    hide() {
      if (messageInstance$1) {
        messageInstance$1.destroy();
        messageInstance$1 = null;
      }
    }
  };
  const defaultProps$w = {
    ...ComponentDefaults,
    list: [],
    location: "bottom",
    visible: false,
    offset: [0, 12],
    targetId: "",
    showArrow: true,
    closeOnOutsideClick: true,
    closeOnActionClick: true,
    overlay: false,
    onClick: () => {
    },
    onOpen: () => {
    },
    onClose: () => {
    }
  };
  const classPrefix$9 = `nut-popover`;
  const Popover = (props) => {
    const {
      children,
      list,
      location,
      visible,
      offset,
      targetId,
      overlay,
      closeOnOutsideClick,
      closeOnActionClick,
      className,
      showArrow,
      style,
      onClick,
      onOpen,
      onClose,
      onSelect,
      ...rest
    } = {
      ...defaultProps$w,
      ...props
    };
    const popoverRef = React.useRef(null);
    const popoverContentRef = React.useRef(null);
    const [showPopup, setShowPopup] = React.useState(false);
    const [elWidth, setElWidth] = React.useState(0);
    const [elHeight, setElHeight] = React.useState(0);
    const [rootPosition, setRootPosition] = React.useState();
    React.useEffect(() => {
      setShowPopup(visible);
      if (visible) {
        setTimeout(() => {
          getContentWidth();
        }, 0);
      }
    }, [visible]);
    const targetSet = [
      targetId ? document.querySelector(`#${targetId}`) : popoverRef.current,
      popoverContentRef.current
    ];
    useClickAway(
      () => {
        props.onClick && props.onClick();
        onClose && onClose();
      },
      targetSet,
      "touchstart",
      true,
      visible,
      closeOnOutsideClick
    );
    const getContentWidth = () => {
      let rect = getRect(popoverRef.current);
      const scrollDis = document.documentElement.scrollTop || window.scrollY;
      if (targetId) {
        setTimeout(() => {
          rect = getRect(document.querySelector(`#${targetId}`));
          setRootPosition({
            width: rect.width,
            height: rect.height,
            left: rect.left,
            top: rect.top + scrollDis,
            right: rect.right
          });
          if (popoverContentRef.current) {
            setElWidth(popoverContentRef.current.clientWidth);
            setElHeight(popoverContentRef.current.clientHeight);
          }
        }, 0);
      } else {
        setRootPosition({
          width: rect.width,
          height: rect.height,
          left: rect.left,
          top: rect.top + scrollDis,
          right: rect.right
        });
        if (popoverContentRef.current) {
          setElWidth(popoverContentRef.current.clientWidth);
          setElHeight(popoverContentRef.current.clientHeight);
        }
      }
    };
    const classes = classnamesExports(
      {
        [`${classPrefix$9}`]: true
      },
      className
    );
    const popoverArrow = () => {
      const prefixCls2 = "nut-popover-arrow";
      const loca = location;
      const direction = loca.split("-")[0];
      return `${prefixCls2} ${prefixCls2}-${direction} ${prefixCls2}--${loca}`;
    };
    const getRootPosition = () => {
      const styles = {};
      if (!rootPosition)
        return {};
      const contentWidth = elWidth;
      const contentHeight = elHeight;
      const { width, height, left, top, right } = rootPosition;
      const direction = location.split("-")[0];
      const skew = location.split("-")[1];
      let cross = 0;
      let parallel = 0;
      if (Array.isArray(offset) && offset.length === 2) {
        cross += +offset[1];
        parallel += +offset[0];
      }
      if (width) {
        if (["bottom", "top"].includes(direction)) {
          const h = direction === "bottom" ? height + cross : -(contentHeight + cross);
          styles.top = `${top + h}px`;
          if (!skew) {
            styles.left = `${-(contentWidth - width) / 2 + left + parallel}px`;
          }
          if (skew === "start") {
            styles.left = `${left + parallel}px`;
          }
          if (skew === "end") {
            styles.left = `${right + parallel}px`;
          }
        }
        if (["left", "right"].includes(direction)) {
          const contentW = direction === "left" ? -(contentWidth + cross) : width + cross;
          styles.left = `${left + contentW}px`;
          if (!skew) {
            styles.top = `${top - contentHeight / 2 + height / 2 - 4 + parallel}px`;
          }
          if (skew === "start") {
            styles.top = `${top + parallel}px`;
          }
          if (skew === "end") {
            styles.top = `${top + height + parallel}px`;
          }
        }
      }
      return styles;
    };
    const handleSelect = (item, index) => {
      if (!item.disabled) {
        onSelect && onSelect(item, index);
      }
      if (closeOnActionClick) {
        props.onClick && props.onClick();
        onClose && onClose();
      }
    };
    return /* @__PURE__ */ React.createElement(React.Fragment, null, !targetId && /* @__PURE__ */ React.createElement(
      "div",
      {
        className: "nut-popover-wrapper",
        ref: popoverRef,
        onClick: () => {
          props.onClick && props.onClick();
          if (!visible) {
            onOpen && onOpen();
          } else {
            onClose && onClose();
          }
        },
        style
      },
      Array.isArray(children) ? children[0] : children
    ), /* @__PURE__ */ React.createElement("div", { className: classes, style: getRootPosition() }, /* @__PURE__ */ React.createElement(
      Popup,
      {
        className: `nut-popover-content nut-popover-content--${location}`,
        visible: showPopup,
        overlay,
        position: "default",
        ...rest
      },
      /* @__PURE__ */ React.createElement("div", { className: "nut-popover-content-group", ref: popoverContentRef }, showArrow && /* @__PURE__ */ React.createElement("div", { className: popoverArrow() }), Array.isArray(children) ? children[1] : "", list.map((item, index) => {
        return /* @__PURE__ */ React.createElement(
          "div",
          {
            className: classnamesExports(
              {
                "nut-popover-menu-item": true,
                "nut-popover-menu-disabled": item.disabled
              },
              item.className
            ),
            key: item.key || index,
            onClick: () => handleSelect(item, index)
          },
          item.icon ? item.icon : null,
          /* @__PURE__ */ React.createElement("div", { className: "nut-popover-menu-item-name" }, item.name)
        );
      }))
    )));
  };
  Popover.defaultProps = defaultProps$w;
  Popover.displayName = "NutPopover";
  function bound(position, min, max) {
    let ret = position;
    if (min !== void 0) {
      ret = Math.max(position, min);
    }
    if (max !== void 0) {
      ret = Math.min(ret, max);
    }
    return ret;
  }
  function rubberband(distance, dimension, constant) {
    return distance * dimension * constant / (dimension + constant * distance);
  }
  function rubberbandIfOutOfBounds(position, min, max, dimension, constant = 0.15) {
    if (constant === 0)
      return bound(position, min, max);
    if (position < min)
      return -rubberband(min - position, dimension, constant) + min;
    if (position > max)
      return +rubberband(position - max, dimension, constant) + max;
    return position;
  }
  const sleep = (time) => new Promise((resolve) => setTimeout(resolve, time));
  let passiveSupported = false;
  if (canUseDom) {
    try {
      const opts = Object.defineProperty({}, "passive", {
        get() {
          passiveSupported = true;
        }
      });
      window.addEventListener("test-passive-supported", null, opts);
    } catch (e) {
      console.log(e);
    }
  }
  const defaultProps$v = {
    ...ComponentDefaults,
    pullingText: "",
    canReleaseText: "",
    refreshingText: "",
    completeText: "",
    completeDelay: 500,
    disabled: false,
    headHeight: 40,
    threshold: 60,
    onRefresh: () => {
    }
  };
  const PullToRefresh = (p) => {
    const classPrefix2 = "nut-pulltorefresh";
    const { locale } = useConfig();
    const props = {
      ...defaultProps$v,
      ...p,
      ...{
        pullingText: p.pullingText || locale.pullToRefresh.pullingText,
        canReleaseText: p.canReleaseText || locale.pullToRefresh.canReleaseText,
        refreshingText: p.refreshingText || locale.pullToRefresh.refreshingText,
        completeText: p.completeText || locale.pullToRefresh.completeText
      }
    };
    const headHeight = props.headHeight;
    const threshold = props.threshold;
    const [status, setStatus] = React.useState("pulling");
    const [springStyles, api] = useSpring(() => ({
      from: { height: 0 },
      config: {
        tension: 300,
        friction: 30,
        clamp: true
      }
    }));
    const elementRef = React.useRef(null);
    const pullingRef = React.useRef(false);
    React.useEffect(() => {
      var _a2;
      (_a2 = elementRef.current) == null ? void 0 : _a2.addEventListener("touchmove", () => {
      });
    }, []);
    async function doRefresh() {
      api.start({ height: headHeight });
      setStatus("refreshing");
      try {
        await props.onRefresh();
        setStatus("complete");
      } catch (e) {
        api.start({
          to: async (next) => {
            await next({ height: 0 });
            setStatus("pulling");
          }
        });
        throw e;
      }
      if (props.completeDelay > 0) {
        await sleep(props.completeDelay);
      }
      api.start({
        to: async (next) => {
          await next({ height: 0 });
          setStatus("pulling");
        }
      });
    }
    useDrag(
      (state) => {
        if (status === "refreshing" || status === "complete")
          return;
        const { event } = state;
        if (state.last) {
          pullingRef.current = false;
          if (status === "canRelease") {
            doRefresh();
          } else {
            api.start({ height: 0 });
          }
          return;
        }
        function getScrollTop(element) {
          return "scrollTop" in element ? element.scrollTop : element.scrollY;
        }
        const [, y2] = state.movement;
        if (state.first && y2 > 0) {
          const target = state.event.target;
          if (!target || !(target instanceof Element))
            return;
          let scrollParent = getScrollParent(target);
          while (true) {
            if (!scrollParent)
              return;
            const scrollTop = getScrollTop(scrollParent);
            if (scrollTop > 0) {
              return;
            }
            if (scrollParent instanceof Window) {
              break;
            }
            scrollParent = getScrollParent(scrollParent.parentNode);
          }
          pullingRef.current = true;
        }
        if (!pullingRef.current)
          return;
        if (event.cancelable) {
          event.preventDefault();
        }
        event.stopPropagation();
        const height = Math.max(
          rubberbandIfOutOfBounds(y2, 0, 0, headHeight * 5, 0.5),
          0
        );
        api.start({ height });
        setStatus(height > threshold ? "canRelease" : "pulling");
      },
      {
        pointer: { touch: true },
        axis: "y",
        target: elementRef,
        enabled: !props.disabled,
        eventOptions: passiveSupported ? { passive: false } : false
      }
    );
    const renderStatusText = () => {
      var _a2;
      if (props.renderText) {
        return (_a2 = props.renderText) == null ? void 0 : _a2.call(props, status);
      }
      if (status === "pulling")
        return props.pullingText;
      if (status === "canRelease")
        return props.canReleaseText;
      if (status === "refreshing")
        return props.refreshingText;
      if (status === "complete")
        return props.completeText;
      return "";
    };
    return /* @__PURE__ */ React.createElement(
      animated.div,
      {
        ref: elementRef,
        className: `${classPrefix2} ${props.className}`,
        style: props.style
      },
      /* @__PURE__ */ React.createElement(animated.div, { style: springStyles, className: `${classPrefix2}-head` }, /* @__PURE__ */ React.createElement(
        "div",
        {
          className: `${classPrefix2}-head-content`,
          style: { height: headHeight }
        },
        renderStatusText()
      )),
      /* @__PURE__ */ React.createElement("div", { className: `${classPrefix2}-content` }, props.children)
    );
  };
  PullToRefresh.defaultProps = defaultProps$v;
  PullToRefresh.displayName = "NutPullToRefresh";
  const AvatarContext = React.createContext({});
  const defaultProps$u = {
    ...ComponentDefaults,
    maxContent: "",
    max: "",
    maxBackground: "#eee",
    maxColor: "#666",
    gap: "-8",
    level: "left"
  };
  const classPrefix$8 = `nut-avatar-group`;
  const AvatarGroup = (props) => {
    const propAvatarGroup = { ...defaultProps$u, ...props };
    const { className, style, children } = propAvatarGroup;
    const avatarGroupRef = React.useRef(null);
    const cls = classnamesExports(classPrefix$8, className);
    const parentAvatar = {
      propAvatarGroup,
      avatarGroupRef
    };
    return /* @__PURE__ */ React.createElement(AvatarContext.Provider, { value: parentAvatar }, /* @__PURE__ */ React.createElement("div", { className: cls, style, ref: avatarGroupRef }, children));
  };
  AvatarGroup.defaultProps = defaultProps$u;
  AvatarGroup.displayName = "NutAvatarGroup";
  const defaultProps$t = {
    ...ComponentDefaults,
    size: "",
    shape: "round",
    icon: "",
    background: "#eee",
    color: "#666",
    fit: "cover",
    src: "",
    alt: ""
  };
  const classPrefix$7 = `nut-avatar`;
  const Avatar = (props) => {
    var _a2, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n;
    const {
      children,
      size,
      shape,
      background,
      color,
      src,
      alt,
      icon,
      fit,
      className,
      style,
      onClick,
      onError,
      ...rest
    } = {
      ...defaultProps$t,
      ...props
    };
    const [maxSum, setMaxSum] = React.useState(0);
    const [showMax, setShowMax] = React.useState(false);
    const [avatarIndex, setAvatarIndex] = React.useState(1);
    const avatarRef = React.useRef(null);
    const parent = React.useContext(AvatarContext);
    const sizeValue = ["large", "normal", "small"];
    const classes = classnamesExports({
      [`nut-avatar-${((_a2 = parent == null ? void 0 : parent.propAvatarGroup) == null ? void 0 : _a2.size) || size || "normal"}`]: true,
      [`nut-avatar-${((_b = parent == null ? void 0 : parent.propAvatarGroup) == null ? void 0 : _b.shape) || shape}`]: true
    });
    const cls = classnamesExports(classPrefix$7, classes, className);
    const styles = {
      width: sizeValue.indexOf(size) > -1 ? "" : `${size}px`,
      height: sizeValue.indexOf(size) > -1 ? "" : `${size}px`,
      backgroundColor: `${background}`,
      color: `${color}`,
      marginLeft: avatarIndex !== 1 && ((_c = parent == null ? void 0 : parent.propAvatarGroup) == null ? void 0 : _c.gap) ? `${(_d = parent == null ? void 0 : parent.propAvatarGroup) == null ? void 0 : _d.gap}px` : "",
      zIndex: ((_e = parent == null ? void 0 : parent.propAvatarGroup) == null ? void 0 : _e.level) === "right" ? `${Math.abs(maxSum - avatarIndex)}` : "",
      ...style
    };
    const maxStyles = {
      backgroundColor: `${(_f = parent == null ? void 0 : parent.propAvatarGroup) == null ? void 0 : _f.maxBackground}`,
      color: `${(_g = parent == null ? void 0 : parent.propAvatarGroup) == null ? void 0 : _g.maxColor}`
    };
    React.useEffect(() => {
      var _a3;
      const avatarChildren = (_a3 = parent == null ? void 0 : parent.avatarGroupRef) == null ? void 0 : _a3.current.children;
      if (avatarChildren) {
        avatarLength(avatarChildren);
      }
    }, []);
    const avatarLength = (children2) => {
      var _a3, _b2, _c2;
      for (let i = 0; i < children2.length; i++) {
        if (children2[i] && children2[i].classList && children2[i].classList[0] === "nut-avatar") {
          children2[i].setAttribute("data-index", i + 1);
        }
      }
      const index = Number((_b2 = (_a3 = avatarRef == null ? void 0 : avatarRef.current) == null ? void 0 : _a3.dataset) == null ? void 0 : _b2.index);
      const maxCount = (_c2 = parent == null ? void 0 : parent.propAvatarGroup) == null ? void 0 : _c2.max;
      setMaxSum(children2.length);
      setAvatarIndex(index);
      if (index === children2.length && index !== maxCount && children2.length > maxCount) {
        setShowMax(true);
      }
    };
    const errorEvent = () => {
      if (props.onError) {
        props.onError();
      }
    };
    const clickAvatar = (e) => {
      onClick && onClick(e);
    };
    return /* @__PURE__ */ React.createElement(React.Fragment, null, (showMax || !((_h = parent == null ? void 0 : parent.propAvatarGroup) == null ? void 0 : _h.max) || avatarIndex <= ((_i = parent == null ? void 0 : parent.propAvatarGroup) == null ? void 0 : _i.max)) && /* @__PURE__ */ React.createElement(
      "div",
      {
        className: cls,
        ...rest,
        style: !showMax ? styles : maxStyles,
        onClick: clickAvatar,
        ref: avatarRef
      },
      (!((_j = parent == null ? void 0 : parent.propAvatarGroup) == null ? void 0 : _j.max) || avatarIndex <= ((_k = parent == null ? void 0 : parent.propAvatarGroup) == null ? void 0 : _k.max)) && /* @__PURE__ */ React.createElement(React.Fragment, null, src && /* @__PURE__ */ React.createElement(
        Image$1,
        {
          className: "avatar-img",
          src,
          alt,
          style: { objectFit: fit },
          onError: errorEvent
        }
      ), React.isValidElement(icon) ? React.cloneElement(icon, {
        ...icon.props,
        className: `${icon.props.className || ""} icon`
      }) : null, children && /* @__PURE__ */ React.createElement("span", { className: "text" }, children), !src && !icon && !children && /* @__PURE__ */ React.createElement(k$2, { className: "icon" })),
      showMax && /* @__PURE__ */ React.createElement("div", { className: "text" }, ((_l = parent == null ? void 0 : parent.propAvatarGroup) == null ? void 0 : _l.maxContent) ? (_m = parent == null ? void 0 : parent.propAvatarGroup) == null ? void 0 : _m.maxContent : `+ ${avatarIndex - ((_n = parent == null ? void 0 : parent.propAvatarGroup) == null ? void 0 : _n.max)}`)
    ));
  };
  Avatar.defaultProps = defaultProps$t;
  Avatar.displayName = "NutAvatar";
  Avatar.Group = AvatarGroup;
  const defaultProps$s = {
    ...ComponentDefaults,
    rows: 1,
    animated: false,
    title: false,
    avatar: false,
    avatarSize: "50px",
    visible: false,
    avatarShape: "round"
  };
  const Skeleton = (props) => {
    const {
      className,
      animated: animated2,
      rows,
      title,
      avatar,
      avatarSize,
      visible,
      children,
      avatarShape,
      ...rest
    } = {
      ...defaultProps$s,
      ...props
    };
    const classPrefix2 = "nut-skeleton";
    const classes = classnamesExports(className, classPrefix2);
    const avatarClass = classnamesExports({
      avatar: true,
      [`avatar--${avatarShape}`]: avatarShape
    });
    const repeatLines = (num) => {
      return Array.from({ length: num }, (v, i) => i);
    };
    const getStyle = () => {
      if (avatarSize) {
        return {
          width: avatarSize,
          height: avatarSize
        };
      }
      return {
        width: "50px",
        height: "50px"
      };
    };
    return /* @__PURE__ */ React.createElement(React.Fragment, null, visible ? /* @__PURE__ */ React.createElement("div", null, children) : /* @__PURE__ */ React.createElement("div", { className: classes, ...rest }, animated2 && /* @__PURE__ */ React.createElement("div", { className: `${classPrefix2}__animation` }), /* @__PURE__ */ React.createElement("div", { className: `${classPrefix2}__content` }, avatar && /* @__PURE__ */ React.createElement(
      Avatar,
      {
        className: avatarClass,
        shape: avatarShape,
        style: getStyle(),
        icon: "null"
      }
    ), rows === 1 ? /* @__PURE__ */ React.createElement("div", { className: `${classPrefix2}__block` }) : /* @__PURE__ */ React.createElement("div", { className: `${classPrefix2}__content-line` }, title && /* @__PURE__ */ React.createElement("div", { className: `${classPrefix2}__title` }), repeatLines(rows).map((item, index) => {
      return /* @__PURE__ */ React.createElement("div", { className: `${classPrefix2}__block`, key: index });
    })))));
  };
  Skeleton.defaultProps = defaultProps$s;
  Skeleton.displayName = "NutSkeleton";
  function preventDefault(event, isStopPropagation) {
    if (typeof event.cancelable !== "boolean" || event.cancelable) {
      event.preventDefault();
    }
    if (isStopPropagation) {
      event.stopPropagation();
    }
  }
  const defaultProps$r = {
    name: ""
  };
  const Swipe = React.forwardRef((props, instanceRef) => {
    const classPrefix2 = "nut-swipe";
    const touch = useTouch();
    const { children, className, style } = { ...defaultProps$r, ...props };
    const root2 = React.useRef();
    const opened = React.useRef(false);
    const lockClick = React.useRef(false);
    const startOffset = React.useRef(0);
    const [state, setState] = React.useState({
      offset: 0,
      dragging: false
    });
    const [actionWidth, setActionWidth] = React.useState({
      left: 0,
      right: 0
    });
    const wrapperStyle = {
      transform: `translate3d(${state.offset}px, 0, 0)`,
      transitionDuration: state.dragging ? "0s" : ".6s"
    };
    const leftWidth = actionWidth.left;
    const rightWidth = actionWidth.right;
    const onTouchStart = (event) => {
      if (!props.disabled) {
        startOffset.current = state.offset;
        touch.start(event);
        props.onTouchStart && props.onTouchStart(event);
      }
    };
    const onTouchMove = (event) => {
      if (props.disabled) {
        return;
      }
      touch.move(event);
      props.onTouchMove && props.onTouchMove(event);
      if (touch.isHorizontal()) {
        lockClick.current = true;
        const newState = { ...state, dragging: true };
        const isEdge = !opened || touch.deltaX * startOffset.current < 0;
        if (isEdge) {
          preventDefault(event, true);
        }
        newState.offset = rangeCalculation(
          touch.deltaX + startOffset.current,
          -rightWidth,
          leftWidth
        );
        setState(newState);
      }
    };
    const onTouchEnd = (event) => {
      if (state.dragging) {
        setState((v) => ({ ...v, dragging: false }));
        toggle(state.offset > 0 ? "left" : "right");
        setTimeout(() => {
          lockClick.current = false;
        }, 0);
        props.onTouchEnd && props.onTouchEnd(event);
      }
    };
    const toggle = (side) => {
      const offset = Math.abs(state.offset);
      const base = 0.3;
      const baseNum = opened ? 1 - base : base;
      const width = side === "left" ? leftWidth : rightWidth;
      if (width && offset > Number(width) * baseNum) {
        open(side);
      } else {
        close(side);
      }
    };
    const open = (side) => {
      var _a2;
      opened.current = true;
      const offset = side === "left" ? leftWidth : -rightWidth;
      const name = props.name;
      (_a2 = props.onOpen) == null ? void 0 : _a2.call(props, { name, position: side });
      setState((v) => ({ ...v, offset: Number(offset) || 0 }));
    };
    const close = (position) => {
      var _a2;
      if (opened.current) {
        opened.current = false;
        (_a2 = props.onClose) == null ? void 0 : _a2.call(props, {
          name: props.name,
          position: position || "left"
        });
      }
      setState((v) => ({ ...v, offset: 0 }));
    };
    const rangeCalculation = (num, min, max) => {
      return Math.min(Math.max(Number(num), Number(min)), Number(max));
    };
    const getNodeWidth = (node) => {
      if (node) {
        const ele = getRect(node);
        return ele.width;
      }
      return 0;
    };
    const leftRef = React.useCallback(
      (node) => {
        if (node !== null) {
          setActionWidth((v) => ({ ...v, left: getNodeWidth(node) }));
        }
      },
      [props.leftAction]
    );
    const rightRef = React.useCallback(
      (node) => {
        if (node !== null) {
          setActionWidth((v) => ({ ...v, right: getNodeWidth(node) }));
        }
      },
      [props.rightAction]
    );
    const renderActionContent = (side, measuredRef) => {
      if (props[`${side}Action`]) {
        return /* @__PURE__ */ React.createElement(
          "div",
          {
            ref: measuredRef,
            className: `${classPrefix2}__${side}`,
            onClick: (e) => handleOperate(e, side)
          },
          props[`${side}Action`]
        );
      }
      return null;
    };
    const handleOperate = (event, position) => {
      event.stopPropagation();
      if (props.beforeClose) {
        props.beforeClose(position);
      } else {
        props.onActionClick && props.onActionClick(event, position);
      }
    };
    React.useImperativeHandle(instanceRef, () => ({
      open,
      close: () => close()
    }));
    React.useEffect(() => {
      const handler = (event) => {
        const targets = [root2];
        if (targets.some((targetItem) => {
          const targetElement = targetItem.current || targetItem;
          return !targetElement || (targetElement == null ? void 0 : targetElement.contains(event.target));
        })) {
          return;
        }
        close();
      };
      document.addEventListener("touchstart", handler);
      return () => {
        document.removeEventListener("touchstart", handler);
      };
    }, []);
    return /* @__PURE__ */ React.createElement(
      "div",
      {
        ref: root2,
        className: classnamesExports(classPrefix2, className),
        onTouchStart: (e) => onTouchStart(e),
        onTouchMove: (e) => onTouchMove(e),
        onTouchEnd: (e) => onTouchEnd(e),
        style
      },
      /* @__PURE__ */ React.createElement("div", { className: `${classPrefix2}__wrapper`, style: wrapperStyle }, renderActionContent("left", leftRef), children, renderActionContent("right", rightRef))
    );
  });
  Swipe.defaultProps = defaultProps$r;
  Swipe.displayName = "NutSwipe";
  const classPrefix$6 = "nut-toast";
  class Notification extends React__namespace.PureComponent {
    constructor(props) {
      super(props);
      __publicField(this, "closeTimer");
      this.close = this.close.bind(this);
      this.startCloseTimer = this.startCloseTimer.bind(this);
      this.clearCloseTimer = this.clearCloseTimer.bind(this);
      this.clickCover = this.clickCover.bind(this);
      this.state = {
        show: true
      };
    }
    close() {
      this.setState({
        show: false
      });
      this.clearCloseTimer();
      if (this.props.id) {
        const element = document.getElementById(this.props.id);
        element && element.parentNode && element.parentNode.removeChild(element);
      }
      this.props.onClose();
    }
    startCloseTimer() {
      const { duration } = this.props;
      if (duration) {
        this.closeTimer = window.setTimeout(() => {
          this.close();
        }, duration * 1e3);
      }
    }
    clearCloseTimer() {
      if (this.closeTimer) {
        clearTimeout(this.closeTimer);
        this.closeTimer = -1;
      }
    }
    clickCover() {
      const { closeOnOverlayClick } = this.props;
      if (closeOnOverlayClick) {
        this.close();
      }
    }
    renderIcon() {
      const { icon } = this.props;
      if (typeof icon === "string") {
        let iconNode = null;
        switch (icon) {
          case "success":
            iconNode = /* @__PURE__ */ React__namespace.createElement(x$f, null);
            break;
          case "loading":
            iconNode = /* @__PURE__ */ React__namespace.createElement(k$3, { className: "nut-icon-loading" });
            break;
          case "fail":
            iconNode = /* @__PURE__ */ React__namespace.createElement(x$9, null);
            break;
          case "warn":
            iconNode = /* @__PURE__ */ React__namespace.createElement(x$8, null);
            break;
        }
        return /* @__PURE__ */ React__namespace.createElement("p", { className: `${classPrefix$6}__icon-wrapper` }, iconNode);
      }
      return icon;
    }
    componentDidMount() {
      this.startCloseTimer();
    }
    componentWillUnmount() {
      this.clearCloseTimer();
    }
    render() {
      const {
        id,
        icon,
        title,
        content,
        position,
        size,
        closeOnOverlayClick,
        lockScroll,
        style,
        className,
        contentClassName,
        contentStyle
      } = this.props;
      const { show: show2 } = this.state;
      const classes = classnamesExports({
        "nut-toast-has-icon": icon,
        [`nut-toast-${size}`]: true
      });
      return /* @__PURE__ */ React__namespace.createElement(React__namespace.Fragment, null, /* @__PURE__ */ React__namespace.createElement(
        Overlay,
        {
          visible: show2,
          style,
          className: `${classPrefix$6}__overlay-default ${className}`,
          onClick: () => {
            this.clickCover();
          },
          closeOnOverlayClick,
          lockScroll
        },
        /* @__PURE__ */ React__namespace.createElement("div", { className: `${classPrefix$6} ${classes}`, id: `toast-${id}` }, /* @__PURE__ */ React__namespace.createElement(
          "div",
          {
            className: `${classPrefix$6}__inner ${classPrefix$6}-${position} ${contentClassName}`,
            style: contentStyle
          },
          this.renderIcon(),
          title ? /* @__PURE__ */ React__namespace.createElement("div", { className: `${classPrefix$6}-title` }, title) : null,
          /* @__PURE__ */ React__namespace.createElement("span", { className: `${classPrefix$6}-text` }, content)
        ))
      ));
    }
  }
  __publicField(Notification, "newInstance");
  Notification.newInstance = (properties, callback) => {
    const element = document.createElement("div");
    const id = properties.id ? properties.id : `${(/* @__PURE__ */ new Date()).getTime()}`;
    element.id = id;
    properties.id = id;
    document.body.appendChild(element);
    let called = false;
    function ref(instance) {
      if (called) {
        return;
      }
      called = true;
      callback({
        component: instance,
        destroy() {
          unmount(element);
          element && element.parentNode && element.parentNode.removeChild(element);
        }
      });
    }
    render(/* @__PURE__ */ React__namespace.createElement(Notification, { ...properties, ref }), element);
  };
  let messageInstance = null;
  const options = {
    ...ComponentDefaults,
    id: "",
    duration: 2,
    // 时长,duration为0则一直展示
    position: "center",
    title: "",
    size: "base",
    // 设置字体大小，默认base,可选large\small\base
    icon: null,
    onClose: () => {
    },
    closeOnOverlayClick: false,
    // 是否点击遮罩可关闭
    lockScroll: false,
    contentClassName: ""
  };
  function getInstance(props, callback) {
    if (messageInstance) {
      messageInstance.destroy();
      messageInstance = null;
    }
    Notification.newInstance(props, (notification) => {
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
    const opts2 = { ...options, ...opts, onClose: close };
    getInstance(opts2, (notification) => {
      messageInstance = notification;
    });
  }
  const errorMsg = (msg) => {
    if (!msg) {
      console.warn("[NutUI Toast]: msg cannot be null");
    }
  };
  function show(option) {
    if (typeof option === "string") {
      errorMsg(option);
      return notice({ content: option });
    }
    errorMsg(option.content);
    return notice({
      ...option
    });
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
  const Toast = {
    show,
    config,
    clear() {
      if (messageInstance) {
        messageInstance.destroy();
        messageInstance = null;
      }
    }
  };
  const defaultProps$q = {
    ...ComponentDefaults,
    type: "shake",
    action: "initial",
    loop: false,
    onClick: (event) => {
    }
  };
  const classPrefix$5 = `nut-animate`;
  const Animate = (props) => {
    const { className, type: type2, action, loop: loop2, onClick, children, ...rest } = {
      ...defaultProps$q,
      ...props
    };
    const [clicked, setClicked] = React.useState(false);
    const classes = classnamesExports({
      "nut-ani-container": true,
      [`${classPrefix$5}-${type2}`]: action === "initial" || clicked ? type2 : false,
      loop: loop2
    });
    const cls = classnamesExports(classes, className);
    const handleClick2 = (event) => {
      setClicked(true);
      if (!loop2) {
        setTimeout(() => {
          setClicked(false);
        }, 1e3);
      }
      onClick && onClick(event);
    };
    return /* @__PURE__ */ React.createElement("div", { className: "nut-animate" }, /* @__PURE__ */ React.createElement("div", { className: cls, onClick: handleClick2, ...rest }, children));
  };
  Animate.defaultProps = defaultProps$q;
  Animate.displayName = "NutAnimate";
  const defaultProps$p = {
    ...ComponentDefaults,
    length: 0,
    value: "",
    delay: 300,
    duration: 1,
    thousands: false
  };
  const CountUp = (props) => {
    const {
      length,
      value,
      delay,
      duration,
      className,
      thousands,
      style,
      ...reset
    } = {
      ...defaultProps$p,
      ...props
    };
    const classPrefix2 = "nut-countup";
    const countupRef = React.useRef(null);
    const timerRef = React.useRef(0);
    const numbers = Array.from({ length: 10 }, (v, i) => i);
    const getShowNumber = () => {
      const splitArr = value.split(".");
      const intNumber = length && splitArr[0].length < length ? (Array(length).join("0") + splitArr[0]).slice(-length) : splitArr[0];
      const currNumber = `${thousands ? intNumber.replace(/(\d)(?=(?:\d{3})+$)/g, "$1,") : intNumber}${splitArr[1] ? "." : ""}${splitArr[1] || ""}`;
      return currNumber.split("");
    };
    const numerArr = React.useMemo(getShowNumber, [value, length, thousands]);
    const setNumberTransform = () => {
      if (countupRef.current) {
        const numberItems = countupRef.current.querySelectorAll(
          ".nut-countup__number"
        );
        const numberFilterArr = numerArr.filter(
          (item) => !Number.isNaN(Number(item))
        );
        Object.keys(numberItems).forEach((key) => {
          const elem = numberItems[Number(key)];
          const idx = Number(numberFilterArr[Number(key)]);
          if ((idx || idx === 0) && elem) {
            const transform = `translate(0, -${(idx === 0 ? 10 : idx) * 5}%)`;
            elem.style.transform = transform;
            elem.style.webkitTransform = transform;
          }
        });
      }
    };
    const numberEaseStyle = {
      transition: `transform ${duration}s ease-in-out`
    };
    React.useEffect(() => {
      timerRef.current = window.setTimeout(() => {
        setNumberTransform();
      }, delay);
      return () => {
        window.clearTimeout(timerRef.current);
      };
    }, [numerArr]);
    return /* @__PURE__ */ React.createElement("div", { className: `${classPrefix2} ${className}`, ref: countupRef }, /* @__PURE__ */ React.createElement("ul", { className: `${classPrefix2}__list` }, numerArr.map((item, idx) => {
      return /* @__PURE__ */ React.createElement(
        "li",
        {
          className: `${classPrefix2}__listitem ${!Number.isNaN(Number(item)) ? `${classPrefix2}__listitem--number` : ""}`,
          key: idx
        },
        !Number.isNaN(Number(item)) ? /* @__PURE__ */ React.createElement(
          "span",
          {
            className: `${classPrefix2}__number`,
            style: numberEaseStyle
          },
          [...numbers, ...numbers].map((number2, subidx) => {
            return /* @__PURE__ */ React.createElement("span", { key: subidx }, number2);
          })
        ) : /* @__PURE__ */ React.createElement("span", { className: `${classPrefix2}__separator` }, item)
      );
    })));
  };
  CountUp.defaultProps = defaultProps$p;
  CountUp.displayName = "NutCountUp";
  const defaultProps$o = {};
  class AnimatingNumbers extends React.Component {
    constructor(props) {
      super(props);
      this.state = {};
    }
    render() {
      return /* @__PURE__ */ React.createElement("div", { className: "nut-animatingnumbers" });
    }
  }
  __publicField(AnimatingNumbers, "defaultProps", defaultProps$o);
  __publicField(AnimatingNumbers, "displayName", "NutAnimatingNumbers");
  __publicField(AnimatingNumbers, "CountUp", CountUp);
  AnimatingNumbers.CountUp = CountUp;
  const defaultProps$n = {
    ...ComponentDefaults,
    src: "",
    muted: false,
    autoPlay: false,
    loop: false,
    preload: "auto",
    type: "progress",
    onBack: (e) => {
    },
    // type 为 progress时生效
    onForward: (e) => {
    },
    // type 为 progress时生效
    onPause: (e) => {
    },
    onEnd: (e) => {
    },
    onMute: (e) => {
    },
    onCanPlay: (e) => {
    }
  };
  const Audio = (props) => {
    const { locale } = useConfig();
    const {
      className,
      src,
      style,
      muted,
      autoPlay,
      loop: loop2,
      preload,
      type: type2,
      onBack,
      onForward,
      onPause,
      onEnd,
      onMute,
      onCanPlay,
      children,
      ...rest
    } = {
      ...defaultProps$n,
      ...props
    };
    const [playing, setPlaying] = React.useState(false);
    const [percent, setPercent] = React.useState(0);
    const [isCanPlay, setIsCanPlay] = React.useState(false);
    const [currentDuration, setCurrentDuration] = React.useState("00:00:00");
    const AudioRef = React.useRef(null);
    const statusRef = React.useRef({
      currentTime: 0,
      currentDuration: "00:00:00",
      percent: 0,
      duration: "00:00:00",
      second: 0,
      hanMuted: props.muted,
      playing: props.autoPlay,
      handPlaying: false
    });
    const classPrefix2 = "nut-audio";
    const warn = console.warn;
    const handleEnded = (e) => {
      if (props.loop) {
        warn(locale.audio.tips || "onPlayEnd事件在loop=false时才会触发");
      } else {
        props.onEnd && props.onEnd(e);
      }
    };
    function watch() {
      if (AudioRef && AudioRef.current) {
        const current = AudioRef.current;
        current.addEventListener("play", () => {
          setPlaying(true);
        });
      }
    }
    React.useEffect(() => {
      watch();
    }, []);
    React.useEffect(() => {
    }, [currentDuration]);
    const handleStatusChange = () => {
      setPlaying(!playing);
      if (playing) {
        AudioRef && AudioRef.current && AudioRef.current.pause();
      } else {
        AudioRef && AudioRef.current && AudioRef.current.play();
      }
    };
    const renderIcon = () => {
      return /* @__PURE__ */ React.createElement("div", { className: `${classPrefix2}__icon` }, /* @__PURE__ */ React.createElement(
        "div",
        {
          className: classnamesExports(
            `${classPrefix2}__icon-box`,
            playing ? `${classPrefix2}__icon-play` : `${classPrefix2}__icon-stop`
          ),
          onClick: handleStatusChange
        },
        /* @__PURE__ */ React.createElement(k, { className: playing ? "nut-icon-loading" : "" })
      ));
    };
    const handleBack = () => {
      if (statusRef.current.currentTime > 0 && AudioRef.current) {
        statusRef.current.currentTime--;
        AudioRef.current.currentTime = statusRef.current.currentTime;
        props.onBack && props.onBack(AudioRef.current);
      }
    };
    const handleForward = () => {
      if (AudioRef.current) {
        statusRef.current.currentTime++;
        AudioRef.current.currentTime = statusRef.current.currentTime;
        props.onForward && props.onForward(AudioRef.current);
      }
    };
    const handleMute = () => {
      if (AudioRef.current) {
        AudioRef.current.muted = !AudioRef.current.muted;
        props.onMute && props.onMute(AudioRef.current);
      }
    };
    const handlePause = (e) => {
      setPlaying(false);
      props.onPause && props.onPause(e);
    };
    const formatSeconds = (value) => {
      if (!value) {
        return "00:00:00";
      }
      const time = parseInt(value);
      const hours = Math.floor(time / 3600);
      const minutes = Math.floor((time - hours * 3600) / 60);
      const seconds = time - hours * 3600 - minutes * 60;
      let result = "";
      result += `${`0${hours.toString()}`.slice(-2)}:`;
      result += `${`0${minutes.toString()}`.slice(-2)}:`;
      result += `0${seconds.toString()}`.slice(-2);
      return result;
    };
    const renderProgerss = () => {
      return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", { className: `${classPrefix2}__progress` }, /* @__PURE__ */ React.createElement("div", { className: "time" }, currentDuration), /* @__PURE__ */ React.createElement("div", { className: `${classPrefix2}__progress-bar-wrapper` }, /* @__PURE__ */ React.createElement(
        Range,
        {
          value: percent,
          onChange: (val) => setPercent(val),
          currentDescription: null,
          maxDescription: null,
          minDescription: null,
          "inactive-color": "#cccccc",
          "active-color": "#fa2c19"
        }
      )), /* @__PURE__ */ React.createElement("div", { className: "time" }, AudioRef.current ? formatSeconds(`${statusRef.current.second}`) : "00:00:00")), /* @__PURE__ */ React.createElement(
        "div",
        {
          className: isCanPlay ? "custom-button-group" : "custom-button-group-disable"
        },
        /* @__PURE__ */ React.createElement(
          Button,
          {
            type: "primary",
            size: "small",
            className: "back",
            onClick: handleBack
          },
          locale.audio.back || "快退"
        ),
        /* @__PURE__ */ React.createElement(
          Button,
          {
            type: "primary",
            size: "small",
            className: "start",
            onClick: handleStatusChange
          },
          playing ? `${locale.audio.pause || "暂停"}` : `${locale.audio.start || "开始"}`
        ),
        /* @__PURE__ */ React.createElement(Button, { type: "primary", size: "small", onClick: handleForward }, locale.audio.forward || "快进"),
        /* @__PURE__ */ React.createElement(
          Button,
          {
            type: AudioRef.current && AudioRef.current.muted ? "default" : "primary",
            size: "small",
            onClick: handleMute
          },
          locale.audio.mute || "静音"
        )
      ));
    };
    const renderNone = () => {
      return /* @__PURE__ */ React.createElement(
        "div",
        {
          className: `${classPrefix2}__none-container`,
          onClick: handleStatusChange
        },
        children
      );
    };
    const renderAudio = () => {
      switch (type2) {
        case "icon":
          return renderIcon();
        case "progress":
          return renderProgerss();
        case "none":
          return renderNone();
        default:
          return null;
      }
    };
    const handleCanplay = (e) => {
      setIsCanPlay(true);
      if (props.autoPlay && !playing) {
        AudioRef && AudioRef.current && AudioRef.current.play();
      }
      if (AudioRef.current) {
        statusRef.current.second = AudioRef.current.duration || 0;
        props.onCanPlay && props.onCanPlay(e);
      }
    };
    const onTimeupdate = (e) => {
      const time = parseInt(String(e.target.currentTime));
      const formated = formatSeconds(`${time}`);
      statusRef.current.currentDuration = formated;
      setPercent(time / statusRef.current.second * 100);
      setCurrentDuration(formated);
      statusRef.current.currentTime = time;
    };
    return /* @__PURE__ */ React.createElement("div", { className: classnamesExports(classPrefix2, className), style, ...rest }, renderAudio(), /* @__PURE__ */ React.createElement(
      "audio",
      {
        className: "audioMain",
        controls: type2 === "controls",
        ref: AudioRef,
        src,
        muted,
        preload,
        loop: loop2,
        onPause: (e) => handlePause(e),
        onEnded: (e) => handleEnded(e),
        onCanPlay: (e) => handleCanplay(e),
        onTimeUpdate: (e) => onTimeupdate(e)
      },
      /* @__PURE__ */ React.createElement("track", { kind: "captions" })
    ));
  };
  Audio.defaultProps = defaultProps$n;
  Audio.displayName = "NutAudio";
  const defaultProps$m = {
    ...ComponentDefaults,
    strokeWidth: 5,
    radius: 50,
    strokeLinecap: "round",
    color: "#fa2c19",
    background: "#e5e9f2",
    clockwise: true
  };
  const classPrefix$4 = `nut-circleprogress`;
  const CircleProgress = (props) => {
    var _a2;
    const {
      children,
      percent,
      className,
      radius,
      clockwise,
      strokeWidth,
      color,
      background,
      style,
      strokeLinecap,
      ...restProps
    } = {
      ...defaultProps$m,
      ...props
    };
    const classes = classnamesExports(className, classPrefix$4);
    const refRandomId = Math.random().toString(36).slice(-8);
    const styles = {
      height: `${Number(radius) * 2}px`,
      width: `${Number(radius) * 2}px`,
      ...style
    };
    const pathStyle = {
      stroke: background
    };
    const hoverStyle = () => {
      const perimeter = 283;
      const offset = perimeter * Number(percent) / 100;
      return {
        stroke: isObject(color) ? `url(#${refRandomId})` : color,
        strokeDasharray: `${offset}px ${perimeter}px`
      };
    };
    const path = () => {
      const isWise = clockwise ? 1 : 0;
      return `M 50 50 m -45 0 a 45 45 0 1 ${isWise} 90 0  a 45 45 0 1 ${isWise} -90 0`;
    };
    const stop2 = () => {
      if (!isObject(props.color)) {
        return;
      }
      const color2 = props.color;
      const colorArr = Object.keys(color2).sort(
        (a2, b) => parseFloat(a2) - parseFloat(b)
      );
      const stopArr = [];
      colorArr.forEach((item) => {
        const obj = {
          key: "",
          value: ""
        };
        obj.key = item;
        obj.value = color2[item];
        stopArr.push(obj);
      });
      return stopArr;
    };
    return /* @__PURE__ */ React.createElement("div", { className: classes, style: styles, ...restProps }, /* @__PURE__ */ React.createElement("svg", { viewBox: "0 0 100 100" }, /* @__PURE__ */ React.createElement("defs", null, /* @__PURE__ */ React.createElement("linearGradient", { id: refRandomId, x1: "100%", y1: "0%", x2: "0%", y2: "0%" }, (_a2 = stop2()) == null ? void 0 : _a2.map((item, index) => {
      return /* @__PURE__ */ React.createElement("stop", { key: index, offset: item.key, stopColor: item.value });
    }))), /* @__PURE__ */ React.createElement(
      "path",
      {
        className: "nut-circleprogress-path",
        d: path(),
        style: pathStyle,
        fill: "none",
        strokeWidth
      }
    ), /* @__PURE__ */ React.createElement(
      "path",
      {
        className: "nut-circleprogress-hover",
        style: hoverStyle(),
        d: path(),
        fill: "none",
        strokeLinecap,
        transform: "rotate(90,50,50)",
        strokeWidth
      }
    )), /* @__PURE__ */ React.createElement("div", { className: "nut-circleprogress-text" }, children));
  };
  CircleProgress.defaultProps = defaultProps$m;
  CircleProgress.displayName = "NutCircleProgress";
  const collapseContext = {
    isOpen: (name) => {
      return true;
    },
    updateValue: (name) => {
    },
    expandIcon: null,
    rotate: 180
  };
  const CollapseContext = React.createContext(collapseContext);
  const defaultProps$l = {
    ...ComponentDefaults,
    title: null,
    name: "",
    expandIcon: null,
    disabled: false,
    extra: null
  };
  const CollapseItem = (props) => {
    const {
      children,
      title,
      name,
      disabled,
      expandIcon,
      rotate,
      extra,
      style,
      className,
      ...rest
    } = {
      ...defaultProps$l,
      ...props
    };
    const classPrefix2 = "nut-collapse-item";
    const context = React.useContext(CollapseContext);
    const wrapperRef = React.useRef(null);
    const contentRef = React.useRef(null);
    const expanded = React.useMemo(() => {
      if (context) {
        return context.isOpen(name);
      }
      return false;
    }, [name, context.isOpen]);
    const iconStyle = React.useMemo(() => {
      return expanded ? { transform: `translateY(-50%) rotate(${rotate || context.rotate}deg)` } : { transform: "translateY(-50%)" };
    }, [expanded, rotate]);
    const handleClick2 = () => {
      if (!disabled) {
        context.updateValue(name);
      }
    };
    const onTransitionEnd = () => {
      if (expanded) {
        if (wrapperRef.current) {
          wrapperRef.current.style.height = "";
        }
      }
    };
    const getOffsetHeight = () => {
      var _a2;
      const height = (_a2 = contentRef.current) == null ? void 0 : _a2.offsetHeight;
      return height ? `${height}px` : "";
    };
    const toggle = () => {
      const start2 = expanded ? "0px" : getOffsetHeight();
      if (wrapperRef.current) {
        wrapperRef.current.style.height = start2;
      }
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          const end = expanded ? getOffsetHeight() : "0px";
          if (wrapperRef.current) {
            wrapperRef.current.style.height = end;
          }
        });
      });
    };
    const init = React.useRef(true);
    React.useEffect(() => {
      if (init.current) {
        init.current = false;
        if (!expanded) {
          wrapperRef.current.style.height = "0px";
        }
      } else {
        toggle();
      }
    }, [expanded]);
    return /* @__PURE__ */ React.createElement("div", { className: classnamesExports(classPrefix2, className), style, ...rest }, /* @__PURE__ */ React.createElement(
      "div",
      {
        className: classnamesExports(`${classPrefix2}__header`, { disabled }),
        onClick: handleClick2
      },
      /* @__PURE__ */ React.createElement("div", { className: `${classPrefix2}__title` }, title),
      /* @__PURE__ */ React.createElement("div", { className: `${classPrefix2}__extra` }, extra),
      /* @__PURE__ */ React.createElement("div", { className: `${classPrefix2}__icon-box` }, /* @__PURE__ */ React.createElement("div", { className: `${classPrefix2}__icon`, style: iconStyle }, expandIcon || context.expandIcon))
    ), /* @__PURE__ */ React.createElement(
      "div",
      {
        className: `${classPrefix2}__content`,
        onTransitionEnd,
        ref: wrapperRef
      },
      /* @__PURE__ */ React.createElement("div", { ref: contentRef, className: `${classPrefix2}__content-text` }, children)
    ));
  };
  CollapseItem.defaultProps = defaultProps$l;
  CollapseItem.displayName = "NutCollapseItem";
  const defaultProps$k = {
    ...ComponentDefaults,
    defaultActiveName: [],
    accordion: false,
    expandIcon: null,
    rotate: 180
  };
  const Collapse = (props) => {
    const {
      className,
      style,
      children,
      activeName,
      defaultActiveName,
      accordion,
      expandIcon,
      rotate,
      onChange
    } = {
      ...defaultProps$k,
      ...props
    };
    const classPrefix2 = "nut-collapse";
    const [value, setValue] = usePropsValue({
      value: activeName,
      defaultValue: defaultActiveName,
      finalValue: []
    });
    const changeVal = (newValue, name, isOpen2) => {
      setValue(newValue);
      onChange && onChange(newValue, name, isOpen2);
    };
    const updateValue = (name) => {
      if (accordion) {
        if (value === name) {
          changeVal("", name, false);
        } else {
          changeVal(name, name, true);
        }
      } else if (Array.isArray(value)) {
        if (value.includes(name)) {
          const newValue = value.filter((v) => v !== name);
          changeVal(newValue, name, false);
        } else {
          const newValue = value.concat([name]);
          changeVal(newValue, name, true);
        }
      } else {
        console.warn("[NutUI] <Collapse> 未开启手风琴模式时 activeName 应为数组");
      }
    };
    const isOpen = React.useCallback(
      (name) => {
        if (accordion) {
          return value === name;
        }
        if (Array.isArray(value)) {
          return value.includes(name);
        }
        return false;
      },
      [accordion, value]
    );
    return /* @__PURE__ */ React.createElement(
      CollapseContext.Provider,
      {
        value: {
          isOpen,
          updateValue,
          expandIcon,
          rotate
        }
      },
      /* @__PURE__ */ React.createElement("div", { className: classnamesExports(classPrefix2, className), style }, children)
    );
  };
  Collapse.defaultProps = defaultProps$k;
  Collapse.displayName = "NutCollapse";
  Collapse.Item = CollapseItem;
  const defaultProps$j = {
    ...ComponentDefaults,
    paused: false,
    startTime: Date.now(),
    endTime: Date.now(),
    remainingTime: 0,
    millisecond: false,
    format: "HH:mm:ss",
    autoStart: true,
    time: 0,
    destroy: false
  };
  const InternalCountDown = (props, ref) => {
    useConfig();
    const {
      paused,
      startTime,
      endTime,
      remainingTime,
      millisecond,
      format: format2,
      autoStart,
      time,
      destroy,
      className,
      style,
      onEnd,
      onPaused,
      onRestart,
      onUpdate,
      children,
      ...rest
    } = { ...defaultProps$j, ...props };
    const classPrefix2 = "nut-countdown";
    const [restTimeStamp, setRestTime] = React.useState(0);
    const stateRef = React.useRef({
      pauseTime: 0,
      curr: 0,
      isPaused: paused,
      isIninted: false,
      timer: 0,
      restTime: 0,
      // 倒计时剩余时间时间
      counting: !paused && autoStart,
      // 是否处于倒计时中
      handleEndTime: Date.now(),
      // 最终截止时间
      diffTime: 0
      // 设置了 startTime 时，与 date.now() 的差异
    });
    const getTimeStamp = (timeStr) => {
      if (!timeStr)
        return Date.now();
      let t = timeStr;
      t = t > 0 ? +t : t.toString().replace(/-/g, "/");
      return new Date(t).getTime();
    };
    const initTime = () => {
      if (remainingTime) {
        stateRef.current.handleEndTime = Date.now() + Number(remainingTime);
      } else {
        stateRef.current.handleEndTime = endTime;
        stateRef.current.diffTime = Date.now() - getTimeStamp(startTime);
      }
      if (!stateRef.current.counting)
        stateRef.current.counting = true;
      tick();
    };
    const tick = () => {
      stateRef.current.timer = requestAnimationFrame(() => {
        if (stateRef.current.counting) {
          const currentTime = Date.now() - stateRef.current.diffTime;
          const remainTime = Math.max(
            stateRef.current.handleEndTime - currentTime,
            0
          );
          stateRef.current.restTime = remainTime;
          setRestTime(remainTime);
          if (!remainTime) {
            stateRef.current.counting = false;
            pause();
            onEnd && onEnd();
          }
          if (remainTime > 0) {
            tick();
          }
        }
      });
    };
    const formatRemainTime = (t, type2) => {
      const ts2 = t;
      const rest2 = {
        d: 0,
        h: 0,
        m: 0,
        s: 0,
        ms: 0
      };
      const SECOND = 1e3;
      const MINUTE = 60 * SECOND;
      const HOUR = 60 * MINUTE;
      const DAY = 24 * HOUR;
      if (ts2 > 0) {
        rest2.d = ts2 >= SECOND ? Math.floor(ts2 / DAY) : 0;
        rest2.h = Math.floor(ts2 % DAY / HOUR);
        rest2.m = Math.floor(ts2 % HOUR / MINUTE);
        rest2.s = Math.floor(ts2 % MINUTE / SECOND);
        rest2.ms = Math.floor(ts2 % SECOND);
      }
      return type2 === "custom" ? rest2 : parseFormat({ ...rest2 });
    };
    const parseFormat = (time2) => {
      const { d } = time2;
      let { h, m, s, ms } = time2;
      let formatCache = format2;
      if (formatCache.includes("DD")) {
        formatCache = formatCache.replace("DD", padZero(d));
      } else {
        h += Number(d) * 24;
      }
      if (formatCache.includes("HH")) {
        formatCache = formatCache.replace("HH", padZero(h));
      } else {
        m += Number(h) * 60;
      }
      if (formatCache.includes("mm")) {
        formatCache = formatCache.replace("mm", padZero(m));
      } else {
        s += Number(m) * 60;
      }
      if (formatCache.includes("ss")) {
        formatCache = formatCache.replace("ss", padZero(s));
      } else {
        ms += Number(s) * 1e3;
      }
      if (formatCache.includes("S")) {
        const msC = padZero(ms, 3).toString();
        if (formatCache.includes("SSS")) {
          formatCache = formatCache.replace("SSS", msC);
        } else if (formatCache.includes("SS")) {
          formatCache = formatCache.replace("SS", msC.slice(0, 2));
        } else if (formatCache.includes("S")) {
          formatCache = formatCache.replace("SS", msC.slice(0, 1));
        }
      }
      return formatCache;
    };
    const padZero = (num, length = 2) => {
      num += "";
      while (num.length < length) {
        num = `0${num}`;
      }
      return num.toString();
    };
    const pause = () => {
      cancelAnimationFrame(stateRef.current.timer);
      stateRef.current.counting = false;
      onPaused && onPaused(stateRef.current.restTime);
    };
    React.useImperativeHandle(ref, () => ({
      start: () => {
        if (!stateRef.current.counting && !autoStart) {
          stateRef.current.counting = true;
          stateRef.current.handleEndTime = Date.now() + Number(stateRef.current.restTime);
          tick();
          onRestart && onRestart(stateRef.current.restTime);
        }
      },
      pause: () => {
        cancelAnimationFrame(stateRef.current.timer);
        stateRef.current.counting = false;
        onPaused && onPaused(stateRef.current.restTime);
      },
      reset: () => {
        if (!autoStart) {
          pause();
          stateRef.current.restTime = time;
          setRestTime(time);
        }
      }
    }));
    React.useEffect(() => {
      const tranTime = formatRemainTime(stateRef.current.restTime, "custom");
      onUpdate && onUpdate(tranTime);
    }, [restTimeStamp]);
    React.useEffect(() => {
      if (stateRef.current.isIninted) {
        if (paused) {
          if (stateRef.current.counting) {
            pause();
          }
        } else {
          if (!stateRef.current.counting) {
            stateRef.current.counting = true;
            stateRef.current.handleEndTime = Date.now() + Number(stateRef.current.restTime);
            tick();
          }
          onRestart && onRestart(stateRef.current.restTime);
        }
      }
    }, [paused]);
    React.useEffect(() => {
      if (stateRef.current.isIninted) {
        initTime();
      }
    }, [endTime, startTime, remainingTime]);
    React.useEffect(() => {
      if (autoStart) {
        initTime();
      } else {
        stateRef.current.restTime = time;
        setRestTime(time);
      }
      if (!stateRef.current.isIninted) {
        stateRef.current.isIninted = true;
      }
      return componentWillUnmount;
    }, []);
    const componentWillUnmount = () => {
      destroy && cancelAnimationFrame(stateRef.current.timer);
    };
    const renderTime = (() => {
      return formatRemainTime(stateRef.current.restTime);
    })();
    return /* @__PURE__ */ React.createElement(
      "div",
      {
        className: `${classPrefix2} ${className}`,
        style: { ...style },
        ...rest
      },
      children || /* @__PURE__ */ React.createElement(
        "div",
        {
          className: `${classPrefix2}__block`,
          dangerouslySetInnerHTML: {
            __html: `${renderTime}`
          }
        }
      )
    );
  };
  const CountDown = React.forwardRef(InternalCountDown);
  CountDown.defaultProps = defaultProps$j;
  CountDown.displayName = "NutCountDown";
  const defaultProps$i = {
    ...ComponentDefaults,
    content: "",
    direction: "end",
    rows: 1,
    expandText: "",
    collapseText: "",
    symbol: "...",
    lineHeight: "20"
  };
  const classPrefix$3 = `nut-ellipsis`;
  const Ellipsis = (props) => {
    var _a2, _b;
    const {
      children,
      content,
      className,
      direction,
      rows,
      expandText,
      collapseText,
      symbol,
      lineHeight,
      onClick,
      onChange,
      ...rest
    } = { ...defaultProps$i, ...props };
    let container = null;
    let maxHeight = 0;
    const [exceeded, setExceeded] = React.useState(false);
    const [expanded, setExpanded] = React.useState(false);
    const ellipsis = React.useRef();
    const root2 = React.useRef(null);
    const classes = classnamesExports(classPrefix$3, className);
    React.useLayoutEffect(() => {
      if (content) {
        createContainer();
      }
    }, [content]);
    const createContainer = () => {
      if (!root2.current)
        return;
      const originStyle = window.getComputedStyle(root2.current);
      container = document.createElement("div");
      const styleNames = Array.prototype.slice.apply(originStyle);
      styleNames.forEach((name) => {
        container.style.setProperty(name, originStyle.getPropertyValue(name));
      });
      container.style.position = "fixed";
      container.style.left = "999999px";
      container.style.top = "999999px";
      container.style.zIndex = "-1000";
      container.style.height = "auto";
      container.style.minHeight = "auto";
      container.style.maxHeight = "auto";
      container.style.textOverflow = "clip";
      container.style.whiteSpace = "normal";
      container.style.webkitLineClamp = "unset";
      container.style.display = "block";
      const lineH = pxToNumber(
        originStyle.lineHeight === "normal" ? lineHeight : originStyle.lineHeight
      );
      maxHeight = Math.floor(
        lineH * (Number(rows) + 0.5) + pxToNumber(originStyle.paddingTop) + pxToNumber(originStyle.paddingBottom)
      );
      container.innerText = content;
      document.body.appendChild(container);
      calcEllipse();
      document.body.removeChild(container);
    };
    const calcEllipse = () => {
      if (container.offsetHeight <= maxHeight) {
        setExceeded(false);
      } else {
        setExceeded(true);
        const end = content.length;
        const middle = Math.floor((0 + end) / 2);
        const ellipsised = direction === "middle" ? tailorMiddle([0, middle], [middle, end]) : tailor(0, end);
        ellipsis.current = ellipsised;
      }
    };
    const tailor = (left, right) => {
      const actionText = expanded ? collapseText : expandText;
      const end = content.length;
      if (right - left <= 1) {
        if (direction === "end") {
          return {
            leading: content.slice(0, left) + symbol
          };
        }
        return {
          tailing: symbol + content.slice(right, end)
        };
      }
      const middle = Math.round((left + right) / 2);
      if (direction === "end") {
        container.innerText = content.slice(0, middle) + symbol + actionText;
      } else {
        container.innerText = actionText + symbol + content.slice(middle, end);
      }
      if (container.offsetHeight <= maxHeight) {
        if (direction === "end") {
          return tailor(middle, right);
        }
        return tailor(left, middle);
      }
      if (direction === "end") {
        return tailor(left, middle);
      }
      return tailor(middle, right);
    };
    const tailorMiddle = (leftPart, rightPart) => {
      const actionText = expanded ? collapseText : expandText;
      const end = content.length;
      if (leftPart[1] - leftPart[0] <= 1 && rightPart[1] - rightPart[0] <= 1) {
        return {
          leading: content.slice(0, leftPart[0]) + symbol,
          tailing: symbol + content.slice(rightPart[1], end)
        };
      }
      const leftPartMiddle = Math.floor((leftPart[0] + leftPart[1]) / 2);
      const rightPartMiddle = Math.ceil((rightPart[0] + rightPart[1]) / 2);
      container.innerText = content.slice(0, leftPartMiddle) + symbol + actionText + symbol + content.slice(rightPartMiddle, end);
      if (container.offsetHeight <= maxHeight) {
        return tailorMiddle(
          [leftPartMiddle, leftPart[1]],
          [rightPart[0], rightPartMiddle]
        );
      }
      return tailorMiddle(
        [leftPart[0], leftPartMiddle],
        [rightPartMiddle, rightPart[1]]
      );
    };
    const pxToNumber = (value) => {
      if (!value)
        return 0;
      const match = value.match(/^\d*(\.\d*)?/);
      return match ? Number(match[0]) : 0;
    };
    const clickHandle = (type2) => {
      if (type2 === 1) {
        setExpanded(true);
        onChange && onChange("expand");
      } else {
        setExpanded(false);
        onChange && onChange("collapse");
      }
    };
    const handleClick2 = () => {
      onClick && onClick();
    };
    return /* @__PURE__ */ React.createElement("div", { className: classes, onClick: handleClick2, ref: root2, ...rest }, /* @__PURE__ */ React.createElement("div", null, !exceeded ? content : null, exceeded && !expanded ? /* @__PURE__ */ React.createElement(React.Fragment, null, (_a2 = ellipsis.current) == null ? void 0 : _a2.leading, expandText ? /* @__PURE__ */ React.createElement(
      "span",
      {
        className: "nut-ellipsis-text",
        onClick: (e) => {
          e.stopPropagation();
          clickHandle(1);
        }
      },
      expandText
    ) : null, (_b = ellipsis.current) == null ? void 0 : _b.tailing) : null, exceeded && expanded ? /* @__PURE__ */ React.createElement(React.Fragment, null, content, expandText ? /* @__PURE__ */ React.createElement(
      "span",
      {
        className: "nut-ellipsis-text",
        onClick: (e) => {
          e.stopPropagation();
          clickHandle(2);
        }
      },
      collapseText
    ) : null) : null));
  };
  Ellipsis.defaultProps = defaultProps$i;
  Ellipsis.displayName = "NutEllipsis";
  const defaultProps$h = {
    ...ComponentDefaults,
    source: {
      type: {},
      src: ""
    },
    options: {
      controls: true,
      muted: false,
      // 默认不是静音
      autoplay: false,
      poster: "",
      playsinline: false,
      loop: false
    }
  };
  const classPrefix$2 = `nut-video`;
  const Video = (props) => {
    const {
      children,
      source,
      options: options2,
      className,
      onPlay,
      onPause,
      onPlayEnd,
      ...restProps
    } = {
      ...defaultProps$h,
      ...props
    };
    const rootRef = React.useRef(null);
    const classes = classnamesExports(className, classPrefix$2);
    React.useEffect(() => {
      init();
    }, []);
    const init = () => {
      if (rootRef.current) {
        const videoRef = rootRef.current;
        if (options2.autoplay) {
          setTimeout(() => {
            videoRef.play();
          }, 200);
        }
        if (options2.playsinline) {
          videoRef.setAttribute("playsinline", String(options2.playsinline));
          videoRef.setAttribute("webkit-playsinline", String(options2.playsinline));
          videoRef.setAttribute("x5-video-player-type", "h5-page");
          videoRef.setAttribute("x5-video-player-fullscreen", "false");
        }
        videoRef.addEventListener("play", () => {
          onPlay && onPlay(videoRef);
        });
        videoRef.addEventListener("pause", () => {
          onPause && onPause(videoRef);
        });
        videoRef.addEventListener("ended", () => {
          videoRef.currentTime = 0;
          onPlayEnd && onPlayEnd(videoRef);
        });
      }
    };
    return /* @__PURE__ */ React.createElement("div", { className: classes, ...restProps }, /* @__PURE__ */ React.createElement(
      "video",
      {
        className: "nut-video-player",
        muted: options2.muted,
        autoPlay: options2.autoplay,
        loop: options2.loop,
        poster: options2.poster,
        controls: options2.controls,
        ref: rootRef,
        src: source.src
      },
      /* @__PURE__ */ React.createElement("source", { src: source.src, type: source.type }),
      /* @__PURE__ */ React.createElement("track", { kind: "captions" })
    ));
  };
  Video.defaultProps = defaultProps$h;
  Video.displayName = "NutVideo";
  const DataContext$1 = React.createContext({});
  const defaultProps$g = {
    total: 3,
    current: 0,
    direction: "horizontal"
  };
  const classPrefix$1 = `nut-indicator`;
  const Indicator = (props) => {
    const { total, current, children, className, direction, ...rest } = {
      ...defaultProps$g,
      ...props
    };
    const classes = classnamesExports({
      [`${classPrefix$1}__vertical`]: direction === "vertical"
    });
    const renderElement = () => {
      const childs = [];
      for (let item = 0; item < total; item++) {
        childs.push(
          item === current ? children || /* @__PURE__ */ React.createElement(
            "div",
            {
              key: item,
              className: `${classPrefix$1}__dot ${classPrefix$1}__active`
            }
          ) : /* @__PURE__ */ React.createElement("div", { key: item, className: `${classPrefix$1}__dot` })
        );
      }
      return childs;
    };
    return /* @__PURE__ */ React.createElement("div", { className: classnamesExports(classes, className), ...rest }, renderElement());
  };
  Indicator.defaultProps = defaultProps$g;
  Indicator.displayName = "NutIndicator";
  const defaultProps$f = {
    width: typeof window === "object" ? window.innerWidth : 375,
    height: 0,
    duration: 500,
    defaultValue: 0,
    autoPlay: 0,
    direction: "horizontal",
    indicator: false,
    loop: false,
    touchable: true,
    preventDefault: true,
    stopPropagation: true,
    center: false,
    className: ""
  };
  const DISTANCE = 5;
  const Swiper = React.forwardRef((props, ref) => {
    const propSwiper = { ...defaultProps$f, ...props };
    const {
      children,
      direction,
      className,
      onChange,
      defaultValue,
      indicator,
      touchable,
      preventDefault: preventDefault2,
      stopPropagation,
      autoPlay,
      center,
      ...rest
    } = propSwiper;
    const container = React.useRef(null);
    const innerRef = React.useRef(null);
    const swiperRef = React.useRef({
      moving: false,
      autoplayTimer: null,
      width: 0,
      height: 0,
      offset: 0,
      size: 0
    });
    const isVertical = direction === "vertical";
    const [rect, setRect] = React.useState(null);
    let [active, setActive] = React.useState(0);
    const [width, setWidth] = React.useState(0);
    const [height, setHeight] = React.useState(0);
    const [offset, setOffset] = React.useState(0);
    const [childOffset, setChildOffset] = React.useState([]);
    const [ready, setReady] = React.useState(false);
    let size = isVertical ? height : width;
    const [touch] = React.useState({
      startX: 0,
      startY: 0,
      deltaX: 0,
      deltaY: 0,
      offsetX: 0,
      offsetY: 0,
      stateDirection: "",
      delta: 0,
      touchTime: 0
    });
    const { childs, childCount } = React.useMemo(() => {
      let childCount2 = 0;
      const childs2 = React.Children.map(props.children, (child) => {
        if (!React.isValidElement(child))
          return null;
        childCount2++;
        return child;
      });
      return {
        childs: childs2,
        childCount: childCount2
      };
    }, [props.children]);
    let trackSize = childCount * Number(size);
    const parent = {
      propSwiper,
      size
    };
    const minOffset = (() => {
      if (rect) {
        const base = isVertical ? rect.height : rect.width;
        return base - Number(size) * childCount;
      }
      return 0;
    })();
    const stopAutoPlay = () => {
      clearTimeout(swiperRef.current.autoplayTimer);
      swiperRef.current.autoplayTimer = null;
    };
    const startPlay = () => {
      if (propSwiper.autoPlay <= 0 || childCount <= 1)
        return;
      stopAutoPlay();
      swiperRef.current.autoplayTimer = setTimeout(() => {
        next();
        startPlay();
      }, Number(propSwiper.autoPlay));
    };
    const resetPosition = () => {
      swiperRef.current.moving = true;
      if (active <= -1) {
        move({ pace: childCount });
      }
      if (active >= childCount) {
        move({ pace: -childCount });
      }
    };
    const prev = () => {
      resetPosition();
      resetTouchDetails();
      requestFrame(() => {
        requestFrame(() => {
          swiperRef.current.moving = false;
          move({
            pace: -1,
            isEmit: true
          });
        });
      });
    };
    const next = () => {
      resetPosition();
      resetTouchDetails();
      requestFrame(() => {
        requestFrame(() => {
          swiperRef.current.moving = false;
          move({
            pace: 1,
            isEmit: true
          });
        });
      });
    };
    const to2 = (index) => {
      resetPosition();
      resetTouchDetails();
      requestFrame(() => {
        requestFrame(() => {
          swiperRef.current.moving = false;
          let targetIndex;
          if (props.loop && childCount === index) {
            targetIndex = active === 0 ? 0 : index;
          } else {
            targetIndex = index % childCount;
          }
          move({
            pace: targetIndex - active,
            isEmit: true
          });
        });
      });
    };
    const resize = () => {
      init(active);
    };
    const move = ({
      pace = 0,
      offset: offset2 = 0,
      isEmit = false,
      movingStatus = false
    }) => {
      if (childCount <= 1)
        return;
      const targetActive = getActive(pace);
      const targetOffset = getOffset(targetActive, offset2);
      if (props.loop) {
        if (Array.isArray(children) && children[0] && targetOffset !== minOffset) {
          const rightBound = targetOffset < minOffset;
          childOffset[0] = rightBound ? trackSize : 0;
        }
        if (Array.isArray(children) && children[childCount - 1] && targetOffset !== 0) {
          const leftBound = targetOffset > 0;
          childOffset[childCount - 1] = leftBound ? -trackSize : 0;
        }
        setChildOffset(childOffset);
      }
      if (isEmit && active !== targetActive) {
        props.onChange && props.onChange((targetActive + childCount) % childCount);
      }
      active = targetActive;
      setActive(targetActive);
      setOffset(targetOffset);
      getStyle(targetOffset);
    };
    const getActive = (pace) => {
      if (pace) {
        const _active = active + pace;
        if (props.loop) {
          return range2(_active, -1, childCount);
        }
        return range2(_active, 0, childCount - 1);
      }
      return active;
    };
    const getOffset = (active2, offset2 = 0) => {
      let currentPosition = active2 * Number(size);
      if (!props.loop) {
        currentPosition = Math.min(currentPosition, -minOffset);
      }
      let targetOffset = offset2 - currentPosition;
      if (!props.loop) {
        targetOffset = range2(targetOffset, minOffset, 0);
      }
      return targetOffset;
    };
    const requestFrame = (fn) => {
      window.requestAnimationFrame.call(window, fn);
    };
    const range2 = (num, min, max) => {
      return Math.min(Math.max(num, min), max);
    };
    const getDirection2 = (x2, y2) => {
      if (x2 > y2 && x2 > DISTANCE)
        return "horizontal";
      if (y2 > x2 && y2 > DISTANCE)
        return "vertical";
      return "";
    };
    const resetTouchDetails = () => {
      touch.startX = 0;
      touch.startY = 0;
      touch.deltaX = 0;
      touch.deltaY = 0;
      touch.offsetX = 0;
      touch.offsetY = 0;
      touch.delta = 0;
      touch.stateDirection = "";
      touch.touchTime = 0;
    };
    const touchStart = (e) => {
      resetTouchDetails();
      touch.startX = e.touches[0].clientX;
      touch.startY = e.touches[0].clientY;
    };
    const handleTouchMove = (e) => {
      touch.deltaX = e.touches[0].clientX - touch.startX;
      touch.deltaY = e.touches[0].clientY - touch.startY;
      touch.offsetX = Math.abs(touch.deltaX);
      touch.offsetY = Math.abs(touch.deltaY);
      touch.delta = isVertical ? touch.deltaY : touch.deltaX;
      if (!touch.stateDirection) {
        touch.stateDirection = getDirection2(touch.offsetX, touch.offsetY);
      }
    };
    const classPrefix2 = "nut-swiper";
    const contentClass = classnamesExports({
      [`${classPrefix2}__inner`]: true,
      [`${classPrefix2}__vertical`]: isVertical
    });
    const getStyle = (moveOffset = offset) => {
      const target = innerRef.current;
      let _offset = 0;
      if (!center) {
        _offset = moveOffset;
      } else {
        const _size = isVertical ? height : width;
        const val = isVertical ? rect.height - _size : rect.width - _size;
        _offset = moveOffset + (active === childCount - 1 && !props.loop ? -val / 2 : val / 2);
      }
      target.style.transitionDuration = `${swiperRef.current.moving ? 0 : props.duration}ms`;
      target.style[isVertical ? "height" : "width"] = `${Number(size) * childCount}px`;
      target.style[isVertical ? "width" : "height"] = `${isVertical ? width : height}px`;
      target.style.transform = `translate3D${!isVertical ? `(${_offset}px,0,0)` : `(0,${_offset}px,0)`}`;
    };
    const onTouchStart = (e) => {
      if (props.preventDefault)
        e.preventDefault();
      if (props.stopPropagation)
        e.stopPropagation();
      if (!props.touchable)
        return;
      touchStart(e);
      touch.touchTime = Date.now();
      stopAutoPlay();
      resetPosition();
    };
    const onTouchMove = (e) => {
      if (props.touchable && swiperRef.current.moving) {
        handleTouchMove(e);
        if (touch.stateDirection === props.direction) {
          move({
            offset: touch.delta
          });
        }
      }
    };
    const onTouchEnd = (e) => {
      if (!props.touchable || !swiperRef.current.moving)
        return;
      const speed = touch.delta / (Date.now() - touch.touchTime);
      const isShouldMove = Math.abs(speed) > 0.3 || Math.abs(touch.delta) > Number((size / 2).toFixed(2));
      let pace = 0;
      swiperRef.current.moving = false;
      if (isShouldMove && touch.stateDirection === props.direction) {
        const offset2 = isVertical ? touch.offsetY : touch.offsetX;
        if (props.loop) {
          if (offset2 > 0) {
            pace = touch.delta > 0 ? -1 : 1;
          } else {
            pace = 0;
          }
        } else {
          pace = -Math[touch.delta > 0 ? "ceil" : "floor"](touch.delta / size);
        }
        move({
          pace,
          isEmit: true
        });
      } else if (touch.delta) {
        move({ pace: 0 });
      } else {
        getStyle();
      }
      startPlay();
    };
    React.useEffect(() => {
      swiperRef.current.activeIndicator = (active + childCount) % childCount;
    }, [active]);
    const init = (active2 = +propSwiper.defaultValue) => {
      const rect2 = getRect(container == null ? void 0 : container.current);
      const currentIndex = Math.max(Math.min(childCount - 1, active2), 0);
      const width2 = +propSwiper.width || rect2.width;
      const height2 = +propSwiper.height || rect2.height;
      size = isVertical ? height2 : width2;
      trackSize = childCount * Number(size);
      const targetOffset = getOffset(currentIndex);
      swiperRef.current.moving = true;
      if (ready) {
        swiperRef.current.moving = false;
      }
      setRect(rect2);
      setActive(currentIndex);
      setWidth(width2);
      setHeight(height2);
      setOffset(targetOffset);
      setReady(true);
    };
    React.useEffect(() => {
      if (ready) {
        getStyle();
      }
    }, [isVertical, width, height, offset, ready]);
    React.useEffect(() => {
      if (ready) {
        stopAutoPlay();
        startPlay();
      }
      return () => setReady(false);
    }, [ready]);
    React.useEffect(() => {
      stopAutoPlay();
      startPlay();
    }, [children]);
    React.useEffect(() => init(), [propSwiper.defaultValue]);
    React.useEffect(() => {
      const target = container.current;
      target.addEventListener("touchstart", onTouchStart, false);
      target.addEventListener("touchmove", onTouchMove, false);
      target.addEventListener("touchend", onTouchEnd, false);
      return () => {
        target.removeEventListener("touchstart", onTouchStart, false);
        target.removeEventListener("touchmove", onTouchMove, false);
        target.removeEventListener("touchend", onTouchEnd, false);
      };
    });
    React.useEffect(() => {
      return () => stopAutoPlay();
    }, []);
    const getItemStyle = (index) => {
      const style = {};
      if (size) {
        style[direction === "horizontal" ? "width" : "height"] = `${size}px`;
      }
      const offset2 = childOffset[index];
      if (offset2) {
        style.transform = `translate3D${direction === "horizontal" ? `(${offset2}px,0,0)` : `(0,${offset2}px,0)`}`;
      }
      return style;
    };
    React.useImperativeHandle(ref, () => ({
      to: to2,
      next,
      prev,
      resize
    }));
    const renderIndicator = () => {
      if (React.isValidElement(indicator))
        return indicator;
      if (indicator === true) {
        return /* @__PURE__ */ React.createElement(
          "div",
          {
            className: classnamesExports({
              [`${classPrefix2}__indicator`]: true,
              [`${classPrefix2}__indicator-vertical`]: isVertical
            })
          },
          /* @__PURE__ */ React.createElement(
            Indicator,
            {
              current: (active + childCount) % childCount,
              total: childs == null ? void 0 : childs.length,
              direction
            }
          )
        );
      }
      return null;
    };
    return /* @__PURE__ */ React.createElement(DataContext$1.Provider, { value: parent }, /* @__PURE__ */ React.createElement(
      "div",
      {
        className: classnamesExports(classPrefix2, className),
        ref: container,
        ...rest
      },
      /* @__PURE__ */ React.createElement("div", { className: contentClass, ref: innerRef }, React.Children.map(childs, (child, index) => /* @__PURE__ */ React.createElement(
        "div",
        {
          className: `${classPrefix2}__item-wrapper`,
          style: getItemStyle(index),
          key: index
        },
        child
      ))),
      renderIndicator()
    ));
  });
  Swiper.defaultProps = defaultProps$f;
  Swiper.displayName = "NutSwiper";
  const defaultProps$e = {
    direction: "horizontal"
  };
  const SwiperItem = React.forwardRef((props, ref) => {
    const classPrefix2 = "nut-swiper-item";
    const _props = { ...defaultProps$e, ...props };
    const { className, style, children, direction, size } = _props;
    const parent = React.useContext(DataContext$1);
    const classes = classnamesExports(classPrefix2, className);
    const getStyle = () => {
      const style2 = {};
      const _direction = (parent == null ? void 0 : parent.propSwiper.direction) || direction;
      const _size = (parent == null ? void 0 : parent.size) || size;
      if (_size) {
        style2[_direction === "horizontal" ? "width" : "height"] = `${_size}px`;
      }
      return style2;
    };
    return /* @__PURE__ */ React.createElement("div", { className: classes, style: { ...style, ...getStyle() } }, children);
  });
  SwiperItem.defaultProps = defaultProps$e;
  SwiperItem.displayName = "NutSwiperItem";
  const InnerSwiper = Swiper;
  InnerSwiper.Item = SwiperItem;
  const defaultProps$d = {
    ...ComponentDefaults,
    images: [],
    videos: [],
    visible: false,
    autoPlay: 3e3,
    defaultValue: 0,
    closeOnContentClick: false,
    indicator: false,
    indicatorColor: "#fff",
    onChange: (value) => {
    },
    onClose: () => {
    }
  };
  const ImagePreview = (props) => {
    const {
      images,
      videos,
      visible,
      defaultValue,
      indicatorColor,
      indicator,
      autoPlay,
      closeOnContentClick,
      onClose
    } = props;
    const classPrefix2 = "nut-imagepreview";
    const ref = React.useRef(null);
    const [innerNo, setInnerNo] = usePropsValue({
      value: props.value,
      defaultValue,
      finalValue: defaultValue,
      onChange: (val) => {
        var _a2;
        (_a2 = props.onChange) == null ? void 0 : _a2.call(props, val);
      }
    });
    const [showPop, setShowPop] = React.useState(visible);
    const [active, setActive] = React.useState(0);
    const [maxNo] = React.useState((images == null ? void 0 : images.length) || 0 + ((videos == null ? void 0 : videos.length) || 0));
    const [store, setStore] = React.useState({
      scale: 1,
      moveable: false
    });
    const [lastTouchEndTime, setLastTouchEndTime] = React.useState(0);
    const onTouchStart = (event) => {
      const touches = event.touches;
      const events = touches[0];
      const events2 = touches[1];
      const curTouchTime = (/* @__PURE__ */ new Date()).getTime();
      if (curTouchTime - lastTouchEndTime < 300) {
        const store12 = store;
        if (store12.scale > 1) {
          store12.scale = 1;
        } else if (store12.scale === 1) {
          store12.scale = 2;
        }
        scaleNow();
      }
      const store1 = store;
      store1.moveable = true;
      if (events2) {
        store1.oriDistance = getDistance(
          {
            x: events.pageX,
            y: events.pageY
          },
          {
            x: events2.pageX,
            y: events2.pageY
          }
        );
      }
      store1.originScale = store1.scale || 1;
    };
    const onTouchMove = (event) => {
      const touches = event.touches;
      const events = touches[0];
      const events2 = touches[1];
      if (!store.moveable) {
        return;
      }
      const store1 = store;
      if (events2) {
        const curDistance = getDistance(
          {
            x: events.pageX,
            y: events.pageY
          },
          {
            x: events2.pageX,
            y: events2.pageY
          }
        );
        const curScale = curDistance / store1.oriDistance;
        store1.scale = store1.originScale * curScale;
        if (store1.scale > 3) {
          store1.scale = 3;
        }
        scaleNow();
      }
    };
    const onTouchEnd = () => {
      setLastTouchEndTime((/* @__PURE__ */ new Date()).getTime());
      const store1 = store;
      store1.moveable = false;
      if (store1.scale < 1.1 && store1.scale > 1 || store1.scale < 1) {
        store1.scale = 1;
        scaleNow();
      }
    };
    React.useEffect(() => {
      init();
    }, []);
    const init = () => {
      document.addEventListener("touchmove", onTouchMove);
      document.addEventListener("touchend", onTouchEnd);
      document.addEventListener("touchcancel", onTouchEnd);
    };
    React.useEffect(() => {
      setShowPop(visible);
    }, [visible]);
    React.useEffect(() => {
      setInnerNo(defaultValue || 1);
    }, [defaultValue]);
    React.useEffect(() => {
      setActive(innerNo);
    }, [innerNo]);
    const scaleNow = () => {
      if (ref.current) {
        ref.current.style.transform = `scale(${store.scale})`;
      }
    };
    const getDistance = (first, second) => {
      return Math.hypot(
        Math.abs(second.x - first.x),
        Math.abs(second.y - first.y)
      );
    };
    const slideChangeEnd = (page) => {
      setActive(page + 1);
    };
    const onCloseInner = () => {
      setShowPop(false);
      setActive(1);
      scaleNow();
      onClose && onClose();
      setStore({
        ...store,
        scale: 1
      });
    };
    const closeOnImg = () => {
      if (closeOnContentClick) {
        onCloseInner();
      }
    };
    return /* @__PURE__ */ React.createElement(
      Popup,
      {
        visible: showPop,
        className: `${classPrefix2}-pop`,
        style: { width: "100%" },
        onClick: onCloseInner
      },
      /* @__PURE__ */ React.createElement(
        "div",
        {
          className: classPrefix2,
          ref,
          onClick: closeOnImg,
          onTouchStart
        },
        /* @__PURE__ */ React.createElement(
          InnerSwiper,
          {
            autoPlay,
            className: `${classPrefix2}-swiper`,
            loop: true,
            preventDefault: false,
            style: {
              display: showPop ? "block" : "none",
              "--nutui-indicator-color": indicatorColor
            },
            direction: "horizontal",
            onChange: (page) => slideChangeEnd(page),
            defaultValue: innerNo && (innerNo > maxNo ? maxNo - 1 : innerNo - 1),
            indicator
          },
          (videos && videos.length > 0 ? videos.map((item, index) => {
            return /* @__PURE__ */ React.createElement(SwiperItem, { key: index }, /* @__PURE__ */ React.createElement(Video, { source: item.source, options: item.options }));
          }) : []).concat(
            images && images.length > 0 ? images.map((item, index) => {
              return /* @__PURE__ */ React.createElement(SwiperItem, { key: index }, /* @__PURE__ */ React.createElement(Image$1, { src: item.src }));
            }) : []
          )
        )
      ),
      /* @__PURE__ */ React.createElement("div", { className: `${classPrefix2}-index` }, active, "/", (images ? images.length : 0) + (videos ? videos.length : 0))
    );
  };
  ImagePreview.defaultProps = defaultProps$d;
  ImagePreview.displayName = "NutImagePreview";
  const defaultProps$c = {
    ...ComponentDefaults,
    defaultValue: 1,
    mode: "multi",
    prev: null,
    next: null,
    total: 50,
    pageSize: 10,
    itemSize: 5,
    ellipse: false
  };
  const Pagination = (props) => {
    const { locale } = useConfig();
    const {
      value,
      mode,
      prev,
      next,
      total,
      pageSize,
      itemSize,
      onChange,
      ellipse,
      itemRender,
      defaultValue,
      className,
      ...rest
    } = {
      ...defaultProps$c,
      ...props
    };
    const classPrefix2 = "nut-pagination";
    const [currentPage, setCurrentPage] = usePropsValue({
      value,
      defaultValue,
      finalValue: 1,
      onChange
    });
    const pageCount = React.useMemo(() => {
      const num = Math.ceil(total / pageSize);
      return Number.isNaN(num) ? 1 : Math.max(1, num);
    }, [total, pageSize]);
    const pages = React.useMemo(() => {
      const items = [];
      let startPage = 1;
      let endPage = pageCount;
      const partialShow = pageCount > itemSize;
      if (partialShow) {
        startPage = Math.max(currentPage - Math.floor(itemSize / 2), 1);
        endPage = startPage + itemSize - 1;
        if (endPage > pageCount) {
          endPage = pageCount;
          startPage = endPage - itemSize + 1;
        }
      }
      for (let i = startPage; i <= endPage; i++) {
        items.push({ number: i, text: i });
      }
      if (partialShow && itemSize > 0 && ellipse) {
        if (startPage > 1) {
          items.unshift({ number: startPage - 1, text: "..." });
        }
        if (endPage < pageCount) {
          items.push({ number: endPage + 1, text: "..." });
        }
      }
      return items;
    }, [currentPage, itemSize, pageCount]);
    const handleSelectPage = (curPage) => {
      if (curPage > pageCount || curPage < 1)
        return;
      setCurrentPage(curPage);
    };
    return /* @__PURE__ */ React.createElement("div", { className: classnamesExports(classPrefix2, className), ...rest }, /* @__PURE__ */ React.createElement(
      "div",
      {
        className: classnamesExports(
          `${classPrefix2}__prev`,
          mode === "multi" ? "" : "simple-border",
          currentPage === 1 ? "disabled" : ""
        ),
        onClick: (e) => handleSelectPage(currentPage - 1)
      },
      prev || locale.pagination.prev
    ), mode === "multi" && /* @__PURE__ */ React.createElement("div", { className: `${classPrefix2}__contain` }, pages.map((item, index) => {
      return /* @__PURE__ */ React.createElement(
        "div",
        {
          key: `${index}pagination`,
          className: classnamesExports(`${classPrefix2}__item`, {
            active: item.number === currentPage
          }),
          onClick: (e) => {
            item.number !== currentPage && handleSelectPage(item.number);
          }
        },
        itemRender ? itemRender(item) : item.text
      );
    })), mode === "simple" && /* @__PURE__ */ React.createElement("div", { className: `${classPrefix2}__contain` }, /* @__PURE__ */ React.createElement("div", { className: `${classPrefix2}__simple` }, currentPage, "/", pageCount)), /* @__PURE__ */ React.createElement(
      "div",
      {
        className: classnamesExports(
          `${classPrefix2}__next`,
          currentPage >= pageCount ? "disabled" : ""
        ),
        onClick: (e) => handleSelectPage(currentPage + 1)
      },
      next || locale.pagination.next
    ));
  };
  Pagination.defaultProps = defaultProps$c;
  Pagination.displayName = "NutPagination";
  const defaultProps$b = {
    ...ComponentDefaults,
    price: 0,
    symbol: "&yen;",
    digits: 2,
    thousands: false,
    position: "before",
    size: "large",
    line: false
  };
  const Price = (props) => {
    const {
      price,
      symbol,
      digits,
      thousands,
      position,
      size,
      line,
      className,
      style,
      ...rest
    } = {
      ...defaultProps$b,
      ...props
    };
    const classPrefix2 = "nut-price";
    const showSymbol = () => {
      return { __html: symbol || "" };
    };
    const checkPoint = (price2) => {
      return String(price2).indexOf(".") > 0;
    };
    const formatThousands = (num) => {
      if (Number(num) === 0) {
        num = 0;
      }
      if (checkPoint(num)) {
        num = Number(num).toFixed(digits);
        num = typeof num.split(".") === "string" ? num.split(".") : num.split(".")[0];
      } else {
        num = num.toString();
      }
      if (thousands) {
        return (num || 0).toString().replace(/(\d)(?=(?:\d{3})+$)/g, "$1,");
      }
      return num;
    };
    const formatDecimal = (decimalNum) => {
      if (Number(decimalNum) === 0) {
        decimalNum = 0;
      }
      if (checkPoint(decimalNum)) {
        decimalNum = Number(decimalNum).toFixed(digits);
        decimalNum = typeof decimalNum.split(".") === "string" ? 0 : decimalNum.split(".")[1] || 0;
      } else {
        decimalNum = 0;
      }
      const result = `0.${decimalNum}`;
      const resultFixed = Number(result).toFixed(digits);
      return String(resultFixed).substring(2, resultFixed.length);
    };
    const renderSymbol = () => {
      return /* @__PURE__ */ React.createElement(
        "div",
        {
          className: `${classPrefix2}__symbol ${classPrefix2}__symbol-${size}`,
          dangerouslySetInnerHTML: showSymbol()
        }
      );
    };
    return /* @__PURE__ */ React.createElement(
      "div",
      {
        className: `${classPrefix2} ${className} ${line ? `${classPrefix2}--line` : ""}`,
        style,
        ...rest
      },
      symbol && position === "before" ? renderSymbol() : null,
      /* @__PURE__ */ React.createElement(
        "div",
        {
          className: `${classPrefix2}__integer ${classPrefix2}__integer-${size}`
        },
        formatThousands(price)
      ),
      digits !== 0 ? /* @__PURE__ */ React.createElement(
        "div",
        {
          className: `${classPrefix2}__decimal ${classPrefix2}__decimal-${size}`
        },
        "."
      ) : null,
      /* @__PURE__ */ React.createElement(
        "div",
        {
          className: `${classPrefix2}__decimal ${classPrefix2}__decimal-${size}`
        },
        formatDecimal(price)
      ),
      symbol && position === "after" ? renderSymbol() : null
    );
  };
  Price.defaultProps = defaultProps$b;
  Price.displayName = "NutPrice";
  const DataContext = React.createContext({});
  const defaultProps$a = {
    ...ComponentDefaults,
    title: "",
    description: "",
    value: 0,
    icon: null
  };
  const Step = (props) => {
    const { children, title, description, value, icon, className, ...restProps } = {
      ...defaultProps$a,
      ...props
    };
    const parent = React.useContext(DataContext);
    const dot = parent.propSteps.dot;
    const getCurrentStatus = () => {
      const index = value;
      if (index < +parent.propSteps.value)
        return "finish";
      return index === +parent.propSteps.value ? "process" : "wait";
    };
    const handleClickStep = () => {
      var _a2, _b;
      ((_a2 = parent.propSteps) == null ? void 0 : _a2.onStepClick) && ((_b = parent.propSteps) == null ? void 0 : _b.onStepClick(value));
    };
    const classPrefix2 = `nut-step`;
    const classes = classnamesExports(
      {
        [`${classPrefix2}-${getCurrentStatus()}`]: true
      },
      className,
      classPrefix2
    );
    const renderIconClass = () => {
      if (icon) {
        return `${classPrefix2}-icon is-icon`;
      }
      if (!dot && !icon) {
        return `${classPrefix2}-icon is-text`;
      }
      return `${classPrefix2}-icon`;
    };
    return /* @__PURE__ */ React.createElement("div", { className: classes, ...restProps, onClick: handleClickStep }, /* @__PURE__ */ React.createElement("div", { className: "nut-step-head" }, /* @__PURE__ */ React.createElement("div", { className: "nut-step-line" }), /* @__PURE__ */ React.createElement("div", { className: renderIconClass() }, icon || !dot && /* @__PURE__ */ React.createElement("span", { className: "nut-step-inner" }, value))), /* @__PURE__ */ React.createElement("div", { className: "nut-step-main" }, /* @__PURE__ */ React.createElement("span", { className: "nut-step-title" }, title), description && /* @__PURE__ */ React.createElement("span", { className: "nut-step-description" }, description)));
  };
  Step.defaultProps = defaultProps$a;
  Step.displayName = "NutStep";
  const defaultProps$9 = {
    ...ComponentDefaults,
    value: 0,
    direction: "horizontal",
    dot: false
  };
  const Steps = (props) => {
    const propSteps = { ...defaultProps$9, ...props };
    const {
      children,
      value,
      direction,
      className,
      dot,
      onStepClick,
      ...restProps
    } = propSteps;
    const parentSteps = {
      propSteps
    };
    const classPrefix2 = `nut-steps`;
    const classes = classnamesExports(
      {
        [`${classPrefix2}-${direction}`]: true,
        [`${classPrefix2}-dot`]: !!props.dot
      },
      className,
      classPrefix2
    );
    return /* @__PURE__ */ React.createElement(DataContext.Provider, { value: parentSteps }, React.createElement(
      "div",
      {
        className: classes,
        ...restProps
      },
      children
    ));
  };
  Steps.defaultProps = defaultProps$9;
  Steps.displayName = "NutSteps";
  const defaultProps$8 = {
    ...ComponentDefaults,
    columns: [],
    data: [],
    bordered: true,
    striped: false,
    noData: "",
    sorterIcon: null,
    showHeader: true
  };
  const Table = (props) => {
    const { locale } = useConfig();
    defaultProps$8.noData = locale.noData;
    const {
      children,
      className,
      style,
      columns,
      data,
      bordered,
      summary,
      striped,
      noData,
      sorterIcon,
      showHeader,
      onSort,
      ...rest
    } = {
      ...defaultProps$8,
      ...props
    };
    const [curData, setCurData] = React.useState(data);
    React.useEffect(() => {
      if (data && String(data) !== String(curData)) {
        setCurData(data);
      }
    }, [data]);
    const classPrefix2 = "nut-table";
    const headerClassPrefix = `${classPrefix2}__main__head__tr`;
    const bodyClassPrefix = `${classPrefix2}__main__body__tr`;
    const cls = classnamesExports(classPrefix2, className);
    const handleSorterClick = (item) => {
      if (item.sorter) {
        onSort && onSort(item, curData);
        if (typeof item.sorter === "function") {
          setCurData(curData.sort(item.sorter));
        } else {
          setCurData(item.sorter === "default" ? curData.sort() : curData);
        }
      }
    };
    const cellClasses = (item) => {
      return {
        [`${headerClassPrefix}--border`]: props.bordered,
        [`${headerClassPrefix}--align${item.align ? item.align : ""}`]: true
      };
    };
    const getColumnItem = (value) => {
      return columns.filter((item) => item.key === value)[0];
    };
    const renderHeadCells = () => {
      return columns.map((item, index) => {
        return /* @__PURE__ */ React.createElement(
          "span",
          {
            className: classnamesExports(`${headerClassPrefix}__th`, cellClasses(item)),
            key: item.key,
            onClick: () => handleSorterClick(item)
          },
          item.title,
          " ",
          item.sorter && (sorterIcon || /* @__PURE__ */ React.createElement(x$a, { width: "12px", height: "12px" }))
        );
      });
    };
    const sortDataItem = () => {
      return columns.map((columns2) => {
        return [columns2.key, columns2.render];
      });
    };
    const renderBodyTds = (item) => {
      return sortDataItem().map(([value, render2], index) => {
        return /* @__PURE__ */ React.createElement(
          "span",
          {
            className: classnamesExports(
              `${bodyClassPrefix}__td`,
              cellClasses(getColumnItem(value))
            ),
            key: value
          },
          typeof item[value] === "function" || typeof render2 === "function" ? /* @__PURE__ */ React.createElement("div", null, render2 ? render2(item) : item[value](item)) : item[value]
        );
      });
    };
    const renderBoyTrs = () => {
      return curData.map((item, index) => {
        return /* @__PURE__ */ React.createElement("div", { className: bodyClassPrefix, key: index }, renderBodyTds(item));
      });
    };
    return /* @__PURE__ */ React.createElement("div", { className: cls, style, ...rest }, /* @__PURE__ */ React.createElement(
      "div",
      {
        className: classnamesExports(`${classPrefix2}__main`, {
          [`${classPrefix2}__main--striped`]: striped
        })
      },
      showHeader && /* @__PURE__ */ React.createElement("div", { className: `${classPrefix2}__main__head` }, /* @__PURE__ */ React.createElement("div", { className: headerClassPrefix }, renderHeadCells())),
      /* @__PURE__ */ React.createElement("div", { className: `${classPrefix2}__main__body` }, renderBoyTrs())
    ), (summary || curData.length === 0) && /* @__PURE__ */ React.createElement("div", { className: `${classPrefix2}__summary` }, summary || noData));
  };
  Table.defaultProps = defaultProps$8;
  Table.displayName = "NutTable";
  const defaultProps$7 = {
    ...ComponentDefaults,
    type: "default",
    background: "",
    color: "",
    plain: false,
    round: false,
    mark: false,
    closeable: false,
    closeIcon: null,
    onClose: (e) => {
    },
    onClick: (e) => {
    }
  };
  const Tag = (props) => {
    const {
      className,
      style,
      background,
      plain,
      type: type2,
      round,
      children,
      mark,
      closeable,
      closeIcon,
      color,
      onClick,
      onClose
    } = {
      ...defaultProps$7,
      ...props
    };
    const [tagClass, setTagClass] = React.useState("");
    const [visible, setVisible] = React.useState(true);
    const classPrefix2 = "nut-tag";
    const classes = () => {
      return classnamesExports({
        [classPrefix2]: true,
        [`${classPrefix2}--${type2}`]: type2,
        [`${classPrefix2}--plain`]: plain,
        [`${classPrefix2}--round`]: round,
        [`${classPrefix2}--mark`]: mark,
        [`${classPrefix2}--close`]: closeable,
        [`${className}`]: className
      });
    };
    React.useEffect(() => {
      setTagClass(classes());
    }, [type2, background, color, plain, round, mark, closeable, className]);
    const handleClick2 = (e) => {
      onClick && onClick(e);
    };
    const getStyle = () => {
      const style2 = {};
      if (color) {
        style2.color = color;
      } else if (background && plain) {
        style2.color = background;
      }
      if (plain) {
        style2.borderColor = background;
      } else if (background) {
        style2.background = background;
      }
      return style2;
    };
    return /* @__PURE__ */ React.createElement(React.Fragment, null, closeable ? visible && /* @__PURE__ */ React.createElement(
      "div",
      {
        className: tagClass,
        style: { ...style, ...getStyle() },
        onClick: (e) => handleClick2(e)
      },
      children && /* @__PURE__ */ React.createElement("span", { className: `${classPrefix2}-text` }, children),
      React.isValidElement(closeIcon) ? /* @__PURE__ */ React.createElement(
        "i",
        {
          className: `${classPrefix2}-custom-icon`,
          onClick: (e) => {
            setVisible(false);
            onClose && onClose(e);
          }
        },
        closeIcon
      ) : /* @__PURE__ */ React.createElement(
        x$b,
        {
          width: 12,
          height: 12,
          onClick: (e) => {
            setVisible(false);
            onClose && onClose(e);
          }
        }
      )
    ) : /* @__PURE__ */ React.createElement(
      "div",
      {
        className: tagClass,
        style: { ...style, ...getStyle() },
        onClick: (e) => handleClick2(e)
      },
      children && /* @__PURE__ */ React.createElement("span", { className: `${classPrefix2}-text` }, children)
    ));
  };
  Tag.defaultProps = defaultProps$7;
  Tag.displayName = "NutTag";
  const initPositinoCache = (reaItemSize, length = 0) => {
    let index = 0;
    const positions = Array(length);
    while (index < length) {
      positions[index] = {
        index,
        height: reaItemSize,
        width: reaItemSize,
        top: index * reaItemSize,
        bottom: (index + 1) * reaItemSize,
        left: index * reaItemSize,
        right: (index + 1) * reaItemSize
      };
      index++;
    }
    return positions;
  };
  const getListTotalSize = (positions, horizontal) => {
    const index = positions.length - 1;
    let size = 0;
    if (index < 0) {
      size = 0;
    } else {
      size = horizontal ? positions[index].right : positions[index].bottom;
    }
    return size;
  };
  const binarySearch = (positionsList, value = 0, horizontal) => {
    let start2 = 0;
    let end = positionsList.length - 1;
    let tempIndex = null;
    const key = horizontal ? "right" : "bottom";
    while (start2 <= end) {
      const midIndex = Math.floor((start2 + end) / 2);
      const midValue = positionsList[midIndex][key];
      if (midValue === value) {
        return midIndex + 1;
      }
      if (midValue < value) {
        start2 = midIndex + 1;
      } else if (midValue > value) {
        if (tempIndex === null || tempIndex > midIndex) {
          tempIndex = midIndex;
        }
        end = midIndex - 1;
      }
    }
    tempIndex = tempIndex || 0;
    return tempIndex;
  };
  const getEndIndex = ({
    list,
    startIndex,
    visibleCount,
    itemEqual = true,
    positions,
    offSetSize,
    overscan,
    sizeKey = "width"
  }) => {
    const dataLength = list.length;
    let tempIndex = null;
    if (itemEqual) {
      const endIndex = startIndex + visibleCount;
      tempIndex = dataLength > 0 ? Math.min(dataLength, endIndex) : endIndex;
    } else {
      let sizeNum = 0;
      for (let i = startIndex; i < dataLength; i++) {
        sizeNum += positions[i][sizeKey] || 0;
        if (sizeNum > offSetSize) {
          const endIndex = i + overscan;
          tempIndex = dataLength > 0 ? Math.min(dataLength, endIndex) : endIndex;
          break;
        }
      }
      if (sizeNum < offSetSize) {
        tempIndex = dataLength;
      }
    }
    tempIndex = tempIndex || 0;
    return tempIndex;
  };
  const updateItemSize = (positions, items, sizeKey) => {
    const newPos = positions.concat();
    Array.from(items).forEach((item) => {
      const index = Number(item.getAttribute("data-index"));
      const styleVal = item.getAttribute("style");
      if (styleVal && styleVal.includes("none"))
        return;
      const nowSize = item.getBoundingClientRect()[sizeKey];
      const oldSize = positions[index][sizeKey];
      const dValue = oldSize - nowSize;
      if (dValue) {
        if (sizeKey === "width") {
          newPos[index].right -= dValue;
          newPos[index][sizeKey] = nowSize;
          for (let k2 = index + 1; k2 < positions.length; k2++) {
            newPos[k2].left = positions[k2 - 1].right;
            newPos[k2].right -= dValue;
          }
        } else if (sizeKey === "height") {
          newPos[index].bottom -= dValue;
          newPos[index][sizeKey] = nowSize;
          for (let k2 = index + 1; k2 < positions.length; k2++) {
            newPos[k2].top = positions[k2 - 1].bottom;
            newPos[k2].bottom -= dValue;
          }
        }
      }
    });
  };
  const defaultProps$6 = {
    ...ComponentDefaults,
    list: [],
    itemHeight: 66,
    itemEqual: true,
    direction: "vertical",
    overscan: 2
  };
  const VirtualList = (props) => {
    const {
      list,
      itemRender,
      itemEqual,
      itemHeight,
      direction,
      overscan,
      key,
      onScroll,
      className,
      containerHeight,
      ...rest
    } = {
      ...defaultProps$6,
      ...props
    };
    const horizontal = direction === "horizontal";
    const sizeKey = horizontal ? "width" : "height";
    const scrollKey = horizontal ? "scrollLeft" : "scrollTop";
    const offsetKey = horizontal ? "left" : "top";
    const scrollRef = React.useRef(null);
    const itemsRef = React.useRef(null);
    const [positions, setPositions] = React.useState([
      {
        index: 0,
        left: 0,
        top: 0,
        bottom: 0,
        width: 0,
        height: 0,
        right: 0
      }
    ]);
    const [listTotalSize, setListTotalSize] = React.useState(99999999);
    const [visibleCount, setVisibleCount] = React.useState(0);
    const [offSetSize, setOffSetSize] = React.useState(containerHeight || 0);
    const [options2, setOptions] = React.useState({
      startOffset: 0,
      // 可视区域距离顶部的偏移量
      startIndex: 0,
      // 可视区域开始索引
      overStart: 0,
      endIndex: 10
      // 可视区域结束索引
    });
    React.useEffect(() => {
      const pos = initPositinoCache(itemHeight, list.length);
      setPositions(pos);
      const totalSize = getListTotalSize(pos, horizontal);
      setListTotalSize(totalSize);
    }, [list, itemHeight, horizontal]);
    const getElement = React.useCallback(() => {
      var _a2;
      return ((_a2 = scrollRef.current) == null ? void 0 : _a2.parentElement) || document.body;
    }, []);
    React.useEffect(() => {
      if (containerHeight)
        return;
      const size = horizontal ? getElement().offsetWidth : getElement().offsetHeight;
      setOffSetSize(size);
    }, [getElement, horizontal, containerHeight]);
    React.useEffect(() => {
      if (offSetSize === 0)
        return;
      const count = Math.ceil(offSetSize / itemHeight) + overscan;
      setVisibleCount(count);
      setOptions((options22) => {
        return { ...options22, endIndex: count };
      });
    }, [getElement, horizontal, itemHeight, overscan, offSetSize]);
    const updateTotalSize = React.useCallback(() => {
      if (!itemsRef.current)
        return;
      const items = itemsRef.current.children;
      if (!items.length)
        return;
      updateItemSize(positions, items, sizeKey);
      const totalSize = getListTotalSize(positions, horizontal);
      setListTotalSize(totalSize);
    }, [positions, sizeKey, horizontal]);
    const scroll = React.useCallback(() => {
      requestAnimationFrame((e) => {
        const scrollSize = getElement()[scrollKey];
        const startIndex = binarySearch(positions, scrollSize, horizontal);
        const overStart = startIndex - overscan > -1 ? startIndex - overscan : 0;
        if (!itemEqual) {
          updateTotalSize();
        }
        const endIndex = getEndIndex({
          list,
          startIndex,
          visibleCount,
          itemEqual,
          positions,
          offSetSize,
          sizeKey,
          overscan
        });
        const startOffset = positions[startIndex][offsetKey];
        setOptions({ startOffset, startIndex, overStart, endIndex });
        if (endIndex > list.length - 1) {
          if (onScroll) {
            onScroll();
          }
        }
      });
    }, [
      positions,
      getElement,
      list,
      visibleCount,
      itemEqual,
      updateTotalSize,
      offsetKey,
      sizeKey,
      scrollKey,
      horizontal,
      overscan,
      offSetSize
    ]);
    React.useEffect(() => {
      const element = getElement();
      element.addEventListener("scroll", scroll, false);
      return () => {
        element.removeEventListener("scroll", scroll, false);
      };
    }, [getElement, scroll]);
    return /* @__PURE__ */ React.createElement(
      "div",
      {
        className: className ? `${className} nut-virtualList-box` : "nut-virtualList-box",
        ...rest,
        style: {
          [sizeKey]: containerHeight ? `${offSetSize}px` : ""
        }
      },
      /* @__PURE__ */ React.createElement(
        "div",
        {
          ref: scrollRef,
          className: horizontal ? "nut-horizontal-box" : "nut-vertical-box",
          style: {
            position: "relative",
            [sizeKey]: `${listTotalSize}px`
          }
        },
        /* @__PURE__ */ React.createElement(
          "ul",
          {
            className: horizontal ? "nut-virtuallist-items nut-horizontal-items" : "nut-virtuallist-items nut-vertical-items",
            ref: itemsRef,
            style: {
              transform: horizontal ? `translate3d(${options2.startOffset}px,0,0)` : `translate3d(0,${options2.startOffset}px,0)`
            }
          },
          list.slice(options2.overStart, options2.endIndex).map((data, index) => {
            const { startIndex, overStart } = options2;
            const dataIndex = overStart + index;
            const styleVal = dataIndex < startIndex ? "none" : "block";
            const keyVal = key && data[key] ? data[key] : dataIndex;
            return /* @__PURE__ */ React.createElement(
              "li",
              {
                "data-index": `${dataIndex}`,
                className: dataIndex % 2 === 0 ? "nut-virtuallist-item even" : "nut-virtuallist-item odd",
                key: `${keyVal}`,
                style: { display: styleVal }
              },
              itemRender ? itemRender(data, dataIndex, index) : data
            );
          })
        )
      )
    );
  };
  VirtualList.defaultProps = defaultProps$6;
  VirtualList.displayName = "NutVirtualList";
  const defaultProps$5 = {
    ...ComponentDefaults,
    list: [],
    interval: 500,
    loop: true,
    duration: 3e3,
    rows: 3,
    gapY: 10
  };
  const classPrefix = `nut-barrage`;
  const InternalBarrage = (props, ref) => {
    const {
      className,
      interval,
      loop: loop2,
      list,
      duration,
      rows,
      gapY,
      ...restProps
    } = {
      ...defaultProps$5,
      ...props
    };
    const barrageBody = React.useRef(null);
    const barrageContainer = React.useRef(null);
    const barrageCWidth = React.useRef(0);
    const timer = React.useRef(0);
    const index = React.useRef(0);
    const classes = classnamesExports(classPrefix, className);
    React.useImperativeHandle(ref, () => ({
      add: (word) => {
        const _index = index.current % list.length;
        if (!loop2 && index.current === list.length) {
          list.splice(list.length, 0, word);
        } else {
          list.splice(_index, 0, word);
        }
      }
    }));
    React.useEffect(() => {
      if (barrageBody.current) {
        barrageCWidth.current = barrageBody.current.offsetWidth;
      }
      setTimeout(() => {
        var _a2;
        (_a2 = barrageBody.current) == null ? void 0 : _a2.style.setProperty(
          "--move-distance",
          `-${barrageCWidth.current}px`
        );
        index.current = 0;
        run();
      }, 300);
      return () => {
        clearInterval(timer.current);
      };
    }, [list]);
    const run = () => {
      clearInterval(timer.current);
      timer.current = window.setTimeout(() => {
        play();
      }, interval);
    };
    const play = () => {
      if (!loop2 && index.current >= list.length) {
        return;
      }
      const _index = loop2 ? index.current % list.length : index.current;
      const el = document.createElement(`div`);
      el.innerHTML = list[_index];
      el.classList.add("barrage-item");
      barrageContainer.current.appendChild(el);
      const width = el.offsetWidth;
      const height = el.offsetHeight;
      el.classList.add("move");
      el.style.animationDuration = `${duration}ms`;
      el.style.top = `${_index % rows * (height + gapY) + 20}px`;
      el.style.width = `${width}px`;
      el.addEventListener("animationend", () => {
        barrageContainer.current.removeChild(el);
      });
      index.current++;
      run();
    };
    return /* @__PURE__ */ React.createElement("div", { className: classes, ref: barrageBody, ...restProps }, /* @__PURE__ */ React.createElement("div", { ref: barrageContainer, className: "bContainer" }));
  };
  const Barrage = React.forwardRef(InternalBarrage);
  Barrage.defaultProps = defaultProps$5;
  Barrage.displayName = "NutBarrage";
  const defaultProps$4 = {
    ...ComponentDefaults,
    src: "",
    title: "",
    price: "",
    vipPrice: "",
    shopDescription: "",
    delivery: "",
    shopName: "",
    description: "",
    tag: "",
    priceTag: "",
    extra: ""
  };
  const Card = (props) => {
    const {
      className,
      style,
      src,
      title,
      price,
      vipPrice,
      shopDescription,
      delivery,
      shopName,
      tag,
      priceTag,
      description,
      extra,
      ...rest
    } = {
      ...defaultProps$4,
      ...props
    };
    const classPrefix2 = "nut-card";
    return /* @__PURE__ */ React.createElement("div", { className: classnamesExports(classPrefix2, className), style, ...rest }, /* @__PURE__ */ React.createElement("div", { className: `${classPrefix2}__left` }, /* @__PURE__ */ React.createElement("img", { src, alt: "" })), /* @__PURE__ */ React.createElement("div", { className: `${classPrefix2}__right` }, /* @__PURE__ */ React.createElement("div", { className: `${classPrefix2}__right-title` }, title), description, /* @__PURE__ */ React.createElement("div", { className: `${classPrefix2}right-price` }, /* @__PURE__ */ React.createElement(Price, { size: "normal", price }), priceTag || /* @__PURE__ */ React.createElement(
      Price,
      {
        size: "normal",
        className: `${classPrefix2}right-price-origin`,
        price: vipPrice
      }
    )), /* @__PURE__ */ React.createElement("div", { className: `${classPrefix2}right-other` }, tag || /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Tag, { type: "danger" }, shopDescription), /* @__PURE__ */ React.createElement(Tag, { plain: true }, delivery))), /* @__PURE__ */ React.createElement("div", { className: `${classPrefix2}right-shop` }, /* @__PURE__ */ React.createElement("div", { className: `${classPrefix2}right-shop-name` }, shopName), extra)));
  };
  Card.defaultProps = defaultProps$4;
  Card.displayName = "NutCard";
  const defaultProps$3 = {
    ...ComponentDefaults,
    activeDate: "",
    activeTime: [],
    options: [],
    optionKey: {
      valueKey: "value",
      textKey: "text",
      childrenKey: "children"
    },
    onSelect: () => {
    }
  };
  const TimeDetail = (props) => {
    const { options: options2, optionKey, className, activeDate, activeTime, onSelect } = {
      ...defaultProps$3,
      ...props
    };
    const classPrefix2 = "nut-timedetail";
    const timeList = React.useMemo(() => {
      return (options2 == null ? void 0 : options2.find(
        (item) => item[optionKey.valueKey] === activeDate
      )) || {
        [optionKey.childrenKey]: []
      };
    }, [options2, optionKey, activeDate]);
    const isActive = React.useCallback(
      (timeKey) => {
        const date2 = activeTime.find((item) => {
          return item[optionKey.valueKey] === activeDate;
        });
        if (date2 == null ? void 0 : date2[optionKey.childrenKey]) {
          const time = date2 == null ? void 0 : date2[optionKey.childrenKey].find((time2) => {
            return time2[optionKey.valueKey] === timeKey;
          });
          return time;
        }
        return false;
      },
      [activeTime, optionKey, activeDate]
    );
    return /* @__PURE__ */ React.createElement("div", { className: classnamesExports(classPrefix2, className) }, timeList[optionKey.childrenKey].map((item) => /* @__PURE__ */ React.createElement(
      "span",
      {
        className: classnamesExports(`${classPrefix2}__item`, {
          active: isActive(item[optionKey.valueKey])
        }),
        key: item[optionKey.valueKey],
        onClick: () => onSelect(item)
      },
      item[optionKey.textKey]
    )));
  };
  TimeDetail.defaultProps = defaultProps$3;
  TimeDetail.displayName = "NutTimeDetail";
  const defaultProps$2 = {
    ...ComponentDefaults,
    visible: false,
    multiple: false,
    defaultValue: [],
    options: [],
    optionKey: {
      valueKey: "value",
      textKey: "text",
      childrenKey: "children"
    }
  };
  const TimeSelect = (props) => {
    const { locale } = useConfig();
    const {
      visible,
      className,
      style,
      title,
      defaultValue,
      options: options2,
      optionKey,
      multiple,
      onSelect,
      onDateChange,
      onTimeChange,
      ...rest
    } = {
      ...defaultProps$2,
      ...props
    };
    const [activeDate, setActiveDate] = React.useState(() => {
      if (defaultValue == null ? void 0 : defaultValue.length) {
        return defaultValue[0][optionKey.valueKey];
      }
      if (options2 == null ? void 0 : options2.length) {
        return options2[0][optionKey.valueKey];
      }
      return "";
    });
    const [activeTime, setActiveTime] = React.useState(
      () => defaultValue || []
    );
    const classPrefix2 = "nut-timeselect";
    const closeFun = () => {
      onSelect && onSelect(activeTime);
    };
    const handleSelectTime = (selectTime) => {
      let newActiveTime = [...activeTime];
      const date2 = newActiveTime.find((item) => {
        return item[optionKey.valueKey] === activeDate;
      });
      if (date2) {
        const timeIndex = date2[optionKey.childrenKey].findIndex(
          (time) => {
            return time[optionKey.valueKey] === selectTime[optionKey.valueKey];
          }
        );
        if (timeIndex > -1) {
          if (multiple) {
            date2[optionKey.childrenKey].splice(timeIndex, 1);
          } else {
            newActiveTime = [];
          }
        } else if (multiple) {
          date2[optionKey.childrenKey].push({ ...selectTime });
        } else {
          newActiveTime = [
            {
              [optionKey.valueKey]: activeDate,
              [optionKey.childrenKey]: [{ ...selectTime }]
            }
          ];
        }
      } else if (multiple) {
        newActiveTime.push({
          [optionKey.valueKey]: activeDate,
          [optionKey.childrenKey]: [{ ...selectTime }]
        });
      } else {
        newActiveTime = [
          {
            [optionKey.valueKey]: activeDate,
            [optionKey.childrenKey]: [{ ...selectTime }]
          }
        ];
      }
      newActiveTime = newActiveTime.filter((item) => {
        var _a2;
        return ((_a2 = item[optionKey.childrenKey]) == null ? void 0 : _a2.length) > 0;
      });
      setActiveTime(newActiveTime);
      onTimeChange && onTimeChange(selectTime, newActiveTime);
    };
    const handleChange = (date2) => {
      setActiveDate(date2[optionKey.valueKey]);
      onDateChange && onDateChange(date2, activeTime);
    };
    return /* @__PURE__ */ React.createElement(
      Popup,
      {
        closeable: true,
        round: true,
        visible,
        position: "bottom",
        style: {
          width: "100%",
          height: "20%",
          ...style
        },
        onClose: closeFun,
        ...rest
      },
      /* @__PURE__ */ React.createElement("div", { className: classnamesExports(classPrefix2, className) }, /* @__PURE__ */ React.createElement("div", { className: `${classPrefix2}__title` }, title || locale.timeselect.pickupTime), /* @__PURE__ */ React.createElement("div", { className: `${classPrefix2}__content` }, /* @__PURE__ */ React.createElement("div", { className: `${classPrefix2}__content-left` }, options2.map((item) => /* @__PURE__ */ React.createElement(
        "div",
        {
          key: item[optionKey.valueKey],
          className: classnamesExports("nut-timepannel", {
            active: item[optionKey.valueKey] === activeDate
          }),
          onClick: () => handleChange(item)
        },
        item[optionKey.textKey]
      ))), /* @__PURE__ */ React.createElement(
        TimeDetail,
        {
          options: options2,
          optionKey,
          activeDate,
          activeTime,
          onSelect: handleSelectTime
        }
      )))
    );
  };
  TimeSelect.defaultProps = defaultProps$2;
  TimeSelect.displayName = "NutTimeSelect";
  const defaultProps$1 = {
    ...ComponentDefaults,
    value: 0,
    digits: 2,
    symbol: false,
    zero: false,
    left: false,
    sync: true,
    color: "#333",
    riseColor: "#fa2c19",
    dropColor: "#64b578",
    riseIcon: null,
    dropIcon: null
  };
  const TrendArrow = (props) => {
    const {
      value,
      digits,
      symbol,
      zero,
      left,
      sync: sync2,
      color,
      riseColor,
      dropColor,
      riseIcon,
      dropIcon,
      className,
      style,
      children,
      ...rest
    } = { ...defaultProps$1, ...props };
    const classPrefix2 = "nut-trendarrow";
    const rateTrend = React.useRef(value > 0);
    const myFixed = (num, digit = 2) => {
      if (Object.is(parseFloat(num), NaN)) {
        return console.warn(`传入的值：${num}不是一个数字`);
      }
      num = parseFloat(num);
      const numPow = Math.pow(10, digit);
      return (Math.round((num + Number.EPSILON) * numPow) / numPow).toFixed(digit);
    };
    const calcStyle = (() => {
      const arrowColor = rateTrend.current ? riseColor : dropColor;
      const textEquArrowColor = sync2 ? arrowColor : color;
      const style2 = {
        color: value === 0 ? color : textEquArrowColor
      };
      return style2;
    })();
    const calcRate = (() => {
      rateTrend.current = value > 0;
      const absRate = Math.abs(value);
      if (!zero && value === 0) {
        return "--";
      }
      const resultRate = `${// eslint-disable-next-line no-nested-ternary
      symbol && value !== 0 ? rateTrend.current ? "+" : "-" : ""}${myFixed(Number(absRate), digits)}%`;
      return resultRate;
    })();
    const calcIconProps = (() => {
      const iconProps = {
        color: rateTrend.current ? riseColor : dropColor
      };
      return iconProps;
    })();
    const renderContent = (left2) => {
      const classNameSuffix = !left2 ? "icon-after" : "icon-before";
      return /* @__PURE__ */ React.createElement(
        "span",
        {
          className: `${classPrefix2}__${classNameSuffix} ${classPrefix2}__value`,
          style: calcStyle
        },
        calcRate
      );
    };
    return /* @__PURE__ */ React.createElement("div", { className: `${classPrefix2} ${className}`, style, ...rest }, !left && renderContent(!left), Number(value) !== 0 && /* @__PURE__ */ React.createElement(React.Fragment, null, rateTrend.current ? /* @__PURE__ */ React.createElement(React.Fragment, null, riseIcon || /* @__PURE__ */ React.createElement(y, { color: calcIconProps.color })) : /* @__PURE__ */ React.createElement(React.Fragment, null, dropIcon || /* @__PURE__ */ React.createElement(y$1, { color: calcIconProps.color }))), left && renderContent(!left));
  };
  TrendArrow.defaultProps = defaultProps$1;
  TrendArrow.displayName = "NutTrendArrow";
  const defaultProps = {
    ...ComponentDefaults,
    content: "",
    fullPage: true,
    zIndex: 2e3,
    gapX: 24,
    gapY: 48,
    width: 120,
    height: 64,
    image: "",
    imageWidth: 120,
    imageHeight: 64,
    rotate: -22,
    color: "rgba(0,0,0,.15)",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: 14
  };
  const WaterMark = (props) => {
    const { locale } = useConfig();
    const {
      content,
      fullPage,
      zIndex,
      className,
      gapX,
      gapY,
      width,
      height,
      image,
      imageWidth,
      imageHeight,
      rotate,
      color,
      fontStyle,
      fontFamily,
      fontWeight,
      fontSize,
      style
    } = {
      ...defaultProps,
      ...props
    };
    const [base64Url, setBase64Url] = React.useState("");
    const classPrefix2 = "nut-watermark";
    const classes = classnamesExports(classPrefix2, {
      [`${classPrefix2}-full-page`]: fullPage
    });
    const cls = classnamesExports(classes, className);
    React.useEffect(() => {
      init();
    }, []);
    const init = () => {
      const canvas = document.createElement("canvas");
      const ratio = window.devicePixelRatio;
      const ctx2 = canvas.getContext("2d");
      const canvasWidth = `${(gapX + width) * ratio}px`;
      const canvasHeight = `${(gapY + height) * ratio}px`;
      const markWidth = width * ratio;
      const markHeight = height * ratio;
      canvas.setAttribute("width", canvasWidth);
      canvas.setAttribute("height", canvasHeight);
      if (ctx2) {
        if (image) {
          ctx2.translate(markWidth / 2, markHeight / 2);
          ctx2.rotate(Math.PI / 180 * Number(rotate));
          const img = new Image();
          img.crossOrigin = "anonymous";
          img.referrerPolicy = "no-referrer";
          img.src = image;
          img.onload = () => {
            ctx2.drawImage(
              img,
              -imageWidth * ratio / 2,
              -imageHeight * ratio / 2,
              imageWidth * ratio,
              imageHeight * ratio
            );
            ctx2.restore();
            setBase64Url(canvas.toDataURL());
          };
        } else if (content) {
          ctx2.textBaseline = "middle";
          ctx2.textAlign = "center";
          ctx2.translate(markWidth / 2, markHeight / 2);
          ctx2.rotate(Math.PI / 180 * Number(rotate));
          const markSize = Number(fontSize) * ratio;
          ctx2.font = `${fontStyle} normal ${fontWeight} ${markSize}px/${markHeight}px ${fontFamily}`;
          ctx2.fillStyle = color;
          ctx2.fillText(content, 0, 0);
          ctx2.restore();
          setBase64Url(canvas.toDataURL());
        }
      } else {
        throw new Error(locale.watermark.errorCanvasTips);
      }
    };
    return /* @__PURE__ */ React.createElement(
      "div",
      {
        className: cls,
        style: {
          zIndex,
          backgroundSize: `${gapX + width}px`,
          backgroundImage: `url('${base64Url}')`,
          ...style
        }
      }
    );
  };
  WaterMark.defaultProps = defaultProps;
  WaterMark.displayName = "NutWaterMark";
  exports2.ActionSheet = ActionSheet;
  exports2.Address = Address;
  exports2.Animate = Animate;
  exports2.AnimatingNumbers = AnimatingNumbers;
  exports2.Audio = Audio;
  exports2.Avatar = Avatar;
  exports2.AvatarGroup = AvatarGroup;
  exports2.BackTop = BackTop;
  exports2.Badge = Badge;
  exports2.Barrage = Barrage;
  exports2.Button = Button;
  exports2.Calendar = Calendar;
  exports2.CalendarItem = CalendarItem;
  exports2.Card = Card;
  exports2.Cascader = Cascader;
  exports2.Cell = Cell;
  exports2.CellGroup = CellGroup;
  exports2.Checkbox = Checkbox;
  exports2.CheckboxGroup = CheckboxGroup;
  exports2.CircleProgress = CircleProgress;
  exports2.Col = Col;
  exports2.Collapse = Collapse;
  exports2.CollapseItem = CollapseItem;
  exports2.ConfigProvider = ConfigProvider;
  exports2.CountDown = CountDown;
  exports2.DatePicker = DatePicker;
  exports2.Dialog = Dialog;
  exports2.Divider = Divider;
  exports2.Drag = Drag;
  exports2.Elevator = Elevator;
  exports2.Ellipsis = Ellipsis;
  exports2.Empty = Empty;
  exports2.FixedNav = FixedNav;
  exports2.Form = Form;
  exports2.FormItem = FormItem;
  exports2.Grid = Grid;
  exports2.GridItem = GridItem;
  exports2.Image = Image$1;
  exports2.ImagePreview = ImagePreview;
  exports2.Indicator = Indicator;
  exports2.InfiniteLoading = InfiniteLoading;
  exports2.Input = Input;
  exports2.InputNumber = InputNumber;
  exports2.Layout = Layout;
  exports2.Menu = Menu;
  exports2.MenuItem = MenuItem;
  exports2.NavBar = NavBar;
  exports2.NoticeBar = NoticeBar;
  exports2.Notify = Notify;
  exports2.NumberKeyboard = NumberKeyboard;
  exports2.Overlay = Overlay;
  exports2.Pagination = Pagination;
  exports2.Picker = Picker;
  exports2.Popover = Popover;
  exports2.Popup = Popup;
  exports2.Price = Price;
  exports2.Progress = Progress;
  exports2.PullToRefresh = PullToRefresh;
  exports2.Radio = Radio;
  exports2.RadioGroup = RadioGroup;
  exports2.Range = Range;
  exports2.Rate = Rate;
  exports2.Row = Row;
  exports2.SearchBar = SearchBar;
  exports2.ShortPassword = ShortPassword;
  exports2.SideNavBar = SideNavBar;
  exports2.SideNavBarItem = SideNavBarItem;
  exports2.Signature = Signature;
  exports2.Skeleton = Skeleton;
  exports2.Space = Space;
  exports2.Step = Step;
  exports2.Steps = Steps;
  exports2.Sticky = Sticky;
  exports2.SubSideNavBar = SubSideNavBar;
  exports2.Swipe = Swipe;
  exports2.Swiper = InnerSwiper;
  exports2.SwiperItem = SwiperItem;
  exports2.Switch = Switch;
  exports2.TabPane = TabPane;
  exports2.Tabbar = Tabbar;
  exports2.TabbarItem = TabbarItem;
  exports2.Table = Table;
  exports2.Tabs = Tabs;
  exports2.Tag = Tag;
  exports2.TextArea = TextArea;
  exports2.TimeDetail = TimeDetail;
  exports2.TimeSelect = TimeSelect;
  exports2.Toast = Toast;
  exports2.TrendArrow = TrendArrow;
  exports2.Uploader = Uploader;
  exports2.Video = Video;
  exports2.VirtualList = VirtualList;
  exports2.WaterMark = WaterMark;
  Object.defineProperty(exports2, Symbol.toStringTag, { value: "Module" });
});
