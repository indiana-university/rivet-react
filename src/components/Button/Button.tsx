import * as classNames from 'classnames';
import * as PropTypes from 'prop-types';
import * as React from 'react';
import * as Rivet from '../util/Rivet';

/**
 * The properties of a button.
 */
export interface ButtonProps {
    /** Optional Rivet style: a success/danger/plain button. The 'navigation' variant is intended to support the Header component only. See: https://rivet.uits.iu.edu/components/forms/buttons/#button-examples */
    variant?: 'success' | 'danger' | 'plain' | 'default' | 'navigation';
    /** Optional Rivet style: a small button. See: https://rivet.uits.iu.edu/components/forms/buttons/#small-buttons */
    size?: 'small' | 'default';
    /** Optional Rivet style: a secondary button. See: https://rivet.uits.iu.edu/components/forms/buttons/#secondary-variations */
    role?: 'secondary' | 'default';
    innerRef?: React.Ref<HTMLButtonElement>;
}

export const buttonPropTypes = {
  variant: PropTypes.oneOf(['success', 'danger', 'plain', 'default', 'navigation']),
  size: PropTypes.oneOf(['small', 'default']),
  role: PropTypes.oneOf(['secondary', 'default']),
  innerRef: PropTypes.node
}

const None = '';
const buttonClass = 'rvt-button';
/**
 * Generate the combined role and variation class for this button, if applicable.
 * @param attrs This button's properties
 * @see https://rivet.uits.iu.edu/components/forms/buttons/#secondary-variations
 */
const buttonRoleAndStyle = ({ role, variant }) => {
  if(variant === 'navigation') {
    return 'rvt-dropdown__toggle';
  }
  const classParts = [
    variant !== 'default' ? variant : None,
    role !== 'default' ? role : None
  ].filter(x => x !== None);
  // combine variation and style, if any.
  return classParts.length === 0
    ? buttonClass
    : `${buttonClass} ${buttonClass}--${classParts.join('-')}`;
};

/**
 * Generate the size class for this button, if applicable.
 * @param attrs This button's properties
 * @see https://rivet.uits.iu.edu/components/forms/buttons/#small-buttons
 */
const buttonSize = ({ size }) => (size !== "default" ? `${buttonClass}--${size}` : None);

const Button: React.SFC<ButtonProps & React.ButtonHTMLAttributes<HTMLButtonElement>> = 
  ({role = "default", size = "default", variant = "default", onClick, id = Rivet.shortuid(), innerRef, className, children, ...attrs}) => {
  const classes = classNames(buttonRoleAndStyle({ role, variant }), buttonSize({ size }), className);
  return (
    <button
      id={id}
      className={classes}
      onClick={onClick}
      disabled={onClick === undefined}
      ref={innerRef}
      {...attrs}
    >
      {children}
    </button>
  );
};
Button.propTypes = buttonPropTypes;

export default Rivet.rivetize(Button);
