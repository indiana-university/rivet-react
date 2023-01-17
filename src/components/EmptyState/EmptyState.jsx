/*
Copyright (C) 2018 The Trustees of Indiana University
SPDX-License-Identifier: BSD-3-Clause
*/
import * as React from "react";
import Actions from "./Actions";
import Content from "./Content";

const classPrefix = "rvt-empty-state";

// https://dev.to/hey_yogini/create-react-subcomponents-in-a-simple-way-5h1f

const EmptyState = ({ children, ...attrs }) => {
  let subComponentList = Object.keys(EmptyState);

  let subComponents = subComponentList.map((key) => {
    return React.Children.map(children, (child) =>
      child.type.name === key ? child : null
    );
  });

  return (
    <div className={classPrefix} {...attrs}>
      {subComponents.map((component) => component)}
    </div>
  );
};
EmptyState.displayName = "EmptyState";

EmptyState.Content = Content;

EmptyState.Actions = Actions;

export default EmptyState;
