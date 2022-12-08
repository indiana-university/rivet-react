/*
Copyright (C) 2018 The Trustees of Indiana University
SPDX-License-Identifier: BSD-3-Clause
*/
import * as React from "react";
import { hasChildOfType } from "../util/childUtils";

const renderChild = (
  child
  // , isDrawer
) => {
  // if (
  // isDrawer &&
  // hasChildOfType(child, HeaderMenu.displayName)
  // ) {
  //   return (
  //     <li className="has-children">
  //       {React.cloneElement(child, { className: "rvt-drawer-menu" })}
  //     </li>
  //   );
  // } else {
  return (
    <li className="rvt-header-menu__item">
      {React.cloneElement(child, { className: "rvt-header-menu__link" })}
    </li>
  );
  // }
};

const HeaderMenu = ({ children, ...attrs }) => {
  return (
    <ul className="rvt-header-menu__list">
      {React.Children.map(children, renderChild)}
      {/* Navigation link without dropdown */}
      {/*<li className="rvt-header-menu__item">*/}
      {/*  <a className="rvt-header-menu__link" href="#">*/}
      {/*    Nav Item One*/}
      {/*  </a>*/}
      {/*</li>*/}
      {/*/!* Navigation link marked as the current page *!/*/}
      {/*<li className="rvt-header-menu__item rvt-header-menu__item--current">*/}
      {/*  <a className="rvt-header-menu__link" href="#" aria-current="page">*/}
      {/*    Nav Item Two*/}
      {/*  </a>*/}
      {/*</li>*/}
      {/*/!* Navigation link with dropdown *!/*/}
      {/*<li className="rvt-header-menu__item">*/}
      {/*  <div*/}
      {/*    className="rvt-header-menu__dropdown rvt-dropdown"*/}
      {/*    data-rvt-dropdown="primary-nav-1"*/}
      {/*  >*/}
      {/*    <div className="rvt-header-menu__group">*/}
      {/*      /!* Link that appears in header *!/*/}
      {/*      <a className="rvt-header-menu__link" href="#">*/}
      {/*        Nav Item Three*/}
      {/*      </a>*/}
      {/*      /!* Button that shows/hides dropdown links *!/*/}
      {/*      <button*/}
      {/*        aria-expanded="false"*/}
      {/*        className="rvt-dropdown__toggle rvt-header-menu__toggle"*/}
      {/*        data-rvt-dropdown-toggle="primary-nav-1"*/}
      {/*      >*/}
      {/*        <span className="rvt-sr-only">Toggle Sub-navigation</span>*/}
      {/*        <svg*/}
      {/*          xmlns="http://www.w3.org/2000/svg"*/}
      {/*          className="rvt-global-toggle__open"*/}
      {/*          height="16"*/}
      {/*          viewBox="0 0 16 16"*/}
      {/*          width="16"*/}
      {/*        >*/}
      {/*          <path*/}
      {/*            d="M8,12.46a2,2,0,0,1-1.52-.7L1.24,5.65a1,1,0,1,1,1.52-1.3L8,10.46l5.24-6.11a1,1,0,0,1,1.52,1.3L9.52,11.76A2,2,0,0,1,8,12.46Z"*/}
      {/*            fill="currentColor"*/}
      {/*          ></path>*/}
      {/*        </svg>*/}
      {/*      </button>*/}
      {/*    </div>*/}
      {/*    /!* Dropdown menu *!/*/}
      {/*    <div*/}
      {/*      className="rvt-header-menu__submenu rvt-dropdown__menu rvt-dropdown__menu--right"*/}
      {/*      data-rvt-dropdown-menu="primary-nav-1"*/}
      {/*      hidden*/}
      {/*    >*/}
      {/*      <ul className="rvt-header-menu__submenu-list">*/}
      {/*        /!* Dropdown links *!/*/}
      {/*        <li className="rvt-header-menu__submenu-item">*/}
      {/*          <a className="rvt-header-menu__submenu-link" href="#">*/}
      {/*            Sub Item One*/}
      {/*          </a>*/}
      {/*        </li>*/}
      {/*        <li className="rvt-header-menu__submenu-item">*/}
      {/*          <a className="rvt-header-menu__submenu-link" href="#">*/}
      {/*            Sub Item Two*/}
      {/*          </a>*/}
      {/*        </li>*/}
      {/*        <li className="rvt-header-menu__submenu-item">*/}
      {/*          <a className="rvt-header-menu__submenu-link" href="#">*/}
      {/*            Sub Item Three*/}
      {/*          </a>*/}
      {/*        </li>*/}
      {/*      </ul>*/}
      {/*    </div>*/}
      {/*  </div>*/}
      {/*</li>*/}
    </ul>
  );
};

HeaderMenu.displayName = "Drawer";

export default HeaderMenu;
