import React from 'react';
import { render } from 'react-dom';
import {
  BrowserRouter, Routes, Route, Outlet
} from 'react-router-dom';

import HomeLp from '@App/landingPage/pages/home';
import About from '@App/landingPage/pages/about';
import NavBar from '@App/landingPage/components/navBar';

const rootElement = document.getElementById('root');

function NotFound() {
  return <h1>404 - Page Not Found</h1>;
}

function LandingPage() {
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
      <Route path="*" element={<NotFound />} />
      <Route path="/" element={<LandingPage />}>
        <Route path="/" element={<HomeLp />} />
        <Route path="about" element={<About />} />
      </Route>
    </Routes>
  </BrowserRouter>,
  rootElement
);
