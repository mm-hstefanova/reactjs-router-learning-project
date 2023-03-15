import EventForm from '../components/EventForm';
import { useRouteLoaderData } from 'react-router-dom';

function EditEventPage() {
  const data = useRouteLoaderData('event-detail');
  const event = data.event;

  // EventForm searches in the parent route for the data - EditEventPage component and we don't have loader there.
  // In order to use the data from the eventLoader, we need to use useRouteLoaderData and to give as an arg an id of the route
  return <EventForm event={event} method='patch' />;
}

export default EditEventPage;
