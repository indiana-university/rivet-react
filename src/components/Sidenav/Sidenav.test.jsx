/*
Copyright (C) 2018 The Trustees of Indiana University
SPDX-License-Identifier: BSD-3-Clause
*/
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import React from "react";
import Sidenav from "./Sidenav";
import { TestUtils } from "../util/TestUtils";
import SidenavItem from "./SidenavItem";
const testIds = TestUtils.Sidenav;

const customClassName = "custom-style";
const sideNavLabel = "Test Label";
const sideNavId = "nav-1";
const itemLink = "/test";
const itemLabel = "link 1";

describe("<Sidenav />", () => {
  describe("Rendering", () => {
    it("should render without throwing an error", () => {
      render(
        <Sidenav
          className={customClassName}
          label={sideNavLabel}
          id={sideNavId}
          testMode
        >
          <Sidenav.Item url="#">Link 1</Sidenav.Item>
          <Sidenav.Item url="#">Link 1</Sidenav.Item>
          <Sidenav.Item url="#">Link 3</Sidenav.Item>
        </Sidenav>
      );
      checkRenderSidenavContainer();
    });
  });

  describe("Options", () => {
    it("if no Id is set a default is generated", () => {
      render(
        <Sidenav className={customClassName} label={sideNavLabel} testMode>
          <Sidenav.Item url="#">Link 1</Sidenav.Item>
          <Sidenav.Item url="#">Link 1</Sidenav.Item>
          <Sidenav.Item url="#">Link 3</Sidenav.Item>
        </Sidenav>
      );
      const element = screen.queryByTestId(testIds.container);
      const ariaLabel = element.getAttribute("aria-labelledby");
      expect(ariaLabel).toContain("-sidenav-label");
      expect(element.children[0]).toHaveAttribute("id", ariaLabel);
    });

    it("default is test mode off", () => {
      render(
        <Sidenav
          className={customClassName}
          label={sideNavLabel}
          id={sideNavId}
        >
          <Sidenav.Item url="#">Link 1</Sidenav.Item>
          <Sidenav.Item url="#">Link 1</Sidenav.Item>
          <Sidenav.Item url="#">Link 3</Sidenav.Item>
        </Sidenav>
      );
      const element = screen.queryByTestId(testIds.container);
      expect(element).not.toBeInTheDocument();
    });
  });
});

describe("<SidenavItem />", () => {
  describe("Rendering", () => {
    it("should render without throwing an error", () => {
      render(
        <Sidenav.Item className={customClassName} testMode url={itemLink}>
          {itemLabel}
        </Sidenav.Item>
      );
      checkRenderSidenavItem();
      checkRenderSidenavItemLink();
    });
    it("without url, should render without throwing an error", () => {
      render(
        <Sidenav.Item className={customClassName} testMode>
          {itemLabel}
        </Sidenav.Item>
      );
      checkRenderSidenavItem();
      const element = screen.getByTestId(testIds.item);
      expect(element.innerHTML).toBe(itemLabel);
    });
  });

  describe("Options", () => {
    it("current page is set", () => {
      render(
        <Sidenav.Item
          className={customClassName}
          current
          testMode
          url={itemLink}
        >
          {itemLabel}
        </Sidenav.Item>
      );
      checkRenderSidenavItem();
      checkRenderSidenavItemLink();
      const element = screen.getByTestId(testIds.item);
      const linkElement = element.children[0];
      expect(linkElement).toHaveAttribute("aria-current", "page");
    });
    it("current page is not set", () => {
      render(
        <Sidenav.Item className={customClassName} testMode url={itemLink}>
          {itemLabel}
        </Sidenav.Item>
      );
      checkRenderSidenavItem();
      checkRenderSidenavItemLink();
      const element = screen.getByTestId(testIds.item);
      const linkElement = element.children[0];
      expect(linkElement).not.toHaveAttribute("aria-current", "page");
    });
    it("default is test mode off", () => {
      render(
        <Sidenav.Item className={customClassName} url={itemLink}>
          {itemLabel}
        </Sidenav.Item>
      );
      const element = screen.queryByTestId(testIds.item);
      expect(element).not.toBeInTheDocument();
    });
  });
});

