/*
Copyright (C) 2018 The Trustees of Indiana University
SPDX-License-Identifier: BSD-3-Clause
*/
import * as React from "react";
import Icon, { IconNames } from "../util/RivetIcons";
import HeaderMenu from "./HeaderMenu";
import { findFirstChildOfType } from "../util/childUtils";
// import { hasChildOfType } from "../util/childUtils";
// import HeaderMenu from "./HeaderMenu";

// const renderChild = (child, isDrawer) => {
//   if (isDrawer && hasChildOfType(child, HeaderMenu.displayName)) {
//     return (
//       <li className="has-children">
//         {React.cloneElement(child, { className: "rvt-drawer-menu" })}
//       </li>
//     );
//   } else {
//     return <li>{child}</li>;
//   }
// };

const HeaderNavigation = ({ children, className, ...attrs }) => {
  const [isHeaderMenuOpen, setIsHeaderMenuOpen] = React.useState(false);

  // const isDrawer = !!className && className.includes("rvt-drawer-navigation");
  // return <>{React.Children.map(children, (c) => renderChild(c, isDrawer))}</>;

  const drawer = findFirstChildOfType(children, HeaderMenu.displayName);

  return (
    /* Header controls  */
    <div className="rvt-header-global__controls">
      {/* Navigation */}
      <div data-rvt-disclosure="menu" data-rvt-close-click-outside>
        {/* Menu button that shows/hides navigation on smaller screens */}
        <button
          aria-expanded={isHeaderMenuOpen}
          className="rvt-global-toggle rvt-global-toggle--menu rvt-hide-lg-up"
          data-rvt-disclosure-toggle="menu"
          onClick={() => setIsHeaderMenuOpen(!isHeaderMenuOpen)}
        >
          <span className="rvt-sr-only">Menu</span>
          <Icon
            name={
              isHeaderMenuOpen ? IconNames.TOGGLE_OPEN : IconNames.TOGGLE_CLOSE
            }
          />
        </button>
        {/* Navigation links */}
        <nav
          aria-label="Main"
          className="rvt-header-menu"
          data-rvt-disclosure-target="menu"
          hidden={!isHeaderMenuOpen}
        >
          {drawer}
        </nav>
      </div>
    </div>
  );
};
HeaderNavigation.displayName = "HeaderNavigation";

export default HeaderNavigation;
