import {Await, useLoaderData} from 'react-router-dom';
import EventsList from '../components/EventsList';
import {Suspense} from 'react';

function EventsPage () {
  const {events} = useLoaderData ();
  // if (data.isError) {
  //   return <p>{data.message}</p>;
  // }
  // const events = data.events;

  return (
    <Suspense fallback={<p style={{textAlign: 'center'}}>Loading...</p>}>
      <Await resolve={events}>
        {loadedEvents => <EventsList events={loadedEvents.events} />}
      </Await>
    </Suspense>
  );
}

export default EventsPage;

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
} //This function gets executed just before rendering the given element <EventsPage /> in this case.

export async function loader () {
  // return defer ({
  //   events: loadEvents (),
  // }); For v7+ we cannot use defer we need to use below structure/code
  return {
    events: loadEvents (),
  };
}
