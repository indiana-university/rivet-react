/*
Copyright (C) 2018 The Trustees of Indiana University
SPDX-License-Identifier: BSD-3-Clause
*/
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import user from "@testing-library/user-event";
import React from "react";

import DismissableAlert from "./DismissibleAlert";

describe("<DismissableAlert />", () => {
  const titleText = "A Test Component";

  describe("Dismiss behavior", () => {
    it("should include dismiss button", () => {
      const customDismissBehavior = jest.fn();
      render(
        <DismissableAlert
          title={titleText}
          variant="info"
          onDismiss={customDismissBehavior}
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
});
