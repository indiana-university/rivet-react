/*
Copyright (C) 2018 The Trustees of Indiana University
SPDX-License-Identifier: BSD-3-Clause
*/
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import React from "react";
import EmptyState from "./EmptyState";

describe("<EmptyState />", () => {
  const testId = "test-id";
  describe("Rendering and text", () => {
    it("should render without throwing an error", () => {
      render(<EmptyState data-testid={testId} />);
      expect(screen.getByTestId(testId)).toHaveClass("rvt-empty-state");
    });

    it("should render content", () => {
      const content = "content";
      render(
        <EmptyState data-testid={testId}>
          <EmptyState.Content>{content}</EmptyState.Content>
        </EmptyState>
      );
      expect(screen.getByText(content)).toHaveClass("rvt-empty-state__content");
    });

    it("should render actions", () => {
      const actions = "actions";
      render(
        <EmptyState data-testid={testId}>
          <EmptyState.Actions>{actions}</EmptyState.Actions>
        </EmptyState>
      );
      expect(screen.getByText(actions)).toHaveClass("rvt-empty-state__actions");
    });
  });
});
