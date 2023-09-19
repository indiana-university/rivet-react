/*
Copyright (C) 2018 The Trustees of Indiana University
SPDX-License-Identifier: BSD-3-Clause
*/
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import React from "react";

import BaseFooter from "./BaseFooter";
import { TestUtils } from "../util/TestUtils.js";

describe("<BaseFooter />", () => {
  describe("BaseFooter with privacy", () => {
    it("should render without error", async () => {
      render(
        <BaseFooter
          data-testid={TestUtils.Footer.testId}
          privacyUrl="test.test.test"
        />
      );

      const component = await screen.findByTestId(TestUtils.Footer.testId);
      const privacy = screen.queryByText("Privacy Notice");
      expect(component).toHaveClass("rvt-footer-base");
      expect(component).toContainElement(privacy);
      expect(component).toHaveTextContent(`© ${(new Date()).getFullYear()}`)
    });
  });

  describe("BaseFooter without privacy", () => {
    it("should render without error", async () => {
      render(<BaseFooter data-testid={TestUtils.Footer.testId} />);

      const component = await screen.findByTestId(TestUtils.Footer.testId);
      const privacy = screen.queryByText("Privacy Notice");
      expect(component).toHaveClass("rvt-footer-base");
      expect(component).not.toContainElement(privacy);
    });
  });

  describe("BaseFooter light variant", () => {
    it("should render without error", async () => {
      render(
        <BaseFooter data-testid={TestUtils.Footer.testId} variant="light" />
      );

      const component = await screen.findByTestId(TestUtils.Footer.testId);
      expect(component).toHaveClass("rvt-footer-base");
      expect(component).toHaveClass("rvt-footer-base--light");
    });
  });

  describe("BaseFooter with copyright", () => {
    it("should render without error", async () => {
      render(
        <BaseFooter data-testid={TestUtils.Footer.testId} copyrightYear="2021" />
      );

      const component = await screen.findByTestId(TestUtils.Footer.testId);
      expect(component).toHaveClass("rvt-footer-base");
      expect(component).toHaveTextContent("© 2021")
    });
  });
});
