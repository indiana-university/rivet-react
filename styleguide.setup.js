/*
Copyright (C) 2018 The Trustees of Indiana University
SPDX-License-Identifier: BSD-3-Clause
*/
import * as rivet from "./src/components";
import * as addons from "./src/components/Addons";

global = Object.assign(global, rivet, addons);
