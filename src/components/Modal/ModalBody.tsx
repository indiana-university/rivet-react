import * as classNames from 'classnames';
import * as React from 'react';

const ModalBody : React.SFC<React.HTMLAttributes<HTMLDivElement>> = ({ children, className, ...attrs }) => (
    <div className={classNames(['rvt-modal__body', className])} {...attrs}>
        { children }
    </div>
);
ModalBody.displayName = 'ModalBody';

export default ModalBody;
