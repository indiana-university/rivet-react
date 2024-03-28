import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import React from "react";
import Tabs from "./Tabs";
import TabPanel from "./TabPanel";
import { TestUtils } from "../util/TestUtils";

const testIds = TestUtils.Tabs

const customClassName = "custom-style"
const customPanelClassName = "custom-style-item"
const ariaLabel = "Test Label"

describe("<Tabs />", () => {
  const tabsId = "tablist"
  describe("Rendering", () => {
    it("should render without throwing an error", () => {
      render(
        <Tabs
          id={tabsId}
          className={customClassName}
          label={ariaLabel}
          testMode
        >
          <TabPanel className={customPanelClassName} testMode title="tab 1">
            <p>test content 1</p>
          </TabPanel>
          <TabPanel className={customPanelClassName} testMode title="tab 2">
            <p>test content 2</p>
          </TabPanel>
          <TabPanel className={customPanelClassName} testMode title="tab 3">
            <p>test content 3</p>
          </TabPanel>
        </Tabs>
      );
      checkRenderTabsContainer(4)
      checkRenderControls()
      checkRenderControl(`tab_${tabsId}_control_0`, true, "tab 1")
      checkRenderControl(`tab_${tabsId}_control_1`, false, "tab 2")
      checkRenderControl(`tab_${tabsId}_control_2`, false, "tab 3")
      checkRenderTabPanel(`tab_${tabsId}_control_0`, true, "<p>test content 1</p>")
      checkRenderTabPanel(`tab_${tabsId}_control_1`, false, "<p>test content 2</p>")
      checkRenderTabPanel(`tab_${tabsId}_control_2`, false, "<p>test content 3</p>")
    });
    it("if no children, should render without throwing an error", () => {
      render(
        <Tabs
          id={tabsId}
          className={customClassName}
          label={ariaLabel}
          testMode
        />
      );
      checkRenderTabsContainer(1)
      });
  });

  describe("Actions", () => {
    it("Clicking a tab changes to that tab", () => {
      render(
        <Tabs
          id={tabsId}
          className={customClassName}
          label={ariaLabel}
          testMode
        >
          <TabPanel className={customPanelClassName} testMode title="tab 1">
            <p>test content 1</p>
          </TabPanel>
          <TabPanel className={customPanelClassName} testMode title="tab 2">
            <p>test content 2</p>
          </TabPanel>
          <TabPanel className={customPanelClassName} testMode title="tab 3">
            <p>test content 3</p>
          </TabPanel>
        </Tabs>
      );
      checkRenderTabsContainer(4)
      checkRenderControls()
      checkRenderControl(`tab_${tabsId}_control_0`, true, "tab 1")
      checkRenderControl(`tab_${tabsId}_control_1`, false, "tab 2")
      checkRenderControl(`tab_${tabsId}_control_2`, false, "tab 3")
      checkRenderTabPanel(`tab_${tabsId}_control_0`, true, "<p>test content 1</p>")
      checkRenderTabPanel(`tab_${tabsId}_control_1`, false, "<p>test content 2</p>")
      checkRenderTabPanel(`tab_${tabsId}_control_2`, false, "<p>test content 3</p>")
      
      const tab1 = screen.getByTestId(`${testIds.controls}-tab_${tabsId}_control_0`);
      const tab2 = screen.getByTestId(`${testIds.controls}-tab_${tabsId}_control_1`);
      const tab3 = screen.getByTestId(`${testIds.controls}-tab_${tabsId}_control_2`);
      console.log("click tab 2")
      fireEvent.click(tab2)
      checkRenderControl(`tab_${tabsId}_control_0`, false, "tab 1")
      checkRenderControl(`tab_${tabsId}_control_1`, true, "tab 2")
      checkRenderControl(`tab_${tabsId}_control_2`, false, "tab 3")
      checkRenderTabPanel(`tab_${tabsId}_control_0`, false, "<p>test content 1</p>")
      checkRenderTabPanel(`tab_${tabsId}_control_1`, true, "<p>test content 2</p>")
      checkRenderTabPanel(`tab_${tabsId}_control_2`, false, "<p>test content 3</p>")
      console.log("click tab 3")
      fireEvent.click(tab3)
      checkRenderControl(`tab_${tabsId}_control_0`, false, "tab 1")
      checkRenderControl(`tab_${tabsId}_control_1`, false, "tab 2")
      checkRenderControl(`tab_${tabsId}_control_2`, true, "tab 3")
      checkRenderTabPanel(`tab_${tabsId}_control_0`, false, "<p>test content 1</p>")
      checkRenderTabPanel(`tab_${tabsId}_control_1`, false, "<p>test content 2</p>")
      checkRenderTabPanel(`tab_${tabsId}_control_2`, true, "<p>test content 3</p>")
      console.log("click tab 1")
      fireEvent.click(tab1)
      checkRenderControl(`tab_${tabsId}_control_0`, true, "tab 1")
      checkRenderControl(`tab_${tabsId}_control_1`, false, "tab 2")
      checkRenderControl(`tab_${tabsId}_control_2`, false, "tab 3")
      checkRenderTabPanel(`tab_${tabsId}_control_0`, true, "<p>test content 1</p>")
      checkRenderTabPanel(`tab_${tabsId}_control_1`, false, "<p>test content 2</p>")
      checkRenderTabPanel(`tab_${tabsId}_control_2`, false, "<p>test content 3</p>")
    });
  });

  describe("Options", () => {
    it("if initial tab set, correct panel displays", () => {
      render(
        <Tabs
          id={tabsId}
          className={customClassName}
          initialTab={1}
          label={ariaLabel}
          testMode
        >
          <TabPanel className={customPanelClassName} testMode title="tab 1">
            <p>test content 1</p>
          </TabPanel>
          <TabPanel className={customPanelClassName} testMode title="tab 2">
            <p>test content 2</p>
          </TabPanel>
          <TabPanel className={customPanelClassName} testMode title="tab 3">
            <p>test content 3</p>
          </TabPanel>
        </Tabs>
      );
      checkRenderTabsContainer(4)
      checkRenderControls()
      checkRenderControl(`tab_${tabsId}_control_0`, false, "tab 1")
      checkRenderControl(`tab_${tabsId}_control_1`, true, "tab 2")
      checkRenderControl(`tab_${tabsId}_control_2`, false, "tab 3")
      checkRenderTabPanel(`tab_${tabsId}_control_0`, false, "<p>test content 1</p>")
      checkRenderTabPanel(`tab_${tabsId}_control_1`, true, "<p>test content 2</p>")
      checkRenderTabPanel(`tab_${tabsId}_control_2`, false, "<p>test content 3</p>")
    });
    it("if initial tab not set, 1st panel displays", () => {
      render(
        <Tabs
          id={tabsId}
          className={customClassName}
          label={ariaLabel}
          testMode
        >
          <TabPanel className={customPanelClassName} testMode title="tab 1">
            <p>test content 1</p>
          </TabPanel>
          <TabPanel className={customPanelClassName} testMode title="tab 2">
            <p>test content 2</p>
          </TabPanel>
          <TabPanel className={customPanelClassName} testMode title="tab 3">
            <p>test content 3</p>
          </TabPanel>
        </Tabs>
      );
      checkRenderTabsContainer(4)
      checkRenderControls()
      checkRenderControl(`tab_${tabsId}_control_0`, true, "tab 1")
      checkRenderControl(`tab_${tabsId}_control_1`, false, "tab 2")
      checkRenderControl(`tab_${tabsId}_control_2`, false, "tab 3")
      checkRenderTabPanel(`tab_${tabsId}_control_0`, true, "<p>test content 1</p>")
      checkRenderTabPanel(`tab_${tabsId}_control_1`, false, "<p>test content 2</p>")
      checkRenderTabPanel(`tab_${tabsId}_control_2`, false, "<p>test content 3</p>")
    });
    it("if id not set, value is generated", () => {
      render(
        <Tabs
          className={customClassName}
          initialTab={1}
          label={ariaLabel}
          testMode
        >
          <TabPanel className={customPanelClassName} testMode title="tab 1">
            <p>test content 1</p>
          </TabPanel>
          <TabPanel className={customPanelClassName} testMode title="tab 2">
            <p>test content 2</p>
          </TabPanel>
          <TabPanel className={customPanelClassName} testMode title="tab 3">
            <p>test content 3</p>
          </TabPanel>
        </Tabs>
      );
      const element = screen.getByTestId(testIds.controls);
      const firstControlId = element.children[0].getAttribute("id")
      expect(firstControlId).toContain("tab_undefined_control_0")

    });
    it("if id is set, value is used", () => {
      render(
        <Tabs
          className={customClassName}
          id={tabsId}
          initialTab={1}
          label={ariaLabel}
          testMode
        >
          <TabPanel className={customPanelClassName} testMode title="tab 1">
            <p>test content 1</p>
          </TabPanel>
          <TabPanel className={customPanelClassName} testMode title="tab 2">
            <p>test content 2</p>
          </TabPanel>
          <TabPanel className={customPanelClassName} testMode title="tab 3">
            <p>test content 3</p>
          </TabPanel>
        </Tabs>
      );
      const element = screen.getByTestId(testIds.controls);
      const firstControlId = element.children[0].getAttribute("id")
      expect(firstControlId).toContain(`tab_${tabsId}_control_0`)

    });
    it("default is test mode off", () => {
      render(
        <Tabs
          id={tabsId}
          className={customClassName}
          label={ariaLabel}
        >
          <TabPanel className={customPanelClassName} testMode title="tab 1">
            <p>test content 1</p>
          </TabPanel>
          <TabPanel className={customPanelClassName} testMode title="tab 2">
            <p>test content 2</p>
          </TabPanel>
          <TabPanel className={customPanelClassName} testMode title="tab 3">
            <p>test content 3</p>
          </TabPanel>
        </Tabs>
      );
      const element = screen.queryByTestId(testIds.container);
      expect(element).not.toBeInTheDocument();
    });
  });
});

