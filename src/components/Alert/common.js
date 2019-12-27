/*
Copyright (C) 2018 The Trustees of Indiana University
SPDX-License-Identifier: BSD-3-Clause
*/
import PropTypes from 'prop-types';

export const statefulPropTypes = {
    /**
     * Rivet alert styling. 
     * @see https://rivet.uits.iu.edu/components/overlays/alerts
     */ 
    variant: PropTypes.oneOf(['danger', 'info', 'warning', 'success']).isRequired,
    /**
     * Optional alert title
     */
    title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    /**
     * Optional event to raise when the alert is dismissed
     */
    onDismiss: PropTypes.func
};

export const statelessPropTypes = {
    ...statefulPropTypes,
    /**
     * Optional flag to determine whether the alert is visible
     */
    isOpen: PropTypes.bool
};
