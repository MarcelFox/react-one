import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Dashboard from './main';

ReactDOM.hydrate(
  <BrowserRouter basename="admin">
    <Dashboard />
  </BrowserRouter>,
  document.documentElement
);
