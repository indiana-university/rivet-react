/*
Copyright (C) 2018 The Trustees of Indiana University
SPDX-License-Identifier: BSD-3-Clause
*/
import { act, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import user from "@testing-library/user-event";
import React from "react";
import File from "./File";
import { useReducer } from "react";

describe("<File />", () => {
  const testId = "test-id";
  describe("Rendering and text", () => {
    it("should render successfully", async () => {
      render(<File data-testid={testId} />);

      const file = await screen.findByTestId(testId);

      expect(file.nodeName).toBe("INPUT");
      expect(file.type).toBe("file");

      const parent = file.parentNode;
      expect(parent.nodeName).toBe("DIV");
      expect(parent).toHaveClass("rvt-file");

      const children = parent.children;

      expect(children.length).toBe(3);

      // the input tag is children[0]

      const label = children[1];
      expect(label.nodeName).toBe("LABEL");
      expect(label).toHaveClass("rvt-button");
      expect(label.children.length).toBe(2);
      expect(label.children[0].nodeName).toBe("SPAN");
      expect(label.children[0].innerHTML).toBe("Upload a file");
      expect(label.children[1].nodeName).toBe("svg");

      const description = children[2];
      expect(description.nodeName).toBe("DIV");
      expect(description).toHaveClass("rvt-file__preview");
      expect(description.innerHTML).toBe("No file selected");
    });
    it("renders a different message if there is a file", async () => {
      const fileName = "index.html";
      const ref = {
        current: {
          files: [
            {
              name: fileName,
            },
          ],
        },
      };
      render(<File data-testid={testId} innerRef={ref} />);

      const file = await screen.findByTestId(testId);

      // get the description
      const description = file.parentNode.children[2];
      expect(description.innerHTML).toBe(fileName);
    });

    it("renders a different message if there is a file", async () => {
      const fileName = "index.html";
      const ref = {
        current: {
          files: [
            {
              name: fileName,
            },
            {
              name: "index2.html",
            },
          ],
        },
      };
      render(<File data-testid={testId} innerRef={ref} multiple />);

      const file = await screen.findByTestId(testId);

      // get the description
      const description = file.parentNode.children[2];
      expect(description.innerHTML).toBe("2 files selected");
    });

    it("should allow resetting if embedded in a form", async () => {
      const fileName = "index.html";
      const ref = {
        current: {
          files: [
            {
              name: fileName,
            },
          ],
        },
      };
      render(
        <form>
          <File innerRef={ref} data-testid={testId} />
          <button type="reset" data-testid="reset-id">
            Reset
          </button>
        </form>
      );

      const file = await screen.findByTestId(testId);
      const resetButton = await screen.findByTestId("reset-id");
      await user.click(resetButton);

      // get the description
      const description = file.parentNode.children[2];
      expect(description.innerHTML).toBe("No file selected");
    });

    it("calls the user defined onchange function if one is defined", async () => {
      const onchange = jest.fn();
      render(<File onChange={onchange} data-testid={testId} />);

      const file = await screen.findByTestId(testId);

      var event = new Event("input", {
        bubbles: true,
        cancelable: true,
      });
      act(() => file.dispatchEvent(event));

      expect(onchange.mock.calls.length).toBe(1);
    });
  });
});
