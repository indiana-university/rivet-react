/*
Copyright (C) 2018 The Trustees of Indiana University
SPDX-License-Identifier: BSD-3-Clause
*/
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import React from "react";
import Hero from "./Hero";
import { TestUtils } from "../../util/TestUtils";

const testIds = TestUtils.Hero;
const actions = (
  <a className="rvt-cta rvt-cta--button" href="#">
    Learn more about IU
  </a>
);

const actionsStr =
  '<a class="rvt-cta rvt-cta--button" href="#">Learn more about IU</a>';
const media = (
  <img
    src="https://rivet.iu.edu/img/placeholder/hero-2.webp"
    alt="Person at desk coding a website"
  />
);
const mediaStr =
  '<img alt="Person at desk coding a website" src="https://rivet.iu.edu/img/placeholder/hero-2.webp">';
const mediaCaption = "An optional image caption";
const content = "Sample Hero text";
const customClassName = "custom-style";
const eyebrow = "Super header";
const title = "Sample Hero";
describe("<Hero />", () => {
  describe("Rendering", () => {
    it("should render without throwing an error", () => {
      render(
        <Hero
          actions={actions}
          className={customClassName}
          eyebrow={eyebrow}
          media={media}
          mediaCaption={mediaCaption}
          testMode
          title={title}
        >
          {content}
        </Hero>,
      );
      checkRenderEyebrow();
      checkRenderContainer();
      checkRenderInnerContainer("lg");
      checkRenderMedia();
      checkRenderMediaCaption();
      checkRenderTitle();
      checkRenderActions(actionsStr);
      checkRenderContent();
    });

    it("without media should render without throwing an error", () => {
      render(
        <Hero
          actions={actions}
          className={customClassName}
          eyebrow={eyebrow}
          mediaCaption={mediaCaption}
          testMode
          title={title}
        >
          {content}
        </Hero>,
      );
      checkRenderEyebrow();
      checkRenderContainer();
      checkRenderInnerContainer("lg");
      checkRenderTitle();
      checkRenderActions(actionsStr);
      checkRenderContent();

      const media = screen.queryByTestId(testIds.media);
      expect(media).not.toBeInTheDocument();

      const mediaCaptionEle = screen.queryByTestId(testIds.mediaCaption);
      expect(mediaCaptionEle).not.toBeInTheDocument();
    });

    it("without media and caption should render without throwing an error", () => {
      render(
        <Hero
          actions={actions}
          className={customClassName}
          eyebrow={eyebrow}
          testMode
          title={title}
        >
          {content}
        </Hero>,
      );
      checkRenderEyebrow();
      checkRenderContainer();
      checkRenderInnerContainer("lg");
      checkRenderTitle();
      checkRenderActions(actionsStr);
      checkRenderContent();

      const media = screen.queryByTestId(testIds.media);
      expect(media).not.toBeInTheDocument();

      const mediaCaption = screen.queryByTestId(testIds.mediaCaption);
      expect(mediaCaption).not.toBeInTheDocument();
    });

    it("without media caption should render without throwing an error", () => {
      render(
        <Hero
          actions={actions}
          className={customClassName}
          eyebrow={eyebrow}
          media={media}
          testMode
          title={title}
        >
          {content}
        </Hero>,
      );
      checkRenderEyebrow();
      checkRenderContainer();
      checkRenderInnerContainer("lg");
      checkRenderMedia();
      checkRenderTitle();
      checkRenderActions(actionsStr);
      checkRenderContent();

      const mediaCaption = screen.queryByTestId(testIds.mediaCaption);
      expect(mediaCaption).not.toBeInTheDocument();
    });

    it("without actions should render without throwing an error", () => {
      render(
        <Hero
          className={customClassName}
          eyebrow={eyebrow}
          media={media}
          mediaCaption={mediaCaption}
          testMode
          title={title}
        >
          {content}
        </Hero>,
      );
      checkRenderEyebrow();
      checkRenderContainer();
      checkRenderInnerContainer("lg");
      checkRenderMedia();
      checkRenderMediaCaption();
      checkRenderTitle();
      checkRenderContent();

      const actions = screen.queryByTestId(testIds.actions);
      expect(actions).not.toBeInTheDocument();
    });
  });

  describe("Options", () => {
    it("can change to dark variant", () => {
      render(
        <Hero
          actions={actions}
          className={customClassName}
          eyebrow={eyebrow}
          media={media}
          mediaCaption={mediaCaption}
          testMode
          title={title}
          varient="dark"
        >
          {content}
        </Hero>,
      );
      const element = screen.getByTestId(testIds.container);
      expect(element).toHaveClass("rvt-hero--bg-dark");
    });
    it("can have complex actions", () => {
      const actions = (
        <ul>
          <li>
            <a className="rvt-cta rvt-cta--button" href="#">
              action 1
            </a>
          </li>
          <li>
            <a className="rvt-cta rvt-cta--button" href="#">
              action 1
            </a>
          </li>
        </ul>
      );
      const actionsStr =
        '<ul><li><a class="rvt-cta rvt-cta--button" href="#">action 1</a></li><li><a class="rvt-cta rvt-cta--button" href="#">action 1</a></li></ul>';
      render(
        <Hero
          actions={actions}
          className={customClassName}
          eyebrow={eyebrow}
          media={media}
          mediaCaption={mediaCaption}
          testMode
          title={title}
        >
          {content}
        </Hero>,
      );
      checkRenderActions(actionsStr);
    });
    it("can change inner container size", () => {
      render(
        <Hero
          actions={actions}
          className={customClassName}
          eyebrow={eyebrow}
          media={media}
          mediaCaption={mediaCaption}
          testMode
          size="sm"
          title={title}
        >
          {content}
        </Hero>,
      );
      checkRenderInnerContainer("sm");
    });
    it("default is test mode off", () => {
      render(
        <Hero
          actions={actions}
          className={customClassName}
          eyebrow={eyebrow}
          media={media}
          mediaCaption={mediaCaption}
          title={title}
        >
          {content}
        </Hero>,
      );
      const element = screen.queryByTestId(testIds.container);
      expect(element).not.toBeInTheDocument();
    });
  });
});

