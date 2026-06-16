/*
Copyright (C) 2018 The Trustees of Indiana University
SPDX-License-Identifier: BSD-3-Clause
*/
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import React from "react";
import Stat from "./Stat";
import StatGroup from "./StatGroup";
import { TestUtils } from "../../util/TestUtils";

const testIds = TestUtils.Stat;
const image = (
  <div className="rvt-avatar">
    <img
      className="rvt-avatar__image"
      src="https://rivet.iu.edu/img/placeholder/avatar-1.webp"
      alt=""
    />
  </div>
);
const imageStr =
  '<div class="rvt-avatar"><img class="rvt-avatar__image" alt="" src="https://rivet.iu.edu/img/placeholder/avatar-1.webp"></div>';
const value = "100";
const content = "Sample Stat";
const customClassName = "custom-style";

describe("<Stat />", () => {
  describe("Rendering", () => {
    it("should render without throwing an error", () => {
      render(
        <Stat className={customClassName} image={image} testMode value={value}>
          {content}
        </Stat>,
      );
      checkRenderContainer();
      checkRenderImage();
      checkRenderDescription();
      checkRenderNumber();
    });
    it("without image should render without throwing an error", () => {
      render(
        <Stat className={customClassName} testMode value={value}>
          {content}
        </Stat>,
      );
      checkRenderContainer();
      checkRenderDescription();
      checkRenderNumber();
      const image = screen.queryByTestId(testIds.image);
      expect(image).not.toBeInTheDocument();
    });
  });
  describe("Options", () => {
    it("default is test mode off", () => {
      render(
        <Stat className={customClassName} image={image} value={value}>
          {content}
        </Stat>,
      );
      const element = screen.queryByTestId(testIds.container);
      expect(element).not.toBeInTheDocument();
    });
  });
});

describe("<StatGroup />", () => {
  describe("Rendering", () => {
    it("should render without throwing an error", () => {
      render(
        <StatGroup className={customClassName} testMode>
          <Stat value="100">Sample 1</Stat>
          <Stat value="75">Sample 2</Stat>
          <Stat value="50">Sample 3</Stat>
          <Stat value="0">Sample 4</Stat>
        </StatGroup>,
      );
      checkRenderGroup();
      const container = screen.getByTestId(testIds.group);
      expect(container.children.length).toBe(4);
    });
  });
  describe("Options", () => {
    it("default is test mode off", () => {
      render(
        <StatGroup className={customClassName}>
          <Stat value="100">Sample 1</Stat>
          <Stat value="75">Sample 2</Stat>
          <Stat value="50">Sample 3</Stat>
          <Stat value="0">Sample 4</Stat>
        </StatGroup>,
      );
      const element = screen.queryByTestId(testIds.group);
      expect(element).not.toBeInTheDocument();
    });
  });
});

const checkRenderGroup = () => {
  const container = screen.getByTestId(testIds.group);
  expect(container).toBeVisible();
  expect(container).toHaveClass("rvt-stat-group");
  expect(container).toHaveClass(customClassName);
};

const checkRenderContainer = () => {
  const container = screen.getByTestId(testIds.container);
  expect(container).toBeVisible();
  expect(container).toHaveClass("rvt-stat");
  expect(container).toHaveClass(customClassName);
};

const checkRenderImage = () => {
  const image = screen.getByTestId(testIds.image);
  expect(image).toBeVisible();
  expect(image).toHaveClass("rvt-stat__image");
  expect(image.innerHTML).toBe(imageStr);
};

const checkRenderDescription = () => {
  const description = screen.getByTestId(testIds.description);
  expect(description).toBeVisible();
  expect(description).toHaveClass("rvt-stat__description");
  expect(description.innerHTML).toBe(content);
};

const checkRenderNumber = () => {
  const number = screen.getByTestId(testIds.number);
  expect(number).toBeVisible();
  expect(number).toHaveClass("rvt-stat__number");
  expect(number.innerHTML).toBe(value);
};
