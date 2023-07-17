/*
Copyright (C) 2018 The Trustees of Indiana University
SPDX-License-Identifier: BSD-3-Clause
*/
import * as React from "react";
import classNames from "classnames";

import Actions from "./Actions";
import Content from "./Content";

import * as Rivet from "../util/Rivet";

// https://dev.to/hey_yogini/create-react-subcomponents-in-a-simple-way-5h1f

const EmptyState = ({ children, className, ...attrs }) => (
  <div {...attrs} className={classNames("rvt-empty-state", className)}>
    {children}
  </div>
);
EmptyState.displayName = "EmptyState";

EmptyState.Content = Content;

EmptyState.Actions = Actions;

export default Rivet.rivetize(EmptyState);
