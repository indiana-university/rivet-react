import * as React from "react";

const SvgCore = ({ children, ...attrs }) => {
  return (
    <svg aria-hidden="true" {...attrs}>
      {children}
    </svg>
  );
};

export default SvgCore;
