var pxCheck = function pxCheck2(value) {
  return Number.isNaN(Number(value)) ? String(value) : "".concat(value, "px");
};
export {
  pxCheck as p
};
