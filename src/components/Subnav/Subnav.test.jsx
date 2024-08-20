import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import React from "react";
import Subnav from "./Subnav";
import { TestUtils } from "../util/TestUtils";

const testIds = TestUtils.Subnav;

const customClassName = "custom-style";
const customItemClassName = "custom-style-item";
const linkLabel = "Test Link";
const linkUrl = "/testlink";

describe("<Subnav />", () => {
  const label = "Subnav Label";
  describe("Rendering", () => {
    it("should render without throwing an error", () => {
      render(
        <Subnav className={customClassName} label={label} testMode>
          <Subnav.Item url="#">Link 1</Subnav.Item>
          <Subnav.Item url="#">Link 1</Subnav.Item>
          <Subnav.Item url="#">Link 3</Subnav.Item>
        </Subnav>
      );
      checkRenderSubnavContainer();
    });
  });

  describe("Options", () => {
    it("default is test mode off", () => {
      render(
        <Subnav className={customClassName} label={label}>
          <Subnav.Item url="#">Link 1</Subnav.Item>
          <Subnav.Item url="#">Link 1</Subnav.Item>
          <Subnav.Item url="#">Link 3</Subnav.Item>
        </Subnav>
      );
      const element = screen.queryByTestId(testIds.container);
      expect(element).not.toBeInTheDocument();
    });
  });
});

describe("<SubnavItem />", () => {
  describe("Rendering", () => {
    it("should render without throwing an error", () => {
      render(
        <Subnav.Item className={customItemClassName} url={linkUrl} testMode>
          {linkLabel}
        </Subnav.Item>
      );
      checkRenderSubnavItemContainer();
      checkRenderSubnavItemLink();
    });

    it("with url, should render without throwing an error", () => {
      render(
        <Subnav.Item className={customItemClassName} testMode>
          {linkLabel}
        </Subnav.Item>
      );
      checkRenderSubnavItemContainer();
      const element = screen.getByTestId(testIds.itemContainer);
      expect(element.innerHTML).toBe(linkLabel);
    });
  });
  describe("Options", () => {
    it("item is set as current", () => {
      render(
        <Subnav.Item
          className={customItemClassName}
          current
          url={linkUrl}
          testMode
        >
          {linkLabel}
        </Subnav.Item>
      );
      checkRenderSubnavItemContainer();
      checkRenderSubnavItemLink();
      const element = screen.getByTestId(testIds.itemLink);
      expect(element).toHaveAttribute("aria-current", "page");
    });

    it("with url, additional attributes on link", () => {
      render(
        <Subnav.Item
          className={customItemClassName}
          url={linkUrl}
          testattr="test"
          testMode
        >
          {linkLabel}
        </Subnav.Item>
      );
      checkRenderSubnavItemContainer();
      checkRenderSubnavItemLink();
      const element = screen.getByTestId(testIds.itemContainer);
      expect(element).not.toHaveAttribute("testattr", "test");

      const linkElement = screen.getByTestId(testIds.itemLink);
      expect(linkElement).toHaveAttribute("testattr", "test");
    });

    it("without url, additional attributes on container", () => {
      render(
        <Subnav.Item className={customItemClassName} testattr="test" testMode>
          {linkLabel}
        </Subnav.Item>
      );
      checkRenderSubnavItemContainer();
      const element = screen.getByTestId(testIds.itemContainer);
      expect(element).toHaveAttribute("testattr", "test");
    });

    it("default is test mode off", () => {
      render(<Subnav.Item label="Link 1" url="#" />);
      const element = screen.queryByTestId(testIds.container);
      expect(element).not.toBeInTheDocument();
    });
  });
});

const checkRenderSubnavContainer = () => {
  const element = screen.getByTestId(testIds.container);
  expect(element.nodeName).toBe("NAV");
  expect(element).toBeVisible();
  expect(element).toHaveClass("rvt-subnav");
  expect(element).toHaveClass(customClassName);
  expect(element.children.length).toBe(1);
  expect(element.children[0].children.length).toBe(3);
};

const checkRenderSubnavItemContainer = () => {
  const element = screen.getByTestId(testIds.itemContainer);
  expect(element.nodeName).toBe("LI");
  expect(element).toBeVisible();
  expect(element).toHaveClass("rvt-subnav__item");
  expect(element).toHaveClass(customItemClassName);
};

const checkRenderSubnavItemLink = () => {
  const element = screen.getByTestId(testIds.itemLink);
  expect(element.nodeName).toBe("A");
  expect(element).toBeVisible();
  expect(element).toHaveAttribute("href", linkUrl);
  expect(element.innerHTML).toBe(linkLabel);
};
