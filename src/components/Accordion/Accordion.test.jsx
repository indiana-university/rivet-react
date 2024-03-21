import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import React from "react";
import Accordion from "./Accordion";
import AccordionPanelHeader from "./AccordionPanelHeader";
import AccordionPanel from "./AccordionPanel";
import Icon, { IconNames } from "../util/RivetIcons.jsx";
import { TestUtils } from "../util/TestUtils";

const testIds = TestUtils.Accordion

const accordionId = "accord1"
const customClassName = "custom-style"
const customPanelClassName = "custom-style-panel"

const svgStr = (icon) => `<svg aria-hidden=\"true\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" viewBox=\"0 0 16 16\" data-testid=\"rivetIcon_testId\">${icon}</svg>`
const defaultIconStr = svgStr('<g fill=\"currentColor\"><path class=\"rvt-accordion__icon-bar\" d=\"M8,15a1,1,0,0,1-1-1V2A1,1,0,0,1,9,2V14A1,1,0,0,1,8,15Z\"></path><path d=\"M14,9H2A1,1,0,0,1,2,7H14a1,1,0,0,1,0,2Z\"></path></g>')
const customIconStr = svgStr('<path fill=\"currentColor\" d="M15 7H4.156l4.107-4.854L6.737.854.69 8l6.047 7.146 1.526-1.292L4.156 9H15V7Z\"></path>')
const onClick = jest.fn();

