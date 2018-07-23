import * as classNames from 'classnames';
import * as React from 'react';
import * as Rivet from '../Rivet';

interface ButtonGroupProps {
  /**
   * Right align the buttons in this button group
   * @see https://rivet.uits.iu.edu/components/forms/buttons/#button-groups
   */
  right?: boolean;
};

const ButtonGroup: React.SFC<ButtonGroupProps & React.HTMLAttributes<HTMLDivElement>> = ({ className, children, right, ...attrs }) => {
  const classes = classNames({
    ['rvt-button-group']: true,
    ['rvt-button-group--right']: right
  }, className);
  return (
    <div {...attrs} className={classes}>
      {children}
    </div>
  );
};

export default Rivet.rivetize(ButtonGroup);
