/*
Copyright (C) 2018 The Trustees of Indiana University
SPDX-License-Identifier: BSD-3-Clause
*/
import * as React from "react";

import { Button } from "../Button";
import Dialog from "./Dialog.jsx";
import { DialogControls } from "./index.jsx";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("<DialogControls />", () => {
  it("renders without error", () => {
    render(
      <Dialog isOpen={true} title="foo">
        <DialogControls>
          <Button>The text</Button>
        </DialogControls>
      </Dialog>
    );

    const dialogControls = screen.getByTestId("dialogControls", {});
    expect(dialogControls).toBeVisible();
    expect(dialogControls).toHaveClass("rvt-dialog__controls");
    expect(screen.getByRole("button", { name: /The text/ })).toBeVisible();
  });
});
