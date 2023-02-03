/*
Copyright (C) 2018 The Trustees of Indiana University
SPDX-License-Identifier: BSD-3-Clause
*/
import * as React from "react";
import getDisplayName from "react-display-name";
import classNames from "classnames";
import { HeaderMenu } from "../Header";
import { TestUtils } from "./TestUtils";

export const findFirstChildOfType = (children, componentDisplayName) => {
  let firstChild;

  if (typeof children === "object" && !Array.isArray(children)) {
    let displayName =
      children && children["type"] && getDisplayName(children["type"]);
    return displayName === componentDisplayName ? children : undefined;
  }

  for (const child of children || []) {
    if (firstChild) {
      break;
    } else {
      const childType = child && child["type"] && getDisplayName(child["type"]);
      if (childType === componentDisplayName) {
        firstChild = child;
      }
    }
  }

  return firstChild;
};

export const hasChildOfType = (children, componentDisplayName) => {
  return findFirstChildOfType(children, componentDisplayName) !== undefined;
};
