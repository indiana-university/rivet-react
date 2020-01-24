/*
Copyright (C) 2020 The Trustees of Indiana University
SPDX-License-Identifier: BSD-3-Clause
*/
import classNames from 'classnames';
import React from 'react';

const ModalBody = ({ children, className, ...attrs }) => (
    <div className={classNames(['rvt-modal__body', className])} {...attrs}>
        { children }
    </div>
);
ModalBody.displayName = 'ModalBody';

export default ModalBody;
