import * as Rivet from '../util/Rivet';

export interface StatefulAlertProps {
    /**
     * Rivet alert styling. 
     * @see https://rivet.uits.iu.edu/components/overlays/alerts
     * @memberof AlertProps
     */ 
    variant: "info" | "message" | "error" | "success",
    /**
     * Optional alert title
     */
    title?: string,
    /**
     * Optional event to raise when the alert is dismissed
     */
    onDismiss?: Rivet.Action
}

export interface StatelessAlertProps extends StatefulAlertProps {
    /**
     * Optional flag to determine whether the alert is rendered
     */
    isOpen?: boolean
}
