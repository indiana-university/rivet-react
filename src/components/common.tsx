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
    border?: string | string[],
    margin?: string | string[],
    padding?: string | string[],
    display?: string
}

