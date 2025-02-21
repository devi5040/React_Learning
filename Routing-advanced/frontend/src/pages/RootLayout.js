import React, {Fragment} from 'react';
import MainNavigation from '../components/MainNavigation';
import {Outlet, useNavigate} from 'react-router-dom';

function RootLayout () {
  const navigation = useNavigate ();

  return (
    <Fragment>
      <MainNavigation />
      <main>
        {/* {navigation.state === 'loading' && <p>Loading...</p>} */}
        <Outlet />
      </main>
    </Fragment>
  );
}

export default RootLayout;
