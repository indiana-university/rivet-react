/*
Copyright (C) 2018 The Trustees of Indiana University
SPDX-License-Identifier: BSD-3-Clause
*/
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import user from "@testing-library/user-event";
import React from "react";
import File from "./File";

describe("<File />", () => {
  const testId = "test-id";
  describe("Rendering and text", () => {
    it("should render successfully", async () => {
      render(<File data-testid={testId} />);

      const file = await screen.findByTestId(testId);

      expect(file.nodeName).toBe("INPUT");
      expect(file.type).toBe("file");

      const parent = file.parentNode;
      expect(parent.nodeName).toBe("DIV");
      expect(parent).toHaveClass("rvt-file");

      const children = parent.children;

      expect(children.length).toBe(3);

      // the input tag is children[0]

      const label = children[1];
      expect(label.nodeName).toBe("LABEL");
      expect(label).toHaveClass("rvt-button");
      expect(label.children.length).toBe(2);
      expect(label.children[0].nodeName).toBe("SPAN");
      expect(label.children[0].innerHTML).toBe("Upload a file");
      expect(label.children[1].nodeName).toBe("svg");

      const description = children[2];
      expect(description.nodeName).toBe("DIV");
      expect(description).toHaveClass("rvt-file__preview");
      expect(description.innerHTML).toBe("No file selected");
    });
  });
});
