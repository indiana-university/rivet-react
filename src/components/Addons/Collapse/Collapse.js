/*
Copyright (C) 2020 The Trustees of Indiana University
SPDX-License-Identifier: BSD-3-Clause
*/
import classNames from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';

import 'rivet-collapsible/dist/css/rivet-collapsible.css';

import Icon from '../../util/RivetIcons';

const initialState = { open: false };

class Collapse extends React.PureComponent {

  static propTypes = {
    /**
   * Sets whether the collapse is open or closed by default.  Default is closed.
   */
    defaultClosed: PropTypes.bool,
    /**
     * The component to use for the title element.  Defaults to "div".
     */
    TitleComponent: PropTypes.oneOf(['div','h1','h2','h3','h4','h5','h6']),
    /**
     * Optional Rivet style: A panel styled collapse.
     */
    variant: PropTypes.oneOf(['panel'])
  }

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
