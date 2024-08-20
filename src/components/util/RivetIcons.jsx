/*
Copyright (C) 2018 The Trustees of Indiana University
SPDX-License-Identifier: BSD-3-Clause
*/
import * as React from "react";
import PropTypes from "prop-types";
import { TestUtils } from "./TestUtils.js";

export const IconNames = {
  ACCORDIAN_IND: "accordian-indicator",
  ARROW_LEFT: "arrow-left",
  ARROW_RIGHT: "arrow-right",
  BELL: "bell",
  CARET_DOWN: "caret-down",
  CLOSE: "close",
  FACEBOOK: "facebook",
  FILE: "file",
  FIRST: "first",
  INSTAGRAM: "instagram",
  LAST: "last",
  LINKEDIN: "linkedin",
  LOGO: "logo",
  NEXT: "next",
  PREVIOUS: "previous",
  TOGGLE_OPEN: "toggle-open",
  TOGGLE_CLOSE: "toggle-close",
  TOGGLE_SEARCH: "toggle-search",
  TRIDENT_HEADER: "trident-header",
  TWITTER: "twitter",
  YOUTUBE: "youtube",
};

const IconCore = ({ children, ...attrs }) => {
  return (
    <svg aria-hidden="true" {...attrs}>
      {children}
    </svg>
  );
};

const icoBell = (attrs) => (
  <IconCore data-testid={TestUtils.RivetIcons.testId} {...attrs}>
    <path
      fill="currentColor"
      d="M14.57,12.06,13,9.7V6A5,5,0,0,0,3,6V9.7L1.43,12.06a1.25,1.25,0,0,0,1,1.94H6a2,2,0,0,0,4,0h3.53a1.25,1.25,0,0,0,1-1.94ZM8,12H3.87L5,10.3V6a3,3,0,0,1,6,0v4.3L12.13,12Z"
    />
  </IconCore>
);

const icoCaretDown = (attrs) => (
  <IconCore data-testid={TestUtils.RivetIcons.testId} {...attrs}>
    <path
      fill="currentColor"
      d="M8,12.46a2,2,0,0,1-1.52-.7L1.24,5.65a1,1,0,1,1,1.52-1.3L8,10.46l5.24-6.11a1,1,0,0,1,1.52,1.3L9.52,11.76A2,2,0,0,1,8,12.46Z"
    />
  </IconCore>
);

const icoFile = (attrs) => (
  <IconCore {...attrs}>
    <path
      fill="currentColor"
      d="M10.41,1H3.5A1.3,1.3,0,0,0,2.2,2.3V13.7A1.3,1.3,0,0,0,3.5,15h9a1.3,1.3,0,0,0,1.3-1.3V4.39ZM11.8,5.21V6H9.25V3h.34ZM4.2,13V3h3V6.75A1.25,1.25,0,0,0,8.5,8h3.3v5Z"
    />
  </IconCore>
);

const icoLogo = (attrs) => (
  <IconCore {...attrs}>
    <polygon
      fill="currentColor"
      points="15.3 3.19 15.3 5 16.55 5 16.55 15.07 13.9 15.07 13.9 1.81 15.31 1.81 15.31 0 8.72 0 8.72 1.81 10.12 1.81 10.12 15.07 7.45 15.07 7.45 5 8.7 5 8.7 3.19 2.5 3.19 2.5 5 3.9 5 3.9 16.66 6.18 18.98 10.12 18.98 10.12 21.67 8.72 21.67 8.72 24 15.3 24 15.3 21.67 13.9 21.67 13.9 18.98 17.82 18.98 20.09 16.66 20.09 5 21.5 5 21.5 3.19 15.3 3.19"
    />
  </IconCore>
);

const icoFacebook = (attrs) => (
  <IconCore {...attrs}>
    <path
      d="M20 40C31.0457 40 40 31.0457 40 20C40 8.9543 31.0457 0 20 0C8.9543 0 0 8.9543 0 20C0 31.0457 8.9543 40 20 40Z"
      fill="#7A1705"
    ></path>
    <path
      d="M24.8996 9.99982V13.1998H23.0996C23.0996 13.1998 21.4996 12.9998 21.4996 14.4998V16.9998H24.7996L24.3996 20.3998H21.4996V29.9998H17.6996V20.2998H15.0996V16.9998H17.7996V14.0998C17.7996 14.0998 17.4996 12.4998 18.8996 11.1998C20.2996 9.89982 22.1996 9.99982 22.1996 9.99982H24.8996Z"
      fill="#F7F7F8"
    ></path>
  </IconCore>
);

