import Link from 'next/link';
import s from './Button.module.css';

function Button(props) {
  if (props.link) {
    return (
      <Link href={props.link} className={s.btn}>
        {props.children}
      </Link>
    );
  }
  return (
    <button className={s.btn} onClick={props.onClick}>
      {props.children}
    </button>
  );
}
export default Button;