describe("<Accordion />", () => {
  describe("Rendering", () => {
    it("should render without throwing an error", () => {
      render(
        <Accordion
          className={customClassName}
          id={accordionId}
          testMode
        >
          <Accordion.Panel className={customPanelClassName} testMode title="panel 1">content 1</Accordion.Panel>
          <Accordion.Panel className={customPanelClassName} testMode title="panel 2">content 2</Accordion.Panel>
          <Accordion.Panel className={customPanelClassName} testMode title="panel 3">content 3</Accordion.Panel>
        </Accordion>
      );
      checkRenderAccordionContainer(3)
      checkRenderHeader(`accordian_${accordionId}_control_0`, false, "panel 1")
      checkRenderHeader(`accordian_${accordionId}_control_1`, false, "panel 2")
      checkRenderHeader(`accordian_${accordionId}_control_2`, false, "panel 3")
      checkRenderPanel(`accordian_${accordionId}_control_0`, false, "content 1")
      checkRenderPanel(`accordian_${accordionId}_control_1`, false, "content 2")
      checkRenderPanel(`accordian_${accordionId}_control_2`, false, "content 3")
    });
    it("if no children, should render without throwing an error", () => {
      render(
        <Accordion
          className={customClassName}
          id={accordionId}
          testMode
        />
      );
      checkRenderAccordionContainer(0)
    });
  });
  describe("Actions", () => {
    it("Clicking a closed panel should open it", () => {
      render(
        <Accordion
          className={customClassName}
          id={accordionId}
          testMode
        >
          <Accordion.Panel className={customPanelClassName} testMode title="panel 1">content 1</Accordion.Panel>
          <Accordion.Panel className={customPanelClassName} testMode title="panel 2">content 2</Accordion.Panel>
          <Accordion.Panel className={customPanelClassName} testMode title="panel 3">content 3</Accordion.Panel>
        </Accordion>
      );
      checkRenderAccordionContainer(3)
      checkRenderHeader(`accordian_${accordionId}_control_0`, false, "panel 1")
      checkRenderHeader(`accordian_${accordionId}_control_1`, false, "panel 2")
      checkRenderHeader(`accordian_${accordionId}_control_2`, false, "panel 3")
      checkRenderPanel(`accordian_${accordionId}_control_0`, false, "content 1")
      checkRenderPanel(`accordian_${accordionId}_control_1`, false, "content 2")
      checkRenderPanel(`accordian_${accordionId}_control_2`, false, "content 3")
    
      const control1 = screen.getByTestId(`${testIds.header}-accordian_${accordionId}_control_0`).children[0];
      const control2 = screen.getByTestId(`${testIds.header}-accordian_${accordionId}_control_1`).children[0];
      const control3 = screen.getByTestId(`${testIds.header}-accordian_${accordionId}_control_2`).children[0];

      fireEvent.click(control1)
      checkRenderHeader(`accordian_${accordionId}_control_0`, true, "panel 1")
      checkRenderHeader(`accordian_${accordionId}_control_1`, false, "panel 2")
      checkRenderHeader(`accordian_${accordionId}_control_2`, false, "panel 3")
      checkRenderPanel(`accordian_${accordionId}_control_0`, true, "content 1")
      checkRenderPanel(`accordian_${accordionId}_control_1`, false, "content 2")
      checkRenderPanel(`accordian_${accordionId}_control_2`, false, "content 3")

      fireEvent.click(control2)
      checkRenderHeader(`accordian_${accordionId}_control_0`, true, "panel 1")
      checkRenderHeader(`accordian_${accordionId}_control_1`, true, "panel 2")
      checkRenderHeader(`accordian_${accordionId}_control_2`, false, "panel 3")
      checkRenderPanel(`accordian_${accordionId}_control_0`, true, "content 1")
      checkRenderPanel(`accordian_${accordionId}_control_1`, true, "content 2")
      checkRenderPanel(`accordian_${accordionId}_control_2`, false, "content 3")

      fireEvent.click(control3)
      checkRenderHeader(`accordian_${accordionId}_control_0`, true, "panel 1")
      checkRenderHeader(`accordian_${accordionId}_control_1`, true, "panel 2")
      checkRenderHeader(`accordian_${accordionId}_control_2`, true, "panel 3")
      checkRenderPanel(`accordian_${accordionId}_control_0`, true, "content 1")
      checkRenderPanel(`accordian_${accordionId}_control_1`, true, "content 2")
      checkRenderPanel(`accordian_${accordionId}_control_2`, true, "content 3")


    });
    it("Clicking an open panel should close it", () => {
      render(
        <Accordion
          className={customClassName}
          id={accordionId}
          initial="all"
          testMode
        >
          <Accordion.Panel className={customPanelClassName} testMode title="panel 1">content 1</Accordion.Panel>
          <Accordion.Panel className={customPanelClassName} testMode title="panel 2">content 2</Accordion.Panel>
          <Accordion.Panel className={customPanelClassName} testMode title="panel 3">content 3</Accordion.Panel>
        </Accordion>
      );
      checkRenderAccordionContainer(3)
      checkRenderHeader(`accordian_${accordionId}_control_0`, true, "panel 1")
      checkRenderHeader(`accordian_${accordionId}_control_1`, true, "panel 2")
      checkRenderHeader(`accordian_${accordionId}_control_2`, true, "panel 3")
      checkRenderPanel(`accordian_${accordionId}_control_0`, true, "content 1")
      checkRenderPanel(`accordian_${accordionId}_control_1`, true, "content 2")
      checkRenderPanel(`accordian_${accordionId}_control_2`, true, "content 3")
    
      const control1 = screen.getByTestId(`${testIds.header}-accordian_${accordionId}_control_0`).children[0];
      const control2 = screen.getByTestId(`${testIds.header}-accordian_${accordionId}_control_1`).children[0];
      const control3 = screen.getByTestId(`${testIds.header}-accordian_${accordionId}_control_2`).children[0];

      fireEvent.click(control1)
      checkRenderHeader(`accordian_${accordionId}_control_0`, false, "panel 1")
      checkRenderHeader(`accordian_${accordionId}_control_1`, true, "panel 2")
      checkRenderHeader(`accordian_${accordionId}_control_2`, true, "panel 3")
      checkRenderPanel(`accordian_${accordionId}_control_0`, false, "content 1")
      checkRenderPanel(`accordian_${accordionId}_control_1`, true, "content 2")
      checkRenderPanel(`accordian_${accordionId}_control_2`, true, "content 3")

      fireEvent.click(control2)
      checkRenderHeader(`accordian_${accordionId}_control_0`, false, "panel 1")
      checkRenderHeader(`accordian_${accordionId}_control_1`, false, "panel 2")
      checkRenderHeader(`accordian_${accordionId}_control_2`, true, "panel 3")
      checkRenderPanel(`accordian_${accordionId}_control_0`, false, "content 1")
      checkRenderPanel(`accordian_${accordionId}_control_1`, false, "content 2")
      checkRenderPanel(`accordian_${accordionId}_control_2`, true, "content 3")

      fireEvent.click(control3)
      checkRenderHeader(`accordian_${accordionId}_control_0`, false, "panel 1")
      checkRenderHeader(`accordian_${accordionId}_control_1`, false, "panel 2")
      checkRenderHeader(`accordian_${accordionId}_control_2`, false, "panel 3")
      checkRenderPanel(`accordian_${accordionId}_control_0`, false, "content 1")
      checkRenderPanel(`accordian_${accordionId}_control_1`, false, "content 2")
      checkRenderPanel(`accordian_${accordionId}_control_2`, false, "content 3")
    });
  });
  describe("Options", () => {
    it("not setting closed icon, should use default in headers", () => {
      render(
        <Accordion
          className={customClassName}
          id={accordionId}
          testMode
        >
          <Accordion.Panel className={customPanelClassName} testMode title="panel 1">content 1</Accordion.Panel>
          <Accordion.Panel className={customPanelClassName} testMode title="panel 2">content 2</Accordion.Panel>
          <Accordion.Panel className={customPanelClassName} testMode title="panel 3">content 3</Accordion.Panel>
        </Accordion>
      );
      checkRenderHeaderIcon(`accordian_${accordionId}_control_0`, defaultIconStr)
      checkRenderHeaderIcon(`accordian_${accordionId}_control_1`, defaultIconStr)
      checkRenderHeaderIcon(`accordian_${accordionId}_control_2`, defaultIconStr)
    });
    it("setting closed icon, should use icon in headers", () => {
      render(
        <Accordion
          className={customClassName}
          iconOpened = {<Icon name={IconNames.ARROW_LEFT} />}
          id={accordionId}
          initial="all"
          testMode
        >
          <Accordion.Panel className={customPanelClassName} testMode title="panel 1">content 1</Accordion.Panel>
          <Accordion.Panel className={customPanelClassName} testMode title="panel 2">content 2</Accordion.Panel>
          <Accordion.Panel className={customPanelClassName} testMode title="panel 3">content 3</Accordion.Panel>
        </Accordion>
      );
      checkRenderHeaderIcon(`accordian_${accordionId}_control_0`, customIconStr)
      checkRenderHeaderIcon(`accordian_${accordionId}_control_1`, customIconStr)
      checkRenderHeaderIcon(`accordian_${accordionId}_control_2`, customIconStr)
    });
    it("not setting open icon, should use default in headers", () => {
      render(
        <Accordion
          className={customClassName}
          id={accordionId}
          initial="all"
          testMode
        >
          <Accordion.Panel className={customPanelClassName} testMode title="panel 1">content 1</Accordion.Panel>
          <Accordion.Panel className={customPanelClassName} testMode title="panel 2">content 2</Accordion.Panel>
          <Accordion.Panel className={customPanelClassName} testMode title="panel 3">content 3</Accordion.Panel>
        </Accordion>
      );
      checkRenderHeaderIcon(`accordian_${accordionId}_control_0`, defaultIconStr)
      checkRenderHeaderIcon(`accordian_${accordionId}_control_1`, defaultIconStr)
      checkRenderHeaderIcon(`accordian_${accordionId}_control_2`, defaultIconStr)
    });
    it("setting open icon, should use icon in headers", () => {
      render(
        <Accordion
          className={customClassName}
          iconClosed = {<Icon name={IconNames.ARROW_LEFT} />}
          id={accordionId}
          testMode
        >
          <Accordion.Panel className={customPanelClassName} testMode title="panel 1">content 1</Accordion.Panel>
          <Accordion.Panel className={customPanelClassName} testMode title="panel 2">content 2</Accordion.Panel>
          <Accordion.Panel className={customPanelClassName} testMode title="panel 3">content 3</Accordion.Panel>
        </Accordion>
      );
      checkRenderHeaderIcon(`accordian_${accordionId}_control_0`, customIconStr)
      checkRenderHeaderIcon(`accordian_${accordionId}_control_1`, customIconStr)
      checkRenderHeaderIcon(`accordian_${accordionId}_control_2`, customIconStr)
    });
    it("setting no initial should start only all panels closed", () => {
      render(
        <Accordion
          className={customClassName}
          id={accordionId}
          testMode
        >
          <Accordion.Panel className={customPanelClassName} testMode title="panel 1">content 1</Accordion.Panel>
          <Accordion.Panel className={customPanelClassName} testMode title="panel 2">content 2</Accordion.Panel>
          <Accordion.Panel className={customPanelClassName} testMode title="panel 3">content 3</Accordion.Panel>
        </Accordion>
      );
      checkRenderHeader(`accordian_${accordionId}_control_0`, false, "panel 1")
      checkRenderHeader(`accordian_${accordionId}_control_1`, false, "panel 2")
      checkRenderHeader(`accordian_${accordionId}_control_2`, false, "panel 3")
      checkRenderPanel(`accordian_${accordionId}_control_0`, false, "content 1")
      checkRenderPanel(`accordian_${accordionId}_control_1`, false, "content 2")
      checkRenderPanel(`accordian_${accordionId}_control_2`, false, "content 3")
    });
    it("setting single initial is a string should start only corresponding panel open", () => {
      render(
        <Accordion
          className={customClassName}
          id={accordionId}
          initial="1"
          testMode
        >
          <Accordion.Panel className={customPanelClassName} testMode title="panel 1">content 1</Accordion.Panel>
          <Accordion.Panel className={customPanelClassName} testMode title="panel 2">content 2</Accordion.Panel>
          <Accordion.Panel className={customPanelClassName} testMode title="panel 3">content 3</Accordion.Panel>
        </Accordion>
      );
      checkRenderHeader(`accordian_${accordionId}_control_0`, false, "panel 1")
      checkRenderHeader(`accordian_${accordionId}_control_1`, true, "panel 2")
      checkRenderHeader(`accordian_${accordionId}_control_2`, false, "panel 3")
      checkRenderPanel(`accordian_${accordionId}_control_0`, false, "content 1")
      checkRenderPanel(`accordian_${accordionId}_control_1`, true, "content 2")
      checkRenderPanel(`accordian_${accordionId}_control_2`, false, "content 3")
    });
    it("setting single initial is a number should start only corresponding panel open", () => {
      render(
        <Accordion
          className={customClassName}
          id={accordionId}
          initial={1}
          testMode
        >
          <Accordion.Panel className={customPanelClassName} testMode title="panel 1">content 1</Accordion.Panel>
          <Accordion.Panel className={customPanelClassName} testMode title="panel 2">content 2</Accordion.Panel>
          <Accordion.Panel className={customPanelClassName} testMode title="panel 3">content 3</Accordion.Panel>
        </Accordion>
      );
      checkRenderHeader(`accordian_${accordionId}_control_0`, false, "panel 1")
      checkRenderHeader(`accordian_${accordionId}_control_1`, true, "panel 2")
      checkRenderHeader(`accordian_${accordionId}_control_2`, false, "panel 3")
      checkRenderPanel(`accordian_${accordionId}_control_0`, false, "content 1")
      checkRenderPanel(`accordian_${accordionId}_control_1`, true, "content 2")
      checkRenderPanel(`accordian_${accordionId}_control_2`, false, "content 3")
    });
    it("setting initial as all should start all panels open", () => {
      render(
        <Accordion
          className={customClassName}
          id={accordionId}
          initial="all"
          testMode
        >
          <Accordion.Panel className={customPanelClassName} testMode title="panel 1">content 1</Accordion.Panel>
          <Accordion.Panel className={customPanelClassName} testMode title="panel 2">content 2</Accordion.Panel>
          <Accordion.Panel className={customPanelClassName} testMode title="panel 3">content 3</Accordion.Panel>
        </Accordion>
      );
      checkRenderHeader(`accordian_${accordionId}_control_0`, true, "panel 1")
      checkRenderHeader(`accordian_${accordionId}_control_1`, true, "panel 2")
      checkRenderHeader(`accordian_${accordionId}_control_2`, true, "panel 3")
      checkRenderPanel(`accordian_${accordionId}_control_0`, true, "content 1")
      checkRenderPanel(`accordian_${accordionId}_control_1`, true, "content 2")
      checkRenderPanel(`accordian_${accordionId}_control_2`, true, "content 3")
    });
    it("setting single initial should start only corresponding panel open", () => {
      render(
        <Accordion
          className={customClassName}
          id={accordionId}
          initial={1}
          testMode
        >
          <Accordion.Panel className={customPanelClassName} testMode title="panel 1">content 1</Accordion.Panel>
          <Accordion.Panel className={customPanelClassName} testMode title="panel 2">content 2</Accordion.Panel>
          <Accordion.Panel className={customPanelClassName} testMode title="panel 3">content 3</Accordion.Panel>
        </Accordion>
      );
      checkRenderHeader(`accordian_${accordionId}_control_0`, false, "panel 1")
      checkRenderHeader(`accordian_${accordionId}_control_1`, true, "panel 2")
      checkRenderHeader(`accordian_${accordionId}_control_2`, false, "panel 3")
      checkRenderPanel(`accordian_${accordionId}_control_0`, false, "content 1")
      checkRenderPanel(`accordian_${accordionId}_control_1`, true, "content 2")
      checkRenderPanel(`accordian_${accordionId}_control_2`, false, "content 3")
    });
    it("default is test mode off", () => {
      render(
        <Accordion
          className={customClassName}
          id={accordionId}
        >
          <Accordion.Panel className={customPanelClassName} testMode title="panel 1">content 1</Accordion.Panel>
          <Accordion.Panel className={customPanelClassName} testMode title="panel 2">content 2</Accordion.Panel>
          <Accordion.Panel className={customPanelClassName} testMode title="panel 3">content 3</Accordion.Panel>
        </Accordion>
      );
      const element = screen.queryByTestId(testIds.container);
      expect(element).not.toBeInTheDocument();
    });
  });
});

