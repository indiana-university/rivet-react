import {
  isEscapeKeyPress,
  isKeyEvent,
  isTabKeyPress,
} from "../../components/util/EventUtils.js";

export const handler = (callback) => {
  const eventHandler = (event) => {
    callback(event);
  };
  return {
    register: () => {
      ["click", "keydown"].forEach((event) =>
        document.addEventListener(event, eventHandler)
      );
      ["touchstart"].forEach((event) =>
        document.addEventListener(event, eventHandler, true)
      );
    },
    deregister: () => {
      ["click", "keydown"].forEach((event) =>
        document.removeEventListener(event, eventHandler)
      );
      ["touchstart"].forEach((event) =>
        document.removeEventListener(event, eventHandler, true)
      );
    },
  };
};

export const isUnhandledKeyPress = (event) => {
  return isKeyEvent(event) && !isTabKeyPress(event) && !isEscapeKeyPress(event);
};
