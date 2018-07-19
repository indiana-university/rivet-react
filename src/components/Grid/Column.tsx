import * as classNames from 'classnames';
import * as React from 'react';
import { rivetize } from '../Rivet';

type ColumnWidth = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
type AutoColumnWidth = ColumnWidth | boolean;

interface ColProps {
    last?: boolean;
    lg?: AutoColumnWidth,
    md?: AutoColumnWidth,
    pullSm?: ColumnWidth;
    pullMd?: ColumnWidth;
    pullLg?: ColumnWidth;
    pullXl?: ColumnWidth;
    pullXxl?: ColumnWidth;
    pushSm?: ColumnWidth;
    pushMd?: ColumnWidth;
    pushLg?: ColumnWidth;
    pushXl?: ColumnWidth;
    pushXxl?: ColumnWidth;
    sm?: AutoColumnWidth;
    xl?: AutoColumnWidth;
    xxl?: AutoColumnWidth;
}

const Column : React.SFC<ColProps & React.HTMLAttributes<HTMLDivElement>> = ({ children, className, last, lg, md, pullSm, pullMd, pullLg, pullXl, pullXxl, pushSm, pushMd, pushLg, pushXl, pushXxl, sm, xl, xxl, ...attrs }) => {
    const classes = classNames({
        ['rvt-grid__item']: !sm && !md && !lg && !xl && !xxl,
        [`rvt-grid__item--last`]: last,
        [`rvt-grid__item-sm`]: typeof sm === 'boolean',
        [`rvt-grid__item-${sm}-sm-up`]: typeof sm === 'number',
        [`rvt-grid__item-md`]: typeof md === 'boolean',
        [`rvt-grid__item-${md}-md-up`]: typeof md === 'number',
        [`rvt-grid__item-lg`]: typeof lg === 'boolean',
        [`rvt-grid__item-${lg}-lg-up`]: typeof lg === 'number',
        [`rvt-grid__item-xl`]: typeof xl === 'boolean',
        [`rvt-grid__item-${xl}-xl-up`]: typeof xl === 'number',
        [`rvt-grid__item-xxl`]: typeof xxl === 'boolean',
        [`rvt-grid__item-${xxl}-xxl-up`]: typeof xxl === 'number',
        [`rvt-grid__item-pull-${pullSm}-sm`]: !!pullSm,
        [`rvt-grid__item-pull-${pullMd}-md`]: !!pullMd,
        [`rvt-grid__item-pull-${pullLg}-lg`]: !!pullLg,
        [`rvt-grid__item-pull-${pullXl}-xl`]: !!pullXl,
        [`rvt-grid__item-pull-${pullXxl}-xxl`]: !!pullXxl,
        [`rvt-grid__item-push-${pushSm}-sm`]: !!pushSm,
        [`rvt-grid__item-push-${pushMd}-md`]: !!pushMd,
        [`rvt-grid__item-push-${pushLg}-lg`]: !!pushLg,
        [`rvt-grid__item-push-${pushXl}-xl`]: !!pushXl,
        [`rvt-grid__item-push-${pushXxl}-xxl`]: !!pushXxl,
    }, className);
    return (
        <div className={classes} {...attrs}>
            {children}
        </div>
    );
}
Column.displayName = 'Col';

export default rivetize(Column);
