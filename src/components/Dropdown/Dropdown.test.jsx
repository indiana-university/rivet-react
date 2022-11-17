/*
Copyright (C) 2018 The Trustees of Indiana University
SPDX-License-Identifier: BSD-3-Clause
*/
import { fireEvent, getByRole, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import React from "react";

import Dropdown from "./Dropdown";
import { TestUtils } from "../util/TestUtils";

const user = userEvent.setup();

const expectDropdownMenuIsOpen = async () => {
  await screen.findByRole("menu");
  expect(screen.getByRole("menu")).toBeVisible();
};

const expectDropdownMenuIsClosed = () => {
  expect(screen.queryByRole("menu")).not.toBeInTheDocument();
};

const clickToggleButton = async () => {
  await user.click(screen.getByRole("button"));
};

describe("<Dropdown />", () => {
  describe("Rendering and styling", () => {
    it("should render without throwing an error", () => {
      render(<Dropdown />);
      expect(screen.getByRole("button")).toBeVisible();
    });
    it("should not render a label if it is not provided", () => {
      render(<Dropdown label="" />);
      expect(
        screen.queryByTestId(TestUtils.Dropdown.testId)
      ).not.toBeInTheDocument();

      render(<Dropdown label="foo" />);
      expect(screen.getByTestId(TestUtils.Dropdown.testId)).toBeInTheDocument();
    });
    it("should align menu to the left, if alignRight is not provided, or if alignRight is false", () => {
      render(<Dropdown />);
      expect(screen.getByRole("menu")).toHaveClass("rvt-dropdown__menu--left");
    });
    it("should align menu to the right, if alignRight is true", () => {
      render(<Dropdown alignRight={true} />);
      expect(screen.getByRole("menu")).toHaveClass("rvt-dropdown__menu--right");
    });
  });

  describe("Toggle behavior", () => {
    beforeEach(() => {
      render(
        <Dropdown>
          <a href="#">Hello, world!</a>
        </Dropdown>
      );
    });

    it("should toggle the menu when clicking the button", async () => {
      expectDropdownMenuIsClosed();
      await clickToggleButton();
      await expectDropdownMenuIsOpen();
      await clickToggleButton();
      expectDropdownMenuIsClosed();
    });
    it("should not toggle the menu when clicking inside the menu", async () => {
      expectDropdownMenuIsClosed();
      await clickToggleButton();
      await expectDropdownMenuIsOpen();
      await user.click(screen.getByRole("link"));
      await expectDropdownMenuIsOpen();
    });
    it("should toggle the menu when clicking outside of the menu", async () => {
      expectDropdownMenuIsClosed();
      await clickToggleButton();
      await expectDropdownMenuIsOpen();
      fireEvent.click(document.body);
      expectDropdownMenuIsClosed();
    });
    it("should toggle the menu when escape is pressed", async () => {
      await expectDropdownMenuIsClosed();
      await clickToggleButton();
      await expectDropdownMenuIsOpen();
      fireEvent.keyUp(document.body, {
        key: "Escape",
        code: "Escape",
        charCode: 27,
      });
      expectDropdownMenuIsClosed();
    });
    it("should not toggle the menu when the tab key is pressed inside the menu", async () => {
      expectDropdownMenuIsClosed();
      await clickToggleButton();
      await expectDropdownMenuIsOpen();
      fireEvent.keyUp(getByRole(document.body, "link"), {
        key: "Tab",
        code: "Tab",
        charCode: 9,
      });
      await expectDropdownMenuIsOpen();
    });
    it("should toggle the menu when the tab key is pressed outside the menu", async () => {
      expectDropdownMenuIsClosed();
      await clickToggleButton();
      await expectDropdownMenuIsOpen();
      fireEvent.keyUp(document.body, { key: "Tab", code: "Tab", charCode: 9 });
      expectDropdownMenuIsClosed();
    });
    it("should not toggle the menu when an unhandled key is pressed", async () => {
      expectDropdownMenuIsClosed();
      await clickToggleButton();
      await expectDropdownMenuIsOpen();
      fireEvent.keyUp(document.body, { key: "a", code: "keyA", charCode: 65 });
      await expectDropdownMenuIsOpen();
    });
  });

  describe("Toggle behavior click inside override", () => {
    beforeEach(() => {
      render(
        <Dropdown toggleDropdownOnClickInside={true}>
          <a href="#">Hello, world!</a>
        </Dropdown>
      );
    });

    it("should toggle the menu when clicking inside the menu", async () => {
      expectDropdownMenuIsClosed();
      await clickToggleButton();
      await expectDropdownMenuIsOpen();
      await user.click(screen.getByRole("link"));
      expectDropdownMenuIsClosed();
    });
  });

  describe("Event handler registration", () => {
    afterEach(() => {
      if (jest.isMockFunction(document.addEventListener)) {
        document.addEventListener.mockRestore();
      }
      if (jest.isMockFunction(document.removeEventListener)) {
        document.removeEventListener.mockRestore();
      }
    });

    it("should register event handlers when it is mounted", async () => {
      jest.spyOn(document, "addEventListener");
      expect(document.addEventListener).toHaveBeenCalledTimes(0);
      render(<Dropdown />);
      await user.click(screen.getByRole("button"));
      expect(document.addEventListener).toHaveBeenCalled();
    });
    it("should de-register event handlers when the dropdown menu is unmounted", async () => {
      jest.spyOn(document, "removeEventListener");
      render(<Dropdown />);
      await user.click(screen.getByRole("button"));
      document.removeEventListener.mockClear();
      // On the second click the event listeners are removed since the dropdown is closed
      await user.click(screen.getByRole("button"));
      expect(document.removeEventListener).toHaveBeenCalled();
    });
    it("should de-register event handlers when the dropdown unmounted", async () => {
      jest.spyOn(document, "removeEventListener");
      const { unmount } = render(<Dropdown />);
      await user.click(screen.getByRole("button"));
      document.removeEventListener.mockClear();
      // On the second click the event listeners are removed since the dropdown is closed
      unmount();
      expect(document.removeEventListener).toHaveBeenCalled();
    });
  });
});
