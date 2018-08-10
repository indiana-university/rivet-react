import { shallow } from 'enzyme';
import * as React from 'react';
import Header from './Header';

describe('<Header />', () => {
    let cut;
    
    beforeEach(() => {
        cut = shallow(<Header title="foo"/>);
    })

    describe('Rendering and styling', () =>{
        it('should render without throwing an error', () => {
            expect(cut.find('header')).toHaveLength(1);
        });
        it('should include the title', () => {
            expect(cut.find('span.rvt-header__title > a').text()).toEqual("foo");
        });
        it('should render children in a container div', () => {
            cut = shallow(
                <Header title="foo">
                    <Header.Navigation>
                        <a href="#">Example</a>
                    </Header.Navigation>
                </Header>
            );
            expect(cut.find('div.rvt-header__controls').find('a')).toHaveLength(1);
        });
    });
});
