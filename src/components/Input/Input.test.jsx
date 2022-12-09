/*
Copyright (C) 2018 The Trustees of Indiana University
SPDX-License-Identifier: BSD-3-Clause
*/
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import React from "react";
import Input from "./Input";

describe("<Input />", () => {
  describe("Rendering", () => {
    it("should render without throwing an error", () => {
      render(<Input label="Label" />);
      expect(screen.getByRole("textbox", {})).toBeVisible();
    });
    it("should have the correct type", () => {
      render(<Input type="text" label="Label" />);
      expect(screen.getByRole("textbox", {})).toHaveAttribute("type", "text");
    });
    it("should render the label", () => {
      render(<Input label="Label" />);
      expect(screen.getByText("Label", {})).toBeVisible();
    });
    it("should associate the label with the input", () => {
      render(<Input id="the_id" label="Label" />);
      expect(screen.getByRole("textbox", {})).toHaveAttribute("id", "the_id");
      expect(screen.getByText("Label", {})).toHaveProperty("htmlFor", "the_id");
    });
    it("should apply custom class", () => {
      render(<Input className="my-class" label="Label" />);
      expect(screen.getByRole("textbox", {}).closest("div")).toHaveClass(
        "my-class"
      );
    });
    it("should apply sr-only class to label", () => {
      render(<Input label="Label" labelVisibility="screen-reader-only" />);
      expect(screen.getByText("Label", {})).toHaveClass("rvt-sr-only");
    });
  });
  describe("Notes", () => {
    it("should apply the note", () => {
      render(<Input note="Note" label="Label" />);
      expect(screen.getByText("Note", {})).toBeVisible();
      expect(screen.getByText("Note", {})).toContainHTML("small");
    });
    it("should associate the input with the note", () => {
      render(<Input id="the_id" note="Note" label="Label" />);
      expect(screen.getByRole("textbox", {})).toHaveAttribute(
        "aria-describedby",
        "the_id_note"
      );
    });
    it("should not apply the aria-describedby attribute when no note is present", () => {
      render(<Input id="the_id" label="Label" />);
      expect(screen.getByRole("textbox", {})).toHaveAttribute(
        "aria-describedby",
        ""
      );
    });
  });
  describe("Inline Alerts", () => {
    it("info style", () => {
      render(<Input variant="info" label="Label" note="🤔" />);
      expect(screen.getByRole("textbox", {})).toHaveClass(
        "rvt-validation-info"
      );
      expect(screen.getByRole("textbox", {})).toHaveAttribute(
        "aria-invalid",
        "false"
      );
      expect(screen.getByText("🤔", {}).closest("div")).toHaveClass(
        "rvt-inline-alert"
      );
      expect(screen.getByText("🤔", {}).closest("div")).toHaveClass(
        "rvt-inline-alert--info"
      );
    });
    it("valid style", () => {
      render(<Input variant="success" label="Label" note="😎" />);
      expect(screen.getByRole("textbox", {})).toHaveClass(
        "rvt-validation-success"
      );
      expect(screen.getByRole("textbox", {})).toHaveAttribute(
        "aria-invalid",
        "false"
      );
      expect(screen.getByText("😎", {}).closest("div")).toHaveClass(
        "rvt-inline-alert"
      );
      expect(screen.getByText("😎", {}).closest("div")).toHaveClass(
        "rvt-inline-alert--success"
      );
    });
    it("warning style", () => {
      render(<Input variant="warning" label="Label" note="🤨" />);
      expect(screen.getByRole("textbox", {})).toHaveClass(
        "rvt-validation-warning"
      );
      expect(screen.getByRole("textbox", {})).toHaveAttribute(
        "aria-invalid",
        "false"
      );
      expect(screen.getByText("🤨", {}).closest("div")).toHaveClass(
        "rvt-inline-alert"
      );
      expect(screen.getByText("🤨", {}).closest("div")).toHaveClass(
        "rvt-inline-alert--warning"
      );
    });
    it("invalid style", () => {
      render(<Input variant="danger" label="Label" note="😬" />);
      expect(screen.getByRole("textbox", {})).toHaveClass(
        "rvt-validation-danger"
      );
      expect(screen.getByRole("textbox", {})).toHaveAttribute(
        "aria-invalid",
        "true"
      );
      expect(screen.getByText("😬", {}).closest("div")).toHaveClass(
        "rvt-inline-alert"
      );
      expect(screen.getByText("😬", {}).closest("div")).toHaveClass(
        "rvt-inline-alert--danger"
      );
    });
  });
});
