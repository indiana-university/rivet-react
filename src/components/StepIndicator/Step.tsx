/*
Copyright (C) 2019 The Trustees of Indiana University
SPDX-License-Identifier: BSD-3-Clause
*/
import * as classNames from 'classnames';
import * as React from 'react'


export interface StepProps {
    /**
     * Defines whether the indicated step is the current step
     */
    current?: boolean;

    /**
     * An optional URL that can be used to create a link from this step to another location
     */
    href?: string;

    /**
     * A visual indicator to identify this step
     */
    indicator: JSX.Element;

    /**
     * A label for this step
     */
    label: JSX.Element;

    /**
     * An textual indicator to be used by screenreaders since the visual indicator may not include text
     */
    screenReaderIndicator: string

    /**
     * An optional variant to be applied to the indicator
     */
    variant?: 'success' | 'warning' | 'danger';
}

const indicatorClass = 'rvt-steps__indicator';

const variantClass = (variant) => variant && `${indicatorClass}--${variant}`;

const Step : React.SFC <StepProps & React.HTMLAttributes<HTMLLIElement>> =
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

export default Step;
