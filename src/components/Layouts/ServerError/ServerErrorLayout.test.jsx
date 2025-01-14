/*
Copyright (C) 2018 The Trustees of Indiana University
SPDX-License-Identifier: BSD-3-Clause
*/
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import React from "react";
import ServerErrorLayout from "./ServerErrorLayout.jsx";

describe("<ServerErrorLayout />", () => {
  it("should display server error message", async () => {
    const errorMessage =
      "Sorry, but the web server ran into an error while processing your request. If the problem persists, contact us using one of the methods below.";

    const { container, getByText } = render(
      <ServerErrorLayout errorMessage={errorMessage} />,
    );
    const h1 = container.querySelector("h1");
    expect(h1.innerHTML).toBe("Server error");
    expect(getByText(errorMessage)).toBeInTheDocument();
  });
});
