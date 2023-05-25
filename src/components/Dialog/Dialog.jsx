/*
Copyright (C) 2018 The Trustees of Indiana University
SPDX-License-Identifier: BSD-3-Clause
*/
import classNames from "classnames";
import * as PropTypes from "prop-types";
import * as React from "react";
import { useEffect } from "react";
import * as Rivet from "../util/Rivet";
import Button from "../Button/Button.jsx";
import Icon from "../util/RivetIcons.jsx";
import {
  handler,
  isRightMouseClick,
  isTabKeyPress,
  isUnhandledKeyPress,
  targets,
} from "../util/EventUtils.js";
import { useDialog } from "@react-aria/dialog";
import { useModalOverlay } from "../../hooks/UseModalOverlay.js";
import { removeProperty } from "../util/RemoveProperty.js";

const Dialog = ({
  children,
  className,
  id = Rivet.shortuid(),
  align,
  closeOnOutsideClickOrEscape,
  darkenPage,
  disablePageInteraction,
  isOpen,
  onDismiss,
  showCloseButton = true,
  title,
  ...attrs
}) => {
  const ref = React.useRef(null);

  useEffect(() => {
    handleEventRegistration();
    return () => {
      clickOutsideOrEscapeEventHandler.deregister();
    };
  }, [isOpen]);

  const { dialogProps, titleProps } = useDialog(
    { id, ["aria-labelledby"]: `${id}-title`, role: "dialog", ...attrs },
    ref
  );

  const { modalProps, underlayProps } = useModalOverlay(
    {
      isDismissable: false, // due to lack of onDismiss callback, use clickOutsideOrEscapeEventHandler
      isKeyboardDismissDisabled: false, // due to lack of onDismiss callback, use clickOutsideOrEscapeEventHandler
      attrs,
    },
    {
      isOpen: isOpen,
      close: onDismiss,
      disablePageInteraction: disablePageInteraction,
    },
    ref
  );

  const handleClickOutsideOrEscape = (event) => {
    if (event && shouldCloseDialog(event)) {
      handleDismiss();
      event.stopPropagation && event.stopPropagation();
    }
  };

  const clickOutsideOrEscapeEventHandler = handler(handleClickOutsideOrEscape);

  const shouldCloseDialog = (event) => {
    // If closing is disabled, the user right clicks, presses an unhandled key, presses tab or clicks in the dialog then do not close
    return !(
      isRightMouseClick(event) ||
      isUnhandledKeyPress(event) ||
      isTabKeyPress(event) ||
      targets(ref.current, event)
    );
  };

  const handleEventRegistration = () => {
    if (isOpen && closeOnOutsideClickOrEscape) {
      clickOutsideOrEscapeEventHandler.register();
    } else {
      clickOutsideOrEscapeEventHandler.deregister();
    }
  };

  const dataRvt = {
    ...{ ...(align && { [`data-rvt-dialog-${align}`]: "" }) },
    ...{ ...(darkenPage && { ["data-rvt-dialog-darken-page"]: "" }) },
  };

  const handleDismiss = () => {
    onDismiss && onDismiss();
  };

  const dialogContent = (overlayProps) => (
    <div
      className={classNames("rvt-dialog", className)}
      aria-hidden={!isOpen}
      hidden={!isOpen}
      ref={ref}
      {...dataRvt}
      {...overlayProps}
    >
      {title && (
        <header className="rvt-dialog__header" data-testid="dialogHeader">
          <h1
            className="rvt-dialog__title"
            id={`${id}-title`}
            {...removeProperty(titleProps, "id")}
          >
            {title}
          </h1>
        </header>
      )}
      {children}
      {onDismiss && showCloseButton && (
        <DialogCloseButton onDismiss={handleDismiss} />
      )}
    </div>
  );

  if (isOpen) {
    if (disablePageInteraction) {
      return (
        <div
          style={{
            position: "fixed",
            zIndex: 100,
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            background: "rgba(0, 0, 0, 0.5)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          data-testid="underlayDiv"
          {...underlayProps}
        >
          {dialogContent(modalProps)}
        </div>
      );
    } else return dialogContent(dialogProps);
  }
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
  /** Whether clicking outside the dialog causes it to dismiss. This requires onDismiss to be passed */
  closeOnOutsideClickOrEscape: PropTypes.bool,
  /** Darken the page behind the dialog when it is opened */
  darkenPage: PropTypes.bool,
  /** Disable interaction with the rest of the page while the dialog is open */
  disablePageInteraction: PropTypes.bool,
  /** Determines whether the dialog is shown or not */
  isOpen: PropTypes.bool,
  /** Function to call to raise when the dialog is dismissed. If undefined, no close button will be rendered */
  onDismiss: PropTypes.func,
  /** Whether or not to render a close button. Note that regardless of this property the close button requires an onDismiss */
  showCloseButton: PropTypes.bool,
  /** The content of the dialog's header */
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
};

export default Rivet.rivetize(Dialog);
