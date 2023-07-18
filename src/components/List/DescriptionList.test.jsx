/*
Copyright (C) 2018 The Trustees of Indiana University
SPDX-License-Identifier: BSD-3-Clause
*/
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import React from "react";
import DescriptionList from "./DescriptionList";

describe("<DescriptionList />", () => {
  const testId = "test-id";

  describe("Rendering and text", () => {
    it("should render an description list", async () => {
      render(
        <DescriptionList data-testid={testId}>
          <dt>term 1</dt>
          <dd>description 1</dd>
          <dt>term 2</dt>
          <dd>description 2</dd>
        </DescriptionList>
      );
      const list = await screen.findByTestId(testId);
      expect(list.nodeName).toBe("DL");
    });
  });
});
