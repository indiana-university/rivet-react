import * as classNames from 'classnames';
import * as PropTypes from 'prop-types';
import * as React from 'react';
import * as Rivet from '../util/Rivet';

/**
 * The properties of a button.
 */
export interface ButtonProps {
    /** Optional Rivet style: a success/danger/plain button. The 'navigation' variant is intended to support the Header component only. See: https://rivet.uits.iu.edu/components/forms/buttons/#button-examples */
    /** Optional Rivet style: a small button. See: https://rivet.uits.iu.edu/components/forms/buttons/#small-buttons */
    /** Optional Rivet style: a secondary button. See: https://rivet.uits.iu.edu/components/forms/buttons/#secondary-variations */
    variant?: 'success' | 'danger' | 'plain' | 'navigation';
    size?: 'small';
    role?: 'secondary';
    innerRef?: React.Ref<HTMLButtonElement>;
}

export const buttonPropTypes = {
  variant: PropTypes.oneOf(['success', 'danger', 'plain', 'navigation']),
  size: PropTypes.oneOf(['small']),
  role: PropTypes.oneOf(['secondary']),
  innerRef: PropTypes.node
}

const buttonClass = 'rvt-button';
/**
 * Generate the combined role and variation class for this button, if applicable.
 * @param attrs This button's properties
 * @see https://rivet.uits.iu.edu/components/forms/buttons/#secondary-variations
 */
const buttonRoleAndStyle = (props: ButtonProps) => {
  if(props.variant === 'navigation') {
    return 'rvt-dropdown__toggle';
  }
  const classParts = [
    props.variant,
    props.role
  ].filter(x => x !== undefined);
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
const buttonSize = (props: ButtonProps) => (props.size ? `${buttonClass}--${props.size}` : undefined);

const Button: React.SFC<ButtonProps & React.ButtonHTMLAttributes<HTMLButtonElement>> = 
  ({onClick, id = Rivet.shortuid(), innerRef, className, children, ...attrs}) => {
  const classes = classNames(buttonRoleAndStyle(attrs), buttonSize(attrs), className);
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
