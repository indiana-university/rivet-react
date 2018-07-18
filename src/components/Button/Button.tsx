import * as classNames from 'classnames';
import * as React from 'react';
import * as Rivet from '../Rivet';
import * as util from '../util';

/**
 * The properties of a button.
 */
type VariantType = 'success' | 'danger' | 'plain' | 'default';
type SizeType = 'small' | 'default';
type RoleType = 'secondary' | 'default';
interface ButtonProps {
    onClick?: Rivet.Action;
    /** Optional Rivet style: a success/danger/plain button. See: https://rivet.uits.iu.edu/components/forms/buttons/#button-examples */
    variant?: VariantType;
    /** Optional Rivet style: a small button. See: https://rivet.uits.iu.edu/components/forms/buttons/#small-buttons */
    size?: SizeType;
    /** Optional Rivet style: a secondary button. See: https://rivet.uits.iu.edu/components/forms/buttons/#secondary-variations */
    role?: RoleType;
}

const None = '';
const buttonClass = 'rvt-button';
/**
 * Generate the combined role and variation class for this button, if applicable.
 * @param attrs This button's properties
 * @see https://rivet.uits.iu.edu/components/forms/buttons/#secondary-variations
 */
const buttonRoleAndStyle = (variant: VariantType, role: RoleType) => {
  const classParts = [
    variant !== 'default' ? variant : None,
    role !== 'default' ? role : None
  ].filter(x => x !== None);
  // combine variation and style, if any.
  return classParts.length === 0
    ? ''
    : `${buttonClass}--${classParts.join('-')}`;
};

/**
 * Generate the size class for this button, if applicable.
 * @param attrs This button's properties
 * @see https://rivet.uits.iu.edu/components/forms/buttons/#small-buttons
 */
const buttonSize = (size: SizeType) => (size !== "default" ? `${buttonClass}--${size}` : None);

const Button: React.SFC<ButtonProps & React.ButtonHTMLAttributes<HTMLButtonElement>> = 
  ({role = "default", size = "default", variant = "default", onClick, id = util.shortuid(), className, children, ...attrs}) => {
  const classes = classNames(buttonClass, buttonRoleAndStyle(variant, role), buttonSize(size), className);
  return (
    <button
      id={id}
      className={classes}
      onClick={onClick}
      disabled={onClick === undefined}
      {...attrs}
    >
      {children}
    </button>
  );
};

export default Rivet.rivetize(Button);
