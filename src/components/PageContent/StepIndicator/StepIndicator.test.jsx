/*
Copyright (C) 2018 The Trustees of Indiana University
SPDX-License-Identifier: BSD-3-Clause
*/
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import React from "react";
import Step from "./Step";
import StepIndicator from "./StepIndicator";
import { TestUtils } from "../../util/TestUtils";

const testIds = TestUtils.StepIndicator;
const customClassName = "custom-style";
const customStepClassName = "custom-style-step";
const label = "step 1";
const indicator = "1";
const url = "/test";

describe("<StepIndicator />", () => {
  describe("Rendering", () => {
    it("should render without throwing an error", () => {
      render(
        <StepIndicator className={customClassName} testMode>
          <li>Step 1</li>
          <li>Step 2</li>
          <li>Step 3</li>
        </StepIndicator>,
      );
      checkRenderContainer();
    });
  });
  describe("Options", () => {
    it("variant not set, renders in horizontal", () => {
      render(
        <StepIndicator className={customClassName} testMode>
          <li>Step 1</li>
          <li>Step 2</li>
          <li>Step 3</li>
        </StepIndicator>,
      );
      checkRenderContainer();
      const container = screen.getByTestId(testIds.container);
      expect(container).not.toHaveClass("rvt-steps--vertical");
    });
    it("variant set to horizontal, renders in horizontal", () => {
      render(
        <StepIndicator
          className={customClassName}
          testMode
          variant="horizontal"
        >
          <li>Step 1</li>
          <li>Step 2</li>
          <li>Step 3</li>
        </StepIndicator>,
      );
      checkRenderContainer();
      const container = screen.getByTestId(testIds.container);
      expect(container).not.toHaveClass("rvt-steps--vertical");
    });
    it("variant set to vertical, renders in vertical", () => {
      render(
        <StepIndicator className={customClassName} testMode variant="vertical">
          <li>Step 1</li>
          <li>Step 2</li>
          <li>Step 3</li>
        </StepIndicator>,
      );
      checkRenderContainer();
      const container = screen.getByTestId(testIds.container);
      expect(container).toHaveClass("rvt-steps--vertical");
    });
    it("default is test mode off", () => {
      render(
        <StepIndicator className={customClassName}>
          <li>Step 1</li>
          <li>Step 2</li>
          <li>Step 3</li>
        </StepIndicator>,
      );
      const element = screen.queryByTestId(testIds.container);
      expect(element).not.toBeInTheDocument();
    });
  });
});

