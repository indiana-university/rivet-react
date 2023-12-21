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

const testIds = TestUtils.SeriesNav

const customClassName = "custom-style"

const nextClick = jest.fn();
const nextIcon = '<svg fill="currentColor" width="16" height="16" viewBox="0 0 16 16"><path d="M1 7h10.844L7.737 2.146 9.263.854 15.31 8l-6.047 7.146-1.526-1.292L11.844 9H1V7Z"></path></svg>'
const nextLabel = "next label"
const nextUrl = "/next"

const previousClick = jest.fn();
const previousIcon = '<svg fill="currentColor" width="16" height="16" viewBox="0 0 16 16"><path d="M15 7H4.156l4.107-4.854L6.737.854.69 8l6.047 7.146 1.526-1.292L4.156 9H15V7Z"></path></svg>'
const previousLabel = "previous label"
const previousUrl = "/previous"

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
        />
      );
      checkRenderSeriesNavContainer()
      checkRenderSeriesControlNext()
      checkRenderSeriesControlPrevious()
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
        />
      );
      checkRenderSeriesNavContainer()
      checkRenderSeriesControlPrevious()
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
        />
      );
      checkRenderSeriesNavContainer()
      checkRenderSeriesControlNext()
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
        />
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
  expect(element.nodeName).toBe("NAV")
  expect(element).toHaveClass("rvt-seriesnav");
  expect(element).toHaveClass(customClassName);
  expect(element).toBeVisible();
}

const checkRenderSeriesControlNext = () => {
  const element = screen.getByTestId(testIds.next);
  expect(element.nodeName).toBe("A")
  expect(element).toBeVisible();
  expect(element).toHaveAttribute("href", nextUrl);

  const label = within(element).getByTestId(testIds.controlLabel)
  expect(label.innerHTML).toBe("Next:");

  const text = within(element).getByTestId(testIds.controlText)
  expect(text.innerHTML).toBe(nextLabel);

  const icon = within(element).getByTestId(testIds.controlIcon)
  expect(icon.innerHTML).toBe(nextIcon);

  fireEvent.click(element);
  expect(nextClick).toHaveBeenCalled();
}

const checkRenderSeriesControlPrevious = () => {
  const element = screen.getByTestId(testIds.previous);
  expect(element.nodeName).toBe("A")
  expect(element).toBeVisible();
  expect(element).toHaveAttribute("href", previousUrl);

  const label = within(element).getByTestId(testIds.controlLabel)
  expect(label.innerHTML).toBe("Previous:");

  const text = within(element).getByTestId(testIds.controlText)
  expect(text.innerHTML).toBe(previousLabel);
  
  const icon = within(element).getByTestId(testIds.controlIcon)
  expect(icon.innerHTML).toBe(previousIcon);

  fireEvent.click(element);
  expect(previousClick).toHaveBeenCalled();
}
