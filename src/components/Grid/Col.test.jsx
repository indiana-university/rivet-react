/*
Copyright (C) 2018 The Trustees of Indiana University
SPDX-License-Identifier: BSD-3-Clause
*/
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import React from "react";
import Col from "./Col";

const testId = "Col-container";
const content = "content";
describe("<Col />", () => {
  describe("Rendering and text", () => {
    const content = "content";

    it("should render without throwing an error", async () => {
      render(<Col>{content}</Col>);

      const col = await screen.findByText(content);
      expect(col).toHaveClass("rvt-cols");
    });

    it("should allow specifying the breakpoint for the column", async () => {
      const breakpoint = "md";
      render(<Col breakpoint={breakpoint}>{content}</Col>);

      const col = await screen.findByText(content);
      expect(col).toHaveClass(`rvt-cols-${breakpoint}`);
    });

    it("should allow specifying the width of the column", async () => {
      const width = "12";
      render(<Col columnWidth={width}>{content}</Col>);

      const col = await screen.findByText(content);
      expect(col).toHaveClass(`rvt-cols-${width}`);
    });

    it("should allow pulling a column to the left", async () => {
      const width = "6",
        breakpoint = "md",
        shiftType = "pull";
      render(
        <Col
          breakpoint={breakpoint}
          columnWidth={width}
          shiftType={shiftType}
          shiftBreakpoint={breakpoint}
          shiftWidth={width}
        >
          {content}
        </Col>,
      );

      const col = await screen.findByText(content);
      expect(col).toHaveClass(`rvt-cols-${width}-${breakpoint}`);
      expect(col).toHaveClass(`rvt-cols-${shiftType}-${width}-${breakpoint}`);
    });

    it("should allow pulling a column to the left without shift breakpoint", async () => {
      const width = "6",
        breakpoint = "md",
        shiftType = "pull";
      render(
        <Col
          breakpoint={breakpoint}
          columnWidth={width}
          shiftType={shiftType}
          shiftWidth={width}
        >
          {content}
        </Col>,
      );

      const col = await screen.findByText(content);
      expect(col).toHaveClass(`rvt-cols-${width}-${breakpoint}`);
      expect(col).toHaveClass(`rvt-cols-${shiftType}-${width}`);
    });

    it("should allow pushing a column to the right", async () => {
      const width = "6",
        breakpoint = "md",
        shiftType = "push";
      render(
        <Col
          breakpoint={breakpoint}
          columnWidth={width}
          shiftType={shiftType}
          shiftBreakpoint={breakpoint}
          shiftWidth={width}
        >
          {content}
        </Col>,
      );

      const col = await screen.findByText(content);
      expect(col).toHaveClass(`rvt-cols-${width}-${breakpoint}`);
      expect(col).toHaveClass(`rvt-cols-${shiftType}-${width}-${breakpoint}`);
    });

    it("should allow pushing a column to the right without shift breakpoint", async () => {
      const width = "6",
        breakpoint = "md",
        shiftType = "push";
      render(
        <Col
          breakpoint={breakpoint}
          columnWidth={width}
          shiftType={shiftType}
          shiftWidth={width}
        >
          {content}
        </Col>,
      );

      const col = await screen.findByText(content);
      expect(col).toHaveClass(`rvt-cols-${width}-${breakpoint}`);
      expect(col).toHaveClass(`rvt-cols-${shiftType}-${width}`);
    });

    it("should pulling column to the far right", async () => {
      const width = "6",
        breakpoint = "md";
      render(
        <Col breakpoint={breakpoint} columnWidth={width} last>
          {content}
        </Col>,
      );

      const col = await screen.findByText(content);
      expect(col).toHaveClass(`rvt-cols-${width}-${breakpoint}`);
      expect(col).toHaveClass(`rvt-cols--last`);
    });

    it("should allow specifying a column breakpoint width", async () => {
      const columnWidth = {
        md: "12",
      };
      render(<Col columnWidth={columnWidth}>{content}</Col>);

      const col = await screen.findByText(content);
      Object.keys(columnWidth).map((b) => {
        expect(col).toHaveClass(`rvt-cols-${columnWidth[b]}-${b}`);
      });
    });
    it("should allow specifying multiple column breakpoints widths", async () => {
      const columnWidth = {
        sm: "12",
        md: "6",
        lg: "3",
        xl: "2",
      };
      render(<Col columnWidth={columnWidth}>{content}</Col>);

      const col = await screen.findByText(content);
      Object.keys(columnWidth).map((b) => {
        expect(col).toHaveClass(`rvt-cols-${columnWidth[b]}-${b}`);
      });
    });
  });

  describe("Options", () => {
    it("default element is div", () => {
      render(<Col data-testid={testId}>{content}</Col>);
      const element = screen.queryByTestId(testId);
      expect(element.nodeName).toBe("DIV");
    });

    it("can customize element", () => {
      render(
        <Col data-testid={testId} component="section">
          {content}
        </Col>,
      );
      const element = screen.queryByTestId(testId);
      expect(element.nodeName).toBe("SECTION");
    });
  });
});
