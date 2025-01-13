/*
Copyright (C) 2018 The Trustees of Indiana University
SPDX-License-Identifier: BSD-3-Clause
*/
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import React from "react";
import Quote from "./Quote";
import { TestUtils } from "../../util/TestUtils";

const testIds = TestUtils.Quote;
const avatar = (
  <img
    className="rvt-avatar__image"
    src="https://rivet.iu.edu/img/placeholder/avatar-1.webp"
    alt=""
  />
);
const avatarStr =
  '<img class="rvt-avatar__image" src="https://rivet.iu.edu/img/placeholder/avatar-1.webp" alt="">';
const citation = "Some Author";
const subCitation = "Quotes RS";
const content = "Same content";
const customClassName = "custom-style";

describe("<Quote />", () => {
  describe("Rendering", () => {
    it("base should render without throwing an error", () => {
      render(
        <Quote className={customClassName} testMode>
          {content}
        </Quote>,
      );
      checkRenderContainer();
      checkRenderContent();
      const avatarEle = screen.queryByTestId(testIds.avatar);
      expect(avatarEle).not.toBeInTheDocument();
      const citationEle = screen.queryByTestId(testIds.citation);
      expect(citationEle).not.toBeInTheDocument();
    });
    it("with avatar render without throwing an error", () => {
      render(
        <Quote avatar={avatar} className={customClassName} testMode>
          {content}
        </Quote>,
      );
      checkRenderContainer();
      checkRenderContent();
      checkRenderAvatar();
      const citationEle = screen.queryByTestId(testIds.citation);
      expect(citationEle).not.toBeInTheDocument();
    });
    it("with both citation and sub citation should render without throwing an error", () => {
      render(
        <Quote
          citation={citation}
          className={customClassName}
          subCitation={subCitation}
          testMode
        >
          {content}
        </Quote>,
      );
      checkRenderContainer();
      checkRenderContent();
      const avatarEle = screen.queryByTestId(testIds.avatar);
      expect(avatarEle).not.toBeInTheDocument();

      const citationContainerEle = screen.getByTestId(testIds.citation);
      expect(citationContainerEle).toBeVisible();
      expect(citationContainerEle).toHaveClass("rvt-quote__citation");
      expect(citationContainerEle.children.length).toBe(2);

      const citationEle = citationContainerEle.children[0];
      expect(citationEle).toBeVisible();
      expect(citationEle).toHaveClass("rvt-quote__title");
      expect(citationEle.innerHTML).toBe(citation);

      const subCitationEle = citationContainerEle.children[1];
      expect(subCitationEle).toBeVisible();
      expect(subCitationEle).toHaveClass("rvt-quote__subtitle");
      expect(subCitationEle.innerHTML).toBe(subCitation);
    });
    it("with only citation should render without throwing an error", () => {
      render(
        <Quote citation={citation} className={customClassName} testMode>
          {content}
        </Quote>,
      );
      checkRenderContainer();
      checkRenderContent();
      const avatarEle = screen.queryByTestId(testIds.avatar);
      expect(avatarEle).not.toBeInTheDocument();

      const citationContainerEle = screen.getByTestId(testIds.citation);
      expect(citationContainerEle).toBeVisible();
      expect(citationContainerEle).toHaveClass("rvt-quote__citation");
      expect(citationContainerEle.children.length).toBe(1);

      const citationEle = citationContainerEle.children[0];
      expect(citationEle).toBeVisible();
      expect(citationEle).toHaveClass("rvt-quote__title");
      expect(citationEle.innerHTML).toBe(citation);
    });
    it("with only sub citation should render without throwing an error", () => {
      render(
        <Quote className={customClassName} subCitation={subCitation} testMode>
          {content}
        </Quote>,
      );
      checkRenderContainer();
      checkRenderContent();
      const avatarEle = screen.queryByTestId(testIds.avatar);
      expect(avatarEle).not.toBeInTheDocument();

      const citationContainerEle = screen.queryByTestId(testIds.citation);
      expect(citationContainerEle).not.toBeInTheDocument();
    });
  });
  describe("Options", () => {
    it("default is test mode off", () => {
      render(<Quote>{content}</Quote>);
      const element = screen.queryByTestId(testIds.container);
      expect(element).not.toBeInTheDocument();
    });
  });
});

const checkRenderContainer = () => {
  const element = screen.getByTestId(testIds.container);
  expect(element).toBeVisible();
  expect(element).toHaveClass("rvt-quote");
  expect(element).toHaveClass(customClassName);
};

const checkRenderContent = () => {
  const element = screen.getByTestId(testIds.content);
  expect(element).toBeVisible();
  expect(element).toHaveClass("rvt-quote__text");
  const contentEle = element.children[0];
  expect(contentEle.innerHTML).toBe(content);
};

const checkRenderAvatar = () => {
  const element = screen.getByTestId(testIds.avatar);
  expect(element).toBeVisible();
  expect(element).toHaveClass("rvt-avatar");
  expect(element).toHaveClass("rvt-avatar--md");
  expect(element.innerHTML).toBe(avatarStr);
};
