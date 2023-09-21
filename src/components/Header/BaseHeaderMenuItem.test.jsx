/*
Copyright (C) 2018 The Trustees of Indiana University
SPDX-License-Identifier: BSD-3-Clause
*/
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";

import BaseHeaderMenuItem from "./BaseHeaderMenuItem";
import { TestUtils } from "../util/TestUtils.js";

import userEvent from "@testing-library/user-event";

const user = userEvent.setup();

describe("<BaseHeaderMenuItem/>", () => {
  describe("Rendering and styling",  () => {
    it("should render default with provided children", () => {
      render(
        <BaseHeaderMenuItem testMode>
          Test text
        </BaseHeaderMenuItem>
      );
      const container = screen.getByTestId(TestUtils.Header.headerMenuItemContainer)
      expect(container).toHaveClass("rvt-header-menu__item");
      expect(container.nodeName).toBe("LI")
      expect(container.innerHTML).toBe("Test text")
    });

    it("should render as link with provided children", () => {
      render(
        <BaseHeaderMenuItem testMode itemUrl="/testHref">
          Test text
        </BaseHeaderMenuItem>
      );
      const container = screen.getByTestId(TestUtils.Header.headerMenuItemContainer)
      const anchor = screen.getByTestId(TestUtils.Header.headerMenuItemAnchor)
      expect(container).toHaveClass("rvt-header-menu__item");
      expect(container.nodeName).toBe("LI")

      expect(anchor).toHaveClass("rvt-header-menu__link");
      expect(anchor.nodeName).toBe("A")
      expect(anchor).toHaveAttribute("href", "/testHref");
      expect(anchor).not.toHaveAttribute("aria-current");
      expect(anchor.innerHTML).toBe("Test text")
    });

    it("should render as link with current page indicators", () => {
      render(
        <BaseHeaderMenuItem current testMode itemUrl="/testHref">
          Test text
        </BaseHeaderMenuItem>
      );
      const container = screen.getByTestId(TestUtils.Header.headerMenuItemContainer)
      const anchor = screen.getByTestId(TestUtils.Header.headerMenuItemAnchor)
      expect(container).toHaveClass("rvt-header-menu__item");
      expect(container.nodeName).toBe("LI")

      expect(anchor).toHaveClass("rvt-header-menu__link");
      expect(anchor.nodeName).toBe("A")
      expect(anchor).toHaveAttribute("href", "/testHref");
      expect(anchor).toHaveAttribute("aria-current", "page");
      expect(anchor.innerHTML).toBe("Test text")
    });
  });

  describe("Rendering and styling as submenu ",  () => {
    it("should render with provided children", () => {
      render(
        <BaseHeaderMenuItem testMode subMenu>
          Test text
        </BaseHeaderMenuItem>
      );
      const container = screen.getByTestId(TestUtils.Header.headerMenuItemContainer)
      expect(container).toHaveClass("rvt-header-menu__submenu-item");
      expect(container.nodeName).toBe("LI")
      expect(container.innerHTML).toBe("Test text")
    });
  
    it("should render as link with provided children", () => {
      render(
        <BaseHeaderMenuItem testMode subMenu itemUrl="/testHref">
          Test text
        </BaseHeaderMenuItem>
      );
      const container = screen.getByTestId(TestUtils.Header.headerMenuItemContainer)
      const anchor = screen.getByTestId(TestUtils.Header.headerMenuItemAnchor)
      expect(container).toHaveClass("rvt-header-menu__submenu-item");
      expect(container.nodeName).toBe("LI")
  
      expect(anchor).toHaveClass("rvt-header-menu__submenu-link");
      expect(anchor.nodeName).toBe("A")
      expect(anchor).toHaveAttribute("href", "/testHref");
      expect(anchor.innerHTML).toBe("Test text")
    });

    it("should render as link with current page indicators", () => {
      render(
        <BaseHeaderMenuItem current subMenu testMode itemUrl="/testHref">
          Test text
        </BaseHeaderMenuItem>
      );
      const container = screen.getByTestId(TestUtils.Header.headerMenuItemContainer)
      const anchor = screen.getByTestId(TestUtils.Header.headerMenuItemAnchor)
      expect(container).toHaveClass("rvt-header-menu__submenu-item");
      expect(container.nodeName).toBe("LI")

      expect(anchor).toHaveClass("rvt-header-menu__submenu-link");
      expect(anchor.nodeName).toBe("A")
      expect(anchor).toHaveAttribute("href", "/testHref");
      expect(anchor).toHaveAttribute("aria-current", "page");
      expect(anchor.innerHTML).toBe("Test text")
    });
  });
});
