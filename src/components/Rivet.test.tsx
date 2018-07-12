import * as React from 'react';
import { Link } from 'react-router-dom';
import * as Rivet from './Rivet';

describe('nav', () => {
    it('renders internal link', () => {
        expect(new Rivet.Nav("foo", "/bar").render())
        .toEqual(<Link to="/bar">foo</Link>)
    });
    it('renders external link (http)', () => {
        expect(new Rivet.Nav("foo", "http://example.com").render())
        .toEqual(<a href="http://example.com">foo</a>)
    });
    it('renders external link (https)', () => {
        expect(new Rivet.Nav("foo", "https://example.com").render())
        .toEqual(<a href="https://example.com">foo</a>)
    });
});

  describe('margin', () => {
    it('ignores undefined', () => {
      expect(Rivet.classify({rvtMargin:undefined})).toEqual("");
    });
  
    it('one size fits all', () => {
      expect(Rivet.classify({rvtMargin:"xs"})).toEqual("rvt-m-all-xs");
    });
  
    it('discriminates bounds', () => {
      expect(Rivet.classify({rvtMargin:{ top: "xs", right:"sm", bottom: "md", left: "lg" }}))
          .toEqual("rvt-m-top-xs rvt-m-right-sm rvt-m-bottom-md rvt-m-left-lg");
    });
  
    it('discriminates sizings', () => {
        expect(Rivet.classify({rvtMargin:{ xs: ['top', "bottom"], md: "left", lg: "right" }}))
          .toEqual("rvt-m-top-xs rvt-m-bottom-xs rvt-m-left-md rvt-m-right-lg");
    }); 
  }); 

  describe('padding', () => {
    it('ignores undefined', () => {
      expect(Rivet.classify({rvtPadding:undefined})).toEqual("");
    });
  
    it('one size fits all', () => {
      expect(Rivet.classify({rvtPadding:"xs"})).toEqual("rvt-p-all-xs");
    });
  
    it('discriminates bounds', () => {
      expect(Rivet.classify({rvtPadding:{ top: "xs", right:"sm", bottom: "md", left: "lg" }}))
          .toEqual("rvt-p-top-xs rvt-p-right-sm rvt-p-bottom-md rvt-p-left-lg");
    });
  
    it('discriminates sizings', () => {
        expect(Rivet.classify({rvtPadding:{ xs: ['top', "bottom"], md: "left", lg: "right" }}))
          .toEqual("rvt-p-top-xs rvt-p-bottom-xs rvt-p-left-md rvt-p-right-lg");
    }); 
  }); 

  describe('typescale', () => {
      it('ignores undefined', () => {
          expect(Rivet.classify({rvtTypescale:undefined})).toEqual("");
      });
  
      it('applies decoration', () => {
          expect(Rivet.classify({rvtTypescale:12})).toEqual("rvt-ts-12");
          expect(Rivet.classify({rvtTypescale:23})).toEqual("rvt-ts-23");
          expect(Rivet.classify({rvtTypescale:"base"})).toEqual("rvt-ts-base");
      });
  });
  
  describe('border', () => {
      it('ignores undefined', () => {
          expect(Rivet.classify({rvtBorder:undefined})).toEqual("");
      });
  
      it('applies decorations', () => {
          expect(Rivet.classify({rvtBorder:"all"})).toEqual("rvt-border-all");
          expect(Rivet.classify({rvtBorder:"bottom"})).toEqual("rvt-border-bottom");
          expect(Rivet.classify({rvtBorder:"top"})).toEqual("rvt-border-top");
          expect(Rivet.classify({rvtBorder:"left"})).toEqual("rvt-border-left");
          expect(Rivet.classify({rvtBorder:"right"})).toEqual("rvt-border-right");
      });

      it('applies multiple decorations', () => {
        expect(Rivet.classify({rvtBorder:["bottom", "top"]})).toEqual("rvt-border-bottom rvt-border-top");
        expect(Rivet.classify({rvtBorder:["left", "right"]})).toEqual("rvt-border-left rvt-border-right");
      });
  });
  
  describe('display', () => {
      it('ignores undefined', () => {
          expect(Rivet.classify({rvtDisplay:undefined})).toEqual("");
      });
  
      it('applies decoration', () => {
          expect(Rivet.classify({rvtDisplay:"inline"})).toEqual("rvt-display-inline");
          expect(Rivet.classify({rvtDisplay:"inline-block"})).toEqual("rvt-display-inline-block");
          expect(Rivet.classify({rvtDisplay:"block"})).toEqual("rvt-display-block");
          expect(Rivet.classify({rvtDisplay:"flex"})).toEqual("rvt-display-flex");
          expect(Rivet.classify({rvtDisplay:"flex-vertical-center"})).toEqual("rvt-display-flex rvt-vertical-center");
      });
  });
  
  describe('parseRivetHidden', () => {
      it('ignores undefined', () => {
          expect(Rivet.classify({rvtHide:undefined})).toEqual("");
      });
  
      it('applies decoration', () => {
        expect(Rivet.classify({rvtHide:"lg-up"})).toEqual("rvt-hide-lg-up");
        expect(Rivet.classify({rvtHide:"md-up"})).toEqual("rvt-hide-md-up");
        expect(Rivet.classify({rvtHide:"sm-up"})).toEqual("rvt-hide-sm-up");
        expect(Rivet.classify({rvtHide:"xl-up"})).toEqual("rvt-hide-xl-up");
        expect(Rivet.classify({rvtHide:"xxl-up"})).toEqual("rvt-hide-xxl-up");
        expect(Rivet.classify({rvtHide:"lg-down"})).toEqual("rvt-hide-lg-down");
        expect(Rivet.classify({rvtHide:"md-down"})).toEqual("rvt-hide-md-down");
        expect(Rivet.classify({rvtHide:"sm-down"})).toEqual("rvt-hide-sm-down");
        expect(Rivet.classify({rvtHide:"xl-down"})).toEqual("rvt-hide-xl-down");
        expect(Rivet.classify({rvtHide:"xxl-down"})).toEqual("rvt-hide-xxl-down");
      });
  });
  
  describe('generated class names', () => {
      it('observes component class', () => {
          expect(Rivet.classify({}, "rvt-class")).toEqual("rvt-class");
      });

      it('observes component class', () => {
        expect(Rivet.classify({className:"external-class"}, "rvt-class", [])).toEqual("rvt-class external-class");
    });

      it('uses external class generators', () => {
          const fooDecorator = (props) => "rvt-foo";
          const barDecorator = (props) => "rvt-bar";
          expect(Rivet.classify({}, "", [fooDecorator, barDecorator])).toEqual("rvt-foo rvt-bar");
      });
  });

  describe('label visiblity', () => {
    it('chooses the screen reader class', () =>{
        expect(Rivet.labelVisiblityClass("screen-reader-only")).toEqual("rvt-sr-only");
    });
    it('chooses the default (no) class', () =>{
        expect(Rivet.labelVisiblityClass("default")).toEqual("");
    });
  });


  