import Head from 'next/head';
import EventList from '../components/events/EventList/EventList';
import { getFeaturedEvents } from '../helpers/api-utils';

export default function HomePage({ featuredEvents }) {
  return (
    <div>
      <Head>
        <title>NextJS Events</title>
        <meta name="description" content="Find events"></meta>
      </Head>
      <EventList items={featuredEvents} />
    </div>
  );
}

export async function getStaticProps() {
  const featuredEvents = await getFeaturedEvents();

  return {
    props: { featuredEvents },
    revalidate: 1800,
  };
}