describe("<TabPanel />", () => {
  describe("Rendering", () => {
    it("should render without throwing an error", () => {
      const id = "panel-1"
      render(
          <TabPanel
            className={customPanelClassName}
            controlId={id}
            testMode
            title="tab 1"
          >
            <p>test content</p>
          </TabPanel>
      );
      checkRenderTabPanel(id, true, "<p>test content</p>")
    });
  });
  describe("Options", () => {
    it("if set to hidden does not display", () => {
      const id = "panel-1"
      render(
          <TabPanel
            className={customPanelClassName}
            controlId={id}
            hidden
            testMode
          >
            <p>test content</p>
          </TabPanel>
      );
      const element = screen.getByTestId(`${testIds.panel}-${id}`);
      expect(element).not.toBeVisible();
    });
    it("if not set to hidden does display", () => {
      const id = "panel-1"
      render(
          <TabPanel
            className={customPanelClassName}
            controlId={id}
            testMode
          >
            <p>test content</p>
          </TabPanel>
      );
      const element = screen.getByTestId(`${testIds.panel}-${id}`);
      expect(element).toBeVisible();
    });

    it("default is test mode off", () => {
      const id = "panel-1"
      render(
          <TabPanel
            className={customPanelClassName}
            controlId={id}
          >
            <p>test content</p>
          </TabPanel>
      );
      const element = screen.queryByTestId(`${testIds.panel}-${id}`);
      expect(element).not.toBeInTheDocument();
    });
  });
});

