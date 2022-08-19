/*
Copyright (C) 2018 The Trustees of Indiana University
SPDX-License-Identifier: BSD-3-Clause
*/
// Temporary hack to suppress error
// https://github.com/facebookincubator/create-react-app/issues/3199
import * as Enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

window.requestAnimationFrame = function (callback) {
    setTimeout(callback, 0);
    return 0;
  };

Enzyme.configure({ adapter: new Adapter() });
