import { useParams } from 'react-router';

function EventDetailPage() {
  const params = useParams();
  return <h1>Events Detail Page / ID: {params.eventId}</h1>;
}

export default EventDetailPage;
