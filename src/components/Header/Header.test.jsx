import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import Header from "./Header";
import { TestUtils } from "../util/TestUtils";

describe("<Header />", () => {
  const testTitle = "Test title";

  describe("Rendering and styling", () => {
    // it("should throw some error when a title prop is not provided", () => {
    //   render(<Header/>)
    //   // expect some error to be thrown/logged on console
    // })

    it("should render a skip link", () => {
      render(<Header title={testTitle} />);
      expect(
        screen.getByTestId(TestUtils.Header.skipLinkTestId)
      ).toHaveAttribute("href", "#main-content");
      expect(
        screen.getByTestId(TestUtils.Header.skipLinkTestId)
      ).toHaveTextContent("Skip to main content");
    });

    it("should render an anchor with the title, if title is provided", () => {
      render(<Header title={testTitle} />);
      expect(
        screen.getByTestId(TestUtils.Header.anchorTestId)
      ).toHaveTextContent(testTitle);
    });

    // it("should pass all provided props to the component", () => {
    //   render(<Header title={testTitle} subtitle={"test-subtitle"} width="md" href={"/someLink"} className={"test-class"}/>)
    //
    // })
  });
});
