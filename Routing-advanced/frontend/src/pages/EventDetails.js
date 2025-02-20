import React, {Fragment} from 'react';
import {useParams} from 'react-router-dom';

function EventDetails () {
  const params = useParams ();

  return (
    <Fragment>
      <h1>Event Details</h1>
      <p>{params.eventId}</p>
    </Fragment>
  );
}

export default EventDetails;
