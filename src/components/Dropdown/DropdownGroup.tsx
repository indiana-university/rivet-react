import * as React from 'react';

interface DropdownGroupProps {
    header?: boolean;
    label: string;
}

const DropdownGroup : React.SFC<DropdownGroupProps & React.HTMLAttributes<HTMLDivElement>> = ({ children, header, label, ...attrs }) => (
    <>
        { header && <div className="rvt-dropdown__menu-heading" aria-hidden="true">{label}</div>}
        <div {...attrs} role="group" aria-label={label}>
            {children}
        </div>
    </>
);
DropdownGroup.displayName = 'DropdownGroup';

export default DropdownGroup;

