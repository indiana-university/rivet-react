import React from "react";
import { prettyDOM, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import Header from "./Header";
import HeaderMenu from "./HeaderMenu";
import HeaderNavigation from "./HeaderNavigation";
import HeaderNavigationSecondary from "./HeaderNavigationSecondary";
import HeaderSearch from "./HeaderSearch";
import { TestUtils } from "../util/TestUtils";

const testTitle = "Test title";
const testHref = "/testHref";
const testSubTitle = "Test Sub title";
const testWidth = "md";

describe("<Header />", () => {
  describe("Rendering and styling", () => {
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

    it("should apply to the container div a rivet class specifying the width, if width is provided", () => {
      render(<Header headerWidth={testWidth} />);
      expect(
        screen.getByTestId(TestUtils.Header.headerWidthDivTestId)
      ).toHaveClass("rvt-container-" + testWidth);
    });

    it("should render all provided children", () => {
      const navigation = (
        <HeaderNavigation>
          <ul>
            <li>
              <a href={"#"}>Nav item one</a>
            </li>
            <li data-rvt-c-header-nav-item__current>
              <a href={"#"}>Nav item two</a>
            </li>
            <li>
              <HeaderMenu label="Nav item three">
                <a href={"#"}>Sub item one</a>
                <a href={"#"}>Sub item two</a>
                <a href={"#"}>Sub item three</a>
              </HeaderMenu>
            </li>
          </ul>
        </HeaderNavigation>
      );
      const search = <HeaderSearch action={"/mySearchURL"} method={"post"} />;
      const secondaryNavigation = (
        <HeaderNavigationSecondary title={"Component Library"}>
          <ul>
            <li>
              <a href="#">Section item one</a>
            </li>
            <li data-rvt-c-header-nav-item__current>
              <HeaderMenu label="Section item two">
                <a href="#">Secondary nav sub item one</a>
                <a href="#">Secondary nav sub item two</a>
                <a href="#">Secondary nav sub item three</a>
              </HeaderMenu>
            </li>
          </ul>
        </HeaderNavigationSecondary>
      );

      render(
        <Header
          navigation={navigation}
          search={search}
          secondaryNavigation={secondaryNavigation}
        />
      );

      console.log(prettyDOM(document.body));

      // assert Header Navigation elements are present in the DOM
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

  describe("Defaulting props", () => {
    it("should render an anchor with the default href, if href is not provided", () => {
      render(<Header />);
      expect(screen.getByTestId(TestUtils.Header.anchorTestId)).toHaveAttribute(
        "href",
        "#"
      );
    });

    it("should apply to the container div a rivet class that defaults the width to xl, if width is not provided", () => {
      render(<Header />);
      expect(
        screen.getByTestId(TestUtils.Header.headerWidthDivTestId)
      ).toHaveClass("rvt-container-xl");
    });
  });
});
