import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from '@App/landingPage/components/navBar';

export default function LandingPage() {
  return (
    <frameElement>
      <NavBar />
      <Outlet />
    </frameElement>
  );
}
