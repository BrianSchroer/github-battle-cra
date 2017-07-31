import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {App} from './app';
import registerServiceWorker from './registerServiceWorker';
import styles from './index.css'; //eslint-disable-line no-unused-vars

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
