/*
Copyright (C) 2018 The Trustees of Indiana University
SPDX-License-Identifier: BSD-3-Clause
*/
import { fireEvent, render, screen } from "@testing-library/react";
import { within } from "@testing-library/dom";
import "@testing-library/jest-dom";
import React from "react";
import SeriesNav from "./SeriesNav";
import { TestUtils } from "../util/TestUtils";

const testIds = TestUtils.SeriesNav;

const customClassName = "custom-style";

const nextClick = jest.fn();
const nextLabel = "next label";
const nextUrl = "/next";

const previousClick = jest.fn();
const previousLabel = "previous label";
const previousUrl = "/previous";

describe("<SeriesNav />", () => {
  describe("Rendering", () => {
    it("should render without throwing an error", () => {
      render(
        <SeriesNav
          className={customClassName}
          nextClick={nextClick}
          nextLabel={nextLabel}
          nextUrl={nextUrl}
          previousClick={previousClick}
          previousLabel={previousLabel}
          previousUrl={previousUrl}
          testMode
        />,
      );
      checkRenderSeriesNavContainer();
      checkRenderSeriesControlNext();
      checkRenderSeriesControlPrevious();
    });
  });

  describe("Options", () => {
    it("next disabled, should render without next control", () => {
      render(
        <SeriesNav
          className={customClassName}
          nextClick={nextClick}
          nextDisabled
          nextLabel={nextLabel}
          nextUrl={nextUrl}
          previousClick={previousClick}
          previousLabel={previousLabel}
          previousUrl={previousUrl}
          testMode
        />,
      );
      checkRenderSeriesNavContainer();
      checkRenderSeriesControlPrevious();
      const element = screen.queryByTestId(testIds.next);
      expect(element).not.toBeInTheDocument();
    });

    it("previous disabled, should render without previous control", () => {
      render(
        <SeriesNav
          className={customClassName}
          nextClick={nextClick}
          nextLabel={nextLabel}
          nextUrl={nextUrl}
          previousClick={previousClick}
          previousDisabled
          previousLabel={previousLabel}
          previousUrl={previousUrl}
          testMode
        />,
      );
      checkRenderSeriesNavContainer();
      checkRenderSeriesControlNext();
      const element = screen.queryByTestId(testIds.previous);
      expect(element).not.toBeInTheDocument();
    });

    it("default is test mode off", () => {
      render(
        <SeriesNav
          className={customClassName}
          nextLabel={nextLabel}
          nextUrl={nextUrl}
          previousLabel={previousLabel}
          previousUrl={previousUrl}
        />,
      );
      const element = screen.queryByTestId(testIds.container);
      expect(element).not.toBeInTheDocument();

      const previous = screen.queryByTestId(testIds.controlLabel);
      expect(previous).not.toBeInTheDocument();
    });
  });
});

const checkRenderSeriesNavContainer = () => {
  const element = screen.getByTestId(testIds.container);
  expect(element.nodeName).toBe("NAV");
  expect(element).toHaveClass("rvt-seriesnav");
  expect(element).toHaveClass(customClassName);
  expect(element).toBeVisible();
};

const checkRenderSeriesControlNext = () => {
  const element = screen.getByTestId(testIds.next);
  expect(element.nodeName).toBe("A");
  expect(element).toBeVisible();
  expect(element).toHaveAttribute("href", nextUrl);

  const label = within(element).getByTestId(testIds.controlLabel);
  expect(label.innerHTML).toBe("Next:");

  const text = within(element).getByTestId(testIds.controlText);
  expect(text.innerHTML).toBe(nextLabel);

  const icon = within(element).getByTestId(testIds.controlIcon);
  expect(icon).toBeInTheDocument;

  fireEvent.click(element);
  expect(nextClick).toHaveBeenCalled();
};

const checkRenderSeriesControlPrevious = () => {
  const element = screen.getByTestId(testIds.previous);
  expect(element.nodeName).toBe("A");
  expect(element).toBeVisible();
  expect(element).toHaveAttribute("href", previousUrl);

  const label = within(element).getByTestId(testIds.controlLabel);
  expect(label.innerHTML).toBe("Previous:");

  const text = within(element).getByTestId(testIds.controlText);
  expect(text.innerHTML).toBe(previousLabel);

  const icon = within(element).getByTestId(testIds.controlIcon);
  expect(icon).toBeInTheDocument;

  fireEvent.click(element);
  expect(previousClick).toHaveBeenCalled();
};
