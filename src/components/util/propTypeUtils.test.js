import { shallow } from 'enzyme';
import React from 'react';
import { propIsElementOfType } from './propTypeUtils';
describe('propIsElementOfType', () => {
    const ValidComponentProp = () => <p></p>;
    ValidComponentProp.displayName = 'ValidComponentProp';
    const InvalidComponentProp = () => <p></p>;
    InvalidComponentProp.displayName = 'InvalidComponentProp';
    const NoDisplayNameComponentProp = () => <p></p>;
    const ParentComponent = ({Component}) => <p></p>;
    ParentComponent.displayName = 'ParentComponent';
    ParentComponent.propTypes = {
        Component: propIsElementOfType(ValidComponentProp.displayName)
    };

    const ParentComponentTwo = ({Component}) => <p></p>;
    ParentComponentTwo.displayName = 'ParentComponentTwo';
    ParentComponentTwo.propTypes = {
        Component: propIsElementOfType(ValidComponentProp.displayName)
    };
    afterEach(() => {
        jest.resetAllMocks();
    });
    it('should return output an error if component prop have no displayName', () => {
        const errorMessage = `Failed prop type: Error when validating ParentComponent. Value passed in for Component does not have a \'displayName\' property.`
        console.error = jest.fn();
        shallow(<ParentComponent Component={NoDisplayNameComponentProp}/>);
        expect(console.error.mock.calls.length).toBe(1);
        expect(console.error.mock.calls[0][0]).toContain(errorMessage);
    });
    it('should return output an error if component prop have incorrect displayName', () => {
        const errorMessage = 'Failed prop type: ParentComponentTwo expected element of type [ValidComponentProp] for Component, but received InvalidComponentProp';
        console.error = jest.fn();
        shallow(<ParentComponentTwo Component={InvalidComponentProp}/>);
        expect(console.error.mock.calls.length).toBe(1);
        expect(console.error.mock.calls[0][0]).toContain(errorMessage);
    });
    it('should not output an error if prop type is correct', () => {
        console.error = jest.fn();
        shallow(<ParentComponent Component={ValidComponentProp}/>);
        expect(console.error.mock.calls.length).toBe(0);
    });
});
