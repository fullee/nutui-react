import { createContext } from "react";
var handleClick = function handleClick2(e) {
  e.stopPropagation();
  var isIcon = e.target.className.includes("arrow-icon");
  var isTitle = e.target.className.includes("__title") || isIcon;
  var currentClass = e.currentTarget.className;
  var isShow = currentClass.includes("sidenavbar-show");
  var arrowIcon = e.currentTarget.querySelector(".arrow-icon");
  var iconClass = arrowIcon.className;
  if (isTitle) {
    e.currentTarget.className = isShow ? currentClass.replace("sidenavbar-show", "sidenavbar-hide") : currentClass.replace("sidenavbar-hide", "sidenavbar-show");
    arrowIcon.className = isShow ? iconClass.replace("arrow-down", "arrow-up") : iconClass.replace("arrow-up", "arrow-down");
  }
};
var OffsetContext = createContext(20);
export {
  OffsetContext as O,
  handleClick as h
};
