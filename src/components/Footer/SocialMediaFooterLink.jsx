/*
Copyright (C) 2018 The Trustees of Indiana University
SPDX-License-Identifier: BSD-3-Clause
*/
import * as React from "react";
import * as PropTypes from "prop-types";

import * as Rivet from "../util/Rivet";

/**
 * Use the Social Media Footer Link component to create a link for the social media footer.
 */
const SocialMediaFooterLink = ({ children, label, url, ...attrs }) => {
  if (!url) {
    return null;
  }
  return (
    <li {...attrs}>
      <a href={url}>
        <span className="rvt-sr-only">{label}</span>
        {children}
      </a>
    </li>
  );
};

SocialMediaFooterLink.displayName = "SocialMediaFooterLink";
SocialMediaFooterLink.propTypes = {
  /** The label for the social media link (screen reader only)" */
  label: PropTypes.string,
  /** The url for social media link, if no provided url link will not display*/
  url: PropTypes.string,
};

export default Rivet.rivetize(SocialMediaFooterLink);
