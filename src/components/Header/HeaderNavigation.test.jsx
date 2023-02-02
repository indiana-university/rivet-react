import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import Header from "./Header";
import { TestUtils } from "../util/TestUtils";

describe("<HeaderNavigation />", () => {
  describe("Rendering and styling", () => {
    beforeEach(() => {
      render(
        <Header.Navigation>
          <ul>
            <li>
              <a href={"#"}>Nav item one</a>
            </li>
            <li data-rvt-c-header-nav-item__current>
              <a href={"#"}>Nav item two</a>
            </li>
            <li>
              <Header.Menu label="Nav item three">
                <a href={"#"}>Sub item one</a>
                <a href={"#"}>Sub item two</a>
                <a href={"#"}>Sub item three</a>
              </Header.Menu>
            </li>
          </ul>
        </Header.Navigation>
      );
    });

    it("should render all provided children", () => {
      expect(screen.getByText("Nav item one")).toBeInTheDocument();
      expect(screen.getByText("Nav item one")).toBeInTheDocument();
      expect(screen.getByText("Nav item three")).toBeInTheDocument();
      expect(screen.getByText("Sub item one")).toBeInTheDocument();
      expect(screen.getByText("Sub item two")).toBeInTheDocument();
      expect(screen.getByText("Sub item three")).toBeInTheDocument();
    });

    it("should apply appropriate styles on the nav item that has been provided the data-rvt-c-header-nav-item__current custom HTML attribute", () => {
      expect(
        screen.getAllByTestId(TestUtils.Header.navListItem)[1]
      ).toHaveClass("rvt-header-menu__item--current");
    });
  });
});
