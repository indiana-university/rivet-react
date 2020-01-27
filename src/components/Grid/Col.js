/*
Copyright (C) 2020 The Trustees of Indiana University
SPDX-License-Identifier: BSD-3-Clause
*/
import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import * as Rivet from '../util/Rivet';

const colWidthOptions = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const propTypes = {
    /**
     * Boolean specifying if this column should appear last and be right-aligned.
     * @see https://rivet.uits.iu.edu/components/layout/grid/#right-align-last-item
     */ 
    last: PropTypes.bool,
    /**
     * Sets the column width or whether it should be use automatic sizing at
     * large screen widths or larger.
     * @see https://rivet.uits.iu.edu/components/layout/grid/#responsive-automatic-columns
     */
    lg: PropTypes.oneOfType([PropTypes.oneOf(colWidthOptions), PropTypes.bool]),
    /**
     * Sets the column width or whether it should be use automatic sizing at
     * medium screen widths or larger.
     * 
     * The value can be a boolean or an integer between 1 and 12
     * @see https://rivet.uits.iu.edu/components/layout/grid/#responsive-automatic-columns
     */
    md: PropTypes.oneOfType([PropTypes.oneOf(colWidthOptions), PropTypes.bool]),
    /**
     * Allows you to change the visual order of grid columns at small screen
     * widths or larger.
     * 
     * The value can be a boolean or an integer between 1 and 12
     * @see https://rivet.uits.iu.edu/components/layout/grid/#push-and-pull
     */
    pullSm: PropTypes.oneOf(colWidthOptions),
    /**
     * Allows you to change the visual order of grid columns at medium screen
     * widths or larger.
     * @see https://rivet.uits.iu.edu/components/layout/grid/#push-and-pull
     */
    pullMd: PropTypes.oneOf(colWidthOptions),
    
    /**
     * Allows you to change the visual order of grid columns at large screen
     * widths or larger.
     * @see https://rivet.uits.iu.edu/components/layout/grid/#push-and-pull
     */
    pullLg: PropTypes.oneOf(colWidthOptions),
    
    /**
     * Allows you to change the visual order of grid columns at extra large
     * screen widths or larger.
     * @see https://rivet.uits.iu.edu/components/layout/grid/#push-and-pull
     */
    pullXl: PropTypes.oneOf(colWidthOptions),
    
    /**
     * Allows you to change the visual order of grid columns at very large
     * screen widths.
     * @see https://rivet.uits.iu.edu/components/layout/grid/#push-and-pull
     */
    pullXxl: PropTypes.oneOf(colWidthOptions),
    
    /**
     * Allows you to change the visual order of grid columns at small screen
     * widths or larger.
     * @see https://rivet.uits.iu.edu/components/layout/grid/#push-and-pull
     */
    pushSm: PropTypes.oneOf(colWidthOptions),
    
    /**
     * Allows you to change the visual order of grid columns at medium screen
     * widths or larger.
     * @see https://rivet.uits.iu.edu/components/layout/grid/#push-and-pull
     */
    pushMd: PropTypes.oneOf(colWidthOptions),
    
    /**
     * Allows you to change the visual order of grid columns at large screen
     * widths or larger.
     * @see https://rivet.uits.iu.edu/components/layout/grid/#push-and-pull
     */
    pushLg: PropTypes.oneOf(colWidthOptions),
    
    /**
     * Allows you to change the visual order of grid columns at extra large
     * screen widths or larger.
     * @see https://rivet.uits.iu.edu/components/layout/grid/#push-and-pull
     */
    pushXl: PropTypes.oneOf(colWidthOptions),
    
    /**
     * Allows you to change the visual order of grid columns at very large
     * screen widths.
     * @see https://rivet.uits.iu.edu/components/layout/grid/#push-and-pull
     */
    pushXxl: PropTypes.oneOf(colWidthOptions),
    /**
     * Sets the column width or whether it should be use automatic sizing at
     * small screen widths or larger.  This should be used to set the column
     * width if it should be set for all screen sizes.
     * 
     * The value can be a boolean or an integer between 1 and 12
     * @see https://rivet.uits.iu.edu/components/layout/grid/#responsive-automatic-columns
     */
    sm: PropTypes.oneOfType([PropTypes.oneOf(colWidthOptions), PropTypes.bool]),
    /**
     * Sets the column width or whether it should be use automatic sizing at
     * extra large screen widths or larger.
     * 
     * The value can be a boolean or an integer between 1 and 12
     * @see https://rivet.uits.iu.edu/components/layout/grid/#responsive-automatic-columns
     */
    xl: PropTypes.oneOfType([PropTypes.oneOf(colWidthOptions), PropTypes.bool]),
    /**
     * Sets the column width or whether it should be use automatic sizing at
     * very large screen widths.
     * 
     * The value can be a boolean or an integer between 1 and 12
     * @see https://rivet.uits.iu.edu/components/layout/grid/#responsive-automatic-columns
     */
    xxl: PropTypes.oneOfType([PropTypes.oneOf(colWidthOptions), PropTypes.bool]),
}

const Col = 
({ children, className, last, lg, md, pullSm, pullMd, pullLg, pullXl, pullXxl, pushSm, pushMd, pushLg, pushXl, pushXxl, sm, xl, xxl, ...attrs }) => {
    const classes = classNames({
        'rvt-grid__item': !sm && !md && !lg && !xl && !xxl,
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
Col.propTypes = propTypes;

export default Rivet.rivetize(Col);
