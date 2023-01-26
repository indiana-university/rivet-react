/*
Copyright (C) 2018 The Trustees of Indiana University
SPDX-License-Identifier: BSD-3-Clause
*/
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import React from "react";

import Checkbox from "./Checkbox";

describe("<Checkbox />", () => {
  const label = "label",
    testId = "test-id";
  describe("Rendering and text", () => {
    it("should render a checkbox", async () => {
      render(<Checkbox data-testid={testId} label={label} />);
      const input = await screen.findByTestId(testId);
      expect(input.nodeName).toBe("INPUT");
      expect(input.type).toBe("checkbox");
    });

    it("should have a parent with the correct class", async () => {
      render(<Checkbox data-testid={testId} label={label} />);
      const input = await screen.findByTestId(testId);
      const parent = input.parentNode;
      expect(parent).toHaveClass("rvt-checkbox");
      expect(parent).not.toHaveClass("rvt-checkbox--sr-only-label");
    });

    it("should render a label linked to the checkbox", async () => {
      const id = "id";
      render(<Checkbox id={id} data-testid={testId} label={label} />);
      const input = await screen.findByTestId(testId);
      expect(input.id).toBe(id);
      const labelElement = await screen.findByText(label);
      expect(labelElement.nodeName).toBe("LABEL");
      expect(labelElement.attributes.getNamedItem("for").value).toBe(id);
    });

    it("hides the label if labelVisibility is false", async () => {
      render(
        <Checkbox labelVisibility={false} data-testid={testId} label={label} />
      );
      const input = await screen.findByTestId(testId);
      const parent = input.parentNode;
      expect(parent).toHaveClass("rvt-checkbox");
      expect(parent).toHaveClass("rvt-checkbox--sr-only-label");
    });

    it("renders a description if one is provided", async () => {
      const id = "id",
        description = "description";
      const descriptionId = `${id}-description`;
      render(
        <Checkbox
          id={id}
          data-testid={testId}
          label={label}
          description={description}
        />
      );
      const input = await screen.findByTestId(testId);
      const parent = input.parentNode;
      expect(parent.attributes.getNamedItem("aria-describedby").value).toBe(
        descriptionId
      );

      const descriptionElement = await screen.findByText(description);
      expect(descriptionElement.id).toBe(descriptionId);
      expect(descriptionElement).toHaveClass("rvt-checkbox__description");
    });
  });
});
