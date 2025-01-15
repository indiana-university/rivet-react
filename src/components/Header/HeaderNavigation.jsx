/*
Copyright (C) 2018 The Trustees of Indiana University
SPDX-License-Identifier: BSD-3-Clause
*/
import * as React from "react";

import * as Rivet from "../util/Rivet";
import "rivet-icons/dist/chevron-up.js";
import "rivet-icons/dist/chevron-down.js";
import { renderHeaderNavUnorderedList } from "./childUtils";
import PropTypes from "prop-types";
import BaseHeaderNavigation from "./BaseHeaderNavigation.jsx";

const HeaderNavigation = ({ avatar, children, ...attrs }) => {
  return (
    <BaseHeaderNavigation {...attrs}>
      {React.Children.map(children, renderHeaderNavUnorderedList)}
      {avatar}
    </BaseHeaderNavigation>
  );
};

HeaderNavigation.displayName = "Header.Navigation";

HeaderNavigation.propTypes = {
  /** The Avatar component */
  avatar: PropTypes.element,
  /** [Developer] Adds data-testId attributes for component testing */
  testMode: PropTypes.bool,
};

export default Rivet.rivetize(HeaderNavigation);
