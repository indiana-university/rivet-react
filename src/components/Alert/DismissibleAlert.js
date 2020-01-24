/*
Copyright (C) 2020 The Trustees of Indiana University
SPDX-License-Identifier: BSD-3-Clause
 */
import React from 'react'
import * as Rivet from '../util/Rivet';
import Alert from './Alert'
import PropTypes from 'prop-types';

const initialState = { isOpen: true }

export const alertPropTypes = {
  /**
   * Rivet alert styling. 
   * @see https://rivet.uits.iu.edu/components/overlays/alerts
   */
  variant: PropTypes.oneOf(['danger', 'info', 'warning', 'success']).isRequired,
  /**
   * Optional alert title
   */
  title: PropTypes.node,
  /**
   * Optional event to raise when the alert is dismissed
   */
  onDismiss: PropTypes.func,
};

class DismissibleAlert extends React.PureComponent {
    static propTypes = alertPropTypes;
    
    state = initialState;

    render() {
        return <Alert {...this.props} onDismiss={this.onDismiss} isOpen={this.state.isOpen} />
    }

    onDismiss = () => {
        this.setState({ isOpen: false });
        if (this.props.onDismiss){
            this.props.onDismiss();
        }
    };
}

export default Rivet.rivetize(DismissibleAlert);
