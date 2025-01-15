/*
Copyright (C) 2018 The Trustees of Indiana University
SPDX-License-Identifier: BSD-3-Clause
*/
import classNames from "classnames";
import * as PropTypes from "prop-types";
import * as React from "react";
import * as Rivet from "../util/Rivet";

const containerClass = "rvt-container";

/**
 * Generate the class for this container based on size
 * @see https://rivet.uits.iu.edu/components/grid?example=containers
 */
const containerStyle = (size) => `${containerClass}-${size}`;

/**
 * Use the container component to wrap content
 */
const Container = ({
  className,
  children,
  id = Rivet.shortuid(),
  size = "md",
  ...attrs
}) => (
  <div
    id={id}
    className={classNames(containerStyle(size), className)}
    {...attrs}
  >
    {children}
  </div>
);

Container.displayName = "Container";
Container.propTypes = {
  /** A unique identifier for the container */
  id: PropTypes.string,
  /** The size (width) of the container https://github.com/indiana-university/rivet-source/blob/2.0.0-master/src/sass/grid/_base.scss#L30 */
  size: PropTypes.oneOf(["sm", "md", "lg", "xl"]),
};

export default Rivet.rivetize(Container);
