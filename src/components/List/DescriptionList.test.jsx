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

    it("should render a child array as list items", async () => {
      const items = ["term 1", "description 1", "term 2", "description 2"];
      render(<DescriptionList data-testid={testId}>{items}</DescriptionList>);
      const list = await screen.findByTestId(testId);
      expect(list.children[0].nodeName).toBe("DT");
      expect(list.children[0].innerHTML).toBe(items[0]);
      expect(list.children[1].nodeName).toBe("DD");
      expect(list.children[1].innerHTML).toBe(items[1]);
      expect(list.children[2].nodeName).toBe("DT");
      expect(list.children[2].innerHTML).toBe(items[2]);
      expect(list.children[3].nodeName).toBe("DD");
      expect(list.children[3].innerHTML).toBe(items[3]);
    });
  });
});
