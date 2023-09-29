/*
Copyright (C) 2018 The Trustees of Indiana University
SPDX-License-Identifier: BSD-3-Clause
*/
import classNames from "classnames";
import * as PropTypes from "prop-types";
import * as React from "react";
import { useEffect } from "react";
import { createPortal } from "react-dom";
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
import { TestUtils } from "../util/TestUtils.js";

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

  const handleDismiss = () => {
    onDismiss && onDismiss();
  };

  const clickBackdropToDismiss = (event) => {
    if (!ref.current.querySelector(".rvt-dialog").contains(event.target)) {
      ref.current.close();
    }
  };

  useEffect(() => {
    if (isOpen) {
      ref.current.showModal();
    }
  }, [isOpen]);

  useEffect(() => {
    ref.current.addEventListener("close", handleDismiss);
    return () => ref.current.removeEventListener("close", handleDismiss);
  }, []);

  useEffect(() => {
    ref.current.addEventListener("click", clickBackdropToDismiss);
    return () =>
      ref.current.removeEventListener("click", clickBackdropToDismiss);
  }, []);

  /*
  useEffect(() => {
    handleEventRegistration();
    return () => {
      clickOutsideOrEscapeEventHandler.deregister();
    };
  }, [isOpen]);

  const { dialogProps, titleProps } = useDialog(
    // The props provided to useDialog are specified by this type:
    // https://github.com/adobe/react-spectrum/blob/98cad3f064c5302c04a1140d12a2cacc3ee921a2/packages/%40react-types/dialog/src/index.d.ts#L57
    { id, ["aria-labelledby"]: `${id}-title`, role: "dialog", ...attrs },
    ref
  );

  const { modalProps, underlayProps } = useModalOverlay(
    // The props provided to useModalOverlay are specified by this type:
    // https://github.com/adobe/react-spectrum/blob/98cad3f064c5302c04a1140d12a2cacc3ee921a2/packages/%40react-types/dialog/src/index.d.ts#L41
    // with a rivet-react2 tweak, isDisabled should respect state.disablePageInteraction. See ../../hooks/UseModalOverlay.js
    {
      isDismissable: false, // using clickOutsideOrEscapeEventHandler
      isKeyboardDismissDisabled: false, // using clickOutsideOrEscapeEventHandler
      attrs,
    },
    {
      isOpen: isOpen,
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

  // data rivet elements that add CSS styling
  const dataRvt = {
    ...{ ...(align && { [`data-rvt-dialog-${align}`]: "" }) },
    ...{ ...(darkenPage && { ["data-rvt-dialog-darken-page"]: "" }) },
  };
*/

  // helper that takes either the react-spectrum modal or dialog props as defined per useDialog and useModalOverlay above
  return (
    <dialog aria-labelledby={title ? `${id}-title` : null} ref={ref}>
      <style>{`
        dialog::backdrop {
          background-color: rgba(36, 49, 66, .85);
        }
      `}</style>
      <div className={classNames("rvt-dialog", className)}>
        {title && (
          <header
            className="rvt-dialog__header"
            data-testid={TestUtils.Dialog.dialogHeaderTestId}
          >
            <h1 className="rvt-dialog__title" id={`${id}-title`}>
              {title}
            </h1>
          </header>
        )}
        {children}
        {onDismiss && showCloseButton && (
          <DialogCloseButton onDismiss={handleDismiss} />
        )}
      </div>
    </dialog>
  );

  /*
  if (isOpen) {
    // If page interaction is disabled, we need to render the modal dialog content inside a fixed div which takes up the
    // entire screen, otherwise just render the dialog content

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
            pointerEvents: 'none'
          }}
          data-testid={TestUtils.Dialog.underlayDivTestId}
          {...underlayProps}
        >
          {dialogContent(modalProps)}
        </div>
      );
    } else return dialogContent(dialogProps);

    return createPortal(
      dialogContent(dialogProps),
      document.body
    );
  }
  */
};

const DialogCloseButton = ({ onDismiss }) => (
  <Button className="rvt-button--plain rvt-dialog__close" onClick={onDismiss}>
    <Icon name="close" />
    <span className="rvt-sr-only">Close</span>
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
  /** Whether clicking outside the dialog or pressing escape causes it to dismiss. Setting this value to true requires onDismiss to be passed */
  closeOnOutsideClickOrEscape: PropTypes.bool,
  /** Darken the page behind the dialog when it is opened */
  darkenPage: PropTypes.bool,
  /** Disable interaction with the rest of the page while the dialog is open */
  disablePageInteraction: PropTypes.bool,
  /** Determines whether the dialog is shown or not */
  isOpen: PropTypes.bool,
  /** Function to call to raise when the dialog is dismissed */
  onDismiss: PropTypes.func,
  /** Whether or not to render a close button. Setting this value to true requires onDismiss to be passed */
  showCloseButton: PropTypes.bool,
  /** The content of the dialog's header */
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
};

export default Rivet.rivetize(Dialog);
