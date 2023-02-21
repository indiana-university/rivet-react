import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import Header from "./Header";
import { TestUtils } from "../util/TestUtils";

describe("<HeaderAvatar/>", () => {
  describe("Rendering and styling", () => {
    it("should render the provided username, short name, and logout link", () => {
      const username = "johndoe";
      const shortName = "jd";
      const link = "/logout";
      render(
        <Header.Avatar
          username={username}
          shortName={shortName}
          logoutURL={link}
        />
      );

      expect(
        screen.getByTestId(TestUtils.Header.avatarUsername)
      ).toHaveTextContent(username);
      expect(
        screen.getByTestId(TestUtils.Header.avatarShortName)
      ).toHaveTextContent(shortName);
      expect(screen.getByRole("link")).toHaveAttribute("href", link);
    });
  });
});
