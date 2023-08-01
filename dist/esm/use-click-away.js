import { useEffect } from "react";
import { i as isFunction } from "./index.js";
var getTargetElement = function getTargetElement2(target) {
  var targetElement;
  if (isFunction(target)) {
    targetElement = target();
  } else if ("current" in target) {
    targetElement = target.current;
  } else {
    targetElement = target;
  }
  return targetElement;
};
function useClickAway(onClickAway, target) {
  var eventName = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "click";
  var useCapture = arguments.length > 3 ? arguments[3] : void 0;
  var isListener = arguments.length > 4 ? arguments[4] : void 0;
  var outerVar = arguments.length > 5 ? arguments[5] : void 0;
  var handler = function handler2(event) {
    var targets = Array.isArray(target) ? target : [target];
    if (targets.some(function(item) {
      var targetElement = getTargetElement(item);
      return !targetElement || targetElement.contains(event.target);
    })) {
      return;
    }
    if (outerVar) {
      onClickAway();
    }
  };
  useEffect(function() {
    if (isListener) {
      window.addEventListener(eventName, handler, useCapture);
    } else {
      window.removeEventListener(eventName, handler, useCapture);
    }
    return function() {
      window.removeEventListener(eventName, handler, useCapture);
    };
  }, [target]);
}
export {
  useClickAway as u
};
