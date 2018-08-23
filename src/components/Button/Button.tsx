import * as classNames from 'classnames';
import * as PropTypes from 'prop-types';
import * as React from 'react';
import * as Rivet from '../util/Rivet';
/**
 * The properties of a button.
 */
type VariantType = 'success' | 'danger' | 'plain' | 'navigation';
type SizeType = 'small';
type ModifierType = 'secondary';
export interface ButtonProps {
    /** Optional Rivet style: a success/danger/plain button. The 'navigation' variant is intended to support the Header component only. See: https://rivet.uits.iu.edu/components/forms/buttons/#button-examples */
    variant?: VariantType;
    /** Optional Rivet style: a small button. See: https://rivet.uits.iu.edu/components/forms/buttons/#small-buttons */
    size?: SizeType;
    /** Optional Rivet style: a secondary button. See: https://rivet.uits.iu.edu/components/forms/buttons/#secondary-variations */
    modifier?: ModifierType;
    innerRef?: React.Ref<HTMLButtonElement>;
}

export const buttonPropTypes = {
  variant: PropTypes.oneOf(['success', 'danger', 'plain', 'navigation']),
  size: PropTypes.oneOf(['small']),
  role: PropTypes.oneOf(['secondary']),
  innerRef: PropTypes.any,
  id: PropTypes.string
}

const None = '';
const buttonClass = 'rvt-button';
/**
 * Generate the combined modifier and variation class for this button, if applicable.
 * @param attrs This button's properties
 * @see https://rivet.uits.iu.edu/components/forms/buttons/#secondary-variations
 */

const buttonModifierAndStyle = (variant?: VariantType, modifier?: ModifierType) => {
  if(variant === 'navigation') {
    return 'rvt-dropdown__toggle';
  }
  const classParts = [
    variant !== undefined ? variant : None,
    modifier !== undefined ? modifier : None
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

const buttonSize = (size?: SizeType) => (size !== undefined ? `${buttonClass}--${size}` : None);

export const Button: React.SFC<ButtonProps & React.ButtonHTMLAttributes<HTMLButtonElement>> = 
  ({ className, children, id = Rivet.shortuid(), innerRef, modifier, onClick, size, variant, ...attrs}) => {
  const classes = classNames(buttonModifierAndStyle(variant, modifier), buttonSize(size), className);
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

Button.displayName = 'Button';


export default Rivet.rivetize(Button);
