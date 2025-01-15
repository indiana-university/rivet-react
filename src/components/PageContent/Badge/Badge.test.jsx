/*
Copyright (C) 2018 The Trustees of Indiana University
SPDX-License-Identifier: BSD-3-Clause
*/
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import React from "react";
import Badge from "./Badge";

describe("<Badge />", () => {
  const badgeTestId = "test-badge";

  describe("Rendering", () => {
    it("should render without throwing an error", () => {
      render(<Badge data-testid={badgeTestId}>Base</Badge>);
      const badge = screen.getByTestId(badgeTestId);
      expect(badge).toBeVisible();
      expect(badge).toHaveClass("rvt-badge");
    });
  });

  describe("Styling", () => {
    it("should render the appropriate variant", () => {
      render(
        <Badge variant="info" data-testid={badgeTestId}>
          Info
        </Badge>,
      );
      const badge = screen.getByTestId(badgeTestId);
      expect(badge).toBeVisible();
      expect(badge).toHaveClass("rvt-badge--info");
    });

    it("should render the appropriate role", () => {
      render(
        <Badge modifier="secondary" data-testid={badgeTestId}>
          Secondary
        </Badge>,
      );
      const badge = screen.getByTestId(badgeTestId);
      expect(badge).toBeVisible();
      expect(badge).toHaveClass("rvt-badge--secondary");
    });

    it("should render combinations of variant and role", () => {
      render(
        <Badge variant="success" modifier="secondary" data-testid={badgeTestId}>
          Success secondary
        </Badge>,
      );
      const badge = screen.getByTestId(badgeTestId);
      expect(badge).toBeVisible();
      expect(badge).toHaveClass("rvt-badge--success-secondary");
    });
  });
});
