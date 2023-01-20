/*
Copyright (C) 2018 The Trustees of Indiana University
SPDX-License-Identifier: BSD-3-Clause
*/
import * as React from "react";

import * as Rivet from "../util/Rivet";
import Icon, { IconNames } from "../util/RivetIcons";
import { renderHeaderUnorderedList } from "../util/childUtils";

const HeaderNavigation = ({ children, ...attrs }) => {
  const [isNavMenuOpen, setIsNavMenuOpen] = React.useState(false);

  return (
    <div data-rvt-disclosure="menu">
      <button
        aria-expanded={isNavMenuOpen}
        className="rvt-global-toggle rvt-global-toggle--menu rvt-hide-lg-up"
        onClick={() => setIsNavMenuOpen(!isNavMenuOpen)}
      >
        <span className="rvt-sr-only">Menu</span>
        <Icon name={IconNames.TOGGLE_OPEN} />
        <Icon name={IconNames.TOGGLE_CLOSE} />
      </button>
      <nav
        aria-label="Main"
        className="rvt-header-menu"
        hidden={!isNavMenuOpen}
      >
        {React.Children.map(children, renderHeaderUnorderedList)}
      </nav>
    </div>
  );
};

HeaderNavigation.displayName = "Header.Navigation";

export default Rivet.rivetize(HeaderNavigation);
