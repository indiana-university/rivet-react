/*
Copyright (C) 2018 The Trustees of Indiana University
SPDX-License-Identifier: BSD-3-Clause
*/
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";

import BaseHeaderMenu from "./BaseHeaderMenu";

import { TestUtils } from "../util/TestUtils";
import userEvent from "@testing-library/user-event";

const user = userEvent.setup();
const testIds = TestUtils.Header;
const toggleMenuThroughClick = async () => {
  await user.click(screen.getByTestId(testIds.menuButtonToggleTestId));
};

const testHref = "/testHref";

describe("<BaseHeaderMenu/>", () => {
  describe("Rendering and styling", () => {
    it("should render all the provided children", () => {
      render(
        <BaseHeaderMenu label="Nav item three">
          <a href="#">Sub item one</a>
          <a href={testHref}>Sub item two</a>
        </BaseHeaderMenu>
      );
      expect(screen.getByText("Sub item one")).toBeInTheDocument();
      expect(screen.getByText("Sub item two")).toBeInTheDocument();
      expect(screen.getByText("Sub item one")).toHaveAttribute("href", "#");
      expect(screen.getByText("Sub item two")).toHaveAttribute(
        "href",
        testHref
      );
    });

    it("should render all the provided children", () => {
      render(
        <BaseHeaderMenu label="Nav item three">
          <a href="#">Sub item one</a>
          <a href={testHref}>Sub item two</a>
        </BaseHeaderMenu>
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
        <BaseHeaderMenu testMode label="Nav item three">
          <button data-testid={testId}>test button</button>
        </BaseHeaderMenu>
      );
      expect(screen.getByTestId(testIds.menuContainerTestId)).toContainElement(
        screen.getByTestId(testId)
      );
    });

    it("should provide the label and href props to the label anchor", () => {
      const testLabel = "Nav item";
      render(
        <BaseHeaderMenu label={testLabel} menuUrl={testHref}>
          <a href="#">Sub item</a>
        </BaseHeaderMenu>
      );
      const anchor = screen.getAllByRole("link")[0];
      expect(anchor).toHaveTextContent(testLabel);
      expect(anchor).toHaveAttribute("href", testHref);
      expect(anchor).not.toHaveAttribute("aria-current");
    });

    it("should provide current page indicators to the label anchor", () => {
      const testLabel = "Nav item";
      render(
        <BaseHeaderMenu current label={testLabel} menuUrl={testHref}>
          <a href="#">Sub item</a>
        </BaseHeaderMenu>
      );
      const anchor = screen.getAllByRole("link")[0];
      expect(anchor).toHaveTextContent(testLabel);
      expect(anchor).toHaveAttribute("href", testHref);
      expect(anchor).toHaveAttribute("aria-current", "page");
    });

    it("should hide the menu items by default", () => {
      render(
        <BaseHeaderMenu testMode label="Label">
          <a href="#">Sub item</a>
        </BaseHeaderMenu>
      );
      expect(
        screen.getByTestId(testIds.menuItemsContainerTestId)
      ).toHaveAttribute("hidden", ""); // testing-library assumes the value of a custom HTML attribute to be "".
    });
  });

  describe("Toggle behavior", () => {
    beforeEach(() => {
      render(
        <BaseHeaderMenu testMode label="Nav item three">
          <a href="#">Sub item one</a>
          <a href="#">Sub item two</a>
        </BaseHeaderMenu>
      );
    });

    it("should show the menu when the toggle button is clicked", async () => {
      // open the menu
      await toggleMenuThroughClick();
      expect(
        screen.getByTestId(testIds.menuItemsContainerTestId)
      ).not.toHaveAttribute("hidden", "");
    });

    it("should not hide the menu if the Tab key is pressed while the menu is open", async () => {
      // open the menu
      await toggleMenuThroughClick();
      // verify that the menu is opened
      expect(
        screen.getByTestId(testIds.menuItemsContainerTestId)
      ).not.toHaveAttribute("hidden", "");
      // press Tab
      await user.keyboard("{Tab}");
      // finally, verify that the menu is not closed
      expect(
        screen.getByTestId(testIds.menuItemsContainerTestId)
      ).not.toHaveAttribute("hidden", "");
    });

    it("should not hide the menu if the Arrow Up key is pressed while the menu is open", async () => {
      // open the menu
      await toggleMenuThroughClick();
      // verify that the menu is opened
      expect(
        screen.getByTestId(testIds.menuItemsContainerTestId)
      ).not.toHaveAttribute("hidden", "");
      // press ArrowUp
      await user.keyboard("{ArrowUp}");
      // finally, verify that the menu is not closed
      expect(
        screen.getByTestId(testIds.menuItemsContainerTestId)
      ).not.toHaveAttribute("hidden", "");
    });

    it("should not hide the menu if the Arrow Down key is pressed while the menu is open", async () => {
      // open the menu
      await toggleMenuThroughClick();
      // verify that the menu is opened
      expect(
        screen.getByTestId(testIds.menuItemsContainerTestId)
      ).not.toHaveAttribute("hidden", "");
      // press ArrowDown
      await user.keyboard("{ArrowDown}");
      // finally, verify that the menu is not closed
      expect(
        screen.getByTestId(testIds.menuItemsContainerTestId)
      ).not.toHaveAttribute("hidden", "");
    });

    it("should not hide the menu if an unhandled key is pressed while the menu is open", async () => {
      // open the menu
      await toggleMenuThroughClick();
      // verify that the menu is opened
      expect(
        screen.getByTestId(testIds.menuItemsContainerTestId)
      ).not.toHaveAttribute("hidden", "");
      // press an unhandled key
      await user.keyboard("{a}");
      // finally, verify that the menu is not closed
      expect(
        screen.getByTestId(testIds.menuItemsContainerTestId)
      ).not.toHaveAttribute("hidden", "");
    });

    it("should not hide the menu if the Escape key is pressed while a DOM element that lies outside the menu has focus", async () => {
      // open the menu
      await toggleMenuThroughClick();
      // verify that the menu is opened
      expect(
        screen.getByTestId(testIds.menuItemsContainerTestId)
      ).not.toHaveAttribute("hidden", "");
      // press Escape on a target that lies outside the HeaderMenu
      fireEvent.keyUp(document.body, {
        key: "Escape",
      });
      // finally, verify that the menu is not closed
      expect(
        screen.getByTestId(testIds.menuItemsContainerTestId)
      ).not.toHaveAttribute("hidden", "");
    });

    it("should hide the menu if a DOM element outside the menu is clicked", async () => {
      // open the menu
      await toggleMenuThroughClick();
      // verify that the menu is opened
      expect(
        screen.getByTestId(testIds.menuItemsContainerTestId)
      ).not.toHaveAttribute("hidden", "");
      // click outside the menu
      await user.click(document.body);
      // finally, verify that the menu is closed
      expect(
        screen.getByTestId(testIds.menuItemsContainerTestId)
      ).toHaveAttribute("hidden", "");
    });

    it("should hide the menu items if the toggle button is clicked when the menu is open", async () => {
      // open the menu
      await toggleMenuThroughClick();
      // verify that the menu is opened
      expect(
        screen.getByTestId(testIds.menuItemsContainerTestId)
      ).not.toHaveAttribute("hidden", "");
      // click the toggle button again
      await toggleMenuThroughClick();
      // finally, verify that the menu is closed
      expect(
        screen.getByTestId(testIds.menuItemsContainerTestId)
      ).toHaveAttribute("hidden", "");
    });
  });

  describe("Focus behavior", () => {
    const outsideId = "outsideId";
    beforeEach(() => {
      render(
        <>
          <button data-testid={outsideId}>Outside</button>
          <BaseHeaderMenu testMode menuUrl="#" label="Nav item three">
            <a href="#">Sub item one</a>
            <a href="#">Sub item two</a>
          </BaseHeaderMenu>
        </>
      );
    });

    it("should put focus back on the toggle button, if menu is closed through the Escape key", async () => {
      await toggleMenuThroughClick(); // open the menu
      // verify focus is not on the toggle button
      expect(screen.getByText("Sub item one")).toHaveFocus();
      // press Escape
      await user.keyboard("{Escape}");
      // verify focus is now on the toggle button
      expect(screen.getByTestId(testIds.menuButtonToggleTestId)).toHaveFocus();
    });

    it("should move focus to the first menu item when the menu is opened", async () => {
      await toggleMenuThroughClick(); // open the menu
      expect(screen.getByText("Sub item one")).toHaveFocus();
    });

    it("should move focus to the first menu item, if ArrowDown is pressed while the menu is open and the toggle button has focus", async () => {
      await toggleMenuThroughClick(); // open the menu
      // move focus to toggle button
      screen.getByTestId(testIds.menuButtonToggleTestId).focus();
      // press ArrowDown
      await user.keyboard("{ArrowDown}");
      expect(screen.getByText("Sub item one")).toHaveFocus();
    });

    it("should open and move focus to the first menu item, if ArrowDown is pressed while the menu is open and the toggle button has focus", async () => {
      // move focus to toggle button
      screen.getByTestId(testIds.menuButtonToggleTestId).focus();

      // press ArrowDown
      await user.keyboard("{ArrowDown}");
      expect(
        screen.getByTestId(testIds.menuItemsContainerTestId)
      ).not.toHaveAttribute("hidden", "");
      expect(screen.getByText("Sub item one")).toHaveFocus();
    });

    it("should move focus to the first menu item, if ArrowDown is pressed while the menu is open and the menu anchor has focus", async () => {
      await toggleMenuThroughClick(); // open the menu
      // move focus to menu anchor
      screen.getByTestId(testIds.menuAnchorTestId).focus();
      // press ArrowDown
      await user.keyboard("{ArrowDown}");
      expect(screen.getByText("Sub item one")).toHaveFocus();
    });

    it("should open and move focus to the first menu item, if ArrowDown is pressed while the menu is closed and the menu anchor has focus", async () => {
      // move focus to menu anchor
      screen.getByTestId(testIds.menuAnchorTestId).focus();

      // press ArrowDown
      await user.keyboard("{ArrowDown}");
      expect(
        screen.getByTestId(testIds.menuItemsContainerTestId)
      ).not.toHaveAttribute("hidden", "");
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
        // move focus off menu
        screen.getByTestId(outsideId).focus();
        // verify that focus is on outer button
        expect(screen.getByTestId(outsideId)).toHaveFocus();
        // verify that menu is closed
        expect(
          screen.getByTestId(testIds.menuItemsContainerTestId)
        ).toHaveAttribute("hidden", ""); // testing-library assumes the value of a custom HTML attribute to be "".
        // press Arrow key
        await user.keyboard(arrowKey);
        // verify that focus is still on anchor
        expect(screen.getByTestId(outsideId)).toHaveFocus();
      }

      await makeAssertion("{ArrowUp}");
      await makeAssertion("{ArrowDown}");
    });
  });

  describe("Accessibility", () => {
    beforeEach(() => {
      render(
        <BaseHeaderMenu testMode label="Nav item three">
          <a href="#">Sub item one</a>
        </BaseHeaderMenu>
      );
    });

    it("should default the aria-expanded attribute on the toggle button to false", () => {
      expect(
        screen.getByTestId(testIds.menuButtonToggleTestId)
      ).toHaveAttribute("aria-expanded", "false");
    });

    it("should change the aria-expanded attribute on the toggle button to true when the menu is opened", async () => {
      await toggleMenuThroughClick(); // open the menu
      expect(
        screen.getByTestId(testIds.menuButtonToggleTestId)
      ).toHaveAttribute("aria-expanded", "true");
    });
  });

  describe("Options", () => {
    it("Attributes can be added to toggle button", () => {
      const menuButtonAttrs = {
        ["data-test1"]: true,
        name: "test",
        count: 1,
      };
      render(
        <BaseHeaderMenu
          label="Nav item three"
          menuButtonAttrs={menuButtonAttrs}
          testMode
        >
          <a href="#">Sub item one</a>
          <a href={testHref}>Sub item two</a>
        </BaseHeaderMenu>
      );
      const element = screen.getByTestId(testIds.menuButtonToggleTestId);
      expect(element).toHaveAttribute("data-test1", "true");
      expect(element).toHaveAttribute("name", "test");
      expect(element).toHaveAttribute("count", "1");
    });
    it("default is test mode off", () => {
      render(
        <BaseHeaderMenu label="Nav item three">
          <a href="#">Sub item one</a>
          <a href={testHref}>Sub item two</a>
        </BaseHeaderMenu>
      );
      const element = screen.queryByTestId(testIds.menuContainerTestId);
      expect(element).not.toBeInTheDocument();
    });
  });
});
