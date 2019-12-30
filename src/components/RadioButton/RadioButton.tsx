/*
Copyright (C) 2018 The Trustees of Indiana University
SPDX-License-Identifier: BSD-3-Clause
*/
import classNames from 'classnames';
import * as React from 'react';
import * as Rivet from '../util/Rivet';

interface RadioButtonProps {
    /** The text label/description for this radio option */
    label: string;
};

const RadioButton : React.FC <RadioButtonProps & React.InputHTMLAttributes<HTMLInputElement>> = 
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

export default Rivet.rivetize(RadioButton);
