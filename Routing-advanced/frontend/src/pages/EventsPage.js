import { useLoaderData } from 'react-router-dom';
import EventsList from '../components/EventsList';

function EventsPage() {
  const events = useLoaderData();
  return (
    <>
       <EventsList events={events}/>
    </>
  );
}

export default EventsPage;

export async function eventLoader() {
  {
    const response = await fetch ('http://localhost:8080/events');

    if (!response.ok) {
      //error
    } else {
      const resData = await response.json ();
      return resData.events;
    }
  } //This function gets executed just before rendering the given element <EventsPage /> in this case. 
}