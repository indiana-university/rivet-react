/*
Copyright (C) 2018 The Trustees of Indiana University
SPDX-License-Identifier: BSD-3-Clause
*/
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import React from "react";

import ResourceFooterTextBlock from "./ResourceFooterTextBlock";
import { TestUtils } from "../util/TestUtils.js";

describe("<ResourceFooterTextBlock />", () => {
  describe("ResourceFooterTextBlock", () => {
    it("should render without error", async () => {
      render(
        <ResourceFooterTextBlock
          data-testid={TestUtils.Footer.testId}
          label="Test Links"
        >
          This is a block of example text
        </ResourceFooterTextBlock>
      );

      const component = await screen.findByTestId(TestUtils.Footer.testId);
      const header = component.children[0];
      const content = component.children[1];

      expect(header.nodeName).toBe("H3");
      expect(header.innerHTML).toBe("Test Links");

      expect(content.innerHTML).toBe("This is a block of example text");
    });
  });

  describe("ResourceFooterTextBlock_MixContent", () => {
    it("should render without error", async () => {
      render(
        <ResourceFooterTextBlock
          data-testid={TestUtils.Footer.testId}
          label="Test Links"
        >
          Example Link 1<span>Example Link 2</span>
          {3}
        </ResourceFooterTextBlock>
      );

      const component = await screen.findByTestId(TestUtils.Footer.testId);
      const header = component.children[0];
      const content = component.children[1];

      expect(header.nodeName).toBe("H3");
      expect(header.innerHTML).toBe("Test Links");

      expect(content.innerHTML).toBe(
        "Example Link 1<span>Example Link 2</span>3"
      );
    });
  });
});
