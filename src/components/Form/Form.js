/*
Copyright (C) 2018 The Trustees of Indiana University
SPDX-License-Identifier: BSD-3-Clause
*/
import classNames from 'classnames';
import React from 'react';
import Rivet from '../util/Rivet';
import PropTypes from 'prop-types';

const propTypes = {
    /** The text label/description for this form */
    label: PropTypes.string,
    /** Optional Rivet style: Make the label visible only to screen readers. */
    labelVisibility: PropTypes.oneOf(['screen-reader-only'])
}

const componentClass = 'rvt-form';

const Form = 
({ children, className, id = Rivet.shortuid(), label, labelVisibility, name, ...attrs }) => (
    <form className={classNames(componentClass, className)} id={id} {...attrs}>
        <fieldset>
            <legend className={Rivet.labelVisiblityClass(labelVisibility)}>{label}</legend>
            {children}
        </fieldset>
    </form>
);
Form.displayName = 'Form';
Form.propTypes = propTypes;

export default Rivet.rivetize(Form);
