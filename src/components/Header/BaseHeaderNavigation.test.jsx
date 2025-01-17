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

const toggleNavThroughClick = async () => {
  await user.click(screen.getByTestId(TestUtils.Header.navButtonToggleTestId));
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

    it("should not hide the nav if the Tab key is pressed while the nav is open", async () => {
      expect(
        screen.getByTestId(TestUtils.Header.navButtonToggleIcon),
      ).toHaveAttribute("name", "menu");

      // open the nav
      await toggleNavThroughClick();
      // verify that the nav is opened
      expect(
        screen.getByTestId(TestUtils.Header.headerNavTestId),
      ).not.toHaveAttribute("hidden", "");
      // press Tab
      await user.keyboard("{Tab}");
      // finally, verify that the menu is not closed
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
    beforeEach(() => {
      render(
        <BaseHeaderNavigation testMode>
          <BaseHeaderMenuItem itemUrl="#">Nav item one</BaseHeaderMenuItem>
        </BaseHeaderNavigation>,
      );
    });

    it("moves focus back to the toggle button, if the nav is closed by pressing Escape while an item inside the nav has focus", async () => {
      // open the nav
      await toggleNavThroughClick();
      // move focus to an item inside nav
      screen.getByRole("link").focus();
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
});
