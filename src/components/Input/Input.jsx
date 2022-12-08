/*
Copyright (C) 2018 The Trustees of Indiana University
SPDX-License-Identifier: BSD-3-Clause
*/
import * as React from "react";
import * as Rivet from "../util/Rivet";
import { propTypes, renderInput } from "./common";

const Input = renderInput("input");

Input.displayName = "Input";
Input.propTypes = propTypes;

export default Rivet.rivetize(Input);
