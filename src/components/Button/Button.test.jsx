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
      const { container } = render(<Button />);
      expect(container.querySelectorAll("button.rvt-button")).toHaveLength(1);
    });
    it("should take an id", () => {
      const { container } = render(<Button id="the_id" />);
      expect(container.querySelectorAll("button#the_id")).toHaveLength(1);
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
      const { container } = render(<Button variant="success" />);
      expect(
        container
          .querySelector("button")
          .classList.contains("rvt-button--success")
      ).toBe(true);
    });
    it("should have danger style", () => {
      const { container } = render(<Button variant="danger" />);
      expect(
        container
          .querySelector("button")
          .classList.contains("rvt-button--danger")
      ).toBe(true);
    });
    it("should have plain style", () => {
      const { container } = render(<Button variant="plain" />);
      expect(
        container
          .querySelector("button")
          .classList.contains("rvt-button--plain")
      ).toBe(true);
    });

    // Secondary variations
    it("should have secondary role", () => {
      const { container } = render(<Button modifier="secondary" />);
      expect(
        container
          .querySelector("button")
          .classList.contains("rvt-button--secondary")
      ).toBe(true);
    });
    it("should have secondary success style", () => {
      const { container } = render(
        <Button modifier="secondary" variant="success" />
      );
      expect(
        container
          .querySelector("button")
          .classList.contains("rvt-button--success-secondary")
      ).toBe(true);
    });
    it("should have secondary danger style", () => {
      const { container } = render(
        <Button modifier="secondary" variant="danger" />
      );
      expect(
        container
          .querySelector("button")
          .classList.contains("rvt-button--danger-secondary")
      ).toBe(true);
    });
    it("should have secondary plain style", () => {
      const { container } = render(
        <Button modifier="secondary" variant="plain" />
      );
      expect(
        container
          .querySelector("button")
          .classList.contains("rvt-button--plain-secondary")
      ).toBe(true);
    });

    // Size variations
    it("should have small size", () => {
      const { container } = render(<Button size="small" />);
      expect(
        container
          .querySelector("button")
          .classList.contains("rvt-button--small")
      ).toBe(true);
    });
    it("should have normal size by default", () => {
      const { container } = render(<Button />);
      expect(
        container
          .querySelector("button")
          .classList.contains("rvt-button--small")
      ).toBe(false);
    });

    // All together now!
    it("should have a secondary small size", () => {
      const { container } = render(
        <Button size="small" modifier="secondary" variant="plain" />
      );
      expect(
        container
          .querySelector("button")
          .classList.contains("rvt-button--plain-secondary")
      ).toBe(true);
      expect(
        container
          .querySelector("button")
          .classList.contains("rvt-button--small")
      ).toBe(true);
    });

    it("should apply appropriate navigation classes", () => {
      const { container } = render(<Button variant="navigation" />);
      expect(
        container.querySelector("button").classList.contains("rvt-button")
      ).toBe(false);
      expect(
        container
          .querySelector("button")
          .classList.contains("rvt-dropdown__toggle")
      ).toBe(true);
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
