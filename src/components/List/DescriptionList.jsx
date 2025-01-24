/*
Copyright (C) 2018 The Trustees of Indiana University
SPDX-License-Identifier: BSD-3-Clause
*/
import classNames from "classnames";
import * as React from "react";
import * as PropTypes from "prop-types";

import * as Rivet from "../util/Rivet";

const classPrefix = "rvt-list-description";

/**
 * Use the description list show a set of terms and descriptions.
 * @deprecated Use List with variant 'description'
 */
const DescriptionList = ({
  id = Rivet.shortuid(),
  className,
  children,
  ...attrs
}) => {
  return (
    <dl className={classNames(classPrefix, className)} id={id} {...attrs}>
      {children}
    </dl>
  );
};
DescriptionList.displayName = "DescriptionList";
DescriptionList.propTypes = {
  /** A unique identifier for the description list */
  id: PropTypes.string,
};

export default Rivet.rivetize(DescriptionList);
