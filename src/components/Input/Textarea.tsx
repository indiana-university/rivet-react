import * as React from 'react'
import * as c from './common';

const textarea = 
    (id:string, className: string, ariaDescribedBy: string, ariaInvalid:boolean, attrs:React.TextareaHTMLAttributes<HTMLTextAreaElement>) =>
        <textarea id={id} className={className} aria-describedby={ariaDescribedBy} aria-invalid={ariaInvalid} {...attrs} />

export class Textarea extends React.Component<c.TextProps & React.TextareaHTMLAttributes<HTMLTextAreaElement>> {
    public render() {
        return c.renderInput<React.TextareaHTMLAttributes<HTMLTextAreaElement>>(this.props, textarea);
    }
}

export default Textarea