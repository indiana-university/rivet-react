import * as React from 'react';
import * as Rivet from '../util/Rivet';
import { renderInput, TextProps } from './common';

const Textarea :  React.SFC<TextProps & React.TextareaHTMLAttributes<HTMLTextAreaElement>> = 
    renderInput((attrs) => <textarea {...attrs}/>);
Textarea.displayName = 'TextArea';

export default Rivet.rivetize(Textarea);
