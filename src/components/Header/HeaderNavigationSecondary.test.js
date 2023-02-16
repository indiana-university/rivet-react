import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import Header from "./Header";

import { TestUtils } from "../util/TestUtils";
import userEvent from "@testing-library/user-event";

const user = userEvent.setup();

const clickToggleButton = async () => {
  await user.click(
    screen.getByTestId(TestUtils.Header.secondaryNavToggleTestId)
  );
};

const pressReturnOnToggleButton = async () => {
  screen.getByTestId(TestUtils.Header.secondaryNavToggleTestId).focus();
  await user.keyboard("{Enter}");
};

describe("<HeaderNavigationSecondary/>", () => {
  const testWidth = "md";
  const testTitle = "Test title";
  const testHref = "/testHref";

  describe("Rendering and styling", () => {
    beforeEach(() => {
      render(
        <Header.NavigationSecondary
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
        </Header.NavigationSecondary>
      );
    });

    it("should render all provided children", () => {
      expect(screen.getByText("Section item one")).toBeInTheDocument();
      expect(screen.getByText("Section item two")).toBeInTheDocument();
      expect(screen.getByText("Sub item one")).toBeInTheDocument();
    });

    it("should apply to the container div a rivet class specifying the navWidth, if navWidth is provided", () => {
      expect(
        screen.getByTestId(TestUtils.Header.secondaryNavContainerTestId)
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
        <Header.NavigationSecondary title={"Title"}>
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
        </Header.NavigationSecondary>
      );
    });

    it("should default the href to #, if href is not provided", () => {
      expect(screen.getAllByRole("link")[0]).toHaveAttribute("href", "#");
    });

    it("should default the width on the containing DOM element to xl, if navWidth is not provided", () => {
      expect(
        screen.getByTestId(TestUtils.Header.secondaryNavContainerTestId)
      ).toHaveClass("rvt-container-xl");
    });
  });

  describe("Toggle behavior", () => {
    beforeEach(() => {
      render(
        <Header.NavigationSecondary title={"Title"}>
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
        </Header.NavigationSecondary>
      );
    });

    it("should show the secondary nav when the toggle button is clicked", async () => {
      // open the secondary nav
      await clickToggleButton();

      expect(
        screen.getByTestId(TestUtils.Header.secondaryNavTestId)
      ).not.toHaveAttribute("hidden", "");
    });

    it("should show the secondary nav when the return key is pressed while the toggle button has focus", async () => {
      // open the secondary nav
      await pressReturnOnToggleButton();

      expect(
        screen.getByTestId(TestUtils.Header.secondaryNavTestId)
      ).not.toHaveAttribute("hidden", "");
    });

    it("should hide the secondary nav when the return key is pressed while the toggle button has focus, if the secondary nav is already open", async () => {
      await pressReturnOnToggleButton();
      // verify that the secondary nav is open
      expect(
        screen.getByTestId(TestUtils.Header.secondaryNavTestId)
      ).not.toHaveAttribute("hidden", "");
      // press toggle again
      await pressReturnOnToggleButton();
      // verify that the secondary nav is closed
      expect(
        screen.getByTestId(TestUtils.Header.secondaryNavTestId)
      ).toHaveAttribute("hidden", "");
    });

    it("should not hide the secondary nav if the Tab key is pressed while the secondary nav is open", async () => {
      // open the secondary nav
      await clickToggleButton();
      // verify that the secondary nav is opened
      expect(
        screen.getByTestId(TestUtils.Header.secondaryNavTestId)
      ).not.toHaveAttribute("hidden", "");
      // press Escape
      await user.keyboard("{Tab}");

      // finally, verify that the secondary nav is not closed
      expect(
        screen.getByTestId(TestUtils.Header.secondaryNavTestId)
      ).not.toHaveAttribute("hidden", "");
    });

    it("should not hide the secondary nav if a right click occurs while the secondary nav is open", async () => {
      // open the secondary nav
      await clickToggleButton();
      // verify that the secondary nav is opened
      expect(
        screen.getByTestId(TestUtils.Header.secondaryNavTestId)
      ).not.toHaveAttribute("hidden", "");
      // do a right click
      await user.pointer("[MouseRight]");

      // finally, verify that the secondary nav is not closed
      expect(
        screen.getByTestId(TestUtils.Header.secondaryNavTestId)
      ).not.toHaveAttribute("hidden", "");
    });

    it("should not hide the secondary nav if an unhandled key is pressed while the secondary nav is open", async () => {
      // open the secondary nav
      await clickToggleButton();
      // verify that the secondary nav is opened
      expect(
        screen.getByTestId(TestUtils.Header.secondaryNavTestId)
      ).not.toHaveAttribute("hidden", "");
      // press an unhandled key
      await user.keyboard("{a}");

      // finally, verify that the secondary nav is not closed
      expect(
        screen.getByTestId(TestUtils.Header.secondaryNavTestId)
      ).not.toHaveAttribute("hidden", "");
    });

    it("should hide the secondary nav if the Escape key is pressed while the secondary nav is open", async () => {
      // open the secondary nav
      await clickToggleButton();
      // verify that the secondary nav is opened
      expect(
        screen.getByTestId(TestUtils.Header.secondaryNavTestId)
      ).not.toHaveAttribute("hidden", "");
      // press Escape
      await user.keyboard("{Escape}");

      // finally, verify that the secondary nav is closed
      expect(
        screen.getByTestId(TestUtils.Header.secondaryNavTestId)
      ).toHaveAttribute("hidden", "");
    });

    it("should not hide the secondary nav if the Escape key is pressed while a DOM element that lies outside the secondary nav has focus", async () => {
      // open the secondary nav
      await clickToggleButton();
      // verify that the secondary nav is opened
      expect(
        screen.getByTestId(TestUtils.Header.secondaryNavTestId)
      ).not.toHaveAttribute("hidden", "");

      // move focus to document body
      document.activeElement.blur();
      // press Escape
      await user.keyboard("{Escape}");

      // finally, verify that the secondary nav is not closed
      expect(
        screen.getByTestId(TestUtils.Header.secondaryNavTestId)
      ).not.toHaveAttribute("hidden", "");
    });

    it("should hide the secondary nav if a DOM element outside the secondary nav is clicked", async () => {
      // open the secondary nav
      await clickToggleButton();
      // verify that the secondary nav is opened
      expect(
        screen.getByTestId(TestUtils.Header.secondaryNavTestId)
      ).not.toHaveAttribute("hidden", "");
      // click outside the secondary nav
      await user.click(document.body);

      // finally, verify that the secondary nav is closed
      expect(
        screen.getByTestId(TestUtils.Header.secondaryNavTestId)
      ).toHaveAttribute("hidden", "");
    });

    it("should not hide the secondary nav if a DOM element inside the secondary nav is clicked", async () => {
      // open the secondary nav
      await clickToggleButton();
      // verify that the secondary nav is opened
      expect(
        screen.getByTestId(TestUtils.Header.secondaryNavTestId)
      ).not.toHaveAttribute("hidden", "");
      // click inside the secondary nav
      await user.click(screen.getByTestId(TestUtils.Header.secondaryNavTestId));

      // finally, verify that the secondary nav is not closed
      expect(
        screen.getByTestId(TestUtils.Header.secondaryNavTestId)
      ).not.toHaveAttribute("hidden", "");
    });

    it("should hide the secondary nav if the toggle button is clicked when the secondary nav is open", async () => {
      // open the secondary nav
      await clickToggleButton();
      // verify that the secondary nav is opened
      expect(
        screen.getByTestId(TestUtils.Header.secondaryNavTestId)
      ).not.toHaveAttribute("hidden", "");
      // click the toggle button again
      await clickToggleButton();

      // finally, verify that the secondary nav is closed
      expect(
        screen.getByTestId(TestUtils.Header.secondaryNavTestId)
      ).toHaveAttribute("hidden", "");
    });

    it("should not hide the secondary nav when focus is moved to a DOM element outside the secondary nav", async () => {
      // first, move focus to the last nav item
      await clickToggleButton(); // open the nav
      await user.keyboard("{Tab}");
      await user.keyboard("{Tab}");
      // assert that focus is on last nav item
      expect(screen.getByText("Section item two")).toHaveFocus();
      // Press tab to move focus outside the HeaderNavigationSecondary component
      await user.keyboard("{Tab}");

      // assert that nav is still open
      expect(
        screen.getByTestId(TestUtils.Header.secondaryNavTestId)
      ).not.toHaveAttribute("hidden", "");
    });
  });

  describe("Focus behavior", () => {
    beforeEach(() => {
      render(
        <Header.NavigationSecondary title={"Title"}>
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
        </Header.NavigationSecondary>
      );
    });

    it("should not keep focus on the toggle button when the secondary nav is opened", async () => {
      // open the secondary nav
      await clickToggleButton();

      console.log(document.activeElement);

      expect(
        screen.getByTestId(TestUtils.Header.secondaryNavToggleTestId)
      ).not.toHaveFocus();
    });

    it("should move focus to the toggle button, if secondary nav is closed by pressing Escape", async () => {
      // open the secondary nav
      await clickToggleButton();
      // press Escape
      await user.keyboard("{Escape}");

      // verify focus is on the toggle button
      expect(
        screen.getByTestId(TestUtils.Header.secondaryNavToggleTestId)
      ).toHaveFocus();
    });

    it("should move focus back to the toggle button, if secondary nav is closed by clicking the toggle button", async () => {
      // open the secondary nav
      await clickToggleButton();
      // close the menu by clicking the toggle button again
      await clickToggleButton();

      // verify focus is on the toggle button
      expect(
        screen.getByTestId(TestUtils.Header.secondaryNavToggleTestId)
      ).toHaveFocus();
    });

    it("should not move focus back to the toggle button, if secondary nav is closed by clicking outside the menu", async () => {
      // open the secondary nav
      await clickToggleButton();
      // close the menu by clicking outside
      await user.click(document.body);

      // verify focus is not on the toggle button
      expect(
        screen.getByTestId(TestUtils.Header.secondaryNavToggleTestId)
      ).not.toHaveFocus();
    });
  });

  describe("Accessibility", () => {
    beforeEach(() => {
      render(
        <Header.NavigationSecondary title={"Title"}>
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
        </Header.NavigationSecondary>
      );
    });

    it("should default the aria-expanded attribute to false", () => {
      expect(
        screen.getByTestId(TestUtils.Header.secondaryNavToggleTestId)
      ).toHaveAttribute("aria-expanded", "false");
    });

    it("should change the aria-expanded attribute to true when the secondary nav is opened", async () => {
      // open the secondary nav
      await clickToggleButton();

      expect(
        screen.getByTestId(TestUtils.Header.secondaryNavToggleTestId)
      ).toHaveAttribute("aria-expanded", "true");
    });
  });
});
