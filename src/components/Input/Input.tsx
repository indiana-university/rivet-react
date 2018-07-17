import * as React from 'react';
import * as Rivet from '../Rivet';
import { renderInput, TextProps } from './common';

const inputGenerator = (id:string, className: string, ariaDescribedBy: string, ariaInvalid:boolean, attrs: React.InputHTMLAttributes<HTMLInputElement>) => (
    <input {...attrs} id={id} className={className} aria-describedby={ariaDescribedBy} aria-invalid={ariaInvalid} />
);

const Input : React.SFC<TextProps & React.InputHTMLAttributes<HTMLInputElement>> = (props) => (
    renderInput<React.InputHTMLAttributes<HTMLInputElement>>(props, inputGenerator)
);
Input.displayName = 'Input';

export default Rivet.rivetize(Input);
