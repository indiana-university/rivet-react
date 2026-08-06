/*
Copyright (C) 2018 The Trustees of Indiana University
SPDX-License-Identifier: BSD-3-Clause
*/
import classNames from "classnames";
import * as PropTypes from "prop-types";
import * as React from "react";
import * as Rivet from "../util/Rivet";
import { TestUtils } from "../util/TestUtils";
import SidenavItem from "./SidenavItem";
import SidenavMenu from "./SidenavMenu";
/**
 * @deprecated Sidenav is deprecated and will be removed in a future release.
 */
const Sidenav = ({
  className,
  children,
  id = Rivet.shortuid(),
  label,
  testMode = false,
  ...attrs
}) => {
  React.useEffect(() => {
    console.warn(
      "Sidenav is deprecated and will be removed in a future release.",
    );
  }, []);
  const classNameArr = ["rvt-sidenav", className];
  const labelId = `${id}-sidenav-label`;
  return (
    <nav
      aria-labelledby={labelId}
      className={classNames(classNameArr)}
      {...(testMode && { "data-testid": TestUtils.Sidenav.container })}
      {...attrs}
    >
      <span className="rvt-sidenav__label" id={labelId}>
        {label}
      </span>
      <ul className="rvt-sidenav__list">{children}</ul>
    </nav>
  );
};

Sidenav.displayName = "Sidenav";
Sidenav.propTypes = {
  /** A unique identifier for the component */
  id: PropTypes.string,
  /** The label for the navigation */
  label: PropTypes.node.isRequired,
  /** [Developer] Adds data-testId attributes for component testing */
  testMode: PropTypes.bool,
};

Sidenav.Item = SidenavItem;
Sidenav.Menu = SidenavMenu;

export default Rivet.rivetize(Sidenav);
