import * as React from 'react';
import { Link } from 'react-router-dom';

export type Action = () => void;

export interface Props extends React.Props<Props> {
    id?: string,
    ref?: any,
    className?: string
    children?: React.ReactNode
    //
    ts?: number
    hide?: boolean,
    border?: Edge | Edge[],
    margin?: Size | BoxStyle,
    padding?: Size | BoxStyle,
    display?: string,
}

export type Size = 'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
export const Sizes = [ 'xxs', 'xs', 'sm', 'md', 'lg', 'xl', 'xxl' ];
export type Edge = 'top' | 'right' | 'bottom' | 'left';
export const Edges = [ 'top', 'right', 'bottom', 'left' ];

/**
 * An interface for describing the styling of box edges. 
 */
export interface BoxStyle {
    top?: Size,
    right?: Size,
    bottom?: Size,
    left?: Size,
    // 
    xxs?: Edge | Edge[],
    xs?:  Edge | Edge[],
    sm?: Edge | Edge[],
    md?: Edge | Edge[],
    lg?: Edge | Edge[],
    xl?: Edge | Edge[],
    xxl?: Edge | Edge[],
}

/**
 * Define and render a JSX navigation element. 
 */
export class Nav {
    public label: string
    public to: string
    constructor(label: string, to: string){
        this.label=label;
        this.to=to;
    }
    /**
     * Render a navigation element.
     * An external route (having a URL starting http(s)://) will be rendered as an HTML anchor <a/>.
     * An internal route will be rendered as a React <Link>.
     */
    public render = () =>
        (/^https?:\/\//.test(this.to))
        ? <a href={this.to}>{this.label}</a>
        : <Link to={this.to}>{this.label}</Link>;
};

