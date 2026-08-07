import * as React from "react";

export function useDeprecation(name) {
  React.useEffect(() => {
    console.warn(
      `${name} is deprecated and will be removed in a future release.`,
    );
  }, []);
}
