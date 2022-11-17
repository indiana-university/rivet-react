/*
Copyright (C) 2018 The Trustees of Indiana University
SPDX-License-Identifier: BSD-3-Clause
*/
import * as React from "react";
import Dropdown from "./Dropdown";
import DropdownGroup from "./DropdownGroup";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";

const user = userEvent.setup();

describe("<DropdownGroup />", () => {
  describe("Rendering and styling", () => {
    it("should render without throwing an error", async () => {
      render(
        <Dropdown>
          <a href="#0">Hello, world!</a>
          <DropdownGroup>
            <a href="#0">Grouped link</a>
          </DropdownGroup>
        </Dropdown>
      );
      await user.click(screen.getByRole("button"));
      expect(screen.getByRole("group")).toBeVisible();
    });
    it("should pass attributes through", async () => {
      const testId = "the_id";
      render(
        <Dropdown>
          <a href="#0">Hello, world!</a>
          <DropdownGroup id={testId}>
            <a href="#0">Grouped link</a>
          </DropdownGroup>
        </Dropdown>
      );
      await user.click(screen.getByRole("button"));
      expect(screen.getByRole("group")).toHaveAttribute("id", testId);
    });
    it("should add aria label when a label is provided", async () => {
      const testLabel = "Links";
      render(
        <Dropdown>
          <a href="#0">Hello, world!</a>
          <DropdownGroup label={testLabel}>
            <a href="#0">Grouped link</a>
          </DropdownGroup>
        </Dropdown>
      );
      await user.click(screen.getByRole("button"));
      expect(screen.getByText(testLabel)).toBeVisible();
      expect(screen.getByRole("group")).toHaveAttribute(
        "aria-label",
        testLabel
      );
    });
  });
});
