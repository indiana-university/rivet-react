/*
Copyright (C) 2018 The Trustees of Indiana University
SPDX-License-Identifier: BSD-3-Clause
*/
import classNames from "classnames";
import * as React from "react";
import * as PropTypes from "prop-types";

import * as Rivet from "./Rivet";

/**
 * Allow users to create a custom component while accessing rivet utility properties
 */
const RivetizeComponent = (props) => {
  const { children, component = "div", ...attrs } = props;
  const Component = component;
  return <Component {...attrs}>{children}</Component>;
};

RivetizeComponent.displayName = "RivetizeComponent";
RivetizeComponent.propTypes = {
  /** Sets the containing element. The default container element is a 'div' */
  component: PropTypes.string,
};

export default Rivet.rivetize(RivetizeComponent);
