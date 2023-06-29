/*
Copyright (C) 2018 The Trustees of Indiana University
SPDX-License-Identifier: BSD-3-Clause
*/
import classNames from "classnames";
import * as React from "react";
import { TestUtils } from "../util/TestUtils.js";

const DialogControls = ({ children, className }) => (
  <div
    className={classNames(["rvt-dialog__controls", className])}
    data-testid={TestUtils.Dialog.dialogControlsTestId}
  >
    {children}
  </div>
);

DialogControls.displayName = "DialogControls";
DialogControls.propTypes = {};

export default DialogControls;
