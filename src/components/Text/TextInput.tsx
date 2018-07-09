import * as React from 'react'
import * as c from './common';

const textInput = (id:string, className: string, ariaDescribedBy: string, ariaInvalid:boolean) =>
        <input type="text" id={id} className={className} aria-describedby={ariaDescribedBy} aria-invalid={ariaInvalid}/>

export class TextInput extends React.Component<c.TextProps & React.InputHTMLAttributes<HTMLInputElement>> {
    public render() {
        return c.renderTextComponent(this.props, textInput);
    }
}

export default TextInput