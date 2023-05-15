/*
Copyright (C) 2018 The Trustees of Indiana University
SPDX-License-Identifier: BSD-3-Clause
*/
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import React from "react";

import ResourceFooterLinkBlock from "./ResourceFooterLinkBlock";

describe("<ResourceFooterLinkBlock />", () => {
  const id = "test";
  describe("ResourceFooterLinkBlock", () => {
    it("should render without error", async () => {
      render(
        <ResourceFooterLinkBlock data-testid="test" label="Test Links">
          <li className="rvt-footer-resources__list-item">
            <a href="#">Example Link 1</a>
          </li>
          <li className="rvt-footer-resources__list-item">
            <a href="#">Example Link 2</a>
          </li>
          <li className="rvt-footer-resources__list-item">
            <a href="#">Example Link 3</a>
          </li>
        </ResourceFooterLinkBlock>
      );

      const component = await screen.findByTestId("test");
      checkBaseItem(component);
    });
  });

  describe("ResourceFooterLinkBlock_NoListItem", () => {
    it("should render without error", async () => {
      render(
        <ResourceFooterLinkBlock data-testid="test" label="Test Links">
          <a href="#">Example Link 1</a>
          <a href="#">Example Link 2</a>
          <a href="#">Example Link 3</a>
        </ResourceFooterLinkBlock>
      );

      const component = await screen.findByTestId("test");
      checkBaseItem(component);
    });
  });

  describe("ResourceFooterLinkBlock_MixListItem", () => {
    it("should render without error", async () => {
      render(
        <ResourceFooterLinkBlock data-testid="test" label="Test Links">
          <a href="#">Example Link 1</a>
          <li className="rvt-footer-resources__list-item">
            <a href="#">Example Link 2</a>
          </li>
          <li>
            <a href="#">Example Link 3</a>
          </li>
        </ResourceFooterLinkBlock>
      );

      const component = await screen.findByTestId("test");
      checkBaseItem(component);
    });
  });

  describe("ResourceFooterLinkBlock_NoChildren", () => {
    it("should render without error", async () => {
      render(<ResourceFooterLinkBlock data-testid="test" label="Test Links" />);

      const component = await screen.findByTestId("test");
      const header = component.children[0];
      const list = component.children[1];

      expect(header.nodeName).toBe("H3");
      expect(header.innerHTML).toBe("Test Links");
      expect(list.children.length).toBe(0);
    });
  });

  describe("ResourceFooterLinkBlock_MixListContent", () => {
    it("should render without error", async () => {
      render(
        <ResourceFooterLinkBlock data-testid="test" label="Test Links">
          Example Link 1<span>Example Link 2</span>
          {3}
        </ResourceFooterLinkBlock>
      );

      const component = await screen.findByTestId("test");
      const header = component.children[0];
      const list = component.children[1];

      expect(header.nodeName).toBe("H3");
      expect(header.innerHTML).toBe("Test Links");

      expect(list.children[0].nodeName).toBe("LI");
      expect(list.children[0]).toHaveClass("rvt-footer-resources__list-item");
      expect(list.children[0].innerHTML).toBe("Example Link 1");

      expect(list.children[1].nodeName).toBe("LI");
      expect(list.children[1]).toHaveClass("rvt-footer-resources__list-item");
      expect(list.children[1].children[0].nodeName).toBe("SPAN");
      expect(list.children[1].children[0].innerHTML).toBe("Example Link 2");

      expect(list.children[2].nodeName).toBe("LI");
      expect(list.children[2]).toHaveClass("rvt-footer-resources__list-item");
      expect(list.children[2].innerHTML).toBe("3");
    });
  });
});

function checkBaseItem(component) {
  const header = component.children[0];
  const list = component.children[1];

  expect(header.nodeName).toBe("H3");
  expect(header.innerHTML).toBe("Test Links");

  expect(list.children[0].nodeName).toBe("LI");
  expect(list.children[0]).toHaveClass("rvt-footer-resources__list-item");
  expect(list.children[0].children[0].nodeName).toBe("A");
  expect(list.children[0].children[0].innerHTML).toBe("Example Link 1");

  expect(list.children[1].nodeName).toBe("LI");
  expect(list.children[1]).toHaveClass("rvt-footer-resources__list-item");
  expect(list.children[1].children[0].nodeName).toBe("A");
  expect(list.children[1].children[0].innerHTML).toBe("Example Link 2");

  expect(list.children[2].nodeName).toBe("LI");
  expect(list.children[2]).toHaveClass("rvt-footer-resources__list-item");
  expect(list.children[2].children[0].nodeName).toBe("A");
  expect(list.children[2].children[0].innerHTML).toBe("Example Link 3");
}
