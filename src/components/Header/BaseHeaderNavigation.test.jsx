/*
Copyright (C) 2018 The Trustees of Indiana University
SPDX-License-Identifier: BSD-3-Clause
*/
import React from "react";
import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import BaseHeaderNavigation from "./BaseHeaderNavigation";
import BaseHeaderMenu from "./BaseHeaderMenu";
import { TestUtils } from "../util/TestUtils";
import userEvent from "@testing-library/user-event";
import BaseHeaderMenuItem from "./BaseHeaderMenuItem";
import Header from "./Header";

const user = userEvent.setup();
const testIds = TestUtils.Header;

const toggleNavThroughClick = async () => {
  await user.click(screen.getByTestId(testIds.navButtonToggleTestId));
};

describe("<BaseHeaderNavigation />", () => {
  describe("Rendering and styling", () => {
    beforeEach(() => {
      render(
        <BaseHeaderNavigation testMode>
          <BaseHeaderMenuItem itemUrl="#">Nav item one</BaseHeaderMenuItem>
          <BaseHeaderMenuItem itemUrl="#">Nav item two</BaseHeaderMenuItem>
          <BaseHeaderMenuItem>
            <BaseHeaderMenu label="Nav item three">
              <a href={"#"}>Sub item one</a>
              <a href={"#"}>Sub item two</a>
              <a href={"#"}>Sub item three</a>
            </BaseHeaderMenu>
          </BaseHeaderMenuItem>
        </BaseHeaderNavigation>,
      );
    });

    it("should render all provided children", () => {
      expect(screen.getByText("Nav item one")).toBeInTheDocument();
      expect(screen.getByText("Nav item one")).toBeInTheDocument();
      expect(screen.getByText("Nav item three")).toBeInTheDocument();
      expect(screen.getByText("Sub item one")).toBeInTheDocument();
      expect(screen.getByText("Sub item two")).toBeInTheDocument();
      expect(screen.getByText("Sub item three")).toBeInTheDocument();
    });

    it("should hide the nav elements by default", () => {
      expect(
        screen.getByTestId(TestUtils.Header.headerNavTestId),
      ).toHaveAttribute("hidden", ""); // testing-library assumes the value of a custom HTML attribute to be "".
    });

    it("should hoist search and avatar components", () => {
      cleanup();
      const { container } = render(
        <BaseHeaderNavigation testMode>
          <BaseHeaderMenuItem itemUrl="#">Nav item one</BaseHeaderMenuItem>
          <Header.Search action={"/mySearchURL"} method={"post"} />
          <Header.Avatar
            username={"johndoe"}
            shortName={"jd"}
            logoutURL={"/logout"}
          />
        </BaseHeaderNavigation>,
      );

      // get the navigation element
      const nav = container.querySelector("nav");
      // nav tag should contain a ul, a div for search, and a div for the avatar
      expect(nav.children.length).toBe(3);
      const ul = nav.querySelector("ul");
      // one item in the list
      expect(ul.children.length).toBe(1);
      // search is outside list
      expect(ul.querySelector("#search")).toBe(null);
      expect(nav.querySelector("#search")).not.toBe(null);
      // avatar is outside the list
      expect(ul.querySelector(".rvt-avatar")).toBe(null);
      expect(nav.querySelector(".rvt-avatar")).not.toBe(null);
    });
  });

  describe("Toggle behavior", () => {
    beforeEach(() => {
      render(
        <BaseHeaderNavigation testMode>
          <BaseHeaderMenuItem itemUrl="#">Nav item one</BaseHeaderMenuItem>
        </BaseHeaderNavigation>,
      );
    });

    it("should show the nav elements when the toggle button is clicked", async () => {
      expect(
        screen.getByTestId(TestUtils.Header.navButtonToggleIcon),
      ).toHaveAttribute("name", "menu");

      // open the nav
      await toggleNavThroughClick();
      expect(
        screen.getByTestId(TestUtils.Header.headerNavTestId),
      ).not.toHaveAttribute("hidden", "");
      expect(
        screen.getByTestId(TestUtils.Header.navButtonToggleIcon),
      ).toHaveAttribute("name", "close");
    });

    it("should not hide the nav if an unhandled key is pressed while the menu is open", async () => {
      expect(
        screen.getByTestId(TestUtils.Header.navButtonToggleIcon),
      ).toHaveAttribute("name", "menu");

      // open the nav
      await toggleNavThroughClick();
      // verify that the nav is opened
      expect(
        screen.getByTestId(TestUtils.Header.headerNavTestId),
      ).not.toHaveAttribute("hidden", "");
      // press an unhandled key
      await user.keyboard("{a}");
      // finally, verify that the nav is not closed
      expect(
        screen.getByTestId(TestUtils.Header.headerNavTestId),
      ).not.toHaveAttribute("hidden", "");
      expect(
        screen.getByTestId(TestUtils.Header.navButtonToggleIcon),
      ).toHaveAttribute("name", "close");
    });

    it("should not hide the nav if the Escape key is pressed while a DOM element that lies outside the nav has focus", async () => {
      expect(
        screen.getByTestId(TestUtils.Header.navButtonToggleIcon),
      ).toHaveAttribute("name", "menu");

      // open the nav
      await toggleNavThroughClick();
      // verify that the nav is opened
      expect(
        screen.getByTestId(TestUtils.Header.headerNavTestId),
      ).not.toHaveAttribute("hidden", "");
      // press escape on a target that lies outside HeaderNavigation
      fireEvent.keyUp(document.body, {
        key: "Escape",
      });
      // finally, verify that the nav is not closed
      expect(
        screen.getByTestId(TestUtils.Header.headerNavTestId),
      ).not.toHaveAttribute("hidden", "");
      expect(
        screen.getByTestId(TestUtils.Header.navButtonToggleIcon),
      ).toHaveAttribute("name", "close");
    });

    it("should hide the nav if a DOM element outside the nav is clicked", async () => {
      expect(
        screen.getByTestId(TestUtils.Header.navButtonToggleIcon),
      ).toHaveAttribute("name", "menu");
      // open the nav
      await toggleNavThroughClick();
      // verify that the nav is opened
      expect(
        screen.getByTestId(TestUtils.Header.headerNavTestId),
      ).not.toHaveAttribute("hidden", "");
      expect(
        screen.getByTestId(TestUtils.Header.navButtonToggleIcon),
      ).toHaveAttribute("name", "close");

      // click outside the nav
      await user.click(document.body);
      // finally, verify that the nav is closed
      expect(
        screen.getByTestId(TestUtils.Header.headerNavTestId),
      ).toHaveAttribute("hidden", "");
      expect(
        screen.getByTestId(TestUtils.Header.navButtonToggleIcon),
      ).toHaveAttribute("name", "menu");
    });

    it("should not hide the nav if a DOM element inside the nav is clicked", async () => {
      expect(
        screen.getByTestId(TestUtils.Header.navButtonToggleIcon),
      ).toHaveAttribute("name", "menu");

      // open the nav
      await toggleNavThroughClick();
      // verify that the nav is opened
      expect(
        screen.getByTestId(TestUtils.Header.headerNavTestId),
      ).not.toHaveAttribute("hidden", "");
      // click inside the nav
      await user.click(screen.getByTestId(TestUtils.Header.headerNavTestId));
      // finally, verify that the nav is not closed
      expect(
        screen.getByTestId(TestUtils.Header.headerNavTestId),
      ).not.toHaveAttribute("hidden", "");
      expect(
        screen.getByTestId(TestUtils.Header.navButtonToggleIcon),
      ).toHaveAttribute("name", "close");
    });

    it("should hide the nav if the toggle button is clicked when the nav is open", async () => {
      expect(
        screen.getByTestId(TestUtils.Header.navButtonToggleIcon),
      ).toHaveAttribute("name", "menu");

      // open the nav
      await toggleNavThroughClick();
      // verify that the nav is opened
      expect(
        screen.getByTestId(TestUtils.Header.headerNavTestId),
      ).not.toHaveAttribute("hidden", "");
      // click the toggle button again
      await toggleNavThroughClick();
      // finally, verify that the nav is closed
      expect(
        screen.getByTestId(TestUtils.Header.headerNavTestId),
      ).toHaveAttribute("hidden", "");
      expect(
        screen.getByTestId(TestUtils.Header.navButtonToggleIcon),
      ).toHaveAttribute("name", "menu");
    });
  });

  describe("Focus behavior", () => {
    const outsideId = "outsideId";
    beforeEach(() => {
      render(
        <>
          <button data-testid={outsideId}>Outside</button>
          <BaseHeaderNavigation testMode>
            <BaseHeaderMenuItem itemUrl="#">Nav item one</BaseHeaderMenuItem>
            <BaseHeaderMenuItem itemUrl="#">Nav item two</BaseHeaderMenuItem>
            <BaseHeaderMenuItem itemUrl="#">Nav item three</BaseHeaderMenuItem>
          </BaseHeaderNavigation>
          ,
        </>,
      );
    });

    it("moves focus back to the toggle button, if the nav is closed by pressing Escape while an item inside the nav has focus", async () => {
      // open the nav
      await toggleNavThroughClick();
      // move focus to an item inside nav
      screen.getByText("Nav item one").focus();
      // assert that focus is not on the toggle button
      expect(
        screen.getByTestId(TestUtils.Header.navButtonToggleTestId),
      ).not.toHaveFocus();
      // close the nav by pressing Escape
      await user.keyboard("{Escape}");
      // assert that focus is on the toggle button
      expect(
        screen.getByTestId(TestUtils.Header.navButtonToggleTestId),
      ).toHaveFocus();
    });

    it("should move focus to the first menu item, if ArrowDown is pressed while the menu is open and the toggle button has focus", async () => {
      await toggleNavThroughClick(); // open the menu
      // move focus to toggle button
      screen.getByTestId(testIds.navButtonToggleTestId).focus();
      // press ArrowDown
      await user.keyboard("{ArrowDown}");
      expect(screen.getByText("Nav item one")).toHaveFocus();
    });

    it("should open and move focus to the first menu item, if ArrowDown is pressed while the menu is close and the toggle button has focus", async () => {
      // move focus to toggle button
      screen.getByTestId(testIds.navButtonToggleTestId).focus();

      // press ArrowDown
      await user.keyboard("{ArrowDown}");
      expect(screen.getByTestId(testIds.headerNavTestId)).not.toHaveAttribute(
        "hidden",
        "",
      );
      expect(screen.getByText("Nav item one")).toHaveFocus();
    });

    it("should move focus to the first menu item, if ArrowDown is pressed while the menu is open and the menu anchor has focus", async () => {
      await toggleNavThroughClick(); // open the menu
      // move focus to menu anchor
      screen.getByTestId(testIds.navButtonToggleTestId).focus();
      // press ArrowDown
      await user.keyboard("{ArrowDown}");
      expect(screen.getByText("Nav item one")).toHaveFocus();
    });

    it("should open and move focus to the first menu item, if ArrowDown is pressed while the menu is closed and the menu anchor has focus", async () => {
      // move focus to menu anchor
      screen.getByTestId(testIds.navButtonToggleTestId).focus();

      // press ArrowDown
      await user.keyboard("{ArrowDown}");
      expect(screen.getByTestId(testIds.headerNavTestId)).not.toHaveAttribute(
        "hidden",
        "",
      );
      expect(screen.getByText("Nav item one")).toHaveFocus();
    });

    it("should move focus to the next menu item when Arrow Up is pressed, and to the previous menu item when Arrow Down is pressed", async () => {
      await toggleNavThroughClick(); // open the menu
      await user.keyboard("{ArrowDown}");
      expect(screen.getByText("Nav item two")).toHaveFocus();
      await user.keyboard("{ArrowUp}");
      expect(screen.getByText("Nav item one")).toHaveFocus();
    });

    it("should move focus to the first menu item when the last menu item has focus, and Arrow Down is pressed", async () => {
      await toggleNavThroughClick(); // open the menu
      await user.keyboard("{ArrowDown}");
      await user.keyboard("{ArrowDown}");
      // assert that last menu item has focus
      expect(screen.getByText("Nav item three")).toHaveFocus();
      // press Arrow Down
      await user.keyboard("{ArrowDown}");
      expect(screen.getByText("Nav item one")).toHaveFocus();
    });

    it("should move focus to the last menu item when the first menu item has focus, and Arrow Up is pressed", async () => {
      await toggleNavThroughClick(); // open the menu
      // assert that first menu item has focus
      expect(screen.getByText("Nav item one")).toHaveFocus();
      // press Arrow Up
      await user.keyboard("{ArrowUp}");
      expect(screen.getByText("Nav item three")).toHaveFocus();
    });

    it("should not move focus, if Arrow Up or Arrow Down are pressed while the menu is closed", async () => {
      async function makeAssertion(arrowKey) {
        // move focus off menu
        screen.getByTestId(outsideId).focus();
        // verify that focus is on outer button
        expect(screen.getByTestId(outsideId)).toHaveFocus();
        // verify that menu is closed
        expect(screen.getByTestId(testIds.headerNavTestId)).toHaveAttribute(
          "hidden",
          "",
        ); // testing-library assumes the value of a custom HTML attribute to be "".
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
    it("should default the aria-expanded attribute to false", () => {
      render(
        <BaseHeaderNavigation testMode>
          <BaseHeaderMenuItem itemUrl="#">Nav item one</BaseHeaderMenuItem>
        </BaseHeaderNavigation>,
      );
      expect(
        screen.getByTestId(TestUtils.Header.navButtonToggleTestId),
      ).toHaveAttribute("aria-expanded", "false");
    });

    it("should change the aria-expanded attribute to true when the nav is opened", async () => {
      render(
        <BaseHeaderNavigation testMode>
          <BaseHeaderMenuItem itemUrl="#">Nav item one</BaseHeaderMenuItem>
        </BaseHeaderNavigation>,
      );
      await toggleNavThroughClick(); // open the nav
      expect(
        screen.getByTestId(TestUtils.Header.navButtonToggleTestId),
      ).toHaveAttribute("aria-expanded", "true");
    });
  });

  describe("Options", () => {
    it("by default, non list items should render outside list", () => {
      render(
        <BaseHeaderNavigation testMode>
          <BaseHeaderMenuItem>Nav item one</BaseHeaderMenuItem>
          <li>Nav item two</li>
          <div>Nav item three</div>
        </BaseHeaderNavigation>,
      );
      const element = screen.queryByTestId(testIds.headerNavTestId);
      expect(element.children.length).toBe(2);
      const list = element.children[0];
      const component = element.children[1];
      expect(list.nodeName).toBe("UL");
      expect(component.nodeName).toBe("DIV");
      expect(component.innerHTML).toBe("Nav item three");
    });
    it("if marked with navlistitem item should render inside list", () => {
      render(
        <BaseHeaderNavigation testMode>
          <BaseHeaderMenuItem>Nav item one</BaseHeaderMenuItem>
          <li>Nav item two</li>
          <div navlistitem>Nav item three</div>
        </BaseHeaderNavigation>,
      );
      const element = screen.queryByTestId(testIds.headerNavTestId);
      expect(element.children.length).toBe(1);
      const list = element.children[0];
      expect(list.nodeName).toBe("UL");
      expect(list.children.length).toBe(3);
      const component = list.children[2];
      expect(component.nodeName).toBe("DIV");
      expect(component.innerHTML).toBe("Nav item three");
    });
  });
});
