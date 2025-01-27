function isWindow(val) {
  return val === window;
}
var getRect = function getRect2(elementRef) {
  var element = elementRef;
  if (isWindow(element)) {
    var width = element.innerWidth;
    var height = element.innerHeight;
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
export {
  getRect as g
};
