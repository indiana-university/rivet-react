import React from "react";
import PropTypes from "prop-types";

const classPrefix = "rvt-empty-state";

const Actions = ({ children, classPrefix = classPrefix, ...attrs }) => (
  <div className={`${classPrefix}__actions`}>{children}</div>
);

Actions.displayName = "EmptyState.Actions";

Actions.propTypes = {
  /** Test description for classPrefix prop */
  classPrefix: PropTypes.string,
};

export default Actions;
