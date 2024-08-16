/*
Copyright (C) 2018 The Trustees of Indiana University
SPDX-License-Identifier: BSD-3-Clause
*/
import classNames from "classnames";
import * as PropTypes from "prop-types";
import * as React from "react";
import * as Rivet from "../util/Rivet";
import { TestUtils } from "../util/TestUtils";
import SubnavItem from "./SubnavItem";

/**
 * Provide additional navigation outside the main header or sidenav
 */
const Subnav = ({ children, className, label, testMode = false, ...attrs }) => {
  const classNameArr = ["rvt-subnav", className];
  return (
    <nav
      aria-label={label}
      className={classNames(classNameArr)}
      {...(testMode && { "data-testid": TestUtils.Subnav.container })}
      {...attrs}
    >
      <ul className="rvt-subnav__list">{children}</ul>
    </nav>
  );
};

Subnav.displayName = "Subnav";
Subnav.propTypes = {
  /** An unseen label for the menu to help with accessibility */
  label: PropTypes.string.isRequired,
  /** [Developer] Adds data-testId attributes for component testing */
  testMode: PropTypes.bool,
};

Subnav.Item = SubnavItem;

export default Rivet.rivetize(Subnav);
