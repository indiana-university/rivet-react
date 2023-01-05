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

const icoFirst = (attrs) => (
  <svg {...attrs}>
    <g fill="currentColor">
      <path d="M13,13.8a1,1,0,0,1-.77-.36L8.37,8.8a1.25,1.25,0,0,1,0-1.61l3.86-4.64a1,1,0,0,1,1.54,1.28L10.3,8l3.47,4.16A1,1,0,0,1,13,13.8ZM9.91,8.47h0Zm0-1h0Z" />
      <path d="M7,13.8a1,1,0,0,1-.77-.36L2.37,8.8a1.25,1.25,0,0,1,0-1.61L6.23,2.56A1,1,0,0,1,7.77,3.84L4.3,8l3.47,4.16A1,1,0,0,1,7,13.8ZM3.91,8.47h0Zm0-1h0Z" />
    </g>
  </svg>
);

const icoPrevious = (attrs) => (
  <svg {...attrs}>
    <path
      fill="currentColor"
      d="M10.5,15a1,1,0,0,1-.77-.36L4.87,8.8a1.25,1.25,0,0,1,0-1.61L9.73,1.36a1,1,0,0,1,1.54,1.28L6.8,8l4.47,5.36A1,1,0,0,1,10.5,15ZM6.41,8.47h0Zm0-1h0Z"
    />
  </svg>
);

const icoNext = (attrs) => (
  <svg {...attrs}>
    <path
      fill="currentColor"
      d="M5.5,15a1,1,0,0,1-.77-1.64L9.2,8,4.73,2.64A1,1,0,0,1,6.27,1.36L11.13,7.2a1.25,1.25,0,0,1,0,1.61L6.27,14.64A1,1,0,0,1,5.5,15ZM9.6,8.48h0Zm0-1h0Z"
    />
  </svg>
);

const icoLast = (attrs) => (
  <svg {...attrs}>
    <g fill="currentColor">
      <path d="M3,13.8a1,1,0,0,1-.77-1.64L5.7,8,2.23,3.84A1,1,0,0,1,3.77,2.56L7.63,7.2a1.25,1.25,0,0,1,0,1.61L3.77,13.44A1,1,0,0,1,3,13.8ZM6.1,8.48h0Zm0-1h0Z" />
      <path d="M9,13.8a1,1,0,0,1-.77-1.64L11.7,8,8.23,3.84A1,1,0,0,1,9.77,2.56L13.63,7.2a1.25,1.25,0,0,1,0,1.61L9.77,13.44A1,1,0,0,1,9,13.8Zm3.1-5.32h0Zm0-1h0Z" />
    </g>
  </svg>
);

const Icon = ({ name, ...attrs }) => {
  switch (name) {
    case "caret-down":
      return icoCaretDown(attrs);
    case "first":
      return icoFirst(attrs);
    case "previous":
      return icoPrevious(attrs);
    case "next":
      return icoNext(attrs);
    case "last":
      return icoLast(attrs);
  }
};

Icon.displayName = "Icon";
Icon.defaultProps = DefaultIconProps;
Icon.propTypes = {
  name: PropTypes.oneOf(["caret-down", "first", "last", "next", "previous"]),
};

export default Icon;
