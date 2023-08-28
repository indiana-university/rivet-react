/*
Copyright (C) 2018 The Trustees of Indiana University
SPDX-License-Identifier: BSD-3-Clause
*/
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import user from "@testing-library/user-event";
import React from "react";
import Pagination from "./Pagination";
import PaginationItem from "./PaginationItem";

describe("<Pagination />", () => {
  describe("Rendering and text", () => {
    it("should render without error", async () => {
      render(
        <Pagination>
          <PaginationItem>1</PaginationItem>
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

    it("should have id on list", async () => {
      render(
        <Pagination id='paginationId'>
          <PaginationItem>1</PaginationItem>
        </Pagination>
      );
      const pagination = await screen.findByRole("navigation");
      const ul = pagination.children[0];
      expect(ul.id).toBe("paginationId");
    });
  });
});