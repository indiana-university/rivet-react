import * as React from 'react'
import * as Rivet from '../Rivet'
import * as util from '../util'

/**  
 * Optional Rivet button stylings. 
 * If no style is specified, the component will apply the default button style.
 * These 'success', 'danger', and 'plain' styles are mutually exclusive: only one will be honored.
 * 
 * @see https://rivet.uits.iu.edu/components/forms/buttons/
 * 
 * @property secondary: a secondary-style button.
 * @property success: a success-style button.
 * @property danger: a danger-style button.
 * @property plain: a success-style button.
 * @property small: a small button.
 */
interface RivetButtonHTMLAttributes {
    /** Optional style: a secondary button. */
    secondary?: boolean;
    /** Optional Rivet style: a success button. Exclusive to 'danger' and 'plain' styles. */
    success?: boolean;
    /** Optional Rivet style: a danger button. Exclusive to 'success' and 'plain' styles. */
    danger?: boolean;
    /** Optional Rivet style: a plain button. Exclusive to 'success' and 'danger' styles. */
    plain?: boolean;
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
 * @param attrs This button's properties
 * @see https://rivet.uits.iu.edu/components/forms/buttons/#secondary-variations
 */
const buttonRoleAndStyle = (attrs: RivetButtonHTMLAttributes) => {
    const classParts = Array<string>();
    // check style
    if (attrs.success) { classParts.push("success"); }
    else if (attrs.danger) { classParts.push("danger"); }
    else if (attrs.plain) { classParts.push("plain"); };
    // check variation
    if (attrs.secondary) { classParts.push("secondary"); };
    // combine variation and style, if any.
    return classParts.length === 0 ? "" : `rvt-button--${classParts.join("-")}`;
}

/**
 * Generate the size class for this button, if applicable.
 * @param attrs This button's properties
 * @see https://rivet.uits.iu.edu/components/forms/buttons/#small-buttons
 */
const buttonSize = (attrs: RivetButtonHTMLAttributes) =>
    attrs.small ? "rvt-button--small" : "";

const buttonClass = "rvt-button";
const buttonDecorators = [ buttonRoleAndStyle, buttonSize]

/**
 * Button properies and styling attributes.
 */
export type ButtonProps = 
    ComponentProps & 
    RivetButtonHTMLAttributes &
    React.ButtonHTMLAttributes<HTMLButtonElement>; 

class Button extends React.Component<ButtonProps> {
    public render() {
        const { id, onClick, children, ...attrs } = this.props;
        return (
            <button id={id || util.shortuid()} 
                    className={ Rivet.rivetize<ButtonProps>(attrs, buttonClass, buttonDecorators) } 
                    onClick={ onClick } 
                    disabled={ onClick === undefined }
                    { ...attrs } >
                {children}
            </button>
        );
    }
}

export default Button