import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import React from "react";
import CallToAction from "./CallToAction";
import { TestUtils } from "../../util/TestUtils";

const testIds = TestUtils.CallToAction
const content = "test link"
const href = "#"

describe("<CallToAction />", () => {
  describe("Rendering", () => {
    it("should render without throwing an error", () => {
      render(
        <CallToAction href={href} testMode>
          {content}
        </CallToAction>
      );
      renderCheck()
    });

    it("should render without throwing an error", () => {
      render(
        <CallToAction href={href} testMode variant="button">
          {content}
        </CallToAction>
      );
      renderCheck()
      const link = screen.getByTestId(testIds.link);
      expect(link).toHaveClass("rvt-cta--button");
    });
  });
});

const renderCheck = () => {
  const link = screen.getByTestId(testIds.link);
  expect(link).toBeVisible();
  expect(link.nodeName).toBe("A")
  expect(link).toHaveClass("rvt-cta");
  expect(link).toHaveAttribute("href", href)
  expect(link.innerHTML).toBe(content)
}
