import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import React from "react";
import Billboard from "./Billboard";
import { TestUtils } from "../../util/TestUtils";

const testIds = TestUtils.Billboard
const image = <img src="https://rivet.iu.edu/img/placeholder/billboard-2.webp" alt="Student in vintage-style Indiana University t-shirt" />
const imageStr = '<img src="https://rivet.iu.edu/img/placeholder/billboard-2.webp" alt="Student in vintage-style Indiana University t-shirt">'
const title = "test title"
const content = <p>Test content</p>
const contentString = "<p>Test content</p>"
const customClassName = "custom-style"

describe("<Billboard />", () => {
  describe("Rendering", () => {
    it("standard should render without throwing an error", () => {
      render(
        <Billboard
          className={customClassName}
          image={image}
          testMode
          title={title}
        >
          {content}
        </Billboard>
      );
      checkRenderContainer()
      checkRenderTitle()
      checkRenderContent()
      checkRenderImage()
    });

    it("without image should render without throwing an error", () => {
      render(
        <Billboard
          className={customClassName}
          testMode
          title={title}
          variant="reverse"
        >
          {content}
        </Billboard>
      );
      
      checkRenderContainer()
      checkRenderTitle()
      checkRenderContent()
      const billboardImage = screen.queryByTestId(testIds.image);
      expect(billboardImage).not.toBeInTheDocument();
    });

    it("without content should render without throwing an error", () => {
      render(
        <Billboard
          className={customClassName}
          image={image}
          testMode
          title={title}
        />
      );
      checkRenderContainer()
      checkRenderTitle()
      checkRenderImage()
      const billboardContent = screen.queryByTestId(testIds.content);
      expect(billboardContent).not.toBeInTheDocument();
    });
  });
  describe("Variants", () => {
    it("variant standard should render without reverse or center classes", () => {
      render(
        <Billboard
          className={customClassName}
          image={image}
          testMode
          title={title}
        >
          {content}
        </Billboard>
      );
      checkRenderContainer()
      checkRenderTitle()
      checkRenderContent()
      checkRenderImage()
      const billboardContainer = screen.getByTestId(testIds.container);
      expect(billboardContainer).not.toHaveClass("rvt-billboard--reverse");
      expect(billboardContainer).not.toHaveClass("rvt-billboard--center");
    });
    it("variant reverse should render with only reverse class", () => {
      render(
        <Billboard
          className={customClassName}
          image={image}
          testMode
          title={title}
          variant="reverse"
        >
          {content}
        </Billboard>
      );
      
      checkRenderContainer()
      checkRenderTitle()
      checkRenderContent()
      checkRenderImage()
      const billboardContainer = screen.getByTestId(testIds.container);
      expect(billboardContainer).toHaveClass("rvt-billboard--reverse");
      expect(billboardContainer).not.toHaveClass("rvt-billboard--center");
    });

    it("variant center should render with only center class", () => {
      render(
        <Billboard
          className={customClassName}
          image={image}
          testMode
          title={title}
          variant="center"
        >
          {content}
        </Billboard>
      );
      
      checkRenderContainer()
      checkRenderTitle()
      checkRenderContent()
      checkRenderImage()
      const billboardContainer = screen.getByTestId(testIds.container);
      expect(billboardContainer).not.toHaveClass("rvt-billboard--reverse");
      expect(billboardContainer).toHaveClass("rvt-billboard--center");
    });
  });
  describe("Options", () => {
    it("default is test mode off", () => {
      render(
        <Billboard
          className={customClassName}
          image={image}
          title={title}
        >
          {content}
        </Billboard>
      );
      const element = screen.queryByTestId(testIds.container);
      expect(element).not.toBeInTheDocument();
      const billboardImage = screen.queryByTestId(testIds.image);
      expect(billboardImage).not.toBeInTheDocument();
      const billboardContent = screen.queryByTestId(testIds.content);
      expect(billboardContent).not.toBeInTheDocument();
    });
  });
});

const checkRenderContainer = () => {
  const billboardContainer = screen.getByTestId(testIds.container);
  expect(billboardContainer).toBeVisible();
  expect(billboardContainer).toHaveClass("rvt-billboard");
  expect(billboardContainer).toHaveClass(customClassName);
}

const checkRenderTitle = () => {
  const billboardTitle = screen.getByTestId(testIds.title);
  expect(billboardTitle).toBeVisible();
  expect(billboardTitle).toHaveClass("rvt-billboard__title");
  expect(billboardTitle.innerHTML).toBe(title);
}

const checkRenderContent = () => {
  const billboardContent = screen.getByTestId(testIds.content);
  expect(billboardContent).toBeVisible();
  expect(billboardContent).toHaveClass("rvt-billboard__content");
  expect(billboardContent.innerHTML).toBe(contentString);
}

const checkRenderImage = () => {
  const billboardImage = screen.getByTestId(testIds.image);
  expect(billboardImage).toBeVisible();
  expect(billboardImage).toHaveClass("rvt-billboard__image");
  expect(billboardImage.innerHTML).toBe(imageStr);
}
