/*
Copyright (C) 2018 The Trustees of Indiana University
SPDX-License-Identifier: BSD-3-Clause
*/
import classNames from 'classnames';
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
    variant?: string; //'success' | 'danger' | 'plain' | 'navigation';
    /** Optional Rivet style: a small button. */
    size?: string; //'small';
    /** Optional Rivet style: a secondary button. */
    modifier?: string; //'secondary';
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

const buttonStyle = (variant, modifier) => {
  // special case for navigation variant
  if(variant === 'navigation') {
    return 'rvt-dropdown__toggle';
  }
  // combine variation and modifier, if provided.
  const classParts = [variant, modifier].filter(x => x).join('-');
  return classParts
    ? `${buttonClass} ${buttonClass}--${classParts}`
    : buttonClass;
};

/**
 * Generate the size class for this button, if applicable.
 * @param attrs This button's properties
 * @see https://rivet.uits.iu.edu/components/forms/buttons/#small-buttons
 */

const buttonSize = (size) => 
  size
  ? `${buttonClass}--${size}` 
  : undefined;

export const Button: React.SFC<ButtonProps & React.ButtonHTMLAttributes<HTMLButtonElement>> = 
({ className, children, id = Rivet.shortuid(), innerRef, modifier, onClick, size, variant, ...attrs}) => (
    <button
      id={id}
      className={classNames(buttonStyle(variant, modifier), buttonSize(size), className)}
      onClick={onClick}
      ref={innerRef}
      {...attrs}
    >
      {children}
    </button>
);

Button.propTypes = buttonPropTypes;
Button.displayName = 'Button';

export default Rivet.rivetize(Button);
