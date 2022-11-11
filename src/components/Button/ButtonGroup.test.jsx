/*
Copyright (C) 2018 The Trustees of Indiana University
SPDX-License-Identifier: BSD-3-Clause
*/
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import React from "react";
import ButtonGroup from "./ButtonGroup";
import Button from "./Button";

describe("<ButtonGroup />", () => {
  describe("Rendering and styling", () => {
    it("should render without throwing an error", () => {
      const { container } = render(
        <ButtonGroup>
          <Button>One</Button>
          <Button>Two</Button>
        </ButtonGroup>
      );
      expect(container.querySelectorAll("div")).toHaveLength(1);
      expect(container.querySelectorAll("button")).toHaveLength(2);
    });
    it("should pass attributes through", () => {
      const testId = "the_id";
      const { container } = render(<ButtonGroup id={testId} />);
      expect(container.querySelector("div")).toHaveProperty("id", testId);
    });
    it("should apply Rivet styling class", () => {
      const { container } = render(<ButtonGroup />);
      expect(
        container.querySelector("div").classList.contains("rvt-button-group")
      ).toBe(true);
    });
    it("should apply custom classes", () => {
      const { container } = render(<ButtonGroup className="foo" />);
      expect(
        container.querySelector("div").classList.contains("rvt-button-group")
      ).toBe(true);
      expect(container.querySelector("div").classList.contains("foo")).toBe(
        true
      );
    });
    it("should add width CSS classes", () => {
      const { container } = render(<ButtonGroup right />);
      expect(
        container.querySelector("div").classList.contains("rvt-button-group")
      ).toBe(true);
      expect(
        container
          .querySelector("div")
          .classList.contains("rvt-button-group--right")
      ).toBe(true);
    });
  });
});
