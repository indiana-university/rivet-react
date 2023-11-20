import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import React from "react";
import Disclosure from "./Disclosure";
import { TestUtils } from "../../util/TestUtils.js";
import userEvent from "@testing-library/user-event";

const user = userEvent.setup();

describe("<Disclosure />", () => {
  const disclosureTestId = "test-disclosure";
  const title = "Test Title";
  const child = "Test Child";

  describe("Rendering", () => {
    it("should render without throwing an error", () => {
      render(
        <Disclosure data-testid={disclosureTestId} title={title}>
          {child}
        </Disclosure>
      );
      const disclosure = screen.getByTestId(disclosureTestId, {});
      expect(disclosure).toBeVisible();
      expect(disclosure).toHaveClass("rvt-disclosure");

      const button = screen.getByRole("button", {});
      expect(button).toBeVisible();
      expect(button).toHaveClass("rvt-disclosure__toggle");

      expect(
        screen.queryByTestId(TestUtils.Disclosure.testId, {})
      ).not.toBeInTheDocument();
    });
  });

  describe("Rendering with isOpen", () => {
    it("should have visible content with isOpen", async () => {
      render(
        <Disclosure title={title} isOpen={true}>
          {child}
        </Disclosure>
      );

      const children = screen.queryByTestId(TestUtils.Disclosure.testId, {});
      expect(children).toBeVisible();
      expect(children).toHaveClass("rvt-disclosure__content");
    });
  });

  describe("Toggle behavior", () => {
    it("should have a button that toggles visibility", async () => {
      render(<Disclosure title={title}>{child}</Disclosure>);

      await user.click(screen.getByRole("button", {}));
      const button = screen.getByRole("button", {});
      const children = screen.queryByTestId(TestUtils.Disclosure.testId, {});
      expect(children).toBeVisible();
      expect(children).toHaveClass("rvt-disclosure__content");
      expect(button).toHaveAttribute("aria-expanded", "true");
      expect(screen.queryByText(child, {})).toBeVisible();

      await user.click(screen.getByRole("button", {}));
      expect(button).toHaveAttribute("aria-expanded", "false");
      expect(
        screen.queryByTestId(TestUtils.Disclosure.testId, {})
      ).not.toBeInTheDocument();
      expect(screen.queryByText(child, {})).not.toBeInTheDocument();
    });
  });

  describe("Toggle closeClickOutside behavior", () => {
    it("clicking outside should not close the Disclosure when closeClickOutside=false", async () => {
      render(
        <React.Fragment>
          <div data-testid={disclosureTestId}>Outside element</div>
          <Disclosure title={title} isOpen={true}>
            {child}
          </Disclosure>
        </React.Fragment>
      );

      expect(screen.queryByText(child, {})).toBeVisible();
      await user.click(screen.getByTestId(disclosureTestId, {}));
      expect(screen.queryByText(child, {})).toBeVisible();
    });

    it("clicking outside should close the Disclosure when closeClickOutside=true", async () => {
      render(
        <React.Fragment>
          <div data-testid={disclosureTestId}>Outside element</div>
          <Disclosure title={title} isOpen={true} closeClickOutside={true}>
            {child}
          </Disclosure>
        </React.Fragment>
      );

      expect(screen.queryByText(child, {})).toBeVisible();
      await user.click(screen.getByTestId(disclosureTestId, {}));
      expect(screen.queryByText(child, {})).not.toBeInTheDocument();
    });

    it("clicking inside or a button should not close the Disclosure when closeClickOutside=true", async () => {
      render(
        <React.Fragment>
          <div data-testid={disclosureTestId}>Outside element</div>
          <Disclosure title={title} isOpen={true} closeClickOutside={true}>
            {child}
          </Disclosure>
        </React.Fragment>
      );

      expect(screen.queryByText(child, {})).toBeVisible();
      await user.click(screen.queryByText(child, {}));
      fireEvent.keyUp(document.body, {
        key: "Escape",
      });
      fireEvent.keyUp(document.body, {
        key: "Tab",
      });
      expect(screen.queryByText(child, {})).toBeVisible();
    });
  });
});
