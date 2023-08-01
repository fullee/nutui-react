import _slicedToArray from "@babel/runtime/helpers/slicedToArray";
import React__default, { useRef, useCallback } from "react";
function useForceUpdate() {
  var _React__default$useSt = React__default.useState(), _React__default$useSt2 = _slicedToArray(_React__default$useSt, 2), updateState = _React__default$useSt2[1];
  return React__default.useCallback(function() {
    return updateState({});
  }, []);
}
function usePropsValue(_ref) {
  var value = _ref.value, defaultValue = _ref.defaultValue, finalValue = _ref.finalValue, _ref$onChange = _ref.onChange, onChange = _ref$onChange === void 0 ? function(value2) {
  } : _ref$onChange;
  var forceUpdate = useForceUpdate();
  var dfValue = defaultValue !== void 0 ? defaultValue : finalValue;
  var stateRef = useRef(value !== void 0 ? value : dfValue);
  if (value !== void 0) {
    stateRef.current = value;
  }
  var setState = useCallback(function(v) {
    var prevState = stateRef.current;
    stateRef.current = v;
    if (prevState !== stateRef.current) {
      forceUpdate();
    }
    onChange === null || onChange === void 0 ? void 0 : onChange(v);
  }, [value, onChange]);
  return [stateRef.current, setState];
}
export {
  useForceUpdate as a,
  usePropsValue as u
};
