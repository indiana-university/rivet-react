import React, {Component} from 'react'

// Longhand
export class Alert extends Component {
    render() {
        return (
            <div {...this.props} />
        )

    }
}

// Shorthand
// export const Alert = props => <div {...this.props} />