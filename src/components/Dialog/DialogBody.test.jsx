/*
Copyright (C) 2018 The Trustees of Indiana University
SPDX-License-Identifier: BSD-3-Clause
*/
import * as React from "react";

import Dialog from "./Dialog.jsx";
import DialogBody from "./DialogBody.jsx";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("<DialogBody />", () => {
  it("renders without error", () => {
    const children = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.";
    render(
      <Dialog isOpen={true} title="foo">
        <DialogBody>{children}</DialogBody>
      </Dialog>
    );

    const dialogBody = screen.getByRole("dialogBody", {});
    expect(dialogBody).toBeVisible();
    expect(dialogBody).toHaveClass("rvt-dialog__body");
    expect(dialogBody.innerHTML).toBe(children);
  });
});
