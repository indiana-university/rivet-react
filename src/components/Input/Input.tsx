import * as React from 'react';
import * as Rivet from '../util/Rivet';
import { renderInput, TextProps } from './common';

const Input : React.SFC<TextProps & React.InputHTMLAttributes<HTMLInputElement>> = 
    renderInput((attrs) => <input {...attrs}/>);
Input.displayName = 'Input';

export default Rivet.rivetize(Input);
