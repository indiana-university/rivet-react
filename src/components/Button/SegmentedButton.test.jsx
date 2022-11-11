/*
Copyright (C) 2018 The Trustees of Indiana University
SPDX-License-Identifier: BSD-3-Clause
*/
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import React from "react";
import SegmentedButton from "./SegmentedButton.jsx";
import Button from "./Button";

describe("<SegmentedButton />", () => {
  describe("Rendering and styling", () => {
    it("should render without throwing an error", () => {
      const { container } = render(
        <SegmentedButton>
          <Button>One</Button>
          <Button>Two</Button>
        </SegmentedButton>
      );
      expect(container.querySelectorAll("div")).toHaveLength(1);
      expect(container.querySelectorAll("button")).toHaveLength(2);
    });
    it("should pass attributes through", () => {
      const testId = "the_id";
      const { container } = render(<SegmentedButton id={testId} />);
      expect(container.querySelector("div")).toHaveProperty("id", testId);
    });
    it("should apply Rivet styling class", () => {
      const { container } = render(<SegmentedButton />);
      expect(
        container
          .querySelector("div")
          .classList.contains("rvt-button-segmented")
      ).toBe(true);
    });
    it("should apply custom classes", () => {
      const { container } = render(<SegmentedButton className="foo" />);
      expect(
        container
          .querySelector("div")
          .classList.contains("rvt-button-segmented")
      ).toBe(true);
      expect(container.querySelector("div").classList.contains("foo")).toBe(
        true
      );
    });
    it("should add width CSS classes", () => {
      const { container } = render(<SegmentedButton fit />);
      expect(
        container
          .querySelector("div")
          .classList.contains("rvt-button-segmented")
      ).toBe(true);
      expect(
        container
          .querySelector("div")
          .classList.contains("rvt-button-segmented--fitted")
      ).toBe(true);
    });
  });
});
