import * as React from 'react'
import { renderInput, TextProps } from './common';

const textareaGenerator = (id:string, className: string, ariaDescribedBy: string, ariaInvalid:boolean, attrs:React.TextareaHTMLAttributes<HTMLTextAreaElement>) => (
    <textarea id={id} className={className} aria-describedby={ariaDescribedBy} aria-invalid={ariaInvalid} {...attrs} />
);

export const Textarea :  React.SFC<TextProps & React.TextareaHTMLAttributes<HTMLTextAreaElement>> = (props) => (
    renderInput<React.TextareaHTMLAttributes<HTMLTextAreaElement>>(props, textareaGenerator)
);
Textarea.displayName = 'TextArea';

export default Textarea;
