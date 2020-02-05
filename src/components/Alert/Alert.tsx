/*
Copyright (C) 2018 The Trustees of Indiana University
SPDX-License-Identifier: BSD-3-Clause
*/
import * as classNames from 'classnames';
import * as PropTypes from 'prop-types';
import * as React from 'react';

import * as Rivet from '../util/Rivet';
import Icon from '../util/RivetIcons';

export interface AlertProps {
  /**
   * Rivet alert styling.
   * @see https://rivet.uits.iu.edu/components/overlays/alerts
   */

  variant: "danger" | "info" | "warning" | "success";
  /**
   * Optional alert title
   */
  title?: string | JSX.Element;
  /**
   * Optional event to raise when the alert is dismissed
   */
  onDismiss?: () => void;
  /**
   * Optional flag to determine whether the alert is visible
   */
  isOpen?: boolean;
}

const Alert : React.SFC<AlertProps & React.HTMLAttributes<HTMLDivElement>> = 
    ({title, onDismiss, variant, isOpen=true, id=Rivet.shortuid(), className, children, ...attrs}) => {
    const titleId = Rivet.shortuid();

    const headerFragment = () => 
        title 
        ? <h1 className='rvt-alert__title' id={titleId}>{title}</h1>
        : null;

    const dismissFragment = () =>
        onDismiss 
        ? <button type="button" className="rvt-alert__dismiss" onClick={ onDismiss }>
            <span className="rvt-sr-only">Dismiss this alert</span>
            <Icon name="close" />
          </button>
        : null;
    
    const classes = classNames.default('rvt-alert', `rvt-alert--${variant}`, className);

    return isOpen 
        ? <div id={id} className={classes} role='alertdialog' aria-labelledby={titleId} {...attrs} >
                {headerFragment()}
                <p className='rvt-alert__message'>{children}</p>
                {dismissFragment()}
          </div>
        : null
};
Alert.displayName = 'Alert';
Alert.propTypes = {
    variant: PropTypes.oneOf<any>(['danger', 'info', 'warning', 'success']).isRequired,
    title: PropTypes.oneOfType([PropTypes.string]),
    onDismiss: PropTypes.func,
    isOpen: PropTypes.bool
};

export default Rivet.rivetize<AlertProps & React.HTMLAttributes<HTMLDivElement>>(Alert);
