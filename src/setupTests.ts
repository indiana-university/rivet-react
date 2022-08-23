/*
Copyright (C) 2018 The Trustees of Indiana University
SPDX-License-Identifier: BSD-3-Clause
*/
// Temporary hack to suppress error
// https://github.com/facebookincubator/create-react-app/issues/3199
import * as Enzyme from 'enzyme';
// Using third party adapter, as React 17 is not supported by enzyme (and may never be)
// https://github.com/enzymejs/enzyme/issues/2429
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

window.requestAnimationFrame = function (callback) {
    setTimeout(callback, 0);
    return 0;
  };

Enzyme.configure({ adapter: new Adapter() });
