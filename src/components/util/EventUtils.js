/*
Copyright (C) 2018 The Trustees of Indiana University
SPDX-License-Identifier: BSD-3-Clause
*/

export const keys = {
  tab: "Tab",
  escape: "Escape",
};

export const handler = (callback) => {
  const eventHandler = (event) => {
    callback(event);
  };
  return {
    register: () => {
      ["click"].forEach((event) =>
        document.addEventListener(event, eventHandler, false)
      );
      ["touchstart", "keyup"].forEach((event) =>
        document.addEventListener(event, eventHandler, true)
      );
    },
    deregister: () => {
      ["click"].forEach((event) =>
        document.removeEventListener(event, eventHandler, false)
      );
      ["touchstart", "keyup"].forEach((event) =>
        document.removeEventListener(event, eventHandler, true)
      );
    },
  };
};

export const isKeyEvent = (event) => {
  return event.type === "keyup";
};

export const isTabKeyPress = (event) => {
  return isKeyEvent(event) && event.key === keys.tab;
};

export const isEscapeKeyPress = (event) => {
  return isKeyEvent(event) && event.key === keys.escape;
};

export const isUnhandledKeyPress = (event) =>
  isKeyEvent(event) && !isTabKeyPress(event) && !isEscapeKeyPress(event);

export const isMouseEvent = (event) => {
  return event.type === "click";
};

export const isRightMouseClick = (event) => {
  return isMouseEvent(event) && event.button === 2;
};

export const targets = (container, event) =>
  container && container.contains(event.target) && container !== event.target;
