import React from 'react';
import { Routes, Route, Outlet } from 'react-router-dom';

import HomeDash from '@App/dashboard/pages/home';
import Info from '@App/dashboard/pages/info';
import NavBar from '@App/dashboard/components/navBar';

function Main() {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
}
export default function Dashboard() {
  return (
    <html lang="en">
      <head>
        <title>Dashboard</title>
      </head>
      <body>
        <Routes>
          <Route path="/" element={<Main />}>
            <Route index element={<HomeDash />} />
            <Route path="info" element={<Info />} />
          </Route>
        </Routes>
        <script src="/bundle.js" />
      </body>
    </html>
  );
}
