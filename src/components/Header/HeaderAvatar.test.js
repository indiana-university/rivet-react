import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import Header from "./Header";
import { TestUtils } from "../util/TestUtils";

describe("<HeaderAvatar/>", () => {
  describe("Rendering and styling", () => {
    const username = "johndoe";
    const shortName = "jd";

    it("should render the provided username, short name, and logout link", () => {
      const link = "/logout";
      render(
        <Header.Avatar
          username={username}
          shortName={shortName}
          logoutURL={link}
        />
      );

      expect(
        screen.getByTestId(TestUtils.Header.avatarUsernameTestId)
      ).toHaveTextContent(username);
      expect(
        screen.getByTestId(TestUtils.Header.avatarShortNameTestId)
      ).toHaveTextContent(shortName);
      expect(screen.getByRole("link")).toHaveAttribute("href", link);
    });

    it("does not show logout anchor if logoutURL is not provided", () => {
      render(<Header.Avatar username={username} shortName={shortName} />);

      expect(screen.queryAllByRole("link")).toHaveLength(0);
    });
  });
});
