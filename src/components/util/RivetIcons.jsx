/*
Copyright (C) 2018 The Trustees of Indiana University
SPDX-License-Identifier: BSD-3-Clause
*/
import * as React from "react";
import PropTypes from "prop-types";
import { TestUtils } from "./TestUtils.js";

const DefaultIconProps = {
  role: "img",
  xmlns: "http://www.w3.org/2000/svg",
  width: "16",
  height: "16",
  viewBox: "0 0 16 16",
};

const icoCaretDown = (attrs) => (
  <svg aria-hidden="true" data-testid={TestUtils.RivetIcons.testId} {...attrs}>
    <path
      fill="currentColor"
      d="M8,12.46a2,2,0,0,1-1.52-.7L1.24,5.65a1,1,0,1,1,1.52-1.3L8,10.46l5.24-6.11a1,1,0,0,1,1.52,1.3L9.52,11.76A2,2,0,0,1,8,12.46Z"
    />
  </svg>
);

const icoFile = (attrs) => (
  <svg aria-hidden="true" {...attrs}>
    <path
      fill="currentColor"
      d="M10.41,1H3.5A1.3,1.3,0,0,0,2.2,2.3V13.7A1.3,1.3,0,0,0,3.5,15h9a1.3,1.3,0,0,0,1.3-1.3V4.39ZM11.8,5.21V6H9.25V3h.34ZM4.2,13V3h3V6.75A1.25,1.25,0,0,0,8.5,8h3.3v5Z"
    />
  </svg>
);

const icoClose = (attrs) => (
  <svg aria-hidden="true" data-testid={TestUtils.RivetIcons.testId} {...attrs}>
    <path
      fill="currentColor"
      d="M9.41,8l5.29-5.29a1,1,0,0,0-1.41-1.41L8,6.59,2.71,1.29A1,1,0,0,0,1.29,2.71L6.59,8,1.29,13.29a1,1,0,1,0,1.41,1.41L8,9.41l5.29,5.29a1,1,0,0,0,1.41-1.41Z"
    />
  </svg>
);

const Icon = ({ name, ...attrs }) => {
  switch (name) {
    case "caret-down":
      return icoCaretDown(attrs);
    case "file":
      return icoFile(attrs);
    case "close":
      return icoClose(attrs);
  }
};

Icon.displayName = "Icon";
Icon.defaultProps = DefaultIconProps;
Icon.propTypes = {
  name: PropTypes.oneOf(["caret-down", "file", "close"]),
};

export default Icon;
