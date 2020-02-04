/*
Copyright (C) 2018 The Trustees of Indiana University
SPDX-License-Identifier: BSD-3-Clause
*/
import * as React from 'react'
import * as PropTypes from "prop-types";
import * as Rivet from '../util/Rivet';
import Alert from './Alert'

export interface DismissibleAlertProps {
  /**
   * Rivet alert styling.
   * @see https://rivet.uits.iu.edu/components/overlays/alerts
   */

  variant: "danger" | "info" | "warning" | "success";
  /**
   * Optional alert title
   */
  title?: string | JSX.Element;
  /**
   * Optional event to raise when the alert is dismissed
   */
  onDismiss?: () => void;
}

const initialState = { isOpen: true }
type AlertState = Readonly<typeof initialState>

class DismissibleAlert extends React.PureComponent<
  DismissibleAlertProps & React.HTMLAttributes<HTMLDivElement>,
  AlertState
> {
  public static propTypes = {
    variant: PropTypes.oneOf<any>(["danger", "info", "warning", "success"]).isRequired,
    title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    onDismiss: PropTypes.func
  };

  public readonly state: AlertState = initialState;

  public render() {
    return (
      <Alert
        {...this.props}
        onDismiss={this.onDismiss}
        isOpen={this.state.isOpen}
      />
    );
  }

  private onDismiss = () => {
    this.setState({ isOpen: false });
    if (this.props.onDismiss) {
      this.props.onDismiss();
    }
  };
}

export default Rivet.rivetize(DismissibleAlert);
