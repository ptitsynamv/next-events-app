import EventItem from '../EventItem/EventItem';

function EventList(props) {
  const { items } = props;
  return (
    <ul>
      {items.map((item) => (
        <EventItem />
      ))}
    </ul>
  );
}

export default EventList;
