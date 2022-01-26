import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from '@Domain/landingPage/components/navBar';

export default function LandingPage() {
  return (
    <frameElement>
      <NavBar />
      <Outlet />
    </frameElement>
  );
}
