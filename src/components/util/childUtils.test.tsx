import { shallow } from 'enzyme';
import * as React from 'react';
import { Button } from '../Button/Button';
import { findFirstChildOfType } from './childUtils';

describe('findFirstChildOfType', () => {

    let children;

    beforeEach(() => {
        const cut = shallow(
            <div>
                foo
                <Button id="one" />
                <Button id="two" />
            </div>
        );
        children = cut.props().children;
    });

    it('should return the first child matching the type', () => {
        expect(findFirstChildOfType(children, Button.displayName).props.id).toBe('one');
    });
    it('should return undefined if there is no child present with the given display name', () => {
        expect(findFirstChildOfType(children, 'Foo')).toBeUndefined();
    });
})