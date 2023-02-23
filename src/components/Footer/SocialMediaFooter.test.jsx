/*
Copyright (C) 2018 The Trustees of Indiana University
SPDX-License-Identifier: BSD-3-Clause
*/
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import React from "react";

import SocialMediaFooter from "./SocialMediaFooter";
import SocialMediaFooterLink from "./SocialMediaFooterLink";

describe("<SocialMediaFooter />", () => {
  const id = "test";
  describe("SocialMediaFooter", () => {
    it("should render without error", async () => {
      render(
        <SocialMediaFooter
          data-testid="test"
          containerClass="test-container-class"
          id="testid"
          label="Test Links"
          size="lg"
        >
          <li>
            <a href="#">Example Link 1</a>
          </li>
          <li>
            <a href="#">Example Link 2</a>
          </li>
          <li>
            <a href="#">Example Link 3</a>
          </li>
        </SocialMediaFooter>
      );

      const component = await screen.findByTestId("test");
      checkBaseItem(component, "testid");
      expect(component.children[0]).toHaveClass("rvt-container-lg");
      expect(component.children[0]).toHaveClass("test-container-class");
    });
  });

  describe("SocialMediaFooter_NoListItem", () => {
    it("should render without error", async () => {
      render(
        <SocialMediaFooter data-testid="test" id="testid" label="Test Links">
          <a href="#">Example Link 1</a>
          <a href="#">Example Link 2</a>
          <a href="#">Example Link 3</a>
        </SocialMediaFooter>
      );

      const component = await screen.findByTestId("test");
      checkBaseItem(component, "testid");
      expect(component.children[0]).toHaveClass("rvt-container-sm");
    });
  });

  describe("SocialMediaFooter_MixListItem", () => {
    it("should render without error", async () => {
      render(
        <SocialMediaFooter data-testid="test" id="testid" label="Test Links">
          <a href="#">Example Link 1</a>
          <li>
            <a href="#">Example Link 2</a>
          </li>
          <a href="#">Example Link 3</a>
        </SocialMediaFooter>
      );

      const component = await screen.findByTestId("test");
      checkBaseItem(component, "testid");
      expect(component.children[0]).toHaveClass("rvt-container-sm");
    });
  });

  describe("SocialMediaFooter_MixListContent", () => {
    it("should render without error", async () => {
      render(
        <SocialMediaFooter data-testid="test">
          Example Link 1<span>Example Link 2</span>
          {3}
          <SocialMediaFooterLink label="test" url="#">
            test
          </SocialMediaFooterLink>
        </SocialMediaFooter>
      );

      const headerId = "testid-header";
      const component = await screen.findByTestId("test");
      const container = component.children[0];
      const header = container.children[0];
      const list = container.children[1];

      expect(header.nodeName).toBe("H2");
      expect(header.innerHTML).toBe("Social media");

      expect(list.children[0].nodeName).toBe("LI");
      expect(list.children[0].innerHTML).toBe("Example Link 1");

      expect(list.children[1].nodeName).toBe("LI");
      expect(list.children[1].children[0].nodeName).toBe("SPAN");
      expect(list.children[1].children[0].innerHTML).toBe("Example Link 2");

      expect(list.children[2].nodeName).toBe("LI");
      expect(list.children[2].innerHTML).toBe("3");

      expect(list.children[3].nodeName).toBe("LI");
      expect(list.children[3].children[0].nodeName).toBe("A");
      expect(list.children[3].children[0].innerHTML).toBe(
        '<span class="rvt-sr-only">test</span>test'
      );
    });
  });
});

function checkBaseItem(component, id) {
  const container = component.children[0];
  const header = container.children[0];
  const list = container.children[1];

  const headerId = `${id}-header`;

  expect(component).toHaveAttribute("aria-labelledby", headerId);

  expect(header.nodeName).toBe("H2");
  expect(header.id).toBe(headerId);
  expect(header.innerHTML).toBe("Test Links");

  expect(list.children[0].nodeName).toBe("LI");
  expect(list.children[0].children[0].nodeName).toBe("A");
  expect(list.children[0].children[0].innerHTML).toBe("Example Link 1");

  expect(list.children[1].nodeName).toBe("LI");
  expect(list.children[1].children[0].nodeName).toBe("A");
  expect(list.children[1].children[0].innerHTML).toBe("Example Link 2");

  expect(list.children[2].nodeName).toBe("LI");
  expect(list.children[2].children[0].nodeName).toBe("A");
  expect(list.children[2].children[0].innerHTML).toBe("Example Link 3");
}
