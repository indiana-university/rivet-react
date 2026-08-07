/*
Copyright (C) 2018 The Trustees of Indiana University
SPDX-License-Identifier: BSD-3-Clause
*/
import * as React from "react";
import classNames from "classnames";

import Actions from "./Actions";
import Content from "./Content";

import * as Rivet from "../../util/Rivet";
import { useDeprecation } from "../../util/DeprecationUtils";

/**
 * @deprecated EmptyState is deprecated and will be removed in a future release.
 */
const EmptyState = ({ children, className, ...attrs }) => {
  useDeprecation("EmptyState");
  return (
    <div {...attrs} className={classNames("rvt-empty-state", className)}>
      {children}
    </div>
  );
};
EmptyState.displayName = "EmptyState";

EmptyState.Content = Content;

EmptyState.Actions = Actions;

export default Rivet.rivetize(EmptyState);