const icoLinkedin = (attrs) => (
  <IconCore {...attrs}>
    <path
      d="M20 40C31.0457 40 40 31.0457 40 20C40 8.9543 31.0457 0 20 0C8.9543 0 0 8.9543 0 20C0 31.0457 8.9543 40 20 40Z"
      fill="#7A1705"
    ></path>
    <path
      d="M11.3 16H15V28H11.3V16ZM13.2 10C14.4 10 15.4 11 15.4 12.2C15.4 13.4 14.4 14.4 13.2 14.4C12 14.4 11 13.4 11 12.2C11 11 12 10 13.2 10Z"
      fill="#F7F7F8"
    ></path>
    <path
      d="M17.3999 16.0002H20.9999V17.6002C21.4999 16.7002 22.6999 15.7002 24.4999 15.7002C28.2999 15.7002 28.9999 18.2002 28.9999 21.4002V28.0002H25.2999V22.2002C25.2999 20.8002 25.2999 19.0002 23.3999 19.0002C21.4999 19.0002 21.1999 20.5002 21.1999 22.1002V28.0002H17.4999V16.0002H17.3999Z"
      fill="#F7F7F8"
    ></path>
  </IconCore>
);

const icoTwitter = (attrs) => (
  <IconCore {...attrs}>
    <path
      d="M20 40C31.0457 40 40 31.0457 40 20C40 8.9543 31.0457 0 20 0C8.9543 0 0 8.9543 0 20C0 31.0457 8.9543 40 20 40Z"
      fill="#7A1705"
    ></path>
    <path
      d="M30.0002 13.7998C29.3002 14.0998 28.5002 14.2998 27.6002 14.3998C28.4002 13.8998 29.1002 13.0998 29.4002 12.0998C28.6002 12.5998 27.7002 12.8998 26.8002 13.0998C26.1002 12.2998 25.0002 11.7998 23.8002 11.7998C21.5002 11.7998 19.7002 13.5998 19.7002 15.8998C19.7002 16.1998 19.7002 16.4998 19.8002 16.7998C16.4002 16.5998 13.4002 14.9998 11.3002 12.4998C10.9002 13.0998 10.7002 13.7998 10.7002 14.5998C10.7002 15.9998 11.4002 17.2998 12.5002 17.9998C11.8002 17.9998 11.2002 17.7998 10.6002 17.4998C10.6002 17.4998 10.6002 17.4998 10.6002 17.5998C10.6002 19.5998 12.0002 21.1998 13.9002 21.5998C13.6002 21.6998 13.2002 21.6998 12.8002 21.6998C12.5002 21.6998 12.3002 21.6998 12.0002 21.5998C12.5002 23.1998 14.0002 24.3998 15.8002 24.3998C14.4002 25.4998 12.6002 26.1998 10.7002 26.1998C10.4002 26.1998 10.0002 26.1998 9.7002 26.0998C11.5002 27.2998 13.7002 27.8998 16.0002 27.8998C23.5002 27.8998 27.7002 21.5998 27.7002 16.1998C27.7002 15.9998 27.7002 15.7998 27.7002 15.6998C28.8002 15.2998 29.4002 14.5998 30.0002 13.7998Z"
      fill="#F7F7F8"
    ></path>
  </IconCore>
);

