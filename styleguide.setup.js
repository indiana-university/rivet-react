/*
Copyright (C) 2018 The Trustees of Indiana University
SPDX-License-Identifier: BSD-3-Clause
*/
import * as rivet from "./src/components/index.js";
import "rivet-stickers/dist/rivet-sticker-element.css";
import "rivet-icons/dist/rivet-icon-element.css";
// rivet-icons used only in md files which are not inherent to a component
import "rivet-icons/dist/bell.js";

Object.assign(globalThis, rivet);
