import _slicedToArray from "@babel/runtime/helpers/slicedToArray";
import { useState } from "react";
var MIN_DISTANCE = 10;
function getDirection(x, y) {
  if (x > y && x > MIN_DISTANCE) {
    return "horizontal";
  }
  if (y > x && y > MIN_DISTANCE) {
    return "vertical";
  }
  return "";
}
function useTouch() {
  var _useState = useState(0), _useState2 = _slicedToArray(_useState, 2), startX = _useState2[0], SetStartX = _useState2[1];
  var _useState3 = useState(0), _useState4 = _slicedToArray(_useState3, 2), startY = _useState4[0], SetStartY = _useState4[1];
  var _useState5 = useState(0), _useState6 = _slicedToArray(_useState5, 2), moveX = _useState6[0], SetMoveX = _useState6[1];
  var _useState7 = useState(0), _useState8 = _slicedToArray(_useState7, 2), moveY = _useState8[0], SetMoveY = _useState8[1];
  var _useState9 = useState(0), _useState10 = _slicedToArray(_useState9, 2), deltaX = _useState10[0], SetDeltaX = _useState10[1];
  var _useState11 = useState(0), _useState12 = _slicedToArray(_useState11, 2), deltaY = _useState12[0], SetDeltaY = _useState12[1];
  var _useState13 = useState(0), _useState14 = _slicedToArray(_useState13, 2), offsetX = _useState14[0], SetOffsetX = _useState14[1];
  var _useState15 = useState(0), _useState16 = _slicedToArray(_useState15, 2), offsetY = _useState16[0], SetOffsetY = _useState16[1];
  var _useState17 = useState(""), _useState18 = _slicedToArray(_useState17, 2), direction = _useState18[0], SetDirection = _useState18[1];
  var isVertical = function isVertical2() {
    return direction === "vertical";
  };
  var isHorizontal = function isHorizontal2() {
    return direction === "horizontal";
  };
  var reset = function reset2() {
    SetDeltaX(0);
    SetDeltaY(0);
    SetOffsetX(0);
    SetOffsetY(0);
    SetDirection("");
  };
  var start = function start2(event) {
    reset();
    SetStartX(event.touches[0].clientX);
    SetStartY(event.touches[0].clientY);
  };
  var move = function move2(event) {
    var touch = event.touches[0];
    var dX = touch.clientX - startX;
    var dY = touch.clientY - startY;
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
    start,
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
export {
  useTouch as u
};
