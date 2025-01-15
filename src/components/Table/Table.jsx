/*
Copyright (C) 2018 The Trustees of Indiana University
SPDX-License-Identifier: BSD-3-Clause
*/
import classNames from "classnames";
import * as React from "react";
import * as PropTypes from "prop-types";

import * as Rivet from "../util/Rivet";

const classPrefix = "rvt-table";

/**
 * Use the table component to display a table
 */
const Table = ({
  cells,
  children,
  className,
  compact,
  id = Rivet.shortuid(),
  variant,
  ...attrs
}) => {
  const classes = classNames(
    variant ? `${classPrefix}-${variant}` : classPrefix,
    compact && `${classPrefix}-compact`,
    cells && `${classPrefix}-cells`,
    className
  );
  return (
    <table id={id} className={classes} {...attrs}>
      {children}
    </table>
  );
};

Table.displayName = "Table";
Table.propTypes = {
  /** A unique identifier for the alert */
  id: PropTypes.string,
  /** Whether to outline each cell in the table */
  cells: PropTypes.bool,
  /** Whether to minimize padding in the table for a compact look */
  compact: PropTypes.bool,
  /** The variant type which determines how the table is styled */
  variant: PropTypes.oneOf(["plain", "stripes"]),
};

export default Rivet.rivetize(Table);
