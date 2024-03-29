/*
Copyright (C) 2018 The Trustees of Indiana University
SPDX-License-Identifier: BSD-3-Clause
*/
import classNames from "classnames";
import * as PropTypes from "prop-types";
import * as React from "react";
import * as Rivet from "../util/Rivet";
import { TestUtils } from "../util/TestUtils";

const testIds = TestUtils.Accordion

const AccordionPanel = ({
  children,
  className,
  controlId,
  testMode = false,
  title,
  ...attrs
}) => {
  const classNameArr = [
    "rvt-accordion__panel",
    className
  ]
  return (
    <div
      aria-labelledby={controlId}
      className={classNames(classNameArr)}
      {...(testMode && { "data-testid": `${testIds.panel}-${controlId}` })}
      { ...attrs }
      >
      {children}
    </div>
  )
};

AccordionPanel.displayName = "AccordionPanel";
AccordionPanel.propTypes = {
  /** [Developer] Adds data-testId attributes for component testing */
  testMode: PropTypes.bool,
  /** The panel's title */
  title: PropTypes.string.isRequired
};

export default Rivet.rivetize(AccordionPanel);
