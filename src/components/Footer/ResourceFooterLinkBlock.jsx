/*
Copyright (C) 2018 The Trustees of Indiana University
SPDX-License-Identifier: BSD-3-Clause
*/
import classNames from "classnames";
import * as React from "react";
import * as PropTypes from "prop-types";

import * as Rivet from "../util/Rivet";

/**
 * Use the Resource Footer Link Block component to create a section of links for Resource Footer
 */
const ResourceFooterLinkBlock = ({ children, label, ...attrs }) => {
  return (
    <div {...attrs}>
      <h3 className="rvt-footer-resources__heading">{label}</h3>
      <ul className="rvt-footer-resources__list">{asListItems(children)}</ul>
    </div>
  );
};

const asListItems = (children) => {
  return children ? React.Children.map(children, asListItem) : [];
};

const asListItem = (child) => {
  if (
    typeof child === "string" ||
    typeof child === "number" ||
    child.type !== "li"
  ) {
    return <li className="rvt-footer-resources__list-item">{child}</li>;
  }
  const { className = "", ...others } = child.props;
  if (!className.includes("rvt-footer-resources__list-item")) {
    const newProps = {
      className: classNames("rvt-footer-resources__list-item", className),
      ...others,
    };
    return React.cloneElement(child, newProps);
  }
  return child;
};

ResourceFooterLinkBlock.displayName = "ResourceFooterLinkBlock";
ResourceFooterLinkBlock.propTypes = {
  /** The label for the resource block*/
  label: PropTypes.string,
};

export default Rivet.rivetize(ResourceFooterLinkBlock);
