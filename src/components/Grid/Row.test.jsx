/*
Copyright (C) 2018 The Trustees of Indiana University
SPDX-License-Identifier: BSD-3-Clause
*/
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import React from "react";
import Row from "./Row";

describe("<Row />", () => {
  describe("Rendering and text", () => {
    const content = "content";

    it("should render without throwing an error", async () => {
      render(<Row>{content}</Row>);

      const row = await screen.findByText(content);
      expect(row).toHaveClass("rvt-row");
    });

    it("should render the loose version of the row class if spacing=loose", async () => {
      render(<Row spacing="loose">{content}</Row>);

      const row = await screen.findByText(content);
      expect(row).toHaveClass(`rvt-row--loose`);
    });

    it("should render the tight version of the row class if spacing=tight", async () => {
      render(<Row spacing="tight">{content}</Row>);

      const row = await screen.findByText(content);
      expect(row).toHaveClass(`rvt-row--tight`);
    });
  });
});
