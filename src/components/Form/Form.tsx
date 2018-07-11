import * as React from 'react'
import * as Rivet from '../Rivet'

interface FormProps extends Rivet.Props {
    /** The text label/description for this radio option */
    label: string,
    /**
     * Optional Rivet style: Make the label visible only to screen readers.
     * See: https://rivet.uits.iu.edu/components/utilities/display/#visually-hidden-labels-example
     */
    rvtLabelVisibility?: Rivet.LabelVisibility
}

const componentClass = "rvt-form";

class Form extends React.PureComponent<FormProps & React.FormHTMLAttributes<HTMLFormElement>> {
    public render() {
        const { id, label, name, rvtLabelVisibility, children, ...attrs} = this.props;
        const formId = id || Rivet.shortuid();
        return (
            <form className={Rivet.classify(this.props, componentClass)} id={formId} {...attrs}>
                <fieldset>
                    <legend className={Rivet.labelVisiblityClass(rvtLabelVisibility)}>{label}</legend>
                        {children}
                </fieldset>
            </form>
        );
    }
}

export default Form