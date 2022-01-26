import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from '@Domain/landingPage/index';
import Home from '@Domain/landingPage/pages/home';
import About from '@Domain/landingPage/pages/about';

const rootElement = document.getElementById('root');

const NotFound = function () {
  <h1>404 - Page Not Found</h1>;
};
const Info = function () {
  <h1>Info</h1>;
};

render(
  <BrowserRouter>
    <Routes>
      <Route path="*" element={<NotFound />} />
      <Route path="/" element={<LandingPage />}>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
      </Route>
      <Route path="info" element={<Info />} />
    </Routes>
  </BrowserRouter>,
  rootElement
);
