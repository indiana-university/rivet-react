import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";

import Header from "./Header";

import { TestUtils } from "../util/TestUtils";
import userEvent from "@testing-library/user-event";

const user = userEvent.setup();

const clickToggleButton = async () => {
  await user.click(
    screen.getByTestId(TestUtils.Header.searchToggleButtonTestId)
  );
};

const pressReturnOnToggleButton = async () => {
  screen.getByTestId(TestUtils.Header.searchToggleButtonTestId).focus();
  await user.keyboard("{Enter}");
};

describe("<HeaderSearch/>", () => {
  describe("Rendering and styling", () => {
    it("should render a toggle button, an input and a search button", async () => {
      render(<Header.Search />);
      expect(
        screen.getByTestId(TestUtils.Header.searchToggleButtonTestId)
      ).toBeInTheDocument();
      expect(
        screen.getByTestId(TestUtils.Header.searchInputTestId)
      ).toBeInTheDocument();
      expect(
        screen.getByTestId(TestUtils.Header.searchButtonTestId)
      ).toBeInTheDocument();
    });

    it("should apply to the form the provided values of the action and method props", async () => {
      const action = "action";
      const method = "post";
      render(<Header.Search action={action} method={method} />);

      expect(
        screen.getByTestId(TestUtils.Header.searchFormTestId)
      ).toHaveAttribute("action", action);
      expect(
        screen.getByTestId(TestUtils.Header.searchFormTestId)
      ).toHaveAttribute("method", method);
    });
  });

  describe("Toggle behavior", () => {
    beforeEach(() => {
      render(<Header.Search />);
    });

    it("should show the search form when the toggle button is clicked", async () => {
      // open search
      await clickToggleButton();

      expect(
        screen.getByTestId(TestUtils.Header.searchFormTestId)
      ).not.toHaveAttribute("hidden", "");
    });

    it("should show the search form when the return key is pressed while the toggle button has focus", async () => {
      // open the nav
      await pressReturnOnToggleButton();

      expect(
        screen.getByTestId(TestUtils.Header.searchFormTestId)
      ).not.toHaveAttribute("hidden", "");
    });

    it("should hide the search form when the return key is pressed while the toggle button has focus, if the search form is already open", async () => {
      // open the nav
      await pressReturnOnToggleButton();
      // verify that search is open
      expect(
        screen.getByTestId(TestUtils.Header.searchFormTestId)
      ).not.toHaveAttribute("hidden", "");
      // press toggle again
      await pressReturnOnToggleButton();

      // verify that search is closed
      expect(
        screen.getByTestId(TestUtils.Header.searchFormTestId)
      ).toHaveAttribute("hidden", "");
    });

    it("should not hide the search form if the Tab key is pressed while the search form is open", async () => {
      // open the search
      await clickToggleButton();
      // verify that the search is opened
      expect(
        screen.getByTestId(TestUtils.Header.searchFormTestId)
      ).not.toHaveAttribute("hidden", "");
      // press Escape
      await user.keyboard("{Tab}");

      // finally, verify that the search is not closed
      expect(
        screen.getByTestId(TestUtils.Header.searchFormTestId)
      ).not.toHaveAttribute("hidden", "");
    });

    it("should not hide the search form if a right click occurs while the search form is open", async () => {
      // open the search
      await clickToggleButton();
      // verify that the search is opened
      expect(
        screen.getByTestId(TestUtils.Header.searchFormTestId)
      ).not.toHaveAttribute("hidden", "");
      // do a right click
      await user.pointer("[MouseRight]");

      // finally, verify that the search is not closed
      expect(
        screen.getByTestId(TestUtils.Header.searchFormTestId)
      ).not.toHaveAttribute("hidden", "");
    });

    it("should not hide the search form if an unhandled key is pressed while the search form is open", async () => {
      // open the search
      await clickToggleButton();
      // verify that the search is opened
      expect(
        screen.getByTestId(TestUtils.Header.searchFormTestId)
      ).not.toHaveAttribute("hidden", "");
      // press an unhandled key
      await user.keyboard("{a}");

      // finally, verify that the search is not closed
      expect(
        screen.getByTestId(TestUtils.Header.searchFormTestId)
      ).not.toHaveAttribute("hidden", "");
    });

    it("should hide the search form if the Escape key is pressed while the search form is open", async () => {
      // open the search
      await clickToggleButton();
      // verify that the search is opened
      expect(
        screen.getByTestId(TestUtils.Header.searchFormTestId)
      ).not.toHaveAttribute("hidden", "");
      // press Escape
      await user.keyboard("{Escape}");

      // finally, verify that the search is closed
      expect(
        screen.getByTestId(TestUtils.Header.searchFormTestId)
      ).toHaveAttribute("hidden", "");
    });

    it("should not hide the search form if the Escape key is pressed while a target that lies outside the search form has focus", async () => {
      // open the search
      await clickToggleButton();
      // verify that the search is opened
      expect(
        screen.getByTestId(TestUtils.Header.searchFormTestId)
      ).not.toHaveAttribute("hidden", "");
      // press Escape so focus moves to a target outside the HeaderSearch
      fireEvent.keyUp(document.body, {
        key: "Escape",
      });

      // finally, verify that the search is not closed
      expect(
        screen.getByTestId(TestUtils.Header.searchFormTestId)
      ).not.toHaveAttribute("hidden", "");
    });

    it("should hide the search form if a DOM element outside the search form is clicked", async () => {
      // open the search
      await clickToggleButton();
      // verify that the search is opened
      expect(
        screen.getByTestId(TestUtils.Header.searchFormTestId)
      ).not.toHaveAttribute("hidden", "");
      // click outside the search
      await user.click(document.body);

      // finally, verify that the search is closed
      expect(
        screen.getByTestId(TestUtils.Header.searchFormTestId)
      ).toHaveAttribute("hidden", "");
    });

    it("should hide the search form if the toggle button is clicked when the search is open", async () => {
      // open the search
      await clickToggleButton();
      // verify that the search is opened
      expect(
        screen.getByTestId(TestUtils.Header.searchFormTestId)
      ).not.toHaveAttribute("hidden", "");
      // click the toggle button again
      await clickToggleButton();

      // finally, verify that the search is closed
      expect(
        screen.getByTestId(TestUtils.Header.searchFormTestId)
      ).toHaveAttribute("hidden", "");
    });

    it("should not hide the search form when focus is moved to a DOM element outside the search form", async () => {
      // open the nav
      await clickToggleButton();
      await user.keyboard("{Tab}"); // move focus to the <input>
      await user.keyboard("{Tab}"); // move focus to the <button>
      // assert that focus is on Search button
      expect(
        screen.getByTestId(TestUtils.Header.searchButtonTestId)
      ).toHaveFocus();
      // Press tab to move focus outside the HeaderSearch component
      await user.keyboard("{Tab}");

      // assert that search form is still open
      expect(
        screen.getByTestId(TestUtils.Header.searchFormTestId)
      ).not.toHaveAttribute("hidden", "");
    });
  });

  describe("Focus behavior", () => {
    beforeEach(() => {
      render(<Header.Search />);
    });

    it("should keep focus on the toggle button when the search form is opened", async () => {
      // open the search form
      await clickToggleButton();
      expect(
        screen.getByTestId(TestUtils.Header.searchToggleButtonTestId)
      ).toHaveFocus();
    });

    it("should move focus back to the toggle button, if search form is closed by pressing Escape", async () => {
      // open the search form
      await clickToggleButton();
      // press Escape
      await user.keyboard("{Escape}");

      // verify focus is on the toggle button
      expect(
        screen.getByTestId(TestUtils.Header.searchToggleButtonTestId)
      ).toHaveFocus();
    });

    it("should move focus back to the toggle button, if search form is closed by clicking the toggle button", async () => {
      // open the search form
      await clickToggleButton();
      // close the menu by clicking the toggle button again
      await clickToggleButton();

      // verify focus is on the toggle button
      expect(
        screen.getByTestId(TestUtils.Header.searchToggleButtonTestId)
      ).toHaveFocus();
    });

    it("should not move focus back to the toggle button, if search form is closed by clicking outside the menu", async () => {
      // open the search form
      await clickToggleButton();
      // close the menu by clicking outside
      await user.click(document.body);

      // verify focus is not on the toggle button
      expect(
        screen.getByTestId(TestUtils.Header.searchToggleButtonTestId)
      ).not.toHaveFocus();
    });
  });

  describe("Accessibility", () => {
    beforeEach(() => {
      render(<Header.Search />);
    });

    it("should default the aria-expanded attribute to false", () => {
      expect(
        screen.getByTestId(TestUtils.Header.searchToggleButtonTestId)
      ).toHaveAttribute("aria-expanded", "false");
    });

    it("should change the aria-expanded attribute to true, when the search form is opened", async () => {
      await clickToggleButton();
      expect(
        screen.getByTestId(TestUtils.Header.searchToggleButtonTestId)
      ).toHaveAttribute("aria-expanded", "true");
    });
  });
});