describe("<AccordionPanelHeader />", () => {
  const controlId = `accordian_1_control_0`
  describe("Rendering", () => {
    it("should render without throwing an error", () => {
      render(
        <AccordionPanelHeader
          className={customClassName}
          controlId={controlId}
          label="panel 1"
          onClick={onClick}
          testMode
        />
      );
      checkRenderHeader(controlId, false, "panel 1")
      const element = screen.queryByTestId(`${testIds.header}-${controlId}`);
      expect(element).toHaveClass(customClassName);

      fireEvent.click(element.children[0]);
      expect(onClick).toHaveBeenCalled();
    });
  });
  describe("Options", () => {
    it("if not set open should render closed", () => {
      render(
        <AccordionPanelHeader
          className={customClassName}
          controlId={controlId}
          label="panel 1"
          onClick={onClick}
          testMode
        />
      );
      checkRenderHeader(controlId, false, "panel 1")
    });
    it("if set open should render open", () => {
      render(
        <AccordionPanelHeader
          className={customClassName}
          controlId={controlId}
          isOpen
          label="panel 1"
          onClick={onClick}
          testMode
        />
      );
      checkRenderHeader(controlId, true, "panel 1")
    });
    it("if closed icon is set, should render when closed", () => {
      render(
        <AccordionPanelHeader
          className={customClassName}
          controlId={controlId}
          iconClosed = {<Icon name={IconNames.ARROW_LEFT} />}
          label="panel 1"
          onClick={onClick}
          testMode
        />
      );
      checkRenderHeaderIcon(controlId, customIconStr)
    });
    it("if open icon is set, should render when open", () => {
      render(
        <AccordionPanelHeader
          className={customClassName}
          controlId={controlId}
          iconOpened = {<Icon name={IconNames.ARROW_LEFT} />}
          isOpen
          label="panel 1"
          onClick={onClick}
          testMode
        />
      );
      checkRenderHeaderIcon(controlId, customIconStr)
    });
    it("default is test mode off", () => {
      render(
        <AccordionPanelHeader
          className={customClassName}
          controlId={controlId}
          label="panel 1"
          onClick={onClick}
        />
      );
      const element = screen.queryByTestId(`${testIds.header}-${controlId}`);
      expect(element).not.toBeInTheDocument();
    });
  });
});

