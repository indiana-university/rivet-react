/*
Copyright (C) 2018 The Trustees of Indiana University
SPDX-License-Identifier: BSD-3-Clause
*/
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import React from "react";
import RivetTestComponent from "./RivetTestComponent";

describe("Rivetize", () => {
  describe("alignContent", alignContentTests);
  describe("alignItems", alignItemsTests);
  describe("alignSelf", alignSelfTests);
  describe("bg", bgTests);
  describe("border", borderTests);
  describe("borderColor", borderColorTests);
  describe("color", colorTests);
  describe("display", displayTests);
  describe("flex", flexTests);
  describe("flexDirection", flexDirectionTests);
  describe("flow", flowTests);
  describe("grow", growTests);
  describe("fontFamily", fontFamilyTests);
  describe("hide", hideTests);
  describe("justifyContent", justifyContentTests);
  describe("lhTitle", lhTitleTests);
  describe("margin", marginTests);
  describe("padding", paddingTests);
  describe("prose", proseTests);
  describe("shadow", shadowTests);
  describe("shrink", shrinkTests);
  describe("stopBreak", stopBreakTests);
  describe("textAlign", textAlignTests);
  describe("typescale", typescaleTests);
  describe("uppercase", uppercaseTests);
  describe("weight", weightTests);
  describe("width", widthTests);
  describe("z", zTests);
});

function alignContentTests() {
  const valid = [
    {
      values: "start",
      expected: "rvt-content-start",
    },
    {
      values: "end",
      expected: "rvt-content-end",
    },
    {
      values: "center-lg-up",
      expected: "rvt-content-center-lg-up",
    },
    {
      values: ["end-lg-up", "center"],
      expected: "rvt-content-end-lg-up rvt-content-center",
    },
    {
      values: ["end-lg-up", "bad", "center"],
      expected: "rvt-content-end-lg-up rvt-content-center",
    },
  ];
  const invalid = ["BAD", null, ""];
  describe("alignContent", () => {
    testPresent("alignContent", valid);
    testNotPresent("alignContent", invalid);
  });
}

function alignItemsTests() {
  const valid = [
    {
      values: "start",
      expected: "rvt-items-start",
    },
    {
      values: "end",
      expected: "rvt-items-end",
    },
    {
      values: "center-lg-up",
      expected: "rvt-items-center-lg-up",
    },
    {
      values: ["end-lg-up", "center"],
      expected: "rvt-items-end-lg-up rvt-items-center",
    },
    {
      values: ["end-lg-up", "bad", "center"],
      expected: "rvt-items-end-lg-up rvt-items-center",
    },
  ];
  const invalid = ["BAD", null, ""];
  describe("alignItems", () => {
    testPresent("alignItems", valid);
    testNotPresent("alignItems", invalid);
  });
}

function alignSelfTests() {
  const valid = [
    {
      values: "self-start",
      expected: "rvt-self-start",
    },
    {
      values: "self-end",
      expected: "rvt-self-end",
    },
    {
      values: "self-end-lg-up",
      expected: "rvt-self-end-lg-up",
    },
    {
      values: ["self-end-lg-up", "center-end"],
      expected: "rvt-self-end-lg-up rvt-center-end",
    },
  ];
  const invalid = ["BAD", null, ""];
  describe("alignSelf", () => {
    testPresent("alignSelf", valid);
    testNotPresent("alignSelf", invalid);
  });
}

function bgTests() {
  const valid = [
    {
      values: "blue",
      expected: "rvt-bg-blue",
    },
    {
      values: "blue-000",
      expected: "rvt-bg-blue-000",
    },
    {
      values: "blue-700",
      expected: "rvt-bg-blue-700",
    },
    {
      values: "crimson",
      expected: "rvt-bg-crimson",
    },
  ];
  const invalid = ["BAD", null, ""];
  describe("bg", () => {
    testPresent("bg", valid);
    testNotPresent("bg", invalid);
  });
}

