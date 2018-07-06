import * as React from 'react';

export type Action = () => void;

export enum Notification {
    Message = 1,
    Success,
    Info,
    Error
}

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

