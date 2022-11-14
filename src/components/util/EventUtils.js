/*
Copyright (C) 2018 The Trustees of Indiana University
SPDX-License-Identifier: BSD-3-Clause
*/

const keys = {
  tab: "Tab",
  escape: "Escape",
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
  return event.type === "keyup";
};

export const isTabKeyPress = (event) => {
  return isKeyEvent(event) && event.key === keys.tab;
};

export const isEscapeKeyPress = (event) => {
  return isKeyEvent(event) && event.key === keys.escape;
};

export const isMouseEvent = (event) => {
  return event.type === "click";
};

export const isRightMouseClick = (event) => {
  return isMouseEvent(event) && event.which === 3;
};

export const targets = (container, event) =>
  container && container.contains(event.target) && container !== event.target;