const icoInstagram = (attrs) => (
  <IconCore {...attrs}>
    <path
      d="M20 40C31.0457 40 40 31.0457 40 20C40 8.9543 31.0457 0 20 0C8.9543 0 0 8.9543 0 20C0 31.0457 8.9543 40 20 40Z"
      fill="#7A1705"
    ></path>
    <path
      d="M24.3004 29.9999H15.6004C12.5004 29.9999 9.90039 27.4999 9.90039 24.2999V15.5999C9.90039 12.4999 12.4004 9.8999 15.6004 9.8999H24.3004C27.4004 9.8999 30.0004 12.3999 30.0004 15.5999V24.2999C30.0004 27.4999 27.5004 29.9999 24.3004 29.9999ZM24.3004 28.4999C25.4004 28.4999 26.5004 28.0999 27.2004 27.2999C27.9004 26.4999 28.4004 25.4999 28.4004 24.3999V15.6999C28.4004 14.5999 28.0004 13.4999 27.2004 12.7999C26.4004 11.9999 25.4004 11.5999 24.3004 11.5999H15.6004C14.5004 11.5999 13.4004 11.9999 12.7004 12.7999C11.9004 13.5999 11.5004 14.5999 11.5004 15.6999V24.3999C11.5004 25.4999 11.9004 26.5999 12.7004 27.2999C13.5004 27.9999 14.5004 28.4999 15.6004 28.4999H24.3004Z"
      fill="#F7F7F8"
    ></path>
    <path
      d="M25.4006 19.9C25.4006 22.9 23.0006 25.3 20.0006 25.3C17.0006 25.3 14.6006 22.9 14.6006 19.9C14.6006 16.9 17.0006 14.5 20.0006 14.5C23.0006 14.5 25.4006 17 25.4006 19.9ZM20.0006 16.4C18.1006 16.4 16.5006 18 16.5006 19.9C16.5006 21.8 18.1006 23.4 20.0006 23.4C21.9006 23.4 23.5006 21.8 23.5006 19.9C23.5006 18 21.9006 16.4 20.0006 16.4Z"
      fill="#F7F7F8"
    ></path>
    <path
      d="M25.5002 15.8002C26.2182 15.8002 26.8002 15.2182 26.8002 14.5002C26.8002 13.7822 26.2182 13.2002 25.5002 13.2002C24.7822 13.2002 24.2002 13.7822 24.2002 14.5002C24.2002 15.2182 24.7822 15.8002 25.5002 15.8002Z"
      fill="#F7F7F8"
    ></path>
  </IconCore>
);

const icoYoutube = (attrs) => (
  <IconCore {...attrs}>
    <path d="M20,40A20,20,0,1,0,0,20,20,20,0,0,0,20,40Z" fill="#7A1705"></path>
    <path
      d="M29.58,15.17a2.49,2.49,0,0,0-1.77-1.78C26.25,13,20,13,20,13s-6.25,0-7.81.42a2.49,2.49,0,0,0-1.77,1.78A26.26,26.26,0,0,0,10,20a26.23,26.23,0,0,0,.42,4.84,2.47,2.47,0,0,0,1.77,1.75C13.75,27,20,27,20,27s6.25,0,7.81-.42a2.47,2.47,0,0,0,1.77-1.75A26.23,26.23,0,0,0,30,20,26.26,26.26,0,0,0,29.58,15.17ZM18,23V17l5.23,3Z"
      fill="#F7F7F8"
    ></path>
  </IconCore>
);

const icoToggleClose = (attrs) => (
  <IconCore {...attrs} className="rvt-global-toggle__close" fill="currentColor">
    <path
      d="M8.46954 7.00409L13.7595 1.71409C13.9234 1.52279 14.009 1.27671 13.9993 1.02504C13.9895 0.773362 13.8852 0.534623 13.7071 0.356528C13.529 0.178434 13.2903 0.0741014 13.0386 0.0643803C12.7869 0.0546591 12.5408 0.140265 12.3495 0.304092L7.05954 5.59409L1.76954 0.294092C1.58124 0.105788 1.32585 -3.72428e-09 1.05954 -1.74018e-09C0.793242 2.43924e-10 0.537847 0.105788 0.349544 0.294092C0.16124 0.482395 0.055452 0.73779 0.055452 1.00409C0.055452 1.27039 0.16124 1.52579 0.349544 1.71409L5.64954 7.00409L0.349544 12.2941C0.244862 12.3837 0.159841 12.4941 0.0998179 12.6181C0.0397946 12.7422 0.00606467 12.8773 0.000745174 13.015C-0.00457432 13.1528 0.0186315 13.2901 0.0689061 13.4184C0.119181 13.5467 0.195439 13.6633 0.292893 13.7607C0.390348 13.8582 0.506896 13.9345 0.635221 13.9847C0.763546 14.035 0.900878 14.0582 1.0386 14.0529C1.17632 14.0476 1.31145 14.0138 1.43551 13.9538C1.55958 13.8938 1.6699 13.8088 1.75954 13.7041L7.05954 8.41409L12.3495 13.7041C12.5408 13.8679 12.7869 13.9535 13.0386 13.9438C13.2903 13.9341 13.529 13.8297 13.7071 13.6517C13.8852 13.4736 13.9895 13.2348 13.9993 12.9831C14.009 12.7315 13.9234 12.4854 13.7595 12.2941L8.46954 7.00409Z"
      fill="currentColor"
    ></path>
  </IconCore>
);

