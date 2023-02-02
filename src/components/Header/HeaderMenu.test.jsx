import React from "react";
import {
  prettyDOM,
  render,
  screen,
  fireEvent,
  getByTestId,
} from "@testing-library/react";
import "@testing-library/jest-dom";

import Header from "./Header";

import { TestUtils } from "../util/TestUtils";
import userEvent from "@testing-library/user-event";

const user = userEvent.setup();

const clickToggleButton = async () => {
  await user.click(screen.getByTestId(TestUtils.Header.menuButtonToggleTestId));
};

const pressReturnOnToggleButton = async () => {
  screen.getByTestId(TestUtils.Header.menuButtonToggleTestId).focus();
  await user.keyboard("{Enter}");
};

const testHref = "/testHref";

describe("<HeaderMenu/>", () => {
  describe("Rendering and styling", () => {
    it("should render all the provided children, and retain any attributes provided to the children", () => {
      render(
        <Header.Menu label="Nav item three">
          <a href="#">Sub item one</a>
          <a href={testHref}>Sub item two</a>
        </Header.Menu>
      );

      expect(screen.getByText("Sub item one")).toBeInTheDocument();
      expect(screen.getByText("Sub item two")).toBeInTheDocument();

      expect(screen.getByText("Sub item one")).toHaveAttribute("href", "#");
      expect(screen.getByText("Sub item two")).toHaveAttribute(
        "href",
        testHref
      );
    });

    it("should allow providing non-anchor elements as children", () => {
      const testId = "testButton";
      render(
        <Header.Menu label="Nav item three">
          <button data-testid={testId}>test button</button>
        </Header.Menu>
      );

      expect(
        screen.getByTestId(TestUtils.Header.menuContainer)
      ).toContainElement(screen.getByTestId(testId));
    });

    it("should provide the label and href props to the label anchor", () => {
      const testLabel = "Nav item";

      render(
        <Header.Menu label={testLabel} href={testHref}>
          <a href="#">Sub item</a>
        </Header.Menu>
      );

      expect(screen.getAllByRole("link")[0]).toHaveTextContent(testLabel);
      expect(screen.getAllByRole("link")[0]).toHaveAttribute("href", testHref);
    });

    it("should default the label anchor's href prop to #, if not provided", () => {
      render(<Header.Menu label="Nav item"></Header.Menu>);

      expect(screen.getAllByRole("link")[0]).toHaveAttribute("href", "#");
    });

    it("should hide the menu items by default", () => {
      render(
        <Header.Menu label="Label">
          <a href="#">Sub item</a>
        </Header.Menu>
      );

      // custom HTML attributes don't need to have a value, so checking for "" is good enough
      expect(
        screen.getByTestId(TestUtils.Header.menuItemsContainer)
      ).toHaveAttribute("hidden", "");
    });
  });

  describe("Toggle behavior", () => {
    beforeEach(() => {
      render(
        <Header.Menu label="Nav item three">
          <a href="#">Sub item one</a>
          <a href="#">Sub item two</a>
        </Header.Menu>
      );
    });

    it("should show the menu items when the toggle button is clicked", async () => {
      await clickToggleButton();
      expect(
        screen.getByTestId(TestUtils.Header.menuItemsContainer)
      ).not.toHaveAttribute("hidden", "");
    });

    it("should show the menu button when the return key is pressed on the toggle button", async () => {
      await pressReturnOnToggleButton();
      expect(
        screen.getByTestId(TestUtils.Header.menuItemsContainer)
      ).not.toHaveAttribute("hidden", "");
    });

    it("should hide the menu items if the toggle button is clicked when the menu is open", async () => {
      await clickToggleButton();
      // first verify that the menu is opened
      expect(
        screen.getByTestId(TestUtils.Header.menuItemsContainer)
      ).not.toHaveAttribute("hidden", "");
      // click the toggle button again
      await clickToggleButton();
      // finally, verify that the menu is closed
      expect(
        screen.getByTestId(TestUtils.Header.menuItemsContainer)
      ).toHaveAttribute("hidden", "");
    });
  });
});
