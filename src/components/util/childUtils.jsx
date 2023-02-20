/*
Copyright (C) 2018 The Trustees of Indiana University
SPDX-License-Identifier: BSD-3-Clause
*/
import * as React from "react";
import getDisplayName from "react-display-name";

export const findFirstChildOfType = (children, componentDisplayName) => {
  let firstChild;
  React.Children.map(children, (child) => {
    let displayName = child && child["type"] && getDisplayName(child["type"]);
    if (!firstChild && displayName === componentDisplayName) {
      firstChild = child;
    }
  });
  return firstChild;
};

export const hasChildOfType = (children, componentDisplayName) => {
  return findFirstChildOfType(children, componentDisplayName) !== undefined;
};
