/*
Copyright (C) 2018 The Trustees of Indiana University
SPDX-License-Identifier: BSD-3-Clause
*/
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import React from "react";
import SegmentedButton from "./SegmentedButton.jsx";
import Button from "./Button";
import { TestUtils } from "../util/TestUtils.js";

describe("<SegmentedButton />", () => {
  describe("Rendering and styling", () => {
    it("should render without throwing an error", () => {
      render(
        <SegmentedButton>
          <Button>One</Button>
          <Button>Two</Button>
        </SegmentedButton>
      );
      expect(
        screen.queryByTestId(TestUtils.SegmentedButton.testId, {})
      ).toBeInTheDocument();
      expect(screen.getByRole("button", { name: /One/ })).toBeVisible();
      expect(screen.getByRole("button", { name: /Two/ })).toBeVisible();
    });
    it("should pass attributes through", () => {
      const testId = "the_id";
      render(<SegmentedButton id={testId} />);
      expect(
        screen.queryByTestId(TestUtils.SegmentedButton.testId, {})
      ).toHaveProperty("id", testId);
    });
    it("should apply Rivet styling class", () => {
      render(<SegmentedButton />);
      expect(
        screen.queryByTestId(TestUtils.SegmentedButton.testId, {})
      ).toHaveClass("rvt-button-segmented");
    });
    it("should apply custom classes", () => {
      render(<SegmentedButton className="foo" />);
      expect(
        screen.queryByTestId(TestUtils.SegmentedButton.testId, {})
      ).toHaveClass("rvt-button-segmented");
      expect(
        screen.queryByTestId(TestUtils.SegmentedButton.testId, {})
      ).toHaveClass("foo");
    });
    it("should add width CSS classes", () => {
      render(<SegmentedButton fit />);
      expect(
        screen.queryByTestId(TestUtils.SegmentedButton.testId, {})
      ).toHaveClass("rvt-button-segmented");
      expect(
        screen.queryByTestId(TestUtils.SegmentedButton.testId, {})
      ).toHaveClass("rvt-button-segmented--fitted");
    });
  });
});
