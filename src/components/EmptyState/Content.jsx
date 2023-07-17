import React from "react";
import classNames from "classnames";

import * as Rivet from "../util/Rivet";

const Content = ({ children, className, ...attrs }) => (
  <div {...attrs} className={classNames("rvt-empty-state__content", className)}>
    {children}
  </div>
);
Content.displayName = "EmptyState.Content";

export default Rivet.rivetize(Content);
