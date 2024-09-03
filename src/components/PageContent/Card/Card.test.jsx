import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import React from "react";
import Card from "./Card";
import { TestUtils } from "../../util/TestUtils";

const testIds = TestUtils.Card;
const image = (
  <img
    src="https://rivet.iu.edu/img/placeholder/billboard-2.webp"
    alt="Student in vintage-style Indiana University t-shirt"
  />
);
const imageStr =
  '<img src="https://rivet.iu.edu/img/placeholder/billboard-2.webp" alt="Student in vintage-style Indiana University t-shirt">';
const title = "test title";
const titleUrl = "https://www.iu.edu/";
const content = <p>Test content</p>;
const contentStr = "<p>Test content</p>";
const customClassName = "custom-style";
const eyebrow = "test Eyebrow";
const meta = <time>November 5, 1955</time>;
const metaStr = "<time>November 5, 1955</time>";

describe("<Card />", () => {
  describe("Rendering", () => {
    it("should render without throwing an error", () => {
      render(
        <Card
          className={customClassName}
          eyebrow={eyebrow}
          image={image}
          meta={meta}
          testMode
          title={title}
          titleUrl={titleUrl}
        >
          {content}
        </Card>
      );
      checkRenderContainer();
      checkRenderTitle(titleUrl);
      checkRenderContent();
      checkRenderImage();
      checkRenderMeta();
      checkRenderEyebrow();
    });
    it("without title url, should render without throwing an error", () => {
      render(
        <Card
          className={customClassName}
          eyebrow={eyebrow}
          image={image}
          meta={meta}
          testMode
          title={title}
        >
          {content}
        </Card>
      );
      checkRenderContainer();
      checkRenderTitle();
      checkRenderContent();
      checkRenderImage();
      checkRenderMeta();
      checkRenderEyebrow();
    });
    it("without eyebrow, should render without throwing an error", () => {
      render(
        <Card
          className={customClassName}
          image={image}
          meta={meta}
          testMode
          title={title}
        >
          {content}
        </Card>
      );
      checkRenderContainer();
      checkRenderTitle();
      checkRenderContent();
      checkRenderImage();
      checkRenderMeta();
    });
    it("without image, should render without throwing an error", () => {
      render(
        <Card
          className={customClassName}
          eyebrow={eyebrow}
          meta={meta}
          testMode
          title={title}
        >
          {content}
        </Card>
      );
      checkRenderContainer();
      checkRenderTitle();
      checkRenderContent();
      checkRenderMeta();
      checkRenderEyebrow();
    });
    it("without meta, should render without throwing an error", () => {
      render(
        <Card
          className={customClassName}
          eyebrow={eyebrow}
          image={image}
          testMode
          title={title}
        >
          {content}
        </Card>
      );
      checkRenderContainer();
      checkRenderTitle();
      checkRenderContent();
      checkRenderImage();
      checkRenderEyebrow();
    });
  });
  describe("Options", () => {
    it("should activate onClick handler on link if titleUrl is also provided", async () => {
      const onClick = jest.fn();
      const user = userEvent.setup();
      render(
        <Card
          className={customClassName}
          onClick={onClick}
          titleUrl={titleUrl}
          testMode
          title={title}
        >
          {content}
        </Card>
      );

      const element = screen.queryByTestId(testIds.container);
      // card is not clickable, so clicking on it should not trigger onClick
      await user.click(element);

      expect(onClick.mock.calls.length).toBe(0);

      const link = element.getElementsByTagName("a")[0];
      expect(link.href).toBe(titleUrl);

      await user.click(link);

      expect(onClick.mock.calls.length).toBe(1);
    });

    it("should activate onClick handler on button if titleUrl is not provided", async () => {
      const onClick = jest.fn();
      const user = userEvent.setup();
      render(
        <Card
          className={customClassName}
          onClick={onClick}
          testMode
          title={title}
        >
          {content}
        </Card>
      );

      const element = screen.queryByTestId(testIds.container);
      // card is not clickable, so clicking on it should not trigger onClick
      await user.click(element);

      expect(onClick.mock.calls.length).toBe(0);

      const button = element.getElementsByTagName("button")[0];

      await user.click(button);

      expect(onClick.mock.calls.length).toBe(1);
    });

    it("should activate onClick on the entire card if clickable is present", async () => {
      const onClick = jest.fn();
      const user = userEvent.setup();
      render(
        <Card
          clickable
          className={customClassName}
          onClick={onClick}
          testMode
          title={title}
        >
          {content}
        </Card>
      );

      const element = screen.queryByTestId(testIds.container);
      // card is clickable, so clicking on it should trigger onClick
      await user.click(element);

      expect(onClick.mock.calls.length).toBe(1);
    });

    it("clickable on, should render as clickable", () => {
      render(
        <Card
          className={customClassName}
          clickable
          eyebrow={eyebrow}
          image={image}
          meta={meta}
          testMode
          title={title}
        >
          {content}
        </Card>
      );
      const element = screen.queryByTestId(testIds.container);
      expect(element).toHaveClass("rvt-card--clickable");
    });
    it("horizontal on, should render as horizontal format", () => {
      render(
        <Card
          className={customClassName}
          eyebrow={eyebrow}
          horizontal
          image={image}
          meta={meta}
          testMode
          title={title}
        >
          {content}
        </Card>
      );
      const element = screen.queryByTestId(testIds.container);
      expect(element).toHaveClass("rvt-card--horizontal");
    });
    it("raised on, should render as raised", () => {
      render(
        <Card
          className={customClassName}
          eyebrow={eyebrow}
          image={image}
          meta={meta}
          raised
          testMode
          title={title}
        >
          {content}
        </Card>
      );
      const element = screen.queryByTestId(testIds.container);
      expect(element).toHaveClass("rvt-card--raised");
    });
    it("Component set, should render with container matching element", () => {
      render(
        <Card
          className={customClassName}
          Component="li"
          eyebrow={eyebrow}
          image={image}
          meta={meta}
          testMode
          title={title}
        >
          {content}
        </Card>
      );
      const element = screen.queryByTestId(testIds.container);
      expect(element.nodeName).toBe("LI");
    });
    it("default is test mode off", () => {
      render(
        <Card
          className={customClassName}
          eyebrow={eyebrow}
          image={image}
          meta={meta}
          title={title}
        >
          {content}
        </Card>
      );
      const element = screen.queryByTestId(testIds.container);
      expect(element).not.toBeInTheDocument();
    });
  });
});

