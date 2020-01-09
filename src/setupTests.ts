// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom/extend-expect';

// Temporary hack to suppress error
// https://github.com/facebookincubator/create-react-app/issues/3199
// tslint:disable-next-line:only-arrow-functions
window.requestAnimationFrame = function(callback) {
  setTimeout(callback, 0);
  return 0;
};

import * as Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });
