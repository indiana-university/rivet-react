import * as React from 'react';

export type Id = number;
export type Url = string;
export type Key = string;
export type ClassName = string;
export type Visible = boolean;
export type Action = () => void;
export class Dictionary<T> {
    [key: string]: T;
}

export interface Labeled {
    label?: string,
}

export interface Props extends React.Props<Props> {
    id?: string,
    name?: string,
    label?: string,
    className?: ClassName
}

