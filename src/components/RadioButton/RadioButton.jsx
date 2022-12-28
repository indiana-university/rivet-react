/*
Copyright (C) 2018 The Trustees of Indiana University
SPDX-License-Identifier: BSD-3-Clause
*/
import * as React from "react";
import * as PropTypes from "prop-types";

import * as Rivet from "../util/Rivet";

/**
 * Use the radio input component to allow users to choose a single option among many.
 */
const RadioButton = ({
  description,
  id = Rivet.shortuid(),
  label,
  className,
  children,
  ...attrs
}) => {
  const descriptionId = `${id}-description`;
  return (
    <div aria-describedby={description && descriptionId} className="rvt-radio">
      <input id={id} type="radio" {...attrs} />
      <label htmlFor={id}>{label}</label>
      {description && (
        <div id={descriptionId} className="rvt-radio__description">
          {description}
        </div>
      )}
    </div>
  );
};
RadioButton.displayName = "RadioButton";
RadioButton.propTypes = {
  /** Extended description */
  description: PropTypes.string,
  /** A unique identifier for the alert */
  id: PropTypes.string,
  /** Label for the radio button */
  label: PropTypes.string.isRequired,
};

export default RadioButton;
