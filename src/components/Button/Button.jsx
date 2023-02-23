/*
Copyright (C) 2018 The Trustees of Indiana University
SPDX-License-Identifier: BSD-3-Clause
*/
import classNames from "classnames";
import * as PropTypes from "prop-types";
import * as React from "react";
import * as Rivet from "../util/Rivet";
import { LoadingIndicator } from "../LoadingIndicator/index.jsx";

const buttonClass = "rvt-button";

/**
 * Generate the combined modifier and variation class for this button, if applicable.
 * @see https://rivet.uits.iu.edu/components/forms/buttons/#secondary-variations
 */
const buttonStyle = (variant, loading, modifier) => {
  // special case for navigation variant
  if (variant === "navigation") {
    return "rvt-dropdown__toggle";
  }
  // special case for loading variant
  if (loading === true) {
    return "rvt-button rvt-button--loading";
  }
  // combine variation and modifier, if provided.
  const classParts = [variant, modifier].filter((x) => x).join("-");
  return classParts
    ? `${buttonClass} ${buttonClass}--${classParts}`
    : buttonClass;
};

/**
 * Generate the size class for this button, if applicable.
 * @see https://rivet.uits.iu.edu/components/forms/buttons/#small-buttons
 */
const buttonSize = (size) => (size ? `${buttonClass}--${size}` : undefined);

const Button = ({
  className,
  children,
  id = Rivet.shortuid(),
  loading,
  innerRef,
  modifier,
  onClick,
  size,
  variant,
  ...attrs
}) => (
  <button
    id={id}
    className={classNames(
      buttonStyle(variant, loading, modifier),
      buttonSize(size),
      className
    )}
    onClick={onClick}
    ref={innerRef}
    disabled={loading}
    aria-busy={loading}
    {...attrs}
  >
    <span className="rvt-button__content" role="buttonContent">
      {children}
    </span>
    {loading && <LoadingIndicator size="xs" />}
  </button>
);

Button.displayName = "Button";
Button.propTypes = {
  variant: PropTypes.oneOf(["success", "danger", "plain", "navigation"]),
  size: PropTypes.oneOf(["small"]),
  role: PropTypes.oneOf(["secondary"]),
  innerRef: PropTypes.any,
  id: PropTypes.string,
  loading: PropTypes.bool,
};

export default Rivet.rivetize(Button);
