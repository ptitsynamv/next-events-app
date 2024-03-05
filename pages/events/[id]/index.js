import { Fragment } from 'react';
import EventSummary from '../../../components/event-detail/EventSummary/EventSummary';
import EventLogistics from '../../../components/event-detail/EventLogistics/EventLogistics';
import EventContent from '../../../components/event-detail/EventContent/EventContent';
import { getFeaturedEvents, getEventById } from '../../../helpers/api-utils';
import Head from 'next/head';

export default function EventsDetailPage({ eventDetails }) {
  if (!eventDetails) {
    return (
      <div className="center">
        <p>Loading ...</p>
      </div>
    );
  }

  return (
    <Fragment>
      <Head>
        <title>{eventDetails.title}</title>
        <meta name="description" content={eventDetails.description}></meta>
      </Head>
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

export async function getStaticProps({ params: { id } }) {
  const eventDetails = await getEventById(id);
  return { props: { eventDetails }, revalidate: 300 };
}

export async function getStaticPaths() {
  const allEvents = await getFeaturedEvents();
  const paths = allEvents.map((item) => {
    return { params: { id: item.id } };
  });

  return { paths, fallback: true };
}
