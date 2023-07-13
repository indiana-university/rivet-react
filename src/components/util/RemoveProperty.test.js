/*
Copyright (C) 2018 The Trustees of Indiana University
SPDX-License-Identifier: BSD-3-Clause
*/
import "@testing-library/jest-dom";
import React from "react";
import { removeProperty } from "./RemoveProperty.js";

describe.only("RemoveProperty", () => {
  let obj = { foo: 1, bar: 2, baz: 3 };

  it("determine does not remove on none existing propertyName", () => {
    expect(removeProperty(obj, "foobar")).toEqual({ foo: 1, bar: 2, baz: 3 });
  });

  it("determine does remove existing propertyName", () => {
    expect(removeProperty(obj, "baz")).toEqual({ foo: 1, bar: 2 });
  });
});
