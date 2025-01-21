/*
Copyright (C) 2018 The Trustees of Indiana University
SPDX-License-Identifier: BSD-3-Clause
*/
import { registerIcon } from "./rivet-icon-element";

const iconName = "arrow-left";
const iconSvg = `<svg><path d="M15 7H4.156l4.107-4.854L6.737.854.69 8l6.047 7.146 1.526-1.292L4.156 9H15V7Z"/></svg>`;

describe("registerIcon", () => {
  it("should error if no name is provided", () => {
    expect(() => registerIcon(undefined, iconSvg)).toThrow(
      "Rivet Icons: Name must be a string.",
    );
  });
  it("should error if an object is provided as the name", () => {
    expect(() => registerIcon({ name: iconName }, iconSvg)).toThrow(
      "Rivet Icons: Name must be a string.",
    );
  });
  it("should error if multiple svg tags are defined as the content", () => {
    expect(() => registerIcon(iconName, `${iconSvg}${iconSvg}`)).toThrow(
      "Rivet Icons (arrow-left): Content must contain one SVG element.",
    );
  });
  it("should error if a div tag is defined as the content", () => {
    expect(() => registerIcon(iconName, `<div>${iconSvg}</div>`)).toThrow(
      "Rivet Icons (arrow-left): Content must be a SVG element.",
    );
  });
});
