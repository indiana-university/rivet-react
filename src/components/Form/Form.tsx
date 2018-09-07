import * as classNames from 'classnames';
import * as React from 'react';
import * as Rivet from '../util/Rivet';

interface FormProps {
    /** The text label/description for this form */
    label: string,
    /** Optional Rivet style: Make the label visible only to screen readers. */
    labelVisibility?: "screen-reader-only"
}

const componentClass = 'rvt-form';

const Form : React.SFC<FormProps & React.FormHTMLAttributes<HTMLFormElement>> = 
({ children, className, id = Rivet.shortuid(), label, labelVisibility, name, ...attrs }) => (
    <form className={classNames(componentClass, className)} id={id} {...attrs}>
        <fieldset>
            <legend className={Rivet.labelVisiblityClass(labelVisibility)}>{label}</legend>
            {children}
        </fieldset>
    </form>
);
Form.displayName = 'Form';

export default Rivet.rivetize(Form);
