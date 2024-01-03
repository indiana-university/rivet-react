/*
Copyright (C) 2018 The Trustees of Indiana University
SPDX-License-Identifier: BSD-3-Clause
*/
import classNames from "classnames";
import * as PropTypes from "prop-types";
import * as React from "react";
import * as Rivet from "../../util/Rivet";
import { TestUtils } from "../../util/TestUtils";

const LinkHubItem = ({
  className,
  children,
  label,
  testMode = false,
  url,
  ...attrs
}) => {
  const classNameArr = [
    "rvt-link-hub__item",
    className
  ]
  return (
    <li
      className={classNames(classNameArr)}
      {...(testMode && { "data-testid": TestUtils.LinkHub.itemContainer })}
      {...attrs}
    >
      <a
        className="rvt-link-hub__link" 
        href={url}
        {...(testMode && { "data-testid": TestUtils.LinkHub.itemLink })}
      >
        <span className="rvt-link-hub__text">{label}</span>
        {children && <span className="rvt-link-hub__description">{children}</span>}
      </a>
    </li>
  )
};

LinkHubItem.displayName = "LinkHubItem";
LinkHubItem.propTypes = {
  /** The label for the item link */
  label: PropTypes.string.isRequired,
  testMode: PropTypes.bool,
  /** The url for the item link */
  url: PropTypes.string.isRequired
};


export default Rivet.rivetize(LinkHubItem);
