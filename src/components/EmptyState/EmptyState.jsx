/*
Copyright (C) 2018 The Trustees of Indiana University
SPDX-License-Identifier: BSD-3-Clause
*/
import classNames from "classnames";
import * as PropTypes from "prop-types";
import * as React from "react";
import * as Rivet from "../util/Rivet";

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

const Content = ({ children, ...attrs }) => (
  <div className={`${classPrefix}__content`}>{children}</div>
);
EmptyState.Content = Content;
Content.displayName = "EmptyState.Content";

const Actions = ({ children, ...attrs }) => (
  <div className={`${classPrefix}__actions`} {...attrs}>
    {children}
  </div>
);
EmptyState.Actions = Actions;
Actions.displayName = "EmptyState.Actions";

export default EmptyState;
