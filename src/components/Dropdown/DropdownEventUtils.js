/*
Copyright (C) 2018 The Trustees of Indiana University
SPDX-License-Identifier: BSD-3-Clause
*/
import {
  isEscapeKeyPress,
  isKeyEvent,
  isTabKeyPress,
} from "../util/EventUtils.js";

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

export const isUnhandledKeyPress = (event) => {
  return isKeyEvent(event) && !isTabKeyPress(event) && !isEscapeKeyPress(event);
};
