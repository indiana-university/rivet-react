/*
Copyright (C) 2018 The Trustees of Indiana University
SPDX-License-Identifier: BSD-3-Clause
*/
import { registerIcon } from "../rivet-icon-element.js";

const name = "magnifying-glass";
const svg = `<svg><path d="M7 2a5 5 0 1 0 0 10A5 5 0 0 0 7 2ZM0 7a7 7 0 1 1 12.606 4.192l3.101 3.1-1.414 1.415-3.1-3.1A7 7 0 0 1 0 7Z"/></svg>`;

registerIcon(name, svg);
