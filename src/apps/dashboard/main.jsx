import React from 'react';
import { render } from 'react-dom';
import {
  BrowserRouter, Routes, Route, Outlet
} from 'react-router-dom';

import HomeDash from '@App/dashboard/pages/home';
import Info from '@App/dashboard/pages/info';
import NavBar from '@App/dashboard/components/navBar';

const rootElement = document.getElementById('root');

function Dashboard() {
  return (
    <frameElement>
      <NavBar />
      <Outlet />
    </frameElement>
  );
}

render(
  <BrowserRouter basename="admin">
    <Routes>
      <Route path="/" element={<Dashboard />}>
        <Route index element={<HomeDash />} />
        <Route path="info" element={<Info />} />
      </Route>
    </Routes>
  </BrowserRouter>,
  rootElement
);
