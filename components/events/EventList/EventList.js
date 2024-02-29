import EventItem from '../EventItem/EventItem';
import s from './EventList.module.css';

function EventList(props) {
  const { items } = props;
  return (
    <ul className={s.list}>
      {items.map((item) => (
        <EventItem key={item.id} {...item} />
      ))}
    </ul>
  );
}

export default EventList;
