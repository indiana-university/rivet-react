/*
Copyright (C) 2018 The Trustees of Indiana University
SPDX-License-Identifier: BSD-3-Clause
*/
import classNames from "classnames";
import * as React from "react";
import * as PropTypes from "prop-types";
import * as Rivet from "../util/Rivet";

import { default as BaseFooter } from "./BaseFooter";

/**
 * Add an IU-branded footer to your website or application
 */
const StandardFooter = ({ children, ...attrs }) => {
  return (
    <>
      {children}
      <BaseFooter {...attrs} />
    </>
  );
};

StandardFooter.displayName = "StandardFooter";
StandardFooter.propTypes = {
  /** Additional content to be placed above the footer */
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  /** The url for privay link, if no provided url link will not display */
  privacyUrl: PropTypes.string,
  /** The container size for content */
  size: PropTypes.oneOf(["sm", "md", "lg", "xl"]),
  /** The variant type which determines how the footer is styled */
  variant: PropTypes.oneOf(["light"]),
};

export default Rivet.rivetize(StandardFooter);
