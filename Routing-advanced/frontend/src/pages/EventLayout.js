import React, {Fragment} from 'react';
import EventsNavigation from '../components/EventsNavigation';
import {Outlet} from 'react-router-dom';

function EventLayout () {
  return (
    <Fragment>
      <EventsNavigation />
      <Outlet />
    </Fragment>
  );
}

export default EventLayout;
