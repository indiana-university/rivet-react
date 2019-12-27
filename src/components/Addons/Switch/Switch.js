/*
Copyright (C) 2018 The Trustees of Indiana University
SPDX-License-Identifier: BSD-3-Clause
*/
import classNames from 'classnames';
import React from 'react';
import 'rivet-switch/dist/css/rivet-switch.css';

const initialState = { value: 'on' };

class Switch extends React.PureComponent {

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
