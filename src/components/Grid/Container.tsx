import * as classNames from 'classnames';
import * as React from 'react';
import { rivetize } from '../Rivet';

interface ContainerProps {
    center?: boolean;
    width?: 'freshman' | 'sophomore' | 'junior' | 'senior';
}

const Container : React.SFC<ContainerProps & React.HTMLAttributes<HTMLDivElement>> = ({ center, children, className, width, ...attrs }) => {
    const classes = classNames({
        ['rvt-container']: true,
        ['rvt-container--center']: center,
        [`rvt-container--${width}`]: !!width
    }, className);
    return (
        <div className={classes} {...attrs}>
           {children}
        </div>
    );
};
Container.displayName = 'Container';

export default rivetize(Container);
