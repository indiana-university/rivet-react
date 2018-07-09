import * as React from 'react'
import * as Rivet from '../Rivet'

interface FormProps extends Rivet.Props {
    /** The text label/description for this radio option */
    label: string,
    /** Include the group label only for screen readers. */
    srOnly?: boolean,
}

const componentClass = "rvt-form";

class Form extends React.PureComponent<FormProps & React.FormHTMLAttributes<HTMLFormElement>> {
    public render() {
        const { id, label, name, srOnly, children, ...attrs} = this.props;
        const formId = id || Rivet.shortuid();
        return (
            <form className={Rivet.classify(this.props, componentClass)} id={formId} {...attrs}>
                <fieldset>
                    <legend className={Rivet.maybe(srOnly, "sr-only")}>{label}</legend>
                        {children}
                </fieldset>
            </form>
        );
    }
}

export default Form