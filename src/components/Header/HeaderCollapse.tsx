import * as React from 'react';

interface HeaderCollapseProps {
    /**
     * The text to appear on the dropdown toggle button. 
     */
    label: string | React.ReactNode;
}

const initialState = { open: false }
type HeaderCollapseState = Readonly<typeof initialState>

export class HeaderCollapse extends React.PureComponent<HeaderCollapseProps & React.HTMLAttributes<HTMLButtonElement>, HeaderCollapseState> {

    public readonly state: HeaderCollapseState = initialState;

    constructor(props) {
        super(props);
        this.toggleDropdown = this.toggleDropdown.bind(this);
    }

    public render() {
        const { children, className, label, ...attrs } = this.props;
        return (
            <>
                <button {...attrs} className={className} aria-haspopup="true" aria-expanded={this.state.open} onClick={this.toggleDropdown}>
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

    private toggleDropdown(event) {
        this.setState({ open: !this.state.open });
    }
}

export default HeaderCollapse;
