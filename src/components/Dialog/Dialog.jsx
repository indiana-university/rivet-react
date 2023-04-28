/*
Copyright (C) 2018 The Trustees of Indiana University
SPDX-License-Identifier: BSD-3-Clause
*/
import classNames from "classnames";
import * as PropTypes from "prop-types";
import * as React from "react";
import { createRef, useEffect } from "react";
import * as Rivet from "../util/Rivet";
import {
  handler,
  isRightMouseClick,
  isTabKeyPress,
  isUnhandledKeyPress,
  targets,
} from "../util/EventUtils.js";
import Button from "../Button/Button.jsx";
import Icon from "../util/RivetIcons.jsx";

const Dialog = ({
  children,
  className,
  id = Rivet.shortuid(),
  align,
  darkenPage,
  disablePageInteraction,
  isOpen,
  onDismiss,
  modal,
  title,
  ...attrs
}) => {
  useEffect(() => {
    handleEventRegistration();
    return () => {
      clickOutsideOrEscapeEventHandler.deregister();
    };
  });

  const handleClickOutsideOrEscape = (event) => {
    if (event && shouldCloseDialog(event)) {
      handleDismiss();
      event.stopPropagation && event.stopPropagation();
    }
  };

  const dialogWrapDiv = createRef();
  const clickOutsideOrEscapeEventHandler = handler(handleClickOutsideOrEscape);

  const shouldCloseDialog = (event) => {
    // If closing is disabled, the user right clicks, presses an unhandled key, presses tab or clicks in the dialog then do not close
    return !(
      isRightMouseClick(event) ||
      isUnhandledKeyPress(event) ||
      isTabKeyPress(event) ||
      targets(dialogWrapDiv.current, event)
    );
  };

  const handleEventRegistration = () => {
    if (isOpen && onDismiss && modal) {
      clickOutsideOrEscapeEventHandler.register();
    } else {
      clickOutsideOrEscapeEventHandler.deregister();
    }
  };

  const dataRvt = {
    ...{ ...(align && { [`data-rvt-dialog-${align}`]: "" }) },
    ...{ ...(darkenPage && { ["data-rvt-dialog-darken-page"]: "" }) },
    ...{
      ...(disablePageInteraction && {
        ["data-rvt-dialog-disable-page-interaction"]: "",
      }),
    },
  };

  const handleDismiss = () => {
    onDismiss && onDismiss();
  };

  return (
    isOpen && (
      <div
        className={classNames("rvt-dialog", className)}
        id={id}
        aria-labelledby={`${id}-title`}
        aria-hidden={!isOpen}
        ref={dialogWrapDiv}
        role="dialog"
        tabIndex={-1}
        {...dataRvt}
        {...attrs}
      >
        {title && (
          <header className="rvt-dialog__header" data-testid="dialogHeader">
            <h1 className="rvt-dialog__title" id={`${id}-title`}>
              {title}
            </h1>
          </header>
        )}
        {children}
        {onDismiss && <DialogCloseButton onDismiss={handleDismiss} />}
      </div>
    )
  );
};

const DialogCloseButton = ({ onDismiss }) => (
  <Button className="rvt-button--plain rvt-dialog__close" onClick={onDismiss}>
    <span className="rvt-sr-only">Close</span>
    <Icon name="close" />
  </Button>
);

Dialog.displayName = "Dialog";
Dialog.propTypes = {
  id: PropTypes.string,
  /** Alignment of Dialog. This suits itself well for the Notification (top-right) and Help Widget (bottom-right) examples in the Rivet documentation */
  align: PropTypes.oneOf([
    "top-left",
    "top-right",
    "bottom-left",
    "bottom-right",
  ]),
  /** Darken the page behind the dialog when it is opened */
  darkenPage: PropTypes.bool,
  /** Disable interaction with the rest of the page while the dialog is open TODO THIS IS NOT IMPLEMENTED YET IN RIVET */
  disablePageInteraction: PropTypes.bool,
  /** Determines whether the dialog is shown or not */
  isOpen: PropTypes.bool,
  /** Function to call to raise when the alert is dismissed. If undefined, no close button will be rendered */
  onDismiss: PropTypes.func,
  /** A modal dialog closes when the user clicks outside the dialog or presses the escape key. This requires onDismiss to be defined, otherwise this does nothing */
  modal: PropTypes.bool,
  /** The content of the dialog's header */
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
};

export default Rivet.rivetize(Dialog);