describe("<AccordionPanel />", () => {
  const controlId = `accordian_1_control_0`
  describe("Rendering", () => {
    it("should render without throwing an error", () => {
      render(
        <AccordionPanel
          className={customPanelClassName}
          controlId={controlId}
          testMode
          title="panel 1"
          >
            content 1
          </AccordionPanel>
      );
      checkRenderPanel(controlId, false, "content 1")
    });
  });

  describe("Options", () => {
    it("default is test mode off", () => {
      render(
        <AccordionPanel
          className={customPanelClassName}
          controlId={controlId}
          title="panel 1"
        >
          content 1
        </AccordionPanel>
      );
      const element = screen.queryByTestId(`${testIds.header}-${controlId}`);
      expect(element).not.toBeInTheDocument();
    });
  });
});


const checkRenderAccordionContainer = (childrenCount) => {
  const element = screen.getByTestId(testIds.container);
  expect(element.nodeName).toBe("DIV")
  expect(element).toHaveClass(customClassName);
  expect(element).toBeVisible();
  expect(element).toHaveClass("rvt-accordion");
  expect(element.children.length).toBe(childrenCount * 2)
  const children = element.children
  for (let i = 0; i < children.length; i++){
    const child = children[i]
    const childClassname = (i % 2) === 0 ? "rvt-accordion__summary" : "rvt-accordion__panel"
    expect(child).toHaveClass(childClassname);
  }
}

