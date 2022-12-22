import { isUnhandledKeyPress } from "./DropdownEventUtils";
import { keys } from "../util/EventUtils.js";
import {
  createKeyboardEvent,
  createMouseEvent,
  createTouchEvent,
} from "../util/EventUtils.test";

describe("DropdownEvent", () => {
  describe("Keyboard Events", () => {
    it("detects if the event is an unhandled key press", () => {
      expect(isUnhandledKeyPress(createKeyboardEvent(keys.escape))).toBe(false);
      expect(isUnhandledKeyPress(createKeyboardEvent(keys.tab))).toBe(false);
      expect(isUnhandledKeyPress(createKeyboardEvent("a"))).toBe(true);
      expect(isUnhandledKeyPress(createMouseEvent())).toBe(false);
      expect(isUnhandledKeyPress(createTouchEvent())).toBe(false);
    });
  });
});
