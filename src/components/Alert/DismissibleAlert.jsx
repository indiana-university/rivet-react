/*
Copyright (C) 2018 The Trustees of Indiana University
SPDX-License-Identifier: BSD-3-Clause
*/
import * as PropTypes from "prop-types";
import React, { useState } from "react";

import * as Rivet from "../util/Rivet";
import Alert from "./Alert";

/** The `DismissibleAlert` allows the user to remove the alert from view. This component provides a close button and implements visibility state management for a standard `Alert`. */
const DismissibleAlert = ({
  id = Rivet.shortuid(),
  onDismiss = () => {},
  title,
  variant,
  ...other
}) => {
  const [isOpen, setOpen] = useState(true);

  const handleDismiss = () => {
    setOpen(false);
    onDismiss && onDismiss();
  };

  return (
    <Alert
      title={title}
      variant={variant}
      onDismiss={handleDismiss}
      isOpen={isOpen}
      {...other}
    />
  );
};

DismissibleAlert.displayName = "DismissableAlert";
DismissibleAlert.propTypes = {
  /** A unique identifier for the alert */
  id: PropTypes.string,
  /** A function that can be called to have side-effects when the alert is dismissed */
  onDismiss: PropTypes.func,
  /** An extremely brief title for the alert */
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired,
  /** The variant type which determines how the alert is styled */
  variant: PropTypes.oneOf(["info", "success", "warning", "danger"]).isRequired,
};

export default DismissibleAlert;
