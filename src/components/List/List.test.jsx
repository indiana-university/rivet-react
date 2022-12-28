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
        </List>
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
        </List>
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
        </List>
      );
      const list = await screen.findByTestId(testId);
      expect(list.nodeName).toBe("OL");
    });

    it("should render a plain list if variant is plain", async () => {
      render(
        <List data-testid={testId} variant="plain">
          <li>One</li>
          <li>Two</li>
          <li>Three</li>
        </List>
      );
      const list = await screen.findByTestId(testId);
      expect(list).toHaveClass("rvt-list-plain");
    });

    it("should render an inline list if inline is true", async () => {
      render(
        <List data-testid={testId} inline>
          <li>One</li>
          <li>Two</li>
          <li>Three</li>
        </List>
      );
      const list = await screen.findByTestId(testId);
      expect(list).toHaveClass("rvt-list-inline");
    });

    it("should render a child array as list items", async () => {
      const items = ["One", "Two", "Three"];
      render(<List data-testid={testId}>{items}</List>);
      const list = await screen.findByTestId(testId);
      expect(list.children[0].nodeName).toBe("LI");
      expect(list.children[0].innerHTML).toBe(items[0]);
      expect(list.children[1].nodeName).toBe("LI");
      expect(list.children[1].innerHTML).toBe(items[1]);
      expect(list.children[2].nodeName).toBe("LI");
      expect(list.children[2].innerHTML).toBe(items[2]);
    });
  });
});
