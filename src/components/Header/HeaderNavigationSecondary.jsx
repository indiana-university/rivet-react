import React from "react";
import Icon, { IconNames } from "../util/RivetIcons";

const HeaderNavigationSecondary = ({
  width = "xl",
  title,
  href = "#",
  ...attrs
}) => {
  const [isExpanded, setIsExpanded] = React.useState(false);

  return (
    <div className="rvt-header-local">
      <div className={"rvt-container-" + width}>
        <div
          className="rvt-header-local__inner"
          data-rvt-disclosure="local-header-menu"
          data-rvt-close-click-outside
        >
          <a href={href} className="rvt-header-local__title">
            {title}
          </a>
          <button
            aria-expanded={isExpanded}
            className="rvt-global-toggle rvt-global-toggle--menu rvt-hide-lg-up"
            data-rvt-disclosure-toggle="local-header-menu"
            onClick={() => {
              setIsExpanded(!isExpanded);
            }}
          >
            <span className="rvt-sr-only">Toggle local menu</span>
            <Icon name={IconNames.CARET_DOWN} />
          </button>
          <nav
            aria-label="Secondary"
            className="rvt-header-menu"
            data-rvt-disclosure-target="local-header-menu"
            hidden={!isExpanded}
          >
            <ul className="rvt-header-menu__list">
              <li className="rvt-header-menu__item">
                <a className="rvt-header-menu__link" href="#">
                  Section Item One
                </a>
              </li>
              <li className="rvt-header-menu__item">
                <div
                  className="rvt-header-menu__dropdown rvt-dropdown"
                  data-rvt-dropdown="secondary-nav-2"
                >
                  <div className="rvt-header-menu__group">
                    <a className="rvt-header-menu__link" href="#">
                      Section Item Two
                    </a>
                    <button
                      aria-expanded="false"
                      className="rvt-dropdown__toggle rvt-header-menu__toggle"
                      data-rvt-dropdown-toggle="secondary-nav-2"
                    >
                      <span className="rvt-sr-only">Toggle Sub-navigation</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="rvt-global-toggle__open"
                        height="16"
                        viewBox="0 0 16 16"
                        width="16"
                      >
                        <path
                          d="M8,12.46a2,2,0,0,1-1.52-.7L1.24,5.65a1,1,0,1,1,1.52-1.3L8,10.46l5.24-6.11a1,1,0,0,1,1.52,1.3L9.52,11.76A2,2,0,0,1,8,12.46Z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </button>
                  </div>
                  <div
                    className="rvt-header-menu__submenu rvt-dropdown__menu rvt-dropdown__menu--right"
                    data-rvt-dropdown-menu="secondary-nav-2"
                    hidden
                  >
                    <ul className="rvt-header-menu__submenu-list">
                      <li className="rvt-header-menu__submenu-item">
                        <a className="rvt-header-menu__submenu-link" href="#">
                          Sub Item One
                        </a>
                      </li>
                      <li className="rvt-header-menu__submenu-item">
                        <a className="rvt-header-menu__submenu-link" href="#">
                          Sub Item Two
                        </a>
                      </li>
                      <li className="rvt-header-menu__submenu-item">
                        <a className="rvt-header-menu__submenu-link" href="#">
                          Sub Item Three
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};
