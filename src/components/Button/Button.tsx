import * as React from 'react'
import * as Rivet from '../common'
import * as util from '../util'

/**  
 * The button role. Optional.
 * If no role is specified, the component will apply the primary button style.
 * 
 * @see https://rivet.uits.iu.edu/components/forms/buttons/#secondary-variations
 */
interface RivetButtonRoleHTMLAttributes {
    /** Optional style: a secondary button. */
    secondary?: boolean;
}

/**  
 * The button style. Optional. 
 * If no style is specified, the component will apply the default button style.
 * These styles are mutually exclusive: only one will be honored.
 * 
 * @see https://rivet.uits.iu.edu/components/forms/buttons/#button-examples
 * @property success: a success-style button.
 * @property danger: a danger-style button.
 * @property plain: a success-style button.
 */
interface RivetButtonStyleHTMLAttributes {
    /** Optional Rivet style: a success button. Exclusive to 'danger' and 'plain' styles. */
    success?: boolean;
    /** Optional Rivet style: a danger button. Exclusive to 'success' and 'plain' styles. */
    danger?: boolean;
    /** Optional Rivet style: a plain button. Exclusive to 'success' and 'danger' styles. */
    plain?: boolean;
}

/**  
 * The button size. Optional.
 * If no role is specified, the component will apply the regular button sizing.
 * 
 * @see https://rivet.uits.iu.edu/components/forms/buttons/#small-buttons
 */
interface RivetButtonSizeHTMLAttributes {
    /** Optional Rivet style: a small button. */
    small?: boolean;
}

/**
 * The properties of a button.
 */
interface ComponentProps extends Rivet.Props {
    onClick?: Rivet.Action,
}

/**
 * Generate the combined role and variation class for this button, if applicable.
 * @param props This button's properties
 * @see https://rivet.uits.iu.edu/components/forms/buttons/#secondary-variations
 */
const buttonRoleAndStyle = (props: ButtonProps) => {
    const { 
        secondary, 
        success, danger, plain
    } = props;
    
    const classParts = Array<string>();
    // check style
    if (success) { classParts.push("success"); }
    else if (danger) { classParts.push("danger"); }
    else if (plain) { classParts.push("plain"); };
    // check variation
    if (secondary) { classParts.push("secondary"); };
    // combine variation and style, if any.
    return classParts.length === 0 ? "" : `rvt-button--${classParts.join("-")}`;
}

/**
 * Generate the size class for this button, if applicable.
 * @param props This button's properties
 * @see https://rivet.uits.iu.edu/components/forms/buttons/#small-buttons
 */
const buttonSize = (props: ButtonProps) => {
    const { small } = props;
    return small ? "rvt-button--small" : ""
}

const buttonClass = "rvt-button";
const buttonDecorators = [ buttonRoleAndStyle, buttonSize]

/**
 * Button properies and styling attributes.
 */
export type ButtonProps = 
    ComponentProps & 
    RivetButtonRoleHTMLAttributes &
    RivetButtonStyleHTMLAttributes & 
    RivetButtonSizeHTMLAttributes &
    React.ButtonHTMLAttributes<HTMLButtonElement>; 

class Button extends React.Component<ButtonProps> {
    public render() {
        const { id, onClick, children, ...attrs } = this.props;
        return (
            <button id={id || util.shortuid()} 
                    className={ util.rivetize(attrs, buttonClass, buttonDecorators) } 
                    onClick={ onClick } 
                    disabled={ onClick === undefined }
                    { ...attrs } >
                {children}
            </button>
        );
    }
}

export default Button