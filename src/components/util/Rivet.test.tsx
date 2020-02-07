/*
Copyright (C) 2020 The Trustees of Indiana University
SPDX-License-Identifier: BSD-3-Clause
*/
import { mount } from 'enzyme';
import * as React from 'react';
import * as Rivet from './Rivet';

const DemoComponent = Rivet.rivetize(({ children, ...attrs }) => (
    <div {...attrs}>{children}</div>
));

  describe('margin', () => {
    it('ignores undefined', () => {
        const cut = mount(<DemoComponent margin={undefined} />);
        expect(cut.find('div').prop('className')).toBe("");
    });
  
    it('one size fits all', () => {
        const cut = mount(<DemoComponent margin="xs" />);
        expect(cut.find('div').hasClass('rvt-m-all-xs')).toBe(true);
    });
  
    it('discriminates bounds', () => {
        const cut = mount(<DemoComponent margin={{ top: "xs", right:"sm", bottom: "md", left: "lg", lr: "xl", tb: "xxl" }} />);
        expect(cut.find('div').hasClass('rvt-m-top-xs')).toBe(true);
        expect(cut.find('div').hasClass('rvt-m-right-sm')).toBe(true);
        expect(cut.find('div').hasClass('rvt-m-bottom-md')).toBe(true);
        expect(cut.find('div').hasClass('rvt-m-left-lg')).toBe(true);
        expect(cut.find('div').hasClass('rvt-m-lr-xl')).toBe(true);
        expect(cut.find('div').hasClass('rvt-m-tb-xxl')).toBe(true);
    });
  
    it('discriminates sizings', () => {
        const cut = mount(<DemoComponent margin={{ xs: ['top', "bottom"], md: "left", lg: "right", xl: "lr", xxl: "tb" }} />);
        expect(cut.find('div').hasClass('rvt-m-top-xs')).toBe(true);
        expect(cut.find('div').hasClass('rvt-m-bottom-xs')).toBe(true);
        expect(cut.find('div').hasClass('rvt-m-left-md')).toBe(true);
        expect(cut.find('div').hasClass('rvt-m-right-lg')).toBe(true);
        expect(cut.find('div').hasClass('rvt-m-lr-xl')).toBe(true);
        expect(cut.find('div').hasClass('rvt-m-tb-xxl')).toBe(true);
    }); 
  }); 

  describe('padding', () => {
    it('ignores undefined', () => {
        const cut = mount(<DemoComponent padding={undefined} />);
        expect(cut.find('div').prop('className')).toBe("");
    });
  
    it('one size fits all', () => {
        const cut = mount(<DemoComponent padding="xs" />);
        expect(cut.find('div').hasClass('rvt-p-all-xs')).toBe(true);
    });
  
    it('discriminates bounds', () => {
        const cut = mount(<DemoComponent padding={{ top: "xs", right:"sm", bottom: "md", left: "lg", lr: "xl", tb: "xxl" }} />);
        expect(cut.find('div').hasClass('rvt-p-top-xs')).toBe(true);
        expect(cut.find('div').hasClass('rvt-p-right-sm')).toBe(true);
        expect(cut.find('div').hasClass('rvt-p-bottom-md')).toBe(true);
        expect(cut.find('div').hasClass('rvt-p-left-lg')).toBe(true);
        expect(cut.find('div').hasClass('rvt-p-lr-xl')).toBe(true);
        expect(cut.find('div').hasClass('rvt-p-tb-xxl')).toBe(true);
    });
  
    it('discriminates sizings', () => {
        const cut = mount(<DemoComponent padding={{ xs: ['top', "bottom"], md: "left", lg: "right", xl: "lr", xxl: "tb" }} />);
        expect(cut.find('div').hasClass('rvt-p-top-xs')).toBe(true);
        expect(cut.find('div').hasClass('rvt-p-bottom-xs')).toBe(true);
        expect(cut.find('div').hasClass('rvt-p-left-md')).toBe(true);
        expect(cut.find('div').hasClass('rvt-p-right-lg')).toBe(true);
        expect(cut.find('div').hasClass('rvt-p-lr-xl')).toBe(true);
        expect(cut.find('div').hasClass('rvt-p-tb-xxl')).toBe(true);
    }); 
  }); 

  describe('typescale', () => {
      it('ignores undefined', () => {
        const cut = mount(<DemoComponent typescale={undefined} />);
        expect(cut.find('div').prop('className')).toBe("");
      });
  
      it('applies decoration', () => {
        expect(mount(<DemoComponent typescale={12} />).find('div').hasClass('rvt-ts-12')).toBe(true);
        expect(mount(<DemoComponent typescale={23} />).find('div').hasClass('rvt-ts-23')).toBe(true);
        expect(mount(<DemoComponent typescale="base" />).find('div').hasClass('rvt-ts-base')).toBe(true);
        expect(mount(<DemoComponent typescale="xxs" />).find('div').hasClass('rvt-ts-xxs')).toBe(true);
        expect(mount(<DemoComponent typescale="xs" />).find('div').hasClass('rvt-ts-xs')).toBe(true);
        expect(mount(<DemoComponent typescale="sm" />).find('div').hasClass('rvt-ts-sm')).toBe(true);
        expect(mount(<DemoComponent typescale="md" />).find('div').hasClass('rvt-ts-md')).toBe(true);
        expect(mount(<DemoComponent typescale="lg" />).find('div').hasClass('rvt-ts-lg')).toBe(true);
        expect(mount(<DemoComponent typescale="xl" />).find('div').hasClass('rvt-ts-xl')).toBe(true);
        expect(mount(<DemoComponent typescale="xxl" />).find('div').hasClass('rvt-ts-xxl')).toBe(true);
      });
  });
  
  describe('border', () => {
      it('ignores undefined', () => {
        const cut = mount(<DemoComponent border={undefined} />);
        expect(cut.find('div').prop('className')).toBe("");
      });
  
      it('applies decorations', () => {
        expect(mount(<DemoComponent border="all" />).find('div').hasClass('rvt-border-all')).toBe(true);
        expect(mount(<DemoComponent border="bottom" />).find('div').hasClass('rvt-border-bottom')).toBe(true);
        expect(mount(<DemoComponent border="top" />).find('div').hasClass('rvt-border-top')).toBe(true);
        expect(mount(<DemoComponent border="left" />).find('div').hasClass('rvt-border-left')).toBe(true);
        expect(mount(<DemoComponent border="right" />).find('div').hasClass('rvt-border-right')).toBe(true);
        expect(mount(<DemoComponent border="radius" />).find('div').hasClass('rvt-border-radius')).toBe(true);
        expect(mount(<DemoComponent border="radius" />).find('div').hasClass('rvt-border-all')).toBe(true);
      });

      it('applies multiple decorations', () => {
        const cut = mount(<DemoComponent border={['left', 'right']} />);
        expect(cut.find('div').hasClass('rvt-border-left')).toBe(true);
        expect(cut.find('div').hasClass('rvt-border-right')).toBe(true);
      });
  });
  
  describe('display', () => {
      it('ignores undefined', () => {
        const cut = mount(<DemoComponent display={undefined} />);
        expect(cut.find('div').prop('className')).toBe("");
      });
  
      it('applies decoration', () => {
        expect(mount(<DemoComponent display="inline" />).find('div').hasClass('rvt-display-inline')).toBe(true);
        expect(mount(<DemoComponent display="inline-block" />).find('div').hasClass('rvt-display-inline-block')).toBe(true);
        expect(mount(<DemoComponent display="block" />).find('div').hasClass('rvt-display-block')).toBe(true);
        expect(mount(<DemoComponent display="flex" />).find('div').hasClass('rvt-display-flex')).toBe(true);
        expect(mount(<DemoComponent display="flex-vertical-center" />).find('div').hasClass('rvt-display-flex rvt-vertical-center')).toBe(true);
      });
  });
  
  describe('parseRivetHidden', () => {
      it('ignores undefined', () => {
        const cut = mount(<DemoComponent hide={undefined} />);
        expect(cut.find('div').prop('className')).toBe("");
      });
  
      it('applies decoration', () => {
        expect(mount(<DemoComponent hide="lg-up" />).find('div').hasClass('rvt-hide-lg-up')).toBe(true);
        expect(mount(<DemoComponent hide="md-up" />).find('div').hasClass('rvt-hide-md-up')).toBe(true);
        expect(mount(<DemoComponent hide="sm-up" />).find('div').hasClass('rvt-hide-sm-up')).toBe(true);
        expect(mount(<DemoComponent hide="xl-up" />).find('div').hasClass('rvt-hide-xl-up')).toBe(true);
        expect(mount(<DemoComponent hide="xxl-up" />).find('div').hasClass('rvt-hide-xxl-up')).toBe(true);
        expect(mount(<DemoComponent hide="lg-down" />).find('div').hasClass('rvt-hide-lg-down')).toBe(true);
        expect(mount(<DemoComponent hide="md-down" />).find('div').hasClass('rvt-hide-md-down')).toBe(true);
        expect(mount(<DemoComponent hide="sm-down" />).find('div').hasClass('rvt-hide-sm-down')).toBe(true);
        expect(mount(<DemoComponent hide="xl-down" />).find('div').hasClass('rvt-hide-xl-down')).toBe(true);
        expect(mount(<DemoComponent hide="xxl-down" />).find('div').hasClass('rvt-hide-xxl-down')).toBe(true);
      });
  });

  describe('label visiblity', () => {
    it('chooses the screen reader class', () =>{
        expect(Rivet.labelVisiblityClass("screen-reader-only")).toEqual("rvt-sr-only");
    });
    it('chooses the default (no) class', () =>{
        expect(Rivet.labelVisiblityClass(undefined)).toEqual("");
    });
  });


  