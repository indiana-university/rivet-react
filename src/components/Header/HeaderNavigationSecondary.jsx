/*
Copyright (C) 2018 The Trustees of Indiana University
SPDX-License-Identifier: BSD-3-Clause
*/
import React from "react";
import PropTypes from "prop-types";

import * as Rivet from "../util/Rivet";
import "rivet-icons/dist/chevron-down.js";
import { renderHeaderNavUnorderedList } from "./childUtils";
import BaseHeaderNavigationSecondary from "./BaseHeaderNavigationSecondary.jsx";

const HeaderNavigationSecondary = ({ href = "#", children, ...attrs }) => {
  return (
    <BaseHeaderNavigationSecondary titleUrl={href} {...attrs}>
      {React.Children.map(children, renderHeaderNavUnorderedList)}
    </BaseHeaderNavigationSecondary>
  );
};

HeaderNavigationSecondary.displayName = "Header.NavigationSecondary";
HeaderNavigationSecondary.propTypes = {
  /** The URL that the anchor will redirect to */
  href: PropTypes.string,
  /** Optional prop to constrain the width of all content in the header */
  navWidth: PropTypes.oneOf([
    "xxs",
    "xs",
    "sm",
    "md",
    "lg",
    "xl",
    "xxl",
    "3-xl",
    "4-xl",
  ]),
  /** [Developer] Adds data-testId attributes for component testing */
  testMode: PropTypes.bool,
  /** The title of the anchor */
  title: PropTypes.string.isRequired,
};

export default Rivet.rivetize(HeaderNavigationSecondary);
