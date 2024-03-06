import { useContext, useRef } from 'react';
import classes from './newsletter-registration.module.css';
import NotificationContext from '../../store/notification-context';

function NewsletterRegistration() {
  const emailInputRef = useRef();
  const { showNotification } = useContext(NotificationContext);

  function registrationHandler(event) {
    event.preventDefault();
    const email = emailInputRef.current.value;
    if (email && /^\S+@\S+\.\S+$/.test(email)) {
      showNotification({
        title: 'Signing up...',
        message: 'Registering for newsletter',
        status: 'pending',
      });

      fetch('/api/email', {
        method: 'POST',
        body: JSON.stringify({ email }),
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then((res) => {
          if (res.ok) {
            return res.json();
          }
          return res.json().then((data) => {
            throw new Error(data.message);
          });
        })
        .then(() => {
          showNotification({
            title: 'Success',
            message: 'Successfully registered for newsletter',
            status: 'success',
          });
        })
        .catch((error) => {
          showNotification({
            title: 'Error',
            message: error.message,
            status: 'error',
          });
        });
    }
  }

  return (
    <section className={classes.newsletter}>
      <h2>Sign up to stay updated!</h2>
      <form onSubmit={registrationHandler}>
        <div className={classes.control}>
          <input
            ref={emailInputRef}
            type="email"
            id="email"
            placeholder="Your email"
            aria-label="Your email"
            required
          />
          <button>Register</button>
        </div>
      </form>
    </section>
  );
}

export default NewsletterRegistration;
