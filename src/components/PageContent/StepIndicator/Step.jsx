/*
Copyright (C) 2018 The Trustees of Indiana University
SPDX-License-Identifier: BSD-3-Clause
*/
import classNames from "classnames";
import * as PropTypes from "prop-types";
import * as React from "react";
import * as Rivet from "../../util/Rivet";
import { TestUtils } from "../../util/TestUtils";

const testIds = TestUtils.StepIndicator;
const Step = ({
  children,
  className,
  current,
  indicator,
  label,
  onClick,
  testMode = false,
  url,
  variant,
  ...attrs
}) => {
  const classNameArr = ["rvt-steps__item", className];
  const indicatorClassNameArr = [
    "rvt-steps__indicator",
    variant ? `rvt-steps__indicator--${variant}` : "",
  ];
  return (
    <li
      className={classNames(classNameArr)}
      {...(testMode && { "data-testid": testIds.step })}
      {...attrs}
    >
      <a
        className="rvt-steps__item-content"
        {...(current && { "aria-current": "step" })}
        {...(onClick && { onClick })}
        href={url}
      >
        <span className="rvt-steps__label">{label}</span>
        <span className={classNames(indicatorClassNameArr)}>{indicator}</span>
      </a>
    </li>
  );
};

Step.displayName = "Step";
Step.propTypes = {
  /** Indicates item is current step */
  current: PropTypes.bool,
  /** An brief indicator for the step */
  indicator: PropTypes.oneOfType([PropTypes.string, PropTypes.element])
    .isRequired,
  /** Label for the step */
  label: PropTypes.node.isRequired,
  /** A click event for step */
  onClick: PropTypes.func,
  /** [Developer] Adds data-testId attributes for component testing */
  testMode: PropTypes.bool,
  /** A url for step */
  url: PropTypes.string.isRequired,
  /** The variant type which determines how the step is styled */
  variant: PropTypes.oneOf(["success", "warning", "danger"]),
};

export default Rivet.rivetize(Step);
