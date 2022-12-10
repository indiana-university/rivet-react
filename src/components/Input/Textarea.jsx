/*
Copyright (C) 2018 The Trustees of Indiana University
SPDX-License-Identifier: BSD-3-Clause
*/
import * as React from "react";
import * as Rivet from "../util/Rivet";
import { propTypes, renderInput } from "./common";

const Textarea = (props) => <>{renderInput("textarea", props)}</>;

Textarea.displayName = "TextArea";
Textarea.propTypes = propTypes;

export default Rivet.rivetize(Textarea);
