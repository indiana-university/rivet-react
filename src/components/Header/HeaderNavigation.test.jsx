import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import Header from "./Header";
import { TestUtils } from "../util/TestUtils";
import userEvent from "@testing-library/user-event";

const user = userEvent.setup();

const toggleNavThroughClick = async () => {
  await user.click(screen.getByTestId(TestUtils.Header.navButtonToggleTestId));
};

describe("<HeaderNavigation />", () => {
  describe("Rendering and styling", () => {
    beforeEach(() => {
      render(
        <Header.Navigation>
          <ul>
            <li>
              <a href={"#"}>Nav item one</a>
            </li>
            <li data-rvt-c-header-nav-item__current>
              <a href={"#"}>Nav item two</a>
            </li>
            <li>
              <Header.Menu label="Nav item three">
                <a href={"#"}>Sub item one</a>
                <a href={"#"}>Sub item two</a>
                <a href={"#"}>Sub item three</a>
              </Header.Menu>
            </li>
          </ul>
        </Header.Navigation>
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

    it("should apply appropriate styles on the nav item that is wrapped in an <li> with the data-rvt-c-header-nav-item__current attribute", () => {
      expect(
        screen.getAllByTestId(TestUtils.Header.navListItemTestId)[1]
      ).toHaveClass("rvt-header-menu__item--current");
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
        <Header.Navigation>
          <ul>
            <li>
              <a href={"#"}>Nav item one</a>
            </li>
          </ul>
        </Header.Navigation>
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
      // press Escape
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

  describe("Accessibility", () => {
    it("should apply the aria-current attribute with value 'page' on an anchor nav item that is wrapped in an <li> with the data-rvt-c-header-nav-item__current attribute", () => {
      render(
        <Header.Navigation>
          <ul>
            <li>
              <a href={"#"}>Nav item one</a>
            </li>
            <li data-rvt-c-header-nav-item__current>
              <a href={"#"}>Nav item two</a>
            </li>
          </ul>
        </Header.Navigation>
      );
      expect(screen.getByText("Nav item two")).toHaveAttribute(
        "aria-current",
        "page"
      );
    });

    it("should apply the aria-current attribute with value 'page' on a HeaderMenu nav item that is wrapped in an <li> with the data-rvt-c-header-nav-item__current attribute", () => {
      render(
        <Header.Navigation>
          <ul>
            <li>
              <a href={"#"}>Nav item one</a>
            </li>
            <li data-rvt-c-header-nav-item__current>
              <Header.Menu label="Nav item two">
                <a href={"#"}>Sub item one</a>
              </Header.Menu>
            </li>
          </ul>
        </Header.Navigation>
      );
      expect(screen.getByText("Nav item two")).toHaveAttribute(
        "aria-current",
        "page"
      );
    });

    it("should default the aria-expanded attribute to false", () => {
      render(
        <Header.Navigation>
          <ul>
            <li>
              <a href={"#"}>Nav item one</a>
            </li>
          </ul>
        </Header.Navigation>
      );
      expect(
        screen.getByTestId(TestUtils.Header.navButtonToggleTestId)
      ).toHaveAttribute("aria-expanded", "false");
    });

    it("should change the aria-expanded attribute to true when the nav is opened", async () => {
      render(
        <Header.Navigation>
          <ul>
            <li>
              <a href={"#"}>Nav item one</a>
            </li>
          </ul>
        </Header.Navigation>
      );
      await toggleNavThroughClick(); // open the nav
      expect(
        screen.getByTestId(TestUtils.Header.navButtonToggleTestId)
      ).toHaveAttribute("aria-expanded", "true");
    });
  });
});
