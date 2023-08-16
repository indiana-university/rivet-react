/*
Copyright (C) 2018 The Trustees of Indiana University
SPDX-License-Identifier: BSD-3-Clause
*/
import classNames from "classnames";
import * as PropTypes from "prop-types";
import * as React from "react";
import * as Rivet from "../../util/Rivet";
import { parseRivetMultiListUtility } from "../../util/RivetizeAux.js";
const classPrefix = "rvt-breadcrumbs";

/**
 * Use the avatar component to display a person’s picture or initials with a rounded border.
 */
const Avatar = ({
  className,
  children,
  initials,
  size,
  src,
  ...attrs
}) => {
  const classNameArr = [
    "rvt-avatar"
  ]

  if (size) {    
    classNameArr.push(parseRivetMultiListUtility(size, Sizes, 'rvt-avatar-'))
  }

  if (className) {
    classNameArr.push(className)
  }

  return (
    <div
      {...attrs}
      className={classNames(...classNameArr)}
    >
      {src && <img alt="" className="rvt-avatar__image" src={src} />}
      {!src && initials && <span  className="rvt-avatar__text">{initials}</span>}
    </div>
  )
};

const AvatarSize = [
  "xs",
  "sm",
  "md",
  "lg",
  "xl"
];
const AvatarResp = ["sm-up", "md-up", "lg-up", "xl-up", "xxl-up"]
  .map((r) => AvatarSize.map((s) => `${s}-${r}`))
  .flat(1);
export const Sizes = [...AvatarSize, ...AvatarResp];

Avatar.displayName = "Avatar";
Avatar.propTypes = {
  /** Text content display in avatar (not displayed if src provided)*/
  initials: PropTypes.string,
  /** The static and responsive size options for the avatar */
  size: PropTypes.oneOfType([PropTypes.array, PropTypes.oneOf([...Sizes])]),
  /** Source url for image content display in avatar */
  src: PropTypes.string,
};

export default Rivet.rivetize(Avatar);
