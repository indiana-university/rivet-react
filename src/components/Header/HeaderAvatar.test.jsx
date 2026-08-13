/*
Copyright (C) 2018 The Trustees of Indiana University
SPDX-License-Identifier: BSD-3-Clause
*/
import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import Header from "./Header";
import { TestUtils } from "../util/TestUtils";

describe("<HeaderAvatar/>", () => {
  describe("Rendering and styling", () => {
    const username = "johndoe";
    const shortName = "jd";
    const AVATAR_OUTER_DIV_CLASSNAME =
      "rvt-flex rvt-items-center rvt-m-left-md rvt-p-bottom-md rvt-p-bottom-none-lg-up";

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

    it("does not show logout anchor if logoutURL/Click is not provided", () => {
      render(<Header.Avatar username={username} shortName={shortName} />);

      expect(screen.queryAllByRole("link")).toHaveLength(0);
    });

    it("Show logout button if logoutURL is not provided and logoutClick is", () => {
      render(
        <Header.Avatar
          username={username}
          shortName={shortName}
          logoutClick={() => console.log("logout")}
        />
      );

      expect(screen.getByRole("button", { name: /Log out/ })).toBeVisible();
    });

    it("has default class attributes", () => {
      render(<Header.Avatar username={username} shortName={shortName} />);

      expect(
        screen.getByTestId(TestUtils.Header.avatarOuterDivTestId, {})
      ).toHaveClass(AVATAR_OUTER_DIV_CLASSNAME);
    });

    it("should add any classnames passed to the outer div", () => {
      const className = "foo";
      render(
        <Header.Avatar
          username={username}
          shortName={shortName}
          className={className}
        />
      );
      expect(
        screen.getByTestId(TestUtils.Header.avatarOuterDivTestId, {})
      ).toHaveClass(className + " " + AVATAR_OUTER_DIV_CLASSNAME);
    });

    it("should add any attribute passed to the outer div", async () => {
      render(
        <Header.Avatar username={username} shortName={shortName} hidden />
      );
      expect(
        screen.getByTestId(TestUtils.Header.avatarOuterDivTestId, {})
      ).toHaveAttribute("hidden");
    });
  });
});
