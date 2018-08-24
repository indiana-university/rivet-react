import * as React from 'react';
import * as Rivet from '../util/Rivet';

export interface CheckboxProps {
    /**
     * The checkbox label
     */
    label: string,
    /**
     * Optional Rivet style: Make the label visible only to screen readers.
     */
    labelVisibility?: "screen-reader-only"
}

const Checkbox : React.SFC<CheckboxProps & React.InputHTMLAttributes<HTMLInputElement>> = 
({ children, id = Rivet.shortuid(), label, labelVisibility, ...attrs }) => (
    <>
        <input id={id} type="checkbox" {...attrs} />
        { children }
        <label className={Rivet.labelVisiblityClass(labelVisibility)} htmlFor={id}>{label}</label>
    </>
);
Checkbox.displayName = 'Checkbox';

export default Rivet.rivetize(Checkbox);