function borderTests() {
  const valid = [
    {
      values: "top",
      expected: "rvt-border-top",
    },
    {
      values: "right",
      expected: "rvt-border-right",
    },
    {
      values: "-right",
      expected: "rvt-border-right-none",
    },
    {
      values: "all",
      expected: "rvt-border-all",
    },
    {
      values: "radius",
      expected: "rvt-border-all rvt-border-radius",
    },
    {
      values: ["top", "bottom"],
      expected: "rvt-border-top rvt-border-bottom",
    },
    {
      values: ["top", "Bad", "bottom"],
      expected: "rvt-border-top rvt-border-bottom",
    },
  ];
  const invalid = ["BAD", null, ""];
  describe("border", () => {
    testPresent("border", valid);
    testNotPresent("border", invalid);
  });
}

function borderColorTests() {
  const valid = [
    {
      values: "blue",
      expected: "rvt-border-color-blue",
    },
    {
      values: "green",
      expected: "rvt-border-color-green",
    },
    {
      values: "crimson",
      expected: "rvt-border-color-crimson",
    },
  ];
  const invalid = ["BAD", null, ""];
  describe("borderColor", () => {
    testPresent("borderColor", valid);
    testNotPresent("borderColor", invalid);
  });
}

function colorTests() {
  const valid = [
    {
      values: "blue",
      expected: "rvt-color-blue",
    },
    {
      values: "blue-000",
      expected: "rvt-color-blue-000",
    },
    {
      values: "blue-700",
      expected: "rvt-color-blue-700",
    },
    {
      values: "crimson",
      expected: "rvt-color-crimson",
    },
  ];
  const invalid = ["BAD", null, ""];
  describe("color", () => {
    testPresent("color", valid);
    testNotPresent("color", invalid);
  });
}

function displayTests() {
  const valid = [
    {
      values: "block",
      expected: "rvt-display-block",
    },
    {
      values: "inline",
      expected: "rvt-display-inline",
    },
    {
      values: "none",
      expected: "rvt-display-none",
    },
  ];
  const invalid = ["BAD", null, ""];
  describe("display", () => {
    testPresent("display", valid);
    testNotPresent("display", invalid);
  });
}

function flexTests() {
  const valid = [
    {
      values: "normal",
      expected: "rvt-flex",
    },
    {
      values: "inline",
      expected: "rvt-inline-flex",
    },
    {
      values: "inline-lg-up",
      expected: "rvt-inline-flex-lg-up",
    },
    {
      values: ["inline-lg-up", "normal"],
      expected: "rvt-inline-flex-lg-up rvt-flex",
    },
    {
      values: ["inline-lg-up", "bad", "normal"],
      expected: "rvt-inline-flex-lg-up rvt-flex",
    },
  ];
  const invalid = ["BAD", null, ""];
  describe("flex", () => {
    testPresent("flex", valid);
    testNotPresent("flex", invalid);
  });
}

function flexDirectionTests() {
  const valid = [
    {
      values: "row",
      expected: "rvt-flex-row",
    },
    {
      values: "row-reverse",
      expected: "rvt-flex-row-reverse",
    },
    {
      values: "column-lg-up",
      expected: "rvt-flex-column-lg-up",
    },
    {
      values: ["row-lg-up", "column"],
      expected: "rvt-flex-row-lg-up rvt-flex-column",
    },
    {
      values: ["row-lg-up", "bad", "column"],
      expected: "rvt-flex-row-lg-up rvt-flex-column",
    },
  ];
  const invalid = ["BAD", null, ""];
  describe("flexDirection", () => {
    testPresent("flexDirection", valid);
    testNotPresent("flexDirection", invalid);
  });
}

function flexWrapTests() {
  const valid = [
    {
      values: "wrap",
      expected: "rvt-wrap",
    },
    {
      values: "no-wrap",
      expected: "rvt-no-wrap",
    },
    {
      values: "wrap-lg-up",
      expected: "rvt-wrap-lg-up",
    },
    {
      values: ["wrap-lg-up", "no-wrap"],
      expected: "rvt-wrap-lg-up rvt-no-wrap",
    },
    {
      values: ["wrap-lg-up", "bad", "no-wrap"],
      expected: "rvt-wrap-lg-up rvt-no-wrap",
    },
  ];
  const invalid = ["BAD", null, ""];
  describe("flexWrap", () => {
    testPresent("flexWrap", valid);
    testNotPresent("flexWrap", invalid);
  });
}

