/*
Copyright (C) 2018 The Trustees of Indiana University
SPDX-License-Identifier: BSD-3-Clause
*/
import classNames from "classnames";
import * as React from "react";
import * as Rivet from "../../util/Rivet";
import { useDeprecation } from "../../util/DeprecationUtils";
import { TestUtils } from "../../util/TestUtils";

/**
 * @deprecated StatGroup is deprecated and will be removed in a future release.
 */
const StatGroup = ({ children, className, testMode = false, ...attrs }) => {
  useDeprecation("StatGroup");
  const classNameArr = ["rvt-stat-group", className];
  return (
    <div
      className={classNames(classNameArr)}
      {...(testMode && { "data-testid": TestUtils.Stat.group })}
      {...attrs}
    >
      {children}
    </div>
  );
};

StatGroup.displayName = "StatGroup";
StatGroup.propTypes = {};

export default Rivet.rivetize(StatGroup);
