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
      expect(Rivet.classify({margin:undefined})).toEqual("");
    });
  
    it('one size fits all', () => {
      expect(Rivet.classify({margin:"xs"})).toEqual("rvt-m-all-xs");
    });
  
    it('discriminates bounds', () => {
      expect(Rivet.classify({margin:{ top: "xs", right:"sm", bottom: "md", left: "lg" }}))
          .toEqual("rvt-m-top-xs rvt-m-right-sm rvt-m-bottom-md rvt-m-left-lg");
    });
  
    it('discriminates sizings', () => {
        expect(Rivet.classify({margin:{ xs: ['top', "bottom"], md: "left", lg: "right" }}))
          .toEqual("rvt-m-top-xs rvt-m-bottom-xs rvt-m-left-md rvt-m-right-lg");
    }); 
  }); 

  describe('padding', () => {
    it('ignores undefined', () => {
      expect(Rivet.classify({padding:undefined})).toEqual("");
    });
  
    it('one size fits all', () => {
      expect(Rivet.classify({padding:"xs"})).toEqual("rvt-p-all-xs");
    });
  
    it('discriminates bounds', () => {
      expect(Rivet.classify({padding:{ top: "xs", right:"sm", bottom: "md", left: "lg" }}))
          .toEqual("rvt-p-top-xs rvt-p-right-sm rvt-p-bottom-md rvt-p-left-lg");
    });
  
    it('discriminates sizings', () => {
        expect(Rivet.classify({padding:{ xs: ['top', "bottom"], md: "left", lg: "right" }}))
          .toEqual("rvt-p-top-xs rvt-p-bottom-xs rvt-p-left-md rvt-p-right-lg");
    }); 
  }); 

  describe('typescale', () => {
      it('ignores undefined', () => {
          expect(Rivet.classify({typescale:undefined})).toEqual("");
      });
  
      it('applies decoration', () => {
          expect(Rivet.classify({typescale:12})).toEqual("rvt-ts-12");
          expect(Rivet.classify({typescale:23})).toEqual("rvt-ts-23");
          expect(Rivet.classify({typescale:"base"})).toEqual("rvt-ts-base");
      });
  });
  
  describe('border', () => {
      it('ignores undefined', () => {
          expect(Rivet.classify({border:undefined})).toEqual("");
      });
  
      it('applies decorations', () => {
          expect(Rivet.classify({border:"all"})).toEqual("rvt-border-all");
          expect(Rivet.classify({border:"bottom"})).toEqual("rvt-border-bottom");
          expect(Rivet.classify({border:"top"})).toEqual("rvt-border-top");
          expect(Rivet.classify({border:"left"})).toEqual("rvt-border-left");
          expect(Rivet.classify({border:"right"})).toEqual("rvt-border-right");
      });

      it('applies multiple decorations', () => {
        expect(Rivet.classify({border:["bottom", "top"]})).toEqual("rvt-border-bottom rvt-border-top");
        expect(Rivet.classify({border:["left", "right"]})).toEqual("rvt-border-left rvt-border-right");
      });
  });
  
  describe('display', () => {
      it('ignores undefined', () => {
          expect(Rivet.classify({display:undefined})).toEqual("");
      });
  
      it('applies decoration', () => {
          expect(Rivet.classify({display:"inline"})).toEqual("rvt-display-inline");
          expect(Rivet.classify({display:"inline-block"})).toEqual("rvt-display-inline-block");
          expect(Rivet.classify({display:"block"})).toEqual("rvt-display-block");
          expect(Rivet.classify({display:"flex"})).toEqual("rvt-display-flex");
          expect(Rivet.classify({display:"flex-vertical-center"})).toEqual("rvt-display-flex rvt-vertical-center");
      });
  });
  
  describe('parseRivetHidden', () => {
      it('ignores undefined', () => {
          expect(Rivet.classify({hide:undefined})).toEqual("");
      });
  
      it('applies decoration', () => {
        expect(Rivet.classify({hide:"lg-up"})).toEqual("rvt-hide-lg-up");
        expect(Rivet.classify({hide:"md-up"})).toEqual("rvt-hide-md-up");
        expect(Rivet.classify({hide:"sm-up"})).toEqual("rvt-hide-sm-up");
        expect(Rivet.classify({hide:"xl-up"})).toEqual("rvt-hide-xl-up");
        expect(Rivet.classify({hide:"xxl-up"})).toEqual("rvt-hide-xxl-up");
        expect(Rivet.classify({hide:"lg-down"})).toEqual("rvt-hide-lg-down");
        expect(Rivet.classify({hide:"md-down"})).toEqual("rvt-hide-md-down");
        expect(Rivet.classify({hide:"sm-down"})).toEqual("rvt-hide-sm-down");
        expect(Rivet.classify({hide:"xl-down"})).toEqual("rvt-hide-xl-down");
        expect(Rivet.classify({hide:"xxl-down"})).toEqual("rvt-hide-xxl-down");
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


  