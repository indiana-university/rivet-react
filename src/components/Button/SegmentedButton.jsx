/*
Copyright (C) 2018 The Trustees of Indiana University
SPDX-License-Identifier: BSD-3-Clause
*/
import classNames from "classnames";
import * as PropTypes from "prop-types";
import * as React from "react";
import * as Rivet from "../util/Rivet";
import { TestUtils } from "../util/TestUtils.js";

const SegmentedButton = ({ className, children, fit, ...attrs }) => {
  const classes = classNames(
    {
      "rvt-button-segmented": true,
      "rvt-button-segmented--fitted": fit,
    },
    className
  );
  return (
    <div
      {...attrs}
      role="group"
      className={classes}
      data-testid={TestUtils.SegmentedButton.testId}
    >
      {children}
    </div>
  );
};
SegmentedButton.displayName = "SegmentedButton";
SegmentedButton.propTypes = {
  fit: PropTypes.bool,
};

export default Rivet.rivetize(SegmentedButton);
