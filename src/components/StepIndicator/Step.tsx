/*
Copyright (C) 2018 The Trustees of Indiana University
SPDX-License-Identifier: BSD-3-Clause
*/
import * as classNames from 'classnames';
import * as React from 'react'


export interface StepProps {
    current: boolean;
    indicator: JSX.Element;
    label: JSX.Element;
    screenReaderIndicator: string
    targetLocation?: string;
    variant?: 'success' | 'warning' | 'danger';
}

const indicatorClass = 'rvt-steps__indicator';

const variantClass = (variant) => variant && `${indicatorClass}--${variant}`;

const Step : React.SFC <StepProps & React.HTMLAttributes<HTMLLIElement>> =
({ current, indicator, label, screenReaderIndicator, targetLocation, variant, ...attrs}) => {
    const content = (
        <>
            <span className="rvt-steps__label">{label}</span>
            <span className={classNames(indicatorClass, variantClass(variant))}>
                <span className="rvt-sr-only">{screenReaderIndicator}</span> {indicator}
            </span>
        </>
    );
    let wrapper = (
        <span className="rvt-steps__item-content">
            {content}
        </span>
    );
    if (targetLocation) {
        wrapper = (
            <li className="rvt-steps__item" aria-current={current && 'step'} {...attrs}>
                <a href={targetLocation} className="rvt-steps__item-content">
                    {content}
                </a>
            </li>
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
