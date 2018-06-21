import * as React from 'react'
import * as Rivet from '../common'
import * as util from '../util'

export interface Props extends Rivet.Props { }

class Checkbox extends React.Component<Props> {
    public render() {
        const { id, label, children, name, className, ref, ...rest } = this.props;
        const resolvedId = id || util.shortuid();
        const classNames = className || "";

        return (
            <React.Fragment>
                <input id={resolvedId} type="checkbox" {...rest} />
                <label className={classNames} htmlFor={resolvedId}>{label}</label>
            </React.Fragment>
        );
    }
}

export default Checkbox