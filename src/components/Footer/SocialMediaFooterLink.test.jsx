/*
Copyright (C) 2018 The Trustees of Indiana University
SPDX-License-Identifier: BSD-3-Clause
*/
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import React from "react";

import SocialMediaFooterLink from "./SocialMediaFooterLink";
import { TestUtils } from "../util/TestUtils.js";

describe("<SocialMediaFooterLink />", () => {
  describe("SocialMediaFooterLink", () => {
    it("should render without error", async () => {
      render(
        <SocialMediaFooterLink
          data-testid={TestUtils.Footer.testId}
          label="Test Link"
          url="https://www.facebook.com/IndianaUniversity"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            height="40"
            viewBox="0 0 40 40"
            width="40"
          >
            <path
              d="M20 40C31.0457 40 40 31.0457 40 20C40 8.9543 31.0457 0 20 0C8.9543 0 0 8.9543 0 20C0 31.0457 8.9543 40 20 40Z"
              fill="#7A1705"
            ></path>
            <path
              d="M24.8996 9.99982V13.1998H23.0996C23.0996 13.1998 21.4996 12.9998 21.4996 14.4998V16.9998H24.7996L24.3996 20.3998H21.4996V29.9998H17.6996V20.2998H15.0996V16.9998H17.7996V14.0998C17.7996 14.0998 17.4996 12.4998 18.8996 11.1998C20.2996 9.89982 22.1996 9.99982 22.1996 9.99982H24.8996Z"
              fill="#F7F7F8"
            ></path>
          </svg>
        </SocialMediaFooterLink>
      );

      const component = await screen.findByTestId(TestUtils.Footer.testId);
      const link = component.children[0];
      const label = link.children[0];
      const content = link.children[1];

      expect(link.nodeName).toBe("A");
      expect(link.href).toBe("https://www.facebook.com/IndianaUniversity");

      expect(label).toHaveClass("rvt-sr-only");
      expect(label.innerHTML).toBe("Test Link");

      expect(content.nodeName).toBe("svg");
    });
  });

  describe("SocialMediaFooterLink_MissingUrl", () => {
    it("should render without error", async () => {
      render(
        <SocialMediaFooterLink
          data-testid={TestUtils.Footer.testId}
          label="Test Link"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            height="40"
            viewBox="0 0 40 40"
            width="40"
          >
            <path
              d="M20 40C31.0457 40 40 31.0457 40 20C40 8.9543 31.0457 0 20 0C8.9543 0 0 8.9543 0 20C0 31.0457 8.9543 40 20 40Z"
              fill="#7A1705"
            ></path>
            <path
              d="M24.8996 9.99982V13.1998H23.0996C23.0996 13.1998 21.4996 12.9998 21.4996 14.4998V16.9998H24.7996L24.3996 20.3998H21.4996V29.9998H17.6996V20.2998H15.0996V16.9998H17.7996V14.0998C17.7996 14.0998 17.4996 12.4998 18.8996 11.1998C20.2996 9.89982 22.1996 9.99982 22.1996 9.99982H24.8996Z"
              fill="#F7F7F8"
            ></path>
          </svg>
        </SocialMediaFooterLink>
      );

      expect(
        screen.queryByTestId(TestUtils.Footer.testId)
      ).not.toBeInTheDocument();
    });
  });

  describe("SocialMediaFooterLink_MixedContent", () => {
    it("should render without error", async () => {
      render(
        <SocialMediaFooterLink
          data-testid={TestUtils.Footer.testId}
          label="Test Link"
          url="https://www.facebook.com/IndianaUniversity"
        >
          <span>Facebook</span>
          <div>Link</div>
        </SocialMediaFooterLink>
      );

      const component = await screen.findByTestId(TestUtils.Footer.testId);
      const link = component.children[0];
      const label = link.children[0];
      const content1 = link.children[1];
      const content2 = link.children[2];

      expect(link.nodeName).toBe("A");
      expect(link.href).toBe("https://www.facebook.com/IndianaUniversity");

      expect(label).toHaveClass("rvt-sr-only");
      expect(label.innerHTML).toBe("Test Link");

      expect(content1.nodeName).toBe("SPAN");
      expect(content1.innerHTML).toBe("Facebook");

      expect(content2.nodeName).toBe("DIV");
      expect(content2.innerHTML).toBe("Link");
    });
  });
});
