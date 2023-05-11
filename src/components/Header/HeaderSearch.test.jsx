import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";

import HeaderSearch from "./HeaderSearch";
import { TestUtils } from "../util/TestUtils";
import userEvent from "@testing-library/user-event";

const user = userEvent.setup();

const toggleSearchThroughClick = async () => {
  await user.click(
    screen.getByTestId(TestUtils.Header.searchToggleButtonTestId)
  );
};

describe("<HeaderSearch/>", () => {
  describe("Rendering and styling", () => {
    it("should render a toggle button, an input and a search button", async () => {
      render(<HeaderSearch />);
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
      render(<HeaderSearch action={action} method={method} />);

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
      render(<HeaderSearch />);
    });

    it("should show the search form when the toggle button is clicked", async () => {
      // open search
      await toggleSearchThroughClick();
      expect(
        screen.getByTestId(TestUtils.Header.searchFormTestId)
      ).not.toHaveAttribute("hidden", ""); // testing-library assumes the value of a custom HTML attribute to be "".
    });

    it("should not hide the search form if the Tab key is pressed while the search form is open", async () => {
      // open the search
      await toggleSearchThroughClick();
      // verify that the search is opened
      expect(
        screen.getByTestId(TestUtils.Header.searchFormTestId)
      ).not.toHaveAttribute("hidden", "");
      // press Tab
      await user.keyboard("{Tab}");
      // finally, verify that the search is not closed
      expect(
        screen.getByTestId(TestUtils.Header.searchFormTestId)
      ).not.toHaveAttribute("hidden", "");
    });

    it("should not hide the search form if an unhandled key is pressed while the search form is open", async () => {
      // open the search
      await toggleSearchThroughClick();
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

    it("should not hide the search form if the Escape key is pressed while a target that lies outside the search form has focus", async () => {
      // open the search
      await toggleSearchThroughClick();
      // verify that the search is opened
      expect(
        screen.getByTestId(TestUtils.Header.searchFormTestId)
      ).not.toHaveAttribute("hidden", "");
      // press Escape on a target that lies outside the HeaderSearch
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
      await toggleSearchThroughClick();
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
      await toggleSearchThroughClick();
      // verify that the search is opened
      expect(
        screen.getByTestId(TestUtils.Header.searchFormTestId)
      ).not.toHaveAttribute("hidden", "");
      // click the toggle button again
      await toggleSearchThroughClick();
      // finally, verify that the search is closed
      expect(
        screen.getByTestId(TestUtils.Header.searchFormTestId)
      ).toHaveAttribute("hidden", "");
    });
  });

  describe("Accessibility", () => {
    beforeEach(() => {
      render(<HeaderSearch />);
    });

    it("should default the aria-expanded attribute to false", () => {
      expect(
        screen.getByTestId(TestUtils.Header.searchToggleButtonTestId)
      ).toHaveAttribute("aria-expanded", "false");
    });

    it("should change the aria-expanded attribute to true, when the search form is opened", async () => {
      await toggleSearchThroughClick();
      expect(
        screen.getByTestId(TestUtils.Header.searchToggleButtonTestId)
      ).toHaveAttribute("aria-expanded", "true");
    });
  });
});
