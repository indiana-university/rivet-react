/*
Copyright (C) 2018 The Trustees of Indiana University
SPDX-License-Identifier: BSD-3-Clause
*/
export function removeProperty(obj, propertyName) {
  let newObj = { ...obj };
  delete newObj[propertyName];
  return newObj;
}
