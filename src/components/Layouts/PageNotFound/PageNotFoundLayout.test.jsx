import PageNotFoundLayout from "./PageNotFoundLayout.jsx";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("<PageNotFoundLayout />", () => {
  it("should display page not found error message", async () => {
    const errorMessage =
      "Sorry, but the page you’re looking for doesn’t exist or was moved. The links below may help.";

    const { container, getByText } = render(
      <PageNotFoundLayout errorMessage={errorMessage} />,
    );
    const h1 = container.querySelector("h1");
    expect(h1.innerHTML).toBe("Page not found");
    expect(getByText(errorMessage)).toBeInTheDocument();
  });
});
