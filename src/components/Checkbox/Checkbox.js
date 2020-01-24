/*
Copyright (C) 2020 The Trustees of Indiana University
SPDX-License-Identifier: BSD-3-Clause
*/
import React from 'react';
import PropTypes from 'prop-types';
import * as Rivet from '../util/Rivet';

const propTypes = {
    /**
     * The checkbox label
     */
    label: PropTypes.node.isRequired,
    /**
     * Optional Rivet style: Make the label visible only to screen readers.
     */
    labelVisibility: PropTypes.oneOf(["screen-reader-only"]),
    /** @ignore */
    id: PropTypes.string
  };

const Checkbox = 
({ children, id = Rivet.shortuid(), label, labelVisibility, ...attrs }) => (
    <>
        <input id={id} type="checkbox" {...attrs} />
        { children }
        <label htmlFor={id}><span className={Rivet.labelVisiblityClass(labelVisibility)}>{label}</span></label>
    </>
);
Checkbox.displayName = 'Checkbox';
Checkbox.propTypes = propTypes;

export default Rivet.rivetize(Checkbox);
