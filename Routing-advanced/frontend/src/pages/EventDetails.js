import React, {Fragment, Suspense} from 'react';
import {
  Await,
  redirect,
  useLoaderData,
  useParams,
  useRouteLoaderData,
} from 'react-router-dom';
import EventItem from '../components/EventItem';
import EventsList from '../components/EventsList';

function EventDetails () {
  const {event, events} = useRouteLoaderData ('event-detail');
  return <>
  <Suspense fallback={<p style={{textAlign:'center'}}>Loading...</p>}>
  <Await resolve={event}>
    {
      loadedEvent=><EventItem event={loadedEvent} />
    }
  </Await>
  </Suspense>
  <Suspense fallback={<p style={{textAlign:'center'}}>Loading...</p>}>
  <Await resolve={events}>
    {
      loadedEvents=> <EventsList events={loadedEvents}/>
    }
  </Await>
  </Suspense>
 
  </>;
}

export default EventDetails;

async function loadEvent(id){
  const response = await fetch ('http://localhost:8080/events/' + id);
  if (!response.ok) {
    throw new Response (JSON.stringify ({message: 'Could not fetch events'}), {
      status: 500,
    });
  }
  const resData = response.json();
  return resData.event;
}

async function loadEvents () {
  const response = await fetch ('http://localhost:8080/events');

  if (!response.ok) {
    // return {isError: true, message: 'Error while fetching data'};
    throw new Response (JSON.stringify ({message: 'Could not fetch events'}), {
      status: 500,
    });
  } else {
    // const resData = await response.json ();
    // return resData.events;
    // return response; //because the fetch returns promise of type Response so react router will extract the data from this response
    const resData = await response.json ();
    console.log (resData);
    return resData; //Since it is not a loader function we cannot return response directly
  }
} 


export async function loader({reques, params}) {
  const id = params.eventId;
  return {
    event:loadEvent(id),
    events:loadEvents()
  }
}

export async function action({params, request}) {
  const eventId = params.eventId;
  const response = await fetch ('http://localhost:8080/events/' + eventId, {
    method: request.method,
  });
  if (!response.ok) {
    throw new Response (JSON.stringify ({message: 'Could not delete event'}), {
      status: 500,
    });
  }
  return redirect ('/events');
}
