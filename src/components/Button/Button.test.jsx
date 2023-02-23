/*
Copyright (C) 2018 The Trustees of Indiana University
SPDX-License-Identifier: BSD-3-Clause
*/
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import user from "@testing-library/user-event";
import React from "react";
import Button from "./Button";

describe("<Button />", () => {
  describe("Rendering and text", () => {
    it("should render without throwing an error", () => {
      render(<Button />);
      expect(screen.getByRole("button", {})).toHaveClass("rvt-button");
    });
    it("should take an id", () => {
      const testId = "the_id";
      render(<Button id={testId} />);
      expect(screen.getByRole("button", {})).toHaveProperty("id", testId);
    });
    it("should show text", () => {
      render(<Button>The text</Button>);
      expect(screen.getByRole("button", { name: /The text/ })).toBeVisible();
    });
    it("should accept disabled attribute", () => {
      render(<Button disabled />);
      expect(screen.getByRole("button", {})).toBeDisabled();
    });
  });

  describe("Styling", () => {
    // Primary variations
    it("should have success style", () => {
      render(<Button variant="success" />);
      expect(screen.getByRole("button", {})).toHaveClass("rvt-button--success");
    });
    it("should have danger style", () => {
      render(<Button variant="danger" />);
      expect(screen.getByRole("button", {})).toHaveClass("rvt-button--danger");
    });
    it("should have plain style", () => {
      render(<Button variant="plain" />);
      expect(screen.getByRole("button", {})).toHaveClass("rvt-button--plain");
    });

    // Secondary variations
    it("should have secondary role", () => {
      render(<Button modifier="secondary" />);
      expect(screen.getByRole("button", {})).toHaveClass(
        "rvt-button--secondary"
      );
    });
    it("should have secondary success style", () => {
      render(<Button modifier="secondary" variant="success" />);
      expect(screen.getByRole("button", {})).toHaveClass(
        "rvt-button--success-secondary"
      );
    });
    it("should have secondary danger style", () => {
      render(<Button modifier="secondary" variant="danger" />);
      expect(screen.getByRole("button", {})).toHaveClass(
        "rvt-button--danger-secondary"
      );
    });
    it("should have secondary plain style", () => {
      render(<Button modifier="secondary" variant="plain" />);
      expect(screen.getByRole("button", {})).toHaveClass(
        "rvt-button--plain-secondary"
      );
    });

    // Size variations
    it("should have small size", () => {
      render(<Button size="small" />);
      expect(screen.getByRole("button", {})).toHaveClass("rvt-button--small");
    });
    it("should have normal size by default", () => {
      render(<Button />);
      expect(screen.getByRole("button", {})).toHaveClass("rvt-button");
    });

    // All together now!
    it("should have a secondary small size", () => {
      render(<Button size="small" modifier="secondary" variant="plain" />);
      expect(screen.getByRole("button", {})).toHaveClass(
        "rvt-button--plain-secondary"
      );
      expect(screen.getByRole("button", {})).toHaveClass("rvt-button--small");
    });

    it("should apply appropriate navigation classes", () => {
      render(<Button variant="navigation" />);
      const button = screen.getByRole("button", {});
      expect(button).not.toHaveClass("rvt-button");
      expect(button).toHaveClass("rvt-dropdown__toggle");
    });

    it("should apply loading styling", () => {
      render(<Button loading>Update settings</Button>);
      const button = screen.getByRole("button", {});
      expect(button).toBeVisible();
      expect(button).toBeDisabled();
      expect(button.attributes.getNamedItem("aria-busy").value).toBeTruthy();
      expect(button).toHaveClass("rvt-button");
      expect(button).toHaveClass("rvt-button--loading");
      expect(screen.getByRole("buttonContent", {})).toHaveClass(
        "rvt-button__content"
      );
      expect(screen.getByRole("loadingIndicator", {})).toBeVisible();
    });

    it("should not apply loading styling when loading not true", () => {
      render(<Button>Update settings</Button>);
      expect(
        screen.getByRole("button", { name: /Update settings/ }).innerHTML
      ).not.toContain("span");
    });
  });

  describe("Events", () => {
    it("should fire click delegate", async () => {
      let fired = false;
      const delegate = () => (fired = true);
      render(<Button onClick={delegate} />);

      await user.click(screen.getByRole("button", {}));

      expect(fired).toEqual(true);
    });
  });
});
