/*
Copyright (C) 2018 The Trustees of Indiana University
SPDX-License-Identifier: BSD-3-Clause
*/
import React from "react";
import { prettyDOM, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import BaseHeader from "./BaseHeader";
import BaseHeaderMenu from "./BaseHeaderMenu";
import BaseHeaderMenuItem from "./BaseHeaderMenuItem";
import BaseHeaderNavigation from "./BaseHeaderNavigation";
import BaseHeaderNavigationSecondary from "./BaseHeaderNavigationSecondary";
import { TestUtils } from "../util/TestUtils";

const testTitle = "Test title";
const testHref = "/testHref";
const testSubTitle = "Test Sub title";
const testWidth = "md";

describe("<BaseHeader />", () => {
  describe("Rendering and styling", () => {
    it("should render a skip link", () => {
      render(<BaseHeader testMode title={testTitle} />);
      expect(
        screen.getByTestId(TestUtils.Header.skipLinkTestId)
      ).toHaveAttribute("href", "#main-content");
      expect(
        screen.getByTestId(TestUtils.Header.skipLinkTestId)
      ).toHaveTextContent("Skip to main content");
    });

    it("should render with the title, if title is provided", () => {
      render(<BaseHeader testMode title={testTitle} />);
      expect(
        screen.getByTestId(TestUtils.Header.anchorTestId)
      ).toHaveTextContent(testTitle);
    });

    it("should render with the subtitle, if subtitle is provided", () => {
      render(<BaseHeader testMode title={testTitle} subtitle={testSubTitle} />);
      expect(
        screen.getByTestId(TestUtils.Header.anchorTestId)
      ).toHaveTextContent(testSubTitle);
    });

    it("should render an anchor with the provided href, if href is provided", () => {
      render(<BaseHeader testMode title={testTitle} homeUrl={testHref} />);
      expect(screen.getByTestId(TestUtils.Header.anchorTestId)).toHaveAttribute(
        "href",
        testHref
      );
    });

    it("should apply to the container div a rivet class specifying the width, if width is provided", () => {
      render(<BaseHeader testMode title={testTitle} headerWidth={testWidth} />);
      expect(
        screen.getByTestId(TestUtils.Header.headerWidthDivTestId)
      ).toHaveClass("rvt-container-" + testWidth);
    });

    it("should render all provided children", () => {
      const secondaryNavigation = (
        <BaseHeaderNavigationSecondary title={"Component Library"}>
          <BaseHeaderMenuItem itemUrl="#">
            Secondary nav sub item one
          </BaseHeaderMenuItem>
          <BaseHeaderMenuItem itemUrl="#">
            Secondary nav sub item two
          </BaseHeaderMenuItem>
        </BaseHeaderNavigationSecondary>
      );

      render(
        <BaseHeader title={testTitle} secondaryNavigation={secondaryNavigation}>
          <BaseHeaderNavigation>
            <BaseHeaderMenuItem itemUrl="#">Nav item one</BaseHeaderMenuItem>
            <BaseHeaderMenuItem itemUrl="#">Nav item two</BaseHeaderMenuItem>
            <BaseHeaderMenuItem>
              <BaseHeaderMenu label="Nav item three">
                <BaseHeaderMenuItem href={"#"}>Sub item one</BaseHeaderMenuItem>
                <BaseHeaderMenuItem href={"#"}>Sub item two</BaseHeaderMenuItem>
                <BaseHeaderMenuItem href={"#"}>
                  Sub item three
                </BaseHeaderMenuItem>
              </BaseHeaderMenu>
            </BaseHeaderMenuItem>
          </BaseHeaderNavigation>
        </BaseHeader>
      );

      // assert BaseHeader Navigation elements are present in the DOM
      expect(screen.getByText("Nav item one")).toBeInTheDocument();
      expect(screen.getByText("Nav item three")).toBeInTheDocument();
      expect(screen.getByText("Sub item one")).toBeInTheDocument();
      expect(screen.getByText("Sub item two")).toBeInTheDocument();
      expect(screen.getByText("Sub item three")).toBeInTheDocument();
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
    it("should apply to the container div a rivet class that defaults the width to xl, if width is not provided", () => {
      render(<BaseHeader testMode title={testTitle} />);
      expect(
        screen.getByTestId(TestUtils.Header.headerWidthDivTestId)
      ).toHaveClass("rvt-container-xl");
    });
  });
});
