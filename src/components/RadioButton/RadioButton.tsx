import * as React from 'react'
import * as Rivet from '../Rivet'

interface RadioButtonProps extends Rivet.Props {
    /** The text label/description for this radio option */
    label: string,
    /** The name of this radio button */
    name: string,
}

const componentClass = "rvt-radio";

export class RadioButton extends React.PureComponent<RadioButtonProps & React.InputHTMLAttributes<HTMLInputElement>> {
    public render() {
        const { id, label, name, ...attrs} = this.props;
        const inputId = id || Rivet.shortuid();
        return (
            <React.Fragment>
                <input id={inputId} type="radio" name={name} className={Rivet.classify(this.props, componentClass)} {...attrs} />
                <label htmlFor={inputId}>{label}</label>
            </React.Fragment>
        );
    }
}

export default RadioButton