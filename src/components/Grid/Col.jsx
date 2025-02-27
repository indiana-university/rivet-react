/*
Copyright (C) 2018 The Trustees of Indiana University
SPDX-License-Identifier: BSD-3-Clause
*/
import classNames from "classnames";
import * as PropTypes from "prop-types";
import * as React from "react";
import * as Rivet from "../util/Rivet";
import { Edges, Sizes } from "../util/RivetizeConstants.js";

const columnClassPrefix = "rvt-cols";
const validInts = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
const validStrs = validInts.map((i) => i + "");
const validWidths = [...validInts, ...validStrs];
const validBreaks = ["sm", "md", "lg", "xl"];

/**
 * Generate the a spacing class for this row
 * @see https://rivet.uits.iu.edu/components/grid?example=columns
 */
const shiftClass = (breakpoint, columnWidth, classPrefix) => {
  let className = classPrefix;
  className += `-${columnWidth}`;
  if (breakpoint) {
    className += `-${breakpoint}`;
  }
  return className;
};
const getColumnClass = (columnWidth, breakpoint) => {
  if (!(columnWidth || breakpoint)) {
    return columnClassPrefix;
  }
  if (typeof columnWidth === "string") {
    const b = validBreaks.includes(breakpoint) ? breakpoint : "";
    return columnClass(b, columnWidth);
  }
  if (breakpoint) {
    return columnClass(breakpoint, "");
  }
  return processColumns(columnWidth);
};
const processColumns = (columnWidth) => {
  return (
    validBreaks
      .filter((e) => columnWidth.hasOwnProperty(e))
      // breakpoints can only have one specified size
      .map((e) => columnClass(e, columnWidth[e]))
      .join(" ")
  );
};

const columnClass = (breakpoint, width) => {
  const b = validBreaks.includes(breakpoint) ? `-${breakpoint}` : "";
  const c = validWidths.includes(width) ? `-${width}` : "";
  const cb = c + b;
  return columnClassPrefix + cb;
};

/**
 * Use the col component inside a Container to create a grid row
 */
const Col = ({
  className,
  children,
  component = "div",
  id = Rivet.shortuid(),
  columnWidth,
  breakpoint,
  shiftBreakpoint,
  shiftType,
  shiftWidth,
  last = false,
  ...attrs
}) => {
  const Component = component;
  return (
    <Component
      id={id}
      className={classNames(
        `${getColumnClass(columnWidth, breakpoint)}`,
        shiftType &&
          shiftClass(
            shiftBreakpoint,
            shiftWidth,
            `${columnClassPrefix}-${shiftType}`,
          ),
        last && `${columnClassPrefix}--last`,
        className,
      )}
      {...attrs}
    >
      {children}
    </Component>
  );
};

Col.displayName = "Col";

Col.propTypes = {
  /** A unique identifier for the column */
  id: PropTypes.string,
  breakpoint: PropTypes.oneOf(validBreaks),
  /** Width of the column (1-12) */
  // prettier-ignore
  columnWidth: PropTypes.oneOfType([PropTypes.oneOf(validWidths), PropTypes.object]),
  /** Sets the containing element. The default container element is a 'div' */
  component: PropTypes.string,
  /** Place the column at the end of the row. Should only be used on last column in the row */
  last: PropTypes.bool,
  /** Indicates the breakpoint at which to pull or push the column. Requires shiftBreakpoint to be set. */
  shiftBreakpoint: PropTypes.oneOf(["sm", "md", "lg", "xl"]),
  /** Indicates the number of columns to push or pull the column. Requires shiftType to be set. */
  // prettier-ignore
  shiftWidth: PropTypes.oneOf(validWidths),
  /** Can be set to pull or push the column to the left or right, respectively */
  shiftType: PropTypes.oneOf(["pull", "push"]),
};

export default Rivet.rivetize(Col);
