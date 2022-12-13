/*
Copyright (C) 2018 The Trustees of Indiana University
SPDX-License-Identifier: BSD-3-Clause
*/
import * as React from "react";

import InlineAlert from "../Alert/InlineAlert";
import * as Rivet from "../util/Rivet";
import classNames from "classnames";
import * as PropTypes from "prop-types";

const inputClassName = (elementName, variant) => {
  const validationVariant = variant ? `rvt-validation-${variant}` : "";

  switch (elementName) {
    case "input":
      return classNames("rvt-text-input", validationVariant);
    default:
      return classNames(`rvt-${elementName}`, validationVariant);
  }
};

const noteFragment = (id, variant, note) =>
  variant ? (
    <InlineAlert id={id} variant={variant}>
      {note}
    </InlineAlert>
  ) : (
    <small id={id} className="rvt-display-block">
      {note}
    </small>
  );

export const propTypes = {
  /** The label for the input */
  label: PropTypes.string.isRequired,
  /** Visibility modifier for the input's label */
  labelVisibility: PropTypes.oneOf(["screen-reader-only"]),
  /** An optional note that will be displayed below the input */
  note: PropTypes.node,
  /** Rivet style for inline validation */
  variant: PropTypes.oneOf(["success", "danger", "info", "warning"]),
};

export const renderInput = (
  elementName,
  {
    id = Rivet.shortuid(),
    label,
    labelVisibility,
    note,
    variant,
    className,
    ...attrs
  }
) => {
  const noteId = `${id}_note`;
  const inputProps = {
    id,
    className: inputClassName(elementName, variant),
    "aria-describedby": note ? noteId : "",
    "aria-invalid": variant === "danger",
    ...attrs,
  };
  return (
    <div className={classNames(className)}>
      <label
        htmlFor={id}
        className={classNames(
          "rvt-label",
          Rivet.labelVisiblityClass(labelVisibility)
        )}
      >
        {label}
      </label>
      {React.createElement(elementName, inputProps)}
      {note && noteFragment(noteId, variant, note)}
    </div>
  );
};
