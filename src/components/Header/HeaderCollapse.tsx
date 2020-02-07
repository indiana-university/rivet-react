/*
Copyright (C) 2020 The Trustees of Indiana University
SPDX-License-Identifier: BSD-3-Clause
*/
import * as React from 'react';

interface HeaderCollapseProps {
    /**
     * The text to appear on the dropdown toggle button. 
     */
    label: string | React.ReactNode;
}

const initialState = { open: false }
type HeaderCollapseState = Readonly<typeof initialState>

class HeaderCollapse extends React.PureComponent<HeaderCollapseProps & React.HTMLAttributes<HTMLButtonElement>, HeaderCollapseState> {

    public readonly state: HeaderCollapseState = initialState;

    constructor(props) {
        super(props);
        this.toggleCollapse = this.toggleCollapse.bind(this);
    }

    public render() {
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

    private toggleCollapse(event) {
        this.setState({ open: !this.state.open });
    }
}

export default HeaderCollapse;
