/*
Copyright (C) 2018 The Trustees of Indiana University
SPDX-License-Identifier: BSD-3-Clause
*/
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import React from "react";
import ButtonGroup from "./ButtonGroup";
import Button from "./Button";
import { TestUtils } from "../util/TestUtils.js";

describe("<ButtonGroup />", () => {
  describe("Rendering and styling", () => {
    it("should render without throwing an error", () => {
      render(
        <ButtonGroup>
          <Button>One</Button>
          <Button>Two</Button>
        </ButtonGroup>
      );
      expect(
        screen.queryByTestId(TestUtils.ButtonGroup.testId, {})
      ).toBeInTheDocument();
      expect(screen.getByRole("button", { name: /One/ })).toBeVisible();
      expect(screen.getByRole("button", { name: /Two/ })).toBeVisible();
    });
    it("should pass attributes through", () => {
      const testId = "the_id";
      render(<ButtonGroup id={testId} />);
      expect(
        screen.queryByTestId(TestUtils.ButtonGroup.testId, {})
      ).toHaveProperty("id", testId);
    });
    it("should apply Rivet styling class", () => {
      render(<ButtonGroup />);
      expect(
        screen.queryByTestId(TestUtils.ButtonGroup.testId, {})
      ).toHaveClass("rvt-button-group");
    });
    it("should apply custom classes", () => {
      render(<ButtonGroup className="foo" />);
      expect(
        screen.queryByTestId(TestUtils.ButtonGroup.testId, {})
      ).toHaveClass("rvt-button-group");
      expect(
        screen.queryByTestId(TestUtils.ButtonGroup.testId, {})
      ).toHaveClass("foo");
    });
    it("should add width CSS classes", () => {
      render(<ButtonGroup right />);
      expect(
        screen.queryByTestId(TestUtils.ButtonGroup.testId, {})
      ).toHaveClass("rvt-button-group");
      expect(
        screen.queryByTestId(TestUtils.ButtonGroup.testId, {})
      ).toHaveClass("rvt-button-group--right");
    });
  });
});
