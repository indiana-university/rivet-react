import * as React from 'react'
import * as Rivet from '../Rivet'
import * as util from '../util'

/**
 * The properties of a button.
 */
interface ButtonProps extends Rivet.Props {
    /** Optional event to raise when the button is clicked by the user  */
    onClick?: Rivet.Action,
    /** Optional Rivet style: a success/danger/plain button. See: https://rivet.uits.iu.edu/components/forms/buttons/#button-examples */
    style?: "success" | "danger" | "plain" | "default"
    /** Optional Rivet style: a small button. See: https://rivet.uits.iu.edu/components/forms/buttons/#small-buttons */
    size?: "small" | "default"
    /** Optional Rivet style: a secondary button. See: https://rivet.uits.iu.edu/components/forms/buttons/#secondary-variations */
    role?: "secondary" | "default"
    /** Optional: Disable the button */
    disabled?: boolean,
}

/**
 * Generate the combined role and variation class for this button, if applicable.
 * @param attrs This button's properties
 * @see https://rivet.uits.iu.edu/components/forms/buttons/#secondary-variations
 */
const buttonRoleAndStyle = (props: ButtonProps) => {
    const classParts = [
        props.style && props.style !== "default" ? props.style : undefined,
        props.role && props.role !== "default" ? props.role : undefined
    ].filter(x => x !== undefined);
    // combine variation and style, if any.
    return classParts.length === 0 ? "" : `${buttonClass}--${classParts.join("-")}`;
}

/**
 * Generate the size class for this button, if applicable.
 * @param attrs This button's properties
 * @see https://rivet.uits.iu.edu/components/forms/buttons/#small-buttons
 */
const buttonSize = (props: ButtonProps) =>
    props.size ? `${buttonClass}--${props.size}` : "";

const buttonClass = "rvt-button";
const buttonDecorators = [ buttonRoleAndStyle, buttonSize]

class Button extends React.Component<ButtonProps> {
    public render() {
        return (
            <button id={this.props.id || util.shortuid()} 
                    className={ Rivet.classify(this.props, buttonClass, buttonDecorators) } 
                    onClick={ this.props.onClick } 
                    disabled={ this.props.disabled } >
                {this.props.children}
            </button>
        );
    }
}

export default Button