const icoClose = (attrs) => (
  <IconCore {...attrs}>
    <path
      d="M9.41,8l5.29-5.29a1,1,0,0,0-1.41-1.41L8,6.59,2.71,1.29A1,1,0,0,0,1.29,2.71L6.59,8,1.29,13.29a1,1,0,1,0,1.41,1.41L8,9.41l5.29,5.29a1,1,0,0,0,1.41-1.41Z"
      fill="currentColor"
    ></path>
  </IconCore>
);

const icoTrident = (attrs) => (
  <IconCore {...attrs} className="rvt-lockup__trident" viewBox="0 0 28 34">
    <path
      d="M-3.34344e-05 4.70897H8.83308V7.174H7.1897V21.1426H10.6134V2.72321H8.83308V0.121224H18.214V2.65476H16.2283V21.1426H19.7889V7.174H18.214V4.64047H27.0471V7.174H25.0614V23.6761L21.7746 26.8944H16.2967V30.455H18.214V33.8787H8.76463V30.592H10.6819V26.8259H5.20403L1.91726 23.6077V7.174H-3.34344e-05V4.70897Z"
      fill="currentColor"
    ></path>
  </IconCore>
);

const icoToggleOpen = (attrs) => (
  <IconCore {...attrs} className="rvt-global-toggle__open">
    <g fill="currentColor">
      <path d="M15,3H1A1,1,0,0,1,1,1H15a1,1,0,0,1,0,2Z"></path>
      <path d="M15,9H1A1,1,0,0,1,1,7H15a1,1,0,0,1,0,2Z"></path>
      <path d="M15,15H1a1,1,0,0,1,0-2H15a1,1,0,0,1,0,2Z"></path>
    </g>
  </IconCore>
);

const icoToggleSearch = (attrs) => (
  <IconCore
    {...attrs}
    className="rvt-global-toggle__search"
    fill="currentColor"
  >
    <path
      d="M15.71,14.29,10.89,9.47a6,6,0,1,0-1.42,1.42l4.82,4.82a1,1,0,0,0,1.42,0A1,1,0,0,0,15.71,14.29ZM6,10a4,4,0,1,1,4-4A4,4,0,0,1,6,10Z"
      fill="currentColor"
    ></path>
  </IconCore>
);

const icoFirst = (attrs) => (
  <IconCore {...attrs}>
    <g fill="currentColor">
      <path d="M13,13.8a1,1,0,0,1-.77-.36L8.37,8.8a1.25,1.25,0,0,1,0-1.61l3.86-4.64a1,1,0,0,1,1.54,1.28L10.3,8l3.47,4.16A1,1,0,0,1,13,13.8ZM9.91,8.47h0Zm0-1h0Z" />
      <path d="M7,13.8a1,1,0,0,1-.77-.36L2.37,8.8a1.25,1.25,0,0,1,0-1.61L6.23,2.56A1,1,0,0,1,7.77,3.84L4.3,8l3.47,4.16A1,1,0,0,1,7,13.8ZM3.91,8.47h0Zm0-1h0Z" />
    </g>
  </IconCore>
);

const icoPrevious = (attrs) => (
  <IconCore {...attrs}>
    <path
      fill="currentColor"
      d="M10.5,15a1,1,0,0,1-.77-.36L4.87,8.8a1.25,1.25,0,0,1,0-1.61L9.73,1.36a1,1,0,0,1,1.54,1.28L6.8,8l4.47,5.36A1,1,0,0,1,10.5,15ZM6.41,8.47h0Zm0-1h0Z"
    />
  </IconCore>
);

const icoNext = (attrs) => (
  <IconCore {...attrs}>
    <path
      fill="currentColor"
      d="M5.5,15a1,1,0,0,1-.77-1.64L9.2,8,4.73,2.64A1,1,0,0,1,6.27,1.36L11.13,7.2a1.25,1.25,0,0,1,0,1.61L6.27,14.64A1,1,0,0,1,5.5,15ZM9.6,8.48h0Zm0-1h0Z"
    />
  </IconCore>
);

