/*
Copyright (C) 2020 The Trustees of Indiana University
SPDX-License-Identifier: BSD-3-Clause
 */
import classNames from 'classnames';
import React from 'react';
import * as Rivet from '../util/Rivet';
import PropTypes from 'prop-types';

const propTypes = {
    /** The text label/description for this radio option */
    label: PropTypes.string.isRequired,
    /** @ignore */
    id: PropTypes.string
};

const RadioButton = 
({className, id = Rivet.shortuid(), label, ...attrs}) => (
    <>
        <input
            id={id}
            type="radio"
            className={classNames("rvt-radio", className)}
            {...attrs}/>
        <label htmlFor={id}>{label}</label>
    </>
);
RadioButton.displayName = 'RadioButton';
RadioButton.propTypes = propTypes;

export default Rivet.rivetize(RadioButton);
