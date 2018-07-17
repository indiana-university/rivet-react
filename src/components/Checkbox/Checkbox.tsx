import * as React from 'react';
import * as Rivet from '../Rivet';

export interface CheckboxProps {
    label: string,
    /**
     * Optional Rivet style: Make the label visible only to screen readers.
     * See: https://rivet.uits.iu.edu/components/utilities/display/#visually-hidden-labels-example
     */
    labelVisibility?: Rivet.LabelVisibility
}

const Checkbox : React.SFC<CheckboxProps & React.InputHTMLAttributes<HTMLInputElement>> = ({ children, id = Rivet.shortuid(), label, labelVisibility, ...attrs }) => (
    <>
        <input id={id} type="checkbox" {...attrs} />
        { children }
        <label className={Rivet.labelVisiblityClass(labelVisibility)} htmlFor={id}>{label}</label>
    </>
);
Checkbox.displayName = 'Checkbox';

export default Rivet.rivetize(Checkbox);
