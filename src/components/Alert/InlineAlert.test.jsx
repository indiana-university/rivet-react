/*
Copyright (C) 2018 The Trustees of Indiana University
SPDX-License-Identifier: BSD-3-Clause
*/
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import user from "@testing-library/user-event";
import React from "react";

import InlineAlert from "./InlineAlert";

describe("<InlineAlert />", () => {
  const bodyText = "A Test Component";
  const standaloneClassName = "rvt-inline-alert--standalone";

  describe("Rendering and text", () => {
    it("should render without throwing an error", () => {
      render(<InlineAlert variant="info">{bodyText}</InlineAlert>);
      expect(screen.getByText(bodyText)).toBeVisible;
    });
    it("should apply the id", () => {
      const testId = "the_id";
      const cut = render(
        <InlineAlert id={testId} variant="info">
          {bodyText}
        </InlineAlert>
      );
      expect(screen.getByText(bodyText)).toHaveProperty(
        "id",
        testId + "--message"
      );
    });
  });

  describe("Styling", () => {
    it("should specify style: error", () => {
      render(<InlineAlert variant="danger">{bodyText}</InlineAlert>);
      const element = screen.getByText(bodyText).closest("div");
      expect(element).toHaveClass("rvt-inline-alert--danger");
      expect(element).not.toHaveClass(standaloneClassName);
    });
    it("should specify style: info", () => {
      render(<InlineAlert variant="info">{bodyText}</InlineAlert>);
      const element = screen.getByText(bodyText).closest("div");
      expect(element).toHaveClass("rvt-inline-alert--info");
      expect(element).not.toHaveClass(standaloneClassName);
    });
    it("should specify style: warning", () => {
      render(<InlineAlert variant="warning">{bodyText}</InlineAlert>);
      const element = screen.getByText(bodyText).closest("div");
      expect(element).toHaveClass("rvt-inline-alert--warning");
      expect(element).not.toHaveClass(standaloneClassName);
    });
    it("should specify style: success", () => {
      render(<InlineAlert variant="success">{bodyText}</InlineAlert>);
      const element = screen.getByText(bodyText).closest("div");
      expect(element).toHaveClass("rvt-inline-alert--success");
      expect(element).not.toHaveClass(standaloneClassName);
    });
    it("should respect the standalone value", () => {
      render(
        <InlineAlert variant="danger" standalone>
          {bodyText}
        </InlineAlert>
      );
      const element = screen.getByText(bodyText).closest("div");
      expect(element).toHaveClass("rvt-inline-alert--danger");
      expect(element).toHaveClass(standaloneClassName);
    });
  });
});
