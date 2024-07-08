/*
Copyright (C) 2018 The Trustees of Indiana University
SPDX-License-Identifier: BSD-3-Clause
*/
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import user from "@testing-library/user-event";
import React from "react";

import DismissableAlert from "./DismissibleAlert";
import { TestUtils } from "../util/TestUtils.js";

const testIds = TestUtils.Alert;

describe("<DismissableAlert />", () => {
  const titleText = "A Test Component";
  const testDismissBehavior = jest.fn();
  describe("Dismiss behavior", () => {
    it("should include dismiss button", () => {
      render(
        <DismissableAlert
          title={titleText}
          variant="info"
          onDismiss={testDismissBehavior}
        />
      );
      expect(screen.getByRole("button")).toBeVisible();
    });
    it("should fire dismiss delegate", async () => {
      let fired = false;
      const delegate = () => (fired = true);
      render(
        <DismissableAlert
          title={titleText}
          variant="info"
          onDismiss={delegate}
        />
      );
      await user.click(screen.getByRole("button"));

      expect(fired).toEqual(true);
    });
    it("the alert should no longer remain visible when dismiss button clicked", async () => {
      render(
        <DismissableAlert
          title={titleText}
          variant="info"
          onDismiss={() => {}}
        />
      );
      expect(screen.getByRole("alert")).toBeVisible();
      await user.click(screen.getByRole("button"));

      expect(screen.queryByRole("alert")).toBeNull;
    });
  });
  describe("Options", () => {
    it("if an Id is set it is rendered on alert", () => {
      const testId = "alert-test";
      render(
        <DismissableAlert
          id={testId}
          onDismiss={testDismissBehavior}
          testMode
          title={titleText}
          variant="info"
        />
      );
      const element = screen.queryByTestId(testIds.container);
      expect(element).toHaveAttribute("id", testId);
    });
    it("if no on dismiss event is given, alert closes on dismiss", async () => {
      render(<DismissableAlert testMode title={titleText} variant="info" />);
      const element = screen.queryByTestId(testIds.container);
      expect(element).toBeVisible();
      const dismissElement = screen.queryByTestId(testIds.dismiss);
      await user.click(dismissElement);

      expect(element).not.toBeVisible();
    });
    it("default is test mode off", () => {
      render(
        <DismissableAlert
          onDismiss={testDismissBehavior}
          title={titleText}
          variant="info"
        />
      );
      const element = screen.queryByTestId(testIds.container);
      expect(element).not.toBeInTheDocument();
    });
  });
});
