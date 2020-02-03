/*
Copyright (C) 2018 The Trustees of Indiana University
SPDX-License-Identifier: BSD-3-Clause
*/
import * as classNames from 'classnames';
import * as React from 'react';

import * as Rivet from '../util/Rivet';
import Icon from '../util/RivetIcons';
import { StatelessAlertProps, statelessPropTypes } from './common';

const Alert : React.SFC<StatelessAlertProps & React.HTMLAttributes<HTMLDivElement>> = 
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
Alert.propTypes = statelessPropTypes;

export default Rivet.rivetize(Alert);
