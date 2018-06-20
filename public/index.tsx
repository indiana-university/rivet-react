import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Demo from './Demo';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Demo />,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
