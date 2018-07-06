import * as React from 'react'
import * as Rivet from '../Rivet'

export interface CheckboxProps extends Rivet.Props {
    label: string,
    hideLabel?: boolean,
}

class Checkbox extends React.Component<CheckboxProps & React.InputHTMLAttributes<HTMLInputElement>> {
    public render() {

        const { id, label, hideLabel, children, ...attrs } = this.props;
        const resolvedId = id || Rivet.shortuid();
        const resolvedLabel = hideLabel ? <span className="rvt-sr-only">{label}</span> : label
        return (
            <React.Fragment>
                <input id={resolvedId} type="checkbox" {...attrs} />
                { children }
                <label className={Rivet.rivetize(attrs)} htmlFor={resolvedId}>{resolvedLabel}</label>
            </React.Fragment>
        );
    }
}

export default Checkbox