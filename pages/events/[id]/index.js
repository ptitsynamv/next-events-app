import { useRouter } from 'next/router';
import { getEventById } from '../../../dummy-data';
import { Fragment } from 'react';
import EventSummary from '../../../components/event-detail/EventSummary/EventSummary';
import EventLogistics from '../../../components/event-detail/EventLogistics/EventLogistics';
import EventContent from '../../../components/event-detail/EventContent/EventContent';
import ErrorAlert from '../../../components/ui/ErrorAlert/ErrorAlert';

export default function EventsDetailPage() {
  const router = useRouter();
  const { id } = router.query;
  const eventDetails = getEventById(id);

  if (!eventDetails) {
    return (
      <ErrorAlert>
        <p>No event found</p>
      </ErrorAlert>
    );
  }

  return (
    <Fragment>
      <EventSummary title={eventDetails.title} />
      <EventLogistics
        date={eventDetails.date}
        address={eventDetails.location}
        image={eventDetails.image}
        imageAlt={eventDetails.description}
      />
      <EventContent>
        <p>{eventDetails.description}</p>
      </EventContent>
    </Fragment>
  );
}
