/*
Copyright (C) 2018 The Trustees of Indiana University
SPDX-License-Identifier: BSD-3-Clause
*/
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

class Tabs extends React.PureComponent<
  TabsProps & React.HTMLAttributes<HTMLDivElement>,
  TabsState
> {
  public readonly state: TabsState = initialState;

  /**
   * Array to hold Tab button refs. This is how we'll manage focus.
   */
  public tabRefs: any = [];

  // Key codes for easy reference
  public readonly keys = {
    end: 35,
    home: 36,
    left: 37,
    up: 38,
    right: 39,
    down: 40
  };

  constructor(props) {
    super(props);
    this.changeTab = this.changeTab.bind(this);
    this.handleKeydown = this.handleKeydown.bind(this);
  }

  public changeTab(tabNumber) {
    this.setState({
      selected: tabNumber
    });
  }

  public focusNextTab(tabs, target) {
    const next = tabs.indexOf(target) + 1;

    !tabs[next] ? tabs[0].focus() : tabs[next].focus();
  }

  public focusPreviousTab(tabs, target) {
    const prev = tabs.indexOf(target) - 1;

    !tabs[prev] ? tabs[tabs.length - 1].focus() : tabs[prev].focus();
  }

  public handleKeydown(tabs, target, event) {
    switch (event.keyCode) {
      case this.keys.right:
        this.focusNextTab(tabs, target);

        break;
      case this.keys.down:
        event.preventDefault();

        this.focusNextTab(tabs, target);

        break;
      case this.keys.left:
        this.focusPreviousTab(tabs, target);

        break;
      case this.keys.up:
        event.preventDefault();

        this.focusPreviousTab(tabs, target);

        break;
      case this.keys.home:
        event.preventDefault();

        // Focus the first tab button
        tabs[0].focus();

        break;
      case this.keys.end:
        event.preventDefault();

        // Focus the last tab button
        tabs[tabs.length - 1].focus();

        break;
      default:
        break;
    }
  }

  public render() {
    const { children, className, variant, ...attrs } = this.props;
    const tabNavigation = React.Children.map(children, (child, index) => {
      const tab = child as React.ReactElement<any>;
      const { id, title } = tab.props;
      return (
        <button
          type="button" 
          className="rvt-tabs__tab"
          role="tab"
          aria-selected={this.state.selected === index}
          aria-controls={id}
          id={`${id}-tab`}
          onClick={() => this.changeTab(index)}
          ref={tabControl => this.tabRefs.push(tabControl)}
          onKeyDown={event =>
            this.handleKeydown(this.tabRefs, event.target, event)
          }
          tabIndex={this.state.selected === index ? undefined : -1}
        >
          {title}
        </button>
      );
    });

    const tabContent = React.Children.map(children, (child, index) => {
      if (index === this.state.selected) {
        return child;
      } else {
        return null;
      }
    });

    const classes = classNames.default(
      {
        ['rvt-tabs']: true,
        [`rvt-tabs--${variant}`]: variant
      },
      className
    );

    return (
      <div {...attrs} className={classes}>
        <div
          className="rvt-tabs__tablist"
          role="tablist"
          aria-orientation={variant === 'vertical' ? 'vertical' : 'horizontal'}
        >
          {tabNavigation}
        </div>
        {tabContent}
      </div>
    );
  }
}

export default Rivet.rivetize<TabsProps & React.HTMLAttributes<HTMLDivElement>>(Tabs);
