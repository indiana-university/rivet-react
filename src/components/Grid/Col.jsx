/*
Copyright (C) 2018 The Trustees of Indiana University
SPDX-License-Identifier: BSD-3-Clause
*/
import classNames from "classnames";
import * as PropTypes from "prop-types";
import * as React from "react";
import * as Rivet from "../util/Rivet";

const columnClassPrefix = "rvt-cols";

/**
 * Generate the a spacing class for this row
 * @see https://rivet.uits.iu.edu/components/grid?example=columns
 */
const columnClass = (
  breakpoint,
  columnWidth,
  classPrefix = columnClassPrefix
) => {
  let className = classPrefix;
  if (columnWidth) {
    className += `-${columnWidth}`;
  }
  if (breakpoint) {
    className += `-${breakpoint}`;
  }
  return className;
};

/**
 * Use the col component inside a Container to create a grid row
 */
const Col = ({
  className,
  children,
  id = Rivet.shortuid(),
  columnWidth,
  breakpoint,
  shiftBreakpoint,
  shiftType,
  shiftWidth,
  last = false,
  ...attrs
}) => (
  <div
    id={id}
    className={classNames(
      `${columnClass(breakpoint, columnWidth)}`,
      shiftType &&
        columnClass(
          shiftBreakpoint,
          shiftWidth,
          `${columnClassPrefix}-${shiftType}`
        ),
      last && `${columnClassPrefix}--last`,
      className
    )}
    {...attrs}
  >
    {children}
  </div>
);

Col.displayName = "Col";
const validInts = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
const validStrs = validInts.map((i) => i + "");
const validWidths = [...validInts, ...validStrs];
Col.propTypes = {
  /** A unique identifier for the column */
  id: PropTypes.string,
  breakpoint: PropTypes.oneOf(["sm", "md", "lg", "xl"]),
  /** Width of the column (1-12) */
  // prettier-ignore
  columnWidth: PropTypes.oneOf(validWidths),
  /** Indicates the breakpoint at which to pull or push the column. Requires shiftBreakpoint to be set. */
  shiftBreakpoint: PropTypes.oneOf(["sm", "md", "lg", "xl"]),
  /** Indicates the number of columns to push or pull the column. Requires shiftBreakpoint to be set. */
  // prettier-ignore
  shiftWidth: PropTypes.oneOf(validWidths),
  /** Can be set to pull or push the column to the left or right, respectively */
  shiftType: PropTypes.oneOf(["pull", "push"]),
};

export default Rivet.rivetize(Col);
