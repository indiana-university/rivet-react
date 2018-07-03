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
    className?: string,
    children?: any
}

