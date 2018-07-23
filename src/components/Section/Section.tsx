import * as React from 'react';
import { rivetize } from '../Rivet';

const Section : React.SFC<React.HTMLAttributes<HTMLDivElement>> = (props) => (
    <section {...props} />
);
Section.displayName = 'Section';

export default rivetize(Section);
