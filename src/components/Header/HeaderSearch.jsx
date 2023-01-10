/*
Copyright (C) 2018 The Trustees of Indiana University
SPDX-License-Identifier: BSD-3-Clause
*/
import * as React from "react";

const HeaderSearch = ({ ...attrs }) => {
  return (
    <div data-rvt-disclosure="search" data-rvt-close-click-outside>
      <button
        className="rvt-global-toggle"
        data-rvt-disclosure-toggle="search"
        aria-expanded="false"
      >
        <span className="rvt-sr-only">Search</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="rvt-global-toggle__search"
          height="16"
          viewBox="0 0 16 16"
          width="16"
        >
          <path
            d="M15.71,14.29,10.89,9.47a6,6,0,1,0-1.42,1.42l4.82,4.82a1,1,0,0,0,1.42,0A1,1,0,0,0,15.71,14.29ZM6,10a4,4,0,1,1,4-4A4,4,0,0,1,6,10Z"
            fill="currentColor"
          ></path>
        </svg>
      </button>
      <form
        action="/search"
        className="rvt-header-global__search"
        data-rvt-disclosure-target="search"
        role="search"
        method="get"
        hidden
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
