/*
Copyright (C) 2018 The Trustees of Indiana University
SPDX-License-Identifier: BSD-3-Clause
*/
import React from 'react';
import Rivet from '../util/Rivet';
import { renderInput } from './common';

const Select = 
    renderInput((attrs) => <select {...attrs}/>);
Select.displayName = 'Select';

export default Rivet.rivetize(Select);
