/*
Copyright (C) 2018 The Trustees of Indiana University
SPDX-License-Identifier: BSD-3-Clause
*/
import * as React from "react";
import PropTypes from "prop-types";
import * as Rivet from "../util/Rivet.jsx";
import classNames from "classnames";

const LoadingIndicator = ({
  id = Rivet.shortuid(),
  size = "xs",
  className,
  ...attrs
}) => {
  const classes = classNames("rvt-loader", `rvt-loader--${size}`, className);

  return (
    <div
      className={classes}
      role="loadingIndicator"
      aria-label="Content loading"
      id={id}
      {...attrs}
    />
  );
};

LoadingIndicator.displayName = "LoadingIndicator";
LoadingIndicator.propTypes = {
  /** A unique identifier for the alert */
  id: PropTypes.string,
  /** The size of the loading indicator */
  size: PropTypes.oneOf(["xxs", "xs", "sm", "md", "lg", "xl", "xxl"]),
};

export default Rivet.rivetize(LoadingIndicator);
