/*
Copyright (C) 2018 The Trustees of Indiana University
SPDX-License-Identifier: BSD-3-Clause
*/
import * as classNames from 'classnames';
import * as React from 'react';

import 'rivet-collapsible/dist/css/rivet-collapsible.css';

import Icon from '../../util/RivetIcons';

interface CollapseProps {
  /**
   * Sets whether the collapse is open or closed by default.  Default is closed.
   */
  defaultClosed?: boolean;
  /**
   * The component to use for the title element.  Defaults to "div".
   */
  TitleComponent?: 'div' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  /**
   * Optional Rivet style: A panel styled collapse.
   */
  variant?: 'panel';
}

const initialState = { open: false };
type CollapseState = Readonly<typeof initialState>;

class Collapse extends React.PureComponent<CollapseProps & React.HTMLAttributes<HTMLDivElement>, CollapseState> {

  public static defaultProps = {
    defaultClosed: true
  }

  public readonly state: CollapseState = initialState;

  constructor(props) {
    super(props);
    this.state = {
      open: !props.defaultClosed
    }
  }

  public toggle = () => {
    this.setState({
      open: !this.state.open
    })
  }

  public render() {
    const { children, className, defaultClosed, title, TitleComponent = 'div', variant, ...attrs } = this.props;
    const classes = classNames({
      'rvt-collapsible': true,
      [`rvt-collapsible--${variant}`]: variant,
    }, className)
    return (
      <div {...attrs} className={classes}>
        <TitleComponent className="rvt-collapsible__title">
          <button type="button" aria-expanded={this.state.open} onClick={this.toggle}>
            <Icon name="caret-right" />
            <span>{title}</span>
          </button>
        </TitleComponent>
        {this.state.open &&
          <div className="rvt-collapsible__content">
            <div className="rvt-m-all-remove">{children}</div>
          </div>
        }
      </div>
    )
  }

}

export default Collapse;
