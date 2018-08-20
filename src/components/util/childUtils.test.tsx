import { shallow } from 'enzyme';
import * as React from 'react';
import { Button } from '../Button/Button';
import { findFirstChildOfType, hasChildOfType } from './childUtils';

describe('utils', () => {
    
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

    describe('findFirstChildOfType', () => {
        it('should return the first child matching the type', () => {
            expect(findFirstChildOfType(children, Button.displayName).props.id).toBe('one');
        });
        it('should return undefined if there is no child present with the given display name', () => {
            expect(findFirstChildOfType(children, 'Table')).toBeUndefined();
        });
    });
    
    describe('hasChildOfType', () => {
        it('should find a Button child', () => {
            expect(hasChildOfType(children, Button.displayName)).toBe(true);
        });
        it('should not find a Table child', () => {
            expect(hasChildOfType(children, 'Table')).toBe(false);
        });
    });
});
