import * as React from 'react'
import * as c from './common';

const textarea = (id:string, className: string, ariaDescribedBy: string, ariaInvalid:boolean) =>
        <textarea id={id} className={className} aria-describedby={ariaDescribedBy} aria-invalid={ariaInvalid}/>

export class TextArea extends React.Component<c.TextProps & React.InputHTMLAttributes<HTMLInputElement>> {
    public render() {
        return c.renderTextComponent(this.props, textarea);
    }
}

export default TextArea