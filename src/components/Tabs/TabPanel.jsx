/*
Copyright (C) 2018 The Trustees of Indiana University
SPDX-License-Identifier: BSD-3-Clause
*/
import classNames from "classnames";
import * as PropTypes from "prop-types";
import * as React from "react";
import * as Rivet from "../util/Rivet";
import { TestUtils } from "../util/TestUtils";

const TabPanel = ({
  children,
  className,
  controlId,
  testMode = false,
  title,
  ...attrs
}) => {
  const classNameArr = [
    "rvt-tabs__panel",
    className
  ]
  return (
    <div
      aria-labelledby={controlId}
      className={classNames(classNameArr)}
      role="tabpanel"
      tabIndex="0"
      {...(testMode && { "data-testid": `${TestUtils.Tabs.panel}-${controlId}` })}
      { ...attrs }
      >
      {children}
    </div>
  )
};

TabPanel.displayName = "TabPanel";
TabPanel.propTypes = {
  /** [Developer] Adds data-testId attributes for component testing */
  testMode: PropTypes.bool,
  /** The panel's title in the list of tabs*/
  title: PropTypes.string.isRequired
};

export default Rivet.rivetize(TabPanel);
