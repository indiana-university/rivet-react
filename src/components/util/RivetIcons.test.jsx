/*
Copyright (C) 2018 The Trustees of Indiana University
SPDX-License-Identifier: BSD-3-Clause
*/
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import React from "react";
import Icon, { IconNames } from "./RivetIcons.jsx";
import { TestUtils } from "./TestUtils.js";

describe("<Icon>", () => {
  describe("Icon list check", iconListTests);
  it("should have a default height of 16", () => {
    render(<Icon name={IconNames.CARET_DOWN} />);
    expect(
      screen.queryByTestId(TestUtils.RivetIcons.testId, {})
    ).toHaveAttribute("height", "16");
  });
  it("should pass a custom height", () => {
    render(<Icon name={IconNames.CARET_DOWN} height="24" />);
    expect(
      screen.queryByTestId(TestUtils.RivetIcons.testId, {})
    ).toHaveAttribute("height", "24");
  });
  it("should apply a custom class", () => {
    render(<Icon name={IconNames.CARET_DOWN} className="foo" />);
    expect(screen.queryByTestId(TestUtils.RivetIcons.testId, {})).toHaveClass(
      "foo"
    );
  });
});

function iconListTests() {
  it("should render caret-down without crashing", () => {
    render(<Icon name={IconNames.CARET_DOWN} />);
    expect(screen.queryByTestId(TestUtils.RivetIcons.testId, {})).toBeVisible();
  });
  it("should render facebook without crashing", () => {
    render(<Icon data-testid="test" name={IconNames.FACEBOOK} />);
    expect(screen.queryByTestId("test", {})).toBeVisible();
  });
  it("should render file without crashing", () => {
    render(<Icon data-testid="test" name={IconNames.FILE} />);
    expect(screen.queryByTestId("test", {})).toBeVisible();
  });
  it("should render instagram without crashing", () => {
    render(<Icon data-testid="test" name={IconNames.INSTAGRAM} />);
    expect(screen.queryByTestId("test", {})).toBeVisible();
  });
  it("should render linkedin without crashing", () => {
    render(<Icon data-testid="test" name={IconNames.LINKEDIN} />);
    expect(screen.queryByTestId("test", {})).toBeVisible();
  });
  it("should render logo without crashing", () => {
    render(<Icon data-testid="test" name={IconNames.LOGO} />);
    expect(screen.queryByTestId("test", {})).toBeVisible();
  });
  it("should render twitter without crashing", () => {
    render(<Icon data-testid="test" name={IconNames.TWITTER} />);
    expect(screen.queryByTestId("test", {})).toBeVisible();
  });
  it("should render youtube without crashing", () => {
    render(<Icon data-testid="test" name={IconNames.YOUTUBE} />);
    expect(screen.queryByTestId("test", {})).toBeVisible();
  });
}