const icoLast = (attrs) => (
  <IconCore {...attrs}>
    <g fill="currentColor">
      <path d="M3,13.8a1,1,0,0,1-.77-1.64L5.7,8,2.23,3.84A1,1,0,0,1,3.77,2.56L7.63,7.2a1.25,1.25,0,0,1,0,1.61L3.77,13.44A1,1,0,0,1,3,13.8ZM6.1,8.48h0Zm0-1h0Z" />
      <path d="M9,13.8a1,1,0,0,1-.77-1.64L11.7,8,8.23,3.84A1,1,0,0,1,9.77,2.56L13.63,7.2a1.25,1.25,0,0,1,0,1.61L9.77,13.44A1,1,0,0,1,9,13.8Zm3.1-5.32h0Zm0-1h0Z" />
    </g>
  </IconCore>
);

const icoArrowRight = (attrs) => (
  <IconCore {...attrs}>
    <path
      fill="currentColor"
      d="M1 7h10.844L7.737 2.146 9.263.854 15.31 8l-6.047 7.146-1.526-1.292L11.844 9H1V7Z"
    ></path>
  </IconCore>
);

const icoArrowLeft = (attrs) => (
  <IconCore {...attrs}>
    <path
      fill="currentColor"
      d="M15 7H4.156l4.107-4.854L6.737.854.69 8l6.047 7.146 1.526-1.292L4.156 9H15V7Z"
    ></path>
  </IconCore>
);

const icoAccordianIndicator = (attrs) => (
  <IconCore {...attrs}>
    <g fill="currentColor">
      <path
        className="rvt-accordion__icon-bar"
        d="M8,15a1,1,0,0,1-1-1V2A1,1,0,0,1,9,2V14A1,1,0,0,1,8,15Z"
      ></path>
      <path d="M14,9H2A1,1,0,0,1,2,7H14a1,1,0,0,1,0,2Z"></path>
    </g>
  </IconCore>
);

const Icon = ({
  name,
  role = "img",
  xmlns = "http://www.w3.org/2000/svg",
  width = "16",
  height = "16",
  viewBox = "0 0 16 16",
  "data-testid": dataTestid = TestUtils.RivetIcons.testId,
  ...attrs
}) => {
  const props = {
    role,
    xmlns,
    width,
    height,
    viewBox,
    "data-testid": dataTestid,
    ...attrs,
  };
  switch (name) {
    case IconNames.ACCORDIAN_IND:
      return icoAccordianIndicator(props);
    case IconNames.ARROW_LEFT:
      return icoArrowLeft(props);
    case IconNames.ARROW_RIGHT:
      return icoArrowRight(props);
    case IconNames.BELL:
      return icoBell(props);
    case IconNames.CARET_DOWN:
      return icoCaretDown(props);
    case IconNames.CLOSE:
      return icoClose(props);
    case IconNames.FACEBOOK:
      return icoFacebook(props);
    case IconNames.FILE:
      return icoFile(props);
    case IconNames.FIRST:
      return icoFirst(props);
    case IconNames.INSTAGRAM:
      return icoInstagram(props);
    case IconNames.LAST:
      return icoLast(props);
    case IconNames.LINKEDIN:
      return icoLinkedin(props);
    case IconNames.LOGO:
      return icoLogo(props);
    case IconNames.NEXT:
      return icoNext(props);
    case IconNames.PREVIOUS:
      return icoPrevious(props);
    case IconNames.TOGGLE_OPEN:
      return icoToggleOpen(props);
    case IconNames.TOGGLE_CLOSE:
      return icoToggleClose(props);
    case IconNames.TOGGLE_SEARCH:
      return icoToggleSearch(props);
    case IconNames.TRIDENT_HEADER:
      return icoTrident(props);
    case IconNames.TWITTER:
      return icoTwitter(props);
    case IconNames.YOUTUBE:
      return icoYoutube(props);
  }
};

Icon.displayName = "Icon";
Icon.propTypes = {
  name: PropTypes.oneOf([
    IconNames.ACCORDIAN_IND,
    IconNames.ARROW_LEFT,
    IconNames.ARROW_RIGHT,
    IconNames.BELL,
    IconNames.CARET_DOWN,
    IconNames.CLOSE,
    IconNames.FACEBOOK,
    IconNames.FILE,
    IconNames.FIRST,
    IconNames.INSTAGRAM,
    IconNames.LAST,
    IconNames.LINKEDIN,
    IconNames.LOGO,
    IconNames.NEXT,
    IconNames.PREVIOUS,
    IconNames.TOGGLE_CLOSE,
    IconNames.TOGGLE_OPEN,
    IconNames.TOGGLE_SEARCH,
    IconNames.TRIDENT_HEADER,
    IconNames.TWITTER,
    IconNames.YOUTUBE,
  ]),
};

export default Icon;
