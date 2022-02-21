import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Dashboard from './main';

ReactDOM.hydrate(
  <BrowserRouter>
    <Dashboard />
  </BrowserRouter>,
  document.getElementById('root')
);
