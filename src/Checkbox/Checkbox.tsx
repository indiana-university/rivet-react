import * as classNames  from 'classnames'
import * as React from 'react'
import * as Rivet from '../common'
import * as util from '../util'

export interface Props extends Rivet.Props { }

class Checkbox extends React.Component<Props> {
    public render() {
        
        const id = this.props.id || util.shortuid();
        const c =  classNames(util.getRivetClasses(this.props))

        return (
            <React.Fragment>
                <input type="checkbox" key={id} {...this.props} />
                <label key='l' className={c} htmlFor={id}>{this.props.label}</label>
            </React.Fragment>
        );
    }
}

export default Checkbox