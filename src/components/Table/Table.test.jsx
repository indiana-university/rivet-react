/*
Copyright (C) 2018 The Trustees of Indiana University
SPDX-License-Identifier: BSD-3-Clause
*/
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import React from "react";

import Table from "./Table";
import { TestUtils } from "../util/TestUtils.js";

describe("<Table />", () => {
  const TableContent = () => (
    <>
      <caption id="responsive-table" className="rvt-sr-only">
        Test table
      </caption>
      <thead>
        <tr>
          <th scope="col">Services</th>
          <th scope="col">Description</th>
          <th scope="col">URL</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">One.IU</th>
          <td>
            One.IU was created to bring a modern app store experience to finding
            what you need at IU. With One.IU, you search for what you want to
            do, and click to launch it.
          </td>
          <td>
            <a href="#">one.iu.edu</a>
          </td>
        </tr>
        <tr>
          <th scope="row">Zoom</th>
          <td>
            Zoom is a web collaboration tool available to all Indiana University
            students, faculty, and staff.
          </td>
          <td>
            <a href="#">zoom.iu.edu</a>
          </td>
        </tr>
        <tr>
          <th scope="row">Canvas</th>
          <td>
            Canvas is a learning management system developed by Instructure,
            Inc.
          </td>
          <td>
            <a href="#">canvas.iu.edu</a>
          </td>
        </tr>
      </tbody>
    </>
  );

  describe("Rendering and text", () => {
    it("should render without error", async () => {
      render(
        <Table data-testid={TestUtils.Table.testId}>
          <TableContent />
        </Table>
      );

      const table = await screen.findByTestId(TestUtils.Table.testId);
      expect(table).toHaveClass("rvt-table");
    });

    it("should render with id", () => {
      render(
        <Table id="the_id">
          <TableContent />
        </Table>
      );
      expect(screen.getByRole("table", {})).toHaveAttribute("id", "the_id");
    });

    it("should render a striped table", async () => {
      render(
        <Table variant="stripes" data-testid={TestUtils.Table.testId}>
          <TableContent />
        </Table>
      );

      const table = await screen.findByTestId(TestUtils.Table.testId);
      expect(table).toHaveClass("rvt-table-stripes");
    });

    it("should render a plain table", async () => {
      render(
        <Table variant="plain" data-testid={TestUtils.Table.testId}>
          <TableContent />
        </Table>
      );

      const table = await screen.findByTestId(TestUtils.Table.testId);
      expect(table).toHaveClass("rvt-table-plain");
    });

    it("should render a table with cell borders", async () => {
      render(
        <Table cells data-testid={TestUtils.Table.testId}>
          <TableContent />
        </Table>
      );

      const table = await screen.findByTestId(TestUtils.Table.testId);
      expect(table).toHaveClass("rvt-table-cells");
    });

    it("should render a compact table", async () => {
      render(
        <Table compact data-testid={TestUtils.Table.testId}>
          <TableContent />
        </Table>
      );

      const table = await screen.findByTestId(TestUtils.Table.testId);
      expect(table).toHaveClass("rvt-table-compact");
    });
  });
});
