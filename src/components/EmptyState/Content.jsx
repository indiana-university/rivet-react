import React from "react";
import PropTypes from "prop-types";

const classPrefix = "rvt-empty-state";

const Content = ({ children, classPrefix = classPrefix, ...attrs }) => (
  <div className={`${classPrefix}__content`}>{children}</div>
);

Content.displayName = "EmptyState.Content";

Content.propTypes = {
  /** Test description for classPrefix prop */
  classPrefix: PropTypes.string,
};

export default Content;
