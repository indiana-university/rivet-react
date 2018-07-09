import * as React from 'react'
import * as Rivet from '../Rivet'

interface RadioButtonProps extends Rivet.Props {
    /** The text label/description for this radio option */
    label: string,
    /** The name of this radio button */
    name: string,
    /** Render the radio button with an additional hidden input, as required by some frameworks.  */
    withHiddenInput?: boolean
}

const hiddenWrapper = (props: RadioButtonProps) =>
    props.withHiddenInput ? "rvt-radio-wrapper" : "";

const componentClass = "rvt-radio";
const componentDecorators = [ hiddenWrapper ]

export class RadioButton extends React.PureComponent<RadioButtonProps & React.InputHTMLAttributes<HTMLInputElement>> {
    public render() {
        const { id, label, withHiddenInput, ...attrs} = this.props;
        const inputId = id || Rivet.shortuid();
        return (
            <li className={Rivet.classify(this.props, componentClass, componentDecorators)}>
                <input id={inputId} type="radio" {...attrs} />
                {withHiddenInput && <input type="hidden"/>}
                <label htmlFor={inputId}>{label}</label>
            </li>
        );
    }
}

export default RadioButton