/*
Copyright (C) 2018 The Trustees of Indiana University
SPDX-License-Identifier: BSD-3-Clause
*/
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import React from "react";
import Container from "./Container";

const testId = "Container-container";
const content = "content";
describe("<Container />", () => {
  describe("Rendering and text", () => {
    const content = "content";

    it("should render without throwing an error", async () => {
      render(<Container>{content}</Container>);

      const container = await screen.findByText(content);
      expect(container).toHaveClass("rvt-container-md");
    });

    it("should render the sm class if size is sm", async () => {
      const size = "sm";
      render(<Container size={size}>{content}</Container>);

      const container = await screen.findByText(content);
      expect(container).toHaveClass(`rvt-container-${size}`);
    });

    it("should render the md class if size is md", async () => {
      const size = "md";
      render(<Container size={size}>{content}</Container>);

      const container = await screen.findByText(content);
      expect(container).toHaveClass(`rvt-container-${size}`);
    });

    it("should render the lg class if size is lg", async () => {
      const size = "lg";
      render(<Container size={size}>{content}</Container>);

      const container = await screen.findByText(content);
      expect(container).toHaveClass(`rvt-container-${size}`);
    });

    it("should render the xl class if size is xl", async () => {
      const size = "xl";
      render(<Container size={size}>{content}</Container>);

      const container = await screen.findByText(content);
      expect(container).toHaveClass(`rvt-container-${size}`);
    });
  });

  describe("Options", () => {
    it("default element is div", () => {
      render(<Container data-testid={testId}>{content}</Container>);
      const element = screen.queryByTestId(testId);
      expect(element.nodeName).toBe("DIV");
    });

    it("can customize element", () => {
      render(
        <Container data-testid={testId} component="section">
          {content}
        </Container>,
      );
      const element = screen.queryByTestId(testId);
      expect(element.nodeName).toBe("SECTION");
    });
  });
});
