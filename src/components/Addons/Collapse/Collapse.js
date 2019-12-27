/*
Copyright (C) 2018 The Trustees of Indiana University
SPDX-License-Identifier: BSD-3-Clause
*/
import classNames from 'classnames';
import React from 'react';

import 'rivet-collapsible/dist/css/rivet-collapsible.css';

import Icon from '../../util/RivetIcons';

const initialState = { open: false };

class Collapse extends React.PureComponent {

  static defaultProps = {
    defaultClosed: true
  }

  state = initialState;

  constructor(props) {
    super(props);
    this.state = {
      open: !props.defaultClosed
    }
  }

  toggle = () => {
    this.setState({
      open: !this.state.open
    })
  }

  render() {
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