const checkRenderEyebrow = () => {
  const element = screen.getByTestId(testIds.eyebrow);
  expect(element).toBeVisible();
  expect(element).toHaveClass("rvt-hero__eyebrow");
  expect(element.innerHTML).toBe(eyebrow);
};

const checkRenderContainer = () => {
  const container = screen.getByTestId(testIds.container);
  expect(container).toBeVisible();
  expect(container).toHaveClass("rvt-hero");
  expect(container).toHaveClass(customClassName);
};

const checkRenderInnerContainer = (size) => {
  const container = screen.getByTestId(testIds.innerContainer);
  expect(container).toBeVisible();
  expect(container).toHaveClass(`rvt-container-${size}`);
};

const checkRenderMedia = () => {
  const element = screen.getByTestId(testIds.media);
  expect(element).toBeVisible();
  expect(element).toHaveClass("rvt-hero__media");
  expect(element.children[0].outerHTML).toBe(mediaStr);
};

const checkRenderMediaCaption = () => {
  const element = screen.getByTestId(testIds.mediaCaption);
  expect(element).toBeVisible();
  expect(element).toHaveClass("rvt-hero__media-caption");
  expect(element.innerHTML).toBe(mediaCaption);
};

const checkRenderTitle = () => {
  const description = screen.getByTestId(testIds.title);
  expect(description).toBeVisible();
  expect(description).toHaveClass("rvt-hero__title");
  expect(description.innerHTML).toBe(title);
};

const checkRenderActions = (content) => {
  const number = screen.getByTestId(testIds.actions);
  expect(number).toBeVisible();
  expect(number).toHaveClass("rvt-hero__actions");
  expect(number.innerHTML).toBe(content);
};

const checkRenderContent = () => {
  const number = screen.getByTestId(testIds.content);
  expect(number).toBeVisible();
  expect(number).toHaveClass("rvt-hero__teaser");
  expect(number.innerHTML).toBe(content);
};
