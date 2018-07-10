import * as React from 'react'
import * as c from './common';

const textInput = (id:string, className: string, ariaDescribedBy: string, ariaInvalid:boolean, attrs: React.InputHTMLAttributes<HTMLInputElement>) =>
        <input id={id} className={className} aria-describedby={ariaDescribedBy} aria-invalid={ariaInvalid} {...attrs} />

export class Input extends React.Component<c.TextProps & React.InputHTMLAttributes<HTMLInputElement>> {
    public render() {
        return c.renderInput<React.InputHTMLAttributes<HTMLInputElement>>(this.props, textInput);
    }
}

export default Input