import React from "react";
import PropTypes from "prop-types";

import * as Rivet from "../util/Rivet";
import Icon, { IconNames } from "../util/RivetIcons";
import { renderHeaderUnorderedList } from "../util/childUtils";

const HeaderNavigationSecondary = ({
  width = "xl",
  title,
  href = "#",
  children,
  ...attrs
}) => {
  const [isExpanded, setIsExpanded] = React.useState(false);

  return (
    <div className="rvt-header-local">
      <div className={"rvt-container-" + width}>
        <div className="rvt-header-local__inner">
          <a href={href} className="rvt-header-local__title">
            {title}
          </a>
          <button
            aria-expanded={isExpanded}
            className="rvt-global-toggle rvt-global-toggle--menu rvt-hide-lg-up"
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
            hidden={!isExpanded}
          >
            {React.Children.map(children, renderHeaderUnorderedList)}
          </nav>
        </div>
      </div>
    </div>
  );
};

HeaderNavigationSecondary.displayName = "Header.NavigationSecondary";
HeaderNavigationSecondary.propTypes = {
  /** Optional prop to constrain the width of all content in the header */
  width: PropTypes.oneOf([
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
  /** The title of the anchor */
  title: PropTypes.string.isRequired,
  /** The URL that the anchor will redirect to */
  href: PropTypes.string,
};

export default Rivet.rivetize(HeaderNavigationSecondary);
