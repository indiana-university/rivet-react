/*
Copyright (C) 2018 The Trustees of Indiana University
SPDX-License-Identifier: BSD-3-Clause
*/
import classNames from "classnames";
import * as React from "react";
import * as Rivet from "../../util/Rivet";
import { TestUtils } from "../../util/TestUtils";


const StatGroup = ({
  children,
  className,
  testMode = false,
  ...attrs
}) => {
  const classNameArr = [
    "rvt-stat-group",
    className
  ]
  return (
    <div
      className={classNames(classNameArr)}
      {...(testMode && { "data-testid": TestUtils.Stat.group })}
      {...attrs}
    >
      {children}
    </div>
  )
};

StatGroup.displayName = "StatGroup";
StatGroup.propTypes = {
};

export default Rivet.rivetize(StatGroup);
