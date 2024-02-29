import s from './EventItem.module.css';
import Button from '../../ui/Button/Button';
import DateIcon from '../../icons/DateIcon/DateIcon';
import AddressIcon from '../../icons/AddressIcon/AddressIcon';
import ArrowRightIcon from '../../icons/ArrowRightIcon/ArrowRightIcon';

function EventItem(props) {
  const { title, image, date, location, id, description } = props;
  const humanReadableDate = new Date(date).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  const formattedAddress = location.replace(', ', '\n');
  const link = `/events/${id}`;

  return (
    <li className={s.item}>
      <img src={`/${image}`} alt={description} />
      <div className={s.content}>
        <div className={s.summary}>
          <h2>{title}</h2>
          <div className={s.date}>
            <DateIcon />
            <time>{humanReadableDate}</time>
          </div>
          <div className={s.address}>
            <AddressIcon />
            <address>{formattedAddress}</address>
          </div>
        </div>
        <div className={s.actions}>
          <Button link={link}>
            <span>Explore event</span>
            <span className={s.icon}>
              <ArrowRightIcon />
            </span>
          </Button>
        </div>
      </div>
    </li>
  );
}

export default EventItem;
