// use strict 

import * as util from './util';

describe('parseRivetSpacing', () => {
  it('ignores undefined', () => {
    expect(util.parseRivetSpacing("m", undefined)).toEqual([]);
  });

  it('ignores noncompliant types', () => {
    expect(util.parseRivetSpacing("m", {})).toEqual([]);
  });

  it('one size fits all', () => {
    expect(util.parseRivetSpacing("m", "xs")).toEqual(["rvt-m-all-xs"]);
  });

  it('discriminates bounds', () => {
    expect(util.parseRivetSpacing("m", { top: "xs", right:"sm", bottom: "md", left: "lg" }))
        .toEqual(["rvt-m-top-xs", "rvt-m-right-sm", "rvt-m-bottom-md", "rvt-m-left-lg"]);
  });

  it('discriminates sizings', () => {
    expect(util.parseRivetSpacing("m", { xs: ['top', "bottom"], md: "left", lg: "right" }))
        .toEqual(["rvt-m-top-xs", "rvt-m-bottom-xs", "rvt-m-left-md", "rvt-m-right-lg"]);
  });

}); 

describe('parseRivetTypescale', () => {
    it('ignores undefined', () => {
        expect(util.parseRivetTypescale(undefined)).toEqual([]);
    });

    it('accepts number', () => {
        expect(util.parseRivetTypescale(123)).toEqual(["rvt-ts-123"]);
    });
});

describe('parseRivetBorder', () => {
    it('ignores undefined', () => {
        expect(util.parseRivetBorder(undefined)).toEqual([]);
    });

    it('accepts single string', () => {
        expect(util.parseRivetBorder("foo")).toEqual(["rvt-border-foo"]);
    });

    it('accepts multiple strings', () => {
        expect(util.parseRivetBorder(["foo", "bar"])).toEqual(["rvt-border-foo", "rvt-border-bar"]);
    });
});

describe('parseRivetDisplay', () => {
    it('ignores undefined', () => {
        expect(util.parseRivetDisplay(undefined)).toEqual([]);
    });

    it('accepts single string', () => {
        expect(util.parseRivetDisplay("sr-only")).toEqual(["rvt-sr-only"]);
    });

    it('accepts multiple strings', () => {
        expect(util.parseRivetDisplay(["foo"])).toEqual(["rvt-display-foo"]);
    });
});

describe('parseRivetHidden', () => {
    it('ignores undefined', () => {
        expect(util.parseRivetHidden(undefined)).toEqual([]);
    });

    it('accepts single string', () => {
        expect(util.parseRivetHidden("foo-bar")).toEqual(["rvt-hide-foo-bar"]);
    });
});

describe('generated class names', () => {
    it('observes component class', () => {
        expect(util.rivetize({}, "rvt-foo")).toEqual("rvt-foo");
    });

    it('gracefully ingores component class', () => {
        expect(util.rivetize({})).toEqual("");
    });

    it('uses external class generators', () => {
        const fooDecorator = (props) => "rvt-foo";
        const barDecorator = (props) => "rvt-bar";
        expect(util.rivetize({}, "", [fooDecorator, barDecorator])).toEqual("rvt-foo rvt-bar");
    });
});
