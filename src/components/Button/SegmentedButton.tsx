import * as classNames from 'classnames';
import * as PropTypes from 'prop-types';
import * as React from 'react';
import * as Rivet from '../util/Rivet';

interface SegmentedButtonProps {
  /**
   * Setting this to true will cause the segmented button to fill the entire
   * width of its parent container
   * @see https://rivet.uits.iu.edu/components/forms/buttons-segmented/#fitted-modifier
   */
  fit?: boolean;
};

const propTypes = {
  fit: PropTypes.bool
};

const SegmentedButton: React.SFC<SegmentedButtonProps & React.HTMLAttributes<HTMLDivElement>> =
  ({ className, children, fit, ...attrs }) => {
    const classes = classNames({
      ['rvt-button-segmented']: true,
      ['rvt-button-segmented--fitted']: fit
    }, className);
    return (
      <div {...attrs} role="group" className={classes}>
        {children}
      </div>
    );
  };
SegmentedButton.displayName = 'SegmentedButton';
SegmentedButton.propTypes = propTypes;

export default Rivet.rivetize(SegmentedButton);
