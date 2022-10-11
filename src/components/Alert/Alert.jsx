import * as React from 'react';
import classNames from 'classnames';
import * as PropTypes from 'prop-types';

import * as Rivet from '../util/Rivet';

/**
 * General component description in JSDoc format. Markdown is *supported*.
 */
const Alert = ({title, onDismiss, variant, isOpen = true, id = Rivet.shortuid(), className, children, ...attrs}) => {

  const titleId = Rivet.shortuid();

  const headerFragment = () =>
    title
      ? <h1 className='rvt-alert__title' id={titleId}>{title}</h1>
      : null;

  const dismissFragment = () =>
    onDismiss
      ? <button type="button" className="rvt-alert__dismiss" onClick={onDismiss}>
        <span className="rvt-sr-only">Dismiss this alert</span>
        <Icon name="close"/>
      </button>
      : null;

  const classes = classNames('rvt-alert', `rvt-alert--${variant}`, className);

  const ariaProps = title ? {'aria-labelledby': titleId} : {};

  return isOpen
    ? <div id={id} className={classes} role='alertdialog' {...ariaProps} {...attrs}>
      {headerFragment()}
      <p className='rvt-alert__message'>{children}</p>
      {dismissFragment()}
    </div>
    : null
}

Alert.displayName = 'Alert';
Alert.propTypes = {
  variant: PropTypes.oneOf(['danger', 'info', 'warning', 'success']).isRequired,
  title: PropTypes.oneOfType([PropTypes.string]),
  onDismiss: PropTypes.func,
  isOpen: PropTypes.bool
};

export default Rivet.rivetize(Alert);
