import * as classNames from 'classnames';
import * as React from 'react';
import * as Rivet from '../util/Rivet';

/**
 * The properties of a button.
 */
type VariantType = 'success' | 'danger' | 'plain' | 'default' | 'navigation';
type SizeType = 'small' | 'default';
type ModifierType = 'secondary' | 'default';
export interface ButtonProps {
    /** Optional Rivet style: a success/danger/plain button. The 'navigation' variant is intended to support the Header component only. See: https://rivet.uits.iu.edu/components/forms/buttons/#button-examples */
    variant?: VariantType;
    /** Optional Rivet style: a small button. See: https://rivet.uits.iu.edu/components/forms/buttons/#small-buttons */
    size?: SizeType;
    /** Optional Rivet style: a secondary button. See: https://rivet.uits.iu.edu/components/forms/buttons/#secondary-variations */
    modifier?: ModifierType;
    innerRef?: React.Ref<HTMLButtonElement>;
}

const None = '';
const buttonClass = 'rvt-button';
/**
 * Generate the combined modifier and variation class for this button, if applicable.
 * @param attrs This button's properties
 * @see https://rivet.uits.iu.edu/components/forms/buttons/#secondary-variations
 */
const buttonModifierAndStyle = (variant: VariantType, modifier: ModifierType) => {
  if(variant === 'navigation') {
    return 'rvt-dropdown__toggle';
  }
  const classParts = [
    variant !== 'default' ? variant : None,
    modifier !== 'default' ? modifier : None
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
const buttonSize = (size: SizeType) => (size !== "default" ? `${buttonClass}--${size}` : None);

export const Button: React.SFC<ButtonProps & React.ButtonHTMLAttributes<HTMLButtonElement>> = 
  ({modifier = "default", size = "default", variant = "default", onClick, id = Rivet.shortuid(), innerRef, className, children, ...attrs}) => {
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
Button.displayName = 'Button';

export default Rivet.rivetize(Button);
