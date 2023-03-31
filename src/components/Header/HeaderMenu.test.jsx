import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";

import Header from "./Header";

import { TestUtils } from "../util/TestUtils";
import userEvent from "@testing-library/user-event";

const user = userEvent.setup();

const toggleMenuThroughClick = async () => {
  await user.click(screen.getByTestId(TestUtils.Header.menuButtonToggleTestId));
};

const testHref = "/testHref";

describe("<HeaderMenu/>", () => {
  describe("Rendering and styling", () => {
    it("should render all the provided children", () => {
      render(
        <Header.Menu label="Nav item three">
          <a href="#">Sub item one</a>
          <a href={testHref}>Sub item two</a>
        </Header.Menu>
      );
      expect(screen.getByText("Sub item one")).toBeInTheDocument();
      expect(screen.getByText("Sub item two")).toBeInTheDocument();
    });

    it("should retain any attributes provided to the children", () => {
      render(
        <Header.Menu label="Nav item three">
          <a href="#">Sub item one</a>
          <a href={testHref}>Sub item two</a>
        </Header.Menu>
      );
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
        screen.getByTestId(TestUtils.Header.menuContainerTestId)
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

    it("should hide the menu items by default", () => {
      render(
        <Header.Menu label="Label">
          <a href="#">Sub item</a>
        </Header.Menu>
      );
      expect(
        screen.getByTestId(TestUtils.Header.menuItemsContainerTestId)
      ).toHaveAttribute("hidden", ""); // testing-library assumes the value of a custom HTML attribute to be "".
    });
  });

  describe("Defaulting props", () => {
    it("should default the label anchor's href prop to #, if not provided", () => {
      render(<Header.Menu label="Nav item"></Header.Menu>);
      expect(screen.getAllByRole("link")[0]).toHaveAttribute("href", "#");
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

    it("should show the menu when the toggle button is clicked", async () => {
      // open the menu
      await toggleMenuThroughClick();
      expect(
        screen.getByTestId(TestUtils.Header.menuItemsContainerTestId)
      ).not.toHaveAttribute("hidden", "");
    });

    it("should not hide the menu if the Tab key is pressed while the menu is open", async () => {
      // open the menu
      await toggleMenuThroughClick();
      // verify that the menu is opened
      expect(
        screen.getByTestId(TestUtils.Header.menuItemsContainerTestId)
      ).not.toHaveAttribute("hidden", "");
      // press Tab
      await user.keyboard("{Tab}");
      // finally, verify that the menu is not closed
      expect(
        screen.getByTestId(TestUtils.Header.menuItemsContainerTestId)
      ).not.toHaveAttribute("hidden", "");
    });

    it("should not hide the menu if the Arrow Up key is pressed while the menu is open", async () => {
      // open the menu
      await toggleMenuThroughClick();
      // verify that the menu is opened
      expect(
        screen.getByTestId(TestUtils.Header.menuItemsContainerTestId)
      ).not.toHaveAttribute("hidden", "");
      // press ArrowUp
      await user.keyboard("{ArrowUp}");
      // finally, verify that the menu is not closed
      expect(
        screen.getByTestId(TestUtils.Header.menuItemsContainerTestId)
      ).not.toHaveAttribute("hidden", "");
    });

    it("should not hide the menu if the Arrow Down key is pressed while the menu is open", async () => {
      // open the menu
      await toggleMenuThroughClick();
      // verify that the menu is opened
      expect(
        screen.getByTestId(TestUtils.Header.menuItemsContainerTestId)
      ).not.toHaveAttribute("hidden", "");
      // press ArrowDown
      await user.keyboard("{ArrowDown}");
      // finally, verify that the menu is not closed
      expect(
        screen.getByTestId(TestUtils.Header.menuItemsContainerTestId)
      ).not.toHaveAttribute("hidden", "");
    });

    it("should not hide the menu if an unhandled key is pressed while the menu is open", async () => {
      // open the menu
      await toggleMenuThroughClick();
      // verify that the menu is opened
      expect(
        screen.getByTestId(TestUtils.Header.menuItemsContainerTestId)
      ).not.toHaveAttribute("hidden", "");
      // press an unhandled key
      await user.keyboard("{a}");
      // finally, verify that the menu is not closed
      expect(
        screen.getByTestId(TestUtils.Header.menuItemsContainerTestId)
      ).not.toHaveAttribute("hidden", "");
    });

    it("should not hide the menu if the Escape key is pressed while a DOM element that lies outside the menu has focus", async () => {
      // open the menu
      await toggleMenuThroughClick();
      // verify that the menu is opened
      expect(
        screen.getByTestId(TestUtils.Header.menuItemsContainerTestId)
      ).not.toHaveAttribute("hidden", "");
      // press Escape on a target that lies outside the HeaderMenu
      fireEvent.keyUp(document.body, {
        key: "Escape",
      });
      // finally, verify that the menu is not closed
      expect(
        screen.getByTestId(TestUtils.Header.menuItemsContainerTestId)
      ).not.toHaveAttribute("hidden", "");
    });

    it("should hide the menu if a DOM element outside the menu is clicked", async () => {
      // open the menu
      await toggleMenuThroughClick();
      // verify that the menu is opened
      expect(
        screen.getByTestId(TestUtils.Header.menuItemsContainerTestId)
      ).not.toHaveAttribute("hidden", "");
      // click outside the menu
      await user.click(document.body);
      // finally, verify that the menu is closed
      expect(
        screen.getByTestId(TestUtils.Header.menuItemsContainerTestId)
      ).toHaveAttribute("hidden", "");
    });

    it("should hide the menu items if the toggle button is clicked when the menu is open", async () => {
      // open the menu
      await toggleMenuThroughClick();
      // verify that the menu is opened
      expect(
        screen.getByTestId(TestUtils.Header.menuItemsContainerTestId)
      ).not.toHaveAttribute("hidden", "");
      // click the toggle button again
      await toggleMenuThroughClick();
      // finally, verify that the menu is closed
      expect(
        screen.getByTestId(TestUtils.Header.menuItemsContainerTestId)
      ).toHaveAttribute("hidden", "");
    });
  });

  describe("Focus behavior", () => {
    beforeEach(() => {
      render(
        <Header.Menu label="Nav item three">
          <a href="#">Sub item one</a>
          <a href="#">Sub item two</a>
        </Header.Menu>
      );
    });

    it("should put focus back on the toggle button, if menu is closed through the Escape key", async () => {
      await toggleMenuThroughClick(); // open the menu
      // verify focus is not on the toggle button
      expect(screen.getByText("Sub item one")).toHaveFocus();
      // press Escape
      await user.keyboard("{Escape}");
      // verify focus is now on the toggle button
      expect(
        screen.getByTestId(TestUtils.Header.menuButtonToggleTestId)
      ).toHaveFocus();
    });

    it("should move focus to the first menu item when the menu is opened", async () => {
      await toggleMenuThroughClick(); // open the menu
      expect(screen.getByText("Sub item one")).toHaveFocus();
    });

    it("should move focus to the first menu item, if ArrowDown is pressed while the menu is open and the toggle button has focus", async () => {
      await toggleMenuThroughClick(); // open the menu
      // move focus to toggle button
      screen.getByTestId(TestUtils.Header.menuButtonToggleTestId).focus();
      // press ArrowDown
      await user.keyboard("{ArrowDown}");
      expect(screen.getByText("Sub item one")).toHaveFocus();
    });

    it("should move focus to the first menu item, if ArrowDown is pressed while the menu is open and the menu anchor has focus", async () => {
      await toggleMenuThroughClick(); // open the menu
      // move focus to menu anchor
      screen.getByTestId(TestUtils.Header.menuAnchorTestId).focus();
      // press ArrowDown
      await user.keyboard("{ArrowDown}");
      expect(screen.getByText("Sub item one")).toHaveFocus();
    });

    it("should move focus to the next menu item when Arrow Up is pressed, and to the previous menu item when Arrow Down is pressed", async () => {
      await toggleMenuThroughClick(); // open the menu
      await user.keyboard("{ArrowDown}");
      expect(screen.getByText("Sub item two")).toHaveFocus();
      await user.keyboard("{ArrowUp}");
      expect(screen.getByText("Sub item one")).toHaveFocus();
    });

    it("should move focus to the first menu item when the last menu item has focus, and Arrow Down is pressed", async () => {
      await toggleMenuThroughClick(); // open the menu
      await user.keyboard("{ArrowDown}");
      // assert that last menu item has focus
      expect(screen.getByText("Sub item two")).toHaveFocus();
      // press Arrow Down
      await user.keyboard("{ArrowDown}");
      expect(screen.getByText("Sub item one")).toHaveFocus();
    });

    it("should move focus to the last menu item when the first menu item has focus, and Arrow Up is pressed", async () => {
      await toggleMenuThroughClick(); // open the menu
      // assert that first menu item has focus
      expect(screen.getByText("Sub item one")).toHaveFocus();
      // press Arrow Up
      await user.keyboard("{ArrowUp}");
      expect(screen.getByText("Sub item two")).toHaveFocus();
    });

    it("should not move focus, if Arrow Up or Arrow Down are pressed while the menu is closed", async () => {
      async function makeAssertion(arrowKey) {
        // move focus to anchor
        screen.getByText("Nav item three").focus();
        // verify that focus is on anchor
        expect(screen.getByText("Nav item three")).toHaveFocus();
        // verify that menu is closed
        expect(
          screen.getByTestId(TestUtils.Header.menuItemsContainerTestId)
        ).toHaveAttribute("hidden", ""); // testing-library assumes the value of a custom HTML attribute to be "".
        // press Arrow key
        await user.keyboard(arrowKey);
        // verify that focus is still on anchor
        expect(screen.getByText("Nav item three")).toHaveFocus();
      }

      await makeAssertion("{ArrowUp}");
      await makeAssertion("{ArrowDown}");
    });
  });

  describe("Accessibility", () => {
    beforeEach(() => {
      render(
        <Header.Menu label="Nav item three">
          <a href="#">Sub item one</a>
        </Header.Menu>
      );
    });

    it("should default the aria-expanded attribute on the toggle button to false", () => {
      expect(
        screen.getByTestId(TestUtils.Header.menuButtonToggleTestId)
      ).toHaveAttribute("aria-expanded", "false");
    });

    it("should change the aria-expanded attribute on the toggle button to true when the menu is opened", async () => {
      await toggleMenuThroughClick(); // open the menu
      expect(
        screen.getByTestId(TestUtils.Header.menuButtonToggleTestId)
      ).toHaveAttribute("aria-expanded", "true");
    });
  });
});
