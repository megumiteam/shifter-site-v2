import 'babel-polyfill'
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import('../src/assets/dc-pattern-lib/scss/main.css');

document.body.classList.add("shifter--main");

ReactDOM.render(<App />, document.getElementById('root'));
