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

export const isKeyEvent = (event) =>
  event.type === "keydown" || event.type === "keyup";

export const isTabKeyPress = (event) =>
  isKeyEvent(event) && event.key === keys.tab;

export const isEscapeKeyPress = (event) =>
  isKeyEvent(event) && event.key === keys.escape;

export const isArrowKeyPress = (event) =>
  isArrowUpKeyPress(event) || isArrowDownKeyPress(event);

export const isArrowUpKeyPress = (event) =>
  isKeyEvent(event) && event.key === keys.arrowUp;

export const isArrowDownKeyPress = (event) =>
  isKeyEvent(event) && event.key === keys.arrowDown;

export const isMouseEvent = (event) => event.type === "click";

export const isRightMouseClick = (event) =>
  isMouseEvent(event) && event.button === 2;

export const targets = (container, event) =>
  container && container.contains(event.target) && container !== event.target;
