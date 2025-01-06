/*
Copyright (C) 2018 The Trustees of Indiana University
SPDX-License-Identifier: BSD-3-Clause
*/
import * as React from "react";
import PropTypes from "prop-types";

import * as Rivet from "../util/Rivet";
import "rivet-icons/dist/magnifying-glass.js";
import { handler, isUnhandledKeyPress } from "./HeaderEventUtils";
import { isEscapeKeyPress, isTabKeyPress, targets } from "../util/EventUtils";
import { useEffect, useRef, useState } from "react";
import { TestUtils } from "../util/TestUtils";

const shouldToggleSearch = (event, wrapperDivRef) => {
  if (
    isUnhandledKeyPress(event) ||
    isTabKeyPress(event) ||
    (isEscapeKeyPress(event) && !targets(wrapperDivRef.current, event))
  ) {
    return false;
  }
  return true;
};

const HeaderSearch = ({ action = "/search", method = "get", ...attrs }) => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const wrapperDivRef = useRef(null);

  useEffect(() => {
    handleEventRegistration();
    return () => {
      eventHandler.deregister();
    };
  });

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  const handleEvent = (event) => {
    if (event && shouldToggleSearch(event, wrapperDivRef)) {
      toggleSearch(event);
    }
  };

  const eventHandler = handler(handleEvent);

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
      onKeyDown={handleEvent}
    >
      <button
        className="rvt-global-toggle"
        aria-expanded={isSearchOpen}
        onClick={toggleSearch}
        data-testid={TestUtils.Header.searchToggleButtonTestId}
      >
        <span className="rvt-sr-only">Search</span>
        <rvt-icon name="magnifying-glass" />
      </button>
      <form
        action={action}
        className="rvt-header-global__search"
        role="search"
        method={method}
        hidden={!isSearchOpen}
        data-testid={TestUtils.Header.searchFormTestId}
      >
        <label className="rvt-sr-only" htmlFor="search">
          Search
        </label>
        <div className="rvt-input-group">
          <input
            id="search"
            className="rvt-input-group__input rvt-text-input"
            type="text"
            data-testid={TestUtils.Header.searchInputTestId}
          />
          <div className="rvt-input-group__append">
            <button
              className="rvt-button"
              data-testid={TestUtils.Header.searchButtonTestId}
            >
              Search
            </button>
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
