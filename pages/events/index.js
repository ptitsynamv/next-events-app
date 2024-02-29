import { getAllEvents } from '../../dummy-data';
import EventList from '../../components/events/EventList/EventList';
import EventsSearch from '../../components/events/EventsSearch/EventsSearch';
import { useRouter } from 'next/router';

export default function EventsPage() {
  const events = getAllEvents();
  const router = useRouter();

  function findEventsHandler(year, month) {
    const fullPath = `/events/${year}/${month}`;
    router.push(fullPath);
  }

  return (
    <>
      <EventsSearch onSearch={findEventsHandler} />
      <EventList items={events}></EventList>
    </>
  );
}
