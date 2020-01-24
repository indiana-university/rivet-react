/*
Copyright (C) 2020 The Trustees of Indiana University
SPDX-License-Identifier: BSD-3-Clause
*/
import classNames from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';
import 'rivet-switch/dist/css/rivet-switch.css';

const initialState = { value: 'on' };

class Switch extends React.PureComponent {

  static propTypes = {
    /**
   * Sets whether the switch is on or off by default.  Default is "on".
   */
    defaultValue: PropTypes.oneOf(['on','off']),
    /**
     * Optional Rivet style: A small switch
     */
    size: PropTypes.oneOf(['small']),
    /**
     * Optional Rivet style: A success or danger styled switch.
     */
    variant: PropTypes.oneOf(['success','danger']),
  }

  state = initialState;

  constructor(props) {
    super(props);
    this.state = {
      value: props.defaultValue || 'on'
    };
  }

  toggle = (event) => {
    if(this.props.onClick) {
      this.props.onClick(event);
    }
    this.setState({
      value: this.state.value === 'on' ? 'off' : 'on'
    });
  };

  render() {
    const { className, size, variant, ...attrs } = this.props;
    const classes = classNames({
      'rvt-switch': true,
      [`rvt-switch--${variant}`]: variant,
      [`rvt-switch--${size}`]: size,
    }, className);
    return (
      <button {...attrs} className={classes} role="switch" aria-checked={this.state.value === 'on'} value={this.state.value} onClick={this.toggle}>
        <span className="rvt-switch__on">On</span>
        <span className="rvt-switch__off">Off</span>
      </button>
    );
  }
}

export default Switch;
