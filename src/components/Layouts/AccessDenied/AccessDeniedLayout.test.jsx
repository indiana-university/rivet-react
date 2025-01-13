import AccessDeniedLayout from "./AccessDeniedLayout.jsx";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import React from "react";

describe("<AccessDeniedLayout />", () => {
  it("should display access denied error message", async () => {
    const errorMessage =
      "Sorry, but you don't have permission to view this page or resource. Try searching the site or using the links below to find what you’re looking for.";
    const { container, getByText } = render(
      <AccessDeniedLayout errorMessage={errorMessage} />,
    );
    const h1 = container.querySelector("h1");
    expect(h1.innerHTML).toBe("Access denied");
    expect(getByText(errorMessage)).toBeInTheDocument();
  });
});
