import React from 'react';
import { Routes, Route, Outlet } from 'react-router-dom';

import HomeLp from '@App/landingPage/pages/home';
import About from '@App/landingPage/pages/about';
import NavBar from '@App/landingPage/components/navBar';

// const rootElement = document.getElementById('root');

function Main() {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
}
export default function LandingPage() {
  return (
    <html lang="en">
      <head>
        <title>Server Rendered App</title>
      </head>
      <body>
        <Routes>
          <Route path="/" element={<Main />}>
            <Route index element={<HomeLp />} />
            <Route path="about" element={<About />} />
          </Route>
        </Routes>
        <script src="/landingPage.bundle.js" />
      </body>
    </html>
  );
}
