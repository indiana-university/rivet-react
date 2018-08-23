import * as classNames from 'classnames';
import * as PropTypes from 'prop-types';
import * as React from 'react';
import * as Rivet from '../util/Rivet';
/**
 * The properties of a button.
 */
export interface ButtonProps {
    /** 
     * Optional Rivet style: a success/danger/plain button. 
     * The 'navigation' variant is intended to support the Header component only.
     */
    variant?: 'success' | 'danger' | 'plain' | 'navigation';
    /** Optional Rivet style: a small button. */
    size?: 'small';
    /** Optional Rivet style: a secondary button. */
    modifier?: 'secondary';
    innerRef?: React.Ref<HTMLButtonElement>;
}

export const buttonPropTypes = {
  variant: PropTypes.oneOf(['success', 'danger', 'plain', 'navigation']),
  size: PropTypes.oneOf(['small']),
  role: PropTypes.oneOf(['secondary']),
  innerRef: PropTypes.any,
  id: PropTypes.string
}

const buttonClass = 'rvt-button';
/**
 * Generate the combined modifier and variation class for this button, if applicable.
 * @param attrs This button's properties
 * @see https://rivet.uits.iu.edu/components/forms/buttons/#secondary-variations
 */

const buttonModifierAndStyle = (props: ButtonProps) => {
  if(props.variant === 'navigation') {
    return 'rvt-dropdown__toggle';
  }
  const classParts = [
    props.variant,
    props.modifier
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

const buttonSize = (props: ButtonProps) => 
  props.size
  ? `${buttonClass}--${props.size}` 
  : '';

export const Button: React.SFC<ButtonProps & React.ButtonHTMLAttributes<HTMLButtonElement>> = 
  ({ className, children, id = Rivet.shortuid(), innerRef, onClick, ...props}) => {
  const classes = classNames(buttonModifierAndStyle(props), buttonSize(props), className);
  return (
    <button
      id={id}
      className={classes}
      onClick={onClick}
      disabled={onClick === undefined}
      ref={innerRef}
      {...props}
    >
      {children}
    </button>
  );
};

Button.propTypes = buttonPropTypes;
Button.displayName = 'Button';

export default Rivet.rivetize(Button);
