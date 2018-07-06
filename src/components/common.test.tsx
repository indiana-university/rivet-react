import * as React from 'react';
import { Link } from 'react-router-dom';
import * as Rivet from './common';

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