/*
Copyright (C) 2018 The Trustees of Indiana University
SPDX-License-Identifier: BSD-3-Clause
*/
import classNames from "classnames";
import * as React from "react";
import { TestUtils } from "../util/TestUtils.js";

const DialogBody = ({ children, className, ...attrs }) => (
  <div
    className={classNames(["rvt-dialog__body", className])}
    data-testid={TestUtils.Dialog.dialogBodyTestId}
    {...attrs}
  >
    {children}
  </div>
);

DialogBody.displayName = "DialogBody";
DialogBody.propTypes = {};

export default DialogBody;
