/*
Copyright (C) 2018 The Trustees of Indiana University
SPDX-License-Identifier: BSD-3-Clause
*/
import classNames from "classnames";
import * as React from "react";
import * as PropTypes from "prop-types";

import Icon from "../util/RivetIcons";
import * as Rivet from "../util/Rivet";
import { parseRivetMultiListUtility } from "../util/RivetizeAux";

/**
 * Use the Base Footer component at the bottom of all pages
 */
const BaseFooter = ({
  children,
  className,
  copyrightYear,
  openInNewWindow = false,
  privacyUrl,
  size = "sm",
  variant,
  ...attrs
}) => {
  const classes = classNames(
    "rvt-footer-base",
    variant ? `rvt-footer-base--${variant}` : "",
    className,
  );
  const year = !copyrightYear ? new Date().getFullYear() : copyrightYear;
  return (
    <footer className={classes} {...attrs}>
      <div className={parseRivetMultiListUtility(size, SIZES, "rvt-container")}>
        <div className="rvt-footer-base__inner">
          <div className="rvt-footer-base__logo">
            <Icon height="24" name="logo" viewBox="0 0 24 24" width="24" />
          </div>
          <ul
            className={`rvt-footer-base__list ${
              "full" === size ? "rvt-m-lr-sm" : ""
            }`}
          >
            <BaseFooterLink
              openInNewWindow={openInNewWindow}
              url="https://accessibility.iu.edu/assistance/"
            >
              Accessibility
            </BaseFooterLink>
            <BaseFooterLink openInNewWindow={openInNewWindow} url={privacyUrl}>
              Privacy Notice
            </BaseFooterLink>
            <li className="rvt-footer-base__item">
              <a
                className="rvt-footer-base__link"
                href="https://www.iu.edu/copyright/index.html"
                {...(openInNewWindow && { target: "_blank" })}
              >
                Copyright
              </a>{" "}
              © {year} The Trustees of{" "}
              <a
                className="rvt-footer-base__link"
                href="https://www.iu.edu"
                {...(openInNewWindow && { target: "_blank" })}
              >
                Indiana University
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

const BaseFooterLink = ({ children, openInNewWindow, url }) => {
  if (!url) {
    return null;
  }
  return (
    <li className="rvt-footer-base__item">
      <a
        className="rvt-footer-base__link"
        href={url}
        {...(openInNewWindow && { target: "_blank" })}
      >
        {children}
      </a>
    </li>
  );
};

const SIZES = ["sm", "md", "lg", "xl"];

BaseFooter.displayName = "BaseFooter";
BaseFooter.propTypes = {
  /** The year of the page copyright */
  copyrightYear: PropTypes.string,
  /** The url for privacy link, if no provided url link will not display*/
  privacyUrl: PropTypes.string,
  /** The container size for content */
  size: PropTypes.oneOf([...SIZES, "full"]),
  /** The variant type which determines how the footer is styled */
  variant: PropTypes.oneOf(["light"]),
};

export default Rivet.rivetize(BaseFooter);
