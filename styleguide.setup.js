/*
Copyright (C) 2018 The Trustees of Indiana University
SPDX-License-Identifier: BSD-3-Clause
*/
import * as rivet from "./src/components/index.js";
import "rivet-stickers/dist/rivet-sticker-element.css";
import "./src/util/rivet-icon-element.css";
// rivet-icons used only in md files which are not inherent to a component
import { registerIcon } from "./src/util/rivet-icon-element.js";
import "./src/util/icons/bell.js";

Object.assign(globalThis, rivet);
