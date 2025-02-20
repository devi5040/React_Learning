import React from 'react';
import {Outlet} from 'react-router-dom'; //this will mark the place where the child element rendered to
import MainNavigation from '../components/MainNavigation';


function RootLayout () {
  return (
    <>
    <MainNavigation />
  <main>
  <Outlet />
  </main>
    </>
  );
}

export default RootLayout;
