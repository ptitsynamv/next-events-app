import { useContext } from 'react';
import MainHeader from '../MainHeader/MainHeader';
import Notification from '../../ui/Notification/Notification';
import NotificationContext from '../../../store/notification-context';

function Layout(props) {
  const { notification } = useContext(NotificationContext);

  return (
    <>
      <MainHeader />
      <main>{props.children}</main>
      {notification && <Notification {...notification} />}
    </>
  );
}

export default Layout;