describe("<SidenavMenu />", () => {
  describe("Rendering", () => {
    it("should render without throwing an error", () => {
      render(
        <Sidenav.Menu
          className={customClassName}
          label={itemLabel}
          testMode
          url={itemLink}
        >
          <Sidenav.Item testMode url="#">
            Link 1
          </Sidenav.Item>
          <Sidenav.Item testMode url="#">
            Link 2
          </Sidenav.Item>
          <Sidenav.Item testMode url="#">
            Link 3
          </Sidenav.Item>
        </Sidenav.Menu>
      );
      checkRenderSidenavMenu();
      const menuLabel = screen.getByTestId(testIds.menuLabel);
      expect(menuLabel.nodeName).toBe("A");
      expect(menuLabel).toBeVisible();
      expect(menuLabel).toHaveClass("rvt-sidenav__link");
      expect(menuLabel).toHaveAttribute("href", itemLink);
      expect(menuLabel.innerHTML).toBe(itemLabel);
    });
    it("without url, should render without throwing an error", () => {
      render(
        <Sidenav.Menu className={customClassName} label={itemLabel} testMode>
          <Sidenav.Item testMode url="#">
            Link 1
          </Sidenav.Item>
          <Sidenav.Item testMode url="#">
            Link 2
          </Sidenav.Item>
          <Sidenav.Item testMode url="#">
            Link 3
          </Sidenav.Item>
        </Sidenav.Menu>
      );
      checkRenderSidenavMenu();
      const menuLabel = screen.getByTestId(testIds.menuLabel);
      expect(menuLabel.nodeName).toBe("SPAN");
      expect(menuLabel).toBeVisible();
      expect(menuLabel).toHaveClass("rvt-sidenav__link");
      expect(menuLabel.innerHTML).toBe(itemLabel);
    });
  });
  describe("Action", () => {
    it("Clicking the toggle button should open and close the menu", () => {
      render(
        <Sidenav.Menu
          className={customClassName}
          label={itemLabel}
          testMode
          url={itemLink}
        >
          <Sidenav.Item testMode url="#">
            Link 1
          </Sidenav.Item>
          <Sidenav.Item testMode url="#">
            Link 2
          </Sidenav.Item>
          <Sidenav.Item testMode url="#">
            Link 3
          </Sidenav.Item>
        </Sidenav.Menu>
      );
      const button = screen.getByTestId(testIds.menuButton);
      const content = screen.getByTestId(testIds.menuContent);

      expect(button).not.toHaveAttribute("aria-expanded", "true");
      expect(button).not.toHaveAttribute("aria-haspopup", "true");
      expect(button.children[0].innerHTML).toBe(
        `Show links nested under ${itemLabel}`
      );
      expect(content).not.toBeVisible();

      fireEvent.click(button);

      expect(button).toHaveAttribute("aria-expanded", "true");
      expect(button).toHaveAttribute("aria-haspopup", "true");
      expect(button.children[0].innerHTML).toBe(
        `Hide links nested under ${itemLabel}`
      );
      expect(content).toBeVisible();

      fireEvent.click(button);

      expect(button).not.toHaveAttribute("aria-expanded", "true");
      expect(button).not.toHaveAttribute("aria-haspopup", "true");
      expect(button.children[0].innerHTML).toBe(
        `Show links nested under ${itemLabel}`
      );
      expect(content).not.toBeVisible();
    });
    it("Starting from open, clicking the toggle button should open and close the menu", () => {
      render(
        <Sidenav.Menu
          className={customClassName}
          label={itemLabel}
          startOpen
          testMode
          url={itemLink}
        >
          <Sidenav.Item testMode url="#">
            Link 1
          </Sidenav.Item>
          <Sidenav.Item testMode url="#">
            Link 2
          </Sidenav.Item>
          <Sidenav.Item testMode url="#">
            Link 3
          </Sidenav.Item>
        </Sidenav.Menu>
      );
      const button = screen.getByTestId(testIds.menuButton);
      const content = screen.getByTestId(testIds.menuContent);

      expect(button).toHaveAttribute("aria-expanded", "true");
      expect(button).toHaveAttribute("aria-haspopup", "true");
      expect(button.children[0].innerHTML).toBe(
        `Hide links nested under ${itemLabel}`
      );
      expect(content).toBeVisible();

      fireEvent.click(button);

      expect(button).not.toHaveAttribute("aria-expanded", "true");
      expect(button).not.toHaveAttribute("aria-haspopup", "true");
      expect(button.children[0].innerHTML).toBe(
        `Show links nested under ${itemLabel}`
      );
      expect(content).not.toBeVisible();

      fireEvent.click(button);

      expect(button).toHaveAttribute("aria-expanded", "true");
      expect(button).toHaveAttribute("aria-haspopup", "true");
      expect(button.children[0].innerHTML).toBe(
        `Hide links nested under ${itemLabel}`
      );
      expect(content).toBeVisible();
    });
  });
  describe("Options", () => {
    it("current is set", () => {
      render(
        <Sidenav.Menu
          className={customClassName}
          current
          label={itemLabel}
          testMode
          url={itemLink}
        >
          <Sidenav.Item testMode url="#">
            Link 1
          </Sidenav.Item>
          <Sidenav.Item testMode url="#">
            Link 2
          </Sidenav.Item>
          <Sidenav.Item testMode url="#">
            Link 3
          </Sidenav.Item>
        </Sidenav.Menu>
      );
      checkRenderSidenavMenu();
      const menuLabel = screen.getByTestId(testIds.menuLabel);
      expect(menuLabel).toHaveAttribute("aria-current", "page");
    });
    it("current is not set", () => {
      render(
        <Sidenav.Menu
          className={customClassName}
          label={itemLabel}
          testMode
          url={itemLink}
        >
          <Sidenav.Item testMode url="#">
            Link 1
          </Sidenav.Item>
          <Sidenav.Item testMode url="#">
            Link 2
          </Sidenav.Item>
          <Sidenav.Item testMode url="#">
            Link 3
          </Sidenav.Item>
        </Sidenav.Menu>
      );
      checkRenderSidenavMenu();
      const menuLabel = screen.getByTestId(testIds.menuLabel);
      expect(menuLabel).not.toHaveAttribute("aria-current", "page");
    });
    it("startOpen is set", () => {
      render(
        <Sidenav.Menu
          className={customClassName}
          startOpen
          label={itemLabel}
          testMode
          url={itemLink}
        >
          <Sidenav.Item testMode url="#">
            Link 1
          </Sidenav.Item>
          <Sidenav.Item testMode url="#">
            Link 2
          </Sidenav.Item>
          <Sidenav.Item testMode url="#">
            Link 3
          </Sidenav.Item>
        </Sidenav.Menu>
      );
      checkRenderSidenavMenu();
      const button = screen.getByTestId(testIds.menuButton);
      expect(button).toHaveAttribute("aria-expanded", "true");
      expect(button).toHaveAttribute("aria-haspopup", "true");
      expect(button.children[0].innerHTML).toBe(
        `Hide links nested under ${itemLabel}`
      );

      const content = screen.getByTestId(testIds.menuContent);
      expect(content).toBeVisible();
    });
    it("startOpen is not set", () => {
      render(
        <Sidenav.Menu
          className={customClassName}
          label={itemLabel}
          testMode
          url={itemLink}
        >
          <Sidenav.Item testMode url="#">
            Link 1
          </Sidenav.Item>
          <Sidenav.Item testMode url="#">
            Link 2
          </Sidenav.Item>
          <Sidenav.Item testMode url="#">
            Link 3
          </Sidenav.Item>
        </Sidenav.Menu>
      );
      checkRenderSidenavMenu();
      const button = screen.getByTestId(testIds.menuButton);
      expect(button).not.toHaveAttribute("aria-expanded", "true");
      expect(button).not.toHaveAttribute("aria-haspopup", "true");
      expect(button.children[0].innerHTML).toBe(
        `Show links nested under ${itemLabel}`
      );

      const content = screen.getByTestId(testIds.menuContent);
      expect(content).not.toBeVisible();
    });
    it("default is test mode off", () => {
      render(
        <Sidenav.Menu className={customClassName} url={itemLink}>
          {itemLabel}
        </Sidenav.Menu>
      );
      const element = screen.queryByTestId(testIds.menu);
      expect(element).not.toBeInTheDocument();
    });
  });
  it("should respect a SidenavItems onClick handler", async () => {
    const onClick = jest.fn();
    const linkText = "Link Text";
    render(
      <Sidenav>
        <Sidenav.Item url="#" onClick={onClick}>
          {linkText}
        </Sidenav.Item>
      </Sidenav>
    );

    const link = await screen.findByText(linkText);

    fireEvent.click(link);

    expect(onClick.mock.calls.length).toBe(1);
  });
});

