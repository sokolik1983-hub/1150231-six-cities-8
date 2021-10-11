import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import allObjects from './configs/allObjects';

ReactDOM.render(
  <React.StrictMode>
    <App allObjects={allObjects} />
  </React.StrictMode>,
  document.getElementById('root'));
