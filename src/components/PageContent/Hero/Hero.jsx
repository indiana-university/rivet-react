/*
Copyright (C) 2018 The Trustees of Indiana University
SPDX-License-Identifier: BSD-3-Clause
*/
import classNames from "classnames";
import * as PropTypes from "prop-types";
import * as React from "react";
import * as Rivet from "../../util/Rivet";
import { TestUtils } from "../../util/TestUtils";

const Hero = ({
  actions,
  children,
  className,
  eyebrow,
  media,
  mediaCaption,
  size = 'lg',
  testMode = false,
  title,
  varient = "normal",
  ...attrs
}) => {
  const classNameArr = [
    "rvt-hero ",
    varient === "dark" && "rvt-hero--bg-dark",
    className
  ]
  return (
    <div
      className={classNames(classNameArr)}
      {...(testMode && { "data-testid": TestUtils.Hero.container })}
      {...attrs}
    >
      <div 
        className={`rvt-container-${size}`}
        {...(testMode && { "data-testid": TestUtils.Hero.innerContainer })}
      >
        <div className="rvt-hero__inner">
          <div className="rvt-hero__body [ rvt-flow ]">
            <span
              className="rvt-hero__eyebrow"
              {...(testMode && { "data-testid": TestUtils.Hero.eyebrow })}
            >
              {eyebrow}
            </span>
            <h1
              className="rvt-hero__title"
              {...(testMode && { "data-testid": TestUtils.Hero.title })}
            >
              {title}
            </h1>
            <div
              className="rvt-hero__teaser"
              {...(testMode && { "data-testid": TestUtils.Hero.content })}
            >
              {children}
            </div>
            {
              actions &&
                <div 
                  className="rvt-hero__actions"
                  {...(testMode && { "data-testid": TestUtils.Hero.actions })}
                >
                  {actions}
                </div>
            }
          </div>
          {
            media &&
              <div 
                className="rvt-hero__media"
                {...(testMode && { "data-testid": TestUtils.Hero.media })}
              >
                {media}
                {
                  mediaCaption && 
                    <div
                      className="rvt-hero__media-caption"
                      {...(testMode && { "data-testid": TestUtils.Hero.mediaCaption })}
                    >
                      {mediaCaption}
                    </div>
                }
              </div>
          }
        </div>
      </div>
    </div>
  )
};

Hero.displayName = "Hero";
Hero.propTypes = {
  /** Available actions for the element*/
  actions: PropTypes.element,
  /** A unique identifier for the element */
  id: PropTypes.string,
  /** Image or media element to display  */
  media: PropTypes.element,
  /** Text to accompany a provided media */
  mediaCaption: PropTypes.string,
  /** Container size of the element */
  size: PropTypes.oneOf(["sm", "md", "lg", "xl"]),
  /** [Developer] Adds data-testId attributes for component testing */
  testMode: PropTypes.bool,
  /** The variant determines the style of hero */
  variant: PropTypes.oneOf(["normal", "dark"]),
};

export default Rivet.rivetize(Hero);
