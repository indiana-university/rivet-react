import * as React from 'react'
import * as Rivet from '../common'
import * as util from '../util'

export interface CheckboxProps extends Rivet.Props {
    label: string
}

class Checkbox extends React.Component<CheckboxProps & React.InputHTMLAttributes<HTMLInputElement>> {
    public render() {

        const {  label, className, ref, ...attrs } = this.props;
        const id = util.shortuid();

        return (
            <React.Fragment>
                <input id={id} type="checkbox" {...attrs} />
                <label className={className} htmlFor={id}>{label}</label>
            </React.Fragment>
        );
    }
}

export default Checkbox