/*
Copyright (C) 2018 The Trustees of Indiana University
SPDX-License-Identifier: BSD-3-Clause
*/
import * as React from 'react';
import * as Rivet from '../util/Rivet';
import { renderInput, TextProps } from './common';

const Textarea :  React.SFC<TextProps & React.TextareaHTMLAttributes<HTMLTextAreaElement>> = 
    renderInput('textarea');
Textarea.displayName = 'TextArea';

export default Rivet.rivetize<TextProps & React.TextareaHTMLAttributes<HTMLTextAreaElement>>(Textarea);
