/*
Copyright (C) 2018 The Trustees of Indiana University
SPDX-License-Identifier: BSD-3-Clause
*/
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import React from "react";
import { TestUtils } from "./TestUtils.js";
import Sticker, { StickerNames } from "./RivetStickers.jsx";

describe("<Sticker>", () => {
  describe("Sticker list check", stickerListTests);
  it("should have a default height of 100%", () => {
    render(<Sticker name={StickerNames.PAGE_NOT_FOUND} />);
    expect(
      screen.queryByTestId(TestUtils.RivetStickers.testId, {}),
    ).toHaveAttribute("height", "100%");
  });
  it("should pass a custom height", () => {
    render(<Sticker name={StickerNames.PAGE_NOT_FOUND} height="50%" />);
    expect(
      screen.queryByTestId(TestUtils.RivetStickers.testId, {}),
    ).toHaveAttribute("height", "50%");
  });
  it("should apply a custom class", () => {
    render(<Sticker name={StickerNames.PAGE_NOT_FOUND} className="foo" />);
    expect(
      screen.queryByTestId(TestUtils.RivetStickers.testId, {}),
    ).toHaveClass("foo");
  });
});

function stickerListTests() {
  it("should render page not found sticker without crashing", () => {
    render(
      <Sticker
        data-testid={TestUtils.RivetStickers.testId}
        name={StickerNames.PAGE_NOT_FOUND}
      />,
    );
    expect(
      screen.queryByTestId(TestUtils.RivetStickers.testId, {}),
    ).toBeVisible();
  });
  it("should render access denied sticker without crashing", () => {
    render(
      <Sticker
        data-testid={TestUtils.RivetStickers.testId}
        name={StickerNames.ACCESS_DENIED}
      />,
    );
    expect(
      screen.queryByTestId(TestUtils.RivetStickers.testId, {}),
    ).toBeVisible();
  });
  it("should render server error sticker without crashing", () => {
    render(
      <Sticker
        data-testid={TestUtils.RivetStickers.testId}
        name={StickerNames.SERVER_ERROR}
      />,
    );
    expect(
      screen.queryByTestId(TestUtils.RivetStickers.testId, {}),
    ).toBeVisible();
  });
}
