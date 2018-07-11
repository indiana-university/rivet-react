import * as React from 'react'
import * as Rivet from '../Rivet'

export interface CheckboxProps extends Rivet.Props {
    label: string,
    /**
     * Optional Rivet style: Make the label visible only to screen readers.
     * See: https://rivet.uits.iu.edu/components/utilities/display/#visually-hidden-labels-example
     */
    rvtLabelVisibility?: Rivet.LabelVisibility
}

class Checkbox extends React.Component<CheckboxProps & React.InputHTMLAttributes<HTMLInputElement>> {
    public render() {
        const { id, label, rvtLabelVisibility, children, ...attrs } = this.props;
        const resolvedId = id || Rivet.shortuid();
        return (
            <React.Fragment>
                <input className={Rivet.classify(attrs)} id={resolvedId} type="checkbox" {...attrs} />
                { children }
                <label className={Rivet.labelVisiblityClass(rvtLabelVisibility)} htmlFor={resolvedId}>{label}</label>
            </React.Fragment>
        );
    }
}

export default Checkbox