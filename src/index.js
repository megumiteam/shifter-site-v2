import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {unregister} from './registerServiceWorker';
import 'dc-pattern-lib/scss/main.css';

document.body.classList.add("shifter--main");

ReactDOM.render(<App />, document.getElementById('root'));
unregister();
