import * as React from 'react';
import * as Rivet from '../util/Rivet';
import { renderInput, TextProps } from './common';

const textareaGenerator = (id:string, className: string, ariaDescribedBy: string, ariaInvalid:boolean, attrs:React.TextareaHTMLAttributes<HTMLTextAreaElement>) => (
    <textarea {...attrs} id={id} className={className} aria-describedby={ariaDescribedBy} aria-invalid={ariaInvalid} />
);

const Textarea :  React.SFC<TextProps & React.TextareaHTMLAttributes<HTMLTextAreaElement>> = (props) => (
    renderInput<React.TextareaHTMLAttributes<HTMLTextAreaElement>>(props, textareaGenerator)
);
Textarea.displayName = 'TextArea';

export default Rivet.rivetize(Textarea);
