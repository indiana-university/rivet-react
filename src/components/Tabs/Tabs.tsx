import * as classNames from 'classnames';
import * as React from 'react';

import * as Rivet from '../util/Rivet';

interface TabsProps {
  /** The title of the tab */
  title: string;
  /**
   * Optional Rivet style: A fitted or vertical set of tabs.
   */
  variant?: 'fitted' | 'vertical'
}

const initialState = { selected: 0 }
type TabsState = Readonly<typeof initialState>

class Tabs extends React.PureComponent<TabsProps & React.HTMLAttributes<HTMLDivElement>, TabsState> {

  public readonly state: TabsState = initialState;

  constructor(props) {
    super(props);
    this.changeTab = this.changeTab.bind(this);
  }

  public changeTab(tabNumber) {
    this.setState({
      selected: tabNumber
    });
  };

  public render() {
    const { children, className, variant, ...attrs } = this.props;
    const tabNavigation = React.Children.map(children, (child, index) => {
      const tab = child as React.ReactElement<any>;
      const { id, title } = tab.props;
      return (
        <button className="rvt-tabs__tab" role="tab" aria-selected={this.state.selected === index} aria-controls={id} id={`${id}-tab`} onClick={() => this.changeTab(index)}>
          {title}
        </button>
      );
    });
    const tabContent = React.Children.map(children, (child, index) => {
      if(index === this.state.selected) {
        return child;
      } else {
        return null;
      }
    });
    const classes = classNames({
      ['rvt-tabs']: true,
      [`rvt-tabs--${variant}`]: variant
    }, className);
    return (
      <div {...attrs} className={classes}>
        <div className="rvt-tabs__tablist" role="tablist" aria-orientation={variant === 'vertical' ? 'vertical' : 'horizontal'}>
          {tabNavigation}
        </div>
        {tabContent}
      </div>
    );
  }
}

export default Rivet.rivetize(Tabs);
