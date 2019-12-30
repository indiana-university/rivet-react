/*
Copyright (C) 2018 The Trustees of Indiana University
SPDX-License-Identifier: BSD-3-Clause
*/
import * as React from 'react';
import * as Rivet from '../util/Rivet';

const Section : React.FC<React.HTMLAttributes<HTMLDivElement>> = (props) => (
    <section {...props} />
);
Section.displayName = 'Section';

export default Rivet.rivetize(Section);
