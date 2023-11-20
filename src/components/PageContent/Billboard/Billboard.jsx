/*
Copyright (C) 2018 The Trustees of Indiana University
SPDX-License-Identifier: BSD-3-Clause
*/
import classNames from "classnames";
import * as PropTypes from "prop-types";
import * as React from "react";
import * as Rivet from "../../util/Rivet";
import { TestUtils } from "../../util/TestUtils";

const Billboard = ({
  children,
  className,
  image,
  testMode = false,
  title,
  variant = "standard",
  ...attrs
}) => {
  const classNameArr = [
    "rvt-billboard",
    variant === "center" ? "rvt-billboard--center" : "",
    variant === "reverse" ? "rvt-billboard--reverse" : "",
    className
  ]

  return (
    <div
      {...attrs}
      className={classNames(classNameArr)}
      {...(testMode && { "data-testid": TestUtils.Billboard.container })}
    >
      {image && <BillboardImage testMode={testMode}>{image}</BillboardImage>}
      <div className="rvt-billboard__body">
        <h2
          className="rvt-billboard__title"
          {...(testMode && { "data-testid": TestUtils.Billboard.title })}
        >
          {title}
        </h2>
        {children && <BillboardContent testMode={testMode}>{children}</BillboardContent>}
      </div>
    </div>
  )
}

Billboard.displayName = "Billboard";
Billboard.propTypes = {
  /** Optional image to display */
  image: PropTypes.oneOfType(PropTypes.element),
  /** [Developer] Adds data-testId attributes for component testing */
  testMode: PropTypes.bool,
  /** The title of the billboard */
  title: PropTypes.string.isRequired,
  /* The variant determines the style of the billboard */
  variant: PropTypes.oneOf(["center", "reverse", "standard"])
};

const BillboardImage = ({ children, testMode = false }) => {
  return (
    <div
      className="rvt-billboard__image"
      {...(testMode && { "data-testid": TestUtils.Billboard.image })}
    >
      {children}
    </div>
  )
}

const BillboardContent = ({ children, testMode = false }) => {
  return (
    <div
      className="rvt-billboard__content rvt-flow"
      {...(testMode && { "data-testid": TestUtils.Billboard.content })}
    >
      {children}
    </div>
  )
}

export default Rivet.rivetize(Billboard);
