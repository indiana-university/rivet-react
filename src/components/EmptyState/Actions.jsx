import React from "react";

import * as Rivet from "../util/Rivet";

const Actions = ({ children, ...attrs }) => (
  <div {...attrs} className="rvt-empty-state__actions">
    {children}
  </div>
);

Actions.displayName = "EmptyState.Actions";

export default Rivet.rivetize(Actions);
