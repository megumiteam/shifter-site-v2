import 'babel-polyfill'
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'dc-pattern-lib/scss/main.css';
import unregister from './registerServiceWorker';

const hostname = window && window.location && window.location.hostname;

if ( hostname === 'localhost' ) {
  import('../src/assets/main.css');
}

document.body.classList.add("shifter--main");

ReactDOM.render(<App />, document.getElementById('root'));
unregister();
