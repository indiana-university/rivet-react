/*
Copyright (C) 2018 The Trustees of Indiana University
SPDX-License-Identifier: BSD-3-Clause
*/
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import React from "react";

import Switch from "./Switch";
import { TestUtils } from "../../util/TestUtils.js";

const testIds = TestUtils.Switch
const customClassName = "custom-style"
const label = "Test Label"
const onClick = jest.fn();

describe("<Switch />", () => {
  describe("Rendering", () => {
    it("should render without throwing an error", () => {
      render(
        <Switch
          className={customClassName}
          label={label}
          testMode
        />
      );
      checkRenderContainer("false")
    });
  });
  describe("Actions", () => {
    it("If starting off clicking the switch should turn it on", () => {
      render(
        <Switch
          className={customClassName}
          label={label}
          testMode
        />
      );
      checkRenderContainer("false")
      const element = screen.getByTestId(testIds.container);
      fireEvent.click(element)
      checkRenderContainer("true")
    });
    it("If starting on clicking the switch should turn it off", () => {
      render(
        <Switch
          className={customClassName}
          label={label}
          startOn
          testMode
        />
      );
      checkRenderContainer("true")
      const element = screen.getByTestId(testIds.container);
      fireEvent.click(element)
      checkRenderContainer("false")
    });
    it("If an onClick is set then clicking the switch should trigger it", () => {
      render(
        <Switch
          className={customClassName}
          label={label}
          onClick={onClick}
          testMode
        />
      );
      const element = screen.getByTestId(testIds.container);
      fireEvent.click(element)      
      expect(onClick).toHaveBeenCalled();
    });
  });
  describe("Options", () => {
    it("if startOn is not set, should start with switch off", () => {
      render(
        <Switch
          className={customClassName}
          label={label}
          testMode
        />
      );
      checkRenderContainer("false")
    });
    it("if startOn is set, should start with switch on", () => {
      render(
        <Switch
          className={customClassName}
          label={label}
          startOn
          testMode
        />
      );
      checkRenderContainer("true")
    });
    it("if variant is set to small, should render as small ", () => {
      render(
        <Switch
          className={customClassName}
          label={label}
          testMode
          variant="small"
        />
      );
      checkRenderContainer("false")
      const element = screen.getByTestId(testIds.container);
      expect(element).toHaveClass("rvt-switch--small");
    });
    it("if variant is set to danger, should render as danger ", () => {
      render(
        <Switch
          className={customClassName}
          label={label}
          testMode
          variant="danger"
        />
      );
      checkRenderContainer("false")
      const element = screen.getByTestId(testIds.container);
      expect(element).toHaveClass("rvt-switch--danger");
    });
    it("if variant is set to multiple, should render as multiple ", () => {
      render(
        <Switch
          className={customClassName}
          label={label}
          testMode
          variant={["danger", "small"]}
        />
      );
      checkRenderContainer("false")
      const element = screen.getByTestId(testIds.container);
      expect(element).toHaveClass("rvt-switch--danger");
      expect(element).toHaveClass("rvt-switch--small");
    });
    it("if variant is set to invalid value, should render as normal ", () => {
      render(
        <Switch
          className={customClassName}
          label={label}
          testMode
          variant="invalid"
        />
      );
      checkRenderContainer("false")
      const element = screen.getByTestId(testIds.container);
      expect(element).not.toHaveClass("rvt-switch--danger");
      expect(element).not.toHaveClass("rvt-switch--small");
    });
    it("default is test mode off", () => {
      render(
        <Switch
          className={customClassName}
          label={label}
        />
      );
      const element = screen.queryByTestId(testIds.container);
      expect(element).not.toBeInTheDocument();
    });
  });
});

const checkRenderContainer = (value) => {
  const element = screen.getByTestId(testIds.container);
  expect(element.nodeName).toBe("BUTTON")
  expect(element).toBeVisible();
  expect(element).toHaveClass("rvt-switch");
  expect(element).toHaveClass(customClassName);
  expect(element).toHaveAttribute("role", "switch");
  expect(element).toHaveAttribute("aria-label", label);
  expect(element).toHaveAttribute("aria-checked", value);
  expect(element.children.length).toBe(2)
}