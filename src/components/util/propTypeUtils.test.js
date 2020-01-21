import { shallow } from 'enzyme';
import React from 'react';

import { propIsElementOfType } from './propTypeUtils';

describe('propIsElementOfType', () => {
    const ValidComponentProp = () => <p></p>;
    ValidComponentProp.displayName = 'ValidComponentProp';
    const InvalidComponentProp = () => <p></p>;
    InvalidComponentProp.displayName = 'InvalidComponentProp';
    const NoDisplayNameComponentProp = () => ();
    const ParentComponent = ({ Component }) => <p></p>;
    ParentComponent.displayName = 'ParentComponent';
    ParentComponent.propTypes = {
        Component: propIsElementOfType(ValidComponentProp.displayName)
    };

    it('should return output an error if prop type is not correct', () => {
        console.error = jest.fn();
        shallow(<ParentComponent Component={NoDisplayNameComponentProp} /> );
        expect(console.error.mock.calls.length).toBe(1);
        expect(console.error.mock.calls[0][0]).toContain(`Failed prop type: Error when validating ParentComponent. Value passed in for Component does not have a \'displayName\' property.`);
    });

    it('should not output an error if prop type is correct', () => {
        console.error = jest.fn();
        shallow(<ParentComponent Component={ValidComponentProp} /> );
        expect(console.error.mock.calls.length).toBe(0);
    });
});
