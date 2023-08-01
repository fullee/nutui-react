function requestAniFrame() {
  if (typeof window !== "undefined") {
    var _window = window;
    return _window.requestAnimationFrame || _window.webkitRequestAnimationFrame || function(callback) {
      _window.setTimeout(callback, 1e3 / 60);
    };
  }
  return function(callback) {
    setTimeout(callback, 1e3 / 60);
  };
}
var requestAniFrame$1 = requestAniFrame();
export {
  requestAniFrame$1 as r
};
