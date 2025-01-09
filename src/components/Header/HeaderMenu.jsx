/*
Copyright (C) 2018 The Trustees of Indiana University
SPDX-License-Identifier: BSD-3-Clause
*/
import * as React from "react";
import PropTypes from "prop-types";

import * as Rivet from "../util/Rivet";
import "rivet-icons/dist/chevron-down.js";
import BaseHeaderMenu from "./BaseHeaderMenu.jsx";
import BaseHeaderMenuItem from "./BaseHeaderMenuItem.jsx";

const HeaderMenu = ({ children, href = "#", ...attrs }) => {
  const renderChild = (child, index) => {
    return (
      <BaseHeaderMenuItem key={"header-submenu-item-" + index}>
        {child.type === "a"
          ? React.cloneElement(child, {
              className: "rvt-header-menu__submenu-link",
            })
          : child}
      </BaseHeaderMenuItem>
    );
  };

  return (
    <BaseHeaderMenu menuUrl={href} {...attrs}>
      {React.Children.map(children, renderChild)}
    </BaseHeaderMenu>
  );
};

HeaderMenu.displayName = "Header.Menu";
HeaderMenu.propTypes = {
  /** Indicates item is current page if link with url */
  current: PropTypes.bool,
  /** The link that the corresponding anchor redirects to */
  href: PropTypes.string,
  /** The label of the menu */
  label: PropTypes.string.isRequired,
  /** Attributes added to the menu's toggle button  */
  menuButtonAttrs: PropTypes.object,
  /** [Developer] Adds data-testId attributes for component testing */
  testMode: PropTypes.bool,
};

export default Rivet.rivetize(HeaderMenu);
