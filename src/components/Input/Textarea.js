/*
Copyright (C) 2018 The Trustees of Indiana University
SPDX-License-Identifier: BSD-3-Clause
*/
import React from 'react';
import * as Rivet from '../util/Rivet';
import { renderInput } from './common';

const Textarea = (attrs) => <>{renderInput(<textarea {...attrs}/>)}</>;
Textarea.displayName = 'TextArea';

export default Rivet.rivetize(Textarea);
