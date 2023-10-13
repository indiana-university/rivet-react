/*
Copyright (C) 2018 The Trustees of Indiana University
SPDX-License-Identifier: BSD-3-Clause
*/
import classNames from "classnames";
import * as PropTypes from "prop-types";
import * as React from "react";
import * as Rivet from "../../util/Rivet";
import { TestUtils } from "../../util/TestUtils";

const Stat = ({
  children,
  className,
  image,
  testMode = false,
  value,
  ...attrs
}) => {
  const classNameArr = [
    "rvt-stat",
    className
  ]
  return (
    <a
      className={classNames(classNameArr)}
      {...(testMode && { "data-testid": TestUtils.Stat.container })}
      {...attrs}
    >
      <div className="rvt-stat__content rvt-flow">
        {image && <StatImage testMode={testMode}>{image}</StatImage>}
        <div
          className="rvt-stat__number"
          {...(testMode && { "data-testid": TestUtils.Stat.number })}
        >
          {value}
        </div>
        <div
          className="rvt-stat__description"
          {...(testMode && { "data-testid": TestUtils.Stat.description })}
        >
          {children}
        </div>
      </div>
    </a>
  )
};

Stat.displayName = "Stat";
Stat.propTypes = {
  /** A unique identifier for the badge */
  image: PropTypes.element,
  /** [Developer] Adds data-testId attributes for component testing */
  testMode: PropTypes.bool,
  /** The stat value */
  value: PropTypes.string.isRequired
};

const StatImage = ({ children, testMode = false}) => {
  return (
    <div
      className="rvt-stat__image"
      {...(testMode && { "data-testid": TestUtils.Stat.image })}
    >
      {children}
    </div>
  )
}

export default Rivet.rivetize(Stat);
