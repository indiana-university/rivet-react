/*
Copyright (C) 2018 The Trustees of Indiana University
SPDX-License-Identifier: BSD-3-Clause
*/
import * as React from "react";

import * as Rivet from "../util/Rivet";
import PropTypes from "prop-types";
import { TestUtils } from "../util/TestUtils";

const HeaderAvatar = ({ username, shortName, logoutURL }) => {
  return (
    <div className="rvt-flex rvt-items-center rvt-m-left-md rvt-p-bottom-md rvt-p-bottom-none-lg-up">
      <div className="rvt-avatar rvt-avatar--xs">
        <span
          className="rvt-avatar__text"
          data-testid={TestUtils.Header.avatarShortNameTestId}
        >
          {shortName}
        </span>
      </div>
      <div
        className="rvt-ts-14 rvt-m-left-xs rvt-p-right-xs rvt-m-right-xs rvt-border-right"
        data-testid={TestUtils.Header.avatarUsernameTestId}
      >
        {username}
      </div>
      {logoutURL && (
        <a href={logoutURL} className="rvt-ts-14">
          Log out
        </a>
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
};

export default Rivet.rivetize(HeaderAvatar);
