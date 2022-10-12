/*
Copyright (C) 2018 The Trustees of Indiana University
SPDX-License-Identifier: BSD-3-Clause
*/
import classNames from 'classnames';
import * as React from 'react';
import * as PropTypes from 'prop-types';

import * as Rivet from '../util/Rivet';

/**
 * Use the alert component to show brief important messages to the user like errors, action confirmations, or system status.
 */
const Alert = ({title, onDismiss, variant, isOpen = true, id = Rivet.shortuid(), className, children, ...attrs}) => {

	const alertId = id;
	const titleId = alertId + '-title';

	const headerFragment = () => (<div class="rvt-alert__title" id={titleId}>{title}</div>);

	const dismissFragment = () =>
		onDismiss
			? (
				<button class="rvt-alert__dismiss" data-rvt-alert-close>
					<span class="rvt-sr-only">Dismiss this alert</span>
					<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
						<path fill="currentColor" d="M9.41,8l5.29-5.29a1,1,0,0,0-1.41-1.41L8,6.59,2.71,1.29A1,1,0,0,0,1.29,2.71L6.59,8,1.29,13.29a1,1,0,1,0,1.41,1.41L8,9.41l5.29,5.29a1,1,0,0,0,1.41-1.41Z" />
					</svg>
				</button>
				)
			: null;

	const classes = classNames('rvt-alert', `rvt-alert--${variant}`, className);

	const ariaProps = title ? {'aria-labelledby': titleId} : {};

	return isOpen
		? <div id={alertId} className={classes} role='alert' aria-labelledby={titleId} data-rvt-alert={variant} {...ariaProps} {...attrs}>
			{headerFragment()}
			<p className='rvt-alert__message'>{children}</p>
			{dismissFragment()}
		</div>
		: null
}

Alert.displayName = 'Alert';
Alert.propTypes = {
	/** The variant type which determines how the alert is styled */
	variant: PropTypes.oneOf(['info', 'success', 'warning', 'danger']).isRequired,
	/** An extremely brief title for the alert */
	title: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired,
	/** A unique identifier for the alert */
	id: PropTypes.string,
	/** A function that can be called to have side-effects when the alert is dismissed */
	onDismiss: PropTypes.func,
	/** Determines whether the alert is displayed or hidden */
	isOpen: PropTypes.bool
};

export default Rivet.rivetize(Alert);
