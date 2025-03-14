import {RouterProvider, createBrowserRouter} from 'react-router-dom';

import EditEventPage from './pages/EditEventPage';
import ErrorPage from './pages/Error';
import EventDetailPage, {
  loader as eventDetailLoader,
  action as deleteEventAction,
} from './pages/EventDetails';
import EventsPage, {loader as eventsLoader} from './pages/EventsPage';
import EventsRootLayout from './pages/EventLayout';
import HomePage from './pages/HomePage';
import NewEventPage from './pages/NewEventPage';
import RootLayout from './pages/RootLayout';
import {newEventAction as manipulateEventAction} from './components/EventForm';
import NewsletterPage, {
  action as newsletterAction,
} from './components/Newsletter';

const router = createBrowserRouter ([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {index: true, element: <HomePage />},
      {
        path: 'events',
        element: <EventsRootLayout />,
        children: [
          {
            index: true,
            element: <EventsPage />,
            loader: eventsLoader,
          },
          {
            path: ':eventId',
            id: 'event-detail',
            loader: eventDetailLoader,
            children: [
              {
                index: true,
                element: <EventDetailPage />,
                action: deleteEventAction,
              },
              {
                path: 'edit',
                element: <EditEventPage />,
                action: manipulateEventAction,
              },
            ],
          },
          {
            path: 'new',
            element: <NewEventPage />,
            action: manipulateEventAction,
          },
        ],
      },
      {
        path: 'newsletter',
        element: <NewsletterPage />,
        action: newsletterAction,
      },
    ],
  },
]);

function App () {
  return <RouterProvider router={router} />;
}

export default App;
