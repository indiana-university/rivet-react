/*
Copyright (C) 2018 The Trustees of Indiana University
SPDX-License-Identifier: BSD-3-Clause
*/
import * as React from 'react';
import * as Rivet from '../util/Rivet';
import { renderInput, TextProps } from './common';

const Input : any & React.FC<TextProps & React.InputHTMLAttributes<HTMLInputElement>> = 
    renderInput((attrs) => <input {...attrs}/>);
Input.displayName = 'Input';

export default Rivet.rivetize(Input);
