/*
Copyright (C) 2018 The Trustees of Indiana University
SPDX-License-Identifier: BSD-3-Clause
*/
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import React from "react";
import Textarea from "./Textarea";

describe("<Texarea />", () => {
  describe("Rendering", () => {
    it("should render without throwing an error", () => {
      render(<Textarea label="Label" />);
      expect(screen.getByRole("textbox", {})).toBeVisible();
    });
    it("should render the label", () => {
      render(<Textarea id="the_id" label="Label" />);
      expect(screen.getByText("Label", {})).toBeVisible();
    });
    it("should associate the label with the input", () => {
      render(<Textarea id="the_id" label="Label" />);
      expect(screen.getByRole("textbox", {})).toHaveAttribute("id", "the_id");
      expect(screen.getByText("Label", {})).toHaveProperty("htmlFor", "the_id");
    });
    it("should apply custom class", () => {
      render(<Textarea className="my-class" label="Label" />);
      expect(screen.getByRole("textbox", {}).closest("div")).toHaveClass(
        "my-class"
      );
    });
    it("should apply sr-only class to label", () => {
      render(<Textarea label="Label" labelVisibility="screen-reader-only" />);
      expect(screen.getByText("Label", {})).toHaveClass("rvt-sr-only");
    });
  });
  describe("Notes", () => {
    it("should apply the note", () => {
      render(<Textarea note="Note" label="Label" />);
      expect(screen.getByText("Note", {})).toBeVisible();
      expect(screen.getByText("Note", {})).toContainHTML("small");
    });
    it("should associate the input with the note", () => {
      render(<Textarea id="the_id" note="Note" label="Label" />);
      expect(screen.getByRole("textbox", {})).toHaveAttribute(
        "aria-describedby",
        "the_id_note"
      );
    });
    it("should not apply the aria-describedby attribute when no note is present", () => {
      render(<Textarea id="the_id" label="Label" />);
      expect(screen.getByRole("textbox", {})).toHaveAttribute(
        "aria-describedby",
        ""
      );
    });
  });
  describe("Inline Alerts", () => {
    it("info style", () => {
      render(<Textarea variant="info" label="Label" note="🤔" />);
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
      render(<Textarea variant="success" label="Label" note="😎" />);
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
      render(<Textarea variant="warning" label="Label" note="🤨" />);
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
      render(<Textarea variant="danger" label="Label" note="😬" />);
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
