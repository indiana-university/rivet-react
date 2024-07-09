/*
Copyright (C) 2018 The Trustees of Indiana University
SPDX-License-Identifier: BSD-3-Clause
*/
import classNames from "classnames";
import * as PropTypes from "prop-types";
import * as React from "react";
import * as Rivet from "../../util/Rivet";
import { TestUtils } from "../../util/TestUtils";

const Card = ({
  children,
  className,
  clickable = false,
  Component = 'div',
  eyebrow,
  horizontal = false,
  image,
  meta,
  raised = false,
  testMode = false,
  title,
  titleUrl,
  ...attrs
}) => {
  const classNameArr = [
    "rvt-card",
    clickable ? "rvt-card--clickable" : "",
    horizontal ? "rvt-card--horizontal" : "",
    raised ? "rvt-card--raised " : "",
    className
  ]

  return (
    <Component
      className={classNames(classNameArr)}
      {...(testMode && { "data-testid": TestUtils.Card.container })}
      {...attrs}
    >
      {image && <Image testMode={testMode}>{image}</Image>}
      <div className="rvt-card__body">
        {eyebrow && <Eyebrow testMode={testMode}>{eyebrow}</Eyebrow>}
        <h2
          className="rvt-card__title"
          {...(testMode && { "data-testid": TestUtils.Card.title })}
        >
          {titleUrl && <a href={titleUrl}>{title}</a>}
          {!titleUrl && <span>{title}</span>}
        </h2>
        <div
          className="rvt-card__content"
          {...(testMode && { "data-testid": TestUtils.Card.content })}
        >
          {children}
        </div>
        {meta && <Meta testMode={testMode}>{meta}</Meta>}
      </div>
    </Component>
  )
}

Card.displayName = "Card";
Card.propTypes = {
  /** Full card will trigger link to tiitle's url (requires titleUrl set) */
  clickable: PropTypes.bool,
  /** Allows setting of container element */
  Component: PropTypes.string,
  /** Optional eyebrow to display */
  eyebrow: PropTypes.oneOfType([PropTypes.element]),
  /** Display card in horizontal format */
  horizontal: PropTypes.bool,
  /** Optional image to display */
  image: PropTypes.oneOfType([PropTypes.element]),
  /** Optional meta information */
  meta: PropTypes.oneOfType([PropTypes.element]),
  /** Add a box shadow to the card */
  raised: PropTypes.bool,
  /** [Developer] Adds data-testId attributes for component testing */
  testMode: PropTypes.bool,
  /** The title of the Card */
  title: PropTypes.string.isRequired,
  /** Url for the title */
  titleUrl: PropTypes.string
};

const Eyebrow = ({ children, testMode }) => {
  return (
    <div
      className="rvt-card__eyebrow"
      {...(testMode && { "data-testid": TestUtils.Card.eyebrow })}
    >
      {children}
    </div>
  )
}

const Image = ({ children, testMode }) => {
  return (
    <div
      className="rvt-card__image"
      {...(testMode && { "data-testid": TestUtils.Card.image })}
    >
      {children}
    </div>
  )
}

const Meta = ({ children, testMode }) => {
  return (
    <div
      className="rvt-card__meta"
      {...(testMode && { "data-testid": TestUtils.Card.meta })}
    >
      {children}
    </div>
  )
}

export default Rivet.rivetize(Card);
