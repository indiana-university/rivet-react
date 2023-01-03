/*
Copyright (C) 2018 The Trustees of Indiana University
SPDX-License-Identifier: BSD-3-Clause
*/
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import React from "react";
import Col from "./Col";

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
        </Col>
      );

      const col = await screen.findByText(content);
      expect(col).toHaveClass(`rvt-cols-${width}-${breakpoint}`);
      expect(col).toHaveClass(`rvt-cols-${shiftType}-${width}-${breakpoint}`);
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
        </Col>
      );

      const col = await screen.findByText(content);
      expect(col).toHaveClass(`rvt-cols-${width}-${breakpoint}`);
      expect(col).toHaveClass(`rvt-cols-${shiftType}-${width}-${breakpoint}`);
    });

    it("should pulling column to the far right", async () => {
      const width = "6",
        breakpoint = "md";
      render(
        <Col breakpoint={breakpoint} columnWidth={width} last>
          {content}
        </Col>
      );

      const col = await screen.findByText(content);
      expect(col).toHaveClass(`rvt-cols-${width}-${breakpoint}`);
      expect(col).toHaveClass(`rvt-cols--last`);
    });
  });
});