/*
Copyright (C) 2018 The Trustees of Indiana University
SPDX-License-Identifier: BSD-3-Clause
*/
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import user from "@testing-library/user-event";
import React from "react";
import PaginationItem from "./PaginationItem";

describe("<PaginationItem />", () => {
  const testId = "test-id";
  it("should render an item", async () => {
    render(<PaginationItem data-testid={testId}>One</PaginationItem>);
    const item = await screen.findByTestId(testId);

    expect(item.nodeName).toBe("LI");
    expect(item).toHaveClass("rvt-pagination__item");
    expect(item.children.length).toBe(1);
    const a = item.children[0];
    expect(a.nodeName).toBe("A");
    expect(a.innerHTML).toBe("One");
    expect(a.href).toBe("http://localhost/#");
  });

  it("should not render a link when disabled", async () => {
    render(
      <PaginationItem data-testid={testId} disabled>
        One
      </PaginationItem>
    );
    const item = await screen.findByTestId(testId);

    expect(item.children.length).toBe(0);
    expect(item.innerHTML).toBe("One");
  });

  it("should provide an aria-current if current", async () => {
    render(
      <PaginationItem data-testid={testId} current>
        One
      </PaginationItem>
    );
    const item = await screen.findByTestId(testId);
    expect(item.nodeName).toBe("LI");
    expect(item).toHaveClass("rvt-pagination__item");
    expect(item.children.length).toBe(1);
    const a = item.children[0];
    expect(a.nodeName).toBe("A");
    expect(a.innerHTML).toBe("One");
    expect(a).toHaveAttribute("aria-current", "page");
  });

  it("should set url if provided", async () => {
    render(
      <PaginationItem
        data-testid={testId}
        url="http://www.iu.edu"
      >
        One
      </PaginationItem>
    );
    const item = await screen.findByTestId(testId);
    const a = item.children[0];
    expect(a.nodeName).toBe("A");
    expect(a.innerHTML).toBe("One");
    expect(a.href).toBe("http://www.iu.edu/");
  });

  it("should use set control element", async () => {
    render(
      <PaginationItem
        component="button"
        data-testid={testId}
      >
        One
      </PaginationItem>
    );
    const item = await screen.findByTestId(testId);

    expect(item.nodeName).toBe("LI");
    expect(item).toHaveClass("rvt-pagination__item");
    expect(item.children.length).toBe(1);
    const button = item.children[0];
    expect(button.nodeName).toBe("BUTTON");
    expect(button.innerHTML).toBe("One");
    expect(button.href).toBe(undefined);
  });

  describe("<PaginationItem.First />", () => {
    it("should render an item", async () => {
      render(<PaginationItem.First data-testid={testId} />);
      const item = await screen.findByTestId(testId);
  
      expect(item.nodeName).toBe("LI");
      expect(item).toHaveClass("rvt-pagination__item");
      expect(item.children.length).toBe(1);
      const a = item.children[0];
      expect(a.children.length).toBe(1);
      expect(a.nodeName).toBe("A");
      expect(a.href).toBe("http://localhost/#");
      expect(a).toHaveAttribute("aria-label", "Go to first page");
      const icon = a.children[0];
      expect(icon.nodeName).toBe("svg");
    });

    it("should not render a link when disabled", async () => {
      render(
        <PaginationItem.First data-testid={testId} disabled/>
      );
      const item = await screen.findByTestId(testId);

      expect(item.nodeName).toBe("LI");
      expect(item).toHaveClass("rvt-pagination__item");
      expect(item.children.length).toBe(1);
      expect(item).toHaveAttribute("aria-label", "No previous pages");
      const icon = item.children[0];
      expect(icon.nodeName).toBe("svg");
    });
  });

  describe("<PaginationItem.Previous />", () => {
    it("should render an item", async () => {
      render(<PaginationItem.Previous data-testid={testId} />);
      const item = await screen.findByTestId(testId);
  
      expect(item.nodeName).toBe("LI");
      expect(item).toHaveClass("rvt-pagination__item");
      expect(item.children.length).toBe(1);
      const a = item.children[0];
      expect(a.children.length).toBe(1);
      expect(a.nodeName).toBe("A");
      expect(a.href).toBe("http://localhost/#");
      expect(a).toHaveAttribute("aria-label", "Go to previous page");
      const icon = a.children[0];
      expect(icon.nodeName).toBe("svg");
    });

    it("should not render a link when disabled", async () => {
      render(
        <PaginationItem.Previous data-testid={testId} disabled/>
      );
      const item = await screen.findByTestId(testId);

      expect(item.nodeName).toBe("LI");
      expect(item).toHaveClass("rvt-pagination__item");
      expect(item.children.length).toBe(1);
      expect(item).toHaveAttribute("aria-label", "No previous pages");
      const icon = item.children[0];
      expect(icon.nodeName).toBe("svg");
    });
  });

  describe("<PaginationItem.Last />", () => {
    it("should render an item", async () => {
      render(<PaginationItem.Last data-testid={testId} />);
      const item = await screen.findByTestId(testId);
  
      expect(item.nodeName).toBe("LI");
      expect(item).toHaveClass("rvt-pagination__item");
      expect(item.children.length).toBe(1);
      const a = item.children[0];
      expect(a.children.length).toBe(1);
      expect(a.nodeName).toBe("A");
      expect(a.href).toBe("http://localhost/#");
      expect(a).toHaveAttribute("aria-label", "Go to last page");
      const icon = a.children[0];
      expect(icon.nodeName).toBe("svg");
    });

    it("should not render a link when disabled", async () => {
      render(
        <PaginationItem.Last data-testid={testId} disabled/>
      );
      const item = await screen.findByTestId(testId);

      expect(item.nodeName).toBe("LI");
      expect(item).toHaveClass("rvt-pagination__item");
      expect(item.children.length).toBe(1);
      expect(item).toHaveAttribute("aria-label", "No next pages");
      const icon = item.children[0];
      expect(icon.nodeName).toBe("svg");
    });
  });

  describe("<PaginationItem.Next />", () => {
    it("should render an item", async () => {
      render(<PaginationItem.Next data-testid={testId} />);
      const item = await screen.findByTestId(testId);
  
      expect(item.nodeName).toBe("LI");
      expect(item).toHaveClass("rvt-pagination__item");
      expect(item.children.length).toBe(1);
      const a = item.children[0];
      expect(a.children.length).toBe(1);
      expect(a.nodeName).toBe("A");
      expect(a.href).toBe("http://localhost/#");
      expect(a).toHaveAttribute("aria-label", "Go to next page");
      const icon = a.children[0];
      expect(icon.nodeName).toBe("svg");
    });

    it("should not render a link when disabled", async () => {
      render(
        <PaginationItem.Next data-testid={testId} disabled/>
      );
      const item = await screen.findByTestId(testId);

      expect(item.nodeName).toBe("LI");
      expect(item).toHaveClass("rvt-pagination__item");
      expect(item.children.length).toBe(1);
      expect(item).toHaveAttribute("aria-label", "No next pages");
      const icon = item.children[0];
      expect(icon.nodeName).toBe("svg");
    });
  });
});
