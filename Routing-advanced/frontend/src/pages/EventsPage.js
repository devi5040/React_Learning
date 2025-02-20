import React, {Fragment} from 'react';
import {Link} from 'react-router-dom';

const EVENTS = [
  {id: 'e1', title: 'Events 1'},
  {id: 'e2', title: 'Events 2'},
  {id: 'e3', title: 'Events 3'},
];

function EventsPage () {
  return (
    <Fragment>
      <h1>Events Page</h1>
      <ul>
        {EVENTS.map (event => {
          return (
            <li key={event.id}>
              <Link to={`/events/${event.id}`}>{event.title}</Link>
            </li>
          );
        })}
      </ul>
    </Fragment>
  );
}

export default EventsPage;
