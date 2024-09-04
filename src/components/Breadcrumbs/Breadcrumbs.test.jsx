/*
Copyright (C) 2018 The Trustees of Indiana University
SPDX-License-Identifier: BSD-3-Clause
*/
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import React from "react";
import Breadcrumbs from "./Breadcrumbs";

describe("<Breadcrumbs />", () => {
  describe("Rendering and text", () => {
    it("should render a series of breadcrumbs", async () => {
      render(
        <Breadcrumbs>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Tier two</a>
          </li>
          <li aria-label="Current page">Tier three</li>
        </Breadcrumbs>
      );
      const breadcrumbs = await screen.findByRole("navigation");
      expect(breadcrumbs.nodeName).toBe("NAV");
      expect(breadcrumbs.attributes.getNamedItem("aria-label").value).toBe(
        "Breadcrumbs"
      );

      expect(breadcrumbs.children.length).toBe(1);
      const ol = breadcrumbs.children[0];
      expect(ol).toHaveClass("rvt-breadcrumbs");
    });

    it("if no children, should render without error", async () => {
      render(
        <Breadcrumbs />
      );
      const breadcrumbs = await screen.findByRole("navigation");
      expect(breadcrumbs.nodeName).toBe("NAV");
      expect(breadcrumbs.attributes.getNamedItem("aria-label").value).toBe(
        "Breadcrumbs"
      );

      expect(breadcrumbs.children.length).toBe(1);
      const ol = breadcrumbs.children[0];
      expect(ol).toHaveClass("rvt-breadcrumbs");
      expect(ol.children.length).toBe(0);
    });

    it("should wrap children in list item tags", async () => {
      render(
        <Breadcrumbs>
          <a href="#">Home</a>
          <a href="#">Tier two</a>
          <span>Tier three</span>
        </Breadcrumbs>
      );
      const breadcrumbs = await screen.findByRole("navigation");
      expect(breadcrumbs.children.length).toBe(1);
      const ol = breadcrumbs.children[0];

      expect(ol.children.length).toBe(3);
      expect(ol.children[0].nodeName).toBe("LI");
      expect(ol.children[0].children[0].innerHTML).toBe("Home");
      expect(ol.children[1].nodeName).toBe("LI");
      expect(ol.children[1].children[0].innerHTML).toBe("Tier two");
      expect(ol.children[2].nodeName).toBe("LI");
      expect(ol.children[2].attributes.getNamedItem("aria-label").value).toBe(
        "Current page"
      );
      expect(ol.children[2].children[0].innerHTML).toBe("Tier three");
    });
  });
});
