import * as classNames from 'classnames';
import * as React from 'react';
import * as Rivet from '../Rivet';

interface RadioButtonProps {
    /** The text label/description for this radio option */
    label: string;
};

const componentClass = "rvt-radio";

const RadioButton : React.SFC <RadioButtonProps & React.InputHTMLAttributes<HTMLInputElement>> = ({
    className,
    id = Rivet.shortuid(),
    label,
    ...attrs
}) => (
    <>
        <input
            id={id}
            type="radio"
            className={classNames(componentClass, className)}
            {...attrs}/>
        <label htmlFor={id}>{label}</label>
    </>
);
RadioButton.displayName = 'RadioButton';

export default Rivet.rivetize(RadioButton);
