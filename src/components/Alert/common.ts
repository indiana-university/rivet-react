import * as PropTypes from 'prop-types';

export interface StatefulAlertProps {
    /**
     * Rivet alert styling. 
     * @see https://rivet.uits.iu.edu/components/overlays/alerts
     */ 
    variant: "danger" | "info" | "warning" | "success",
    /**
     * Optional alert title
     */
    title?: string,
    /**
     * Optional event to raise when the alert is dismissed
     */
    onDismiss?: () => void;
}

export const statefulPropTypes = {
    variant: PropTypes.oneOf(['danger', 'info', 'warning', 'success']).isRequired,
    title: PropTypes.string,
    onDismiss: PropTypes.func
};

export interface StatelessAlertProps extends StatefulAlertProps {
    /**
     * Optional flag to determine whether the alert is visible
     */
    isOpen?: boolean
}

export const statelessPropTypes = {
    ...statefulPropTypes,
    isOpen: PropTypes.bool
};
