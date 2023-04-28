/*
Copyright (C) 2018 The Trustees of Indiana University
SPDX-License-Identifier: BSD-3-Clause
*/
import classNames from "classnames";
import * as React from "react";

const DialogControls = ({ children, className }) => (
  <div
    className={classNames(["rvt-dialog__controls", className])}
    data-testid="dialogControls"
  >
    {children}
  </div>
);

DialogControls.displayName = "DialogControls";
DialogControls.propTypes = {};

export default DialogControls;
