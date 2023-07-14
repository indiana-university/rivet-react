import React from "react";

import * as Rivet from "../util/Rivet";

const Content = ({ children, ...attrs }) => (
  <div {...attrs} className="rvt-empty-state__content">
    {children}
  </div>
);
Content.displayName = "EmptyState.Content";

export default Rivet.rivetize(Content);
