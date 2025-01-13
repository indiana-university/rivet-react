/*
Copyright (C) 2018 The Trustees of Indiana University
SPDX-License-Identifier: BSD-3-Clause
*/
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import React from "react";
import CalendarTile from "./CalendarTile";
import { TestUtils } from "../../util/TestUtils";

const testIds = TestUtils.CalendarTile;

const customClassName = "custom-style";

const checkMonthScenario = (month, value, abbr) => {
  it(`Month ${month} should display ${value}`, () => {
    render(
      <CalendarTile
        className={customClassName}
        day={1}
        month={month}
        testMode
        year={2023}
      />,
    );
    checkRenderMonth(value);
  });
  it(`Month "${month}" should display ${value}`, () => {
    render(<CalendarTile day={1} month={`${month}`} testMode year={2023} />);
    checkRenderMonth(value);
  });
  it(`Month ${month} should display abbreviation ${abbr}`, () => {
    render(
      <CalendarTile abbreviate day={1} month={month} testMode year={2023} />,
    );
    checkRenderMonth(abbr);
  });
  it(`Month "${month}" should display abbreviation ${abbr}`, () => {
    render(
      <CalendarTile
        abbreviate
        day={1}
        month={`${month}`}
        testMode
        year={2023}
      />,
    );
    checkRenderMonth(abbr);
  });
};

describe("<CalendarTile />", () => {
  describe("Rendering", () => {
    it("should render without throwing an error", () => {
      render(
        <CalendarTile
          className={customClassName}
          day={1}
          month="1"
          testMode
          year={2023}
        />,
      );
      checkRenderContainer();
      checkRenderMonth("January");
      checkRenderDay("1");
      checkRenderYear("2023");
    });
    it("without year, should render without throwing an error", () => {
      render(
        <CalendarTile className={customClassName} day={1} month="1" testMode />,
      );
      checkRenderContainer();
      checkRenderMonth("January");
      checkRenderDay("1");
      const year = screen.queryByTestId(testIds.year);
      expect(year).not.toBeInTheDocument();
    });
  });
  describe("Month options", () => {
    checkMonthScenario(1, "January", "Jan");
    checkMonthScenario(2, "Febuary", "Feb");
    checkMonthScenario(3, "March", "Mar");
    checkMonthScenario(4, "April", "Apr");
    checkMonthScenario(5, "May", "May");
    checkMonthScenario(6, "June", "June");
    checkMonthScenario(7, "July", "July");
    checkMonthScenario(8, "August", "Aug");
    checkMonthScenario(9, "September", "Sept");
    checkMonthScenario(10, "October", "Oct");
    checkMonthScenario(11, "November", "Nov");
    checkMonthScenario(12, "December", "Dec");
    it(`Custom month should display custom input`, () => {
      render(<CalendarTile day={1} month="custom" testMode year={2023} />);
      checkRenderMonth("custom");
    });
    it(`Custom month abbreviated should display custom input`, () => {
      render(
        <CalendarTile abbreviate day={1} month="custom" testMode year={2023} />,
      );
      checkRenderMonth("custom");
    });
  });
  describe("Options", () => {
    it("default is test mode off", () => {
      render(<CalendarTile day={1} month="1" year={2023} />);
      const element = screen.queryByTestId(testIds.container);
      expect(element).not.toBeInTheDocument();
    });
  });
});

const checkRenderContainer = () => {
  const element = screen.getByTestId(testIds.container);
  expect(element).toBeVisible();
  expect(element).toHaveClass("rvt-cal");
  expect(element).toHaveClass(customClassName);
};

const checkRenderMonth = (month) => {
  const element = screen.getByTestId(testIds.month);
  expect(element).toBeVisible();
  expect(element).toHaveClass("rvt-cal__month");
  expect(element.innerHTML).toBe(month);
};

const checkRenderDay = (day) => {
  const element = screen.getByTestId(testIds.day);
  expect(element).toBeVisible();
  expect(element).toHaveClass("rvt-cal__day");
  expect(element.innerHTML).toBe(day);
};

const checkRenderYear = (year) => {
  const element = screen.getByTestId(testIds.year);
  expect(element).toBeVisible();
  expect(element).toHaveClass("rvt-cal__year");
  expect(element.innerHTML).toBe(year);
};
