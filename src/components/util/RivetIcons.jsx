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
  "data-testid": TestUtils.RivetIcons.testId,
};

export const IconNames = {
  CARET_DOWN: "caret-down",
  TRIDENT_HEADER: "trident-header",
  TOGGLE_OPEN: "toggle-open",
  TOGGLE_CLOSE: "toggle-close",
  TOGGLE_SEARCH: "toggle-search",
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

const icoTrident = (attrs) => (
  <svg {...attrs} className="rvt-lockup__trident" viewBox="0 0 28 34">
    <path
      d="M-3.34344e-05 4.70897H8.83308V7.174H7.1897V21.1426H10.6134V2.72321H8.83308V0.121224H18.214V2.65476H16.2283V21.1426H19.7889V7.174H18.214V4.64047H27.0471V7.174H25.0614V23.6761L21.7746 26.8944H16.2967V30.455H18.214V33.8787H8.76463V30.592H10.6819V26.8259H5.20403L1.91726 23.6077V7.174H-3.34344e-05V4.70897Z"
      fill="currentColor"
    ></path>
  </svg>
);

const icoToggleOpen = (attrs) => (
  <svg {...attrs} className="rvt-global-toggle__open">
    <g fill="currentColor">
      <path d="M15,3H1A1,1,0,0,1,1,1H15a1,1,0,0,1,0,2Z"></path>
      <path d="M15,9H1A1,1,0,0,1,1,7H15a1,1,0,0,1,0,2Z"></path>
      <path d="M15,15H1a1,1,0,0,1,0-2H15a1,1,0,0,1,0,2Z"></path>
    </g>
  </svg>
);

const icoToggleClose = (attrs) => (
  <svg {...attrs} className="rvt-global-toggle__close" fill="currentColor">
    <path
      d="M8.46954 7.00409L13.7595 1.71409C13.9234 1.52279 14.009 1.27671 13.9993 1.02504C13.9895 0.773362 13.8852 0.534623 13.7071 0.356528C13.529 0.178434 13.2903 0.0741014 13.0386 0.0643803C12.7869 0.0546591 12.5408 0.140265 12.3495 0.304092L7.05954 5.59409L1.76954 0.294092C1.58124 0.105788 1.32585 -3.72428e-09 1.05954 -1.74018e-09C0.793242 2.43924e-10 0.537847 0.105788 0.349544 0.294092C0.16124 0.482395 0.055452 0.73779 0.055452 1.00409C0.055452 1.27039 0.16124 1.52579 0.349544 1.71409L5.64954 7.00409L0.349544 12.2941C0.244862 12.3837 0.159841 12.4941 0.0998179 12.6181C0.0397946 12.7422 0.00606467 12.8773 0.000745174 13.015C-0.00457432 13.1528 0.0186315 13.2901 0.0689061 13.4184C0.119181 13.5467 0.195439 13.6633 0.292893 13.7607C0.390348 13.8582 0.506896 13.9345 0.635221 13.9847C0.763546 14.035 0.900878 14.0582 1.0386 14.0529C1.17632 14.0476 1.31145 14.0138 1.43551 13.9538C1.55958 13.8938 1.6699 13.8088 1.75954 13.7041L7.05954 8.41409L12.3495 13.7041C12.5408 13.8679 12.7869 13.9535 13.0386 13.9438C13.2903 13.9341 13.529 13.8297 13.7071 13.6517C13.8852 13.4736 13.9895 13.2348 13.9993 12.9831C14.009 12.7315 13.9234 12.4854 13.7595 12.2941L8.46954 7.00409Z"
      fill="currentColor"
    ></path>
  </svg>
);

const icoToggleSearch = (attrs) => (
  <svg {...attrs} className="rvt-global-toggle__search" fill="currentColor">
    <path
      d="M15.71,14.29,10.89,9.47a6,6,0,1,0-1.42,1.42l4.82,4.82a1,1,0,0,0,1.42,0A1,1,0,0,0,15.71,14.29ZM6,10a4,4,0,1,1,4-4A4,4,0,0,1,6,10Z"
      fill="currentColor"
    ></path>
  </svg>
);

const Icon = ({ name, ...attrs }) => {
  switch (name) {
    case IconNames.CARET_DOWN:
      return icoCaretDown(attrs);
    case IconNames.TRIDENT_HEADER:
      return icoTrident(attrs);
    case IconNames.TOGGLE_OPEN:
      return icoToggleOpen(attrs);
    case IconNames.TOGGLE_CLOSE:
      return icoToggleClose(attrs);
    case IconNames.TOGGLE_SEARCH:
      return icoToggleSearch(attrs);
    case "file":
      return icoFile(attrs);
    case "close":
      return icoClose(attrs);
  }
};

Icon.displayName = "Icon";
Icon.defaultProps = DefaultIconProps;
Icon.propTypes = {
  name: PropTypes.oneOf([
    IconNames.CARET_DOWN,
    IconNames.TOGGLE_OPEN,
    IconNames.TOGGLE_CLOSE,
    IconNames.TRIDENT_HEADER,
    IconNames.TOGGLE_SEARCH,
    "file",
    "close",
  ]),
};

export default Icon;