const checkRenderHeader = (id, open, label) => {
  const element = screen.getByTestId(`${testIds.header}-${id}`);
  expect(element.nodeName).toBe("H3")
  expect(element).toBeVisible();
  expect(element).toHaveClass("rvt-accordion__summary");
  const buttonElement = element.children[0]
  expect(buttonElement.nodeName).toBe("BUTTON")
  expect(buttonElement).toHaveClass("rvt-accordion__toggle");
  expect(buttonElement).toHaveAttribute("aria-expanded", open ? "true" : "false");
  expect( buttonElement.children[0].innerHTML).toBe(label);
}

const checkRenderHeaderIcon = (id, icon) => {
  const element = screen.getByTestId(`${testIds.header}-${id}`);
  const buttonElement = element.children[0]
  expect( buttonElement.children[1].innerHTML).toBe(icon);
}

const checkRenderPanel = (id, visible, content) => {
  const element = screen.getByTestId(`${testIds.panel}-${id}`);
  expect(element.nodeName).toBe("DIV")
  expect(element).toHaveClass("rvt-accordion__panel");
  expect(element).toHaveClass(customPanelClassName);
  expect(element).toHaveAttribute("aria-labelledby", id);
  expect(element.innerHTML).toBe(content);
  if(visible){
    expect(element).toBeVisible();
  }
}
