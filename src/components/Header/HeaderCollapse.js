/*
Copyright (C) 2018 The Trustees of Indiana University
SPDX-License-Identifier: BSD-3-Clause
*/
import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
    /**
     * The text to appear on the dropdown toggle button. 
     */
    label: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(React.ReactNode)])
}

const initialState = { open: false }

class HeaderCollapse extends React.PureComponent {

    state = initialState;

    constructor(props) {
        super(props);
        this.toggleCollapse = this.toggleCollapse.bind(this);
    }

    render() {
        const { children, label, ...attrs } = this.props;
        return (
            <>
                <button type="button" {...attrs} aria-haspopup="true" aria-expanded={this.state.open} onClick={this.toggleCollapse}>
                    {label}
                </button>    
                { this.state.open &&
                    <ul aria-hidden={!this.state.open} role="menu">
                        {React.Children.map(children, c => <li>{c}</li>)}
                    </ul>
                }
            </>
        );
    }

    toggleCollapse(event) {
        this.setState({ open: !this.state.open });
    }
}

HeaderCollapse.propTypes = propTypes;

export default HeaderCollapse;
