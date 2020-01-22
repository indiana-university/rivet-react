/*
Copyright (C) 2018 The Trustees of Indiana University
SPDX-License-Identifier: BSD-3-Clause
*/
import React from 'react';
import * as Rivet from '../util/Rivet';
import { InputTag } from './common';
import { inputPropTypes } from './Input';

const Select = (attrs) =><InputTag Tag="select" {...attrs} />;
Select.displayName = 'Select';
Select.propTypes = inputPropTypes;

export default Rivet.rivetize(Select);