const checkRenderContainer = () => {
  const elemet = screen.getByTestId(testIds.container);
  expect(elemet).toBeVisible();
  expect(elemet.nodeName).toBe("DIV");
  expect(elemet).toHaveClass("rvt-card");
  expect(elemet).toHaveClass(customClassName);
};

const checkRenderTitle = (url) => {
  const element = screen.getByTestId(testIds.title);
  expect(element.nodeName).toBe("H2");
  expect(element).toBeVisible();
  expect(element).toHaveClass("rvt-card__title");
  expect(element.children.length).toBe(1);
  const content = element.children[0];
  expect(content.innerHTML).toBe(title);
  if (url) {
    expect(content.nodeName).toBe("A");
    expect(content).toHaveAttribute("href", url);
  } else {
    expect(content.nodeName).toBe("SPAN");
  }
};

const checkRenderContent = () => {
  const elemet = screen.getByTestId(testIds.content);
  expect(elemet).toBeVisible();
  expect(elemet).toHaveClass("rvt-card__content");
  expect(elemet.innerHTML).toBe(contentStr);
};

const checkRenderImage = () => {
  const elemet = screen.getByTestId(testIds.image);
  expect(elemet).toBeVisible();
  expect(elemet).toHaveClass("rvt-card__image");
  expect(elemet.innerHTML).toBe(imageStr);
};

const checkRenderEyebrow = () => {
  const elemet = screen.getByTestId(testIds.eyebrow);
  expect(elemet).toBeVisible();
  expect(elemet).toHaveClass("rvt-card__eyebrow");
  expect(elemet.innerHTML).toBe(eyebrow);
};

const checkRenderMeta = () => {
  const elemet = screen.getByTestId(testIds.meta);
  expect(elemet).toBeVisible();
  expect(elemet).toHaveClass("rvt-card__meta");
  expect(elemet.innerHTML).toBe(metaStr);
};
