import * as React from 'react';
import * as Rivet from '../util/Rivet';

const Section : React.SFC<React.HTMLAttributes<HTMLDivElement>> = (props) => (
    <section {...props} />
);
Section.displayName = 'Section';

export default Rivet.rivetize(Section);