const checkRenderSidenavContainer = () => {
  const element = screen.getByTestId(testIds.container);
  expect(element.nodeName).toBe("NAV");
  expect(element).toBeVisible();
  expect(element).toHaveClass("rvt-sidenav");
  expect(element).toHaveClass(customClassName);
  expect(element).toHaveAttribute(
    "aria-labelledby",
    `${sideNavId}-sidenav-label`
  );
  expect(element.children.length).toBe(2);

  const labelElement = element.children[0];
  expect(labelElement).toHaveAttribute("id", `${sideNavId}-sidenav-label`);
  expect(labelElement.innerHTML).toBe(sideNavLabel);

  const listElement = element.children[1];
  expect(listElement.nodeName).toBe("UL");
  expect(listElement.children.length).toBe(3);
};

const checkRenderSidenavItem = () => {
  const element = screen.getByTestId(testIds.item);
  expect(element.nodeName).toBe("LI");
  expect(element).toBeVisible();
  expect(element).toHaveClass("rvt-sidenav__item");
  expect(element).toHaveClass(customClassName);
};
const checkRenderSidenavItemLink = () => {
  const element = screen.getByTestId(testIds.item);
  expect(element.children.length).toBe(1);
  const linkElement = element.children[0];
  expect(linkElement.nodeName).toBe("A");
  expect(linkElement).toBeVisible();
  expect(linkElement).toHaveClass("rvt-sidenav__link");
  expect(linkElement).toHaveAttribute("href", itemLink);
  expect(linkElement.innerHTML).toBe(itemLabel);
};

const checkRenderSidenavMenu = () => {
  const element = screen.getByTestId(testIds.menu);
  expect(element.nodeName).toBe("LI");
  expect(element).toBeVisible();
  expect(element).toHaveClass("rvt-sidenav__item");
  expect(element).toHaveClass(customClassName);

  expect(element.children.length).toBe(2);
  const wrapperElement = element.children[0];
  expect(wrapperElement).toHaveClass("rvt-sidenav__item-wrapper");

  const listElement = element.children[1];
  expect(listElement.nodeName).toBe("UL");
  expect(listElement).toHaveClass("rvt-sidenav__list");
  expect(listElement.children.length).toBe(3);
  const itemElements = screen.getAllByTestId(testIds.item);
  expect(itemElements.length).toBe(3);
};
