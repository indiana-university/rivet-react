/*
Copyright (C) 2018 The Trustees of Indiana University
SPDX-License-Identifier: BSD-3-Clause
*/
import classNames from "classnames";
import * as PropTypes from "prop-types";
import * as React from "react";
import * as Rivet from "../../util/Rivet";
import { useDeprecation } from "../../util/DeprecationUtils";
import { TestUtils } from "../../util/TestUtils";

/**
 * @deprecated CallToAction is deprecated and will be removed in a future release.
 */
const CallToAction = ({
  children,
  className,
  testMode = false,
  variant = "link",
  ...attrs
}) => {
  useDeprecation("CallToAction");
  const classNameArr = [
    "rvt-cta",
    variant === "button" ? "rvt-cta--button" : "",
    className,
  ];
  return (
    <a
      className={classNames(classNameArr)}
      {...(testMode && { "data-testid": TestUtils.CallToAction.link })}
      {...attrs}
    >
      {children}
    </a>
  );
};

CallToAction.displayName = "CallToAction";
CallToAction.propTypes = {
  /** [Developer] Adds data-testId attributes for component testing */
  testMode: PropTypes.bool,
  /* The variant determines the style of the call to action link */
  variant: PropTypes.oneOf(["button", "link"]),
};

export default Rivet.rivetize(CallToAction);
