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
  plain = false,
  variant = "unordered",
  ...attrs
}) => {
  const classes = classNames(
    inline ? `${classPrefix}-inline` : classPrefix,
    plain ? `${classPrefix}-plain` : "",
    variant === "description" && `${classPrefix}-description`,
    className,
  );
  const ListTag = getElement(variant);
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
  /**
   * The variant type which determines how the list is styled.
   * 'plain' is deprecated, use property `plain`
   * */
  variant: PropTypes.oneOf(["description", "plain", "ordered", "unordered"]),
};

function getElement(value) {
  switch (value) {
    case "ordered":
      return "ol";
    case "description":
      return "dl";
    default:
      return "ul";
  }
}

export default Rivet.rivetize(List);
