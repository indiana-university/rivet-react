/*
Copyright (C) 2018 The Trustees of Indiana University
SPDX-License-Identifier: BSD-3-Clause
*/
import classNames from "classnames";
import * as React from "react";
import * as PropTypes from "prop-types";

import * as Rivet from "../util/Rivet";

/**
 * Use the Resource Footer Text Block component to create a section of text for the Resource Footer
 */
const ResourceFooterTextBlock = ({ children, label, ...attrs }) => {
  return (
    <div {...attrs}>
      <h3 className="rvt-footer-resources__heading">{label}</h3>
      <div className="rvt-footer-resources__text-block">{children}</div>
    </div>
  );
};

ResourceFooterTextBlock.displayName = "ResourceFooterTextBlock";
ResourceFooterTextBlock.propTypes = {
  /** The label for the resource block*/
  label: PropTypes.string,
};

export default Rivet.rivetize(ResourceFooterTextBlock);
