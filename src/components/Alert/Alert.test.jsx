/*
Copyright (C) 2018 The Trustees of Indiana University
SPDX-License-Identifier: BSD-3-Clause
*/
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import user from "@testing-library/user-event";
import React from "react";

import Alert from "./Alert";

describe("<Alert />", () => {
  const testId = "the_id";
  const titleText = "A Test Component";

  describe("Rendering and text", () => {
    it("should render without throwing an error", () => {
      render(<Alert title={titleText} variant="info" />);
      expect(screen.getByRole("alert")).toHaveTextContent(titleText);
    });
    it("should include alert text", () => {
      const bodyText = "This is the message.";
      render(
        <Alert title={titleText} variant="info">
          {bodyText}
        </Alert>
      );
      expect(screen.getByRole("alert")).toHaveTextContent(bodyText);
    });
    it("should apply the id", () => {
      const cut = render(
        <Alert title={titleText} variant="info" id={testId} />
      );
      expect(screen.getByRole("alert")).toHaveProperty("id", testId);
    });
  });

  describe("Styling", () => {
    it("should specify style: error", () => {
      render(<Alert title={titleText} variant="danger" />);
      expect(
        screen
          .getByRole("alert")
          .firstChild.classList.contains("rvt-alert--danger")
      );
    });
    it("should specify style: info", () => {
      render(<Alert title={titleText} variant="info" />);
      expect(
        screen
          .getByRole("alert")
          .firstChild.classList.contains("rvt-alert--info")
      );
    });
    it("should specify style: warning", () => {
      render(<Alert title={titleText} variant="warning" />);
      expect(
        screen
          .getByRole("alert")
          .firstChild.classList.contains("rvt-alert--warning")
      );
    });
    it("should specify style: success", () => {
      render(<Alert title={titleText} variant="success" />);
      expect(
        screen
          .getByRole("alert")
          .firstChild.classList.contains("rvt-alert--success")
      );
    });
    it("should apply custom style", () => {
      render(
        <Alert title={titleText} variant="info" className="rvt-alert--custom" />
      );
      expect(
        screen
          .getByRole("alert")
          .firstChild.classList.contains("rvt-alert--custom")
      );
    });
  });

  describe("Visbility", () => {
    it("is visible by default", () => {
      render(<Alert title={titleText} variant="success" />);
      expect(screen.getByRole("alert")).toBeVisible();
    });
    it("can be made visible", () => {
      render(<Alert title={titleText} variant="success" isOpen />);
      expect(screen.getByRole("alert")).toBeVisible();
    });
    it("can be made invisible", () => {
      render(<Alert title={titleText} variant="success" isOpen={false} />);
      expect(screen.queryAllByRole("alert")).toHaveLength(0);
    });
  });

  describe("Dismiss behavior", () => {
    it("should include dismiss button when dismissible", () => {
      render(<Alert title={titleText} variant="info" onDismiss={() => {}} />);
      expect(screen.getByRole("button")).toBeVisible();
    });
    it("should fire dismiss delegate", async () => {
      let fired = false;
      const delegate = () => (fired = true);
      render(<Alert title={titleText} variant="info" onDismiss={delegate} />);
      await user.click(screen.getByRole("button"));

      expect(fired).toEqual(true);
    });
    it("the alert should remain visible when dismiss button clicked", async () => {
      render(<Alert title={titleText} variant="info" onDismiss={() => {}} />);
      expect(screen.getByRole("alert")).toBeVisible();
      await user.click(screen.getByRole("button"));

      expect(screen.getByRole("alert")).toBeVisible();
    });
  });

  describe("Options", () => {
    it("if title set, should have label by id", () => {
      render(
        <Alert id={testId} title={titleText}  />
      );
      
      expect(screen.getByRole("alert")).toHaveAttribute("aria-labelledby", `${testId}-title`);
    });
    it("if no title set, should not have label by id", () => {
      render(
        <Alert id={testId} />
      );
      
      expect(screen.getByRole("alert")).not.toHaveAttribute("aria-labelledby");
    });
  });
});