function flowTests() {
  describe("flow", () => {
    it("should specify style", () => {
      render(<RivetTestComponent flow />);
      expect(screen.getByTestId("test")).toHaveClass("rvt-flow");
    });
    testBooleanAux("flow", "rvt-flow");
  });
}

function growTests() {
  const valid = [
    {
      values: "0",
      expected: "rvt-grow-0",
    },
    {
      values: "1",
      expected: "rvt-grow-1",
    },
    {
      values: 1,
      expected: "rvt-grow-1",
    },
    {
      values: "0-lg-up",
      expected: "rvt-grow-0-lg-up",
    },
    {
      values: ["1-lg-up", "0"],
      expected: "rvt-grow-1-lg-up rvt-grow-0",
    },
    {
      values: ["1-lg-up", "bad", "0"],
      expected: "rvt-grow-1-lg-up rvt-grow-0",
    },
  ];
  const invalid = ["BAD", null, ""];
  describe("grow", () => {
    testPresent("grow", valid);
    testNotPresent("grow", invalid);
  });
}

function shrinkTests() {
  const valid = [
    {
      values: "0",
      expected: "rvt-shrink-0",
    },
    {
      values: "1",
      expected: "rvt-shrink-1",
    },
    {
      values: 1,
      expected: "rvt-shrink-1",
    },
    {
      values: "1-lg-up",
      expected: "rvt-shrink-1-lg-up",
    },
    {
      values: ["1-lg-up", "0"],
      expected: "rvt-shrink-1-lg-up rvt-shrink-0",
    },
    {
      values: ["1-lg-up", "bad", "0"],
      expected: "rvt-shrink-1-lg-up rvt-shrink-0",
    },
  ];
  const invalid = ["BAD", null, ""];
  describe("shrink", () => {
    testPresent("shrink", valid);
    testNotPresent("shrink", invalid);
  });
}

function fontFamilyTests() {
  const valid = [
    {
      values: "sans",
      expected: "rvt-font-sans",
    },
    {
      values: "serif",
      expected: "rvt-font-serif",
    },
    {
      values: "mono",
      expected: "rvt-font-mono",
    },
  ];
  const invalid = ["BAD", null, ""];
  describe("fontFamily", () => {
    testPresent("fontFamily", valid);
    testNotPresent("fontFamily", invalid);
  });
}

function hideTests() {
  const valid = [
    {
      values: "sr",
      expected: "rvt-sr-only",
    },
    {
      values: "all",
      expected: "rvt-display-none",
    },
    {
      values: "lg-up",
      expected: "rvt-hide-lg-up",
    },
    {
      values: "md-down",
      expected: "rvt-hide-md-down",
    },
  ];
  const invalid = ["BAD", null, ""];
  describe("hide", () => {
    testPresent("hide", valid);
    testNotPresent("hide", invalid);
  });
}

function justifyContentTests() {
  const valid = [
    {
      values: "start",
      expected: "rvt-justify-start",
    },
    {
      values: "end",
      expected: "rvt-justify-end",
    },
    {
      values: "center-lg-up",
      expected: "rvt-justify-center-lg-up",
    },
    {
      values: ["end-lg-up", "center"],
      expected: "rvt-justify-end-lg-up rvt-justify-center",
    },
  ];
  const invalid = ["BAD", null, ""];
  describe("justifyContent", () => {
    testPresent("justifyContent", valid);
    testNotPresent("justifyContent", invalid);
  });
}

function lhTitleTests() {
  describe("lhTitle", () => {
    it("should specify style", () => {
      render(<RivetTestComponent lhTitle />);
      expect(screen.getByTestId("test")).toHaveClass("rvt-lh-title");
    });
    testBooleanAux("lhTitle", "rvt-lh-title");
  });
}

