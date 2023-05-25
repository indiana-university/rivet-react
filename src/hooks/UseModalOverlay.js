import {
  ariaHideOutside,
  useOverlay,
  useOverlayFocusContain,
  usePreventScroll,
} from "@react-aria/overlays";
import { useEffect } from "react";
import { mergeProps } from "@react-aria/utils";

// copied from @react-aria/overlays
export function useModalOverlay(props, state, ref) {
  let { overlayProps, underlayProps } = useOverlay(
    {
      ...props,
      isOpen: state.isOpen,
      onClose: state.close,
    },
    ref
  );

  // usePreventScroll customized: Added disablePageInteraction
  usePreventScroll({
    isDisabled: !(state.isOpen && state.disablePageInteraction),
  });

  useOverlayFocusContain();

  useEffect(() => {
    if (state.isOpen) {
      return ariaHideOutside([ref.current]);
    }
  }, [state.isOpen, ref]);

  return {
    modalProps: mergeProps(overlayProps),
    underlayProps,
  };
}
