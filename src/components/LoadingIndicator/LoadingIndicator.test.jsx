/*
Copyright (C) 2018 The Trustees of Indiana University
SPDX-License-Identifier: BSD-3-Clause
*/
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import React from "react";
import { LoadingIndicator } from "./index.jsx";

describe("<LoadingIndicator />", () => {
  describe("Rendering", () => {
    it("should render without throwing an error", () => {
      render(<LoadingIndicator />);
      const loadingIndicator = screen.getByRole("loadingIndicator", {});
      expect(loadingIndicator).toBeVisible();
      expect(loadingIndicator).toHaveClass("rvt-loader");
      expect(loadingIndicator).toHaveClass("rvt-loader--xs"); // default size
      expect(loadingIndicator.attributes.getNamedItem("aria-label").value).toBe(
        "Content loading"
      );
    });
    it("should render with correct size: xxs", () => {
      render(<LoadingIndicator size="xxs" />);
      expect(screen.getByRole("loadingIndicator", {})).toHaveClass(
        "rvt-loader--xxs"
      );
    });
    it("should render with correct size: xs", () => {
      render(<LoadingIndicator size="xs" />);
      expect(screen.getByRole("loadingIndicator", {})).toHaveClass(
        "rvt-loader--xs"
      );
    });
    it("should render with correct size: sm", () => {
      render(<LoadingIndicator size="sm" />);
      expect(screen.getByRole("loadingIndicator", {})).toHaveClass(
        "rvt-loader--sm"
      );
    });
    it("should render with correct size: md", () => {
      render(<LoadingIndicator size="md" />);
      expect(screen.getByRole("loadingIndicator", {})).toHaveClass(
        "rvt-loader--md"
      );
    });
    it("should render with correct size: lg", () => {
      render(<LoadingIndicator size="lg" />);
      expect(screen.getByRole("loadingIndicator", {})).toHaveClass(
        "rvt-loader--lg"
      );
    });
    it("should render with correct size: xl", () => {
      render(<LoadingIndicator size="xl" />);
      expect(screen.getByRole("loadingIndicator", {})).toHaveClass(
        "rvt-loader--xl"
      );
    });
    it("should render with correct size: xxl", () => {
      render(<LoadingIndicator size="xxl" />);
      expect(screen.getByRole("loadingIndicator", {})).toHaveClass(
        "rvt-loader--xxl"
      );
    });
    it("should apply the id", () => {
      const testId = "the_id";
      render(<LoadingIndicator id={testId} />);
      expect(screen.getByRole("loadingIndicator", {})).toHaveProperty(
        "id",
        testId
      );
    });
  });
});
