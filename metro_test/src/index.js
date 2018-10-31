import React from 'react';
import ReactDOM from 'react-dom';
import metro_test from './metro_test';
import * as serviceWorker from './serviceWorker';
import './index.css';

ReactDOM.render(<metro_test />, document.getElementById('root'));


serviceWorker.unregister();



