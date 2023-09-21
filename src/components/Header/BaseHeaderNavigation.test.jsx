/*
Copyright (C) 2018 The Trustees of Indiana University
SPDX-License-Identifier: BSD-3-Clause
*/
import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import BaseHeaderNavigation from "./BaseHeaderNavigation";
import BaseHeaderMenu from "./BaseHeaderMenu";
import { TestUtils } from "../util/TestUtils";
import userEvent from "@testing-library/user-event";

const user = userEvent.setup();

const toggleNavThroughClick = async () => {
  await user.click(screen.getByTestId(TestUtils.Header.navButtonToggleTestId));
};

describe("<BaseHeaderNavigation />", () => {
  describe("Rendering and styling", () => {
    beforeEach(() => {
      render(
        <BaseHeaderNavigation testMode>
          <ul>
            <li>
              <a href={"#"}>Nav item one</a>
            </li>
            <li>
              <a href={"#"}>Nav item two</a>
            </li>
            <li>
              <BaseHeaderMenu label="Nav item three">
                <a href={"#"}>Sub item one</a>
                <a href={"#"}>Sub item two</a>
                <a href={"#"}>Sub item three</a>
              </BaseHeaderMenu>
            </li>
          </ul>
        </BaseHeaderNavigation>
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
        screen.getByTestId(TestUtils.Header.headerNavTestId)
      ).toHaveAttribute("hidden", ""); // testing-library assumes the value of a custom HTML attribute to be "".
    });
  });

  describe("Toggle behavior", () => {
    beforeEach(() => {
      render(
        <BaseHeaderNavigation testMode>
          <ul>
            <li>
              <a href={"#"}>Nav item one</a>
            </li>
          </ul>
        </BaseHeaderNavigation>
      );
    });

    it("should show the nav elements when the toggle button is clicked", async () => {
      // open the nav
      await toggleNavThroughClick();
      expect(
        screen.getByTestId(TestUtils.Header.headerNavTestId)
      ).not.toHaveAttribute("hidden", "");
    });

    it("should not hide the nav if the Tab key is pressed while the nav is open", async () => {
      // open the nav
      await toggleNavThroughClick();
      // verify that the nav is opened
      expect(
        screen.getByTestId(TestUtils.Header.headerNavTestId)
      ).not.toHaveAttribute("hidden", "");
      // press Tab
      await user.keyboard("{Tab}");
      // finally, verify that the menu is not closed
      expect(
        screen.getByTestId(TestUtils.Header.headerNavTestId)
      ).not.toHaveAttribute("hidden", "");
    });

    it("should not hide the nav if an unhandled key is pressed while the menu is open", async () => {
      // open the nav
      await toggleNavThroughClick();
      // verify that the nav is opened
      expect(
        screen.getByTestId(TestUtils.Header.headerNavTestId)
      ).not.toHaveAttribute("hidden", "");
      // press an unhandled key
      await user.keyboard("{a}");
      // finally, verify that the nav is not closed
      expect(
        screen.getByTestId(TestUtils.Header.headerNavTestId)
      ).not.toHaveAttribute("hidden", "");
    });

    it("should not hide the nav if the Escape key is pressed while a DOM element that lies outside the nav has focus", async () => {
      // open the nav
      await toggleNavThroughClick();
      // verify that the nav is opened
      expect(
        screen.getByTestId(TestUtils.Header.headerNavTestId)
      ).not.toHaveAttribute("hidden", "");
      // press escape on a target that lies outside HeaderNavigation
      fireEvent.keyUp(document.body, {
        key: "Escape",
      });
      // finally, verify that the nav is not closed
      expect(
        screen.getByTestId(TestUtils.Header.headerNavTestId)
      ).not.toHaveAttribute("hidden", "");
    });

    it("should hide the nav if a DOM element outside the nav is clicked", async () => {
      // open the nav
      await toggleNavThroughClick();
      // verify that the nav is opened
      expect(
        screen.getByTestId(TestUtils.Header.headerNavTestId)
      ).not.toHaveAttribute("hidden", "");
      // click outside the nav
      await user.click(document.body);
      // finally, verify that the nav is closed
      expect(
        screen.getByTestId(TestUtils.Header.headerNavTestId)
      ).toHaveAttribute("hidden", "");
    });

    it("should not hide the nav if a DOM element inside the nav is clicked", async () => {
      // open the nav
      await toggleNavThroughClick();
      // verify that the nav is opened
      expect(
        screen.getByTestId(TestUtils.Header.headerNavTestId)
      ).not.toHaveAttribute("hidden", "");
      // click inside the nav
      await user.click(screen.getByTestId(TestUtils.Header.headerNavTestId));
      // finally, verify that the nav is not closed
      expect(
        screen.getByTestId(TestUtils.Header.headerNavTestId)
      ).not.toHaveAttribute("hidden", "");
    });

    it("should hide the nav if the toggle button is clicked when the nav is open", async () => {
      // open the nav
      await toggleNavThroughClick();
      // verify that the nav is opened
      expect(
        screen.getByTestId(TestUtils.Header.headerNavTestId)
      ).not.toHaveAttribute("hidden", "");
      // click the toggle button again
      await toggleNavThroughClick();
      // finally, verify that the nav is closed
      expect(
        screen.getByTestId(TestUtils.Header.headerNavTestId)
      ).toHaveAttribute("hidden", "");
    });
  });

  describe("Focus behavior", () => {
    beforeEach(() => {
      render(
        <BaseHeaderNavigation testMode>
          <ul>
            <li>
              <a href={"#"}>Nav item one</a>
            </li>
          </ul>
        </BaseHeaderNavigation>
      );
    });

    it("moves focus back to the toggle button, if the nav is closed by pressing Escape while an item inside the nav has focus", async () => {
      // open the nav
      await toggleNavThroughClick();
      // move focus to an item inside nav
      screen.getByRole("link").focus();
      // assert that focus is not on the toggle button
      expect(
        screen.getByTestId(TestUtils.Header.navButtonToggleTestId)
      ).not.toHaveFocus();
      // close the nav by pressing Escape
      await user.keyboard("{Escape}");
      // assert that focus is on the toggle button
      expect(
        screen.getByTestId(TestUtils.Header.navButtonToggleTestId)
      ).toHaveFocus();
    });
  });

  describe("Accessibility", () => {
    it("should default the aria-expanded attribute to false", () => {
      render(
        <BaseHeaderNavigation testMode>
          <ul>
            <li>
              <a href={"#"}>Nav item one</a>
            </li>
          </ul>
        </BaseHeaderNavigation>
      );
      expect(
        screen.getByTestId(TestUtils.Header.navButtonToggleTestId)
      ).toHaveAttribute("aria-expanded", "false");
    });

    it("should change the aria-expanded attribute to true when the nav is opened", async () => {
      render(
        <BaseHeaderNavigation testMode>
          <ul>
            <li>
              <a href={"#"}>Nav item one</a>
            </li>
          </ul>
        </BaseHeaderNavigation>
      );
      await toggleNavThroughClick(); // open the nav
      expect(
        screen.getByTestId(TestUtils.Header.navButtonToggleTestId)
      ).toHaveAttribute("aria-expanded", "true");
    });
  });
});
