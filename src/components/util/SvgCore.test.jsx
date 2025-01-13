import SvgCore from "./SvgCore.jsx";
import { render } from "@testing-library/react";
import React from "react";
import "@testing-library/jest-dom";

describe("<SvgCore />", () => {
  it("should render an svg element with aria-hidden attribute", () => {
    const { container } = render(<SvgCore />);
    const svg = container.querySelector("svg");
    expect(svg).toBeInTheDocument();
    expect(svg).toHaveAttribute("aria-hidden", "true");
  });
  it("should render an svg element with additional props", () => {
    const { container } = render(
      <SvgCore width="100" height="100" fill="red" />,
    );
    const svg = container.querySelector("svg");
    expect(svg).toHaveAttribute("width", "100");
    expect(svg).toHaveAttribute("height", "100");
    expect(svg).toHaveAttribute("fill", "red");
  });
  it("should render children inside the svg element", () => {
    const { container } = render(
      <SvgCore>
        <div className="test-div">Test Content</div>
      </SvgCore>,
    );
    const div = container.querySelector("div");
    expect(div).toBeInTheDocument();
    expect(div).toHaveClass("test-div");
    expect(div).toHaveTextContent("Test Content");
  });
  it("should render an empty svg when no children are passed", () => {
    const { container } = render(<SvgCore />);
    const svg = container.querySelector("svg");
    expect(svg).toBeEmptyDOMElement();
  });
});
