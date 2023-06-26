/*
Copyright (C) 2018 The Trustees of Indiana University
SPDX-License-Identifier: BSD-3-Clause
*/
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import React from "react";

import RadioButton from "./RadioButton";
import { TestUtils } from "../util/TestUtils.js";

describe("<RadioButton />", () => {
  const label = "label";
  describe("Rendering and text", () => {
    it("should render a checkbox", async () => {
      render(
        <RadioButton data-testid={TestUtils.RadioButton.testId} label={label} />
      );
      const input = await screen.findByTestId(TestUtils.RadioButton.testId);
      expect(input.nodeName).toBe("INPUT");
      expect(input.type).toBe("radio");
    });

    it("should have a parent with the correct class", async () => {
      render(
        <RadioButton data-testid={TestUtils.RadioButton.testId} label={label} />
      );
      const input = await screen.findByTestId(TestUtils.RadioButton.testId);
      const parent = input.parentNode;
      expect(parent).toHaveClass("rvt-radio");
      expect(parent).not.toHaveClass("rvt-radio--sr-only-label");
    });

    it("should render a label linked to the radio", async () => {
      const id = "id";
      render(
        <RadioButton
          id={id}
          data-testid={TestUtils.RadioButton.testId}
          label={label}
        />
      );
      const input = await screen.findByTestId(TestUtils.RadioButton.testId);
      expect(input.id).toBe(id);
      const labelElement = await screen.findByText(label);
      expect(labelElement.nodeName).toBe("LABEL");
      expect(labelElement.attributes.getNamedItem("for").value).toBe(id);
    });

    it("renders a description if one is provided", async () => {
      const id = "id",
        description = "description";
      const descriptionId = `${id}-description`;
      render(
        <RadioButton
          id={id}
          data-testid={TestUtils.RadioButton.testId}
          label={label}
          description={description}
        />
      );
      const input = await screen.findByTestId(TestUtils.RadioButton.testId);
      const parent = input.parentNode;
      expect(parent.attributes.getNamedItem("aria-describedby").value).toBe(
        descriptionId
      );

      const descriptionElement = await screen.findByText(description);
      expect(descriptionElement.id).toBe(descriptionId);
      expect(descriptionElement).toHaveClass("rvt-radio__description");
    });
  });
});
