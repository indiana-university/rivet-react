/*
Copyright (C) 2018 The Trustees of Indiana University
SPDX-License-Identifier: BSD-3-Clause
*/
import classNames from "classnames";
import * as React from "react";
import * as PropTypes from "prop-types";

import * as Rivet from "../util/Rivet";

/**
 * Use the pagination component to allow users to move between multiple pages of content.
 */
const Pagination = ({
  id = Rivet.shortuid(),
  className,
  children,
  ...attrs
}) => {
  return (
    <nav role="navigation">
      <ul
        className={classNames("rvt-pagination", className)}
        id={id} 
        {...attrs}
    >
        {children}
      </ul>
    </nav>
  );
};
Pagination.displayName = "Pagination";
Pagination.propTypes = {
  /** A unique identifier */
  id: PropTypes.string,
};

export default  Rivet.rivetize(Pagination);
