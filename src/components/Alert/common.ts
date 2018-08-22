import * as PropTypes from 'prop-types';

import * as Rivet from '../util/Rivet';

export interface StatefulAlertProps {
    /**
     * Rivet alert styling. 
     * @see https://rivet.uits.iu.edu/components/overlays/alerts
     * @memberof AlertProps
     */ 
    variant: "error" | "info" | "message" | "success",
    /**
     * Optional alert title
     */
    title?: string,
    /**
     * Optional event to raise when the alert is dismissed
     */
    onDismiss?: Rivet.Action
}

export const statefulPropTypes = {
    variant: PropTypes.oneOf(['info', 'error', 'message', 'success']).isRequired,
    title: PropTypes.string,
    onDismiss: PropTypes.func
};

export interface StatelessAlertProps extends StatefulAlertProps {
    /**
     * Optional flag to determine whether the alert is rendered
     */
    isOpen?: boolean
}

export const statelessPropTypes = {
    ...statefulPropTypes,
    isOpen: PropTypes.bool
};
