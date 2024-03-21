/*
Copyright (C) 2018 The Trustees of Indiana University
SPDX-License-Identifier: BSD-3-Clause
*/
import classNames from "classnames";
import * as PropTypes from "prop-types";
import * as React from "react";
import * as Rivet from "../../util/Rivet";
import { TestUtils } from "../../util/TestUtils";
import Step from "./Step"

const testIds = TestUtils.StepIndicator
/**
 * Show the user's position in and progress through a multi-step process
 */
const StepIndicator = ({
  children,
  className,
  testMode = false,
  variant,
  ...attrs
}) => {
  const classNameArr = [
    "rvt-steps",
    variant === "vertical" ? "rvt-steps--vertical" : "",
    className
  ]
  return (
    <ol
      className={classNames(classNameArr)}
      {...(testMode && { "data-testid": testIds.container })}
      {...attrs}
    >
      {children}
    </ol>
  )
};

StepIndicator.displayName = "StepIndicator";
StepIndicator.propTypes = {
  /** [Developer] Adds data-testId attributes for component testing */
  testMode: PropTypes.bool,
  /** The variant type which determines how the step indicator is styled */
  variant: PropTypes.oneOf(["horizontal", "vertical"])
};

StepIndicator.Step = Step;

export default Rivet.rivetize(StepIndicator);
