/*
Copyright (C) 2018 The Trustees of Indiana University
SPDX-License-Identifier: BSD-3-Clause
*/
import classNames from "classnames";
import * as React from "react";
import * as PropTypes from "prop-types";

import * as Rivet from "../util/Rivet";

/**
 * Use the Base Footer component at the bottom of all pages
 */
const BaseFooter = ({
  children,
  className,
  privacyUrl,
  size = "sm",
  variant,
  ...attrs
}) => {
  const classes = classNames(
    "rvt-footer-base",
    variant ? `rvt-footer-base--${variant}` : "",
    className
  );
  return (
    <footer className={classes} {...attrs}>
      <div className={`rvt-container-${size}`}>
        <div className="rvt-footer-base__inner">
          <div className="rvt-footer-base__logo">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <polygon
                fill="currentColor"
                points="15.3 3.19 15.3 5 16.55 5 16.55 15.07 13.9 15.07 13.9 1.81 15.31 1.81 15.31 0 8.72 0 8.72 1.81 10.12 1.81 10.12 15.07 7.45 15.07 7.45 5 8.7 5 8.7 3.19 2.5 3.19 2.5 5 3.9 5 3.9 16.66 6.18 18.98 10.12 18.98 10.12 21.67 8.72 21.67 8.72 24 15.3 24 15.3 21.67 13.9 21.67 13.9 18.98 17.82 18.98 20.09 16.66 20.09 5 21.5 5 21.5 3.19 15.3 3.19"
              />
            </svg>
          </div>
          <ul className="rvt-footer-base__list">
            <BaseFooterLink url="https://accessibility.iu.edu/assistance/">
              Accessibility
            </BaseFooterLink>
            <BaseFooterLink url={privacyUrl}>Privacy Notice</BaseFooterLink>
            <li className="rvt-footer-base__item">
              <a
                className="rvt-footer-base__link"
                href="https://www.iu.edu/copyright/index.html"
              >
                Copyright
              </a>{" "}
              © 2021 The Trustees of{" "}
              <a className="rvt-footer-base__link" href="https://www.iu.edu">
                Indiana University
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

const BaseFooterLink = ({ children, url }) => {
  if (!url) {
    return null;
  }
  return (
    <li className="rvt-footer-base__item">
      <a className="rvt-footer-base__link" href={url}>
        {children}
      </a>
    </li>
  );
};

BaseFooter.displayName = "BaseFooter";
BaseFooter.propTypes = {
  /** The url for privay link, if no provided url link will not display*/
  privacyUrl: PropTypes.string,
  /** The container size for content */
  size: PropTypes.oneOf(["sm", "md", "lg", "xl"]),
  /** The variant type which determines how the footer is styled */
  variant: PropTypes.oneOf(["light"]),
};

export default Rivet.rivetize(BaseFooter);
