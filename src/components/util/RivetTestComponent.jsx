/*
Copyright (C) 2018 The Trustees of Indiana University
SPDX-License-Identifier: BSD-3-Clause
*/
import classNames from "classnames";
import * as React from "react";
import * as PropTypes from "prop-types";

import * as Rivet from "./Rivet";

const RivetTestComponent = (props) => {
  return <div data-testid="test" {...props} >
    Test Component
</div>
};

export default Rivet.rivetize(RivetTestComponent);
