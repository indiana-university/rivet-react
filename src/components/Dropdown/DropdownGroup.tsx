import * as React from 'react';

interface DropdownGroupProps {
    /**
     * Optional header for a related group of menu items.
     */
    label?: string;
}

const DropdownGroup : React.SFC<DropdownGroupProps & React.HTMLAttributes<HTMLDivElement>> = 
({ children, label, ...attrs }) => (
    <>
        { label && <div className="rvt-dropdown__menu-heading" aria-hidden="true">{label}</div>}
        <div {...attrs} role="group" aria-label={label}>
            {children}
        </div>
    </>
);
DropdownGroup.displayName = 'DropdownGroup';

export default DropdownGroup;
