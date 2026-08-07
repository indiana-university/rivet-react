/*
Copyright (C) 2018 The Trustees of Indiana University
SPDX-License-Identifier: BSD-3-Clause
*/
import * as React from "react";

export function useDeprecation(name) {
  React.useEffect(() => {
    console.warn(
      `${name} is deprecated and will be removed in a future release.`,
    );
  }, []);
}