describe("<Step />", () => {
  describe("Rendering", () => {
    it("should render without throwing an error", () => {
      render(
        <ol>
          <Step
            className={customStepClassName}
            indicator={indicator}
            label={label}
            testMode
            url={url}
          />
        </ol>,
      );
      checkRenderStep();
    });
  });
  describe("Options", () => {
    it("variant not set, renders as plain", () => {
      render(
        <ol>
          <Step
            className={customStepClassName}
            indicator={indicator}
            label={label}
            testMode
            url={url}
          />
        </ol>,
      );
      checkRenderStep();
      const container = screen.getByTestId(testIds.step);
      const indicatorElement = container.children[0].children[1];
      expect(indicatorElement).not.toHaveClass("rvt-steps__indicator--success");
      expect(indicatorElement).not.toHaveClass("rvt-steps__indicator--warning");
      expect(indicatorElement).not.toHaveClass("rvt-steps__indicator--danger");
    });
    it("variant set as success, renders as success", () => {
      render(
        <ol>
          <Step
            className={customStepClassName}
            indicator={indicator}
            label={label}
            testMode
            url={url}
            variant="success"
          />
        </ol>,
      );
      checkRenderStep();
      const container = screen.getByTestId(testIds.step);
      const indicatorElement = container.children[0].children[1];
      expect(indicatorElement).toHaveClass("rvt-steps__indicator--success");
      expect(indicatorElement).not.toHaveClass("rvt-steps__indicator--warning");
      expect(indicatorElement).not.toHaveClass("rvt-steps__indicator--danger");
    });
    it("variant set as warning, renders as warning", () => {
      render(
        <ol>
          <Step
            className={customStepClassName}
            indicator={indicator}
            label={label}
            testMode
            url={url}
            variant="warning"
          />
        </ol>,
      );
      checkRenderStep();
      const container = screen.getByTestId(testIds.step);
      const indicatorElement = container.children[0].children[1];
      expect(indicatorElement).not.toHaveClass("rvt-steps__indicator--success");
      expect(indicatorElement).toHaveClass("rvt-steps__indicator--warning");
      expect(indicatorElement).not.toHaveClass("rvt-steps__indicator--danger");
    });
    it("variant set as danger, renders as danger", () => {
      render(
        <ol>
          <Step
            className={customStepClassName}
            indicator={indicator}
            label={label}
            testMode
            url={url}
            variant="danger"
          />
        </ol>,
      );
      checkRenderStep();
      const container = screen.getByTestId(testIds.step);
      const indicatorElement = container.children[0].children[1];
      expect(indicatorElement).not.toHaveClass("rvt-steps__indicator--success");
      expect(indicatorElement).not.toHaveClass("rvt-steps__indicator--warning");
      expect(indicatorElement).toHaveClass("rvt-steps__indicator--danger");
    });
    it("current not set, renders as not current", () => {
      render(
        <ol>
          <Step
            className={customStepClassName}
            indicator={indicator}
            label={label}
            testMode
            url={url}
          />
        </ol>,
      );
      checkRenderStep();
      const container = screen.getByTestId(testIds.step);
      const content = container.children[0];
      expect(content).not.toHaveAttribute("aria-current", "step");
    });
    it("current is set, renders as current", () => {
      render(
        <ol>
          <Step
            className={customStepClassName}
            current
            indicator={indicator}
            label={label}
            testMode
            url={url}
          />
        </ol>,
      );
      checkRenderStep();
      const container = screen.getByTestId(testIds.step);
      const content = container.children[0];
      expect(content).toHaveAttribute("aria-current", "step");
    });
    it("url is set and click not set, renders as link", () => {
      render(
        <ol>
          <Step
            className={customStepClassName}
            indicator={indicator}
            label={label}
            testMode
            url={url}
          />
        </ol>,
      );
      checkRenderStep();
    });
    it("url is set and click is set, renders as link with click action", () => {
      const click = jest.fn();
      render(
        <ol>
          <Step
            className={customStepClassName}
            indicator={indicator}
            label={label}
            onClick={click}
            testMode
            url={url}
          />
        </ol>,
      );
      checkRenderStep();
      const container = screen.getByTestId(testIds.step);
      const content = container.children[0];
      fireEvent.click(content);
      expect(click).toHaveBeenCalled();
    });
    it("default is test mode off", () => {
      render(
        <ol>
          <Step
            className={customStepClassName}
            indicator={indicator}
            label={label}
            url={url}
          />
        </ol>,
      );
      const element = screen.queryByTestId(testIds.step);
      expect(element).not.toBeInTheDocument();
    });
  });
});

const checkRenderContainer = () => {
  const container = screen.getByTestId(testIds.container);
  expect(container).toBeVisible();
  expect(container).toHaveClass("rvt-steps");
  expect(container).toHaveClass(customClassName);
  expect(container.children.length).toBe(3);
};

const checkRenderStep = () => {
  const container = screen.getByTestId(testIds.step);
  expect(container).toBeVisible();
  expect(container).toHaveClass("rvt-steps__item");
  expect(container).toHaveClass(customStepClassName);
  expect(container.children.length).toBe(1);
  const action = container.children[0];
  expect(action.nodeName).toBe("A");
  expect(action).toHaveClass("rvt-steps__item-content");
  expect(action).toHaveAttribute("href", url);
  expect(action.children.length).toBe(2);
  const labelElement = action.children[0];
  const indicatorElement = action.children[1];
  expect(labelElement).toHaveClass("rvt-steps__label");
  expect(labelElement.innerHTML).toBe(label);
  expect(indicatorElement).toHaveClass("rvt-steps__indicator");
  expect(indicatorElement.innerHTML).toBe(indicator);
};
