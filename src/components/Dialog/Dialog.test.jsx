/*
Copyright (C) 2018 The Trustees of Indiana University
SPDX-License-Identifier: BSD-3-Clause
*/
import * as React from "react";

import { Button } from "../Button";
import Dialog from "./Dialog";
import DialogBody from "./DialogBody";
import DialogControls from "./DialogControls";
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("<Dialog />", () => {
  const defaultTitle = "dialog title";
  const defaultChildren = (
    <React.Fragment>
      <DialogBody>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </DialogBody>
      <DialogControls>
        <Button>OK</Button>
      </DialogControls>
    </React.Fragment>
  );

  const component = (overrides = {}) => {
    const defaults = {
      title: defaultTitle,
      isOpen: true,
      children: defaultChildren,
    };
    const { children, ...props } = { ...defaults, ...overrides };
    return <Dialog {...props}>{children}</Dialog>;
  };

  const pressEscapeKey = () =>
    fireEvent.keyUp(document.body, {
      key: "Escape",
    });

  describe("Render and Structure", () => {
    it("renders without throwing an error", () => {
      render(component());
      expect(screen.getByRole("dialog", {})).toBeVisible();
    });

    it("uses the passed in id prop if available", () => {
      const id = "the_id";
      render(component({ id }));
      expect(screen.getByRole("dialog", {})).toHaveProperty("id", id);
    });

    it("generates an id prop if none is passed in", () => {
      render(component());
      expect(screen.getByRole("dialog", {})).toHaveProperty("id");
    });

    it("should have the correct structure", async () => {
      render(component());
      expect(screen.getByRole("dialog", {})).toHaveClass("rvt-dialog");
      expect(screen.getByTestId("dialogHeader", {})).toHaveClass(
        "rvt-dialog__header"
      );
      expect(await screen.findByText(defaultTitle, {})).toHaveClass(
        "rvt-dialog__title"
      );
    });

    it("should add any classnames passed to the outer div", () => {
      const className = "foo";
      render(component({ className }));
      expect(screen.getByRole("dialog", {})).toHaveClass(className);
    });

    it("should display the title", async () => {
      render(component());
      expect(await screen.findByText(defaultTitle, {})).toBeVisible();
    });

    it("should update if a prop changes", async () => {
      const renderer = render(component({ title: defaultTitle }));
      expect(await screen.findByText(defaultTitle, {})).toBeVisible();
      const newTitle = "new title";
      renderer.rerender(component({ title: newTitle }));
      expect(await screen.findByText(newTitle, {})).toBeVisible();
    });

    it("should not display the title if it was not provided", () => {
      render(component({ title: null }));
      expect(screen.queryByText(defaultTitle, {})).toBeNull();
    });

    it("should have an aria-labelledby that matches the h1 id", async () => {
      render(component());
      const ariaLabelledby = screen
        .getByRole("dialog", {})
        .getAttribute("aria-labelledby");
      expect(await screen.findByText(defaultTitle, {})).toHaveProperty(
        "id",
        ariaLabelledby
      );
    });

    it("should not have hidden attributes if isOpen is true", () => {
      render(component());
      expect(screen.queryByText(defaultTitle, {})).not.toBeNull();
      expect(screen.getByRole("dialog", {})).toHaveAttribute(
        "aria-hidden",
        "false"
      );
      expect(screen.getByRole("dialog", {})).not.toHaveAttribute("hidden");
    });

    it("should not have rendered if isOpen is false", async () => {
      render(component({ isOpen: false }));
      expect(screen.queryByText(defaultTitle, {})).toBeNull();
    });

    it("should show its children after the header", () => {
      render(component());
      const dialog = screen.getByRole("dialog", {});
      expect(dialog.children.length).toBe(3);
      expect(dialog.children[0].nodeName).toBe("HEADER");
      expect(dialog.children[1].className).toBe("rvt-dialog__body");
      expect(dialog.children[2].className).toBe("rvt-dialog__controls");
    });

    it("should have a close button if an onDismiss prop is provided", () => {
      render(component({ onDismiss: () => {} }));
      const button = screen.queryByText("Close", {}).parentNode;
      expect(button).toBeVisible();
      expect(button).toHaveClass("rvt-dialog__close");
    });

    it("should not have a close button if an onDismiss prop is not provided", () => {
      render(component());
      expect(screen.queryByText("Close", {})).toBeNull();
    });

    it("should have a close button if an onDismiss prop is and showCloseButton is true", () => {
      render(component({ onDismiss: () => {}, showCloseButton: true }));
      const button = screen.queryByText("Close", {}).parentNode;
      expect(button).toBeVisible();
      expect(button).toHaveClass("rvt-dialog__close");
    });

    it("should not have a close button if an onDismiss prop is not provided and showCloseButton is false", () => {
      render(component({ showCloseButton: false }));
      expect(screen.queryByText("Close", {})).toBeNull();
    });

    it("should not have a close button if an onDismiss prop is provided but showCloseButton is false", () => {
      render(component({ onDismiss: () => {}, showCloseButton: false }));
      expect(screen.queryByText("Close", {})).toBeNull();
    });
  });

  describe("align Behavior", () => {
    it("should not align the dialog if property not present", () => {
      render(component());
      expect(screen.getByRole("dialog", {})).not.toHaveAttribute(
        "data-rvt-dialog"
      );
    });

    const alignmentHelper = (align) => {
      it(`should align ${align} the dialog if property present`, () => {
        render(component({ align: align }));
        expect(screen.getByRole("dialog", {})).toHaveAttribute(
          `data-rvt-dialog-${align}`
        );
      });
    };
    alignmentHelper("top-left");
    alignmentHelper("top-right");
    alignmentHelper("bottom-left");
    alignmentHelper("bottom-right");
  });

  describe("darkenPage Behavior", () => {
    it("should not darken the page if property not true", () => {
      render(component());
      expect(screen.getByRole("dialog", {})).not.toHaveAttribute(
        "data-rvt-dialog-darken-page"
      );
    });

    it("should darken the page if property true", () => {
      render(component({ darkenPage: true }));
      expect(screen.getByRole("dialog", {})).toHaveAttribute(
        "data-rvt-dialog-darken-page"
      );
    });
  });

  describe("disablePageInteraction Behavior", () => {
    it("should not disable page interaction if property not true", () => {
      render(component());
      expect(screen.queryByTestId("underlayDiv", {})).toBeNull();
    });

    it("should disable page interaction if property true", () => {
      render(component({ disablePageInteraction: true }));
      expect(screen.getByTestId("underlayDiv", {})).toBeDefined();
    });
  });

  describe("onDismiss and closeOnOutsideClickOrEscape Behavior", () => {
    it("should call the onDismiss function if the close button is clicked", () => {
      const onDismiss = jest.fn();
      render(component({ onDismiss }));
      const button = screen.queryByText("Close", {}).parentNode;
      button.click();
      expect(onDismiss).toHaveBeenCalledTimes(1);
    });

    it("should call onDismiss function if closeOnOutsideClickOrEscape is true, user hits the escape key and the dialog is open", () => {
      const onDismiss = jest.fn();
      render(component({ onDismiss, closeOnOutsideClickOrEscape: true }));
      pressEscapeKey();
      expect(onDismiss).toHaveBeenCalledTimes(1);
    });

    it("should not call onDismiss function if the user hits the escape key and closeOnOutsideClickOrEscape is false", () => {
      const onDismiss = jest.fn();
      render(component({ onDismiss, closeOnOutsideClickOrEscape: false }));
      pressEscapeKey();
      expect(onDismiss).toHaveBeenCalledTimes(0);
    });

    it("should not call onDismiss function if the user hits the escape key and the dialog is not open", () => {
      const onDismiss = jest.fn();
      render(
        component({
          onDismiss,
          closeOnOutsideClickOrEscape: true,
          isOpen: false,
        })
      );
      pressEscapeKey();
      expect(onDismiss).toHaveBeenCalledTimes(0);
    });

    it("should call onDismiss if the dialog is open and the user clicks outside of the dialog", () => {
      const onDismiss = jest.fn();
      render(component({ onDismiss, closeOnOutsideClickOrEscape: true }));
      document.body.click();
      expect(onDismiss).toHaveBeenCalledTimes(1);
    });

    it("should not call onDismiss if the user taps an unhandled key", () => {
      const onDismiss = jest.fn();
      render(component({ onDismiss, closeOnOutsideClickOrEscape: true }));
      fireEvent.keyUp(document.body, {
        key: "a",
      });

      expect(onDismiss).toHaveBeenCalledTimes(0);
    });

    it("should not call onDismiss if the user clicks inside the dialog", () => {
      const onDismiss = jest.fn();
      render(component({ onDismiss, closeOnOutsideClickOrEscape: true }));
      screen.queryByText(defaultTitle, {}).click();
      expect(onDismiss).toHaveBeenCalledTimes(0);
    });
  });

  describe("Event Handler Registration", () => {
    beforeEach(() => {
      jest.spyOn(document, "addEventListener", null);
      jest.spyOn(document, "removeEventListener", null);
    });

    afterEach(() => {
      jest.restoreAllMocks();
    });

    it("should register event handlers when it is mounted if there is an onDismiss, closeOnOutsideClickOrEscape=true and the dialog is open", () => {
      const onDismiss = () => {};
      expect(document.addEventListener).toHaveBeenCalledTimes(0);
      render(component({ onDismiss, closeOnOutsideClickOrEscape: true }));
      expect(document.addEventListener).toHaveBeenCalled();
    });

    it("should not register event handlers when it is mounted if the dialog is closed", () => {
      const onDismiss = () => {};
      expect(document.addEventListener).toHaveBeenCalledTimes(0);
      render(component({ isOpen: false, onDismiss }));
      expect(document.addEventListener).toHaveBeenCalledTimes(0);
    });

    it("should not register event handlers when it is mounted if there is no onDismiss", () => {
      expect(document.addEventListener).toHaveBeenCalledTimes(0);
      render(component({ closeOnOutsideClickOrEscape: true }));
      expect(document.addEventListener).toHaveBeenCalledTimes(0);
    });

    it("should not register event handlers when it is mounted if closeOnOutsideClickOrEscape=false", () => {
      const onDismiss = () => {};
      expect(document.addEventListener).toHaveBeenCalledTimes(0);
      render(component({ onDismiss }));
      expect(document.addEventListener).toHaveBeenCalledTimes(0);
    });

    it("should register and unregister event handlers as isOpen changes", () => {
      const onDismiss = () => {};
      expect(document.addEventListener).toHaveBeenCalledTimes(0);
      render(component({ onDismiss, closeOnOutsideClickOrEscape: true }));
      expect(document.addEventListener).toHaveBeenCalledTimes(3);
      const button = screen.queryByText("Close", {}).parentNode;
      button.click();
      setTimeout(function () {
        expect(document.removeEventListener).toHaveBeenCalledTimes(3);
      }, 10);
    });
  });
});
