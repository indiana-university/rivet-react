/*
Copyright (C) 2018 The Trustees of Indiana University
SPDX-License-Identifier: BSD-3-Clause
*/
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import React from "react";

import ResourceFooter from "./ResourceFooter";
import { TestUtils } from "../util/TestUtils.js";

describe("<ResourceFooter />", () => {
  const id = "test";
  describe("ResourceFooter", () => {
    it("should render without error", async () => {
      render(
        <ResourceFooter data-testid={TestUtils.Footer.testId}>
          This is a block of example text
        </ResourceFooter>
      );

      const component = await screen.findByTestId(TestUtils.Footer.testId);
      const header = component.children[0];
      const content = component.children[1];

      expect(header.nodeName).toBe("H2");
      expect(header.innerHTML).toBe("Additional resources");

      expect(content.nodeName).toBe("DIV");
      expect(content.innerHTML).toBe("This is a block of example text");
      expect(content).toHaveClass("rvt-container-sm");
    });
  });

  describe("ResourceFooter_OptionsSet", () => {
    it("should render without error", async () => {
      render(
        <ResourceFooter
          data-testid={TestUtils.Footer.testId}
          containerClass="test-container-class"
          id="testid"
          label="Test Links"
          size="lg"
        >
          This is a block of example text
        </ResourceFooter>
      );

      const component = await screen.findByTestId(TestUtils.Footer.testId);
      const header = component.children[0];
      const content = component.children[1];

      expect(header.nodeName).toBe("H2");
      expect(header.innerHTML).toBe("Test Links");

      expect(content.nodeName).toBe("DIV");
      expect(content.innerHTML).toBe("This is a block of example text");
      expect(content).toHaveClass("rvt-container-lg");
      expect(content).toHaveClass("test-container-class");
    });
  });
});