function marginTests() {
  const valid = [
    {
      values: "sm",
      expected: "rvt-m-all-sm",
    },
    {
      values: "lg",
      expected: "rvt-m-all-lg",
    },
    {
      values: "-lg",
      expected: "-rvt-m-all-lg",
    },
    {
      values: { top: "sm", bottom: "lg" },
      expected: "rvt-m-top-sm rvt-m-bottom-lg",
    },
    {
      values: { sm: "top", lg: ["right", "left"] },
      expected: "rvt-m-top-sm rvt-m-right-lg rvt-m-left-lg",
    },
    {
      values: "md-lg-up",
      expected: "rvt-m-all-md-lg-up",
    },
  ];
  const invalid = ["BAD", null, ""];
  describe("margin", () => {
    testPresent("margin", valid);
    testNotPresent("margin", invalid);
  });
}

function paddingTests() {
  const valid = [
    {
      values: "sm",
      expected: "rvt-p-all-sm",
    },
    {
      values: "lg",
      expected: "rvt-p-all-lg",
    },
    {
      values: "-lg",
      expected: "-rvt-p-all-lg",
    },
    {
      values: { top: "sm", bottom: "lg", tb: "xs" },
      expected: "rvt-p-top-sm rvt-p-bottom-lg",
    },
    {
      values: { sm: "top", lg: ["right", "left"] },
      expected: "rvt-p-top-sm rvt-p-right-lg rvt-p-left-lg",
    },
    {
      values: "md-lg-up",
      expected: "rvt-p-all-md-lg-up",
    },
  ];
  const invalid = ["BAD", null, ""];
  describe("padding", () => {
    testPresent("padding", valid);
    testNotPresent("padding", invalid);
  });
}

function proseTests() {
  describe("prose", () => {
    it("should specify style", () => {
      render(<RivetTestComponent prose />);
      expect(screen.getByTestId("test")).toHaveClass("rvt-prose");
    });
    testBooleanAux("prose", "rvt-prose");
  });
}

function shadowTests() {
  const valid = [
    {
      values: "normal",
      expected: "rvt-shadow",
    },
    {
      values: "subtle",
      expected: "rvt-shadow-subtle",
    },
    {
      values: "heavy",
      expected: "rvt-shadow-heavy",
    },
  ];
  const invalid = ["BAD", null, ""];
  describe("shadow", () => {
    testPresent("shadow", valid);
    testNotPresent("shadow", invalid);
  });
}

function stopBreakTests() {
  describe("stopBreak", () => {
    it("should specify style", () => {
      render(<RivetTestComponent stopBreak />);
      expect(screen.getByTestId("test")).toHaveClass("rvt-text-nobr");
    });
    testBooleanAux("stopBreak", "rvt-text-nobr");
  });
}

function textAlignTests() {
  const valid = [
    {
      values: "left",
      expected: "rvt-text-left",
    },
    {
      values: "center",
      expected: "rvt-text-center",
    },
    {
      values: "right",
      expected: "rvt-text-right",
    },
  ];
  const invalid = ["BAD", null, ""];
  describe("textAlign", () => {
    testPresent("textAlign", valid);
    testNotPresent("textAlign", invalid);
  });
}

function typescaleTests() {
  const valid = [
    {
      values: "sm",
      expected: "rvt-ts-sm",
    },
    {
      values: "lg",
      expected: "rvt-ts-lg",
    },
    {
      values: "26",
      expected: "rvt-ts-26",
    },
    {
      values: 26,
      expected: "rvt-ts-26",
    },
    {
      values: "md-lg-up",
      expected: "rvt-ts-md-lg-up",
    },
    {
      values: ["md-lg-up", "lg-xxl-up", "sm"],
      expected: "rvt-ts-md-lg-up rvt-ts-lg-xxl-up rvt-ts-sm",
    },
    {
      values: ["md-lg-up", "bad", "lg-xxl-up", "sm"],
      expected: "rvt-ts-md-lg-up rvt-ts-lg-xxl-up rvt-ts-sm",
    },
  ];
  const invalid = ["BAD", null, ""];
  describe("typescale", () => {
    testPresent("typescale", valid);
    testNotPresent("typescale", invalid);
  });
}

