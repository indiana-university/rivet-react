import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import React from "react";
import LinkHub from "./LinkHub";
import { TestUtils } from "../../util/TestUtils";

const testIds = TestUtils.LinkHub

const customClassName = "custom-style"
const customClassNameItem = "custom-style-item"

describe("<LinkHub />", () => {
  describe("Rendering", () => {
    it("should render without throwing an error", () => {
      render(
        <LinkHub
          className={customClassName}
          testMode
        >
          <LinkHub.Item label="Link 1" url="#" />
          <LinkHub.Item label="Link 2" url="#" />
          <LinkHub.Item label="Link 3" url="#" />
        </LinkHub>
      );
      checkRenderLinkHubContainer()
    });
  });
  describe("Options", () => {
    it("Stack variant renders correctly", () => {
      render(
        <LinkHub
          className={customClassName}
          testMode
          variant="stacked"
        >
          <LinkHub.Item label="Link 1" url="#" />
          <LinkHub.Item label="Link 2" url="#" />
          <LinkHub.Item label="Link 3" url="#" />
        </LinkHub>
      );
      checkRenderLinkHubContainer()
      const element = screen.getByTestId(testIds.container);
      expect(element).toHaveClass("rvt-link-hub--stacked");
    });
    it("default is test mode off", () => {
      render(
        <LinkHub className={customClassName}>
          <LinkHub.Item label="Link 1" url="#" />
          <LinkHub.Item label="Link 2" url="#" />
          <LinkHub.Item label="Link 3" url="#" />
        </LinkHub>
      );
      const element = screen.queryByTestId(testIds.container);
      expect(element).not.toBeInTheDocument();
    });
  });
});

describe("<LinkHub.Item />", () => {
  describe("Rendering", () => {
    const label = "Link 1"
    const url = "www.testLink1.com"
    const description = "description text"
    it("should render without throwing an error", () => {
      render(
          <LinkHub.Item
            className={customClassNameItem}
            label={label}
            testMode
            url={url} 
          >
            {description}
          </LinkHub.Item>
      );
      checkRenderLinkHubItemContainer()
      checkRenderLinkHubItemLink(label, url, description)
    });
    it("without description, should render without throwing an error", () => {
      render(
          <LinkHub.Item
            className={customClassNameItem}
            label={label}
            testMode
            url={url} 
          />
      );
      checkRenderLinkHubItemContainer()
      checkRenderLinkHubItemLink(label, url, null)
    });
  });
  describe("Options", () => {
    it("default is test mode off", () => {
      render(
        <LinkHub.Item
          label="Link 1"
          url="www.testLink1.com"
        >
          description text
        </LinkHub.Item>
      );
      const element = screen.queryByTestId(testIds.itemContainer);
      expect(element).not.toBeInTheDocument();
    });
  });
});



const checkRenderLinkHubContainer = () => {
  const element = screen.getByTestId(testIds.container);
  expect(element.nodeName).toBe("UL")
  expect(element).toBeVisible();
  expect(element).toHaveClass("rvt-link-hub");
  expect(element).toHaveClass(customClassName);
  expect(element.children.length).toBe(3)
}

const checkRenderLinkHubItemContainer = () => {
  const element = screen.getByTestId(testIds.itemContainer);
  expect(element.nodeName).toBe("LI")
  expect(element).toBeVisible();
  expect(element).toHaveClass("rvt-link-hub__item");
  expect(element).toHaveClass(customClassNameItem);
  expect(element.children.length).toBe(1)
}

const checkRenderLinkHubItemLink= (label, url, description = null) => {
  const element = screen.getByTestId(testIds.itemLink);
  expect(element.nodeName).toBe("A")
  expect(element).toBeVisible();
  expect(element).toHaveClass("rvt-link-hub__link");
  expect(element).toHaveAttribute("href", url);

  const hasDescription = description != null
  expect(element.children.length).toBe(hasDescription ? 2 : 1)

  const labelElement = element.children[0]
  expect(labelElement.nodeName).toBe("SPAN")
  expect(labelElement).toBeVisible();
  expect(labelElement).toHaveClass("rvt-link-hub__text");
  expect(labelElement.innerHTML).toBe(label);

  if(hasDescription) {
    const descriptionElement = element.children[1]
    expect(descriptionElement.nodeName).toBe("SPAN")
    expect(descriptionElement).toBeVisible();
    expect(descriptionElement).toHaveClass("rvt-link-hub__description");
    expect(descriptionElement.innerHTML).toBe(description);
  }

}
