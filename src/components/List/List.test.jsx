/*
Copyright (C) 2018 The Trustees of Indiana University
SPDX-License-Identifier: BSD-3-Clause
*/
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import React from "react";
import List from "./List";

describe("<List />", () => {
  const testId = "test-id";

  describe("Rendering and text", () => {
    it("should render an unordered list by default", async () => {
      render(
        <List data-testid={testId}>
          <li>One</li>
          <li>Two</li>
          <li>Three</li>
        </List>,
      );
      const list = await screen.findByTestId(testId);
      expect(list.nodeName).toBe("UL");
    });

    it("should render an unordered list if variant is unordered", async () => {
      render(
        <List data-testid={testId} variant="unordered">
          <li>One</li>
          <li>Two</li>
          <li>Three</li>
        </List>,
      );
      const list = await screen.findByTestId(testId);
      expect(list.nodeName).toBe("UL");
    });

    it("should render an ordered list if variant is ordered", async () => {
      render(
        <List data-testid={testId} variant="ordered">
          <li>One</li>
          <li>Two</li>
          <li>Three</li>
        </List>,
      );
      const list = await screen.findByTestId(testId);
      expect(list.nodeName).toBe("OL");
    });

    it("should render a description list if variant is description", async () => {
      render(
        <List data-testid={testId} variant="description">
          <dt>term 1</dt>
          <dd>description 1</dd>
          <dt>term 2</dt>
          <dd>description 2</dd>
        </List>,
      );
      const list = await screen.findByTestId(testId);
      expect(list.nodeName).toBe("DL");
      expect(list).toHaveClass("rvt-list-description");
    });

    it("should not render a plain list by default", async () => {
      render(
        <List data-testid={testId}>
          <li>One</li>
          <li>Two</li>
          <li>Three</li>
        </List>,
      );
      const list = await screen.findByTestId(testId);
      expect(list).not.toHaveClass("rvt-list-plain");
    });

    it("should render a plain list if plain is true", async () => {
      render(
        <List data-testid={testId} plain>
          <li>One</li>
          <li>Two</li>
          <li>Three</li>
        </List>,
      );
      const list = await screen.findByTestId(testId);
      expect(list).toHaveClass("rvt-list-plain");
    });

    it("should not render a plain list if plain is false", async () => {
      render(
        <List data-testid={testId} plain={false}>
          <li>One</li>
          <li>Two</li>
          <li>Three</li>
        </List>,
      );
      const list = await screen.findByTestId(testId);
      expect(list).not.toHaveClass("rvt-list-plain");
    });

    it("should not render an inline list by default", async () => {
      render(
        <List data-testid={testId}>
          <li>One</li>
          <li>Two</li>
          <li>Three</li>
        </List>,
      );
      const list = await screen.findByTestId(testId);
      expect(list).not.toHaveClass("rvt-list-inline");
    });

    it("should render an inline list if inline is true", async () => {
      render(
        <List data-testid={testId} inline>
          <li>One</li>
          <li>Two</li>
          <li>Three</li>
        </List>,
      );
      const list = await screen.findByTestId(testId);
      expect(list).toHaveClass("rvt-list-inline");
    });

    it("should not render an inline list if inline is false", async () => {
      render(
        <List data-testid={testId} inline={false}>
          <li>One</li>
          <li>Two</li>
          <li>Three</li>
        </List>,
      );
      const list = await screen.findByTestId(testId);
      expect(list).not.toHaveClass("rvt-list-inline");
    });
  });
});
