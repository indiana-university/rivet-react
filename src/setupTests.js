/*
Copyright (C) 2018 The Trustees of Indiana University
SPDX-License-Identifier: BSD-3-Clause
*/
import "@testing-library/jest-dom";
import { vi } from "vitest";

// Alias jest to vi so existing tests using jest.fn() continue to work
globalThis.jest = vi;