const checkRenderTabsContainer = (childrenCount) => {
  const element = screen.getByTestId(testIds.container);
  expect(element.nodeName).toBe("DIV")
  expect(element).toHaveClass(customClassName);
  expect(element).toBeVisible();
  expect(element).toHaveClass("rvt-tabs");
  expect(element.children.length).toBe(childrenCount)
}

const checkRenderControls = () => {
  const element = screen.getByTestId(testIds.controls);
  expect(element.nodeName).toBe("DIV")
  expect(element).toBeVisible();
  expect(element).toHaveClass("rvt-tabs__tablist");
  expect(element).toHaveAttribute("role", "tablist");
  expect(element).toHaveAttribute("aria-label", ariaLabel);
  expect(element.children.length).toBe(3)
}

const checkRenderControl = (id, selected, content) => {
  const element = screen.getByTestId(`${testIds.controls}-${id}`);
  expect(element.nodeName).toBe("BUTTON")
  expect(element).toBeVisible();
  expect(element).toHaveClass("rvt-tabs__tab");
  expect(element).toHaveAttribute("role", "tab");
  expect(element).toHaveAttribute("id", id);
  expect(element.innerHTML).toBe(content);
  if(selected) {
    expect(element).not.toHaveAttribute("tabindex", "-1");
  }else {
    expect(element).toHaveAttribute("tabindex", "-1");
  }
}

const checkRenderTabPanel = (id, visible, content) => {
  const element = screen.getByTestId(`${testIds.panel}-${id}`);
  expect(element.nodeName).toBe("DIV")
  expect(element).toHaveClass("rvt-tabs__panel");
  expect(element).toHaveClass(customPanelClassName);
  expect(element).toHaveAttribute("role", "tabpanel");
  expect(element).toHaveAttribute("tabindex", "0");
  expect(element).toHaveAttribute("aria-labelledby", id);
  expect(element.innerHTML).toBe(content);
  if(visible){
    expect(element).toBeVisible();
  }
}
