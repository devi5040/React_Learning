import React from 'react';
import EventForm from '../components/EventForm';
import {useRouteLoaderData} from 'react-router-dom';

function EditEventPage () {
  const data = useRouteLoaderData ('event-detail'); //provide the id we entered in the route here to use that particular loader
  return <EventForm method="patch" event={data.event} />;
}

export default EditEventPage;
