/*
Copyright (C) 2018 The Trustees of Indiana University
SPDX-License-Identifier: BSD-3-Clause
*/
import * as React from "react";
import * as Rivet from "../util/Rivet";
import { propTypes, renderInput } from "./common";

const Select = (props) => <>{renderInput("select", props)}</>;

Select.displayName = "Select";
Select.propTypes = propTypes;

export default Rivet.rivetize(Select);
