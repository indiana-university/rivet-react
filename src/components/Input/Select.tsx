/*
Copyright (C) 2018 The Trustees of Indiana University
SPDX-License-Identifier: BSD-3-Clause
*/
import * as React from 'react';
import * as Rivet from '../util/Rivet';
import { renderInput, TextProps } from './common';

const Select : React.SFC<TextProps & React.SelectHTMLAttributes<HTMLSelectElement>> = 
    renderInput('select');
Select.displayName = 'Select';

export default Rivet.rivetize<TextProps & React.SelectHTMLAttributes<HTMLSelectElement>>(Select);
