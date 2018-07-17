import classNames from 'classnames';
import * as React from 'react'
import * as Rivet from '../Rivet'
import * as util from '../util'

/**
 * The properties of a button.
 */
interface ButtonProps {
    onClick?: Rivet.Action,
    /** Optional Rivet style: a success/danger/plain button. See: https://rivet.uits.iu.edu/components/forms/buttons/#button-examples */
    rvtStyle?: "success" | "danger" | "plain" | "default"
    /** Optional Rivet style: a small button. See: https://rivet.uits.iu.edu/components/forms/buttons/#small-buttons */
    rvtSize?: "small" | "default"
    /** Optional Rivet style: a secondary button. See: https://rivet.uits.iu.edu/components/forms/buttons/#secondary-variations */
    rvtRole?: "secondary" | "default"
}

/**
 * Generate the combined role and variation class for this button, if applicable.
 * @param attrs This button's properties
 * @see https://rivet.uits.iu.edu/components/forms/buttons/#secondary-variations
 */
const buttonRoleAndStyle = (props: ButtonProps) => {
    const classParts = [
        props.rvtStyle && props.rvtStyle !== "default" ? props.rvtStyle : undefined,
        props.rvtRole && props.rvtRole !== "default" ? props.rvtRole : undefined
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
    props.rvtSize ? `${buttonClass}--${props.rvtSize}` : "";

const buttonClass = "rvt-button";

class Button extends React.Component<ButtonProps & React.ButtonHTMLAttributes<HTMLButtonElement>> {
    public render() {
        const { id, onClick, children, className = '', ...attrs } = this.props;
        const classes = classNames(buttonClass, buttonRoleAndStyle(attrs), buttonSize(attrs), className);
        return (
            <button id={id || util.shortuid()} 
                    className={ classes } 
                    onClick={ onClick } 
                    disabled={ onClick === undefined }
                    { ...attrs } >
                {children}
            </button>
        );
    }
}

export default Rivet.rivetize(Button);
