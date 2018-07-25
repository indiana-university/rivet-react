import * as classNames from 'classnames';
import * as React from 'react';
import { rivetize } from '../Rivet';

type ColumnWidth = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
type AutoColumnWidth = ColumnWidth | boolean;

interface ColProps {
    /**
     * Boolean specifying if this column should appear last and be right-aligned.
     * @see https://rivet.uits.iu.edu/components/layout/grid/#right-align-last-item
     */ 
    last?: boolean;
    /**
     * Sets the column width or whether it should be use automatic sizing at
     * large screen widths or larger.
     * @see https://rivet.uits.iu.edu/components/layout/grid/#responsive-automatic-columns
     */
    lg?: AutoColumnWidth;
    /**
     * Sets the column width or whether it should be use automatic sizing at
     * medium screen widths or larger.
     * @see https://rivet.uits.iu.edu/components/layout/grid/#responsive-automatic-columns
     */
    md?: AutoColumnWidth;
    /**
     * Allows you to change the visual order of grid columns at small screen
     * widths or larger.
     * @see https://rivet.uits.iu.edu/components/layout/grid/#push-and-pull
     */
    pullSm?: ColumnWidth;
    /**
     * Allows you to change the visual order of grid columns at medium screen
     * widths or larger.
     * @see https://rivet.uits.iu.edu/components/layout/grid/#push-and-pull
     */
    pullMd?: ColumnWidth;
    
    /**
     * Allows you to change the visual order of grid columns at large screen
     * widths or larger.
     * @see https://rivet.uits.iu.edu/components/layout/grid/#push-and-pull
     */
    pullLg?: ColumnWidth;
    
    /**
     * Allows you to change the visual order of grid columns at extra large
     * screen widths or larger.
     * @see https://rivet.uits.iu.edu/components/layout/grid/#push-and-pull
     */
    pullXl?: ColumnWidth;
    
    /**
     * Allows you to change the visual order of grid columns at very large
     * screen widths.
     * @see https://rivet.uits.iu.edu/components/layout/grid/#push-and-pull
     */
    pullXxl?: ColumnWidth;
    
    /**
     * Allows you to change the visual order of grid columns at small screen
     * widths or larger.
     * @see https://rivet.uits.iu.edu/components/layout/grid/#push-and-pull
     */
    pushSm?: ColumnWidth;
    
    /**
     * Allows you to change the visual order of grid columns at medium screen
     * widths or larger.
     * @see https://rivet.uits.iu.edu/components/layout/grid/#push-and-pull
     */
    pushMd?: ColumnWidth;
    
    /**
     * Allows you to change the visual order of grid columns at large screen
     * widths or larger.
     * @see https://rivet.uits.iu.edu/components/layout/grid/#push-and-pull
     */
    pushLg?: ColumnWidth;
    
    /**
     * Allows you to change the visual order of grid columns at extra large
     * screen widths or larger.
     * @see https://rivet.uits.iu.edu/components/layout/grid/#push-and-pull
     */
    pushXl?: ColumnWidth;
    
    /**
     * Allows you to change the visual order of grid columns at very large
     * screen widths.
     * @see https://rivet.uits.iu.edu/components/layout/grid/#push-and-pull
     */
    pushXxl?: ColumnWidth;
    /**
     * Sets the column width or whether it should be use automatic sizing at
     * small screen widths or larger.  This should be used to set the column
     * width if it should be set for all screen sizes.
     * @see https://rivet.uits.iu.edu/components/layout/grid/#responsive-automatic-columns
     */
    sm?: AutoColumnWidth;
    /**
     * Sets the column width or whether it should be use automatic sizing at
     * extra large screen widths or larger.
     * @see https://rivet.uits.iu.edu/components/layout/grid/#responsive-automatic-columns
     */
    xl?: AutoColumnWidth;
    /**
     * Sets the column width or whether it should be use automatic sizing at
     * very large screen widths.
     * @see https://rivet.uits.iu.edu/components/layout/grid/#responsive-automatic-columns
     */
    xxl?: AutoColumnWidth;
}

const Col : React.SFC<ColProps & React.HTMLAttributes<HTMLDivElement>> = ({ children, className, last, lg, md, pullSm, pullMd, pullLg, pullXl, pullXxl, pushSm, pushMd, pushLg, pushXl, pushXxl, sm, xl, xxl, ...attrs }) => {
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
Col.displayName = 'Col';

export default rivetize(Col);
