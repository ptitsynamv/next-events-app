import Link from 'next/link';
import s from './MainHeader.module.css';

function MainHeader() {
  return (
    <header className={s.header}>
      <div className={s.logo}>
        <Link href="/">Next Events</Link>
      </div>
      <nav className={s.navigation}>
        <ul>
          <li>
            <Link href="/events">All events</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainHeader;
