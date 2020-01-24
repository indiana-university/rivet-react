/*
Copyright (C) 2020 The Trustees of Indiana University
SPDX-License-Identifier: BSD-3-Clause
*/
import classNames from 'classnames';
import React from 'react';

const ModalControls = ({ children, className }) => (
    <div className={classNames(['rvt-modal__controls', className])}>
        { children }
    </div>
);
ModalControls.displayName = 'ModalControls';

export default ModalControls;
