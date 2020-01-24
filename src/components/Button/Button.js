/*
Copyright (C) 2020 The Trustees of Indiana University
SPDX-License-Identifier: BSD-3-Clause
 */
import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import * as Rivet from '../util/Rivet';

export const buttonPropTypes = {
  /** 
   * Optional Rivet style: a success/danger/plain button. 
   * The 'navigation' variant is intended to support the Header component only.
   */
  variant: PropTypes.oneOf(['success', 'danger', 'plain', 'navigation']),
  /** Optional Rivet style: a small button. */
  size: PropTypes.oneOf(['small']),
  /** Optional Rivet style: a secondary button. */
  modifier: PropTypes.oneOf(['secondary']),
  /** @ignore */
  innerRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.instanceOf(HTMLButtonElement) })
  ]),
  /** @ignore */
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

export const Button = 
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
