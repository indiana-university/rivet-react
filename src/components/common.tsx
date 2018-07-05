

import * as React from 'react';

export type Action = () => void;

export enum Notification {
    Message = 1,
    Success,
    Info,
    Error
}

export type BoxStyling = string | BoxEdges | BoxSizings;

export interface Props extends React.Props<Props> {
    id?: string,
    ref?: any,
    className?: string
    children?: React.ReactNode
    //
    ts?: number
    hide?: boolean,
    border?: string | string[],
    margin?: BoxStyling,
    padding?: BoxStyling,
    display?: string,
}

/**
 * An interface for describing the styling of box edges. 
 * Values can be any of: xxs, xs, sm, md, lg, xl, xxl.
 */
export interface BoxEdges {
    top?: string,
    right?: string,
    bottom?: string,
    left?: string,
}

/**
 * An interface for describing the box edges to which stylings should be applied. 
 * Values can be one or more of: top, right, bottom, left. 
 */
export interface BoxSizings {
    xxs?: string | string[],
    xs?:  string | string[],
    sm?: string | string[],
    md?: string | string[],
    lg?: string | string[],
    xl?: string | string[],
    xxl?: string | string[],
}


