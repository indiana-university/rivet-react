/*
Copyright (C) 2018 The Trustees of Indiana University
SPDX-License-Identifier: BSD-3-Clause
*/
import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import Header from "./Header";

import { TestUtils } from "../util/TestUtils";
import userEvent from "@testing-library/user-event";

const user = userEvent.setup();

const toggleSecondaryNavThroughClick = async () => {
  await user.click(
    screen.getByTestId(TestUtils.Header.secondaryNavToggleTestId),
  );
};

describe("<HeaderNavigationSecondary/>", () => {
  const testWidth = "md";
  const testTitle = "Test title";
  const testHref = "/testHref";

  describe("Rendering and styling", () => {
    beforeEach(() => {
      render(
        <Header.NavigationSecondary
          testMode
          title={testTitle}
          href={testHref}
          navWidth={"md"}
        >
          <ul>
            <li>
              <a href="#">Section item one</a>
            </li>
            <li data-rvt-c-header-nav-item__current>
              <Header.Menu label="Section item two">
                <a href="#">Sub item one</a>
              </Header.Menu>
            </li>
          </ul>
        </Header.NavigationSecondary>,
      );
    });

    it("should render all provided children", () => {
      expect(screen.getByText("Section item one")).toBeInTheDocument();
      expect(screen.getByText("Section item two")).toBeInTheDocument();
      expect(screen.getByText("Sub item one")).toBeInTheDocument();
    });

    it("should apply to the container div a rivet class specifying the navWidth, if navWidth is provided", () => {
      expect(
        screen.getByTestId(TestUtils.Header.secondaryNavContainerTestId),
      ).toHaveClass("rvt-container-" + testWidth);
    });

    it("should apply the title and href props to the anchor, if title and href props are provided", () => {
      expect(screen.getByRole("link")).toHaveTextContent(testTitle);
      expect(screen.getByRole("link")).toHaveAttribute("href", testHref);
    });
  });

  describe("Defaulting props", () => {
    beforeEach(() => {
      render(
        <Header.NavigationSecondary testMode title={"Title"}>
          <ul>
            <li>
              <a href="#">Section item one</a>
            </li>
            <li data-rvt-c-header-nav-item__current>
              <Header.Menu label="Section item two">
                <a href="#">Sub item one</a>
              </Header.Menu>
            </li>
          </ul>
        </Header.NavigationSecondary>,
      );
    });

    it("should default the href to #, if href is not provided", () => {
      expect(screen.getAllByRole("link")[0]).toHaveAttribute("href", "#");
    });

    it("should default the width on the containing DOM element to xl, if navWidth is not provided", () => {
      expect(
        screen.getByTestId(TestUtils.Header.secondaryNavContainerTestId),
      ).toHaveClass("rvt-container-xl");
    });

    it("should default the title prop, if not provided", () => {
      expect(screen.getByRole("link")).toHaveTextContent("Title");
    });
  });

  describe("Toggle behavior", () => {
    beforeEach(() => {
      render(
        <Header.NavigationSecondary testMode title={"Title"}>
          <ul>
            <li>
              <a href="#">Section item one</a>
            </li>
            <li data-rvt-c-header-nav-item__current>
              <Header.Menu label="Section item two">
                <a href="#">Sub item one</a>
              </Header.Menu>
            </li>
          </ul>
        </Header.NavigationSecondary>,
      );
    });

    it("should show the secondary nav when the toggle button is clicked", async () => {
      await toggleSecondaryNavThroughClick(); // open secondary nav
      expect(
        screen.getByTestId(TestUtils.Header.secondaryNavTestId),
      ).not.toHaveAttribute("hidden", "");
    });

    it("should not hide the secondary nav if the Tab key is pressed while the secondary nav is open", async () => {
      // open the secondary nav
      await toggleSecondaryNavThroughClick();
      // verify that the secondary nav is opened
      expect(
        screen.getByTestId(TestUtils.Header.secondaryNavTestId),
      ).not.toHaveAttribute("hidden", "");
      // press Tab
      await user.keyboard("{Tab}");
      // finally, verify that the secondary nav is not closed
      expect(
        screen.getByTestId(TestUtils.Header.secondaryNavTestId),
      ).not.toHaveAttribute("hidden", "");
    });

    it("should not hide the secondary nav if an unhandled key is pressed while the secondary nav is open", async () => {
      // open the secondary nav
      await toggleSecondaryNavThroughClick();
      // verify that the secondary nav is opened
      expect(
        screen.getByTestId(TestUtils.Header.secondaryNavTestId),
      ).not.toHaveAttribute("hidden", "");
      // press an unhandled key
      await user.keyboard("{a}");
      // finally, verify that the secondary nav is not closed
      expect(
        screen.getByTestId(TestUtils.Header.secondaryNavTestId),
      ).not.toHaveAttribute("hidden", "");
    });

    it("should not hide the secondary nav if the Escape key is pressed while a DOM element that lies outside the secondary nav has focus", async () => {
      // open the secondary nav
      await toggleSecondaryNavThroughClick();
      // verify that the secondary nav is opened
      expect(
        screen.getByTestId(TestUtils.Header.secondaryNavTestId),
      ).not.toHaveAttribute("hidden", "");
      // move focus to document body
      document.activeElement.blur();
      // press Escape
      await user.keyboard("{Escape}");
      // finally, verify that the secondary nav is not closed
      expect(
        screen.getByTestId(TestUtils.Header.secondaryNavTestId),
      ).not.toHaveAttribute("hidden", "");
    });

    it("should hide the secondary nav if a DOM element outside the secondary nav is clicked", async () => {
      // open the secondary nav
      await toggleSecondaryNavThroughClick();
      // verify that the secondary nav is opened
      expect(
        screen.getByTestId(TestUtils.Header.secondaryNavTestId),
      ).not.toHaveAttribute("hidden", "");
      // click outside the secondary nav
      await user.click(document.body);
      // finally, verify that the secondary nav is closed
      expect(
        screen.getByTestId(TestUtils.Header.secondaryNavTestId),
      ).toHaveAttribute("hidden", "");
    });

    it("should not hide the secondary nav if a DOM element inside the secondary nav is clicked", async () => {
      // open the secondary nav
      await toggleSecondaryNavThroughClick();
      // verify that the secondary nav is opened
      expect(
        screen.getByTestId(TestUtils.Header.secondaryNavTestId),
      ).not.toHaveAttribute("hidden", "");
      // click inside the secondary nav
      await user.click(screen.getByTestId(TestUtils.Header.secondaryNavTestId));
      // finally, verify that the secondary nav is not closed
      expect(
        screen.getByTestId(TestUtils.Header.secondaryNavTestId),
      ).not.toHaveAttribute("hidden", "");
    });

    it("should hide the secondary nav if the toggle button is clicked when the secondary nav is open", async () => {
      // open the secondary nav
      await toggleSecondaryNavThroughClick();
      // verify that the secondary nav is opened
      expect(
        screen.getByTestId(TestUtils.Header.secondaryNavTestId),
      ).not.toHaveAttribute("hidden", "");
      // click the toggle button again
      await toggleSecondaryNavThroughClick();
      // finally, verify that the secondary nav is closed
      expect(
        screen.getByTestId(TestUtils.Header.secondaryNavTestId),
      ).toHaveAttribute("hidden", "");
    });
  });

  describe("Accessibility", () => {
    beforeEach(() => {
      render(
        <Header.NavigationSecondary testMode title={"Title"}>
          <ul>
            <li>
              <a href="#">Section item one</a>
            </li>
            <li data-rvt-c-header-nav-item__current>
              <Header.Menu label="Section item two">
                <a href="#">Sub item one</a>
              </Header.Menu>
            </li>
          </ul>
        </Header.NavigationSecondary>,
      );
    });

    it("should default the aria-expanded attribute to false", () => {
      expect(
        screen.getByTestId(TestUtils.Header.secondaryNavToggleTestId),
      ).toHaveAttribute("aria-expanded", "false");
    });

    it("should change the aria-expanded attribute to true when the secondary nav is opened", async () => {
      await toggleSecondaryNavThroughClick(); // open the secondary nav
      expect(
        screen.getByTestId(TestUtils.Header.secondaryNavToggleTestId),
      ).toHaveAttribute("aria-expanded", "true");
    });
  });
});
