import * as React from 'react';
import * as Rivet from '../Rivet';

interface RadioButtonProps extends Rivet.Props {
    /** The text label/description for this radio option */
    label: string
};

const componentClass = "rvt-radio";

export const RadioButton : React.SFC < RadioButtonProps & React.InputHTMLAttributes < HTMLInputElement >> = ({
    id = Rivet.shortuid(),
    label,
    ...attrs
}) => (
    <React.Fragment>
        <input
            id={id}
            type="radio"
            className={Rivet.classify(attrs, componentClass)}
            {...attrs}/>
        <label htmlFor={id}>{label}</label>
    </React.Fragment>
);
RadioButton.displayName = 'RadioButton';

export default RadioButton