/*
Copyright (C) 2018 The Trustees of Indiana University
SPDX-License-Identifier: BSD-3-Clause
*/
import {
  act,
  fireEvent,
  render,
  screen,
  waitFor,
} from "@testing-library/react";
import "@testing-library/jest-dom";
import React from "react";
import MyFile from "./File";
import { TestUtils } from "../util/TestUtils.js";

describe("<File />", () => {
  describe("Rendering and text", () => {
    it("should render successfully", async () => {
      render(<MyFile data-testid={TestUtils.File.testId} />);

      const file = await screen.findByTestId(TestUtils.File.testId);

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
        files: [
          {
            name: fileName,
          },
        ],
      };
      render(<MyFile data-testid={TestUtils.File.testId} innerRef={ref} />);

      const file = await screen.findByTestId(TestUtils.File.testId);

      // get the description
      const description = file.parentNode.children[2];
      expect(description.innerHTML).toBe(fileName);
    });

    it("renders a different message if there is a file", async () => {
      const fileName = "index.html";
      const ref = {
        files: [
          {
            name: fileName,
          },
          {
            name: "index2.html",
          },
        ],
      };
      render(
        <MyFile data-testid={TestUtils.File.testId} innerRef={ref} multiple />
      );

      const file = await screen.findByTestId(TestUtils.File.testId);

      // get the description
      const description = file.parentNode.children[2];
      expect(description.innerHTML).toBe("2 files selected");
    });

    it("should allow resetting if embedded in a form", async () => {
      const fileName = "foo.txt";
      let fileObject = new File(["foo"], fileName, { type: "text/plain" });
      render(
        <form>
          <MyFile
            id={TestUtils.File.testId}
            data-testid={TestUtils.File.testId}
          />
          <input type="reset" data-testid="reset-id" value="Reset" />
        </form>
      );

      let file = await screen.findByTestId(TestUtils.File.testId);
      let description = file.parentNode.children[2];

      expect(description.innerHTML).toBe("No file selected");

      fireEvent.input(file, {
        target: { files: [fileObject] },
      });

      expect(description.innerHTML).toBe(fileName);

      const resetButton = await screen.findByTestId("reset-id");
      fireEvent.click(resetButton);

      // setTimeout for React to do the extra rendering that we dispatched with forceUpdate in File.jsx
      setTimeout(function () {
        expect(file.files.length).toBe(0);
        expect(description.innerHTML).toBe("No file selected");
      }, 10);
    });

    it("calls the user defined onchange function if one is defined", async () => {
      const onchange = jest.fn();
      render(
        <MyFile onChange={onchange} data-testid={TestUtils.File.testId} />
      );

      const file = await screen.findByTestId(TestUtils.File.testId);

      var event = new Event("input", {
        bubbles: true,
        cancelable: true,
      });
      act(() => file.dispatchEvent(event));

      expect(onchange.mock.calls.length).toBe(1);
    });
  });
  describe("Options", () => {
    const testLabel = "test label"
    it("if label is set, should use label", async () => {
      render(<MyFile data-testid={TestUtils.File.testId} label={testLabel}/>);

      const file = await screen.findByTestId(TestUtils.File.testId);

      expect(file.nodeName).toBe("INPUT");
      expect(file.type).toBe("file");

      const parent = file.parentNode;
      expect(parent.nodeName).toBe("DIV");
      expect(parent).toHaveClass("rvt-file");

      const children = parent.children;

      expect(children.length).toBe(3);

      const label = children[1];
      expect(label.nodeName).toBe("LABEL");
      expect(label).toHaveClass("rvt-button");
      expect(label.children.length).toBe(2);
      expect(label.children[0].nodeName).toBe("SPAN");
      expect(label.children[0].innerHTML).toBe(testLabel);
    });
    it("if label is set and multiple, should use label", async () => {
      render(<MyFile data-testid={TestUtils.File.testId} label={testLabel} multiple/>);

      const file = await screen.findByTestId(TestUtils.File.testId);

      expect(file.nodeName).toBe("INPUT");
      expect(file.type).toBe("file");

      const parent = file.parentNode;
      expect(parent.nodeName).toBe("DIV");
      expect(parent).toHaveClass("rvt-file");

      const children = parent.children;

      expect(children.length).toBe(3);

      const label = children[1];
      expect(label.nodeName).toBe("LABEL");
      expect(label).toHaveClass("rvt-button");
      expect(label.children.length).toBe(2);
      expect(label.children[0].nodeName).toBe("SPAN");
      expect(label.children[0].innerHTML).toBe(testLabel);
    });
    it("if secondary is set, should display as secondary", async () => {
      render(<MyFile data-testid={TestUtils.File.testId} secondary/>);

      const file = await screen.findByTestId(TestUtils.File.testId);

      expect(file.nodeName).toBe("INPUT");
      expect(file.type).toBe("file");

      const parent = file.parentNode;
      expect(parent.nodeName).toBe("DIV");
      expect(parent).toHaveClass("rvt-file");

      const children = parent.children;

      expect(children.length).toBe(3);

      const label = children[1];
      expect(label.nodeName).toBe("LABEL");
      expect(label).toHaveClass("rvt-button");
      expect(label).toHaveClass("rvt-button--secondary");
    });
    it("if secondary is not set, should not display as secondary", async () => {
      render(<MyFile data-testid={TestUtils.File.testId}/>);

      const file = await screen.findByTestId(TestUtils.File.testId);

      expect(file.nodeName).toBe("INPUT");
      expect(file.type).toBe("file");

      const parent = file.parentNode;
      expect(parent.nodeName).toBe("DIV");
      expect(parent).toHaveClass("rvt-file");

      const children = parent.children;

      expect(children.length).toBe(3);

      const label = children[1];
      expect(label.nodeName).toBe("LABEL");
      expect(label).toHaveClass("rvt-button");
      expect(label).not.toHaveClass("rvt-button--secondary");
    });
  });
});
