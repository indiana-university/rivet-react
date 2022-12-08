/*
Copyright (C) 2018 The Trustees of Indiana University
SPDX-License-Identifier: BSD-3-Clause
*/
import {
  isEscapeKeyPress,
  isKeyEvent,
  isMouseEvent,
  isRightMouseClick,
  isTabKeyPress,
  keys,
} from "./EventUtils";

export const createKeyboardEvent = (key) => ({
  type: "keyup",
  key,
});

export const createMouseEvent = (button) => ({
  type: "click",
  button,
});

export const createTouchEvent = () => ({
  type: "touchstart",
});

describe("Event", () => {
  describe("Keyboard Events", () => {
    it("determines if the event is a keyboard event", () => {
      expect(isKeyEvent(createKeyboardEvent(keys.escape))).toBe(true);
      expect(isKeyEvent(createKeyboardEvent(keys.tab))).toBe(true);
      expect(isKeyEvent(createKeyboardEvent("a".charCodeAt(0)))).toBe(true);
      expect(isKeyEvent(createMouseEvent())).toBe(false);
      expect(isKeyEvent(createTouchEvent())).toBe(false);
    });
    it("detects if the event is an escape key press", () => {
      expect(isEscapeKeyPress(createKeyboardEvent(keys.escape))).toBe(true);
      expect(isEscapeKeyPress(createKeyboardEvent(keys.tab))).toBe(false);
      expect(isEscapeKeyPress(createKeyboardEvent("a".charCodeAt(0)))).toBe(
        false
      );
      expect(isEscapeKeyPress(createMouseEvent())).toBe(false);
      expect(isEscapeKeyPress(createTouchEvent())).toBe(false);
    });
    it("detects if the event is a tab key press", () => {
      expect(isTabKeyPress(createKeyboardEvent(keys.escape))).toBe(false);
      expect(isTabKeyPress(createKeyboardEvent(keys.tab))).toBe(true);
      expect(isTabKeyPress(createKeyboardEvent("a".charCodeAt(0)))).toBe(false);
      expect(isTabKeyPress(createMouseEvent())).toBe(false);
      expect(isTabKeyPress(createTouchEvent())).toBe(false);
    });
  });

  describe("Mouse Events", () => {
    it("determines if the event is a mouse event", () => {
      expect(isMouseEvent(createKeyboardEvent(keys.escape))).toBe(false);
      expect(isMouseEvent(createKeyboardEvent(keys.tab))).toBe(false);
      expect(isMouseEvent(createKeyboardEvent("a".charCodeAt(0)))).toBe(false);
      expect(isMouseEvent(createMouseEvent(1))).toBe(true);
      expect(isMouseEvent(createMouseEvent(2))).toBe(true);
      expect(isMouseEvent(createTouchEvent())).toBe(false);
    });
    it("detects if the event is a right mouse click", () => {
      expect(isRightMouseClick(createKeyboardEvent(keys.escape))).toBe(false);
      expect(isRightMouseClick(createKeyboardEvent(keys.tab))).toBe(false);
      expect(isRightMouseClick(createKeyboardEvent("a".charCodeAt(0)))).toBe(
        false
      );
      expect(isRightMouseClick(createMouseEvent(1))).toBe(false);
      expect(isRightMouseClick(createMouseEvent(2))).toBe(true);
      expect(isEscapeKeyPress(createTouchEvent())).toBe(false);
    });
  });
});
