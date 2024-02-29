import Link from 'next/link';
import s from './Button.module.css';

function Button(props) {
  return (
    <Link href={props.link} className={s.btn}>
      {props.children}
    </Link>
  );
}
export default Button;
