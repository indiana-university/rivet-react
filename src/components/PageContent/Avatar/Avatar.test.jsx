/*
Copyright (C) 2018 The Trustees of Indiana University
SPDX-License-Identifier: BSD-3-Clause
*/
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import React from "react";
import Avatar from "./Avatar";

describe("<Avatar />", () => {
  describe("Rendering with image", () => {
    it("should render", async () => {
      render(
        <Avatar
          data-testid="test"
          src="https://rivet.iu.edu/img/placeholder/avatar-1.webp"
        />
      );
      const avatar = await screen.getByTestId("test");
      expect(avatar.firstChild.nodeName).toBe("IMG");
      expect(avatar.firstChild).toHaveClass("rvt-avatar__image");
    });
    it("should render with static size", async () => {
      render(
        <Avatar
          data-testid="test"
          size='xs'
          src="https://rivet.iu.edu/img/placeholder/avatar-1.webp"
        />
      );
      const avatar = await screen.getByTestId("test");
      expect(avatar).toHaveClass("rvt-avatar--xs");
      expect(avatar.firstChild.nodeName).toBe("IMG");
      expect(avatar.firstChild).toHaveClass("rvt-avatar__image");
    });
    it("should render with multiple sizes", async () => {
      render(
        <Avatar
          data-testid="test"
          size={['xs','lg-lg-up']}
          src="https://rivet.iu.edu/img/placeholder/avatar-1.webp"
        />
      );
      const avatar = await screen.getByTestId("test");
      expect(avatar).toHaveClass("rvt-avatar--xs");
      expect(avatar).toHaveClass("rvt-avatar--lg-lg-up");
      expect(avatar.firstChild.nodeName).toBe("IMG");
      expect(avatar.firstChild).toHaveClass("rvt-avatar__image");
    });
  });
  describe("Rendering with text", () => {
    it("should render", async () => {
      render(
        <Avatar
          data-testid="test"
          initials="AB"
        />
      );
      const avatar = await screen.getByTestId("test");
      expect(avatar.firstChild.nodeName).toBe("SPAN");
      expect(avatar.firstChild.innerHTML).toBe("AB");
      expect(avatar.firstChild).toHaveClass("rvt-avatar__text");
    });
    it("should render with static size", async () => {
      render(
        <Avatar
          data-testid="test"
          size='xs'
          initials="AB"
        />
      );
      const avatar = await screen.getByTestId("test");
      expect(avatar).toHaveClass("rvt-avatar--xs");
      expect(avatar.firstChild.nodeName).toBe("SPAN");
      expect(avatar.firstChild.innerHTML).toBe("AB");
      expect(avatar.firstChild).toHaveClass("rvt-avatar__text");
    });
    it("should render with multiple sizes", async () => {
      render(
        <Avatar
          className='testclass'
          data-testid="test"
          size={['xs','lg-lg-up']}
          initials="AB"
        />
      );
      const avatar = await screen.getByTestId("test");
      expect(avatar).toHaveClass("testclass");
      expect(avatar).toHaveClass("rvt-avatar--xs");
      expect(avatar).toHaveClass("rvt-avatar--lg-lg-up");
      expect(avatar.firstChild.nodeName).toBe("SPAN");
      expect(avatar.firstChild.innerHTML).toBe("AB");
      expect(avatar.firstChild).toHaveClass("rvt-avatar__text");
    });
  });
});
