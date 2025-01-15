/*
Copyright (C) 2018 The Trustees of Indiana University
SPDX-License-Identifier: BSD-3-Clause
*/
import * as React from "react";

const SvgCore = ({ children, ...attrs }) => {
  return (
    <svg aria-hidden="true" {...attrs}>
      {children}
    </svg>
  );
};

export default SvgCore;
