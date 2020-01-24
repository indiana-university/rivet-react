/*
Copyright (C) 2020 The Trustees of Indiana University
SPDX-License-Identifier: BSD-3-Clause
*/
import React from 'react';
import * as Rivet from '../util/Rivet';

const Section = (props) => (
    <section {...props} />
);
Section.displayName = 'Section';

export default Rivet.rivetize(Section);
