/*
Copyright (C) 2018 The Trustees of Indiana University
SPDX-License-Identifier: BSD-3-Clause
*/
import classNames from "classnames";
import * as React from "react";
import * as PropTypes from "prop-types";

import * as Rivet from "../util/Rivet";

const classPrefix = "rvt-list";

/**
 * Use the list component to group and organize lists of content.
 */
const List = ({
  inline = false,
  id = Rivet.shortuid(),
  className,
  children,
  variant = "unordered",
  ...attrs
}) => {
  const classes = classNames(
    inline ? `${classPrefix}-inline` : classPrefix,
    variant === "plain" && `${classPrefix}-plain`,
    className
  );
  const ListTag = variant === "ordered" ? "ol" : "ul";
  return (
    <ListTag id={id} className={classes} {...attrs}>
      {children}
    </ListTag>
  );
};

List.displayName = "List";
List.propTypes = {
  /** A unique identifier for the list */
  id: PropTypes.string,
  /** Whether to render the list inline */
  inline: PropTypes.bool,
  /** The variant type which determines how the list is styled */
  variant: PropTypes.oneOf(["plain", "ordered", "unordered"]),
};

export default Rivet.rivetize(List);
