/*
Copyright (C) 2018 The Trustees of Indiana University
SPDX-License-Identifier: BSD-3-Clause
*/
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import React from "react";

import SocialMediaFooter from "./SocialMediaFooter";
import SocialMediaFooterLink from "./SocialMediaFooterLink";
import { TestUtils } from "../util/TestUtils.js";

describe("<SocialMediaFooter />", () => {
  describe("SocialMediaFooter", () => {
    it("should render without error", async () => {
      render(
        <SocialMediaFooter
          data-testid={TestUtils.Footer.testId}
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

      const component = await screen.findByTestId(TestUtils.Footer.testId);
      checkBaseItem(component, "testid");
      expect(component.children[0]).toHaveClass("rvt-container-lg");
      expect(component.children[0]).toHaveClass("test-container-class");
    });
  });

  describe("SocialMediaFooter_NoListItem", () => {
    it("should render without error", async () => {
      render(
        <SocialMediaFooter
          data-testid={TestUtils.Footer.testId}
          id="testid"
          label="Test Links"
        >
          <a href="#">Example Link 1</a>
          <a href="#">Example Link 2</a>
          <a href="#">Example Link 3</a>
        </SocialMediaFooter>
      );

      const component = await screen.findByTestId(TestUtils.Footer.testId);
      checkBaseItem(component, "testid");
      expect(component.children[0]).toHaveClass("rvt-container-sm");
    });
  });

  describe("SocialMediaFooter_MixListItem", () => {
    it("should render without error", async () => {
      render(
        <SocialMediaFooter
          data-testid={TestUtils.Footer.testId}
          id="testid"
          label="Test Links"
        >
          <a href="#">Example Link 1</a>
          <li>
            <a href="#">Example Link 2</a>
          </li>
          <a href="#">Example Link 3</a>
        </SocialMediaFooter>
      );

      const component = await screen.findByTestId(TestUtils.Footer.testId);
      checkBaseItem(component, "testid");
      expect(component.children[0]).toHaveClass("rvt-container-sm");
    });
  });

  describe("SocialMediaFooter_MixListContent", () => {
    it("should render without error", async () => {
      render(
        <SocialMediaFooter data-testid={TestUtils.Footer.testId}>
          Example Link 1<span>Example Link 2</span>
          {3}
          <SocialMediaFooterLink label="test" url="#">
            test
          </SocialMediaFooterLink>
        </SocialMediaFooter>
      );

      const headerId = "testid-header";
      const component = await screen.findByTestId(TestUtils.Footer.testId);
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

  describe("SocialMediaFooter_NoChildren", () => {
    it("should render without error", async () => {
      render(<SocialMediaFooter data-testid={TestUtils.Footer.testId} />);

      const component = await screen.findByTestId(TestUtils.Footer.testId);
      const container = component.children[0];
      const header = container.children[0];
      const list = container.children[1];

      expect(header.nodeName).toBe("H2");
      expect(header.innerHTML).toBe("Social media");
      expect(list.children.length).toBe(0);
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
