/*
Copyright (C) 2018 The Trustees of Indiana University
SPDX-License-Identifier: BSD-3-Clause
*/
import * as React from "react";

import InlineAlert from "../Alert/InlineAlert";
import * as Rivet from "../util/Rivet";
import classNames from "classnames";
import * as PropTypes from "prop-types";

const generateElementClasses = (elementName, variant, grouped) => {
  const validationVariant = variant ? `rvt-validation-${variant}` : "";
  const groupedClassName = grouped ? "rvt-input-group__input" : "";

  let elementClassName = "";
  switch (elementName) {
    case "input":
      elementClassName = "rvt-text-input";
    default:
      elementClassName = `rvt-${elementName}`;
  }

  return classNames(elementClassName, validationVariant, groupedClassName);
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
  /** Element to group at the end of the input */
  appendment: PropTypes.node,
  /** Custom class name for the input element */
  inputClassName: PropTypes.string,
  /** The label for the input */
  label: PropTypes.node.isRequired,
  /** Visibility modifier for the input's label */
  labelVisibility: PropTypes.oneOf(["screen-reader-only"]),
  /** An optional note that will be displayed below the input */
  note: PropTypes.node,
  /** Element to group at the start of the input */
  prependment: PropTypes.node,
  /** Rivet style for inline validation */
  variant: PropTypes.oneOf(["success", "danger", "info", "warning"]),
};

export const renderInput = (
  elementName,
  {
    id = Rivet.shortuid(),
    appendment,
    label,
    labelVisibility,
    note,
    prependment,
    variant,
    className,
    inputClassName,
    ...attrs
  },
) => {
  const noteId = `${id}_note`;
  const grouped = appendment || prependment;

  const inputProps = {
    id,
    "aria-describedby": note ? noteId : "",
    "aria-invalid": variant === "danger",
    ...attrs,
    // We want to apply the inputClassName last so that it can override any other classes in attrs
    className: classNames(
      generateElementClasses(elementName, variant, grouped),
      inputClassName,
    ),
  };

  const inputElement = React.createElement(elementName, inputProps);

  return (
    <div className={classNames(className)}>
      <label
        htmlFor={id}
        className={classNames(
          "rvt-label",
          Rivet.labelVisiblityClass(labelVisibility),
        )}
      >
        {label}
      </label>
      {!grouped && inputElement}
      {grouped && (
        <div className="rvt-input-group">
          {prependment && (
            <div className="rvt-input-group__prepend">{prependment}</div>
          )}
          {inputElement}
          {appendment && (
            <div className="rvt-input-group__append">{appendment}</div>
          )}
        </div>
      )}
      {note && noteFragment(noteId, variant, note)}
    </div>
  );
};
