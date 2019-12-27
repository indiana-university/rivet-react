/*
Copyright (C) 2018 The Trustees of Indiana University
SPDX-License-Identifier: BSD-3-Clause
*/
import React from 'react';
import Rivet from '../util/Rivet';
import { renderInput } from './common';

const Textarea = 
    renderInput((attrs) => <textarea {...attrs}/>);
Textarea.displayName = 'TextArea';

export default Rivet.rivetize(Textarea);
