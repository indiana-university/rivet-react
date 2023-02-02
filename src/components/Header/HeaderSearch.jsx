/*
Copyright (C) 2018 The Trustees of Indiana University
SPDX-License-Identifier: BSD-3-Clause
*/
import * as React from "react";
import PropTypes from "prop-types";

import * as Rivet from "../util/Rivet";
import Icon, { IconNames } from "../util/RivetIcons";
import { handler, isUnhandledKeyPress } from "./HeaderEventUtils";
import {
  isEscapeKeyPress,
  isRightMouseClick,
  isTabKeyPress,
  targets,
} from "../util/EventUtils";
import { useEffect, useRef, useState } from "react";
import { TestUtils } from "../util/TestUtils";

const HeaderSearch = ({ action = "/search", method = "get", ...attrs }) => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const wrapperDivRef = useRef(null);
  const searchButtonRef = useRef(null);

  useEffect(() => {
    handleEventRegistration();
    return () => {
      eventHandler.deregister();
    };
  });

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  const shouldToggleSearch = (event) => {
    if (
      isRightMouseClick(event) ||
      isUnhandledKeyPress(event) ||
      isTabKeyPress(event) ||
      (isEscapeKeyPress(event) && !targets(wrapperDivRef.current, event))
    ) {
      return false;
    }

    return true;
  };

  const handleClickOutside = (event) => {
    if (event && shouldToggleSearch(event)) {
      toggleSearch(event);
      // if search is being closed through an escape key press, put focus back on the search button
      if (isEscapeKeyPress(event)) {
        searchButtonRef.current.focus();
      }
    }
  };

  const eventHandler = handler(handleClickOutside);

  const handleEventRegistration = () => {
    if (isSearchOpen) {
      eventHandler.register();
    } else {
      eventHandler.deregister();
    }
  };

  return (
    <div
      data-rvt-disclosure="search"
      ref={wrapperDivRef}
      data-testid={TestUtils.Header.searchWrapperTestId}
    >
      <button
        ref={searchButtonRef}
        className="rvt-global-toggle"
        aria-expanded={isSearchOpen}
        onClick={(e) => {
          toggleSearch(e);
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

export default Rivet.rivetize(HeaderSearch);
