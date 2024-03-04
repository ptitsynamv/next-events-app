import EventList from '../components/events/EventList/EventList';
import { getFeaturedEvents } from '../helpers/api-utils';

export default function HomePage({ featuredEvents }) {
  return (
    <div>
      <EventList items={featuredEvents} />
    </div>
  );
}

export async function getStaticProps() {
  const featuredEvents = await getFeaturedEvents();

  return {
    props: { featuredEvents },
  };
}
