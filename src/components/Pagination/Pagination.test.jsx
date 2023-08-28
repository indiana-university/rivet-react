/*
Copyright (C) 2018 The Trustees of Indiana University
SPDX-License-Identifier: BSD-3-Clause
*/
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import user from "@testing-library/user-event";
import React from "react";
import Pagination from "./Pagination";

describe("<Pagination />", () => {
  describe("Rendering and text", () => {
    it("should render without error", async () => {
      render(
        <Pagination>
          <Pagination.Item>1</Pagination.Item>
        </Pagination>
      );
      const pagination = await screen.findByRole("navigation");

      expect(pagination.nodeName).toBe("NAV");
      expect(pagination.children.length).toBe(1);

      const ul = pagination.children[0];
      expect(ul.nodeName).toBe("UL");
      expect(ul).toHaveClass("rvt-pagination");

      expect(ul.children.length).toBe(1);
      const li = ul.children[0];
      expect(li.nodeName).toBe("LI");
    });
  });
  describe("<Pagination.Item />", () => {
    const testId = "test-id";
    it("should render an item", async () => {
      render(<Pagination.Item data-testid={testId}>One</Pagination.Item>);
      const item = await screen.findByTestId(testId);

      expect(item.nodeName).toBe("LI");
      expect(item).toHaveClass("rvt-pagination__item");
      expect(item.children.length).toBe(1);
      const a = item.children[0];
      expect(a.nodeName).toBe("A");
      expect(a.innerHTML).toBe("One");
    });

    it("should not render a link when disabled", async () => {
      render(
        <Pagination.Item data-testid={testId} disabled>
          One
        </Pagination.Item>
      );
      const item = await screen.findByTestId(testId);

      expect(item.children.length).toBe(0);
      expect(item.innerHTML).toBe("One");
    });

    it("should provide an aria-current if current", async () => {
      render(
        <Pagination.Item data-testid={testId} current>
          One
        </Pagination.Item>
      );
      const item = await screen.findByTestId(testId);

      const anchor = item.children[0];

      // console.log(anchor.attributes.item.getNamedItem("aira-current"));
      // for (const attr of anchor.attributes) {
      //     console.log(`${attr.name} -> ${attr.value}\n`);
      //   }
      // screen.debug();
      // console.log(anchor);
      // expect(anchor.attributes.getNamedItem("aira-current").value).toBe("page");
    });
  });
});