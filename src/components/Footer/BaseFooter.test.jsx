/*
Copyright (C) 2018 The Trustees of Indiana University
SPDX-License-Identifier: BSD-3-Clause
*/
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import React from "react";

import BaseFooter from "./BaseFooter";

describe("<BaseFooter />", () => {
  const id = "test";
  describe("BaseFooter with privacy", () => {
    it("should render without error", async () => {
      render(<BaseFooter data-testid="test" privacyUrl="test.test.test" />);

      const component = await screen.findByTestId("test");
      const privacy = screen.queryByText("Privacy Notice");
      expect(component).toHaveClass("rvt-footer-base");
      expect(component).toContainElement(privacy);
    });
  });

  describe("BaseFooter without privacy", () => {
    it("should render without error", async () => {
      render(<BaseFooter data-testid="test" />);

      const component = await screen.findByTestId("test");
      const privacy = screen.queryByText("Privacy Notice");
      expect(component).toHaveClass("rvt-footer-base");
      expect(component).not.toContainElement(privacy);
    });
  });

  describe("BaseFooter light variant", () => {
    it("should render without error", async () => {
      render(<BaseFooter data-testid="test" variant="light" />);

      const component = await screen.findByTestId("test");
      expect(component).toHaveClass("rvt-footer-base");
      expect(component).toHaveClass("rvt-footer-base--light");
    });
  });
});
