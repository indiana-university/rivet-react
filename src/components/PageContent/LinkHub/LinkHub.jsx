/*
Copyright (C) 2018 The Trustees of Indiana University
SPDX-License-Identifier: BSD-3-Clause
*/
import classNames from "classnames";
import * as PropTypes from "prop-types";
import * as React from "react";
import * as Rivet from "../../util/Rivet";
import { useDeprecation } from "../../util/DeprecationUtils";
import { TestUtils } from "../../util/TestUtils";
import LinkHubItem from "./LinkHubItem";

/**
 * @deprecated LinkHub is deprecated and will be removed in a future release.
 */
const LinkHub = ({
  children,
  className,
  testMode = false,
  variant = "normal",
  ...attrs
}) => {
  useDeprecation("LinkHub");
  const classNameArr = [
    "rvt-link-hub",
    variant === "stacked" ? "rvt-link-hub--stacked" : "",
    className,
  ];
  return (
    <ul
      className={classNames(classNameArr)}
      {...(testMode && { "data-testid": TestUtils.LinkHub.container })}
      {...attrs}
    >
      {children}
    </ul>
  );
};

LinkHub.displayName = "LinkHub";
LinkHub.propTypes = {
  testMode: PropTypes.bool,
  /** The variant determines the style of the link hub */
  variant: PropTypes.oneOf(["normal", "stacked"]),
};

LinkHub.Item = LinkHubItem;

export default Rivet.rivetize(LinkHub);