function uppercaseTests() {
  describe("uppercase", () => {
    it("should specify style", () => {
      render(<RivetTestComponent uppercase />);
      expect(screen.getByTestId("test")).toHaveClass("rvt-text-uppercase");
    });
    testBooleanAux("uppercase", "rvt-text-uppercase");
  });
}

function weightTests() {
  const valid = [
    {
      values: "regular",
      expected: "rvt-text-regular",
    },
    {
      values: "medium",
      expected: "rvt-text-medium",
    },
    {
      values: "bold",
      expected: "rvt-text-bold",
    },
  ];
  const invalid = ["BAD", null, ""];
  describe("weight", () => {
    testPresent("weight", valid);
    testNotPresent("weight", invalid);
  });
}

function widthTests() {
  const valid = [
    {
      values: "sm",
      expected: "rvt-width-sm",
    },
    {
      values: "lg",
      expected: "rvt-width-lg",
    },
    {
      values: "4-xl",
      expected: "rvt-width-4-xl",
    },
    {
      values: "md-lg-up",
      expected: "rvt-width-md-lg-up",
    },
    {
      values: ["md-lg-up", "lg-xxl-up", "sm"],
      expected: "rvt-width-md-lg-up rvt-width-lg-xxl-up rvt-width-sm",
    },
    {
      values: ["md-lg-up", "bad", "lg-xxl-up", "sm"],
      expected: "rvt-width-md-lg-up rvt-width-lg-xxl-up rvt-width-sm",
    },
  ];
  const invalid = ["BAD", null, ""];
  describe("width", () => {
    testPresent("width", valid);
    testNotPresent("width", invalid);
  });
}

function zTests() {
  const valid = [
    {
      values: "1",
      expected: "rvt-z-100",
    },
    {
      values: 2,
      expected: "rvt-z-200",
    },
    {
      values: "5",
      expected: "rvt-z-500",
    },
    {
      values: "10",
      expected: "rvt-z-1000",
    },
  ];
  const invalid = ["BAD", null, ""];
  describe("z", () => {
    testPresent("z", valid);
    testNotPresent("z", invalid);
  });
}

function testPresent(name, tests) {
  tests.forEach((test) => {
    const value = test.values;
    const results = test.expected;
    it("should specify style for: " + value, () => {
      const params = {
        [name]: value,
      };
      render(<RivetTestComponent {...params} />);
      expect(screen.getByTestId("test")).toHaveClass(results);
    });
  });
}

function testNotPresent(name, tests) {
  tests.forEach((value) => {
    const params = {
      [name]: value,
    };
    it("should not specify style for: " + value, () => {
      render(<RivetTestComponent {...params} />);
      expect(screen.getByTestId("test")).not.toHaveClass();
    });
  });
}

function testBooleanAux(param, value) {
  it("should specify style", () => {
    render(<RivetTestComponent {...{ [param]: "true" }} />);
    expect(screen.getByTestId("test")).toHaveClass(value);
  });
  it("should specify style", () => {
    render(<RivetTestComponent {...{ [param]: "TRUE" }} />);
    expect(screen.getByTestId("test")).toHaveClass(value);
  });
  it("should specify style", () => {
    render(<RivetTestComponent {...{ [param]: "false" }} />);
    expect(screen.getByTestId("test")).not.toHaveClass(value);
  });
  it("should specify style", () => {
    render(<RivetTestComponent {...{ [param]: "FALSE" }} />);
    expect(screen.getByTestId("test")).not.toHaveClass(value);
  });
  it("should specify style", () => {
    render(<RivetTestComponent />);
    expect(screen.getByTestId("test")).not.toHaveClass(value);
  });
}
