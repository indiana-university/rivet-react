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

const Icon = ({ name, ...attrs }) => {
  switch (name) {
    case "caret-down":
      return icoCaretDown(attrs);
  }
};

Icon.displayName = "Icon";
Icon.defaultProps = DefaultIconProps;
Icon.propTypes = {
  name: PropTypes.oneOf(["caret-down"]),
};

export default Icon;
