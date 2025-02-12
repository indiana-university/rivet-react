/*
Copyright (C) 2018 The Trustees of Indiana University
SPDX-License-Identifier: BSD-3-Clause
*/
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import React from "react";
import { RivetizeComponent } from "../index.js";

const customClassName = "custom-style";
const content = "Rivetize content";
const testId = "RivetizeComponentTest";
const linkUrl = "/testlink";

describe("<RivetizeComponent />", () => {
  describe("Rendering", () => {
    it("should render without throwing an error", () => {
      render(
        <RivetizeComponent className={customClassName} data-testid={testId}>
          {content}
        </RivetizeComponent>,
      );
      const element = screen.getByTestId(testId);
      expect(element).toHaveClass(customClassName);
      expect(element.innerHTML).toBe(content);
    });
    it("should render with rivet classes if utility properties set", () => {
      render(
        <RivetizeComponent
          className={customClassName}
          data-testid={testId}
          textAlign="center"
          color="crimson"
        >
          {content}
        </RivetizeComponent>,
      );
      const element = screen.getByTestId(testId);
      expect(element).toHaveClass(customClassName);
      expect(element).toHaveClass("rvt-text-center");
      expect(element).toHaveClass("rvt-color-crimson");
      expect(element.innerHTML).toBe(content);
    });
  });

  describe("Options", () => {
    it("if no component supplied element should be div", () => {
      render(
        <RivetizeComponent className={customClassName} data-testid={testId}>
          {content}
        </RivetizeComponent>,
      );
      const element = screen.getByTestId(testId);
      expect(element.nodeName).toBe("DIV");
    });
    it("if a component supplied element should be value supplied", () => {
      render(
        <RivetizeComponent
          className={customClassName}
          data-testid={testId}
          component="a"
        >
          {content}
        </RivetizeComponent>,
      );
      const element = screen.getByTestId(testId);
      expect(element.nodeName).toBe("A");
    });
    it("if addition property supplied should be attributes on the component", () => {
      render(
        <RivetizeComponent
          className={customClassName}
          data-testid={testId}
          component="a"
          href={linkUrl}
        >
          {content}
        </RivetizeComponent>,
      );
      const element = screen.getByTestId(testId);
      expect(element.nodeName).toBe("A");
      expect(element).toHaveAttribute("href", linkUrl);
    });
  });
});
