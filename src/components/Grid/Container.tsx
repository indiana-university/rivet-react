import * as classNames from 'classnames';
import * as React from 'react';
import { rivetize } from '../util/Rivet';

interface ContainerProps {
    /**
     * When combined with a fixed width property this being set to true will
     * cause the container to be horizontally centered within its parent.
     * @see https://rivet.uits.iu.edu/components/layout/grid/#centering-a-container
     */
    center?: boolean;
    /**
     * Sets the width of the container to a fixed size.
     * @see https://rivet.uits.iu.edu/components/layout/grid/#container-sizes
     */
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
