/*
Copyright (C) 2020 The Trustees of Indiana University
SPDX-License-Identifier: BSD-3-Clause
*/
import React from 'react';
import * as Rivet from '../util/Rivet';
import { InputTag } from './common';
import PropTypes from 'prop-types';

/**
 * Styleguidist doesn't support imported propTypes documentation yet.
 * https://github.com/reactjs/react-docgen/pull/352
 */
export const inputPropTypes = {
    /** The label for the input */
    label: PropTypes.string.isRequired,
    /** Visibility modifier for the input's label */
    labelVisibility: PropTypes.oneOf(["screen-reader-only"]),
    /** An optional note that will be displayed below the input */
    note: PropTypes.node,
    /** Rivet style for inline validation */
    variant: PropTypes.oneOf(['danger', 'info', 'success', 'warning'])
};

const Input = (attrs) => <InputTag Tag="input" {...attrs}/>;
Input.displayName = 'Input';
Input.propTypes = inputPropTypes;

export default Rivet.rivetize(Input);
