/*
Copyright (C) 2018 The Trustees of Indiana University
SPDX-License-Identifier: BSD-3-Clause
*/
import React from 'react'
import * as Rivet from '../util/Rivet';
import Alert from './Alert'
import { statefulPropTypes } from "./common"

const initialState = { isOpen: true }

class DismissibleAlert extends React.PureComponent {
    static propTypes = statefulPropTypes;
    
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
