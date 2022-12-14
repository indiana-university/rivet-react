/*
Copyright (C) 2018 The Trustees of Indiana University
SPDX-License-Identifier: BSD-3-Clause
*/
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import React from "react";
import Select from "./Select";

describe("<Select />", () => {
  describe("Rendering", () => {
    it("should render without throwing an error", () => {
      render(<Select label="Label" />);
      expect(screen.getByRole("combobox", {})).toBeVisible();
    });
    it("should render the label", () => {
      render(<Select label="Label" />);
      expect(screen.getByText("Label", {})).toBeVisible();
    });
    it("should associate the label with the Select", () => {
      render(<Select id="the_id" label="Label" />);
      expect(screen.getByRole("combobox", {})).toHaveAttribute("id", "the_id");
      expect(screen.getByText("Label", {})).toHaveProperty("htmlFor", "the_id");
    });
    it("should apply custom class", () => {
      render(<Select className="my-class" label="Label" />);
      expect(screen.getByRole("combobox", {}).closest("div")).toHaveClass(
        "my-class"
      );
    });
    it("should render its options", () => {
      render(
        <Select label="label">
          <option>foo</option>
          <option>bar</option>
          <option>baz</option>
        </Select>
      );
      expect(screen.getByRole("combobox", {}).children.length).toBe(3);
    });
    it("should apply sr-only class to label", () => {
      render(<Select label="Label" labelVisibility="screen-reader-only" />);
      expect(screen.getByText("Label", {})).toHaveClass("rvt-sr-only");
    });
  });
  describe("Notes", () => {
    it("should apply the note", () => {
      render(<Select note="Note" label="Label" />);
      expect(screen.getByText("Note", {})).toBeVisible();
      expect(screen.getByText("Note", {})).toContainHTML("small");
    });
    it("should associate the input with the note", () => {
      render(<Select id="the_id" note="Note" label="Label" />);
      expect(screen.getByRole("combobox", {})).toHaveAttribute(
        "aria-describedby",
        "the_id_note"
      );
    });
    it("should not apply the aria-describedby attribute when no note is present", () => {
      render(<Select id="the_id" label="Label" />);
      expect(screen.getByRole("combobox", {})).toHaveAttribute(
        "aria-describedby",
        ""
      );
    });
  });
  describe("Inline Alerts", () => {
    it("info style", () => {
      render(<Select variant="info" label="Label" note="🤔" />);
      expect(screen.getByRole("combobox", {})).toHaveClass(
        "rvt-validation-info"
      );
      expect(screen.getByRole("combobox", {})).toHaveAttribute(
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
      render(<Select variant="success" label="Label" note="😎" />);
      expect(screen.getByRole("combobox", {})).toHaveClass(
        "rvt-validation-success"
      );
      expect(screen.getByRole("combobox", {})).toHaveAttribute(
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
      render(<Select variant="warning" label="Label" note="🤨" />);
      expect(screen.getByRole("combobox", {})).toHaveClass(
        "rvt-validation-warning"
      );
      expect(screen.getByRole("combobox", {})).toHaveAttribute(
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
      render(<Select variant="danger" label="Label" note="😬" />);
      expect(screen.getByRole("combobox", {})).toHaveClass(
        "rvt-validation-danger"
      );
      expect(screen.getByRole("combobox", {})).toHaveAttribute(
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
