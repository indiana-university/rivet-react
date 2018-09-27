import * as React from 'react';
import * as Rivet from '../util/Rivet';
import { renderInput, TextProps } from './common';

const Select : React.SFC<TextProps & React.SelectHTMLAttributes<HTMLSelectElement>> = 
    renderInput((attrs) => <select {...attrs}/>);
Select.displayName = 'Select';

export default Rivet.rivetize(Select);
