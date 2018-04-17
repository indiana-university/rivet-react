import React, {Component} from 'react'

// Longhand
export class Button extends Component {
    render() {
        return (
            <button {...this.props} />
        )

    }
}

// Shorthand
// export const Button = props => <button {...this.props} />