/*
Copyright (C) 2018 The Trustees of Indiana University
SPDX-License-Identifier: BSD-3-Clause
*/
import * as React from "react";
import Icon, { IconNames } from "../util/RivetIcons";
import PropTypes from "prop-types";

const HeaderSearch = ({ action = "/search", method = "get", ...attrs }) => {
  const [isSearchOpen, setIsSearchOpen] = React.useState(false);

  return (
    <div data-rvt-disclosure="search">
      <button
        className="rvt-global-toggle"
        aria-expanded={isSearchOpen}
        onClick={() => {
          setIsSearchOpen(!isSearchOpen);
        }}
      >
        <span className="rvt-sr-only">Search</span>
        <Icon name={IconNames.TOGGLE_SEARCH} />
      </button>
      <form
        action={action}
        className="rvt-header-global__search"
        role="search"
        method={method}
        hidden={!isSearchOpen}
      >
        <label className="rvt-sr-only" htmlFor="search">
          Search
        </label>
        <div className="rvt-input-group">
          <input
            id="search"
            className="rvt-input-group__input rvt-text-input"
            type="text"
            name="q"
          />
          <div className="rvt-input-group__append">
            <button className="rvt-button">Search</button>
          </div>
        </div>
      </form>
    </div>
  );
};

HeaderSearch.displayName = "Header.Search";
HeaderSearch.propTypes = {
  /** The path that the form data is submitted to */
  action: PropTypes.string,
  /** The HTTP method to be used for form submission */
  method: PropTypes.string,
};

export default HeaderSearch;
