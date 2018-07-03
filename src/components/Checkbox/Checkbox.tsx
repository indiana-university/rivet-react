import * as React from 'react'
import * as Rivet from '../common'
import * as util from '../util'

export interface CheckboxProps extends Rivet.Props {
    label: string,
    hideLabel?: boolean,
}

class Checkbox extends React.Component<CheckboxProps & React.InputHTMLAttributes<HTMLInputElement>> {
    public render() {

        const { id, label, hideLabel, className, ...attrs } = this.props;
        const resolvedId = id || util.shortuid();
        const resolvedLabel = hideLabel ? <span className="rvt-sr-only">{label}</span> : label
        return (
            <React.Fragment>
                <input id={resolvedId} type="checkbox" {...attrs} />
                <label className={className} htmlFor={resolvedId}>{resolvedLabel}</label>
            </React.Fragment>
        );
    }
}

export default Checkbox