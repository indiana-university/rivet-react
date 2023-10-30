import React from "react";
import classNames from "classnames";

import * as Rivet from "../../util/Rivet";

const Actions = ({ children, className, ...attrs }) => (
  <div {...attrs} className={classNames("rvt-empty-state__actions", className)}>
    {children}
  </div>
);

Actions.displayName = "EmptyState.Actions";

export default Rivet.rivetize(Actions);
