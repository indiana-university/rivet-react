/*
Copyright (C) 2018 The Trustees of Indiana University
SPDX-License-Identifier: BSD-3-Clause
*/

import { isEmpty } from "lodash";

export const keys = {
  tab: "Tab",
  escape: "Escape",
  arrowUp: "ArrowUp",
  arrowDown: "ArrowDown",
};

export const handler = (callback) => {
  const eventHandler = (event) => {
    callback(event);
  };
  return {
    register: () => {
      ["click"].forEach((event) =>
        document.addEventListener(event, eventHandler, false),
      );
      ["touchstart", "keyup"].forEach((event) =>
        document.addEventListener(event, eventHandler, true),
      );
    },
    deregister: () => {
      ["click"].forEach((event) =>
        document.removeEventListener(event, eventHandler, false),
      );
      ["touchstart", "keyup"].forEach((event) =>
        document.removeEventListener(event, eventHandler, true),
      );
    },
  };
};

export const isKeyEvent = (event) =>
  event.type === "keydown" || event.type === "keyup";

export const isTabKeyPress = (event) =>
  isKeyEvent(event) && event.key === keys.tab;

export const isEscapeKeyPress = (event) =>
  isKeyEvent(event) && event.key === keys.escape;

export const isUnhandledKeyPress = (event) =>
  isKeyEvent(event) && !isTabKeyPress(event) && !isEscapeKeyPress(event);

export const isMouseEvent = (event) => event.type === "click";

export const isRightMouseClick = (event) =>
  isMouseEvent(event) && event.button === 2;

export const targets = (container, event) =>
  container && container.contains(event.target) && container !== event.target;

const focusableElementList =
  'button, a[href], input[type="radio"]:checked, input:not([type="radio"]), select, textarea, [tabindex]:not([tabindex="-1"])';

export function getFocusableElements(element, additionalFocusable = "") {
  const focusEleList = isEmpty(additionalFocusable)
    ? focusableElementList
    : `${focusableElementList}, ${additionalFocusable}`;
  const focusable = element.querySelectorAll(focusEleList);
  const focusableArray = Array.prototype.slice.call(focusable);
  const enabledFocusable = focusableArray.filter((el) => {
    return !el.disabled;
  });
  return enabledFocusable;
}

export function stillFocused(event) {
  const { relatedTarget, currentTarget } = event;
  if (relatedTarget === null) {
    return false;
  }

  let node = relatedTarget;

  while (node !== null) {
    if (node === currentTarget) {
      return true;
    }
    node = node.parentNode;
  }

  return false;
}
