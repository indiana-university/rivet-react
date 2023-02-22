/*
Copyright (C) 2018 The Trustees of Indiana University
SPDX-License-Identifier: BSD-3-Clause
*/

export const keys = {
  tab: "Tab",
  escape: "Escape",
  arrowUp: "ArrowUp",
  arrowDown: "ArrowDown",
};

export const handler = (callback, InstantiatingClass) => {
  const eventHandler = (event) => {
    callback(new InstantiatingClass(event));
  };
  return {
    register: () => {
      ["click", "touchstart", "keyup"].forEach((event) =>
        document.addEventListener(event, eventHandler, true)
      );
    },
    deregister: () => {
      ["click", "touchstart", "keyup"].forEach((event) =>
        document.removeEventListener(event, eventHandler, true)
      );
    },
  };
};

export const isKeyEvent = (event) => {
  return event.type === "keydown" || event.type === "keyup";
};

export const isTabKeyPress = (event) => {
  return isKeyEvent(event) && event.key === keys.tab;
};

export const isEscapeKeyPress = (event) => {
  return isKeyEvent(event) && event.key === keys.escape;
};

export const isArrowKeyPress = (event) =>
  isArrowUpKeyPress(event) || isArrowDownKeyPress(event);

export const isArrowUpKeyPress = (event) => {
  return isKeyEvent(event) && event.key === keys.arrowUp;
};

export const isArrowDownKeyPress = (event) => {
  return isKeyEvent(event) && event.key === keys.arrowDown;
};

export const isMouseEvent = (event) => {
  return event.type === "click";
};

export const isRightMouseClick = (event) => {
  return isMouseEvent(event) && event.button === 2;
};

export const targets = (container, event) =>
  container && container.contains(event.target) && container !== event.target;
