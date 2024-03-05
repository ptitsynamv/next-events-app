import { useRouter } from 'next/router';
import EventList from '../../components/events/EventList/EventList';
import ResultsTitle from '../../components/events/ResultsTitle/ResultsTitle';
import Button from '../../components/ui/Button/Button';
import ErrorAlert from '../../components/ui/ErrorAlert/ErrorAlert';
import useSWR from 'swr';
import Head from 'next/head';

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function FilteredEventsPage() {
  const router = useRouter();
  const filterData = router.query.slug;
  const { data, error } = useSWR('http://localhost:3001/events', fetcher);

  let pageHeadData = (
    <Head>
      <title>Filtered event</title>
      <meta name="description" content={`List of filtered events`}></meta>
    </Head>
  );

  if (!data || !filterData) {
    return (
      <>
        {pageHeadData}
        <p className="center">Loading...</p>
      </>
    );
  }

  const [year, month] = filterData || [];
  const numYear = +year;
  const numMonth = +month;

  pageHeadData = (
    <Head>
      <title>Filtered event</title>
      <meta
        name="description"
        content={`All events for ${numMonth}/${numYear}`}
      ></meta>
    </Head>
  );

  if (isNaN(numYear) || isNaN(numMonth) || error) {
    return (
      <>
        {pageHeadData}
        <ErrorAlert>
          <p>Invalid filter</p>
        </ErrorAlert>
        <div className="center">
          <Button link="/events">Show all events</Button>
        </div>
      </>
    );
  }

  const filteredEvents = data.filter((event) => {
    const eventDate = new Date(event.date);
    return (
      eventDate.getFullYear() === numYear &&
      eventDate.getMonth() === numMonth - 1
    );
  });

  if (!filteredEvents || filteredEvents.length === 0) {
    return (
      <>
        {pageHeadData}
        <ErrorAlert>
          <p>No events found for the chosen filter!</p>
        </ErrorAlert>
        <div className="center">
          <Button link="/events">Show all events</Button>
        </div>
      </>
    );
  }

  const date = new Date(numYear, numMonth - 1);

  return (
    <>
      {pageHeadData}
      <ResultsTitle date={date} />
      <EventList items={filteredEvents}></EventList>
    </>
  );
}
