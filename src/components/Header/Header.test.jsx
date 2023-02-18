import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import Header from "./Header";
import { TestUtils } from "../util/TestUtils";
import userEvent from "@testing-library/user-event";

const testTitle = "Test title";
const testHref = "/testHref";
const testSubTitle = "Test Sub title";
const testWidth = "md";

const user = userEvent.setup();

const clickSearchToggleButton = async () => {
  await user.click(
    screen.getByTestId(TestUtils.Header.searchToggleButtonTestId)
  );
};

const clickHeaderMenuToggleButton = async () => {
  await user.click(screen.getByTestId(TestUtils.Header.menuButtonToggleTestId));
};

const clickHeaderNavToggleButton = async () => {
  await user.click(screen.getByTestId(TestUtils.Header.navButtonToggleTestId));
};

const clickSecondaryNavToggleButton = async () => {
  await user.click(
    screen.getByTestId(TestUtils.Header.secondaryNavToggleTestId)
  );
};

describe("<Header />", () => {
  describe("Rendering and styling", () => {
    // it("should throw some error when a title prop is not provided", () => {
    //   render(<Header/>)
    //   // expect some error to be thrown/logged on console
    // })

    it("should render a skip link", () => {
      render(<Header title={testTitle} />);
      expect(
        screen.getByTestId(TestUtils.Header.skipLinkTestId)
      ).toHaveAttribute("href", "#main-content");
      expect(
        screen.getByTestId(TestUtils.Header.skipLinkTestId)
      ).toHaveTextContent("Skip to main content");
    });

    it("should render an anchor with the title, if title is provided", () => {
      render(<Header title={testTitle} />);
      expect(
        screen.getByTestId(TestUtils.Header.anchorTestId)
      ).toHaveTextContent(testTitle);
    });

    it("should render an anchor with the subtitle, if subtitle is provided", () => {
      render(<Header title={testTitle} subtitle={testSubTitle} />);
      expect(
        screen.getByTestId(TestUtils.Header.anchorTestId)
      ).toHaveTextContent(testSubTitle);
    });

    it("should render an anchor with the provided href, if href is provided", () => {
      render(<Header href={testHref} />);
      expect(screen.getByTestId(TestUtils.Header.anchorTestId)).toHaveAttribute(
        "href",
        testHref
      );
    });

    it("should render an anchor with the default href, if href is not provided", () => {
      render(<Header />);
      expect(screen.getByTestId(TestUtils.Header.anchorTestId)).toHaveAttribute(
        "href",
        "#"
      );
    });

    it("should apply to the container div a rivet class specifying the width, if width is provided", () => {
      render(<Header headerWidth={testWidth} />);
      expect(
        screen.getByTestId(TestUtils.Header.headerWidthDivTestId)
      ).toHaveClass("rvt-container-" + testWidth);
    });

    it("should apply to the container div a rivet class that defaults the width to xl, if width is not provided", () => {
      render(<Header />);
      expect(
        screen.getByTestId(TestUtils.Header.headerWidthDivTestId)
      ).toHaveClass("rvt-container-xl");
    });

    it("should render all provided children", () => {
      render(
        <Header>
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
          <Header.Search action={"/mySearchURL"} method={"post"} />
          <Header.NavigationSecondary title={"Component Library"}>
            <ul>
              <li>
                <a href="#">Section item one</a>
              </li>
              <li data-rvt-c-header-nav-item__current>
                <Header.Menu label="Section item two">
                  <a href="#">Secondary nav sub item one</a>
                  <a href="#">Secondary nav sub item two</a>
                  <a href="#">Secondary nav sub item three</a>
                </Header.Menu>
              </li>
            </ul>
          </Header.NavigationSecondary>
        </Header>
      );

      // assert Header Navigation elements are present in the DOM
      expect(screen.getByText("Nav item one")).toBeInTheDocument();
      expect(screen.getByText("Nav item one")).toBeInTheDocument();
      expect(screen.getByText("Nav item three")).toBeInTheDocument();
      expect(screen.getByText("Sub item one")).toBeInTheDocument();
      expect(screen.getByText("Sub item two")).toBeInTheDocument();
      expect(screen.getByText("Sub item three")).toBeInTheDocument();
      // assert Search is present in the DOM
      expect(screen.getByTestId(TestUtils.Header.searchWrapperTestId));
      // assert Secondary Navigation elements are present in the DOM
      expect(screen.getByText("Component Library")).toBeInTheDocument();
      expect(
        screen.getByText("Secondary nav sub item one")
      ).toBeInTheDocument();
      expect(
        screen.getByText("Secondary nav sub item two")
      ).toBeInTheDocument();
    });
  });

  // the following tests assert that each sub-component of the Header closes when another sub-component is opened
  describe("Sub-components' Toggle behavior", () => {
    beforeEach(() => {
      render(
        <Header>
          <Header.Navigation>
            <ul>
              <li>
                <Header.Menu label="Nav item">
                  <a href={"#"}>Sub item</a>
                </Header.Menu>
              </li>
            </ul>
          </Header.Navigation>
          <Header.Search action={"/mySearchURL"} method={"post"} />
          <Header.NavigationSecondary title={"Component Library"}>
            <ul>
              <li>
                <a href="#">Section item one</a>
              </li>
            </ul>
          </Header.NavigationSecondary>
        </Header>
      );
    });

    it("should close HeaderSearch if HeaderMenu is opened", async () => {
      // open HeaderSearch
      await clickSearchToggleButton();
      // assert that HeaderSearch is open
      expect(
        screen.getByTestId(TestUtils.Header.searchFormTestId)
      ).not.toHaveAttribute("hidden", "");
      // open HeaderMenu
      await clickHeaderMenuToggleButton();
      // assert that HeaderSearch is not open
      expect(
        screen.getByTestId(TestUtils.Header.searchFormTestId)
      ).toHaveAttribute("hidden", "");
    });

    it("should close HeaderMenu if HeaderSearch is opened", async () => {
      // open HeaderMenu
      await clickHeaderMenuToggleButton();
      // assert that HeaderMenu is open
      expect(
        screen.getByTestId(TestUtils.Header.menuItemsContainerTestId)
      ).not.toHaveAttribute("hidden", "");
      // open HeaderSearch
      await clickSearchToggleButton();
      // assert that HeaderMenu is not open
      expect(
        screen.getByTestId(TestUtils.Header.menuItemsContainerTestId)
      ).toHaveAttribute("hidden", "");
    });

    it("should close HeaderNavigation if HeaderSearch is opened", async () => {
      // open HeaderNavigation
      await clickHeaderNavToggleButton();
      // assert that HeaderNavigation is open
      expect(
        screen.getByTestId(TestUtils.Header.headerNavTestId)
      ).not.toHaveAttribute("hidden", "");
      // open HeaderSearch
      await clickSearchToggleButton();
      // assert that HeaderNavigation is not open
      expect(
        screen.getByTestId(TestUtils.Header.headerNavTestId)
      ).toHaveAttribute("hidden", "");
    });

    it("should close HeaderNavigationSecondary if HeaderSearch is opened", async () => {
      // open HeaderNavigationSecondary
      await clickSecondaryNavToggleButton();
      // assert that HeaderNavigationSecondary is open
      expect(
        screen.getByTestId(TestUtils.Header.secondaryNavTestId)
      ).not.toHaveAttribute("hidden", "");
      // open HeaderSearch
      await clickSearchToggleButton();
      // assert that HeaderNavigationSecondary is not open
      expect(
        screen.getByTestId(TestUtils.Header.secondaryNavTestId)
      ).toHaveAttribute("hidden", "");
    });
  });
});
