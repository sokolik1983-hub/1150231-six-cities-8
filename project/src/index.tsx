import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import {amount} from './config';

ReactDOM.render(
  <React.StrictMode>
    <App amount={amount} />
  </React.StrictMode>,
  document.getElementById('root'));
