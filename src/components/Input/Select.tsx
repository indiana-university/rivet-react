import * as React from 'react';
import * as Rivet from '../util/Rivet';
import { renderInput, TextProps } from './common';

const inputGenerator = (id:string, className: string, ariaDescribedBy: string, ariaInvalid:boolean, attrs: React.InputHTMLAttributes<HTMLSelectElement>) => (
    <select{...attrs} id={id} className={className} aria-describedby={ariaDescribedBy} aria-invalid={ariaInvalid} />
);

const Select : React.SFC<TextProps & React.InputHTMLAttributes<HTMLSelectElement>> = (props) => (
    renderInput<React.InputHTMLAttributes<HTMLSelectElement>>(props, inputGenerator)
);
Select.displayName = 'Select';

export default Rivet.rivetize(Select);
