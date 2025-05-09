/*
Copyright (C) 2018 The Trustees of Indiana University
SPDX-License-Identifier: BSD-3-Clause
*/
import * as React from "react";
import classNames from "classnames";
import * as Rivet from "../util/Rivet";
import PropTypes from "prop-types";
import { TestUtils } from "../util/TestUtils";
import { Button } from "../Button";
import Avatar from "../PageContent/Avatar/Avatar";

const HeaderAvatar = ({
  className,
  username,
  shortName,
  logoutClick,
  logoutURL,
  ...attr
}) => {
  const classes = classNames(
    "rvt-ts-14",
    "rvt-m-left-xs",
    "rvt-p-right-xs",
    "rvt-m-right-xs",
    (logoutClick || logoutURL) && "rvt-border-right"
  );
  return (
    <div
      className={classNames(
        "rvt-flex rvt-items-center rvt-m-left-md rvt-p-bottom-md rvt-p-bottom-none-lg-up",
        className
      )}
      data-testid={TestUtils.Header.avatarOuterDivTestId}
      {...attr}
    >
      <Avatar
        initials={shortName}
        size="xs"
        data-testid={TestUtils.Header.avatarShortNameTestId}
      />
      <div
        className={classes}
        data-testid={TestUtils.Header.avatarUsernameTestId}
      >
        {username}
      </div>
      {logoutURL && (
        <a className="rvt-ts-14" href={logoutURL} onClick={logoutClick}>
          Log out
        </a>
      )}
      {!logoutURL && logoutClick && (
        <Button onClick={logoutClick} size="small" variant="plain">
          Log out
        </Button>
      )}
    </div>
  );
};

HeaderAvatar.displayName = "Header.Avatar";
HeaderAvatar.propTypes = {
  /** The user's username */
  username: PropTypes.string.isRequired,
  /** The user's initials */
  shortName: PropTypes.string.isRequired,
  /** The URL for the logout action */
  logoutURL: PropTypes.string,
  /** The onClick for the logout action. This value will be overriden by logoutUrl if it is provided  */
  logoutClick: PropTypes.func,
};

export default Rivet.rivetize(HeaderAvatar);
