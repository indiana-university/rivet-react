/*
Copyright (C) 2020 The Trustees of Indiana University
SPDX-License-Identifier: BSD-3-Clause
*/
/*
Copyright (C) 2019 The Trustees of Indiana University
SPDX-License-Identifier: BSD-3-Clause
*/
import classNames from 'classnames';
import React from 'react'
import PropTypes from 'prop-types';

const indicatorClass = 'rvt-steps__indicator';

const variantClass = (variant) => variant && `${indicatorClass}--${variant}`;

const propTypes = {
    /**
     * Defines whether the indicated step is the current step
     */
    current: PropTypes.bool,

    /**
     * An optional URL that can be used to create a link from this step to another location
     */
    href: PropTypes.string,

    /**
     * A visual indicator to identify this step
     */
    indicator: PropTypes.node,

    /**
     * A label for this step
     */
    label: PropTypes.node,

    /**
     * An textual indicator to be used by screenreaders since the visual indicator may not include text
     */
    screenReaderIndicator: PropTypes.string,

    /**
     * An optional variant to be applied to the indicator
     */
    variant: PropTypes.oneOf(['success', 'warning', 'danger'])
}

const Step =
({ current, href, indicator, label, screenReaderIndicator, variant, ...attrs}) => {
    const content = (
        <>
            <span className="rvt-steps__label">{label}</span>
            <span className={classNames(indicatorClass, variantClass(variant))}>
                <span className="rvt-sr-only">{screenReaderIndicator}</span> {indicator}
            </span>
        </>
    );
    let wrapper = (
        <span className="rvt-steps__item-content" aria-current={current && 'step'}>
            {content}
        </span>
    );
    if (href) {
        wrapper = (
            <a href={href} className="rvt-steps__item-content" aria-current={current && 'step'}>
                {content}
            </a>
        );
    }

    return (
        <li className="rvt-steps__item" {...attrs}>
            {wrapper}
        </li>
    )
};
Step.displayName = 'Step';
Step.propTypes = propTypes;

export default Step;
