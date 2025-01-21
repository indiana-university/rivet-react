/*
Copyright (C) 2018 The Trustees of Indiana University
SPDX-License-Identifier: BSD-3-Clause
*/
import classNames from "classnames";
import * as React from "react";
import * as PropTypes from "prop-types";

import * as Rivet from "../util/Rivet";

/**
 * Use the checkbox component to allow users to select zero, one, or many options from a list of choices
 */
const Checkbox = ({
  description,
  id = Rivet.shortuid(),
  label,
  labelVisibility = true,
  className,
  children,
  ...attrs
}) => {
  const descriptionId = `${id}-description`;
  return (
    <div
      aria-describedby={description && descriptionId}
      className={classNames(
        "rvt-checkbox",
        !labelVisibility && "rvt-checkbox--sr-only-label",
        className,
      )}
    >
      <input id={id} type="checkbox" {...attrs} />
      <label htmlFor={id}>{label}</label>
      {description && (
        <div id={descriptionId} className="rvt-checkbox__description">
          {description}
        </div>
      )}
    </div>
  );
};
Checkbox.displayName = "Checkbox";
Checkbox.propTypes = {
  /** Extended description */
  description: PropTypes.string,
  /** A unique identifier for the alert */
  id: PropTypes.string,
  /** Label for the checkbox */
  label: PropTypes.node.isRequired,
  /** Whether to display the label in non-screen-reader contexts */
  labelVisibility: PropTypes.bool,
};

export default Rivet.rivetize(Checkbox);
