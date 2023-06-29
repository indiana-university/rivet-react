/*
Copyright (C) 2018 The Trustees of Indiana University
SPDX-License-Identifier: BSD-3-Clause
*/
import classNames from "classnames";
import * as PropTypes from "prop-types";
import * as React from "react";
import * as Rivet from "../util/Rivet";

const rowClass = "rvt-row";

/**
 * Generate a spacing class for this row
 * @see https://rivet.uits.iu.edu/components/grid?example=columns
 */
const rowSpacing = (spacing) => (spacing ? `${rowClass}--${spacing}` : "");

/**
 * Use the row component inside a Container to create a grid row
 */
const Row = ({
  className,
  children,
  id = Rivet.shortuid(),
  spacing,
  ...attrs
}) => (
  <div
    id={id}
    className={classNames(rowClass, rowSpacing(spacing), className)}
    {...attrs}
  >
    {children}
  </div>
);

Row.displayName = "Row";
Row.propTypes = {
  /** A unique identifier for the row */
  id: PropTypes.string,
  /** Spacing modifier for the Row. Loose for extra spacing between rows, tight for less spacing between rows */
  spacing: PropTypes.oneOf(["loose", "tight"]),
};

export default Rivet.rivetize(Row);
