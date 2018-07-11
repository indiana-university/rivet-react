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

describe('parseRivetSpacing', () => {
    it('ignores undefined', () => {
      expect(Rivet.parseRivetSpacing("m", undefined)).toEqual([]);
    });
  
    it('ignores noncompliant types', () => {
      expect(Rivet.parseRivetSpacing("m", {})).toEqual([]);
    });
  
    it('one size fits all', () => {
      expect(Rivet.parseRivetSpacing("m", "xs")).toEqual(["rvt-m-all-xs"]);
    });
  
    it('discriminates bounds', () => {
      expect(Rivet.parseRivetSpacing("m", { top: "xs", right:"sm", bottom: "md", left: "lg" }))
          .toEqual(["rvt-m-top-xs", "rvt-m-right-sm", "rvt-m-bottom-md", "rvt-m-left-lg"]);
    });
  
    it('discriminates sizings', () => {
      expect(Rivet.parseRivetSpacing("m", { xs: ['top', "bottom"], md: "left", lg: "right" }))
          .toEqual(["rvt-m-top-xs", "rvt-m-bottom-xs", "rvt-m-left-md", "rvt-m-right-lg"]);
    });
  
  }); 
  
  describe('parseRivetTypescale', () => {
      it('ignores undefined', () => {
          expect(Rivet.parseRivetTypescale(undefined)).toEqual([]);
      });
  
      it('accepts number', () => {
          expect(Rivet.parseRivetTypescale(123)).toEqual(["rvt-ts-123"]);
      });
  });
  
  describe('parseRivetBorder', () => {
      it('ignores undefined', () => {
          expect(Rivet.parseRivetBorder(undefined)).toEqual([]);
      });
  
      it('accepts single string', () => {
          expect(Rivet.parseRivetBorder("foo")).toEqual(["rvt-border-foo"]);
      });
  
      it('accepts multiple strings', () => {
          expect(Rivet.parseRivetBorder(["foo", "bar"])).toEqual(["rvt-border-foo", "rvt-border-bar"]);
      });
  });
  
  describe('parseRivetDisplay', () => {
      it('ignores undefined', () => {
          expect(Rivet.parseRivetDisplay(undefined)).toEqual([]);
      });
  
      it('accepts single string', () => {
          expect(Rivet.parseRivetDisplay("sr-only")).toEqual(["rvt-sr-only"]);
      });
  
      it('accepts multiple strings', () => {
          expect(Rivet.parseRivetDisplay(["foo"])).toEqual(["rvt-display-foo"]);
      });
  });
  
  describe('parseRivetHidden', () => {
      it('ignores undefined', () => {
          expect(Rivet.parseRivetHidden(undefined)).toEqual([]);
      });
  
      it('accepts single string', () => {
          expect(Rivet.parseRivetHidden("foo-bar")).toEqual(["rvt-hide-foo-bar"]);
      });
  });
  
  describe('generated class names', () => {
      it('observes component class', () => {
          expect(Rivet.classify({}, "rvt-foo")).toEqual("rvt-foo");
      });

      it('observes component class', () => {
        expect(Rivet.classify({className:"external-class"}, "rvt-foo", [])).toEqual("rvt-foo external-class");
    });

      it('gracefully ingores component class', () => {
          expect(Rivet.classify({})).toEqual("");
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


  