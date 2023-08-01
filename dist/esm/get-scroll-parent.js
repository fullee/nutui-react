var canUseDom = !!(typeof window !== "undefined" && typeof document !== "undefined" && window.document && window.document.createElement);
var defaultRoot = canUseDom ? window : void 0;
var overflowStylePatterns = ["scroll", "auto", "overlay"];
function isElement(node) {
  var ELEMENT_NODE_TYPE = 1;
  return node.nodeType === ELEMENT_NODE_TYPE;
}
function getScrollParent(el) {
  var root = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : defaultRoot;
  var node = el;
  while (node && node !== root && isElement(node)) {
    if (node === document.body) {
      return root;
    }
    var _window$getComputedSt = window.getComputedStyle(node), overflowY = _window$getComputedSt.overflowY;
    if (overflowStylePatterns.includes(overflowY) && node.scrollHeight > node.clientHeight) {
      return node;
    }
    node = node.parentNode;
  }
  return root;
}
export {
  canUseDom as c,
  getScrollParent as g
};
