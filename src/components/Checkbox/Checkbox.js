/*
Copyright (C) 2018 The Trustees of Indiana University
SPDX-License-Identifier: BSD-3-Clause
*/
import React from 'react';
import Rivet from '../util/Rivet';

const Checkbox = 
({ children, id = Rivet.shortuid(), label, labelVisibility, ...attrs }) => (
    <>
        <input id={id} type="checkbox" {...attrs} />
        { children }
        <label htmlFor={id}><span className={Rivet.labelVisiblityClass(labelVisibility)}>{label}</span></label>
    </>
);
Checkbox.displayName = 'Checkbox';

export default Rivet.rivetize(Checkbox);
