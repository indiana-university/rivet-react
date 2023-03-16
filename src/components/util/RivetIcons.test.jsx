/*
Copyright (C) 2018 The Trustees of Indiana University
SPDX-License-Identifier: BSD-3-Clause
*/
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import React from "react";
import Icon from "./RivetIcons.jsx";
import { TestUtils } from "./TestUtils.js";

describe("<Icon>", () => {
  describe("Icon list check", iconListTests);
  it("should have a default height of 16", () => {
    render(<Icon name="caret-down" />);
    expect(
      screen.queryByTestId(TestUtils.RivetIcons.testId, {})
    ).toHaveAttribute("height", "16");
  });
  it("should pass a custom height", () => {
    render(<Icon name="caret-down" height="24" />);
    expect(
      screen.queryByTestId(TestUtils.RivetIcons.testId, {})
    ).toHaveAttribute("height", "24");
  });
  it("should apply a custom class", () => {
    render(<Icon name="caret-down" className="foo" />);
    expect(screen.queryByTestId(TestUtils.RivetIcons.testId, {})).toHaveClass(
      "foo"
    );
  });
});

function iconListTests() {
  it("should render caret-down without crashing", () => {
    render(<Icon name="caret-down" />);
    expect(screen.queryByTestId(TestUtils.RivetIcons.testId, {})).toBeVisible();
  });
  it("should render facebook without crashing", () => {
    render(<Icon data-testid="test" name="facebook" />);
    expect(screen.queryByTestId("test", {})).toBeVisible();
  });
  it("should render file without crashing", () => {
    render(<Icon data-testid="test" name="file" />);
    expect(screen.queryByTestId("test", {})).toBeVisible();
  });
  it("should render instagram without crashing", () => {
    render(<Icon data-testid="test" name="instagram" />);
    expect(screen.queryByTestId("test", {})).toBeVisible();
  });it("should render linkedin without crashing", () => {
    render(<Icon data-testid="test" name="linkedin" />);
    expect(screen.queryByTestId("test", {})).toBeVisible();
  });
  it("should render logo without crashing", () => {
    render(<Icon data-testid="test" name="logo" />);
    expect(screen.queryByTestId("test", {})).toBeVisible();
  });
  it("should render twitter without crashing", () => {
    render(<Icon data-testid="test" name="twitter" />);
    expect(screen.queryByTestId("test", {})).toBeVisible();
  });
  it("should render youtube without crashing", () => {
    render(<Icon data-testid="test" name="youtube" />);
    expect(screen.queryByTestId("test", {})).toBeVisible();
  });
}
