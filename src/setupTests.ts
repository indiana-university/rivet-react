// Temporary hack to suppress error
// https://github.com/facebookincubator/create-react-app/issues/3199
// tslint:disable-next-line:only-arrow-functions
window.requestAnimationFrame = function (callback) {
    setTimeout(callback, 0);
    return 0;
  };

import * as Enzyme from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });