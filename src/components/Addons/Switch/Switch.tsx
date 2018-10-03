import * as classNames from 'classnames';
import * as React from 'react';
import 'rivet-switch/dist/css/rivet-switch.css';

interface SwitchProps {
  /**
   * Sets whether the switch is on or off by default.  Default is "on".
   */
  defaultValue?: 'on' | 'off';
  /**
   * Optional Rivet style: A small switch
   */
  size?: 'small';
  /**
   * Optional Rivet style: A success or danger styled switch.
   */
  variant?: 'success' | 'danger';
}

const initialState = { value: 'on' };
type SwitchState = Readonly<typeof initialState>;

class Switch extends React.PureComponent<SwitchProps & React.HTMLAttributes<HTMLButtonElement>, SwitchState> {

  public readonly state: SwitchState = initialState;

  constructor(props) {
    super(props);
    this.state = {
      value: props.defaultValue || 'on'
    };
  }

  public toggle = (event) => {
    this.props.onClick && this.props.onClick(event);
    this.setState({
      value: this.state.value === 'on' ? 'off' : 'on'
    });
  };

  public render() {
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
