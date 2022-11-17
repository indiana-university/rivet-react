/*
Copyright (C) 2018 The Trustees of Indiana University
SPDX-License-Identifier: BSD-3-Clause
*/
import {
  fireEvent,
  getByRole,
  getAllByRole,
  render,
  screen,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import "@testing-library/jest-dom";
import { prettyDOM } from "@testing-library/dom";
import userEvent from "@testing-library/user-event";
import React from "react";

import Dropdown, { Dropdown as UnwrappedDropdown } from "./Dropdown";
import { TestUtils } from "../util/TestUtils";
// import DropdownEvent from './DropdownEvent';

describe("<Dropdown />", () => {
  describe("Rendering and styling", () => {
    it("should render without throwing an error", () => {
      render(<Dropdown />);
      expect(screen.getByRole("button")).toBeVisible();
    });
    it("should not render a label if it is not provided", () => {
      render(<Dropdown label="" />);
      expect(screen.queryAllByTestId(TestUtils.Dropdown.testId)).toHaveLength(
        0
      );

      render(<Dropdown label="foo" />);
      expect(screen.getAllByTestId(TestUtils.Dropdown.testId)).toHaveLength(1);
    });
  });

  describe("Toggle behavior", () => {
    let user;

    beforeAll(() => {
      user = userEvent.setup();
    });

    beforeEach(() => {
      render(
        <Dropdown>
          <a href="#">Hello, world!</a>
        </Dropdown>
      );
    });

    const expectDropdownMenuIsOpen = async () => {
      // console.log("inside expectDropdownMenuIsOpen")
      // console.log("before")
      // console.log(prettyDOM(document.body))
      await screen.findByRole("menu");
      console.log("inside expectDropdownMenuIsOpen");
      console.log(prettyDOM(document.body));
      expect(screen.getByRole("menu")).toBeVisible();
    };

    const expectDropdownMenuIsClosed = () => {
      // await screen.findByRole("menu")
      console.log("inside expectDropdownMenuIsClosed");
      expect(screen.queryAllByRole("menu")).toHaveLength(0);
      console.log(prettyDOM(document.body));
    };

    const clickToggleButton = async () => {
      await user.click(screen.getByRole("button"));
    };

    it("should toggle the menu when clicking the button", async () => {
      expectDropdownMenuIsClosed();
      await clickToggleButton();
      await expectDropdownMenuIsOpen();
      await clickToggleButton();
      expectDropdownMenuIsClosed();
    });
    it("should not toggle the menu when clicking inside the menu", async () => {
      expectDropdownMenuIsClosed();
      await clickToggleButton();
      await expectDropdownMenuIsOpen();
      await user.click(screen.getByRole("link"));
      await expectDropdownMenuIsOpen();
    });
    it("should toggle the menu when clicking outside of the menu", async () => {
      expectDropdownMenuIsClosed();
      await clickToggleButton();
      await expectDropdownMenuIsOpen();
      fireEvent.click(document.body);
      expectDropdownMenuIsClosed();
    });
    it("should toggle the menu when escape is pressed", async () => {
      await expectDropdownMenuIsClosed();
      await clickToggleButton();
      await expectDropdownMenuIsOpen();
      fireEvent.keyUp(document.body, {
        key: "Escape",
        code: "Escape",
        charCode: 27,
      });
      expectDropdownMenuIsClosed();
    });
    it("should not toggle the menu when the tab key is pressed inside the menu", async () => {
      expectDropdownMenuIsClosed();
      await clickToggleButton();
      await expectDropdownMenuIsOpen();
      fireEvent.keyUp(getAllByRole(document.body, "link")[0], {
        key: "Tab",
        code: "Tab",
        charCode: 9,
      });
      await expectDropdownMenuIsOpen();
    });
    it("should toggle the menu when the tab key is pressed outside the menu", async () => {
      expectDropdownMenuIsClosed();
      await clickToggleButton();
      await expectDropdownMenuIsOpen();
      fireEvent.keyUp(document.body, { key: "Tab", code: "Tab", charCode: 9 });
      expectDropdownMenuIsClosed();
    });
    it("should not toggle the menu when an unhandled key is pressed", async () => {
      expectDropdownMenuIsClosed();
      await clickToggleButton();
      await expectDropdownMenuIsOpen();
      fireEvent.keyUp(document.body, { key: "a", code: "keyA", charCode: 65 });
      await expectDropdownMenuIsOpen();
    });
  });

  // describe('Toggle behavior click inside override', () => {
  //
  //     let cut;
  //
  //     const expectDropdownMenuIsOpen = () => {
  //         expect(document.getElementsByClassName('rvt-dropdown__menu')).toHaveLength(1);
  //     }
  //
  //     const expectDropdownMenuIsClosed = () => {
  //         expect(document.getElementsByClassName('rvt-dropdown__menu')).toHaveLength(0);
  //     }
  //
  //     const clickToggleButton = () => {
  //         document.getElementsByTagName('button')[0].click();
  //     }
  //
  //     beforeEach(() => {
  //         ReactDOM.render(
  //             <Dropdown toggleDropdownOnClickInside={true}>
  //                 <a href="#">Hello, world!</a>
  //             </Dropdown>, root
  //         );
  //     });
  //
  //     it('should toggle the menu when clicking inside the menu', () => {
  //         expectDropdownMenuIsClosed();
  //         clickToggleButton();
  //         expectDropdownMenuIsOpen();
  //         document.getElementsByTagName('a')[0].click();
  //         expectDropdownMenuIsClosed();
  //     });
  // });

  // describe('Event handler registration', () => {
  //
  //     afterEach(() => {
  //         if(jest.isMockFunction(document.addEventListener)) {
  //             document.addEventListener.mockRestore();
  //         }
  //         if(jest.isMockFunction(document.removeEventListener)) {
  //             document.removeEventListener.mockRestore();
  //         }
  //         if(jest.isMockFunction(UnwrappedDropdown.prototype.componentDidUpdate)) {
  //             UnwrappedDropdown.prototype.componentDidUpdate.mockRestore();
  //         }
  //     });
  //
  //     it('should register event handlers when it is mounted', () => {
  //         jest.spyOn(document, 'addEventListener');
  //         expect(document.addEventListener).toHaveBeenCalledTimes(0);
  //         const cut = mount(<Dropdown />);
  //         cut.find('button').simulate("click");
  //         expect(document.addEventListener).toHaveBeenCalled();
  //     });
  //     it('should de-register event handlers when the dropdown menu is unmounted', () => {
  //         jest.spyOn(document, 'removeEventListener');
  //         const cut = mount(<Dropdown />);
  //         cut.find('button').simulate("click");
  //         document.removeEventListener.mockClear();
  //         // On the second click the event listeners are removed since the dropdown is closed
  //         cut.find('button').simulate("click");
  //         expect(document.removeEventListener).toHaveBeenCalled();
  //     });
  //     it('should de-register event handlers when the dropdown unmounted', () => {
  //         jest.spyOn(document, 'removeEventListener');
  //         const cut = mount(<Dropdown />);
  //         cut.find('button').simulate("click");
  //         document.removeEventListener.mockClear();
  //         // On the second click the event listeners are removed since the dropdown is closed
  //         cut.unmount();
  //         expect(document.removeEventListener).toHaveBeenCalled();
  //     });
  //     it('should not register event handlers when they are already registered', () => {
  //         jest.spyOn(UnwrappedDropdown.prototype, 'componentDidUpdate');
  //         jest.spyOn(document, 'addEventListener');
  //
  //         const cut = mount(<Dropdown>
  //             <a href="#">Hello, world!</a>
  //         </Dropdown>);
  //
  //         cut.find('button').simulate('click');
  //         expect(UnwrappedDropdown.prototype.componentDidUpdate.mock.calls.length).toBe(1);
  //         expect(document.addEventListener).toHaveBeenCalledTimes(3);
  //         cut.setProps({ 'id': 'foo' });
  //         expect(UnwrappedDropdown.prototype.componentDidUpdate.mock.calls.length).toBe(2);
  //         expect(document.addEventListener).toHaveBeenCalledTimes(3);
  //     });
  // });

  // describe('Event propagation', () => {
  //     // These tests use the document to trigger events so the test properly sends events through the global event handlers.
  //
  //     let cut;
  //
  //     beforeEach(() => {
  //         jest.spyOn(UnwrappedDropdown.prototype, 'handleClickOutside');
  //         jest.spyOn(UnwrappedDropdown.prototype, 'toggleDropdown');
  //
  //         cut = mount(<Dropdown>
  //             <a href="#">Hello, world!</a>
  //         </Dropdown>, { attachTo: root });
  //     });
  //
  //     afterEach(() => {
  //         if(jest.isMockFunction(UnwrappedDropdown.prototype.handleClickOutside)) {
  //             UnwrappedDropdown.prototype.handleClickOutside.mockRestore();
  //         }
  //         if(jest.isMockFunction(UnwrappedDropdown.prototype.toggleDropdown)) {
  //             UnwrappedDropdown.prototype.toggleDropdown.mockRestore();
  //         }
  //     });
  //
  //     it('should close the dialog menu when the user clicks outside of the menu', () => {
  //         expect(UnwrappedDropdown.prototype.handleClickOutside).toHaveBeenCalledTimes(0);
  //         expect(UnwrappedDropdown.prototype.toggleDropdown).toHaveBeenCalledTimes(0);
  //         // If the dropdown has not been clicked our event handler should not be invoked
  //         document.body.click();
  //         expect(UnwrappedDropdown.prototype.handleClickOutside).toHaveBeenCalledTimes(0);
  //         expect(UnwrappedDropdown.prototype.toggleDropdown).toHaveBeenCalledTimes(0);
  //         cut.find('button').simulate('click');
  //         expect(UnwrappedDropdown.prototype.toggleDropdown).toHaveBeenCalledTimes(1);
  //         // When the dropdown is open handleClickOutside should be called when we click on something that is not inside the dropdown
  //         document.body.click();
  //         expect(UnwrappedDropdown.prototype.handleClickOutside).toHaveBeenCalledTimes(1);
  //         expect(UnwrappedDropdown.prototype.toggleDropdown).toHaveBeenCalledTimes(2);
  //     });
  //
  //     it('should not close the dialog menu when the user clicks inside the menu', () => {
  //         expect(UnwrappedDropdown.prototype.handleClickOutside).toHaveBeenCalledTimes(0);
  //         expect(UnwrappedDropdown.prototype.toggleDropdown).toHaveBeenCalledTimes(0);
  //         cut.find('button').simulate("click");
  //         expect(UnwrappedDropdown.prototype.toggleDropdown).toHaveBeenCalledTimes(1);
  //         // When the dropdown is open handleClickOutside should be called when we click on something that is not inside the dropdown, but toggleDropdown should not be called
  //         document.getElementsByClassName('rvt-dropdown__menu')[0].click();
  //         expect(UnwrappedDropdown.prototype.handleClickOutside).toHaveBeenCalledTimes(1);
  //         expect(UnwrappedDropdown.prototype.toggleDropdown).toHaveBeenCalledTimes(1);
  //     });
  // });
});
