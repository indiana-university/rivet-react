import * as svg from "../util/RivetIcons"

export interface ValidationProps {
    /**
     * Rivet style for inline validation.
     */
    variant: 'info' | 'invalid' | 'valid' | 'warning';
}

const variantDisplayOptions : object = {
    info: {
        className: 'has-info',
        icon: svg.info()
    },
    valid: {
        className: 'is-valid',
        icon: svg.success()
    },
    warning: {
        className: 'has-warning',
        icon: svg.warning()
    },
    invalid: {
        className: 'is-invalid',
        icon: svg.error()
    },
}

export const validationIcon = (props : ValidationProps) => variantDisplayOptions[props.variant] && variantDisplayOptions[props.variant].icon;
export const validationClass = (props : ValidationProps) => variantDisplayOptions[props.variant] && variantDisplayOptions[props.variant].className;
